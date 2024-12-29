import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
let x = 0;
export class Func520 implements IFuncOrigin {
	id = 520;
	name = '宴会筹备';
	desc: '进入探索，狸猫饿鬼河童各打三次（需挑战券）'
	operator: IFuncOperatorOrigin[] = [{
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 1145, 212, 1163, 227, 1000],
			[center, 1280, 720, 1144, 500, 1160, 510, 1000],
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
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
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
			if (thisScript.runTimes['2'] === undefined || thisScript.runTimes['2'] < 3) {
				point = thisScript.findMultiColor('宴会筹备_狸猫');
			} else if (thisScript.runTimes['2'] < 6) {
				point = thisScript.findMultiColor('宴会筹备_饿鬼');
			} else if (thisScript.runTimes['2'] < 9) {
				point = thisScript.findMultiColor('宴会筹备_河童');
			} else {
				thisScript.doPush(thisScript, { text: '宴会筹备已完成，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				sleep(3000);
				return;
			}
			if (point) {
				const oper = [[point.x, point.y, point.x + 10, point.y + 10, 2500]];
				thisScript.regionClick(oper);
				return true;
			} else {
				thisScript.regionSwipe(thisOperator[0].oper[0], thisOperator[0].oper[1], [1400, 1410], 1200, 100);
			}
			return true;
		}
		if (thisScript.oper({
			name: '打怪确认',
			operator: [thisOperator[1], thisOperator[2], thisOperator[3], thisOperator[4]]
		})) {
			return true;
		}
		const pointA = thisScript.findMultiColor('宴会筹备');
		if (pointA) {
			const oper = [[pointA.x, pointA.y, pointA.x + 10, pointA.y + 10, 1000]];
			thisScript.regionClick(oper);
			return true;
		}
		if (thisScript.oper({
			name: '偏移返回',
			operator: [thisOperator[5]]
		})) {
			return true;
		}
	}
}