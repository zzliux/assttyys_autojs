import { merge } from '@/common/tool';
import store, { storeCommon } from '@/system/Store/store';
import funcList from '@/common/funcListIndex';
import defaultSchemeList from '@/common/schemeList';
import helperBridge, { IhelperBridge } from '@/system/helperBridge';
import multiFindColors from '@/common/multiFindColors';
import multiDetectColors from '@/common/multiDetectColors';
import { IOcr, IOcrDetector, OcrResult } from './Ocr/IOcr';
import { mlkitOcr } from '@/system/Ocr/MlkitOcr';
import { mlkitOcr2 } from '@/system/Ocr/MlkitOcr2';
import { yunxiOcr } from '@/system/Ocr/YunxiOcr';
import { setCurrentScheme } from '@/common/tool';
import { getWidthPixels, getHeightPixels } from '@auto.pro/core';
import schemeDialog from './schemeDialog';
import drawFloaty from '@/system/drawFloaty';
import { myToast, doPush, questionSearch, search } from '@/common/toolAuto';
import { IFunc, IFuncOrigin } from '@/interface/IFunc';
import { IScheme } from '@/interface/IScheme';
import { IMultiDetectColors, IMultiFindColors } from '@/interface/IMultiColor';
import { globalRoot, globalRootType } from '@/system/GlobalStore/index';
import schedule, { Job } from '@/system/Schedule';
import { MyFloaty } from '@/system/MyFloaty';
import ncnnBgyx from '@/system/ncnn/ncnnBgyx';
import { commonConfigVal } from '@/common/commonConfig';

/**
 * 脚本对象，一个程序只能有一个
 */
export class Script {
	runThread: any; // 脚本运行线程
	runCallback: Function; // 运行后回调，一般用于修改悬浮样式
	stopCallback: Function; // 停止后回调，异常停止、手动停止，在停止后都会调用
	scheme: IScheme; // 运行的方案
	schemeHistory: IScheme[]; // 历史运行方案，run时push进去，stop清空，stop(true)不清
	funcMap: { [key: number]: IFunc | IFuncOrigin }; // funcList的Map形式，下标为id，值为对应的fun元素
	scheduleMap: any;  // 定时任务实例存放Map
	multiFindColors: IMultiFindColors; // 多点找色用的，提前初始化，减轻运行中计算量
	multiDetectColors: IMultiDetectColors; // 多点比色用的，提前初始化，减轻运行中的计算量
	hasRedList: boolean; // KeepScreen(true)时会初始化redList，如果没有初始化的话这个值为false，方便在有需要的时候初始化redlist且不重复初始化
	runDate: Date; // 运行启动时间
	currentDate: Date; // 最近一次功能执行时间
	lastFuncDateTime: Date; // 上次功能执行时间
	ocrDetector: IOcrDetector; // yunxi的ocr
	ocr: IOcr;
	helperBridge: IhelperBridge; // IhelperBridge;
	job: Job;
	schedule: typeof schedule;
	ncnnBgyx = ncnnBgyx;
	isPause: boolean;

	/**
	 * 运行次数，下标为funcList中的id，值为这个func成功执行的次数；
	 * 成功执行：多点比色成功或operatorFun返回为true
	 */
	runTimes: Record<string, number>;
	lastFunc: number; // 最后执行成功的funcId
	global: globalRootType; // 每次启动重置为空对象，用于功能里面存变量

	/**
	 * @description 方案运行中参数
	 */
	runtimeParams: Record<string, unknown> | null;

	// 设备信息
	device: any;
	storeCommon: any;

	/**
	 * 发起消息推送
	 * @param {Script} thisScript
	 * @param options
	 */
	doPush: (thisScript: Script, options: {
		text: string,
		before?: () => void,
		after?: () => void
	}) => void;

	/**
	 * @description 消息提示
	 * @param {string}str
	 */
	myToast: (str: string, duration?: number) => void;

