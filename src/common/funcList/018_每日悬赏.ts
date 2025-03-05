import { IFuncOrigin, IFuncOperator, IFuncOperatorOrigin } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
let swiper = 0
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
			desc: '下一个方案',
			type: 'scheme',
			default: '地鬼日常',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		desc: [
			1280, 720,
			[
				[center, 1175, 121, 0x65343d],
				[center, 546, 84, 0x58402f],
				[center, 714, 81, 0x5c3a1a],
				[center, 844, 67, 0x3e3c42],
				[center, 1117, 615, 0x3c2a18],
				[center, 1142, 653, 0xddb03f],
				[center, 1098, 596, 0xf3e39e],
				[center, 1169, 610, 0xefd787],
			]
		],
		oper: [
			[center, 1280, 720, 1105, 583, 1181, 660, 1000],
		]
	}, { // 1 一键取消界面点击右上角关闭
		desc: [
			1280, 720,
			[
				[center, 1175, 121, 0x65343d],
				[center, 546, 84, 0x58402f],
				[center, 714, 81, 0x5c3a1a],
				[center, 844, 67, 0x3e3c42],
				[center, 1117, 615, 0x3c2a18],
				[center, 1142, 653, 0xddb03f],
			]
		],
		oper: [
			[center, 1280, 720, 1153, 112, 1202, 157, 1000],
		]
	}, { // 2 如果所有任务已经完成
		desc: [1280, 720,
			[
				[center, 647, 79, 0xe9e2d0],
				[center, 640, 50, 0x7a5930],
				[center, 552, 30, 0x484850],
				[right, 1114, 67, 0x3c3a41],
				[right, 1161, 86, 0x5d4223],
				[right, 1179, 134, 0xecdbca],
				[right, 1173, 593, 0x705a44],
				[right, 1116, 624, 0x765443],
				[right, 1170, 623, 0x705847]
			]
		]
	}, { // 3 庭院未打开菜单
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[left, 1280, 720, 0, 0, 32, 63, 1000]
		]
	}, { // 4 庭院已打开菜单
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰'
	}, { // 5 庭院已打开菜单，另外一种图标
		desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰'
	}, { // 6
		desc: [
			1280, 720,
			[
				[center, 466, 167, 0x8b6d60],
				[center, 719, 165, 0x8a6b5e],
				[center, 532, 195, 0x7d3030],
				[center, 589, 196, 0x8b3232],
				[center, 274, 556, 0x917265],
				[center, 198, 166, 0x957969],
				[left, 68, 653, 0x582757],
				[left, 191, 710, 0x331e14],
			]
		],
		oper: [
			[left, 1280, 720, 0, 0, 38, 21, 4000],
		]
	}, { // 7
		desc: [1280, 720,
			[
				[center, 384, 164, 0x957464],
				[right, 1002, 165, 0x927161],
				[center, 590, 195, 0x8a3131],
				[left, 182, 191, 0x4656da],
				[left, 194, 205, 0x3a4ab7]
			]
		],
		oper: [
			[left, 1280, 720, 176, 193, 193, 208, 1000],
		]
	}, { // 8
		desc: '探索章节_挑战',
		oper: [
			[left, 1280, 720, 1025, 129, 1071, 174, 1000],
		]
	}, { // 9
		desc: '探索章节_挑战2',
		oper: [
			[center, 1280, 720, 1032, 120, 1082, 166, 1000],
		]
	}, { // 10
		desc: '探索地图界面'
	}, { // 11
		desc: [1280, 720,
			[
				[left, 54, 43, 0xeaf4fc],
				[left, 51, 36, 0x9eafee],
				[left, 52, 78, 0xcadbff],
				[left, 119, 652, 0xa86420],
				[left, 209, 643, 0xf6f0b7],
				[center, 326, 640, 0xcfc9b8],
				[center, 430, 652, 0xb96567],
				[center, 500, 640, 0x564635],
				[left, 135, 132, 0x76551c],
				[left, 117, 133, 0x47362e]
			]
		],
		oper: [
			[center, 1280, 720, 29, 461, 115, 467, 1],
			[center, 1280, 720, 25, 174, 105, 178, 1]
		]
	}, { // 12
		desc: [
			1280, 720,
			[
				[left, 5, 133, 0x4e3934],
				[left, 19, 133, 0x49352f],
				[left, 40, 133, 0x44302a],
				[left, 71, 133, 0x432e29],
				[left, 87, 133, 0x432e29],
			]
		]
	}, { // 13 筛选悬赏_取消追踪
		desc: [
			1280, 720,
			[
				[left, 280, 77, 0x1f130f],
				[right, 1008, 180, 0xc3bab1],
				[right, 1000, 62, 0x1c1b1d],
				[center, 647, 201, 0xb04a49],
				[left, 182, 194, 0x4b5ee9],
			]
		],
		oper: [
			[center, 1280, 720, 175, 192, 195, 210, 1000],
		]
	}, { // 14 筛选悬赏_关闭追踪
		desc: [
			1280, 720,
			[
				[left, 280, 77, 0x1f130f],
				[right, 1008, 180, 0xc3bab1],
				[right, 1000, 62, 0x1c1b1d],
				[left, 181, 201, 0x6e5f51],
				[center, 647, 201, 0xb04a49],
			]
		],
		oper: [
			[center, 1280, 720, 557, 605, 679, 690, 1000],
		]
	}, {
		// 秘闻对话点击
		desc: [1280, 720,
			[
				[center, 500, 715, 0x000000],
				[center, 612, 715, 0x000000],
				[center, 773, 715, 0x000000],
				[center, 830, 716, 0x000000]
			]
		],
		oper: [
			[left, 1280, 720, 529, 688, 744, 706, 2000],
		]
	}, {
		// 秘闻挑战开启
		desc: '秘闻挑战开启',
		oper: [
			[left, 1280, 720, 452, 605, 870, 683, 2000],
		]
	}, {
		// 已适配66 处于秘闻挑战时点击返回按钮
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
	}, {
		// 已适配66 处于秘闻副本列表时点击返回按钮
		desc: [
			1280, 720,
			[
				[left, 39, 49, 0xc3cce1],
				[left, 49, 37, 0xc2cbe0],
				[left, 159, 64, 0x000000],
				[left, 253, 48, 0x593716],
				[left, 261, 40, 0xe1be54],
				[right, 1190, 607, 0xe4dac3],
				[left, 199, 34, 0x060506],
				[right, 1186, 609, 0xe4dac4],
				[right, 1205, 664, 0xe2d7c1],
			]
		],
		oper: [
			[center, 1280, 720, 24, 19, 86, 76, 1000],
		]
	}, {
		// 关闭宝箱奖励弹窗
		desc: [1280, 720,
			[
				[center, 323, 235, 0x604023],
				[center, 572, 228, 0xf1e4b3],
				[center, 960, 235, 0x614123],
				[center, 942, 266, 0x655f60],
				[center, 677, 263, 0x473424],
				[center, 660, 242, 0xe6d7a0],
				[center, 491, 266, 0x8a6937],
				[center, 786, 260, 0x9b7c45],
				[center, 941, 334, 0xbeb0ac],
				[center, 600, 194, 0xfcf3cf],
				[center, 669, 197, 0xfcf3cf]
			]
		],
		oper: [
			[center, 1280, 720, 443, 494, 788, 632, 1000]
		]
	}, {
		// 关闭宝箱奖励弹窗 旧
		desc: [1280, 720,
			[
				[center, 496, 199, 0xf4e4af],
				[center, 576, 198, 0xfbf3cf],
				[center, 525, 230, 0xe1d090],
				[center, 489, 266, 0x88602d],
				[center, 783, 262, 0x977542],
				[center, 781, 218, 0xeedeac],
				[center, 678, 238, 0xecdba8],
				[center, 337, 255, 0x645c5c],
				[center, 345, 279, 0x79716d],
				[center, 342, 330, 0xb8aba8],
				[center, 332, 342, 0x706057],
				[center, 957, 233, 0x624024],
				[center, 946, 252, 0x505050],
				[center, 936, 276, 0x776f6d],
				[center, 950, 347, 0x716058],
				[center, 928, 327, 0x69594b],
				[center, 921, 377, 0x89683e]
			]
		],
		oper: [
			[center, 1280, 720, 443, 494, 788, 632, 1000]
		]
	}, {
		// 关闭秘闻刷新记录提示
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
	}, {
		desc: [1280, 720,
			[
				[center, 440, 613, 0x4387cb],
				[center, 467, 602, 0x3b8dc4],
				[center, 473, 609, 0x488acc],
				[center, 558, 417, 0xda961f],
				[center, 634, 552, 0x8f5c29],
				[center, 637, 510, 0xffe7c8],
				[center, 763, 590, 0x9b5c28]
			]
		],
		oper: [
			[left, 1280, 720, 685, 492, 1038, 686, 3000],
		]
	}, {
		desc: [1280, 720,
			[
				[center, 355, 353, 0xcdc7b6],
				[center, 356, 365, 0xede8d5],
				[center, 372, 365, 0xe8e2d0],
				[center, 377, 355, 0xcac4b3],
				[center, 368, 354, 0xbab3a3]
			]
		],
		oper: [
			[left, 1280, 720, 685, 492, 1038, 686, 2000],
		]
	}]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['18'];
		// 打开和追踪悬赏
		if (!thisScript.global.xsOpened && thisScript.oper({
			name: '悬赏_庭院界面',
			operator: [{ desc: thisOperator[1].desc }, { desc: thisOperator[3].desc }, { desc: thisOperator[4].desc }, { desc: thisOperator[5].desc }]
		})) {
			if (thisScript.oper({
				name: '悬赏_追踪悬赏',
				operator: [thisOperator[0], {
					desc: thisOperator[1].desc
				}]
			})) {
				let point = null;
				allPoint = []
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
				if (thisScript.findMultiColor('悬赏_勾玉协作')) {
					thisScript.doPush(thisScript, { text: '发现有勾玉协作，及时邀请。' });
				}
				thisScript.global.xsOpened = true;
				return true
			}
			const point = thisScript.findMultiColor('悬赏_庭院检测悬赏图标') || null;
			if (point !== null) {
				thisScript.regionClick([[point.x, point.y, point.x + 20, point.y + 20, 1000]]);
				return true
			} else {
				return false
			}
		}
		// 筛选悬赏
		if (thisScript.oper({
			name: '悬赏_筛选悬赏',
			operator: [{ desc: thisOperator[1].desc }]
		})) {
			if (allPoint.length > 0) {
				const oper = [
					[allPoint[allPoint.length - 1].x, allPoint[allPoint.length - 1].y, allPoint[allPoint.length - 1].x + 20, allPoint[allPoint.length - 1].y + 20, 1500]
				];
				thisScript.regionClick(oper);
				allPoint.pop();
			} else {
				// 筛选完毕_关闭悬赏
				return thisScript.oper({
					name: '悬赏_已追踪悬赏',
					operator: [thisOperator[1]]
				})
			}
		}
		// 悬赏已完成
		if (thisScript.oper({
			name: '悬赏_关闭悬赏封印弹窗',
			operator: [{
				desc: thisOperator[2].desc
			}]
		})) {
			thisScript.regionClick([[1164, 116, 1189, 143, 1000]]);
			if (thisconf && thisconf.scheme_switch_enabled) {
				thisScript.rerun(thisconf.next_scheme);
			} else {
				thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
			}
		}
		// 确认挑战副本
		if (thisScript.oper({
			name: '悬赏_发现地点弹窗',
			operator: [{
				desc: thisOperator[6].desc
			}]
		})) {
			let challengeArr;
			const unknownStory = thisScript.findMultiColor('悬赏_挑战字样') || null;
			// 如果有挑战副本
			if (unknownStory) {
				const oper = [
					[unknownStory.x + 440, unknownStory.y, unknownStory.x + thisOperator[6].oper[0][2] + 440, unknownStory.y + thisOperator[6].oper[0][3], 4000]
				];
				thisScript.regionClick(oper);
				thisScript.regionClick([[887, 514, 1004, 560, 1000]]);
				return true
				// 如果没有挑战副本就寻找秘闻副本
			} else if (!unknownStory) {
				challengeArr = thisScript.findMultiColorEx('悬赏_秘闻字样') || null;
				if (challengeArr.length) {
					const challenge = challengeArr.reduce((min, obj) => {
						return obj.y < min.y ? obj : min;
					});
					const oper = [
						[challenge.x + 440, challenge.y, challenge.x + thisOperator[6].oper[0][2] + 440, challenge.y + thisOperator[6].oper[0][3], 2000]
					];
					thisScript.regionClick(oper);
					thisScript.regionClick([[1055, 563, 1131, 642, 1000]]);
					return true
				} else {
					// 如果秘闻和挑战都没有就取消任务追踪
					if (thisScript.oper({
						name: '悬赏_取消任务追踪',
						operator: [thisOperator[7]]
					}) != null) {
						// 关闭任务弹窗
						thisScript.regionClick([[430, 633, 780, 698, 1000]]);
						return true
					} else {
						return false
					}
				}
			}
		}
		// 关闭弹窗
		const point = thisScript.findMultiColor('悬赏_挑战弹窗界面') || null
		if (point) {
			thisScript.regionClick([[1045, 131, 1064, 146, 1000]]);
			return true;
		}
		const pointA = thisScript.findMultiColor('悬赏_识别秘闻界面') || null
		if (pointA) {
			thisScript.regionClick([[1164, 98, 1196, 132, 1000]]);
		}
		if (thisScript.oper({
			name: '悬赏_关闭弹窗',
			operator: [thisOperator[8], thisOperator[9],]
		})) {
			return true
		}
		// 领取奖励
		if (thisScript.oper({
			name: '悬赏_探索界面',
			operator: [thisOperator[10]]
		})) {
			const point = thisScript.findMultiColor('悬赏_宝箱') || null;
			if (point != null) {
				const oper = [
					[point.x, point.y, point.x + 1, point.y + 1, 1000]
				];
				thisScript.regionClick(oper);
				return true;
			}
		}
		// 确认追踪悬赏
		if (thisScript.oper({
			name: '悬赏_探索界面',
			operator: [{
				desc: thisOperator[10].desc
			}]
		})) {
			const suspension = thisScript.oper({
				name: '悬赏_探索界面_判断是否有悬赏',
				operator: [thisOperator[12]]
			});
			const point = thisScript.findMultiColor('悬赏_已追踪任务') || null;
			if (suspension) {
				// 如果有悬浮列表
				if (point != null) {
					const oper = [
						[point.x, point.y, point.x + 1, point.y + 1, 1000]
					];
					thisScript.regionClick(oper);
					return true;
				} else {
					// 如果没有追踪任务就滑动，可能是真蛇之类的把任务挤下去了
					if (swiper === 3) {
						swiper = 0;
						if (thisconf && thisconf.scheme_switch_enabled) {
							thisScript.rerun(thisconf.next_scheme);
							sleep(3000);
							return;
						} else {
							thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
							thisScript.stop();
							sleep(3000);
							return;
						}
					}
					thisScript.regionSwipe(thisOperator[11].oper[0], thisOperator[11].oper[1], [100, 300], 2000);
					swiper++
					return true
				}
			} else {
				// 如果没有悬浮列表说明任务做完了
				if (thisconf && thisconf.scheme_switch_enabled) {
					thisScript.rerun(thisconf.next_scheme);
				} else {
					thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
				}
			}
		}
		// 杂项
		if (thisScript.oper({
			name: '悬赏_杂项',
			operator: thisOperator.slice(13)
		})) {
			swiper = 0;
			return true
		}
	}
}