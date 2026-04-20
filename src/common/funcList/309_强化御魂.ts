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
	config = [{
		desc: '',
		config: [{
			name: 'speed',
			desc: '强化速度胚子',
			type: 'switch',
			default: false,
		}],
	}];
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
				[right, 882, 93, 0xe7ab63],
				[right, 913, 85, 0xf7e39c],
				[right, 962, 98, 0xd69652],
				[right, 992, 86, 0xeed38d],
				[right, 1024, 93, 0x5a3716],
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
				[center, 516, 170, 0xe2b367],
				[center, 477, 170, 0xe2b467],
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
	}, { // 9 结束
		desc: [
			1280, 720,
			[
				[left, 314, 400, 0xfcf051],
				[center, 334, 373, 0xfff15d],
				[left, 265, 262, 0x3f2b29],
				[center, 397, 263, 0x3d2a29],
				[center, 332, 508, 0xaa4b32],
			]
		]
	}, { // 10 速度胚子_退出
		desc: [1280, 720,
			[
				[right, 1186, 405, 0x8c8c8c],
				[right, 1221, 418, 0x8b8b8b],
				[right, 1193, 495, 0xbbbbbb],
				[right, 1211, 508, 0xbcbcbc],
				[right, 1197, 600, 0xefd79c],
				[right, 1232, 635, 0xefc98e],
			]
		],
		oper: [
			[center, 1280, 720, 34, 19, 65, 57, 1000],
		]
	}, { // 11 速度胚子_强化
		desc: [1280, 720,
			[
				[right, 1186, 405, 0xfe5d52],
				[right, 1211, 508, 0xbdcd63],
				[right, 1225, 514, 0xc6d76b],
				[right, 1198, 603, 0xefcc94],
				[right, 1232, 634, 0xefcf95],
			]
		],
		oper: [
			[center, 1280, 720, 1178, 603, 1232, 646, 1000],
		]
	}, { // 12 属性标识
		desc: [1280, 720,
			[
				[right, 1239, 58, 0x382923],
				[right, 1253, 58, 0x342821],
				[right, 1241, 50, 0xc6b69c],
				[right, 1249, 50, 0xc6b59c],
				[right, 1132, 44, 0x322621],
				[right, 1255, 61, 0x342821],
			]
		],
		oper: [
			[center, 1280, 720, 1138, 42, 1263, 64, 1000],
		]
	}, { // 13 三小词条改速度
		desc: [1280, 720,
			[
				[right, 1140, 181, 0xffd07b],
				[right, 1247, 206, 0xffd17f],
				[right, 1240, 184, 0xffd07b],
				[right, 1145, 205, 0xffd07b],
			]
		],
		oper: [
			[center, 1280, 720, 1138, 90, 1251, 113, 1000],
			[center, 1280, 720, 1144, 183, 1255, 204, 1000],
			[center, 1280, 720, 1146, 271, 1252, 295, 1000],
			[center, 1280, 720, 1150, 363, 1247, 386, 1000],
			[center, 1280, 720, 1138, 42, 1263, 64, 1000],
		]
	}, { // 14 速度改三小词条
		desc: [1280, 720,
			[
				[right, 1140, 362, 0xffd07b],
				[right, 1144, 382, 0xffd07b],
				[right, 1253, 365, 0xffd180],
				[right, 1251, 387, 0xffdfa4],
				[right, 1195, 359, 0xffcf7b],
				[right, 1197, 390, 0xffd68e],
			]
		],
		oper: [
			[center, 1280, 720, 1138, 90, 1251, 113, 1000],
			[center, 1280, 720, 1144, 183, 1255, 204, 1000],
			[center, 1280, 720, 1146, 271, 1252, 295, 1000],
			[center, 1280, 720, 1150, 363, 1247, 386, 1000],
			[center, 1280, 720, 1138, 42, 1263, 64, 1000],
		]
	},
	]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['309'];
		if (thisScript.global.upYuHunIni) {
			if (thisScript.oper({
				id: 309,
				name: '初始化',
				operator: [thisOperator[12]]
			})) {
				return true;
			}
			if (thisconf.speed) {
				if (thisScript.oper({
					id: 309,
					name: '速度词条',
					operator: [thisOperator[13]]
				})) {
					thisScript.global.upYuHunIni = false;
					return true;
				}
				if (thisScript.oper({
					id: 309,
					name: '速度词条',
					operator: [{ desc: thisOperator[14].desc, oper: [thisOperator[14].oper[4]] }]
				})) {
					thisScript.global.upYuHunIni = false;
					return true;
				}
			} else {
				if (thisScript.oper({
					id: 309,
					name: '初始化',
					operator: [thisOperator[14]]
				})) {
					thisScript.global.upYuHunIni = false;
					return true;
				}
				if (thisScript.oper({
					id: 309,
					name: '速度词条',
					operator: [{ desc: thisOperator[13].desc, oper: [thisOperator[13].oper[4]] }]
				})) {
					thisScript.global.upYuHunIni = false;
					return true;
				}
			}
		}
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
			operator: [thisOperator[2], thisOperator[5], thisOperator[6], thisOperator[8]]
		})) {
			thisScript.global.upYuHun = true;
			return true;
		}
		if (thisconf.speed) {
			if (thisScript.oper({
				id: 309,
				name: '强化御魂',
				operator: [thisOperator[7], thisOperator[1], thisOperator[10], thisOperator[11]]
			})) {
				thisScript.global.upYuHun = false;
				return true;
			}
		} else {
			if (thisScript.oper({
				id: 309,
				name: '强化御魂',
				operator: [thisOperator[7], thisOperator[1], thisOperator[3]
					, thisOperator[4]]
			})) {
				thisScript.global.upYuHun = false;
				return true;
			}
		}
		if (thisScript.global.upYuHun && thisScript.oper({
			id: 309,
			name: '强化御魂_金币不足',
			operator: [thisOperator[2], thisOperator[5], thisOperator[6], thisOperator[8]]
		})) {
			thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
			return true;
		}
		if (thisScript.oper({
			id: 309,
			name: '强化御魂_结束',
			operator: [thisOperator[9]]
		})) {
			thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
			return true;
		}
	}
}