	constructor() {
		this.runThread = null;
		this.runCallback = null;
		this.stopCallback = null;
		this.scheme = null;
		this.schemeHistory = [];
		this.funcMap = null;
		this.scheduleMap = null;
		this.multiFindColors = null;
		this.hasRedList = false;
		this.runDate = null;
		this.currentDate = null;
		this.lastFuncDateTime = null;
		this.ocrDetector = null;
		this.runtimeParams = null;

		this.runTimes = {};
		this.lastFunc = null; // 最后执行成功的funcId
		this.global = merge({}, globalRoot); // 每次启动重置为空对象，用于功能里面存变量
		this.device = {
			width: getWidthPixels(),
			height: getHeightPixels()
		};
		this.helperBridge = helperBridge;
		this.storeCommon = storeCommon;
		this.doPush = doPush;
		this.myToast = myToast;
		this.schedule = schedule;
	}

	initOcrIfNeeded() {
		const storeSettings = storeCommon.get('settings', {});
		if (!this.ocrDetector || storeSettings.ocrType !== this.ocr.typeName) {
			if (storeSettings.ocrType === 'MlkitOcr') {
				this.ocrDetector = mlkitOcr.prepare();
				this.ocr = mlkitOcr;
			} else if (storeSettings.ocrType === 'MlkitOcr2') {
				this.ocrDetector = mlkitOcr2.prepare();
				this.ocr = mlkitOcr2;
			} else if (storeSettings.ocrType === 'YunxiOcr') {
				this.ocrDetector = yunxiOcr.prepare();
				this.ocr = yunxiOcr;
			}
		}
	}

	// 获取ocr对象，重复调用仅在第一次进行实例化
	getOcrDetector(): IOcrDetector {
		this.initOcrIfNeeded();
		return this.ocrDetector;
	}

	getOcr(): IOcr {
		this.initOcrIfNeeded();
		return this.ocr;
	}

	findText(text: string, timeout: number, region: Array<number>, textMatchMode: string): Array<OcrResult> {
		this.initOcrIfNeeded();
		return this.getOcr().findText(function () {
			script.keepScreen(); // 更新图片
			return script.helperBridge.helper.GetBitmap(); // 返回bmp
		}, text, timeout, region, textMatchMode);
	}

	findNum(timeout: number, region: Array<number>): Array<OcrResult> {
		this.initOcrIfNeeded();
		return this.getOcr().findText(function () {
			script.keepScreen(); // 更新图片
			return script.helperBridge.helper.GetBitmap(); // 返回bmp
		}, '\\d+', timeout, region, '包含').filter(item => {
			item.label = item.label
				.replace(/[sS]/g, '5')
				.replace(/[oO]/g, '0')
				.replace(/[zZ]/g, '2');
			if (item.label.match(/^\d+$/)) {
				return true;
			}
			return false;
		});
	}

	/**
	 * 先比色，再findText
	 */
	findTextWithCompareColor(text: string, timeout: number, region: Array<number>, textMatchMode: string, currFunc: IFunc): Array<OcrResult> {
		this.initOcrIfNeeded();
		const self = this;
		const startTime = new Date().getTime();
		// eslint-disable-next-line no-constant-condition
		while (true) {
			// 先判断场景，场景不对就直接返回空
			if (!this.oper(currFunc)) return [];

			// 超时时间设置为0，表示找一次就行，由外部手工控制循环
			const result = this.getOcr().findText(function () {
				self.keepScreen(); // 更新图片
				return self.helperBridge.helper.GetBitmap(); // 返回bmp
			}, text, 0, region, textMatchMode);

			if (result.length !== 0) {
				return result;
			}
			// 超时退出
			if (new Date().getTime() - startTime > timeout) {
				return [];
			}
			// 使用循环延时作为sleep，防止一直在执行ocr导致cpu占用过高
			sleep(this.scheme.commonConfig.loopDelay as number);
		}
	}

	findTextByOcrResult(text: string, ocrResult: Array<OcrResult>, textMatchMode: string, similarityRatio?: number): Array<OcrResult> {
		this.initOcrIfNeeded();
		return this.getOcr().findTextByOcrResult(text, ocrResult, textMatchMode, similarityRatio);
	}

	/**
	 * 截图，mode为true时表示对红色通过作为下标进行初始化，但执行需要一定时间，
	 * 对截图进行一次初始化后可大幅提高多点找色效率，通常初始化一次红色通道后进行多次多点找色
	 * 仅使用多点比色时mode给false或不传
	 * @param {Boolean} mode
	 */
	keepScreen(mode?: boolean) {
		helperBridge.helper.KeepScreen(mode || false);
		if (mode) {
			this.hasRedList = true;
		} else {
			this.hasRedList = false;
		}
	}

