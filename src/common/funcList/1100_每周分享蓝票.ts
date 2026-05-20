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
	}, { // 1 图鉴_首领
		desc: [1280, 720,
			[
				[right, 796, 661, 0xd34048],
				[right, 806, 666, 0xd63c4a],
				[right, 776, 688, 0xc6515a],
				[right, 769, 694, 0xcea488],
			]
		],
		oper: [
			[center, 1280, 720, 768, 658, 812, 693, 1000],
		]
	}, { // 2 式神_绘卷
		desc: [
			1280, 720,
			[
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
		desc: [1280, 720,
			[
				[right, 1204, 618, 0xebda94],
				[right, 1226, 634, 0xdfc97e],
				[right, 1231, 669, 0xceae52],
				[right, 962, 625, 0x000000],
				[right, 1125, 659, 0x000000],
				[right, 1143, 637, 0x000000],
			]
		],
		oper: [
			[center, 1280, 720, 1180, 618, 1231, 667, 1000],
		]
	}, { // 4 分享_微信
		desc: [1280, 720,
			[
				[center, 391, 633, 0x2c693b],
				[center, 406, 635, 0xffffff],
				[center, 435, 626, 0x2e693c],
				[center, 428, 648, 0xffffff],
				[center, 408, 654, 0x30683c],
			]
		],
		oper: [
			[center, 1280, 720, 395, 621, 439, 661, 1000],
		]
	}, { // 5 分享_大神
		desc: [1280, 720,
			[
				[right, 751, 618, 0xfffcfc],
				[right, 737, 653, 0xfffcfc],
				[right, 768, 654, 0xfffdfc],
				[right, 775, 638, 0x181839],
				[right, 739, 635, 0x1b203c],
			]
		],
		oper: [
			[center, 1280, 720, 734, 620, 776, 661, 7000],
		]
	}, { // 6 微信_微信关闭
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
	}, { // 7 分享_返回
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
	}, { // 8 绘卷_返回
		desc: [1280, 720,
			[
				[right, 1154, 647, 0xd6cab8],
				[right, 1163, 637, 0xc6925d],
				[right, 1182, 622, 0xbf544f],
				[right, 1177, 665, 0xe2ddc9],
			]
		],
		oper: [
			[center, 1280, 720, 1126, 100, 1165, 135, 1000],
		]
	}, { // 9 图鉴_返回
		desc: [1280, 720,
			[
				[left, 46, 26, 0xefd390],
				[left, 34, 36, 0xf7e9ac],
				[left, 46, 48, 0xefd28c],
				[left, 56, 36, 0xac713c],
				[left, 25, 24, 0xab6f3d],
			]
		],
		oper: [
			[center, 1280, 720, 24, 22, 64, 59, 1000],
		]
	}, { // 10 庭院已打开菜单
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰'
	}, { // 11 插画下载
		desc: [1280, 720,
			[
				[center, 371, 141, 0x6a4737],
				[right, 907, 140, 0x674635],
				[center, 341, 569, 0x604131],
				[right, 912, 570, 0x644334],
				[center, 519, 506, 0xdf6851],
				[right, 750, 510, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 538, 424, 559, 443, 1000],
			[center, 1280, 720, 432, 492, 536, 529, 1000],
		]
	},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.global.MT_share === 'start') { // 未完成
			if (thisScript.oper({
				id: 1100,
				name: '每周分享蓝票_杂项',
				operator: [thisOperator[6]]
			})) {
				thisScript.global.MT_share = 'back';
				return true;
			}
			if (thisScript.oper({
				id: 1100,
				name: '每周分享蓝票_杂项',
				operator: [thisOperator[0], thisOperator[1], thisOperator[2], thisOperator[3], thisOperator[11]]
			})) {
				return true;
			}
			let curCnt = 0;
			const maxCount = 5;
			while (thisScript.global.MT_share_type === 'mumu' && thisScript.oper({
				name: '每周分享蓝票_多次点击',
				operator: [thisOperator[4]]
			})) {
				curCnt++;
				if (curCnt >= maxCount) {
					thisScript.myToast('点击微信失败,尝试大神');
					thisScript.global.MT_share_type = 'phone';
					sleep(1000);
					return false;
				}
				thisScript.keepScreen(false);
				sleep(1000);
			}
			while (thisScript.global.MT_share_type === 'phone' && thisScript.oper({
				name: '每周分享蓝票_多次点击',
				operator: [thisOperator[5]]
			})) {
				curCnt++;
				if (curCnt >= maxCount) {
					thisScript.myToast('点击大神失败,停止分享');
					thisScript.global.MT_share = 'back';
					sleep(1000);
					return false;
				}
				sleep(1000);
				thisScript.keepScreen(false);
			}
			const packageName = currentPackage();
			if (thisScript.global.MT_share_type === 'phone' && packageName === 'com.netease.gl') {
				if (text('发布').findOnce()) {
					log('点击发布')
					text('发布').findOnce().click()
					return true;
				}
				if (id('tv_request_share_app_name').findOnce()) {
					log('点击返回')
					id('tv_request_share_app_name').findOnce().click()
					thisScript.global.MT_share = 'back';
					sleep(1000);
					return true;
				}
			}
		} else if (thisScript.global.MT_share === 'back') { // 完成
			if (thisScript.oper({
				id: 1100,
				name: '每周分享蓝票_返回',
				operator: [thisOperator[7], thisOperator[8], thisOperator[9]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 1100,
				name: '每周分享蓝票_完成',
				operator: [thisOperator[10]]
			})) {
				thisScript.global.MT_share = 'end';
				return true;
			}
		}
		return false;
	}
}
