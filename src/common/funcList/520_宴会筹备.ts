import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func520 implements IFuncOrigin {
	id = 520;
	name = '宴会筹备';
	desc: '进入探索，狸猫饿鬼河童各打一次（需挑战券）'
	operator: IFuncOperatorOrigin[] = [{
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 1145, 212, 1163, 227, 1000],
			[center, 1280, 720, 1144, 500, 1160, 510, 1000],
			[center, 1280, 720, 890, 518, 1000, 558, 1000],
		]
	}, { // 1 挑战
		desc: [
			1280, 720,
			[
				[center, 347, 127, 0x493625],
				[center, 892, 140, 0x473524],
				[right, 1080, 288, 0x925520],
				[right, 1080, 422, 0x5f3d28],
			]
		],
		oper: [
			[center, 1280, 720, 1078, 379, 1113, 457, 1000],
		]
	}, { // 2 狸猫挑战
		desc: [
			1280, 720,
			[
				[left, 274, 511, 0x774f31],
				[left, 293, 514, 0xfae9ad],
				[left, 284, 533, 0x824018],
				[left, 282, 520, 0xc48a4e],
				[left, 302, 522, 0xf5f5dd],
			]
		],
		oper: [
			[center, 1280, 720, 892, 521, 998, 554, 1000],
		]
	}, { // 3 饿鬼挑战
		desc: [
			1280, 720,
			[
				[left, 280, 504, 0xf8dc67],
				[left, 276, 510, 0xf8df7d],
				[left, 289, 515, 0x655b5c],
				[left, 300, 528, 0xf9f9f3],
				[left, 300, 551, 0x5078a9],
				[left, 313, 537, 0xd5cbce],
			]
		],
		oper: [
			[center, 1280, 720, 890, 518, 1000, 558, 1000],
		]
	}, { // 4 河童挑战
		desc: [
			1280, 720,
			[
				[left, 272, 508, 0x446a7d],
				[left, 302, 510, 0x5cb297],
				[left, 292, 524, 0xae9745],
				[left, 285, 544, 0x2c203e],
				[left, 300, 548, 0x5156a5],
			]
		],
		oper: [
			[center, 1280, 720, 888, 517, 998, 561, 1000],
		]
	}, { // 5 返回
		desc: [
			1280, 720,
			[
				[left, 192, 94, 0x644628],
				[right, 1054, 146, 0xe4b6b7],
				[right, 1086, 420, 0x8d5321],
				[right, 1095, 547, 0x3b2313],
			]
		],
		oper: [
			[center, 1280, 720, 1030, 125, 1070, 157, 1000],
		]
	}, { // 6 第一章
		desc: [
			1280, 720,
			[
				[right, 1141, 214, 0xf8f3e0],
				[right, 1159, 213, 0xf8f3e0],
				[right, 1173, 206, 0xf7f2df],
				[right, 1115, 225, 0xe7e1cf],
				[right, 1150, 340, 0xf8f3e0],
			]
		]
	}, { // 7 庭院进入探索
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 658, 127, 697, 170, 1000],
		]
	}, { // 8 探索地图进入秘闻
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 544, 636, 602, 701, 1000],
		]
	}, { // 9 秘闻往下滑动
		desc: [1280, 720,
			[
				[left, 61, 149, 0x532f2c],
				[left, 74, 484, 0x573534],
				[left, 122, 135, 0x918776],
				[right, 763, 134, 0x9c917f],
				[right, 1193, 137, 0x552d28],
				[right, 836, 178, 0x69413c],
			]
		],
		oper: [
			[center, 1280, 720, 758, 587, 803, 618, 1000],
			[center, 1280, 720, 751, 27, 799, 56, 1000],
		]
	}, { // 10 点击荒川秘闻(左)
		desc: [1280, 720,
			[
				[left, 139, 278, 0x717c8d],
				[left, 137, 356, 0x707b8c],
				[left, 215, 299, 0xe8eaef],
				[left, 242, 360, 0xe7e9ee],
				[left, 174, 356, 0x222231],
				[left, 235, 279, 0xe08275],
			]
		],
		oper: [
			[center, 1280, 720, 181, 297, 428, 346, 1000],
		]
	}, { // 11 进入荒川秘闻
		desc: [1280, 720,
			[
				[right, 955, 204, 0xd0e6e6],
				[right, 1158, 192, 0x802f2f],
				[right, 1055, 476, 0x183e5d],
				[right, 1035, 531, 0x204b68],
				[right, 941, 447, 0xdfdee2],
				[right, 968, 363, 0x2e345b],
				[right, 1010, 347, 0x293172],
			]
		],
		oper: [
			[center, 1280, 720, 1150, 606, 1245, 677, 1000],
		]
	}, { // 12 荒川秘闻往下滑动
		desc: [1280, 720,
			[
				[left, 96, 164, 0xbc9cd4],
				[left, 77, 226, 0xa385b7],
				[left, 83, 184, 0xb999d2],
				[left, 103, 186, 0xbc9bd4],
				[left, 142, 66, 0x3a383e],
				[right, 1098, 66, 0x3d3b41],
				[right, 890, 152, 0xf3f6f7],
			]
		],
		oper: [
			[center, 1280, 720, 575, 582, 612, 615, 1000],
			[center, 1280, 720, 580, 121, 615, 152, 1000],
		]
	}, { // 13 荒川秘闻挑战
		desc: [1280, 720,
			[
				[left, 189, 357, 0x782d2c],
				[left, 306, 368, 0xb24d44],
				[left, 223, 362, 0x7d2e2e],
				[center, 350, 428, 0xeba94f],
				[center, 368, 410, 0x882111],
				[center, 387, 442, 0x231818],
			]
		],
		oper: [
			[center, 1280, 720, 198, 395, 289, 450, 1000],
			[center, 1280, 720, 1056, 575, 1149, 643, 1000],
		]
	}, { // 14 点击荒川秘闻(右)
		desc: [1280, 720,
			[
				[center, 489, 282, 0x738294],
				[center, 488, 350, 0x6b7888],
				[center, 556, 294, 0xe4e1e6],
				[center, 560, 319, 0xd6d7de],
				[center, 579, 361, 0xe6e7ee],
				[center, 639, 295, 0xd6cfc6],
			]
		],
		oper: [
			[center, 1280, 720, 181, 297, 428, 346, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (!thisScript.scheme.list.includes(522)) {
			thisScript.global.liao_banquet_collect = true;
		}
		if (thisScript.global.liao_banquet_collect) {
			if (thisScript.oper({
				name: '第一章',
				operator: [thisOperator[6]]
			})) {
				thisScript.doPush(thisScript, { text: '宴会筹备失败，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				sleep(3000);
				return;
			}
			if (thisScript.oper({
				name: '探索界面',
				operator: [{ desc: thisOperator[0].desc }]
			})) {
				let point;
				if (thisScript.runTimes['2'] === undefined || thisScript.runTimes['2'] < 1) {
					point = thisScript.findMultiColor('宴会筹备_狸猫');
				} else if (thisScript.runTimes['2'] < 2) {
					point = thisScript.findMultiColor('宴会筹备_饿鬼');
				} else if (thisScript.runTimes['2'] < 3) {
					point = thisScript.findMultiColor('宴会筹备_河童');
				} else if (thisScript.runTimes['2'] < 6) {
					thisScript.regionClick([thisOperator[8].oper[0]]);
				} else {
					thisScript.doPush(thisScript, { text: '宴会筹备已完成，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
					sleep(3000);
					return;
				}
				if (point) {
					const oper = [[point.x + 5, point.y + 5, point.x + 10, point.y + 10, 2500]];
					thisScript.regionClick(oper);
					return true;
				} else {
					thisScript.regionSwipe(thisOperator[0].oper[0], thisOperator[0].oper[1], [1000, 1050], 200);
				}
				return true;
			}
			if (thisScript.oper({
				name: '打怪确认',
				operator: [thisOperator[1], thisOperator[7]]
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '偏移返回',
				operator: [thisOperator[5]]
			})) {
				return true;
			}
			const pointA = thisScript.findMultiColor('宴会筹备');
			if (pointA) {
				const oper = [[pointA.x, pointA.y, pointA.x + 10, pointA.y + 10, 1000]];
				thisScript.regionClick(oper);
				thisScript.regionClick([thisOperator[0].oper[2]]);
				return true;
			}
			if (thisScript.oper({
				name: '进入荒川秘闻',
				operator: [thisOperator[10], thisOperator[11], thisOperator[14]]
			})) {
				return true;
			}
			if (thisScript.runTimes['2'] === 6) {
				thisScript.global.liao_banquet_collect = false;
				thisScript.global.liao_banquet_onGoing = true;
				return true;
			} else if (thisScript.oper({
				name: '荒川秘闻挑战',
				operator: [thisOperator[13]]
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '荒川秘闻往下滑动',
				operator: [{ desc: thisOperator[12].desc }]
			})) {
				thisScript.regionSwipe(thisOperator[12].oper[0], thisOperator[12].oper[1], [400, 510], 1000);
				return true;
			}
			if (thisScript.oper({
				name: '秘闻往下滑动',
				operator: [{ desc: thisOperator[9].desc }]
			})) {
				thisScript.regionSwipe(thisOperator[9].oper[0], thisOperator[9].oper[1], [400, 510], 1000);
				return true;
			}
		}
	}
}