	/**
	 * 初始化红色通道
	 */
	initRedList() {
		if (!this.hasRedList) {
			helperBridge.helper.GetRedList();
			this.hasRedList = true;
		}
	}

	/**
	 * 设置启动后回调
	 * @param {Function} callback
	 */
	setRunCallback(callback: Function) {
		this.runCallback = callback;
	}

	/**
	 * 设置停止后回调
	 * @param {Function} callback
	 */
	setStopCallback(callback: Function) {
		this.stopCallback = () => {
			callback();
		};
	}

	/**
	 * 根据scheme获取Funclist，Funclist中desc和oper相关坐标根据开发分辨率自动转换成运行分辨率
	 * @param {Scheme} scheme
	 * @returns
	 */
	getFuncList(scheme: IScheme): IFunc[] {
		const retFunclist = [];
		if (!this.funcMap) {
			this.funcMap = {};
			funcList.forEach(item => this.funcMap[item.id] = item);
		}
		for (let i = 0; i < scheme.list.length; i++) {
			const thisFuncList = this.funcMap[scheme.list[i]];
			if (!thisFuncList) continue;
			const operator = thisFuncList.operator;
			if (!thisFuncList.transed && operator) {
				for (let k = 0; k < operator.length; k++) {
					if (operator[k].desc) {
						if (typeof operator[k].desc === 'string') {
							try {
								operator[k].desc = this.multiDetectColors[operator[k].desc as string].desc;
							} catch (e) {
								console.error(`${operator[k].desc}未在multiDetectColors定义`);
								throw e;
							}
						} else {
							// if (operator[k]?.desc?.length >= 3) {
							operator[k].desc = helperBridge.helper.GetCmpColorArray(operator[k].desc[0], operator[k].desc[1], operator[k].desc[2]);
							// }
						}
					}
					if (operator[k].oper) {
						operator[k].oper = helperBridge.regionClickTrans(operator[k].oper);
					}
					if (operator[k].operStepRandom) {
						for (let m = 0; m < operator[k].operStepRandom.length; m++) {
							operator[k].operStepRandom[m] = helperBridge.regionClickTrans(operator[k].operStepRandom[m]);
						}
					}
				}
				thisFuncList.transed = true;
			}
			retFunclist.push(thisFuncList);
		}
		return retFunclist;
	}

	/**
	 * 将funcList中operator里面的desc和oper转换为适用当前正在分辨率的坐标
	 */
	initFuncList() {
		this.scheme = store.get('currentScheme', null);
		if (null === this.scheme) return;
		this.scheme.funcList = this.getFuncList(this.scheme);
	}

	// getScheduleJobInstance(key) {
	//     if (!this.scheduleMap) {
	//         this.scheduleMap = [];
	//     }
	//     return this.scheduleMap.find(item => item.key === key);
	// };

	// setScheduleJobInstance(key, scheduleJobInstance) {
	//     if (!this.scheduleMap) {
	//         this.scheduleMap = [];
	//     }
	//     this.scheduleMap.push({
	//         key: key,
	//         instance: scheduleJobInstance
	//     });
	// };

	/**
	 * 根据 src\common\multiDetectColors.ts 初始化多点比色数组，相关坐标根据开发分辨率自动转换成运行分辨率
	 */
	initMultiDetectColors() {
		const thisMultiDetectColor = {};
		for (const key in multiDetectColors) {
			const { desc } = multiDetectColors[key];
			thisMultiDetectColor[key] = {
				desc: helperBridge.helper.GetCmpColorArray(desc[0], desc[1], desc[2])
			};
		}
		this.multiDetectColors = thisMultiDetectColor;
	}

	/**
	 * 根据 src\common\multiFindColors.ts 初始化多点找色数组，相关坐标根据开发分辨率自动转换成运行分辨率
	 */
	initMultiFindColors() {
		const thisMultiFindColor = {};
		for (const key in multiFindColors) {
			thisMultiFindColor[key] = {
				region: [0, 0, this.device.width, this.device.height],
				desc: []
			};
			for (const desc of multiFindColors[key].desc) {
				thisMultiFindColor[key].desc.push(this.helperBridge.helper.GetFindColorArray(desc[0], desc[1], desc[2]));
			}
			if (multiFindColors[key].region) {
				const sr = this.helperBridge.getHelper(multiFindColors[key].region[1], multiFindColors[key].region[2]).GetPoint(multiFindColors[key].region[3], multiFindColors[key].region[4], multiFindColors[key].region[0]);
				const er = this.helperBridge.getHelper(multiFindColors[key].region[1], multiFindColors[key].region[2]).GetPoint(multiFindColors[key].region[5], multiFindColors[key].region[6], multiFindColors[key].region[0]);
				thisMultiFindColor[key].region = [sr.x, sr.y, er.x, er.y];
			}
			if (multiFindColors[key].similar) {
				thisMultiFindColor[key].similar = multiFindColors[key].similar;
			}
		}
		this.multiFindColors = thisMultiFindColor;
	}

