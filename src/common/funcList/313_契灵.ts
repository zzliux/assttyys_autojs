import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator, IFuncConfigOrigin } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func313 implements IFuncOrigin {
	id = 313;
	name = '契灵';
	desc = '需自行设置好“结契设置”';
	config = [{
		desc: '召唤配置',
		config: [{
			name: 'summon_type',
			desc: '召唤配置（使用鸣契石/直接探查）',
			type: 'list',
			data: ['鸣契石', '探查'],
			default: '鸣契石'
		}, {
			name: 'summon_qiling',
			desc: '使用鸣契石时召唤哪个契灵',
			type: 'list',
			data: ['1 小黑', '2 茨球', '3 火灵', '4 镇墓兽'],
			default: '4 镇墓兽'
		}]
	},
	{
		desc: '用于战斗前进入式神录进行御魂装配，需启用510功能，逗号分隔，-1,-1表示不切换预设，5,1表示第5个分组第1组预设',
		config: [{
			name: 'preset_pair_探查',
			desc: '探查',
			type: 'text',
			default: '5,1',
		}, {
			name: 'preset_pair_契灵_火灵',
			desc: '契灵_火灵',
			type: 'text',
			default: '4,1',
		}, {
			name: 'preset_pair_契灵_小黑',
			desc: '契灵_小黑',
			type: 'text',
			default: '4,2',
		}, {
			name: 'preset_pair_契灵_镇墓兽',
			desc: '契灵_镇墓兽',
			type: 'text',
			default: '4,3',
		}, {
			name: 'preset_pair_契灵_茨球',
			desc: '契灵_茨球',
			type: 'text',
			default: '4,4',
		}]
	}]
	operator: IFuncOperatorOrigin[] = [{
		// 0 契灵界面
		desc: [
			1280, 720,
			[
				[left, 44, 38, 0xf5e6a5],
				[left, 133, 36, 0xf5f1e0],
				[left, 177, 36, 0xf6f2e1],
				[left, 222, 38, 0xf4f0df],
				[left, 276, 34, 0xedc958],
				[right, 1191, 485, 0x755bc7],
			]
		]
	}, {
		// 1 追踪
		desc: [
			1280, 720,
			[
				[right, 1180, 478, 0xa69fcf],
				[right, 1192, 487, 0x6d6bc1],
				[right, 1165, 612, 0xfef4e6],
				[right, 1210, 608, 0xfdf3e5],
				[right, 1156, 634, 0xfef4e6],
				[right, 1174, 638, 0xfef4e6],
				[right, 1192, 631, 0xfdf3e5],
				[right, 1211, 630, 0xfef4e6],
			]
		],
		oper: [
			[center, 1280, 720, 1148, 602, 1225, 664, 4000],
			// [center, 1280, 720, 18, 472, 79, 501, 3000],
		]
	}, {
		// 2 探查
		desc: [
			1280, 720,
			[
				[right, 1155, 605, 0xfef4e6],
				[right, 1181, 598, 0xfef4e6],
				[right, 1197, 613, 0xfef4e6],
				[right, 1202, 600, 0xfef4e6],
				[right, 1189, 648, 0xfdf3e5],
				[left, 43, 40, 0xf5e5a6],
				[right, 1236, 29, 0xd4ae83],
				[right, 1042, 597, 0xc3a888],
				[right, 1204, 627, 0xfef4e6],
			]
		],
		oper: [
			[center, 1280, 720, 1139, 586, 1223, 668, 2000],
		]
	}, {
		// 3 契灵式神录 
		oper: [
			[center, 1280, 720, 1030, 563, 1071, 608, 1000], // 契灵式神录 
			[center, 1280, 720, 15, 1000, -1, -1, -1], // 找色后加范围
			[center, 1280, 720, 1160, 475, 1198, 502, 500], // 石头召唤
		]
	}, {
		// 4 契灵挑战
		desc: [
			1280, 720,
			[
				[left, 42, 39, 0xf6e8a9],
				[left, 337, 33, 0x352e23],
				[right, 1193, 583, 0xddd0ba],
				[right, 1007, 648, 0xe2d6bf],
				[right, 1046, 670, 0x382015],
				// [right, 875, 563, 0x403930],
			]
		],
		oper: [
			[center, 1280, 720, 1142, 577, 1243, 676, 1000],
		]
	}, {
		// 5 结契失败
		desc: [
			1280, 720,
			[
				[center, 512, 297, 0xbbbbbb],
				[center, 610, 277, 0xbbbbbb],
				[center, 684, 295, 0xb0b0b0],
				[center, 785, 296, 0xc0c0c0],
				[right, 1204, 590, 0x875015],
				[right, 1206, 627, 0x6c5220],
			]
		],
		oper: [
			[center, 1280, 720, 444, 552, 814, 701, 1000],
		]
	}, {
		// 6 结契成功
		desc: [
			1280, 720,
			[
				[center, 844, 44, 0x664d29],
				[center, 862, 46, 0xe5ce89],
				[center, 872, 45, 0xe5ce89],
				[center, 892, 51, 0xe4cd88],
				[center, 898, 52, 0xd9c280],
				[center, 877, 60, 0xe5ce89],
			]
		],
		oper: [
			[center, 1280, 720, 173, 534, 615, 691, 1000],
			[center, 1280, 720, 173, 534, 615, 691, 1000],
		]
	}, {
		// 7 棋盘
		desc: [
			1280, 720,
			[
				[left, 42, 346, 0x926d32],
				[center, 408, 263, 0x976f32],
				[center, 485, 337, 0x2e1b19],
				[center, 862, 337, 0x2e1b19],
				[center, 850, 270, 0x663f20],
				[right, 1057, 337, 0x2e1b19],
				[right, 1173, 286, 0x882c26],
			]
		],
		oper: [
			[center, 1280, 720, 312, 378, 385, 454, 1000], // 小
			[center, 1280, 720, 589, 434, 717, 551, 1000], // 中
			[center, 1280, 720, 899, 403, 998, 506, 1000], // 大
		]
	}, {
		// 8 结契成功
		desc: [
			1280, 720,
			[
				[center, 513, 237, 0xe1de9f],
				[center, 600, 231, 0xd6cd7b],
				[center, 688, 235, 0xdcd98e],
				[center, 791, 237, 0xe5e5b7],
			]
		],
		oper: [
			[center, 1280, 720, 372, 548, 846, 687, 1000],
		]
	}, {
		// 9 画线
		desc: [
			1280, 720,
			[
				[left, 31, 23, 0xbb9977],
				[left, 175, 37, 0xb38f61],
				[left, 255, 27, 0xb2916a],
				[center, 770, 583, 0x8c673d],
				[center, 508, 583, 0x8c673d],
				[center, 430, 341, 0x8c673d],
				[center, 1220, 646, 0x5e4e43],
			]
		],
		oper: [
			[center, 1280, 720, 423, 217, 515, 297, -1], // 推荐查找区域左上
			[center, 1280, 720, 640, 62, 722, 145, -1], // 推荐查找区域上
			[center, 1280, 720, 845, 206, 931, 294, -1], // 推荐查找区域右上
			[center, 1280, 720, 763, 447, 854, 536, -1], // 推荐查找区域右下
			[center, 1280, 720, 512, 450, 599, 540, -1], // 推荐查找区域左下

			[center, 1280, 720, 393, 260, 467, 333, 1000], // 连线左上
			[center, 1280, 720, 609, 122, 670, 170, 1000], // 连线上
			[center, 1280, 720, 809, 263, 881, 318, 1000], // 连线右上
			[center, 1280, 720, 729, 509, 801, 564, 1000], // 连线右下
			[center, 1280, 720, 472, 498, 545, 577, 1000], // 连线左下
		]
	}, {
		// 10 石头召唤选契灵确认
		desc: [
			1280, 720,
			[
				[left, 44, 38, 0xf5e6a5],
				[left, 65, 41, 0x8f5f33],
				[right, 1187, 612, 0xe5dac4],
				[right, 1199, 661, 0xe0d6bf],
				[center, 554, 682, 0x22160d],
				[center, 745, 681, 0x22160d],
			]
		],
		oper: [
			[center, 1280, 720, 151, 208, 276, 515, 1000], // 1 小黑
			[center, 1280, 720, 403, 215, 533, 515, 1000], // 2 茨球
			[center, 1280, 720, 657, 208, 791, 512, 1000], // 3 火灵
			[center, 1280, 720, 921, 214, 1050, 510, 1000], // 4 镇墓兽
			[center, 1280, 720, 1153, 601, 1227, 679, 5000], // 5 确认
		]
	}, {
		// 11 探索地图进入契灵之境
		desc: '探索地图界面',
		oper: [
			[left, 1280, 720, 938, 640, 996, 694, 1000],
		]
	}]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '契灵界面',
			operator: [thisOperator[0]]
		}) && thisScript.oper({
			id: 313,
			name: '契灵界面_追踪',
			operator: [thisOperator[1]]
		})) {
			return true;
		}

		const thisConf = thisScript.scheme.config['313'];
		if (thisScript.oper({
			name: '契灵界面',
			operator: [thisOperator[0]]
		}) && thisScript.oper({
			id: 313,
			name: '契灵界面_探查',
			operator: [{ desc: thisOperator[2].desc, retest: 500 }]
		})) {
			if (thisScript.global.qiling_Position) {
				thisScript.helperBridge.regionClick([thisScript.global.qiling_Position], thisScript.scheme.commonConfig.afterClickDelayRandom);
				thisScript.global.qiling_Position = null;
				return true;
			}
			let arrFind = [`契灵_火灵`, `契灵_小黑`, `契灵_镇墓兽`, `契灵_茨球`];
			let i: number;
			for (i = 0; i < arrFind.length; i++) {
				const p = thisScript.findMultiColor(arrFind[i])
				if (p) {
					const toClick = p;
					const toClickRegion = [
						toClick.x,
						toClick.y,
						toClick.x + thisOperator[3].oper[1][0],
						toClick.y + thisOperator[3].oper[1][0],
						thisOperator[3].oper[1][1],
					];
					thisScript.global.qiling_Position = toClickRegion;
					break;
				}
			}
			if (i === 4) {
				// 没找到任何契灵，选择召唤还是选择探查
				if ('鸣契石' === thisConf.summon_type) {
					// 单独走分支
					let curCnt = 0;
					let maxCount = 3;
					while (thisScript.oper({
						id: 313,
						name: '鸣契石',
						operator: [{
							desc: thisOperator[2].desc,
							oper: [thisOperator[3].oper[2]]
						}]
					})) {
						curCnt++;
						thisScript.keepScreen();
						if (curCnt >= maxCount) {
							thisScript.myToast(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
							thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
							thisScript.stop();
							sleep(2000);
							return false;
						}
					}
					if (curCnt) {
						return true;
					}
				} else if ('探查' === thisConf.summon_type) {
					// 探查通知下次点击区域为探查按钮，先要换御魂才行
					thisScript.global.qiling_Position = thisOperator[2].oper[0];
				}

				const [p, q] = (thisConf[`preset_pair_探查`] as string).split(/[,，]/);
				console.log(`设置探查预设分组：${p}, ${q}`);
				thisScript.global.preset_once_groupNum = parseInt(p?.trim(), 10);
				thisScript.global.preset_once_defaultNum = parseInt(q?.trim(), 10);
			} else {
				const [p, q] = (thisConf[`preset_pair_${arrFind[i]}`] as string).split(/[,，]/);
				console.log(`设置${arrFind[i]}预设分组：${p}, ${q}`);
				thisScript.global.preset_once_groupNum = parseInt(p?.trim(), 10);
				thisScript.global.preset_once_defaultNum = parseInt(q?.trim(), 10);
			}

			if (thisScript.global.qiling_last === null && thisScript.global.preset_once_groupNum > 0) {
				thisScript.global.qiling_last = i;
				thisScript.helperBridge.regionClick([thisOperator[3].oper[0]], thisScript.scheme.commonConfig.afterClickDelayRandom);
				thisScript.global.change_shikigami_state = 'flushed';
			} else if (thisScript.global.qiling_last !== i && thisScript.global.preset_once_groupNum > 0) {
				thisScript.helperBridge.regionClick([thisOperator[3].oper[0]], thisScript.scheme.commonConfig.afterClickDelayRandom);
				thisScript.global.change_shikigami_state = 'flushed';
			}
			return true;
		}

		if (thisScript.oper({
			id: 313,
			name: '契灵杂项',
			operator: [
				thisOperator[4], thisOperator[5], thisOperator[6],
				thisOperator[8], thisOperator[11],
			]
		})) {
			return true;
		}

		// // 选式盘，超过3次点着没反应，那就停止脚本并osp推送
		// const shipanIndex = { '小': 0, '中': 1, '大': 2 }[thisConf.shipan_sort as string];
		// let shipanCurCnt = 0;
		// let shipanMaxCount = 3;
		// while (thisScript.oper({
		//   id: 313,
		//   name: '契灵战斗_选式盘',
		//   operator: [{
		//     desc: thisOperator[7].desc,
		//     oper: [thisOperator[7].oper[shipanIndex]]
		//   }]
		// })) {
		//   shipanCurCnt++;
		//   thisScript.keepScreen();
		//   if (shipanCurCnt >= shipanMaxCount) {
		//     thisScript.myToast(`连续执行${shipanMaxCount}次挑战后未开始，脚本自动停止`);
		//     thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
		//     thisScript.stop();
		//     sleep(2000);
		//     return false;
		//   }
		// }
		// if (shipanCurCnt) {
		//   return true;
		// }

		// if (thisScript.oper({
		//   id: 313,
		//   name: '契灵划线_场景',
		//   operator: [{
		//     desc: thisOperator[9].desc
		//   }]
		// })) {
		//   const points = thisScript.findMultiColorEx('契灵_连线_推荐');
		//   const regionsOfRecommend = thisOperator[9].oper.slice(0, 5) // 0 ~ 4为推荐的查找区域
		//   const regionsOfSwipe = thisOperator[9].oper.slice(5, 10) // 5 ~ 9为连线的区域
		//   const recommend = []; // 推荐数组
		//   let can = []; // 建议数组
		//   for (let i = 0; i < points.length; i++) {
		//     const regionIndex = indexOfRegion(points[i], regionsOfRecommend);
		//     if (regionIndex >= 0) {
		//       recommend.push(regionIndex);
		//     }
		//   }

		//   if ('优先推荐' === thisConf.line_sort) {
		//     can = recommend;
		//   } else if ('优先非推荐' === thisConf.line_sort) {
		//     can = [0, 1, 2, 3, 4].filter(n => (recommend.indexOf(n) < 0));
		//   }

		//   // 能连的小于三个，从剩下的里面补
		//   if (can.length < 3) {
		//     const left = [0, 1, 2, 3, 4].filter(n => (can.indexOf(n) < 0));
		//     while (can.length < 3) {
		//       can.push(left.splice(random(0, left.length - 1), 1)[0]);
		//     }
		//   } else {
		//     // 超过3个取3个
		//     can = can.slice(0, 3);
		//   }
		//   // 连线
		//   console.log(`连线：${can}`);
		//   const toGesture = can.map(n => regionsOfSwipe[n]);
		//   thisScript.helperBridge.regionGesture(toGesture, random(1500, 2500), thisScript.scheme.commonConfig.afterClickDelayRandom);
		//   sleep(1000);
		//   return true;
		// }


		const qilingIndex = parseInt((thisConf.summon_qiling as string).split(' ')[0], 10) - 1;
		if (thisScript.oper({
			id: 313,
			name: '石头召唤确认',
			operator: [{
				desc: thisOperator[10].desc,
				oper: [thisOperator[10].oper[qilingIndex], thisOperator[10].oper[4]]
			}]
		})) {
			thisScript.global.qiling_Position = null;
			return true;
		}
		return false;
	}
}



// /**
//  * 返回point在第几个region里，如果都不在，返回-1
//  * @param point
//  * @param regions
//  * @returns
//  */
// function indexOfRegion(point: { x: number, y: number }, regions: number[][]): number {
//   const { x, y } = point;
//   for (let i = 0; i < regions.length; i++) {
//     const region = regions[i];
//     if (x >= region[0] && x <= region[2] && y >= region[1] && y <= region[3]) {
//       return i;
//     }
//   }
//   return -1;
// }