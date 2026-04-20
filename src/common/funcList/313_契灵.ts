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
			name: 'type',
			desc: '攻打类型',
			type: 'list',
			data: ['镇墓兽', '火灵', '茨球', '小黑', '针女', '薙魂', '月魔兔', '狐火'],
			default: '镇墓兽'
		}, {
			name: 'buy',
			desc: '是否购买石头',
			type: 'switch',
			default: false
		}, {
			name: 'team',
			desc: '选择攻打方式',
			type: 'list',
			data: ['单人', '队长', '队员'],
			default: '单人'
		}, {
			name: 'next_scheme',
			desc: '无盘子后下一个方案',
			type: 'scheme',
			default: '__停止脚本__',
		}]
	}]

	operator: IFuncOperatorOrigin[] = [{ // 0 探索地图进入契灵之境
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 940, 648, 996, 683, 3000],
		]
	}, { // 1 探索地图界面_含时空秘境进入契灵之境
		desc: '探索地图界面_含时空秘境',
		oper: [
			[left, 1280, 720, 1132, 641, 1198, 696, 3000],
		]
	}, { // 2 逢魔之原切换平安京
		desc: [1280, 720,
			[
				[center, 436, 616, 0xac8755],
				[right, 826, 614, 0xbb915a],
				[center, 542, 688, 0x7a5539],
				[right, 736, 678, 0x8f6d46],
				[left, 87, 331, 0xfffcd8],
				[left, 84, 351, 0xffffe4],
			]
		],
		oper: [
			[center, 1280, 720, 75, 333, 106, 365, 1000],
		]
	}, { // 3 选择契灵
		desc: [1280, 720,
			[
				[left, 54, 30, 0xefd390],
				[left, 44, 40, 0xf5e6a6],
				[left, 56, 50, 0xf0d591],
				[left, 77, 638, 0xf4f4cf],
				[left, 186, 659, 0xf9eedb],
				[left, 293, 627, 0xf1efc5],
			]
		],
		oper: [
			[center, 1280, 720, 230, 496, 256, 522, 1000],
			[center, 1280, 720, 431, 530, 464, 555, 1000],
			[center, 1280, 720, 688, 495, 718, 528, 1000],
			[center, 1280, 720, 938, 496, 970, 519, 1000],
		]
	}, { // 4 召唤
		desc: [1280, 720,
			[
				[center, 559, 623, 0xffe392],
				[center, 566, 659, 0xffedbc],
				[right, 721, 631, 0xffe291],
				[right, 723, 655, 0xffecb8],
				[center, 491, 562, 0xefcea4],
				[right, 706, 561, 0xeccda0],
			]
		],
		oper: [
			[center, 1280, 720, 770, 544, 807, 580, 1000],
			[center, 1280, 720, 564, 627, 719, 659, 1000],
			[center, 1280, 720, 688, 415, 828, 447, 3000],
		]
	}, { // 5 单人/组队
		desc: [1280, 720,
			[
				[left, 152, 585, 0x9b6c35],
				[left, 87, 443, 0xf6ecc9],
				[left, 102, 510, 0xe1d1a7],
				[right, 712, 587, 0xfff6d2],
				[right, 809, 592, 0xceb995],
				[right, 1012, 591, 0xe3d8c1],
			]
		],
		oper: [
			[center, 1280, 720, 1151, 591, 1244, 662, 1000],
			[center, 1280, 720, 964, 590, 1059, 656, 1000],
		]
	}, { // 6 结契失败
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
			[center, 1280, 720, 404, 609, 578, 644, 1000]	//	放弃结契 总不能有人想选再次结契吧
		]
	}, { // 7 结契成功
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
	}, { // 8 盘子已满提醒
		desc: [
			1280, 720,
			[
				[center, 413, 223, 0x654435],
				[center, 868, 223, 0x644434],
				[center, 559, 352, 0x4b5ee9],
				[center, 561, 431, 0xdf6851],
				[center, 712, 430, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 678, 405, 839, 461, 1000], // 确认
			[center, 1280, 720, 415, 240, 869, 341, 1000], // 弹窗区域ocr
			[center, 1280, 720, 446, 412, 598, 453, 1000], // 取消
		]
	}, { // 9 棋盘
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
	}, { // 10 组队确认
		desc: [
			1280, 720,
			[
				[center, 372, 145, 0x684636],
				[center, 907, 145, 0x674535],
				[center, 362, 572, 0x5c3d2f],
				[center, 900, 573, 0x624233],
				[right, 1186, 634, 0x9b9483],
				[center, 561, 515, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 407, 417, 429, 439, 1000], // 不公开
			[center, 1280, 720, 537, 495, 744, 536, 1000], // 创建
		]
	}, { // 11 逢魔之原切换平安京
		desc: [1280, 720,
			[
				[center, 463, 615, 0x875a30],
				[right, 822, 615, 0x885c30],
				[center, 529, 687, 0x784e2e],
				[right, 742, 675, 0x774e2f],
				[right, 1189, 339, 0xfff9cd],
				[right, 1195, 357, 0xffffe4],
			]
		],
		oper: [
			[center, 1280, 720, 1174, 343, 1209, 373, 1000],
		]
	}, { // 12 结契成功
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
	}, { // 13 石头购买
		desc: [1280, 720,
			[
				[center, 513, 90, 0x8c4e1b],
				[right, 772, 94, 0x914820],
				[right, 785, 468, 0xffdda4],
				[right, 784, 484, 0xffdda5],
				[right, 703, 581, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 762, 464, 806, 501, 1000],
			[center, 1280, 720, 568, 559, 718, 599, 2000],
			[center, 1280, 720, 568, 559, 718, 599, 1000],
		]
	},
	]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['313'];
		if (thisconf.buy) {
			if (thisScript.oper({
				id: 313,
				name: '石头购买',
				operator: [thisOperator[13]]
			})) {
				return true;
			}
		}
		if (['镇墓兽', '火灵', '茨球', '小黑'].includes(thisconf.type as string)) {
			if (thisScript.oper({
				id: 313,
				name: '切换平安京',
				operator: [thisOperator[2]]
			})) {
				return true;
			}
		} else if (['针女', '薙魂', '月魔兔', '狐火'].includes(thisconf.type as string)) {
			if (thisScript.oper({
				id: 313,
				name: '切换逢魔之原',
				operator: [thisOperator[11]]
			})) {
				return true;
			}
		}
		if (thisconf.team !== '队员') {
			switch ((thisconf.type as string)) {
				case '镇墓兽':
				case '针女':
					if (thisScript.oper({
						id: 313,
						name: '镇墓兽||针女',
						operator: [{ desc: thisOperator[3].desc, oper: [thisOperator[3].oper[0]] }]
					})) {
						return true;
					}
					break;
				case '火灵':
				case '薙魂':
					if (thisScript.oper({
						id: 313,
						name: '火灵||薙魂',
						operator: [{ desc: thisOperator[3].desc, oper: [thisOperator[3].oper[1]] }]
					})) {
						return true;
					}
					break;
				case '茨球':
				case '月魔兔':
					if (thisScript.oper({
						id: 313,
						name: '茨球||月魔兔',
						operator: [{ desc: thisOperator[3].desc, oper: [thisOperator[3].oper[2]] }]
					})) {
						return true;
					}
					break;
				case '小黑':
				case '狐火':
					if (thisScript.oper({
						id: 313,
						name: '小黑||狐火',
						operator: [{ desc: thisOperator[3].desc, oper: [thisOperator[3].oper[3]] }]
					})) {
						return true;
					}
					break;
			}
		}
		if (thisScript.oper({
			id: 313,
			name: '组队/单人',
			operator: [{ desc: thisOperator[5].desc }]
		})) {
			if (thisconf.team === '队长') {
				thisScript.regionClick([thisOperator[5].oper[1]]);
				thisScript.global.team_up_Frist = true;
				return true;
			} else if (thisconf.team === '单人') {
				thisScript.regionClick([thisOperator[5].oper[0]]);
				return true;
			}
		}
		if (thisScript.oper({
			id: 313,
			name: '契灵弹窗判断契忆',
			operator: [{ desc: thisOperator[8].desc }]
		})) {
			const temp = thisScript.findText('契', 0, thisOperator[8].oper[1], '包含');
			if (temp.length > 0) {
				thisScript.regionClick([thisOperator[8].oper[2]]);
				thisScript.rerun('返回庭院');
				sleep(3000);
				return true;
			}
			thisScript.regionClick([thisOperator[8].oper[0]]);
			return true;
		}
		let curCnt = 0;
		const maxCount = 4;
		while (thisScript.oper({
			id: 313,
			name: '契灵无盘子',
			operator: [{ desc: thisOperator[9].desc }]
		})) {
			curCnt++;
			thisScript.keepScreen(false);
			if (curCnt >= maxCount) {
				thisScript.regionClick([thisOperator[9].oper[1]]);
				thisScript.doPush(thisScript, { text: '无盘子', before() { thisScript.myToast('无盘子'); } });
				thisScript.rerun(thisconf.next_scheme);
				sleep(2000);
				return true;
			}
			sleep(1000);
		}
		if (thisScript.oper({
			id: 313,
			name: '契灵杂项',
			operator: [thisOperator[0], thisOperator[1], thisOperator[4], thisOperator[6]
				, thisOperator[7], thisOperator[10], thisOperator[12]]
		})) {
			return true;
		}
		// return false;
	}
}
