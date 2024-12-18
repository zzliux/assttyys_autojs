import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func309 implements IFuncOrigin {
	id = 309;
	name = '强化御魂';
	desc = '在批量强化界面强化御魂,逻辑在群公告的手册里';
	operator: IFuncOperatorOrigin[] = [{ // 0  长按选取
		desc: [
			1280, 720,
			[
				[center, 892, 620, 0xc3c3c3],
				[right, 1014, 650, 0xb8b8b8],
				[center, 720, 638, 0x392b1e],
				[left, 121, 218, 0xe4642a],
				[left, 225, 236, 0xe6662c],
			]
		],
		oper: [
			[center, 1280, 720, 127, 191, 216, 285, 500]// 第一排第一位御魂
		]
	}, { // 1   全部强化
		desc: [
			1280, 720,
			[
				[center, 884, 621, 0xf9ba65],
				[center, 891, 651, 0xf4b261],
				[right, 1022, 652, 0xe7a656],
				[right, 1022, 621, 0xf9b861],
				[center, 958, 632, 0xf3b25d],
			]
		],
		oper: [
			[center, 1280, 720, 880, 620, 1034, 655, 500]
		]
	}, { // 2  +3计算强化
		desc: [
			1280, 720,
			[
				[center, 883, 94, 0xd8a85f],
				[center, 926, 84, 0xfadc97],
				[right, 962, 98, 0xc88e49],
				[right, 993, 85, 0xffd794],
				[right, 1033, 82, 0xe4c459],
				[right, 1032, 102, 0xd39a34],
			]
		],
		oper: [
			[center, 1280, 720, 1176, 639, 1244, 690, 500], // 计算
			[center, 1280, 720, 1176, 639, 1244, 690, 2500], // 强化
		]
	}, { // 3  弃置
		desc: [
			1280, 720,
			[
				[right, 1189, 398, 0xf75a4e],
				[right, 1194, 410, 0xff5e50],
				[right, 1218, 400, 0xff5e50],
				[right, 1218, 418, 0xff5c50],
				[right, 1188, 399, 0xff5d51],
				[right, 1221, 411, 0xff5e50],
			]
		],
		oper: [
			[center, 1280, 720, 1182, 388, 1229, 427, 1000], // 弃置
		]
	}, { // 4  继续强化
		desc: [
			1280, 720,
			[
				[right, 1192, 139, 0xc7b79e],
				[right, 1220, 158, 0xc7b79e],
				[right, 1240, 655, 0xe2af74],
				[right, 1212, 626, 0x271913],
				[right, 1215, 608, 0xecc38b],
				[right, 1175, 616, 0xdfb27c],
			]
		],
		oper: [
			[center, 1280, 720, 1176, 639, 1244, 690, 1000]
		]
	}, { // 5  +6计算强化
		desc: [
			1280, 720,
			[
				[center, 590, 62, 0xdec183],
				[center, 680, 65, 0xe9af66],
				[center, 474, 134, 0xd5a659],
				[center, 515, 134, 0xd4a55a],
				[center, 516, 168, 0xc19c55],
				[center, 474, 168, 0xc49a53],
			]
		],
		oper: [
			[center, 1280, 720, 876, 615, 935, 664, 500], // 计算
			[center, 1280, 720, 876, 615, 935, 664, 2500], // 强化
		]
	}, { // 6  +15计算强化
		desc: [
			1280, 720,
			[
				[center, 569, 135, 0xcaa058],
				[center, 611, 136, 0xc19854],
				[center, 611, 169, 0xcaa259],
				[center, 570, 168, 0xc39a53],
				[center, 899, 613, 0xf0dca5],
				[center, 917, 653, 0xedcb96],
			]
		],
		oper: [
			[center, 1280, 720, 632, 138, 663, 165, 500], // +15
			[center, 1280, 720, 876, 615, 935, 664, 500], // 计算
			[center, 1280, 720, 876, 615, 935, 664, 2500], // 强化
		]
	}, { // 7  第一排第一位为+15御魂(必须在最前)
		desc: [
			1280, 720,
			[
				[center, 419, 120, 0xe9e9eb],
				[center, 419, 128, 0xe3e2e4],
				[center, 429, 118, 0xa19999],
				[center, 425, 122, 0xe9e9eb],
				[center, 427, 131, 0xd2d0d1],
				[center, 423, 91, 0x415bd4],
				[center, 439, 91, 0x4b56d2],
			]
		],
		oper: [
			[center, 1280, 720, 28, 18, 71, 56, 500]// 返回
		]
	}, { // 8 +9计算强化
		desc: [
			1280, 720,
			[
				[center, 520, 136, 0xc39a55],
				[center, 561, 137, 0xbc9552],
				[center, 561, 169, 0xcaa259],
				[center, 521, 168, 0xbf9751],
				[center, 900, 614, 0xf0dca5],
				[center, 918, 658, 0xe7b980],
			]
		],
		oper: [
			[center, 1280, 720, 876, 615, 935, 664, 500], // 计算
			[center, 1280, 720, 876, 615, 935, 664, 2500], // 强化
		]
	},
	]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 309,
			name: '强化御魂',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			thisScript.regionClick([[...thisOperator[0].oper[0], 1000]]);
			thisScript.global.upYuHun = false;
			return true;
		}
		if (thisScript.oper({
			id: 309,
			name: '强化御魂_金币不足',
			operator: [thisOperator[2], thisOperator[5], thisOperator[8]]
		})) {
			thisScript.global.upYuHun = true;
			return true;
		}
		if (thisScript.oper({
			id: 309,
			name: '强化御魂',
			operator: [thisOperator[7], thisOperator[1], thisOperator[3]
				, thisOperator[4], thisOperator[6]
			]
		})) {
			thisScript.global.upYuHun = false;
			return true;
		}

		if (thisScript.global.upYuHun && thisScript.oper({
			id: 309,
			name: '强化御魂_金币不足',
			operator: [thisOperator[2], thisOperator[5], thisOperator[8]]
		})) {
			thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
			return true;
		}
	}
}
