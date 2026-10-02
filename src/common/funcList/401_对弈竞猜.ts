import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

const left = 0;
const center = 1;
const right = 2;

// ========== 白名单：与 config 里的10个博主完全一致 ==========
const allBosses: string[] = [
	'面灵气喵',
	'yys查查尔',
	'槐下30',
	'阴阳师手游攻略墙',
	'阴阳师攻略组',
	'yys雯雯',
	'七面相',
	'春秋霸主徐清林',
	'晨时微凉',
	'梅布斯尼',
];

export class Func401 implements IFuncOrigin {
	id = 401;
	name = '对弈竞猜';
	desc = '对弈竞猜选边';
	config = [{
		desc: '配置',
		config: [{
			name: 'follow_whose',
			desc: '跟押哪位大佬',
			type: 'list',
			data: ['全部', ...allBosses],
			default: '面灵气喵',
		}, {
			name: 'data_source',
			desc: '数据源 (rss/api)',
			type: 'list',
			data: ['rss', 'api'],
			default: 'rss',
		}],
	}];

	operator: IFuncOperatorOrigin[] = [
		{ desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰' },
		{ desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰' },
		{
			desc: [1280, 720, [
				[center, 325, 301, 0xc69f73],
				[center, 365, 361, 0x262421],
				[right, 1121, 337, 0x282521],
				[right, 1141, 343, 0xb0805a],
				[right, 1060, 648, 0x6e3824],
			]],
			oper: [
				[center, 1280, 720, 247, 265, 432, 449, 1000],
				[center, 1280, 720, 1090, 309, 1219, 419, 1000],
				[center, 1280, 720, 851, 580, 966, 627, 1000],
				[center, 1280, 720, 1007, 416, 1109, 494, 1000],
				[center, 1280, 720, 682, 408, 832, 448, 1000],
				[left, 1280, 720, 6, 7, 60, 54, 2000],
			]
		},
		{
			desc: [1280, 720, [
				[right, 728, 294, 0xedce97],
				[center, 386, 349, 0xac7d56],
				[right, 1164, 406, 0xb48459],
				[right, 795, 498, 0x43241f],
				[right, 700, 506, 0x3f231e],
			]],
			oper: [[center, 1280, 720, 721, 406, 782, 438, 1000]]
		},
		{
			desc: [1280, 720, [
				[center, 360, 412, 0xb4885c],
				[right, 700, 506, 0x8e6958],
				[right, 793, 522, 0x321e1e],
				[right, 1136, 406, 0xb07f55],
				[right, 736, 36, 0x3a2321],
			]],
			oper: [[center, 1280, 720, 770, 484, 819, 532, 1000]]
		},
		{
			oper: [
				[center, 1280, 720, 240, 456, 433, 516, 1000],
				[center, 1280, 720, 1054, 456, 1254, 527, 1000],
			]
		}
	];

	operatorFunc = (thisScript: Script, thisOperator: IFuncOperator[]): boolean => {
		console.log('[Func401] ===== operatorFunc 开始 =====');
		try {
			if (thisScript.oper({ id: 401, name: '对弈竞猜_杂项', operator: [thisOperator[4], thisOperator[3]] })) {
				return true;
			}

			if (thisScript.oper({ id: 401, name: '庭院内', operator: [thisOperator[0], thisOperator[1]] })) {
				let point = null;
				let cnt = 3;
				while (cnt-- > 0 && !point) {
					sleep(80);
					thisScript.keepScreen(true);
					point = thisScript.findMultiColor('对弈竞猜');
				}
				if (!point) point = thisScript.findMultiColor('右边侧栏下一页图标');
				if (point) {
					const oper = [[point.x - 5, point.y - 5, point.x + 5, point.y + 5, 200]];
					thisScript.regionClick(oper);
					sleep(1400);
					return true;
				}
			}

			if (thisScript.oper({ id: 401, name: '对弈竞猜_选边', operator: [{ desc: thisOperator[2].desc }] })) {
				const thisconf = thisScript.scheme.config['401'];
				const followWhose = (thisconf.follow_whose as string) || '面灵气喵';
				const dataSource = (thisconf.data_source as string) || 'rss';

				if (dataSource === 'rss') {
					if (typeof this.doBetByRss === 'function') return this.doBetByRss(thisScript, thisOperator, followWhose);
					return false;
				} else {
					// ✅ 同步调用，无 .then()
					if (typeof this.doBetByApi === 'function') {
						this.doBetByApi(thisScript, thisOperator, followWhose);
						return true;
					}
					return false;
				}
			}
		} catch (e) {
			console.log('_401脚本停止', e);
		}
		return false;
	};

	doBetByRss(thisScript: Script, thisOperator: IFuncOperator[], followWhose: string): boolean {
		const rssUrlMap: Record<string, string> = {
			'面灵气喵': 'https://rsshub.zzliux.cn/163/ds/462382f1127b46c5add1185d88f0ea40',
			'yys查查尔': 'https://rsshub.zzliux.cn/163/ds/d9dc2a75497c4a91b2db1e909a36544d',
			'槐下30': 'https://rsshub.zzliux.cn/163/ds/a9724e98c1cb4a4e931ebc3f467ea73d',
		};
		const rssUrl = rssUrlMap[followWhose];
		if (!rssUrl) return this.doBetByRss(thisScript, thisOperator, '面灵气喵');

		const now = new Date();
		const h = now.getHours();
		let nextH = Math.floor(h / 2) * 2 + '';
		if (nextH.length === 1) nextH = '0' + nextH;

		try {
			const res = http.get(rssUrl) as any;
			if (!res || !res.body) {
				console.log('[Func401][RSS] ❌ 接口无响应，60s后重试');
				thisScript.myToast(`获取${followWhose}押注信息失败(无响应)，1分钟后再次获取`);
				sleep(60000);
				return true;
			}
			const str = res.body.string();
			const str2 = (str.match(/<item[\s\S\n]+?<description>([\s\S\n]+?)<\/description>/g) || [])
				.filter((o: string) => !o.match(/体验服/))
				.slice(0, 5)
				.join('');

			console.log('[Func401][RSS] 清洗后文本(' + followWhose + '):', str2);

			// 该规则目前是面灵气喵的固定规则，其他的up还得再看看怎么搞
			// 增加关键词，避免拿到体服的
			const reg = new RegExp(`对弈竞猜.*${nextH}:00.+?([左右红蓝]|翻盘)`);
			const r = str2.match(reg);

			// ✅ 新增：打印正则匹配结果
			console.log('[Func401][RSS] 正则匹配结果:', r ? `押${r[1]}` : '未匹配到');

			if (r) {
				if (r[1] === '红' || r[1] === '左') { // 押左
					thisScript.regionClick([thisOperator[2].oper[0]]);
				} else if (r[1] === '蓝' || r[1] === '右') { // 押右
					thisScript.regionClick([thisOperator[2].oper[1]]);

				} else if (r[1] === '翻盘' && thisScript.getOcrDetector()) { // 押翻盘
					const realTimeBmpLeft = thisScript.findText('.+', 0, thisOperator[5].oper[0], '包含');
					const realTimeBmpRight = thisScript.findText('.+', 0, thisOperator[5].oper[1], '包含');
					if (realTimeBmpLeft.length != 0 && realTimeBmpRight.length != 0) {
						const realTimeTextLeft = realTimeBmpLeft[0].label;
						const realTimeTextpRight = realTimeBmpRight[0].label;
						// ✅ 新增：OCR识别结果日志
						console.log(`[Func401][RSS] OCR识别左右人数: ${realTimeTextLeft}, ${realTimeTextpRight}`);
						if (Number(realTimeTextLeft) < Number(realTimeTextpRight)) {
							thisScript.regionClick([thisOperator[2].oper[0]]);
						} else {
							thisScript.regionClick([thisOperator[2].oper[1]]);
						}
					} else {
						// ✅ 新增：OCR失败日志
						console.log('[Func401][RSS] ⚠️ 翻盘OCR识别失败，未点击');
					}
				}
				// 押注确认
				thisScript.regionClick([thisOperator[2].oper[2]]);
				thisScript.regionClick([thisOperator[2].oper[3]]);
				thisScript.regionClick([thisOperator[2].oper[3]]);
				thisScript.regionClick([thisOperator[2].oper[4]]);
				// 推送的时候更新截图
				thisScript.keepScreen();
				thisScript.regionClick([thisOperator[2].oper[5]]); // 更新截图后返回庭院
				thisScript.myToast(`根据${followWhose}选择押${r[1]}`);
				thisScript.doPush(thisScript, { text: `根据${followWhose}选择押${r[1]}`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				sleep(3000);
			} else {
				// ✅ 新增：明确日志（原版已有toast，这里补一行log）
				console.log('[Func401][RSS] ⚠️ 获取' + followWhose + '押注信息失败，1分钟后再次获取');
				thisScript.myToast(`获取${followWhose}押注信息失败，1分钟后再次获取`);
				thisScript.doPush(thisScript, { text: `获取${followWhose}押注信息失败，1分钟后再次获取`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				sleep(60000);
			}
		} catch (e) {
			// ✅ 新增：异常捕获+日志（原版没有try-catch，网络挂了会直接崩）
			if (e && String(e).includes('InterruptedException')) {
				console.log('[Func401][RSS] 脚本被中断（正常停止）');
				return;	}
			sleep(60000);
		}
	}


	doBetByApi(thisScript: Script, thisOperator: IFuncOperator[], followWhose: string): boolean {
		const actualBoss = (followWhose && followWhose.trim() !== '') ? followWhose : '面灵气喵';
		const useAllMode = (actualBoss === '全部');

		const now = new Date();
		const curMon = now.getMonth() + 1;
		const curDate = now.getDate();
		const curSlot = Math.floor(now.getHours() / 2) * 2;

		const maxRetry = 10;
		let retryCnt = 0;

		// ✅ 时间解析：兼容 "2025-10-02 20:24" 和 ISO 格式
		function parsePostTime(postedAt: string) {
			const d = new Date(postedAt);
			if (!isNaN(d.getTime())) {
				return {
					mon: d.getMonth() + 1,
					day: d.getDate(),
					hour: d.getHours(),
					min: d.getMinutes()
				};
			}
			const m = postedAt.match(/(\d+)-(\d+)[T\s](\d+):(\d+)/);
			if (!m) return null;
			return {
				mon: parseInt(m[1]),
				day: parseInt(m[2]),
				hour: parseInt(m[3]),
				min: parseInt(m[4])
			};
		}

		while (retryCnt < maxRetry) {
			retryCnt++;
			let cleaned: any[] = [];

			try {
				console.log('[Func401][API] 请求接口(https.get): https://yysrank.com/api/dyjc/get');

				// ✅ Auto.js 原生 http.get，已支持 HTTPS
				const res = http.get('https://yysrank.com/api/dyjc/get', {
					headers: {
						'User-Agent': 'Mozilla/5.0 (Linux; Android) AppleWebKit/537.36',
						'Referer': 'https://yysrank.com/dyjc.html',
						'Accept': 'application/json, text/plain, */*'
					}
				}) as any;
				if (!res || !res.body) {
					console.log('[Func401][API] ❌ 响应为空');
					sleep(60000);
					continue;
				}

				const raw = res.body.string();
				if (!raw || raw.length < 10 || raw.trim().startsWith('<')) {
					console.log('[Func401][API] ❌ 返回异常/HTML');
					sleep(60000);
					continue;
				}

				const json = JSON.parse(raw);
				if (!json.success || !Array.isArray(json.data)) {
					console.log('[Func401][API] ❌ 数据格式异常');
					sleep(60000);
					continue;
				}

				cleaned = json.data;
				console.log('[Func401][API] ✅ 数据条数: ' + cleaned.length);

			} catch (e: any) {
				console.log('[Func401][API] ❌ 请求失败: ' + (e.message || e));
				sleep(60000);
				continue;
			}

			// ========== 过滤：白名单 + 今天 + 当前2h区间 + 预测值合法 ==========
			const slotData: any[] = [];
			for (let i = 0; i < cleaned.length; i++) {
				const item = cleaned[i];

				// 博主过滤
				if (useAllMode) {
					if (allBosses.indexOf(item.name) === -1) continue;
				} else {
					if (item.name !== actualBoss) continue;
				}

				// 预测值校验
				if (item.predict_winner !== 'red' && item.predict_winner !== 'blue') continue;

				// 时间校验
				const p = parsePostTime(item.posted_at);
				if (!p) continue;
				if (p.mon !== curMon || p.day !== curDate) continue;
				if (Math.floor(p.hour / 2) * 2 !== curSlot) continue;

				slotData.push(item);
			}

			console.log('[Func401][API] 当前场次有效预测: ' + slotData.length);
			if (slotData.length > 0) {
				for (let i = 0; i < slotData.length; i++) {
					console.log(`[Func401][API] [${i}] ${slotData[i].name} | ${slotData[i].posted_at} | ${slotData[i].predict_winner}`);
				}
			}

			if (slotData.length === 0) {
				thisScript.myToast('API模式: 当前无有效预测数据，1分钟后重试 (' + retryCnt + '/' + maxRetry + ')'); console.log('[Func401][API] ⚠️ 当前场次无有效预测数据，1分钟后重试 (' + retryCnt + '/' + maxRetry + ')');
				sleep(60000);
				continue;
			}

			// ============ 全部模式 ============
			if (useAllMode) {
				let redCount = 0, blueCount = 0;
				for (let i = 0; i < slotData.length; i++) {
					if (slotData[i].predict_winner === 'red') redCount++;
					if (slotData[i].predict_winner === 'blue') blueCount++;
				}

				console.log('[Func401][API] 全部模式统计: 红=' + redCount + ' 蓝=' + blueCount);

				if (redCount > blueCount) {
					thisScript.regionClick([thisOperator[2].oper[0]]);
					thisScript.myToast('全部模式 → 押红方(' + redCount + '票)');
				} else if (blueCount > redCount) {
					thisScript.regionClick([thisOperator[2].oper[1]]);
					thisScript.myToast('全部模式 → 押蓝方(' + blueCount + '票)');
				} else {
					// 55开 → OCR翻盘
					if (thisScript.getOcrDetector()) {
						const leftText = thisScript.findText('.+', 0, thisOperator[5].oper[0], '包含');
						const rightText = thisScript.findText('.+', 0, thisOperator[5].oper[1], '包含');
						if (leftText.length > 0 && rightText.length > 0) {
							if (Number(leftText[0].label) < Number(rightText[0].label)) {
								thisScript.regionClick([thisOperator[2].oper[0]]);
								thisScript.myToast('55开OCR → 押红(人数少)');
							} else {
								thisScript.regionClick([thisOperator[2].oper[1]]);
								thisScript.myToast('55开OCR → 押蓝(人数少)');
							}
						} else {
							thisScript.myToast('55开OCR识别失败，1分钟后重试');
							sleep(60000);
							return true;
						}
					} else {
						thisScript.myToast('无OCR模块，无法翻盘，1分钟后重试');
						sleep(60000);
						return true;
					}
				}

				thisScript.regionClick([thisOperator[2].oper[2]]);
				thisScript.regionClick([thisOperator[2].oper[3]]);
				thisScript.regionClick([thisOperator[2].oper[3]]);
				thisScript.regionClick([thisOperator[2].oper[4]]);
				thisScript.keepScreen();
				thisScript.regionClick([thisOperator[2].oper[5]]);
				return true;
			}

			// ============ 单博主模式 ============
			const target = slotData[0]; // 已过滤为只有该博主的数据
			if (target.predict_winner === 'red') {
				thisScript.regionClick([thisOperator[2].oper[0]]);
				thisScript.myToast('押 ' + actualBoss + ' → 红');
			} else if (target.predict_winner === 'blue') {
				thisScript.regionClick([thisOperator[2].oper[1]]);
				thisScript.myToast('押 ' + actualBoss + ' → 蓝');
			}

			thisScript.regionClick([thisOperator[2].oper[2]]);
			thisScript.regionClick([thisOperator[2].oper[3]]);
			thisScript.regionClick([thisOperator[2].oper[3]]);
			thisScript.regionClick([thisOperator[2].oper[4]]);
			thisScript.keepScreen();
			thisScript.regionClick([thisOperator[2].oper[5]]);
			return true;
		}

		thisScript.myToast('API模式：达到最大重试次数，放弃本场');
		return true;
	}
}