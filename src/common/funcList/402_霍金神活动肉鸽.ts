import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func402 implements IFuncOrigin {
	id = 402;
	name = '霍金神肉鸽';
	desc = '只会选关卡战斗,开关商店选项用来做成就';
	config = [{
		desc: '',
		config: [{
			name: 'shop',
			desc: '遇到商店停止并推送',
			type: 'switch',
			default: false,
		}],
	}]
	operator: IFuncOperatorOrigin[] = [{ // 0 选关卡
		desc: [
			1280, 720,
			[
				[right, 1078, 33, 0x7a3e3e],
				[right, 1088, 27, 0xfc1d03],
				[right, 1097, 45, 0x9e0b00],
				[right, 1088, 51, 0x703838],
				[right, 1071, 52, 0x733939],
				[right, 1195, 638, 0xffffff],
			]
		]
	}, { // 1 选奖励
		desc: [
			1280, 720,
			[
				[center, 547, 70, 0xfdddb4],
				[center, 570, 72, 0xfde0b7],
				[center, 601, 65, 0xfedcaf],
				[center, 645, 70, 0xfde1b3],
				[center, 682, 73, 0xffe3b6],
				[center, 729, 64, 0xffdcab],
			]
		],
		oper: [
			[center, 1280, 720, 549, 630, 724, 678, 1000],
		]
	}, { // 2 奇遇对话
		desc: [
			1280, 720,
			[
				[center, 564, 577, 0xca7236],
				[center, 595, 575, 0xda7a38],
				[center, 628, 576, 0xf4873c],
				[center, 681, 578, 0xc67035],
				[center, 706, 575, 0xfb8a3d],
			]
		],
		oper: [
			[center, 1280, 720, 168, 103, 286, 211, 1000],
		]
	}, { // 3 胜利
		desc: [
			1280, 720,
			[
				[center, 471, 161, 0x7c1910],
				[center, 447, 207, 0x9e1c12],
				[center, 755, 178, 0xcdb480],
				[center, 911, 171, 0xe0cd9f],
			]
		],
		oper: [
			[center, 1280, 720, 507, 535, 880, 666, 1000],
		]
	}, { // 4 结算奖励
		desc: [
			1280, 720,
			[
				[center, 540, 426, 0xd88016],
				[center, 468, 613, 0x4989ce],
				[center, 678, 515, 0xba441a],
				[center, 665, 446, 0xc9b497],
			]
		],
		oper: [
			[center, 1280, 720, 997, 358, 1225, 485, 1000],
		]
	}, { // 5 获得奖励
		desc: [
			1280, 720,
			[
				[center, 490, 222, 0xe3cf8a],
				[center, 665, 210, 0xfcf2ce],
				[center, 791, 227, 0xe7d899],
				[center, 892, 241, 0x392a1d],
			]
		],
		oper: [
			[center, 1280, 720, 1004, 83, 1232, 184, 1000],
		]
	}, { // 6 准备
		desc: [
			1280, 720,
			[
				[right, 1143, 577, 0x551111],
				[right, 1138, 607, 0xf2deb6],
				[right, 1153, 587, 0x6f2316],
				[right, 1192, 585, 0x6f2116],
				[right, 1197, 606, 0xae4227],
			]
		],
		oper: [
			[center, 1280, 720, 1131, 542, 1241, 643, 1000],
		]
	}, { // 7 结算
		desc: [
			1280, 720,
			[
				[right, 1163, 621, 0xead992],
				[right, 1198, 635, 0xe3ce86],
				[right, 1207, 621, 0xead890],
				[right, 1223, 640, 0xdfc576],
				[right, 1226, 671, 0xcead51],
				[right, 1203, 653, 0x34291d],
			]
		],
		oper: [
			[center, 1280, 720, 1172, 60, 1211, 90, 1000],
		]
	}, { // 8 关闭商店
		desc: [
			1280, 720,
			[
				[right, 1080, 661, 0xb77070],
				[right, 1075, 670, 0x6f3838],
				[right, 1085, 677, 0xa75858],
				[right, 1106, 609, 0xfff4ba],
				[right, 1130, 622, 0xfff5bb],
			]
		],
		oper: [
			[center, 1280, 720, 1088, 83, 1107, 110, 1000],
			[center, 1280, 720, 679, 405, 836, 450, 1000],
		]
	}, { // 9 结束后转至了封面
		desc: [
			1280, 720,
			[
				[left, 53, 485, 0xfff2f2],
				[left, 56, 512, 0xffa09f],
				[left, 53, 645, 0x845134],
				[left, 152, 647, 0x8a180f],
				[left, 247, 639, 0xbb4f47],
			]
		]
	}, { // 10 进入下一层
		desc: [
			1280, 720,
			[
				[center, 886, 529, 0xf4632b],
				[center, 893, 542, 0xc33023],
				[right, 1038, 537, 0xab978e],
				[center, 867, 485, 0x6c0000],
				[center, 951, 495, 0x6c0000],
			]
		],
		oper: [
			[center, 1280, 720, 814, 470, 1066, 551, 1000],
			[center, 1280, 720, 681, 408, 831, 455, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['402'];
		if (thisScript.oper({
			name: '选式神',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			const nameAll = ['霍金神_奇遇', '霍金神_精英', '霍金神_战斗', '霍金神_首领', '霍金神_商店'];
			for (const name of nameAll) {
				const flagPointAll = thisScript.findMultiColorEx(name); // 历遍关卡选项
				if (flagPointAll.length > 0) {
					let toOper = [-1, -1, -1, -1, -1];
					for (const flagPoint of flagPointAll) { // 历遍关卡位置
						const oper = [flagPoint.x, flagPoint.y, flagPoint.x + 10, flagPoint.y + 10, 200]
						if (toOper[0] < oper[0]) {
							toOper = oper;
						}
					}
					if (toOper[0] > 0) {
						thisScript.regionClick([toOper]);
						if (name == '霍金神_商店' && thisConf.shop) {
							thisScript.doPush(thisScript, { text: '遇到商店,停止脚本', before() { thisScript.myToast('遇到商店,停止脚本'); } });
							thisScript.stop();
						}
					}
				}
			}
			sleep(3000);
			return true;
		}
		if (thisScript.oper({
			name: '选奖励',
			operator: [{ desc: thisOperator[1].desc }]
		})) {
			const flagPoint = thisScript.findMultiColor('霍金神_密道')
			if (flagPoint) {
				const oper = [flagPoint.x, flagPoint.y, flagPoint.x + 10, flagPoint.y + 10, 200]
				thisScript.regionClick([oper]);
				thisScript.regionClick(thisOperator[1].oper);
				return true;
			}
			const flagPoint1 = thisScript.findMultiColor('霍金神_物资')
			if (flagPoint1) {
				const oper = [flagPoint1.x, flagPoint1.y, flagPoint1.x + 10, flagPoint1.y + 10, 200]
				thisScript.regionClick([oper]);
				thisScript.regionClick(thisOperator[1].oper);
				return true;
			}
		}
		if (thisScript.oper({
			name: '杂项',
			operator: [thisOperator[2], thisOperator[3], thisOperator[4], thisOperator[5]
				, thisOperator[6], thisOperator[7], thisOperator[8], thisOperator[10],]
		})) {
			return true;
		}
		if (thisScript.oper({
			name: '结束',
			operator: [thisOperator[9]]
		})) {
			thisScript.doPush(thisScript, { text: '结束,停止脚本', before() { thisScript.myToast('结束,停止脚本'); } });
			thisScript.stop();
			return true;
		}
		return false;
	}
}
