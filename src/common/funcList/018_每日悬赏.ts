import { IFuncOrigin, IFuncOperator, IFuncOperatorOrigin } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
let allPoint;
export class Func018 implements IFuncOrigin {
	id = 18;
	name = '每日悬赏';
	config = [{
		desc: '',
		config: [{
			name: 'jinBi',
			desc: '取消勾选金币协作',
			type: 'switch',
			default: true,
		}, {
			name: 'tiLi',
			desc: '取消勾选体力协作',
			type: 'switch',
			default: true,
		}, {
			name: 'gouLiang',
			desc: '取消勾选狗粮协作',
			type: 'switch',
			default: true,
		}, {
			name: 'ranLiao',
			desc: '取消勾选燃料协作',
			type: 'switch',
			default: true,
		}]
	}, {
		desc: '结束后切换方案',
		config: [{
			name: 'scheme_switch_enabled',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme',
			desc: '先切换至返回庭院，再由返回庭院切换至配置的目标方案',
			type: 'scheme',
			default: '地鬼日常',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 悬赏内一键
		desc: '悬赏界面',
		oper: [
			[center, 1280, 720, 1152, 612, 1219, 676, 1000],
		]
	}, { // 1 关闭悬赏
		desc: [1280, 720,
			[
				[right, 1159, 600, 0xfbf3ba],
				[right, 1217, 619, 0xead99e],
				[right, 1212, 667, 0xd7ba61],
				[right, 1174, 681, 0xcba645],
				[right, 1183, 594, 0x413123],
				[right, 1181, 640, 0x3e3123],
			]
		],
		oper: [
			[center, 1280, 720, 1209, 66, 1260, 113, 1000],
		]
	}, { // 2 找怪
		desc: [1280, 720,
			[
				[left, 83, 207, 0x3b2f1f],
				[left, 100, 413, 0x3b2f29],
				[right, 1204, 129, 0xe9d4ce],
				[center, 402, 630, 0xaa9486],
				[right, 1144, 608, 0x34271b],
				[right, 1162, 24, 0x1e1913],
				[right, 1231, 23, 0x1e1913],
			]
		]
	}, { // 3 取消追踪
		desc: [1280, 720,
			[
				[right, 1165, 576, 0xf3e7ab],
				[right, 1224, 585, 0xf0dfa6],
				[right, 1147, 607, 0x382a1d],
				[right, 1189, 561, 0x413123],
				[right, 1234, 608, 0x3f3224],
				[right, 1187, 607, 0x3e3123],
			]
		],
		oper: [
			[center, 1280, 720, 1158, 578, 1225, 639, 1000],
			[center, 1280, 720, 1184, 115, 1230, 153, 1000],
		]
	}, { // 4 探索地图界面
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 28, 25, 55, 57, 1000],
		],
		retest: 500,
	}, { // 5 秘闻对话点击 右
		desc: [1280, 720,
			[
				[center, 500, 715, 0x000000],
				[center, 612, 715, 0x000000],
				[center, 773, 715, 0x000000],
				[center, 830, 716, 0x000000],
				[right, 817, 553, 0x4d0e18],
				[right, 940, 549, 0x940816],
			]
		],
		oper: [
			[left, 1280, 720, 529, 688, 744, 706, 200],
		]
	}, { // 6 秘闻挑战开启
		desc: '秘闻挑战开启',
		oper: [
			[left, 1280, 720, 452, 605, 870, 683, 2000],
		]
	}, { // 7 处于秘闻挑战时点击返回按钮
		desc: [
			1280, 720,
			[
				[left, 39, 49, 0xc3cce1],
				[left, 49, 37, 0xc2cbe0],
				[left, 159, 64, 0x000000],
				[left, 253, 48, 0x593716],
				[left, 261, 40, 0xe1be54],
				[right, 1160, 558, 0xe3d8c1],
				[right, 1190, 607, 0xe4dac3],
				[right, 1201, 642, 0x372014],
				[left, 199, 34, 0x060506],
			]
		],
		oper: [
			[center, 1280, 720, 24, 19, 86, 76, 1000],
		]
	}, { // 8 处于秘闻副本列表时点击返回按钮
		desc: [
			1280, 720,
			[
				[left, 45, 48, 0xf5e5a5],
				[left, 38, 34, 0x95653c],
				[left, 159, 64, 0x333141],
				[left, 228, 65, 0x323040],
				[left, 317, 46, 0x1e1d25],
				[right, 1190, 607, 0xe4dac3],
				[left, 228, 28, 0x282534],
				[right, 1186, 609, 0xe4dac4],
				[right, 1205, 664, 0xe2d7c1],
			]
		],
		oper: [
			[center, 1280, 720, 24, 19, 86, 76, 1000],
		]
	}, { // 9 关闭宝箱奖励弹窗
		desc: [1280, 720,
			[
				[center, 406, 257, 0x432f25],
				[right, 879, 257, 0x432f25],
				[center, 495, 462, 0x423329],
				[right, 812, 462, 0x423329],
				[center, 354, 257, 0xaa935b],
				[right, 919, 257, 0x8f7741],
			]
		],
		oper: [
			[left, 1280, 720, 543, 548, 726, 630, 500]
		]
	}, { // 10 秘闻红叉
		desc: [1280, 720,
			[
				[right, 1164, 118, 0x73303b],
				[right, 1170, 112, 0xe7dad3],
				[right, 1189, 111, 0xe9d6cf],
				[right, 1177, 120, 0xe8d5d0],
				[right, 1187, 129, 0xe9e0d3],
			]
		],
		oper: [
			[center, 1280, 720, 1160, 101, 1195, 137, 1000],
		]
	}, { // 11 关闭秘闻刷新记录提示
		desc: [1280, 720,
			[
				[center, 526, 311, 0xeeeecc],
				[center, 513, 355, 0xab8a5a],
				[center, 563, 364, 0xb1985c],
				[center, 565, 311, 0xf9ecc7],
				[center, 730, 308, 0xf3f3c9],
				[center, 750, 309, 0xf9f1c8],
				[center, 722, 360, 0xaf9966],
				[center, 763, 360, 0xb79d62],
				[center, 740, 366, 0xae9659],
				[center, 838, 324, 0xeedd99],
				[center, 825, 344, 0xead793],
				[center, 868, 312, 0xcb9958],
				[center, 914, 357, 0xb27f4c],
				[center, 867, 379, 0x392920]
			]
		],
		oper: [
			[center, 1280, 720, 326, 509, 1169, 692, 1000]
		]
	}, { // 12 秘闻对话 左
		desc: [1280, 720,
			[
				[center, 500, 715, 0x000000],
				[center, 612, 715, 0x000000],
				[center, 773, 715, 0x000000],
				[center, 830, 716, 0x000000],
				[left, 308, 547, 0x4a0c18],
				[center, 445, 549, 0x940818],
			]
		],
		oper: [
			[left, 1280, 720, 685, 492, 1038, 686, 3000],
		]
	}, { // 13 金鱼秘闻 技能
		desc: [1280, 720,
			[
				[center, 383, 129, 0x719ae3],
				[center, 386, 197, 0x6e92da],
				[center, 391, 266, 0xf9e0d3],
				[left, 311, 374, 0x739ae7],
				[center, 369, 455, 0xfff1e7],
			]
		],
		oper: [
			[center, 1280, 720, 535, 636, 718, 694, 1000],
		]
	}, { // 14 探索章节_挑战退出
		desc: [1280, 720,
			[
				[left, 45, 21, 0xefd48f],
				[left, 33, 30, 0xf7ebad],
				[left, 45, 40, 0xefd791],
				[right, 1127, 582, 0xe3d7c2],
				[right, 1129, 665, 0xe4d8c3],
				[right, 1136, 636, 0xe4dbc6],
			]
		],
		oper: [
			[center, 1280, 720, 24, 15, 57, 51, 1000],
		]
	}, { // 15 悬赏内_取消追踪
		desc: [1280, 720,
			[
				[left, 45, 51, 0x6b4b33],
				[left, 281, 47, 0x080c08],
				[right, 1048, 43, 0x0d0c0d],
				[right, 1270, 47, 0x715635],
				[right, 1233, 91, 0xe9d5cf],
			]
		]
	}, { // 16 庭院内
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
	}, { // 17 庭院内
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
	}, { // 18 庭院内
		desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
	}, { // 19 庭院内
		desc: '庭院已打开菜单_另另外一种图标',
	},]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['18'];
		// 确认挑战副本
		if (thisScript.oper({
			name: '悬赏_发现地点弹窗',
			operator: [{ desc: thisOperator[3].desc }]
		})) {
			let challengeArr;
			const unknownStory = thisScript.findMultiColor('悬赏_挑战字样') || null;
			// 如果有挑战副本
			if (unknownStory) {
				const oper = [
					[unknownStory.x + 440, unknownStory.y, unknownStory.x + 38 + 440, unknownStory.y + 21, 4000]
				];
				thisScript.regionClick(oper);
				thisScript.regionClick([[1082, 586, 1127, 625, 1000]]);
				return true
				// 如果没有挑战副本就寻找秘闻副本
			} else if (!unknownStory) {
				challengeArr = thisScript.findMultiColorEx('悬赏_秘闻字样') || null;
				if (challengeArr.length) {
					const challenge = challengeArr.reduce((min, obj) => {
						return obj.y < min.y ? obj : min;
					});
					const oper = [
						[challenge.x + 440, challenge.y, challenge.x + 38 + 440, challenge.y + 21, 2000]
					];
					thisScript.regionClick(oper);
					thisScript.regionClick([[1082, 586, 1127, 625, 1000]]);
					return true
				} else {
					// 如果秘闻和挑战都没有就取消任务追踪
					if (thisScript.oper({
						id: 18,
						name: '悬赏_取消任务追踪',
						operator: [thisOperator[3]]
					})) {
						return true
					} else {
						return false
					}
				}
			}
		}
		// 攻打追踪悬赏
		let curCnt = 0;
		const maxCount = 5;
		while (thisScript.oper({
			name: '悬赏_探索界面',
			operator: [{ desc: thisOperator[4].desc, retest: 500 }]
		})) {
			curCnt++;
			thisScript.keepScreen(false);
			if (curCnt >= maxCount) {
				if (thisScript.findMultiColor('悬赏_神秘妖怪')) {

					thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				}
				thisScript.regionClick(thisOperator[4].oper);
				const pointXZ = thisScript.findMultiColor('悬赏_协作任务')
				if (pointXZ) {
					thisScript.global.xsXieZuo = true;
					return true;
				}
				thisScript.rerun(thisconf.next_scheme);
				sleep(1000);
				return;
			}
			if (thisconf.xiezuo) {
				continue;
			}
			// 领奖
			let point = thisScript.findMultiColor('悬赏_宝箱') || null;
			if (point) {
				const oper = [
					[point.x, point.y, point.x + 5, point.y + 5, 1000]
				];
				thisScript.regionClick(oper);
				return true;
			}
			// 追踪
			point = thisScript.findMultiColorEx('悬赏_已追踪任务');
			if (point) {
				for (let i = point.length - 1; i >= 0; i--) {
					const region = [point[i].x, point[i].y, point[i].x + 70, point[i].y + 50]
					if (thisScript.findMultiColor('悬赏_神秘妖怪', region)) {
						point.splice(i, 1)   // 剔除这个 point
					}
				}
			}
			if (point && point.length > 0) {
				const oper = [
					[point[0].x + 20, point[0].y, point[0].x + 35, point[0].y + 30, 1000]
				];
				thisScript.regionClick(oper);
				return true;
			}
			sleep(500);
		}
		// 开始打协作
		if (thisScript.global.xsXieZuo) {
			let fightPoint = null;
			let region = null;
			if (thisScript.oper({
				name: '悬赏_追踪悬赏',
				operator: [{ desc: thisOperator[15].desc }]
			})) {
				if (!thisconf.jinBi) {
					fightPoint = thisScript.findMultiColor('悬赏_金币协作') || null;
					if (fightPoint) {
						region = [fightPoint.x - 10, fightPoint.y - 10, fightPoint.x + 10, fightPoint.y + 10]
						const finishPoint = thisScript.findMultiColor('悬赏_协作完成', region);
						if (!finishPoint) {
							thisScript.regionClick([[fightPoint.x, fightPoint.y, fightPoint.x + 10, fightPoint.y + 10, 1000]]);
							return true;
						} else {
							fightPoint = null;
						}
					}
				}
				if (!thisconf.gouLiang) {
					fightPoint = thisScript.findMultiColor('悬赏_狗粮协作') || null;
					if (fightPoint) {
						region = [fightPoint.x - 10, fightPoint.y - 10, fightPoint.x + 10, fightPoint.y + 10]
						const finishPoint = thisScript.findMultiColor('悬赏_协作完成', region);
						if (!finishPoint) {
							thisScript.regionClick([[fightPoint.x, fightPoint.y, fightPoint.x + 10, fightPoint.y + 10, 1000]]);
							return true;
						} else {
							fightPoint = null;
						}
					}
				}
				if (!thisconf.tiLi) {
					fightPoint = thisScript.findMultiColor('悬赏_体力协作') || null;
					if (fightPoint) {
						region = [fightPoint.x - 10, fightPoint.y - 10, fightPoint.x + 10, fightPoint.y + 10]
						const finishPoint = thisScript.findMultiColor('悬赏_协作完成', region);
						if (!finishPoint) {
							thisScript.regionClick([[fightPoint.x, fightPoint.y, fightPoint.x + 10, fightPoint.y + 10, 1000]]);
							return true;
						} else {
							fightPoint = null;
						}
					}
				}
				fightPoint = thisScript.findMultiColor('悬赏_勾玉协作')
				if (fightPoint) {
					region = [fightPoint.x - 10, fightPoint.y - 10, fightPoint.x + 10, fightPoint.y + 10]
					const finishPoint = thisScript.findMultiColor('悬赏_协作完成', region);
					if (!finishPoint) {
						thisScript.regionClick([[fightPoint.x, fightPoint.y, fightPoint.x + 10, fightPoint.y + 10, 1000]]);
						return true;
					} else {
						fightPoint = null;
					}
				}
				fightPoint = thisScript.findMultiColor('悬赏_已接受协作')
				if (fightPoint) {
					region = [fightPoint.x - 10, fightPoint.y - 10, fightPoint.x + 10, fightPoint.y + 10]
					const finishPoint = thisScript.findMultiColor('悬赏_协作完成', region);
					if (!finishPoint) {
						thisScript.regionClick([[fightPoint.x, fightPoint.y, fightPoint.x + 10, fightPoint.y + 10, 1000]]);
						return true;
					} else {
						fightPoint = null;
					}
				}
				thisScript.regionClick(thisOperator[1].oper);
				thisScript.superGlobal.next_scheme_name = thisconf.next_scheme as string;
				thisScript.rerun('返回庭院');
				sleep(1000);
				return true;
			}
			const point = thisScript.findMultiColor('悬赏_庭院检测悬赏图标') || null;
			if (point !== null) {
				thisScript.regionClick([[point.x, point.y, point.x + 20, point.y + 20, 1000]]);
				return true
			}
		}
		// 打开悬赏
		if (!thisScript.global.xsOpened && thisScript.oper({
			name: '悬赏_探索界面',
			operator: [{ desc: thisOperator[16].desc }, { desc: thisOperator[17].desc }, { desc: thisOperator[18].desc }, { desc: thisOperator[19].desc }]
		})) {
			const point = thisScript.findMultiColor('悬赏_庭院检测悬赏图标') || null;
			if (point !== null) {
				thisScript.regionClick([[point.x, point.y, point.x + 20, point.y + 20, 3000]]);
				return true
			} else {
				return false
			}
		}
		if (!thisScript.global.xsOpened && thisScript.oper({
			name: '悬赏_一键追踪',
			operator: [thisOperator[0]]
		})) {
			return true;
		}
		if (!thisScript.global.xsOpened && thisScript.oper({
			name: '悬赏_关闭悬赏封印弹窗',
			operator: [{ desc: thisOperator[1].desc }]
		})) {
			let point = null;
			allPoint = [];
			if (thisconf.jinBi) {
				point = thisScript.findMultiColor('悬赏_金币协作') || null;
			}
			if (point !== null) {
				allPoint.push(point);
			}
			if (thisconf.gouLiang) {
				point = thisScript.findMultiColor('悬赏_狗粮协作') || null;
			}
			if (point !== null) {
				allPoint.push(point);
			}
			if (thisconf.tiLi) {
				point = thisScript.findMultiColor('悬赏_体力协作') || null;
			}
			if (point !== null) {
				allPoint.push(point);
			}
			if (thisconf.ranLiao) {
				point = thisScript.findMultiColor('悬赏_胧车燃料') || null;
			}
			if (point !== null) {
				allPoint.push(point);
			}
			point = thisScript.findMultiColor('悬赏_协作完成')
			if (point !== null) {
				allPoint.push(point);
			}
			if (thisScript.findMultiColor('悬赏_勾玉协作')) {
				thisScript.doPush(thisScript, { text: '发现有勾玉协作，及时邀请。' });
			}
			thisScript.global.xsOpened = true;
			return true;
		}
		// 筛选悬赏
		if (thisScript.oper({
			name: '悬赏_界面',
			operator: [{ desc: thisOperator[15].desc }]
		})) {
			if (allPoint.length > 0) {
				const oper = [
					[allPoint[allPoint.length - 1].x, allPoint[allPoint.length - 1].y, allPoint[allPoint.length - 1].x + 20, allPoint[allPoint.length - 1].y + 20, 1500]
				];
				thisScript.regionClick(oper);
				thisScript.regionClick(thisOperator[3].oper);
				allPoint.pop();
				return true;
			} else {
				// 筛选完毕
				thisScript.regionClick(thisOperator[1].oper);
				return true;
			}
		}
		// 悬赏已完成
		// if (thisScript.oper({
		// 	name: '悬赏_关闭悬赏封印弹窗',
		// 	operator: [{
		// 		desc: thisOperator[2].desc
		// 	}]
		// })) {
		// 	thisScript.regionClick([[1164, 116, 1189, 143, 1000]]);
		// 	thisScript.superGlobal.next_scheme_name = thisconf.next_scheme as string;
		// 	thisScript.rerun('返回庭院');
		// 	sleep(1000);
		// 	return true;
		// }

		// 杂项
		if (thisScript.oper({
			name: '悬赏_杂项',
			operator: thisOperator.slice(5, 15)
		})) {
			return true
		}
	}
}
