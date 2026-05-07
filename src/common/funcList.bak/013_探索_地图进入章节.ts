import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func013 implements IFuncOrigin {
	id = 13;
	name = '探索_地图进入章节';
	desc = '在地图界面时，默认选择最后一章进行挑战';
	config = [{
		desc: '',
		config: [{
			name: 'xy_switch',
			desc: '是否手动选章节',
			type: 'switch',
			default: false,
		}, {
			name: 'xy',
			desc: '文本的坐标中心（区域为左右各增加20）,格式为x,y',
			type: 'text',
			default: '1151,348',
		}]
	}, {
		desc: '探索进入章节_新版',
		config: [{
			name: 'new_go',
			desc: '新版探索进入章节',
			type: 'switch',
			default: false,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 探索地图界面
		desc: '探索地图界面',
		oper: [
			[right, 1280, 720, 1056, 503, 1246, 581, 1000],
			[center, 1280, 720, 446, 201, 492, 255, 200],
			[center, 1280, 720, 889, 517, 1002, 559, 1000],
			[center, 1280, 720, 44, 329, 141, 355, 1000],  // 3 新版点击困难
			[center, 1280, 720, 1107, 592, 1159, 653, 1000],   // 4 新版点击探索
			[center, 1280, 720, 840, 648, 869, 687, 1000]   // 5 英杰试炼
		],
		retest: 1000
	}, { // 1 章节内_普通_困难
		desc: [1280, 720,
			[
				[center, 276, 129, 0x493624],
				[center, 867, 131, 0x493624],
				[center, 1043, 147, 0xeecccc],
				[center, 904, 535, 0xf4b25f],
				[right, 1121, 35, 0xd7b389],
				[right, 1222, 32, 0xd3af85]]
		],
		oper: [
			[center, 1280, 720, 1036, 133, 1065, 158, 500]
		]
	}, { // 2
		oper: [
			[left, 1280, 720, 0, 0, 77, 45, 1000]
		]
	}, { // 3 普通按钮亮着的
		desc: [1280, 720,
			[
				[center, 333, 204, 0x4b1d53],
				[center, 340, 253, 0x670ecb],
			]
		],
	}, { // 4 新版_点击章节后界面
		desc: [1280, 720,
			[
				[left, 35, 30, 0xf7e5a7],
				[left, 111, 21, 0xf8edb5],
				[right, 848, 29, 0xd6c4a2],
				[right, 1105, 47, 0xcca273],
				[left, 304, 128, 0xa5361e],
				[left, 291, 144, 0x9e331b],
				[center, 323, 145, 0x9c3018],
			]
		],
		oper: [
			[center, 1280, 720, 39, 330, 144, 352, 500],
			[center, 1280, 720, 25, 19, 56, 46, 500]
		]
	}, { // 5 探索地图界面_新版
		desc: '探索地图界面_新版'
	}, { // 6新版地图困28
		desc: [1280, 720,
			[
				[left, 34, 37, 0xf7eaac],
				[left, 115, 29, 0xf7efb5],
				[right, 1252, 129, 0xd6b68b],
				[center, 335, 271, 0x5a2216],
				[center, 347, 272, 0x561e14]
			]
		],
		oper: [
			[center, 1280, 720, 368, 296, 435, 349, 500]
		]
	}, { // 7新版普通挑战亮着
		desc: [1280, 720,
			[
				[left, 36, 31, 0xf7e3a5],
				[left, 113, 23, 0xf7efb5],
				[right, 848, 29, 0xd6c4a2],
				[right, 1105, 47, 0xcca273],
				[right, 1038, 586, 0xdfd6be],
				[right, 1040, 660, 0xe4d8c3],
				[left, 304, 127, 0xa5361e],
				[left, 72, 233, 0x9a381e],
			]
		],
	}, { // 8英杰试炼界面
		desc: [1280, 720,
			[
				[left, 36, 38, 0xf3e4a3],
				[left, 114, 30, 0xf7efb5],
				[left, 163, 28, 0xf7f2df],
				[left, 167, 41, 0xf8f3e0],
				[left, 200, 29, 0xf8f3e0],
				[left, 236, 30, 0xf8f3e0],
				[left, 268, 39, 0xf8f3e0],
				[left, 311, 45, 0xc6c39c],
				[left, 311, 28, 0xcec79c],
			]
		],
		oper: [
			[center, 1280, 720, 23, 19, 55, 52, 500]
		]
	}, { // 9英杰试炼位置
		desc: [1280, 720,
			[
				[left, 34, 37, 0xf7eaac],
				[left, 114, 30, 0xf7efb5],
				[right, 1045, 32, 0xd6c4a2],
				[right, 1105, 51, 0xcca273],
				[right, 1251, 129, 0xd6b589],
				[left, 282, 271, 0xefedd6],
				[left, 277, 296, 0xede6d5],
				[left, 291, 321, 0xded7ce],
			]
		],
		oper: [
			[center, 1280, 720, 346, 1, 398, 29, 500]
		]
	}, { // 10突破界面
		desc: [1280, 720,
			[
				[left, 77, 171, 0xd6b89e],
				[left, 86, 274, 0xceb69c],
				[left, 137, 658, 0xd3c7bb],
				[right, 1231, 629, 0xe4d4b0],
				[right, 1206, 133, 0xe7d7cf],
				[center, 590, 669, 0x1e1918]
			]
		],
		oper: [
			[center, 1280, 720, 1190, 114, 1226, 150, 500]
		]
	}, { // 11探索界面点击退出后确认窗口
		desc: [1280, 720,
			[
				[left, 45, 35, 0x666046],
				[left, 124, 29, 0x66624b],
				[right, 1046, 28, 0x585043],
				[right, 1105, 45, 0x544330],
				[center, 555, 405, 0xf4b25d],
				[right, 827, 405, 0xf4b25d],
				[right, 812, 660, 0x534d41]
			]
		],
		oper: [
			[center, 1280, 720, 713, 392, 836, 419, 500]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config[13];
		if (thisconf.new_go !== true) {
			if (thisScript.oper({
				name: '探索_地图判断',
				operator: [{ desc: thisOperator[0].desc, retest: 500 }]
			})) {
				thisScript.global.tsAttackSwhipeNum = undefined;
				const point = thisScript.findMultiColor('探索_宝箱');
				if (point) {
					const oper = [[point.x, point.y, point.x + thisOperator[2].oper[0][2], point.y + thisOperator[2].oper[0][3], thisOperator[2].oper[0][4]]];
					thisScript.regionClick(oper);
					return true;
				} else {
					if (thisScript.oper({
						name: '探索_地图章节',
						operator: [{ desc: thisOperator[0].desc }]
					})) {
						if (thisconf.xy_switch) {
							const xy = String(thisconf.xy).split(',');
							if (xy.length !== 2) {
								thisScript.myToast('自定义坐标格式定义错误，请检查');
								return true;
							}
							const inX1 = parseInt(xy[0]);
							const inY1 = parseInt(xy[1]);
							thisScript.regionClick([[inX1 - 20, inY1 - 20, inX1 + 20, inY1 + 20, 1000]]);
						} else {
							thisScript.regionClick([thisOperator[0].oper[0]]);
						}
						if (thisScript.compareColorLoop(thisOperator[1].desc, 3000)) {
							if (thisScript.oper({
								id: 13,
								name: '探索_普通切困难_挑战',
								operator: [{
									desc: thisOperator[3].desc,
									oper: [thisOperator[0].oper[1], thisOperator[0].oper[2]]
								}]
							})) {
								return true;
							} else {
								// 困难挑战
								console.log('探索_困难_挑战');
								thisScript.regionClick([thisOperator[0].oper[2]]);
								return true;
							}
						}
					}
					return false;
				}
			} else if (thisScript.oper({
				name: '探索_地图进入最后一章_关闭章节窗口',
				operator: [thisOperator[1]]
			})) {
				thisScript.global.tsAttackSwhipeNum = undefined;
				return true;
			} else if (thisScript.oper({
				name: '探索_地图在突破界面',
				operator: [thisOperator[10]]
			})) {
				thisScript.global.tsAttackSwhipeNum = undefined;
				return true;
			} else if (thisScript.oper({
				name: '探索_章节里退出按钮', // 有时会卡住没点到
				operator: [thisOperator[11]]
			})) {
				return true;
			}
		} else {  // 这里是体服探索界面===============================
			if (thisScript.oper({
				name: '探索_地图判断_新版',
				operator: [{ desc: thisOperator[5].desc, retest: 500 }]
			})) {
				thisScript.global.tsAttackSwhipeNum = undefined;
				const point = thisScript.findMultiColor('探索_宝箱'); // 暂时还没刷出宝箱测试
				if (point) {
					const oper = [[point.x, point.y, point.x + thisOperator[2].oper[0][2], point.y + thisOperator[2].oper[0][3], thisOperator[2].oper[0][4]]];
					thisScript.regionClick(oper);
					return true;
				} else {
					if (thisScript.oper({
						name: '探索_地图章节_新版',
						operator: [{ desc: thisOperator[5].desc }] // 判断是否在探索界面
					})) {
						if (thisconf.xy_switch) { // 如果手动选章节，将执行这里
							const xy = String(thisconf.xy).split(',');
							if (xy.length !== 2) {
								thisScript.myToast('自定义坐标格式定义错误，请检查');
								return true;
							}
							const inX1 = parseInt(xy[0]);
							const inY1 = parseInt(xy[1]);
							thisScript.regionClick([[inX1 - 20, inY1 - 20, inX1 + 20, inY1 + 20, 1000]]);
						}
						if (thisScript.oper({  // 优先地图上找困28，这里是困28打完出来后的位置
							id: 13,
							name: '新版_地图找困28',
							operator: [thisOperator[6], thisOperator[9]]
						})) {
							if (thisScript.compareColorLoop(thisOperator[4].desc, 3000)) {
								if (thisScript.oper({
									id: 13,
									name: '新版_探索_普通切困难_挑战',
									operator: [{
										desc: thisOperator[7].desc,
										oper: [thisOperator[0].oper[3], thisOperator[0].oper[4]]
									}]
								})) {
									return true;
								} else {
									// 困难挑战
									console.log('探索_困难_挑战');
									thisScript.regionClick([thisOperator[0].oper[4]]);
									return true;
								}
							}
						} else { // 刚进入地图，不在困28位置
							if (thisScript.oper({
								name: '探索_地图章节_新版',
								operator: [{ desc: thisOperator[5].desc, oper: [thisOperator[0].oper[5]] }] // 点击英杰试炼
							})) {
								if (thisScript.compareColorLoop(thisOperator[8].desc, 3000)) { // 英杰试炼返回
									if (thisScript.oper({
										name: '英杰试炼',
										operator: [thisOperator[8]]
									})) {
										return true;
									}
								}
							}
						}
					}
					return false;
				}
			} else if (thisScript.oper({
				name: '新版_打完后出来关闭一次窗口',
				operator: [{
					desc: thisOperator[4].desc,
					oper: [thisOperator[4].oper[1]]
				}]
			})) {
				thisScript.global.tsAttackSwhipeNum = undefined;
				return true;
			} else if (thisScript.oper({
				name: '探索_地图在突破界面',
				operator: [thisOperator[10]]
			})) {
				thisScript.global.tsAttackSwhipeNum = undefined;
				return true;
			} else if (thisScript.oper({
				name: '探索_章节里退出按钮', // 有时会卡住没点到
				operator: [thisOperator[11]]
			})) {
				return true;
			}
		}
		return false;
	}
}
