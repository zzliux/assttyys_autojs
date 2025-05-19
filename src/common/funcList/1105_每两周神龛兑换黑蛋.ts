import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1105 implements IFuncOrigin {
	id = 1105;
	name = '每两周神龛兑换黑蛋';
	desc: '';
	operator: IFuncOperatorOrigin[] = [{
		// 0 页面是否为庭院(菜单未展开) 只支持默认庭院皮肤与默认装饰
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 1080, 184, 1133, 234, 1000], //  庭院点击召唤
		],
	}, { // 1 召唤界面
		desc: [
			1280, 720,
			[
				[left, 58, 21, 0xefd590],
				[left, 48, 30, 0xf6e6a8],
				[left, 60, 41, 0xedcf8b],
				[left, 140, 17, 0xb28956],
				[left, 150, 38, 0xb28956],
				[left, 178, 26, 0xb28956],
				[left, 177, 36, 0xb18956],
			]
		],
		oper: [
			[center, 1280, 720, 1188, 371, 1259, 424, 1000],
		]
	}, { // 2 神龛_返回
		desc: [
			1280, 720,
			[
				[right, 1143, 391, 0xe2cd98],
				[right, 1192, 395, 0x98896d],
				[right, 1135, 431, 0x2c0807],
				[right, 1220, 419, 0x9c9a9a],
				[right, 1174, 451, 0xc38c4c],
				[right, 1124, 613, 0xffe89b],
			]
		],
		oper: [
			[center, 1280, 720, 28, 36, 63, 66, 1000],
		]
	}, { // 3 召唤界面_返回
		desc: [
			1280, 720,
			[
				[left, 58, 21, 0xefd590],
				[left, 48, 30, 0xf6e6a8],
				[left, 60, 41, 0xedcf8b],
				[left, 140, 17, 0xb28956],
				[left, 150, 38, 0xb28956],
				[left, 178, 26, 0xb28956],
				[left, 177, 36, 0xb18956],
			]
		],
		oper: [
			[center, 1280, 720, 33, 12, 71, 44, 1000],
		]
	}, { // 4 可兑换黑蛋
		desc: [
			1280, 720,
			[
				[center, 618, 147, 0x4c4948],
				[center, 616, 167, 0xffffff],
				[center, 637, 168, 0x272523],
				[center, 604, 202, 0x454240],
				[center, 624, 200, 0xd8a95d],
				[center, 642, 196, 0x5b5a59],
				[center, 600, 220, 0x292520],
				[center, 646, 222, 0x322c24],
			]
		],
		oper: [
			[center, 1280, 720, 590, 175, 656, 223, 1000],
		]
	}, { // 5 兑换界面_1
		desc: [
			1280, 720,
			[
				[center, 323, 192, 0xaa381f],
				[center, 322, 223, 0xa9371f],
				[center, 324, 251, 0xa8371f],
				[left, 315, 282, 0xa8371f],
				[center, 835, 335, 0x494747],
				[center, 803, 522, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 788, 520, 946, 558, 1000],
		]
	}, { // 6 兑换界面_2
		desc: [
			1280, 720,
			[
				[center, 425, 128, 0x95561c],
				[center, 468, 123, 0xa17d3c],
				[center, 576, 125, 0x94501e],
				[center, 760, 126, 0x8c441e],
				[center, 567, 524, 0xc47545],
				[center, 706, 560, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 565, 525, 712, 562, 1000],
		]
	}, { // 7 兑换失败界面_1
		desc: [
			1280, 720,
			[
				[center, 323, 192, 0xaa381f],
				[center, 322, 223, 0xa9371f],
				[center, 324, 251, 0xa8371f],
				[left, 315, 282, 0xa8371f],
				[center, 835, 335, 0x494747],
				[center, 803, 522, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 1052, 126, 1096, 156, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.global.shenKan) {
			if (thisScript.oper({
				id: 1105,
				name: '每两周神龛兑换黑蛋_进入',
				operator: [thisOperator[0], thisOperator[1], thisOperator[4], thisOperator[5]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 1105,
				name: '每两周神龛兑换黑蛋_完毕',
				operator: [thisOperator[6]]
			})) {
				thisScript.global.shenKan = false;
				return true;
			}
		} else {
			if (thisScript.oper({
				id: 1105,
				name: '每两周神龛兑换黑蛋_退出',
				operator: [thisOperator[2], thisOperator[3]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 1105,
				name: '每两周神龛兑换黑蛋_失败',
				operator: [thisOperator[7]]
			})) {
				thisScript.doPush(thisScript, { text: '无御札,兑换失败', before() { thisScript.myToast('无御札,兑换失败'); } });
				return true;
			}
		}
		return false;
	}
}
