import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func695 implements IFuncOrigin {
	id = 695;
	name = '秘闻前四层';
	desc = '选择式神后清理前四层秘闻三十次';
	config = [{
		desc: '',
		config: [{
			name: 'fifty',
			desc: '第二层提前结束',
			type: 'switch',
			default: false,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 珍旅居
		desc: [1280, 720,
			[
				[left, 201, 613, 0xe7a155],
				[left, 224, 611, 0x332c26],
				[left, 239, 651, 0xf47563],
				[left, 253, 646, 0x742c2a],
			]
		],
		oper: [
			[center, 1280, 720, 206, 625, 248, 660, 1000],
		]
	}, { // 1 唤妖借处
		desc: [1280, 720,
			[
				[right, 1160, 597, 0xefd7c6],
				[right, 1183, 598, 0xfdc8b2],
				[right, 1187, 622, 0xeecebc],
				[right, 1154, 630, 0xf7d7c6],
				[right, 1170, 652, 0xad6535],
			]
		],
		oper: [
			[center, 1280, 720, 1050, 272, 1072, 401, 1000],
		]
	}, { // 2 秘闻关卡
		desc: [1280, 720,
			[
				[center, 405, 61, 0x3f3e47],
				[center, 558, 29, 0x4c4a52],
				[right, 750, 35, 0x4f4e57],
				[right, 883, 59, 0x3e3b45],
				[right, 977, 47, 0xffe7ce],
			]
		],
		retest: 500,
	}, { // 3 秘闻对话
		desc: [1280, 720,
			[
				[center, 452, 60, 0x2c2b33],
				[right, 643, 30, 0x34313a],
				[right, 873, 62, 0x2d2b32],
				[center, 563, 719, 0x000000],
				[right, 727, 719, 0x000000],
			]
		],
		oper: [
			[center, 1280, 720, 712, 446, 841, 474, 200],
		],
		notForCnt: true,
	}, { // 4 秘闻对话左
		desc: [1280, 720,
			[
				[left, 305, 546, 0x4c0d19],
				[left, 313, 546, 0x4e0c18],
				[left, 313, 560, 0x510c18],
				[left, 307, 560, 0x4e0c18],
			]
		],
		oper: [
			[center, 1280, 720, 624, 329, 666, 369, 200],
		],
		notForCnt: true,
	}, { // 5 秘闻对话右
		desc: [1280, 720,
			[
				[right, 817, 545, 0x500d19],
				[right, 828, 545, 0x4f0c18],
				[right, 828, 560, 0x550b18],
				[right, 818, 560, 0x4d0c18],
			]
		],
		oper: [
			[center, 1280, 720, 624, 316, 665, 356, 200],
		],
		notForCnt: true,
	}, { // 6 秘闻对话 黑
		desc: [1280, 720,
			[
				[right, 1067, 3, 0x453f30],
				[right, 1067, 38, 0x37342b],
				[center, 369, 713, 0x000000],
				[right, 781, 709, 0x000000],
			]
		],
		oper: [
			[center, 1280, 720, 624, 316, 665, 356, 200],
		],
	}, { // 7 秘闻界面
		desc: [1280, 720,
			[
				[left, 68, 170, 0x532f2c],
				[left, 117, 174, 0xa5a097],
				[right, 818, 171, 0xb9b6ae],
				[left, 318, 46, 0x1f1d24],
			]
		],
		oper: [
			[center, 1280, 720, 272, 187, 338, 219, 300],
			[center, 1280, 720, 618, 185, 695, 219, 300],
			[center, 1280, 720, 268, 307, 341, 342, 300],
			[center, 1280, 720, 627, 306, 696, 341, 300],
			[center, 1280, 720, 276, 439, 333, 465, 300],
			[center, 1280, 720, 637, 436, 703, 472, 300],
			[center, 1280, 720, 275, 561, 343, 591, 300],
			[center, 1280, 720, 636, 568, 692, 600, 300],
			[center, 1280, 720, 1164, 620, 1226, 667, 300],
		]
	}, { // 8 100勾
		desc: [1280, 720,
			[
				[center, 349, 203, 0xfada68],
				[center, 368, 198, 0xf7eb7b],
				[center, 390, 198, 0xffeb7b],
				[center, 376, 221, 0xfdfdfd],
				[center, 390, 226, 0xffffff],
				[center, 379, 216, 0xca4637],
			]
		],
		oper: [
			[center, 1280, 720, 1157, 103, 1200, 138, 500],
		]
	}, { // 9 翻页
		oper: [
			[center, 1280, 720, 463, 580, 477, 591, 1000],
			[center, 1280, 720, 467, 105, 485, 115, 1000],
		]
	}, { // 10 有最新
		desc: [1280, 720,
			[
				[center, 506, 163, 0x782021],
				[center, 523, 166, 0x782021],
				[center, 518, 214, 0x782021],
				[center, 509, 212, 0x782021],
			]
		],
	}, { // 11 孟婆特殊
		desc: [1280, 720,
			[
				[left, 296, 496, 0xf4b25d],
				[center, 381, 521, 0xf4b25d],
				[center, 620, 501, 0xf7b260],
				[right, 713, 525, 0xf4b25d],
				[right, 952, 498, 0xf4b25d],
				[right, 1051, 520, 0xf4b25d],
			]
		],
		oper: [
			[center, 1280, 720, 620, 505, 724, 532, 1000],
		]
	}, { // 12 浪川跳过
		desc: [1280, 720,
			[
				[right, 894, 324, 0xdbe0e3],
				[right, 914, 328, 0xe7e3e6],
				[right, 859, 416, 0x636367],
				[right, 785, 453, 0xd2cfd3],
				[right, 1057, 457, 0x763534],
				[right, 938, 508, 0x476070],
			]
		],
		oper: [
			[center, 1280, 720, 1157, 102, 1197, 135, 1000],
		]
	}, { // 13 金鱼跳过
		desc: [1280, 720,
			[
				[right, 824, 249, 0x0b133c],
				[right, 886, 184, 0x0d183f],
				[right, 961, 187, 0x5a7cc3],
				[right, 953, 400, 0x7ba2e7],
				[right, 906, 379, 0xd82932],
			]
		],
		oper: [
			[center, 1280, 720, 1163, 98, 1194, 140, 1000],
		]
	}, { // 14 青蛙跳过
		desc: [1280, 720,
			[
				[right, 855, 194, 0xecd684],
				[right, 911, 207, 0xe7c57b],
				[right, 810, 371, 0xeceadb],
				[right, 884, 459, 0xfcd373],
				[right, 908, 512, 0x44423f],
			]
		],
		oper: [
			[center, 1280, 720, 1159, 99, 1195, 134, 1000],
		]
	}, { // 15 50勾 样式一
		desc: [1280, 720,
			[
				[center, 349, 203, 0xfada68],
				[center, 368, 198, 0xf7eb7b],
				[center, 390, 198, 0xffeb7b],
				[center, 390, 226, 0xffffff],
				[center, 375, 220, 0xd3170f],
				[center, 381, 222, 0xffffff],
			]
		],
		oper: [
			[center, 1280, 720, 1157, 103, 1200, 138, 500],
		]
	}, { // 16 50勾 样式二
		desc: [1280, 720,
			[
				[center, 349, 203, 0xfada68],
				[center, 368, 198, 0xf7eb7b],
				[center, 390, 198, 0xffeb7b],
				[center, 390, 226, 0xffffff],
				[center, 375, 220, 0xe11e30],
				[center, 381, 222, 0xffffff],
			]
		],
		oper: [
			[center, 1280, 720, 1157, 103, 1200, 138, 500],
		]
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['695'];
		if (thisScript.oper({
			id: 692,
			name: '借用式神',
			operator: [thisOperator[2]],
		})) {
			if (thisConf.fifty) {
				if (thisScript.oper({
					id: 692,
					name: '借用式神',
					operator: [thisOperator[15], thisOperator[16]],
				})) {
					thisScript.global.miWenClearTimer++;
					return true;
				} else {
					const now = new Date().getTime();
					const ajImg = com.stardust.autojs.core.image.ImageWrapper.ofBitmap(thisScript.helperBridge.helper.GetBitmap());
					const path = `/sdcard/assttyys/bgyxImg/${now}.png`;
					files.ensureDir(path);
					ajImg.saveTo(path);
					ajImg.recycle();
				}
			}
			if (thisScript.oper({
				id: 692,
				name: '借用式神',
				operator: [thisOperator[8], thisOperator[12], thisOperator[13], thisOperator[14]],
			})) {
				thisScript.global.miWenClearTimer++;
				return true;
			} else {
				const now = new Date().getTime();
				const ajImg = com.stardust.autojs.core.image.ImageWrapper.ofBitmap(thisScript.helperBridge.helper.GetBitmap());
				const path = `/sdcard/assttyys/bgyxImg/${now}.png`;
				files.ensureDir(path);
				ajImg.saveTo(path);
				ajImg.recycle();
			}
		}
		if (thisScript.oper({
			id: 692,
			name: '借用式神',
			operator: [thisOperator[11], thisOperator[3], thisOperator[4], thisOperator[5], thisOperator[6]],
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 692,
			name: '借用式神',
			operator: [{ desc: thisOperator[7].desc }],
		})) {
			let realTimer = thisScript.global.miWenClearTimer;
			if (thisScript.oper({
				id: 692,
				name: '借用式神',
				operator: [{ desc: thisOperator[10].desc }],
			})) {
				while (realTimer >= 8) {
					realTimer = realTimer - 8;
					thisScript.regionSwipe(thisOperator[9].oper[0], thisOperator[9].oper[1], [2000, 2300], 500)
				}
			} else if ([16, 24, 32, 40].includes(thisScript.global.miWenClearTimer)) {
				thisScript.regionSwipe(thisOperator[9].oper[0], thisOperator[9].oper[1], [2000, 2300], 500)
			}
			realTimer = thisScript.global.miWenClearTimer % 8;
			thisScript.regionClick([thisOperator[7].oper[realTimer]])
			thisScript.regionClick([thisOperator[7].oper[8]])
			return true;
		}
	}
}