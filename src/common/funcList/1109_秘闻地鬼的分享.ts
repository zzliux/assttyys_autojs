import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1109 implements IFuncOrigin {
	id = 1109;
	name = '每周秘闻地鬼的分享';
	desc = '请保证已经攻打过秘闻和地鬼(非mumu版本时依赖大神分享,并且无地鬼分享)';
	operator: IFuncOperatorOrigin[] = [{ // 0 庭院进入探索
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 658, 127, 697, 170, 1000],
		]
	}, { // 1 体服 探索地图界面_含时空秘境 废弃
		oper: [
			[center, 1280, 720, 641, 638, 706, 694, 1000],
		]
	}, { // 2 20230524正式服，探索地图进入秘闻
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 544, 636, 602, 701, 1000],
		]
	}, { // 3 每周挑战秘闻弹窗，暗
		desc: [
			1280, 720,
			[
				[left, 110, 42, 0x44423d],
				[left, 211, 38, 0x44423e],
				[left, 31, 634, 0x211719],
				[right, 1255, 706, 0x2b2326],
				[right, 1264, 364, 0x110b0b],
				[center, 886, 24, 0x4b290d]
			]
		],
		oper: [
			[center, 1280, 720, 1020, 112, 1230, 371, 1000]
		]
	}, { // 4 每周挑战秘闻选择并进入
		desc: [1280, 720,
			[
				[left, 50, 598, 0x2c2e3c],
				[left, 26, 149, 0x101014],
				[center, 465, 641, 0x857d6c],
				[right, 1258, 576, 0x3c2830],
				[left, 45, 47, 0xf6e6a7],
			]
		],
		oper: [
			[center, 1280, 720, 134, 150, 450, 246, 500],
			[center, 1280, 720, 1142, 598, 1239, 688, 500],
		]
	}, { // 5 秘闻挑战开启
		desc: '秘闻挑战开启',
		oper: [
			[left, 1280, 720, 452, 605, 870, 683, 2000],
		]
	}, { // 6 秘闻排行
		desc: [1280, 720,
			[
				[right, 1024, 594, 0xe6c693],
				[right, 1031, 587, 0xc7a578],
				[right, 1038, 592, 0xcba97b],
				[right, 1049, 593, 0xe6c796],
			]
		],
	}, { // 7 秘闻分享
		desc: [1280, 720,
			[
				[right, 915, 581, 0xe7b66b],
				[right, 926, 586, 0xdfc392],
				[right, 942, 578, 0xf0d19f],
				[right, 946, 602, 0xe7b46b],
				[right, 936, 593, 0x89695a],
			]
		],
		oper: [
			[center, 1280, 720, 915, 579, 952, 606, 2500],
		]
	}, { // 8 微信分享
		desc: [1280, 720,
			[
				[right, 749, 626, 0x2e693c],
				[right, 737, 635, 0xffffff],
				[right, 731, 641, 0xffffff],
				[right, 724, 652, 0x31693e],
				[right, 736, 654, 0x2e6a3f],
			]
		],
		oper: [
			[center, 1280, 720, 722, 631, 757, 657, 1000],
		]
	}, { // 9 分享完成
		desc: [1280, 720,
			[
				[center, 499, 187, 0xcec4bd],
				[right, 781, 193, 0xcec5bb],
				[right, 781, 543, 0xcec5bb],
				[center, 495, 543, 0xcbc4ba],
				[right, 651, 548, 0xcec7bd],
			]
		],
		oper: [
			[center, 1280, 720, 389, 651, 517, 710, 1000],
		]
	}, { // 10 微信分享关闭
		desc: [1280, 720,
			[
				[right, 749, 626, 0x2e693c],
				[right, 737, 635, 0xffffff],
				[right, 731, 641, 0xffffff],
				[right, 724, 652, 0x31693e],
				[right, 736, 654, 0x2e6a3f],
			]
		],
		oper: [
			[center, 1280, 720, 34, 30, 58, 60, 1000],
		]
	}, { // 11 探索点地鬼
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 650, 644, 691, 683, 1000],
		]
	}, { // 12 第一个地鬼
		desc: [1280, 720,
			[
				[left, 164, 396, 0x3c2827],
				[left, 241, 396, 0x432e2a],
				[left, 274, 394, 0x3f2b29],
				[center, 348, 394, 0x462f2d],
			]
		],
		oper: [
			[center, 1280, 720, 179, 381, 217, 413, 1000],
		]
	}, { // 13 每日挑战
		desc: [1280, 720,
			[
				[left, 62, 374, 0xd65e4a],
				[left, 33, 406, 0xce9c55],
				[left, 101, 403, 0xcb9a58],
				[left, 109, 381, 0xeae2c9],
			]
		],
		oper: [
			[center, 1280, 720, 48, 373, 102, 419, 1000],
		]
	}, { // 14 分享战绩
		desc: [1280, 720,
			[
				[right, 1190, 320, 0xcaaa7f],
				[right, 1199, 313, 0xdec395],
				[right, 1220, 320, 0xd6ba8c],
				[right, 1212, 332, 0x7a5933],
				[right, 1191, 337, 0xbd9c76],
			]
		],
		oper: [
			[center, 1280, 720, 1192, 311, 1228, 347, 2000],
		]
	}, { // 15 微信
		desc: [1280, 720,
			[
				[right, 790, 663, 0xffffff],
				[right, 798, 657, 0xffffff],
				[right, 812, 648, 0x2e693c],
				[right, 814, 670, 0xffffff],
				[right, 793, 675, 0x31683c],
			]
		],
		oper: [
			[center, 1280, 720, 783, 651, 819, 678, 1000],
		]
	}, { // 16 分享完成
		desc: [1280, 720,
			[
				[center, 499, 187, 0xcec4bd],
				[right, 781, 193, 0xcec5bb],
				[right, 781, 543, 0xcec5bb],
				[center, 495, 543, 0xcbc4ba],
				[right, 651, 548, 0xcec7bd],
				[right, 812, 648, 0x2e693c],
				[right, 814, 670, 0xffffff],
			]
		],
		oper: [
			[center, 1280, 720, 38, 40, 75, 78, 1000],
			[center, 1280, 720, 38, 40, 75, 78, 1000],
		]
	}, { // 17 分享界面返回
		desc: [1280, 720,
			[
				[left, 54, 47, 0xc6cbe0],
				[left, 42, 60, 0xc3cbe1],
				[left, 48, 65, 0xc4cbe0],
				[left, 69, 61, 0x3c4a94],
			]
		],
		oper: [
			[center, 1280, 720, 35, 41, 78, 79, 1000],
		]
	}, { // 18 地鬼界面返回
		desc: [1280, 720,
			[
				[right, 1201, 37, 0xe7d3cf],
				[right, 1210, 28, 0x883d5e],
				[right, 1219, 37, 0xe7d7ce],
				[right, 1204, 50, 0xe9d1d1],
				[right, 1217, 53, 0xefd3ce],
			]
		],
		oper: [
			[center, 1280, 720, 1197, 30, 1222, 58, 1000],
		]
	}, { // 19 大神分享
		desc: [1280, 720,
			[
				[right, 1007, 627, 0xfefcfc],
				[right, 998, 641, 0x1b1f3c],
				[right, 1027, 643, 0x222239],
				[right, 1027, 648, 0x17233e],
				[right, 1021, 655, 0xfefcfc],
			]
		],
		oper: [
			[center, 1280, 720, 993, 631, 1031, 663, 5000],
		]
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.global.miWenshare) {
			let curCnt = 0;
			const maxCount = 3;
			while (thisScript.global.MT_share_type === 'mumu' && thisScript.oper({
				name: '秘闻分享_多次点击',
				operator: [thisOperator[8]]
			})) {
				curCnt++;
				if (curCnt >= maxCount) {
					thisScript.myToast('点击微信失败');
					thisScript.global.miWenshare = false;
					thisScript.global.diGuishare = false;
					sleep(1000);
					return false;
				}
				sleep(1000);
				thisScript.keepScreen(false);
			}
			// while (thisScript.global.MT_share_type === 'phone' && thisScript.oper({
			// 	name: '秘闻分享_多次点击',
			// 	operator: [thisOperator[19]]
			// })) {
			// 	curCnt++;
			// 	if (curCnt >= maxCount) {
			// 		thisScript.myToast('点击微博失败,停止分享');
			// 		thisScript.global.miWenshare = false;
			// 		thisScript.global.diGuishare = true;
			// 		sleep(1000);
			// 		return false;
			// 	}
			// 	sleep(1000);
			// 	thisScript.keepScreen(false);
			// } 失败,不想研究了,虚拟机里拉起大神后不会分享,模拟器只需要mumu即可
			// if (thisScript.global.MT_share_type === 'phone') {
			// 	if (text('发布').findOnce()) {
			// 		log('点击发布')
			// 		text('发布').findOnce().click()
			// 		return true;
			// 	}
			// 	if (id('tv_request_share_app_name').findOnce()) {
			// 		log('点击返回')
			// 		id('tv_request_share_app_name').findOnce().click()
			// 		thisScript.global.miWenshare = false;
			// 		sleep(1000);
			// 		return true;
			// 	}
			// }
			if (thisScript.oper({
				id: 1109,
				name: '秘闻微信分享完毕',
				operator: [thisOperator[9]]
			})) {
				thisScript.global.miWenshare = false;
				thisScript.global.diGuishare = true;
				return true;
			}
			if (thisScript.oper({
				id: 1109,
				name: '进入秘闻',
				operator: [thisOperator[0], thisOperator[2], thisOperator[3]
					, thisOperator[4], thisOperator[5], thisOperator[8]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 1109,
				name: '秘闻排行',
				operator: [thisOperator[6]]
			})) {
				if (thisScript.oper({
					id: 1109,
					name: '秘闻分享',
					operator: [thisOperator[7]]
				})) {
					return true;
				} else {
					thisScript.doPush(thisScript, { text: '你的秘闻似乎没有通关到十层' });
					thisScript.global.diGuishare = true;
					thisScript.global.miWenshare = false;
				}
				return true;
			}
		}
		if (thisScript.global.diGuishare) {
			if (thisScript.oper({
				id: 1109,
				name: '地鬼分享完毕',
				operator: [thisOperator[16]]
			})) {
				thisScript.global.diGuishare = false;
				return true;
			}
			if (thisScript.oper({
				id: 1109,
				name: '进入地鬼',
				operator: [thisOperator[0], thisOperator[10], thisOperator[11], thisOperator[12]
					, thisOperator[13], thisOperator[14], thisOperator[15]]
			})) {
				return true;
			}
		}
		if (thisScript.oper({
			id: 1109,
			name: '分享完成_返回',
			operator: [thisOperator[10], thisOperator[17], thisOperator[18]]
		})) {
			return true;
		}
		const { lastFuncDateTime, currentDate, runDate } = thisScript;
		if (new Date().getTime() - Math.max(lastFuncDateTime?.getTime() || 0, currentDate?.getTime() || 0, runDate?.getTime() || 0) > 10000) {
			if (id('iv_close').findOnce()) {
				id('iv_close').findOnce().click();
				return true;
			}
		}
		return false;
	}
}
