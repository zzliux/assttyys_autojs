import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func321 implements IFuncOrigin {
	id = 321;
	name = '登录账号（退出账号）';
	desc = '常用于僵尸寮活跃登录小号';
	operator: IFuncOperatorOrigin[] = [{ // 0 庭院内点头像
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[right, 1280, 720, 28, 39, 88, 89, 1000],
		],
	}, { // 1 账号界面,小组件红手指
		desc: [
			1280, 720,
			[
				[left, 132, 341, 0xefa2a1],
				[left, 173, 392, 0x8b1a28],
				[right, 1091, 282, 0x8e8780],
				[right, 1093, 484, 0x8c857d],
			]
		],
		oper: [
			[center, 1280, 720, 985, 453, 1095, 507, 1000],
		]
	}, { // 2 账号界面,用户中心
		desc: [
			1280, 720,
			[
				[right, 1185, 174, 0xc36b19],
				[right, 1185, 365, 0x5b3b25],
				[right, 1182, 459, 0x583724],
				[right, 1180, 552, 0x583925],
				[left, 236, 441, 0xfefdd9],
				[left, 265, 476, 0xf3d794],
			]
		],
		oper: [
			[center, 1280, 720, 219, 430, 277, 476, 1000],
		]
	}, { // 3 账号界面,切换账号
		desc: [
			1280, 720,
			[
				[center, 596, 126, 0x4a4948],
				[center, 626, 125, 0x4a4948],
				[center, 653, 117, 0x4a4948],
				[center, 678, 122, 0x4a4948],
				[right, 1006, 208, 0xfb5454],
				[right, 1033, 208, 0xfb4f4f],
			]
		],
		oper: [
			[center, 1280, 720, 950, 192, 1056, 224, 1000],
		]
	}];
}