	/**
	 * 执行多点找色
	 * @param {String} key src\common\multiColors.js的key
	 * @param {Region} inRegion 多点找色区域
	 * @param {Boolean} multiRegion 给true的话表示inRegion为region的数组
	 * @returns
	 */
	findMultiColor(key: string, inRegion?: any, multiRegion?: boolean, noLog?: boolean) {
		this.initRedList();
		if (!multiRegion) {
			const region = inRegion || this.multiFindColors[key].region;
			const desc = this.multiFindColors[key].desc;
			const similar = this.multiFindColors[key].similar || this.scheme.commonConfig.multiColorSimilar
			for (let i = 0; i < desc.length; i++) {
				const item = desc[i];
				const point = this.helperBridge.helper.FindMultiColor(region[0], region[1], region[2], region[3], item, similar, true);
				if (point.x !== -1) {
					if (!noLog) {
						console.log(`[${key}]第${i}个查找成功， 坐标为：(${point.x}, ${point.y})`);
					}
					if (drawFloaty.instacne && item) {
						const toDraw = item.map(kk => {
							return {
								color: 'green',
								region: [point.x + kk[0] - 5, point.y + kk[1] - 5, point.x + kk[0] + 5, point.y + kk[1] + 5]
							}
						});
						toDraw[0].color = 'orange';
						toDraw[0].region = [point.x - 5, point.y - 5, point.x + 5, point.y + 5];
						drawFloaty.draw(toDraw, 200);
					}
					return point;
				}
			}
		} else {
			for (const inRegion2 of inRegion) {
				const region = inRegion2;
				const desc = this.multiFindColors[key].desc;
				const similar = this.multiFindColors[key].similar || this.scheme.commonConfig.multiColorSimilar
				for (let i = 0; i < desc.length; i++) {
					const item = desc[i];
					const point = this.helperBridge.helper.FindMultiColor(region[0], region[1], region[2], region[3], item, similar, true);
					if (point.x !== -1) {
						if (!noLog) {
							console.log(`[${key}]第${i}个查找成功， 坐标为：(${point.x}, ${point.y})`);
						}
						if (drawFloaty.instacne && item) {
							const toDraw = item.map(kk => {
								return {
									color: 'green',
									region: [point.x + kk[0] - 5, point.y + kk[1] - 5, point.x + kk[0] + 5, point.y + kk[1] + 5]
								}
							});
							toDraw[0].color = 'orange';
							toDraw[0].region = [point.x - 5, point.y - 5, point.x + 5, point.y + 5];
							drawFloaty.draw(toDraw, 200);
						}
						return point;
					}
				}
			}
		}
		return null;
	}

