import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func051 implements IFuncOrigin {
	id = 51;
	name = '绿标';
	desc = '战斗界面标记我方式神';
	config = [{
		desc: '绿标',
		config: [{
			name: 'greenType',
			desc: '绿标类型',
			type: 'list',
			data: ['自定义坐标', '自定义文本'],
			default: '自定义文本',
		}, {
			name: 'greenPosition',
			desc: '绿标坐标，仅绿标类型为自定义坐标时生效，格式x,y，实际点击时xy坐标会在±20内随机点击，如245,500',
			type: 'text',
			default: '245,500'
		}, {
			name: 'greenText',
			desc: '绿标文本内容，将式神名称与文本内容保持一致，使用该功能请安装OCR扩展',
			type: 'text',
			default: '绿标专用'
		}, {
			name: 'greenTextMatchMode',
			desc: '绿标文本匹配模式，为保证匹配成功率，可设置为“包含”或“模糊”，其中模糊匹配的基于编辑距离计算的相似度大于或等于50%时记匹配成功',
			type: 'list',
			data: ['包含', '模糊'],
			default: '模糊'
		}, {
			name: 'preSearch',
			desc: '准备时查找坐标，开局后立即进行绿标，需取消锁定阵容，并将该功能排序排在准备前',
			type: 'switch',
			default: false,
		}, {
			name: 'offset',
			desc: '文本模式的偏移，格式x,y，如填-5,5，点击区域将向左和下各偏移5个像素',
			type: 'text',
			default: '0,0'
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 开始战斗后的场景
		desc: '战斗界面',
		oper: [
			[left, 1280, 720, 0, 0, 0, 70, -1], // A的下方位置
			[left, 1280, 720, 0, 0, 26, 40, -1], // 下方位置的矩形
			[left, 1280, 720, 0, 0, 1279, 719, -1], // 屏幕大小
			[center, 1280, 720, 0, 200, 1279, 590, -1], // 文本识别的区域
			[right, 1280, 720, 1137,542, 1228,632, 700], // 准备
		]
	}, {
		// 准备界面 - 未准备
		desc: '准备界面_未准备',
	}, {
		// 准备界面 - 已准备
		desc: '准备界面_已准备'
	}, {
		// 手动状态
		desc: '战斗界面_手动状态',
		oper: [
			[left, 1280, 720, 37, 637, 86, 686, 1000]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let thisconf = thisScript.scheme.config['51'];
		const [offsetX, offsetY] = (thisconf.offset as string || '0,0').split(',').map(item => parseInt(item, 10));
		thisScript.oper({
      name: '绿标内手动切自动',
      operator: [thisOperator[3]]
    })
		// 准备界面就开始查找，找到后记录坐标，在战斗开始后第一时间对找到的坐标进行标记
		if (thisconf.preSearch) {
			if (thisScript.oper({
				id: 51,
				name: '准备界面检测',
				operator: [{
					desc: '准备界面_未准备',
				}, {
					desc: '准备界面_已准备',
				}]
			})) {
				if (thisconf.greenType === '自定义文本' && !thisScript.global.greenPosition) {
					let result = thisScript.findTextWithCompareColor(
						thisconf.greenText as string,
						3000,
						thisOperator[0].oper[3],
						thisconf.greenTextMatchMod as string,
						{
							id: 51,
							name: '准备界面检测',
							operator: [{
								desc: '准备界面_未准备',
							}, {
								desc: '准备界面_已准备',
							}]
						}
					);
					if (result.length === 0) {
						console.log(`未识别式神别名“${thisconf.greenText}”`);
						return true;
					}
					let p = {
						x: (result[0].points[0].x + result[0].points[1].x) / 2,
						y: (result[0].points[0].y + result[0].points[3].y) / 2,
					}
					let lx = p.x - thisOperator[0].oper[1][2] / 2;
					let ly = p.y + thisOperator[0].oper[0][3] - thisOperator[0].oper[1][3] / 2;
					let rx = p.x + thisOperator[0].oper[1][2] / 2;
					let ry = p.y + thisOperator[0].oper[0][3] + thisOperator[0].oper[1][3] / 2;
					let toClick = [
						Math.max(lx, 0) + offsetX,
						Math.max(ly, 0) + offsetY,
						Math.min(rx, thisOperator[0].oper[2][2]) + offsetX,
						Math.min(ry,thisOperator[0].oper[2][3]) + offsetY,
						1000
					];
					thisScript.global.greenPosition = toClick;
					return true;
				} else if (thisconf.greenType === '自定义坐标' && !thisScript.global.greenPosition) {
					let toClick = null;
					let posPam = String(thisconf.greenPosition).split(',');
					if (posPam.length !== 2) {
						thisScript.myToast('自定义坐标格式定义错误，请检查');
						return true;
					}
					let inX = parseInt(posPam[0]);
					let inY = parseInt(posPam[1]);
					if (Number.isNaN(inX) || Number.isNaN(inY)) {
						thisScript.myToast('自定义坐标格式定义错误，请检查');
						return true;
					}
					toClick = [
						Math.max(inX - 20, 0),
						Math.max(inY - 20, 0),
						inX + 20,
						inY + 20,
						1000
					]
					sleep(500);
					thisScript.regionClick([thisOperator[0].oper[4]]);
					thisScript.regionClick([toClick]);
					return true;
				}
			}

			if (thisScript.global.greenPosition && thisScript.oper({
				id: 51,
				name: '绿标-战斗界面检测',
				operator: [{
					desc: thisOperator[0].desc,
				}]
			})) {
				thisScript.regionClick([thisScript.global.greenPosition]);
				thisScript.global.greenPosition = null;
				return true;
			}
		}

		if (thisScript.oper({
			id: 51,
			name: '绿标-战斗界面检测',
			operator: [{
				desc: thisOperator[0].desc,
			}]
		})) {
			let flag = true;
			// 只有在开启一轮新的后才会执行，开启新的一轮通过结束次数进行判断
			if (!thisconf.preSearch && ((thisScript.global.greenTagEnd !== thisScript.runTimes['2'] && thisScript.runTimes['2']) || (
				!thisScript.global.greenTagEnd && !thisScript.runTimes['2']
			))) {
				thisScript.global.greenTagEnd = thisScript.runTimes['2'] || -1;
				flag = false;
			}

			// 配合准备/退出功能，次数变更后不需要判断绿标，直接点
			// 当局有多次判断时，连续3秒内都未检测到绿标方可进行点击
			// 没有找到绿标的开始时间
			thisScript.global.greenNonDTime = new Date().getTime();
			if (flag && thisScript.findMultiColor('绿标')) {
				return false;
			}
			// 开启绿标
			let toClick = null;
			if (thisconf.greenType === '自定义坐标') {
				let posPam = String(thisconf.greenPosition).split(',');
				if (posPam.length !== 2) {
					thisScript.myToast('自定义坐标格式定义错误，请检查');
					return true;
				}
				let inX = parseInt(posPam[0]);
				let inY = parseInt(posPam[1]);
				if (Number.isNaN(inX) || Number.isNaN(inY)) {
					thisScript.myToast('自定义坐标格式定义错误，请检查');
					return true;
				}
				toClick = [
					Math.max(inX - 20, 0),
					Math.max(inY - 20, 0),
					inX + 20,
					inY + 20,
					1000
				]
			} else if (thisconf.greenType === '自定义文本') {
				let result = thisScript.findTextWithCompareColor(
					thisconf.greenText as string,
					5000,
					thisOperator[0].oper[3],
					thisconf.greenTextMatchMode as string,
					{
						id: 51,
						name: '战斗界面检测',
						operator: [{
							desc: '战斗界面',
						}]
					}
				);
				if (result.length === 0) {
					console.log(`未识别式神别名“${thisconf.greenText}”`);
					return false;
				}
				let p = {
					x: (result[0].points[0].x + result[0].points[1].x) / 2,
					y: (result[0].points[0].y + result[0].points[3].y) / 2,
				}
				let lx = p.x - thisOperator[0].oper[1][2] / 2;
				let ly = p.y + thisOperator[0].oper[0][3] - thisOperator[0].oper[1][3] / 2;
				let rx = p.x + thisOperator[0].oper[1][2] / 2;
				let ry = p.y + thisOperator[0].oper[0][3] + thisOperator[0].oper[1][3] / 2;
				toClick = [
					Math.max(lx, 0) + offsetX,
					Math.max(ly, 0) + offsetY,
					Math.min(rx, thisOperator[0].oper[2][2]) + offsetX,
					Math.min(ry, thisOperator[0].oper[2][3]) + offsetY,
					1000
				];
			}
			if (toClick) {
				// 当局有多次判断时，连续3秒内都未检测到绿标方可进行点击（避免因御魂图标挡着导致识别错误）
				if (flag) {
					do {
						sleep(200);
						thisScript.keepScreen(true);
						if (thisScript.findMultiColor('绿标')) {
							return false;
						}
					} while (new Date().getTime() - thisScript.global.greenNonDTime < 3000);
				}
				thisScript.regionClick([toClick]);
				return true;
			}
		}
	}
}
