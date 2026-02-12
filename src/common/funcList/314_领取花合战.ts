import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func314 implements IFuncOrigin {
	id = 314;
	name = '领取花合战';
	operator: IFuncOperatorOrigin[] = [{ // 0 庭院未打开菜单
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[right, 1280, 720, 1168, 592, 1230, 690, 1000]
		]
	}, { // 1 庭院菜单花合战500天_是否有红点
		desc: [
			1280, 720,
			[
				[center, 823, 642, 0xf9e3b5],
				[center, 789, 648, 0xab938e],
				[right, 776, 629, 0xfaf3e4],
				[right, 823, 602, 0xfc3c3c],
			]
		],
		oper: [
			[center, 1280, 720, 769, 622, 820, 660, 1000],	//	点击花合战
		]
	}, { // 2  花合战首页-奖励页签
		desc: [
			1280, 720,
			[
				[left, 39, 36, 0xf6f2cf],
				[left, 234, 35, 0xe4e5e7],
				[right, 1237, 345, 0x333259],
				[right, 1196, 390, 0x3a3b62],
				[right, 1220, 343, 0x8993b6],
				[right, 1215, 374, 0x8993b6],
			]
		],
		oper: [
			[center, 1280, 720, 1202, 329, 1232, 409, 1000],	//	点击 任务页签
		]
	}, { // 3  花合战首页-任务页签且右下角含有全部领取
		desc: [
			1280, 720,
			[
				[right, 1231, 228, 0x35345e],
				[right, 1228, 361, 0xdae1d9],
				[center, 950, 600, 0xfdd27e],
				[center, 938, 631, 0xfdd27d],
			]
		],
		oper: [
			[center, 1280, 720, 911, 611, 965, 655, 1500],	//	点击 全部领取
			[center, 1280, 720, 911, 611, 965, 655, 1500],	//	奖励提示框
		]
	}, { // 4 花合战
		desc: [
			1280, 720,
			[
				[center, 792, 616, 0xd9c0b7],
				[center, 822, 606, 0xef1717],
				[center, 800, 628, 0xb24343],
				[center, 820, 645, 0xf4ecc7],
				[center, 790, 648, 0xa8918c],
			]
		],
		oper: [
			[center, 1280, 720, 773, 621, 821, 660, 1000],
		]
	}, { // 5  花合战界面退出
		desc: [
			1280, 720,
			[
				[left, 39, 37, 0xf6f2d0],
				[left, 234, 37, 0xe6e7e8],
				[right, 1211, 216, 0x8993b6],
				[right, 1220, 349, 0x5f597c],
				[right, 1212, 362, 0xd3dae1],
				[right, 1211, 401, 0xdce4d5],
			]
		],
		oper: [
			[center, 1280, 720, 24, 20, 60, 55, 1000],
		]
	}, { // 6  花合战上新
		desc: [
			1280, 720,
			[
				[center, 338, 679, 0x2d2f48],
				[center, 431, 707, 0x424869],
				[center, 654, 693, 0x585b7e],
				[center, 780, 691, 0x69648d],
				[center, 919, 679, 0x7c749f],
				[right, 1009, 681, 0x918db1],
			]
		],
		oper: [
			[center, 1280, 720, 1044, 560, 1258, 699, 3000],
			[center, 1280, 720, 509, 631, 945, 710, 1000],
		],
		retest: 3000,
	}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		thisScript.oper({
			name: '花合战',
			operator: [thisOperator[0], thisOperator[2], thisOperator[6]
			]
		});

		if (thisScript.global.huahezhan && thisScript.oper({
			name: '花合战_进入',
			operator: [thisOperator[1], thisOperator[4]]
		})) {
			return true;
		}
		if (thisScript.oper({
			name: '花合战_任务界面',
			operator: [{ desc: thisOperator[5].desc }]
		})) {
			if (thisScript.oper({
				name: '花合战_领取奖励',
				operator: [thisOperator[3]]
			})) {
				return true;
			} else {
				// 退出
				thisScript.regionClick(thisOperator[5].oper);
				thisScript.global.huahezhan = false;
				return true;
			}
		}


		return false;
	}
}