	/**
	* 执行多点找色(返回所有点坐标)
	* @param {String} key src\common\multiColors.js的key
	* @param {Region} inRegion 多点找色区域
	* @returns
	*/
	findMultiColorEx(key, inRegion?): Point[] {
		this.initRedList();
		const region = inRegion || this.multiFindColors[key].region;
		const desc = this.multiFindColors[key].desc;
		const similar = this.multiFindColors[key].similar || this.scheme.commonConfig.multiColorSimilar;
		const ret = [];
		for (let i = 0; i < desc.length; i++) {
			const item = desc[i];
			const pointAll = this.helperBridge.helper.FindMultiColorEx(region[0], region[1], region[2], region[3], item, similar, true);
			for (let j = 0; j < pointAll.size(); j++) {
				const point = pointAll.get(j);
				ret.push(point);
				if (drawFloaty.instacne) {
					const toDraw = item.map(kk => {
						return {
							color: 'green',
							region: [point.x + kk[0] - 5, point.y + kk[1] - 5, point.x + kk[0] + 5, point.y + kk[1] + 5]
						}
					});
					toDraw[0].color = 'orange';
					toDraw[0].region = [point.x - 5, point.y - 5, point.x + 5, point.y + 5];
					drawFloaty.draw(toDraw, 400);
				}
			}
			if (pointAll.size() > 0) {
				console.log(`[${key}]第${i}个EX查找成功：${pointAll}`);
			}
		}

		// 过滤位置接近的结果
		const ret2 = [];
		for (let i = 0; i < ret.length; i++) {
			let flag = true;
			const p1 = ret[i];
			for (let j = i + 1; j < ret.length; j++) {
				const p2 = ret[j];
				// 两个点的距离小于30px表示相同点，过滤
				if (Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)) < 30) {
					flag = false;
					break;
				}
			}
			if (flag) {
				ret2.push(p1);
			}
		}
		return ret2;
	}



	/**
	 * 执行多点找色，直到成功为止，返回多点找色坐标
	 * @param {String} key src\common\multiColors.js的key
	 * @param {Integer} timeout 超时时间(ms)
	 * @param {inRegion} inRegion 多点找色区域
	 * @returns
	 */
	findMultiColorLoop(key, timeout, inRegion) {
		let times = Math.round(timeout / +this.scheme.commonConfig.loopDelay);
		while (times--) {
			this.keepScreen(true);
			const point = this.findMultiColor(key, inRegion, false);
			if (point) {
				return point;
			}
			sleep(+this.scheme.commonConfig.loopDelay);
		}
		return null;
	}

	/**
	 * 多点比色，直到成功为止
	 * @param {Desc} desc
	 * @param {Integer} timeout
	 * @param {Integer} sign
	 * @returns
	 */
	compareColorLoop(desc, timeout: number, sign?: number) {
		/**
		 * 条件循环多点比色
		 *
		 * @param description: 色组描述
		 * @param sim:         相似度
		 * @param offset:      偏移查找
		 * @param timeout:     超时时间
		 * @param timelag:     间隔时间
		 * @param sign:        跳出条件,0为比色成功时返回,1为比色失败时返回
		 */
		return this.helperBridge.helper.CompareColorExLoop(desc, this.scheme.commonConfig.colorSimilar, true, timeout, this.scheme.commonConfig.loopDelay, sign || 0);
	}

	/**
	 * 运行脚本
	 * @returns
	 */
	run() {
		this.setCurrentScheme();
		return this._run();
	}

	runWithJob(job: Job): void {
		return this._run(job);
	}

	/**
	 * 运行脚本，内部接口
	 * @returns
	 */
	_run(job?: Job): void {
		if (this.runThread) return;
		const self = this;
		try {
			this.initFuncList();
			this.initMultiFindColors();
			this.runDate = new Date();
			this.currentDate = new Date();
			this.runTimes = {};
			if (this.isPause) {
				myToast(`继续方案[${this.scheme.schemeName}]`);
			} else {
				myToast(`运行方案[${this.scheme.schemeName}]`);
			}
			if (!this.isPause) {
				this.global = merge({}, globalRoot);
				this.job = job;
			}
			this.isPause = false;
			if (null === this.scheme) {
				if (typeof self.stopCallback === 'function') {
					self.stopCallback();
				}
				if (this.job) {
					this.job.doDone();
				}
				return;
			}
		} catch (e) {
			console.error(e);
			if (typeof self.stopCallback === 'function') {
				self.stopCallback();
			}
			if (this.job) {
				this.job.doDone();
			}
			return;
		}
		// test start
		// let img = images.captureScreen();
		// img.saveTo('/sdcard/testimg.png');
		// img.recycle();
		// test end
		this.schemeHistory.push(this.scheme);
		globalThis.runThread = threads.start(function () {
			try {
				// eslint-disable-next-line no-constant-condition
				while (true) {
					self.keepScreen(false);
					for (let i = 0; i < self.scheme.funcList.length; i++) {
						if (self.oper(self.scheme.funcList[i], undefined)) {
							self.currentDate = new Date();
							break;
						}
					}
					sleep(+self.scheme.commonConfig.loopDelay);
				}
			} catch (e) {
				self.runThread = null;
				if (e.toString().indexOf('com.stardust.autojs.runtime.exception.ScriptInterruptedException') === -1) {
					console.error($debug.getStackTrace(e));
				}
				if (typeof self.stopCallback === 'function') {
					self.stopCallback();
				}
				if (this.job) {
					this.job.doDone();
				}
			}
		});
		if (typeof this.runCallback === 'function') {
			this.runCallback();
		}
	}

	/**
	 * 根据当前界面判断自动运行的脚本
	 * 若只有一个方案存在功能比色成功的话直接运行这个方案
	 * 若有多个方案，可运行的方案通过悬浮列表进行选择
	 * 若没有则提示无法识别当前界面
	 * @param {MyFloaty} myfloaty
	 */
	autoRun(myfloaty: MyFloaty) {
		const self = this;
		self.keepScreen(false);
		threads.start(function () {
			const staredSchemeList = store.get('schemeList', defaultSchemeList).filter(item => {
				return item.star // && item.id != 99;
			});
			const canRunSchemeList = [];
			const funcDescCess = {};
			for (let j = 0; j < staredSchemeList.length; j++) {
				const tarFuncList = self.getFuncList(staredSchemeList[j]);
				let flag = false;
				for (let i = 0; i < tarFuncList.length; i++) {
					if (typeof funcDescCess[tarFuncList[i].id] !== 'undefined') {
						flag = funcDescCess[tarFuncList[i].id];
						if (flag) {
							break;
						}
					} else {
						const cmcfg = Object.assign({}, commonConfigVal, staredSchemeList[j]?.commonConfig || {});
						flag = self.desc(tarFuncList[i], cmcfg);
						funcDescCess[tarFuncList[i].id] = flag;
						if (flag) {
							break;
						}
					}
				}
				if (flag) {
					canRunSchemeList.push(staredSchemeList[j]);
				}
			}
			if (canRunSchemeList.length === 0) {
				myToast('无法识别当前界面');
			} else if (canRunSchemeList.length === 1) {
				self.setCurrentScheme(canRunSchemeList[0].schemeName);
				setTimeout(() => {
					self.run();
				}, 500);
			} else {
				schemeDialog.show(myfloaty, canRunSchemeList);
			}
		});
	}

	/**
	 * 停止脚本
	 */
	stop() {
		events.broadcast.emit('SCRIPT_STOP', '');
	}

	/**
	 * 停止脚本，内部接口
	 */
	_stop(flag?: boolean) {
		if (null !== globalThis.runThread) {
			if (typeof this.stopCallback === 'function') {
				this.stopCallback();
			}
			if (!flag) {
				this.schemeHistory = [];
			}
			log(this.isPause)
			console.log('job:' + this.job?.name);
			if (!flag && this.job && !this.isPause) {
				this.job.doDone();
			}
			log(this.isPause)
			globalThis.runThread && globalThis.runThread.interrupt();
		}
		globalThis.runThread = null;
	}

	/**
	 * 重新运行，一般在运行过程中通过setCurrenScheme切换方案后调用，停止再运行
	 */
	rerun(schemeName?: unknown, params?: Record<string, unknown>) {
		if ('__停止脚本__' === schemeName) {
			this.doPush(this, {
				text: `[${this.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`,
				before() { myToast('脚本即将停止，正在上传数据'); }
			});
			this.stop();
			sleep(3000);
			return;
		} else if ('__返回上个方案__' === schemeName) {
			if (this.schemeHistory.length) {
				if (this.schemeHistory.length > 1) {
					const lastSchemeName = this.schemeHistory[this.schemeHistory.length - 2].schemeName
					this.setCurrentScheme(lastSchemeName as string, params);
					this.myToast(`返回上个方案为[${schemeName}]`);
				} else {
					this.doPush(this, {
						text: `[${this.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`
					});
					myToast('无法查询到上个方案, 可能是此方案为第一个方案');
					this.stop();
					sleep(3000);
					return;
				}
			}
		} else if (schemeName) {
			this.setCurrentScheme(schemeName as string, params);
			this.myToast(`切换方案为[${schemeName}]`);
		}
		events.broadcast.emit('SCRIPT_RERUN', '');
	}

	rerunWithJob(job: Job): void {
		this._stop();
		setTimeout(() => {
			this._run(job);
		}, 510);
	}

	// 暂停
	pause() {
		this.isPause = true;
		this.stop();
	}
	/**
	 * 关键函数，操作函数
	 * 针对func进行多点比色，成功的话按顺序点击oper数组
	 * 若operatorFunc为函数，operator则不执行，调用operatorFunc函数
	 * @param {*} currFunc
	 * @param {*} retest 重试时间
	 */
	oper(currFunc: IFunc, retest?: number) {
		const operator = currFunc.operator; // 需要计算的坐标通过operater传进去使用
		const operatorFunc = currFunc.operatorFunc;
		if (typeof operatorFunc === 'function') {
			if (operatorFunc.call(null, this, operator)) {
				console.log('oper_success: [function] currFunc.name' + currFunc.name);
				return true;
			}
		} else {
			for (let id = 0; id < operator.length; id++) {
				const item = operator[id];
				let rs;
				if (item.desc && item.desc.length) {
					if (typeof item.desc === 'string') {
						rs = helperBridge.helper.CompareColorEx(this.multiDetectColors[item.desc].desc, this.scheme.commonConfig.colorSimilar, false);
					} else {
						rs = helperBridge.helper.CompareColorEx(item.desc, this.scheme.commonConfig.colorSimilar, false);
					}
				} else {
					rs = true;
				}
				if (rs) {
					if (drawFloaty.instacne && item.desc) {
						let thisDesc: any = item.desc;
						if (typeof item.desc === 'string') {
							thisDesc = this.multiDetectColors[item.desc as string].desc;
						}
						const toDraw = [...thisDesc.map(kk => {
							return {
								color: 'green',
								region: [kk[0] - 5, kk[1] - 5, kk[0] + 5, kk[1] + 5]
							}
						})];

						drawFloaty.draw(toDraw, 200);
					}
					retest = retest || item.retest || undefined;
					if (retest && retest !== -1) {
						sleep(retest);
						this.keepScreen(false);
						return this.oper(currFunc, -1);
					}
					if (!!currFunc.id /* && this.lastFunc !== (currFunc.id + '_' + id) */ && !item.notForCnt) {
						// 增加判断，7.5秒内执行的功能一样的话不计次
						if ((this.lastFunc === currFunc.id && new Date().getTime() - (this.lastFuncDateTime || new Date()).getTime() > 7500) || this.lastFunc !== currFunc.id) {
							if (!this.runTimes[currFunc.id]) {
								this.runTimes[currFunc.id] = 0;
							}
							this.runTimes[currFunc.id]++;
							this.lastFunc = currFunc.id;
						}
						this.lastFuncDateTime = new Date();
					}

					if (item.operStepRandom) {
						if (currFunc.id)
							console.log(`oper_success：[item.operStepRandom] currFunc.name:${currFunc.name} currFunc.id:${currFunc.id} lastFunc:${this.lastFunc} id:${id} oper:${item.oper}`);
						helperBridge.regionStepRandomClick(item.operStepRandom, Math.floor(this.scheme.commonConfig.afterClickDelayBase as number), Math.floor(this.scheme.commonConfig.afterClickDelayRandom as number));
					} else if (item.oper) {
						if (currFunc.id)
							console.log(`oper_success：[item.oper] currFunc.name:${currFunc.name} currFunc.id:${currFunc.id} lastFunc:${this.lastFunc} id:${id} oper:${item.oper}`);
						helperBridge.regionClick(item.oper, Math.floor(this.scheme.commonConfig.afterClickDelayBase as number || 0), Math.floor(this.scheme.commonConfig.afterClickDelayRandom as number));
					} else {
						if (currFunc.id)
							console.log(`oper_success: [] currFunc.name:${currFunc.name} currFunc.id:${currFunc.id} lastFunc:${this.lastFunc} id:${id} oper:${item.oper}`);
					}
					return true;
				}
			}
		}
	}

	/**
	 * 根据func中的desc进行多点比色
	 * @param {*} currFunc
	 */
	desc(currFunc: IFunc, commonConfig) {
		const operator = currFunc.operator || []; // 需要计算的坐标通过operater传进去使用
		for (let id = 0; id < operator.length; id++) {
			const item = operator[id];
			if (item.desc) {
				let res = null;
				if (typeof item.desc === 'string') {
					res = helperBridge.helper.CompareColorEx(this.multiDetectColors[item.desc].desc, commonConfig.colorSimilar, false);
					if (res) {
						console.log(`desc_sucess：[string] currFunc.name:${currFunc.name} currFunc.id:${currFunc.id} id:${id}`);
					}
				} else if (item.desc.length > 3) {
					res = helperBridge.helper.CompareColorEx(item.desc, commonConfig.colorSimilar, false);
					if (res) {
						console.log(`desc_sucess：[array] currFunc.name:${currFunc.name} currFunc.id:${currFunc.id} id:${id}`);
					}
					if (item.desc[0][0] === -1) {
						res = true;
					}
				}
				if (res) return true;
			}
		}
		return false;
	}

	setCurrentScheme(schemeName?: string, params?: Record<string, unknown>) {
		if (params) {
			this.runtimeParams = params;
		} else {
			this.runtimeParams = null;
		}
		if (!schemeName) {
			const { schemeName: sName } = store.get('currentScheme', {});
			if (!sName) return;
			schemeName = sName;
		}
		return setCurrentScheme(schemeName, store);
	}

	search(list: Record<string, any>[], prop: string, str: string) {
		return search(list, prop, str)
	}

	questionSearch(str: string) {
		return questionSearch(str);
	}

	launchRelatedApp() {
		const storeSettings = storeCommon.get('settings', {});
		if (storeSettings.defaultLaunchAppList && storeSettings.defaultLaunchAppList.length) {
			const packageName = storeSettings.defaultLaunchAppList[0]
			console.log(`正在启动应用${packageName}`);
			app.launchPackage(packageName);
		} else {
			myToast('未配置关联应用，不启动');
		}
	}

	stopRelatedApp() {
		const storeSettings = storeCommon.get('settings', {});
		if (storeSettings.defaultLaunchAppList && storeSettings.defaultLaunchAppList.length) {
			let am = null;
			if (storeSettings.kill_related_app_mode === 'android api') {
				// // 先跳到自己的界面
				// const i = new android.content.Intent(activity, activity.class);
				// i.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
				// i.addFlags(android.content.Intent.FLAG_ACTIVITY_SINGLE_TOP);
				// context.startActivity(i);
				// 跳到桌面
				context.startActivity(app.intent({
					action: android.content.Intent.ACTION_MAIN,
					category: android.content.Intent.CATEGORY_HOME,
					flags: ['ACTIVITY_NEW_TASK']
				}));
				sleep(2000);
				// 目标进程就变成后台了，就可以通过杀后台进程实现杀应用
				am = context.getSystemService(context.ACTIVITY_SERVICE);
			}

			const ret = [];
			storeSettings.defaultLaunchAppList.forEach(packageName => {
				if (am) {
					am.killBackgroundProcesses(packageName);
				} else {
					$shell(`am force-stop ${packageName}`, true);
				}
				myToast(`杀应用${packageName}`);
				ret.push(packageName);
				sleep(100);
			});
			sleep(500);
			return ret;
		} else {
			myToast('未配置关联应用，不结束');
			return [];
		}
	}

	regionClick(oper, baseSleep?: number, randomSleep?: number) {
		baseSleep = baseSleep || Math.floor(this.scheme.commonConfig.afterClickDelayBase as number || 0);
		randomSleep = randomSleep || Math.floor(this.scheme.commonConfig.afterClickDelayRandom as number || 0)
		this.helperBridge.regionClick(oper, baseSleep, randomSleep);
	}

	regionSwipe(operSrc, operDest, duration, baseSleep?, randomSleep?) {
		baseSleep = baseSleep || this.scheme.commonConfig.afterClickDelayBase || 0;
		randomSleep = randomSleep || this.scheme.commonConfig.afterClickDelayRandom || 0
		this.helperBridge.regionSwipe(operSrc, operDest, duration, baseSleep, randomSleep);
	}

	regionBezierSwipe(operSrc, operDest, duration, baseSleep?, randomSleep?, type?) {
		baseSleep = baseSleep || this.scheme.commonConfig.afterClickDelayBase || 0;
		randomSleep = randomSleep || this.scheme.commonConfig.afterClickDelayRandom || 0
		this.helperBridge.regionBezierSwipe(operSrc, operDest, duration, baseSleep, randomSleep, type)
	}
}

const script = new Script();

events.broadcast.on('SCRIPT_STOP', () => {
	script._stop();
});

events.broadcast.on('SCRIPT_RUN', () => {
	script._run();
});

events.broadcast.on('SCRIPT_RERUN', () => {
	script._stop(true);
	setTimeout(() => {
		script._run(script.job);
	}, 510);
});

export default script;
