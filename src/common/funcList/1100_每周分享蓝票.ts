import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1100 implements IFuncOrigin {
	id = 1100;
	name = '每周分享蓝票';
	desc: '进入式神图鉴分享领取蓝票(雷电模拟器用微博分享,需打开强制锁定横屏)';
	operator: IFuncOperatorOrigin[] = [{ // 0 图鉴
		desc: [
			1280, 720,
			[
				[left, 92, 618, 0x8198c3],
				[left, 96, 633, 0x778fbe],
				[left, 123, 628, 0x90a5ca],
				[left, 124, 642, 0x7892bf],
				[left, 113, 623, 0xe3d9d8],
			]
		],
		oper: [
			[center, 1280, 720, 96, 610, 139, 642, 1000],
		]
	}, { // 1 图鉴_式神
		desc: [1280, 720,
			[
				[center, 417, 666, 0xefe4cf],
				[center, 437, 659, 0xdbd2c0],
				[center, 447, 666, 0xf0e1ca],
				[center, 441, 687, 0xf6e9d1],
				[center, 423, 688, 0xf2e6ce],
			]
		],
		oper: [
			[center, 1280, 720, 410, 655, 454, 693, 1000],
		]
	}, { // 2 式神_绘卷
		desc: [
			1280, 720,
			[
				[right, 1128, 642, 0xdaccb0],
				[right, 1154, 647, 0xd6cab8],
				[right, 1163, 637, 0xc6925d],
				[right, 1182, 622, 0xbf544f],
				[right, 1177, 665, 0xe2ddc9],
			]
		],
		oper: [
			[center, 1280, 720, 1137, 621, 1197, 676, 1000],
		]
	}, { // 3 绘卷_分享
		desc: [
			1280, 720,
			[
				[right, 1177, 623, 0xebd894],
				[right, 1205, 623, 0xebd993],
				[right, 1206, 646, 0xe6d287],
				[right, 1240, 667, 0xd3b35a],
				[right, 1204, 672, 0x302418],
			]
		],
		oper: [
			[center, 1280, 720, 1179, 622, 1230, 671, 1000],
		]
	}, { // 4 雷电分享_微博
		desc: [
			1280, 720,
			[
				[center, 712, 651, 0x802323],
				[center, 737, 664, 0xffffff],
				[center, 736, 674, 0x802323],
				[center, 727, 675, 0xffffff],
				[center, 721, 678, 0x7f2222],
			]
		],
		oper: [
			[center, 1280, 720, 705, 646, 747, 687, 10000],
		]
	}, { // 5 微博_发送
		desc: [
			1280, 720,
			[
				[right, 1201, 63, 0xff8c09],
				[right, 1223, 53, 0xff9d18],
				[right, 1253, 71, 0xffb62d],
				[right, 1226, 85, 0xffa01b],
				[right, 1225, 73, 0xff9f19],
			]
		],
		oper: [
			[center, 1280, 720, 1199, 53, 1252, 86, 5000],
		]
	}, { // 6 微博_封禁
		desc: [
			1280, 720,
			[
				[center, 518, 292, 0xffffff],
				[center, 756, 304, 0xffffff],
				[center, 484, 438, 0xffffff],
				[center, 822, 448, 0xffffff],
				[center, 701, 451, 0xff8200],
				[center, 780, 451, 0xff8200],
			]
		],
		oper: [
			[center, 1280, 720, 511, 426, 570, 458, 1000],
		]
	}, { // 7 微博_返回
		desc: [
			1280, 720,
			[
				[center, 460, 290, 0xffffff],
				[center, 818, 299, 0xffffff],
				[center, 635, 378, 0x42cf5a],
				[center, 797, 368, 0xffffff],
				[center, 705, 456, 0xff8200],
				[center, 783, 455, 0xff8200],
			]
		],
		oper: [
			[center, 1280, 720, 510, 426, 570, 458, 1000],
		]
	}, { // 8 MuMu分享_微信
		desc: [
			1280, 720,
			[
				[center, 429, 666, 0x2e693d],
				[center, 446, 666, 0xffffff],
				[center, 472, 650, 0x2e693d],
				[center, 466, 680, 0xffffff],
				[center, 443, 684, 0x2e693d],
			]
		],
		oper: [
			[center, 1280, 720, 436, 644, 473, 684, 5000],
		]
	}, { // 9 微信_微信关闭
		desc: [
			1280, 720,
			[
				[center, 486, 159, 0x3e2215],
				[center, 789, 159, 0x3f2316],
				[center, 534, 228, 0xffffff],
				[center, 538, 432, 0xffffff],
				[center, 780, 396, 0xcdc5bb],
			]
		],
		oper: [
			[center, 1280, 720, 1088, 291, 1192, 398, 1000],
		]
	}, { // 10 分享_返回
		desc: [
			1280, 720,
			[
				[right, 1088, 64, 0x8e2e48],
				[right, 1102, 49, 0x79304e],
				[right, 1113, 57, 0xe9d4d0],
				[right, 1118, 68, 0x7a1d64],
				[right, 1102, 63, 0xead4cf],
			]
		],
		oper: [
			[center, 1280, 720, 1085, 42, 1123, 84, 1000],
		]
	}, { // 11 绘卷_返回
		desc: [
			1280, 720,
			[
				[left, 26, 32, 0x1f0e42],
				[left, 62, 50, 0x2f3581],
				[left, 53, 32, 0xf3f9fb],
				[left, 36, 50, 0xf0f5fb],
				[left, 55, 61, 0xdeeaf8],
			]
		],
		oper: [
			[center, 1280, 720, 28, 30, 67, 65, 1000],
		]
	}, { // 12 式神_返回
		desc: [
			1280, 720,
			[
				[left, 191, 47, 0x8bd4c7],
				[left, 176, 70, 0x48372e],
				[center, 780, 81, 0x2d1e15],
				[right, 996, 81, 0x23160f],
				[right, 1071, 70, 0x4da7b2],
				[right, 1143, 117, 0xe7d6d0],
			]
		],
		oper: [
			[center, 1280, 720, 1124, 99, 1161, 135, 1000],
		]
	}, { // 13 庭院已打开菜单
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰'
	}, { // 14 分享选项界面关闭
		desc: [1280, 720,
			[
				[right, 1165, 64, 0x8e2e48],
				[right, 1179, 62, 0xead4cf],
				[right, 1195, 62, 0x862062],
				[right, 1179, 49, 0x782e4d],
				[right, 1181, 79, 0x892c56],
			]
		],
		oper: [
			[center, 1280, 720, 1168, 55, 1197, 78, 1000],
		]
	}, { // 15 微博通知权限窗口
		desc: [1280, 720,
			[
				[left, 149, 635, 0xf6f6f6],
				[center, 462, 638, 0xf6f6f6],
				[right, 1183, 637, 0xffb52d],
				[right, 777, 635, 0xff8f0b],
			]
		],
		oper: [
			[center, 1280, 720, 93, 617, 590, 654, 1000],
		]
	}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.global.MT_share === 'start') { // 未完成
			if (thisScript.oper({
				id: 1100,
				name: '每周分享蓝票_杂项',
				operator: [thisOperator[9]]
			})) {
				thisScript.global.MT_share = 'back';
				return true;
			}
			if (thisScript.oper({
				id: 1100,
				name: '每周分享蓝票_杂项',
				operator: [thisOperator[0], thisOperator[1], thisOperator[2], thisOperator[3]]
			})) {
				return true;
			}
			const prop = files.exists('/storage/emulated/0/Audiobooks') // MuMu 特有
			if (prop) {
				if (thisScript.oper({
					id: 1100,
					name: '每周分享蓝票_图鉴_MuMu',
					operator: [thisOperator[8]]
				})) {
					return true;
				}
			} else {
				if (thisScript.oper({
					id: 1100,
					name: '每周分享蓝票_图鉴_雷电',
					operator: [thisOperator[4], thisOperator[5], thisOperator[6], thisOperator[15]]
				})) {
					return true;
				}
				if (currentActivity() === 'com.sina.weibo.MainTabActivity') {
					back();
					return true;
				}
			}
			if (thisScript.oper({
				id: 1100,
				name: '每周分享蓝票_杂项',
				operator: [thisOperator[7]]
			})) {
				thisScript.global.MT_share = 'back';
				return true;
			}
		} else if (thisScript.global.MT_share === 'back') { // 完成
			if (thisScript.oper({
				id: 1100,
				name: '每周分享蓝票_返回',
				operator: [thisOperator[10], thisOperator[11], thisOperator[12], thisOperator[14]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 1100,
				name: '每周分享蓝票_完成',
				operator: [thisOperator[13]]
			})) {
				thisScript.global.MT_share = 'end';
				return true;
			}
		}
		return false;
	}
}
