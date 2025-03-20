import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
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
		}, {
			name: 'team',
			desc: '是否组队并且为组队队长（队员只需开启《组队乘客》方案）',
			type: 'switch',
			default: false
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
				[right, 1238, 29, 0xd4ae83],
				[left, 44, 39, 0xf6e7a7],
				[left, 98, 39, 0x7a5b39],
				[left, 170, 39, 0x5c4122],
				[left, 269, 41, 0x593716],
				[right, 1189, 463, 0xdaecaf],
			]
		],
	}, { //  1 追踪
		desc: [
			1280, 720,
			[
				[right, 1174, 462, 0xe9c9b3],
				[right, 1196, 458, 0x7162c4],
				[right, 1190, 446, 0xbaa5d8],
				[right, 1189, 467, 0xf4ddee],
				[right, 1195, 457, 0x745dc6],

				[right, 1007, 648, 0xe2d6bf],
				[right, 1046, 670, 0x382015],
			]
		],
		oper: [
			[center, 1280, 720, 1165, 440, 1216, 486, 1000],
		]
	}, { // 2 探查
		desc: [
			1280, 720,
			[
				[right, 1155, 605, 0x3c2b26],
				[right, 1181, 598, 0x74655e],
				[right, 1197, 613, 0x483832],
				[right, 1202, 600, 0x3c2b26],
				[left, 43, 40, 0xf6eaad],
				[right, 1236, 29, 0xd4ae83],
				[right, 1042, 597, 0xc5a989],
				[right, 1204, 627, 0x83766d],
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
			]
		],
		oper: [
			[center, 1280, 720, 1142, 577, 1243, 676, 1000], // 挑战
			[center, 1280, 720, 962, 581, 1061, 656, 1000], // 求援
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
				[center, 520, 339, 0x9f9f9f],
				[center, 797, 328, 0xc1c1c1],
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
				[center, 740, 52, 0x644c27],
				[center, 817, 59, 0x432b13],
				[center, 743, 240, 0x644c27],
				[center, 812, 245, 0x472e14],
				[center, 740, 385, 0x644c27],
				[center, 816, 392, 0x452c14],
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
	}, { // 9 画线
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
	}, { // 10 石头召唤选契灵确认
		desc: [
			1280, 720,
			[
				[left, 45, 39, 0xf4e5a6],
				[center, 507, 97, 0xfbe4c3],
				[center, 775, 98, 0xfce1c3],
				[center, 488, 561, 0xedcfa0],
				[center, 605, 634, 0x6f61c3],
			]
		],
		oper: [
			[center, 1280, 720, 214, 348, 281, 400, 1000], // 1 小黑
			[center, 1280, 720, 442, 332, 512, 390, 1000], // 2 茨球
			[center, 1280, 720, 712, 321, 785, 399, 1000], // 3 火灵
			[center, 1280, 720, 932, 335, 1010, 390, 1000], // 4 镇墓兽
			[center, 1280, 720, 585, 621, 702, 654, 2000], // 5 确认
		]
	}, { // 11 探索地图进入契灵之境
		desc: '探索地图界面',
		oper: [
			[left, 1280, 720, 1032, 638, 1093, 676, 1000],
		]
	}, { // 12 盘子已满提醒
		desc: [
			1280, 720,
			[
				[center, 413, 223, 0x654435],
				[center, 868, 223, 0x644434],
				[center, 492, 272, 0xaa3936],
				[center, 628, 276, 0xa93331],
				[center, 559, 352, 0x4b5ee9],
				[center, 561, 431, 0xdf6851],
				[center, 712, 430, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 678, 405, 839, 461, 1000],
		]
	}, { // 13 组队确认
		desc: [
			1280, 720,
			[
				[center, 372, 145, 0x684636],
				[center, 907, 145, 0x674535],
				[center, 362, 572, 0x5c3d2f],
				[center, 900, 573, 0x624233],
				[right, 1006, 651, 0x9d9484],
				[right, 1186, 634, 0x9b9483],
				[center, 561, 515, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 407, 417, 429, 439, 1000], // 不公开
			[center, 1280, 720, 537, 495, 744, 536, 1000], // 创建
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
				thisScript.regionClick([thisScript.global.qiling_Position]);
				thisScript.global.qiling_Position = null;
				return true;
			}
			const arrFind = ['契灵_火灵', '契灵_小黑', '契灵_镇墓兽', '契灵_茨球'];
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
					const maxCount = 3;
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

				const [p, q] = (thisConf['preset_pair_探查'] as string).split(/[,，]/);
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
				thisScript.regionClick([thisOperator[3].oper[0]]);
				thisScript.global.change_shikigami_state = 'flushed';
			} else if (thisScript.global.qiling_last !== i && thisScript.global.preset_once_groupNum > 0) {
				thisScript.global.qiling_last = i;
				thisScript.regionClick([thisOperator[3].oper[0]]);
				thisScript.global.change_shikigami_state = 'flushed';
			}
			return true;
		}

		if (thisScript.oper({
			id: 313,
			name: '契灵组队队长',
			operator: [{ desc: thisOperator[4].desc }]
		})) {
			if (thisConf.team) {
				thisScript.regionClick([thisOperator[4].oper[1]]);
				thisScript.global.team_up_Frist = true;
			} else {
				thisScript.regionClick([thisOperator[4].oper[0]]);
			}
			return true;
		}
		if (thisScript.oper({
			id: 313,
			name: '契灵杂项',
			operator: [
				thisOperator[6], thisOperator[8], thisOperator[11], thisOperator[12], thisOperator[13],
			]
		})) {
			return true;
		}
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
