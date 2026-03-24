import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
let join = true;
let fight = false;

export class Func691 implements IFuncOrigin {
	id = 691;
	name = '大萨达F';
	config = [{
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
			default: '返回庭院',
		}, {
			name: 'afterCountOper',
			desc: '不开启切换方案	则',
			type: 'list',
			data: ['停止脚本', '关闭应用', '不进行任何操作'],
			default: '停止脚本',
			value: null,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 好友
		desc: [1280, 720,
			[
				[right, 878, 618, 0xef98a3],
				[right, 928, 632, 0xdcb8a9],
				[right, 889, 655, 0x6e3089],
				[right, 920, 650, 0x9eddf3],
			]
		],
		oper: [
			[center, 1280, 720, 882, 625, 930, 662, 1000],
		]
	}, { // 1 残废好友
		desc: [1280, 720,
			[
				[right, 860, 638, 0xf0b5b2],
				[right, 898, 638, 0xddc3be],
				[right, 894, 613, 0x312d45],
				[right, 876, 656, 0xd93e5f],
			]
		],
		oper: [
			[center, 1280, 720, 858, 623, 904, 662, 1000],
		]
	}, { // 2 协战
		desc: [1280, 720,
			[
				[right, 1218, 208, 0xb9661a],
				[right, 1208, 331, 0x5e3d29],
				[right, 1210, 455, 0x5c3b27],
				[right, 1207, 579, 0x5e3d29],
			]
		],
		oper: [
			[center, 1280, 720, 1210, 540, 1236, 615, 1000],
		]
	}, { // 3 出战
		desc: [1280, 720,
			[
				[center, 495, 388, 0xb49778],
				[right, 647, 391, 0xb59779],
				[center, 503, 481, 0xa98d6e],
				[center, 623, 488, 0xa68a6b],
				[right, 658, 475, 0xcab793],
				[center, 486, 197, 0x4a302d],
			]
		],
		oper: [
			[center, 1280, 720, 505, 384, 636, 464, 1000],
		]
	}, { // 4 关闭好友
		desc: [1280, 720,
			[
				[center, 497, 389, 0xb49779],
				[right, 648, 394, 0xb39678],
				[center, 611, 374, 0x0181a7],
				[center, 619, 378, 0xfffcf5],
				[center, 613, 488, 0xa38868],
			]
		],
		oper: [
			[center, 1280, 720, 1158, 94, 1196, 132, 1000],
		]
	}, { // 5 庭院进入探索
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 658, 127, 697, 170, 1000],
		]
	}, { // 6 探索地图界面
		desc: '探索地图界面',
		oper: [
			[left, 1280, 720, 155, 640, 211, 694, 1000], // 御魂
		]
	}, { // 7 御魂选类型的界面
		desc: [
			1280, 720,
			[
				[left, 45, 37, 0xf5e5a5],
				[right, 1232, 43, 0xcaa274],
				[left, 182, 141, 0x323045],
				[center, 547, 133, 0x5b3232],
				[right, 889, 147, 0x555534],
				[right, 1240, 181, 0x344158],
			]
		],
		oper: [
			[center, 1280, 720, 85, 117, 325, 503, 500], // 御魂-八岐大蛇
		]
	}, { // 8 三类御魂
		desc: [1280, 720,
			[
				[left, 41, 36, 0xf9eeb3],
				[right, 1124, 47, 0xd8b188],
				[right, 1237, 47, 0xd3af84],
				[right, 1161, 608, 0xded2bb],
				[right, 1207, 671, 0x372015]
			]
		],
		oper: [
			[right, 1280, 720, 1116, 602, 1197, 683, 2000]
		]
	}, { // 9 御魂九层
		desc: [1280, 720,
			[
				[left, 220, 443, 0xcfb88e],
				[center, 424, 443, 0xcfb88e],
				[left, 277, 490, 0xbaa887],
				[center, 387, 480, 0xccb489],
				[right, 1002, 608, 0xdfd3bc],
			]
		],
		oper: [
			[center, 1280, 720, 215, 335, 435, 372, 1000],
		]
	},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (join) {
			if (thisScript.oper({
				id: 691,
				name: '好友界面',
				operator: [thisOperator[0], thisOperator[1], thisOperator[2], thisOperator[3]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '好友界面',
				operator: [thisOperator[4]]
			})) {
				join = false;
				fight = true;
				return true;
			}
		}
		if (fight) {
			if (thisScript.oper({
				id: 691,
				name: '出战',
				operator: [thisOperator[4], thisOperator[5], thisOperator[6], thisOperator[7]]
			})) {
				return true;
			}
			let curCnt = 0;
			const maxCount = 3;
			while (thisScript.oper({
				id: 6,
				name: '御魂/御灵挑战',
				operator: [thisOperator[8]]
			})) {
				curCnt++;
				thisScript.keepScreen(false);
				if (curCnt >= maxCount) {
					fight = false;
					return thisScript.oper({
						id: 691,
						name: '出战',
						operator: [thisOperator[9]]
					})
				}
			}
		}
		return false;
	}
}