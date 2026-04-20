import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1110 implements IFuncOrigin {
	id = 1110;
	name = '神秘商店购买蓝票黑碎';
	config = [{
		desc: '',
		config: [{
			name: 'black',
			desc: '是否购买黑碎',
			type: 'switch',
			default: false,
		}, {
			name: 'share',
			desc: '有蓝票时分享',
			type: 'switch',
			default: false,
		}, {
			name: 'friend_name',
			desc: '分享昵称(多名用逗号隔开)',
			type: 'text',
			default: '',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 庭院_商店
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 660, 626, 697, 664, 1200], //  庭院点击商店
		],
	}, { // 1 拓展包关闭
		desc: '式神拓展包弹窗',
		oper: [
			[center, 1280, 720, 425, 450, 544, 489, 1000], // 关闭
		]
	}, { // 2 关闭菜单
		desc: [1280, 720,
			[
				[left, 60, 537, 0xbd9273],
				[left, 59, 555, 0xc69673],
				[left, 72, 546, 0xc39673],
				[center, 354, 652, 0x992937],
				[right, 883, 675, 0x397cd2],
			]
		],
		oper: [
			[center, 1280, 720, 32, 24, 70, 53, 1000],
		]
	}, { // 3 进入神秘商店
		desc: [1280, 720,
			[
				[left, 60, 522, 0xe7e3e7],
				[left, 77, 519, 0xbc4c40],
				[left, 93, 504, 0xfcfefc],
				[left, 89, 498, 0xfcfbfc],
				[left, 89, 481, 0x2c2226],
			]
		],
		oper: [
			[center, 1280, 720, 65, 504, 94, 521, 1000],
		]
	}, { // 4 神秘商店界面中
		desc: [1280, 720,
			[
				[right, 1087, 377, 0x6b4d4f],
				[right, 1170, 510, 0xfdfcfd],
				[right, 1122, 560, 0xaf4239],
				[right, 1254, 389, 0x302929],
				[right, 1230, 418, 0x863231],
			]
		],
		oper: [
			[center, 1280, 720, 77, 515, 109, 548, 1000],
			[center, 1280, 720, 75, 81, 102, 111, 1000],
		]
	}, { // 5 神秘商店已下拉
		desc: [1280, 720,
			[
				[left, 162, 491, 0xc28439],
				[left, 172, 490, 0xdecb8c],
				[left, 173, 495, 0xbd8e52],
				[center, 328, 492, 0xa75f21],
				[left, 320, 496, 0xa5754a],
			]
		],
		oper: [
			[center, 1280, 720, 94, 13, 127, 46, 1000],
		]
	}, { // 6 下一页
		desc: [1280, 720,
			[
				[right, 1236, 327, 0xffe5bd],
				[right, 1254, 341, 0xffe5be],
				[right, 1239, 350, 0xffe3bd],
				[right, 1233, 355, 0xffe6be],
				[right, 1088, 380, 0x6c4d4f],
				[right, 1229, 480, 0x3c3737],
			]
		],
		oper: [
			[center, 1280, 720, 1233, 326, 1254, 356, 1000],
		]
	}, { // 7 分享
		desc: [1280, 720,
			[
				[left, 63, 587, 0xead994],
				[left, 80, 601, 0xe7d58e],
				[left, 86, 626, 0xddc272],
				[left, 67, 637, 0x312419],
				[left, 65, 615, 0xe7cf84],
			]
		],
		oper: [
			[center, 1280, 720, 41, 593, 95, 636, 1000],
		]
	}, { // 8 好友界面拉下来
		desc: [1280, 720,
			[
				[center, 427, 161, 0xd6beaa],
				[right, 640, 158, 0xd6c0ad],
				[right, 913, 162, 0xd3baa7],
				[center, 363, 163, 0xd3b8a5],
			]
		],
		oper: [
			[center, 1280, 720, 615, 186, 659, 224, 1000],
			[center, 1280, 720, 619, 498, 668, 529, 1000],
		]
	}, { // 9 输入昵称
		desc: [1280, 720,
			[
				[right, 728, 169, 0xe4d9c3],
				[right, 750, 185, 0xe4d9c3],
				[right, 782, 169, 0xe4d9c3],
				[right, 814, 176, 0xc6b29c],
				[right, 845, 168, 0xc8997b],
				[center, 392, 180, 0xaca295],
			]
		],
		oper: [
			[center, 1280, 720, 370, 167, 545, 186, 1000],
		]
	}, { // 10 邀请界面
		desc: [1280, 720,
			[
				[left, 309, 80, 0xea7b91],
				[right, 950, 65, 0xf4ded9],
				[center, 462, 571, 0xde6952],
				[right, 729, 578, 0xf4b25d],
				[center, 637, 114, 0xd6c0ad],
			]
		],
		oper: [
			[center, 1280, 720, 850, 164, 916, 188, 1000], // 点击搜索
			[center, 1280, 720, 486, 97, 566, 131, 1000], // 跨区
			[center, 1280, 720, 807, 169, 823, 182, 1000], // 清空
			[center, 1280, 720, 730, 560, 820, 592, 1000], // 分享
			[center, 1280, 720, 350, 235, 922, 492, 1000], // ocr区域
			[center, 1280, 720, 374, 99, 438, 136, 1000], // 好友
		]
	}, { // 11 购买界面
		desc: [1280, 720,
			[
				[center, 467, 256, 0xcfb79b],
				[center, 459, 524, 0xd2b498],
				[right, 811, 521, 0xc8a98a],
				[right, 822, 241, 0xd0b89c],
				[center, 581, 512, 0xf3b25e],
				[right, 705, 519, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 570, 500, 715, 532, 1000],
		]
	}, { // 12 返回自己的商店
		desc: [1280, 720,
			[
				[left, 53, 327, 0xffe4bd],
				[left, 42, 336, 0xffe6c0],
				[left, 38, 344, 0xffe5be],
				[left, 54, 354, 0xffe6c0],
			]
		],
		oper: [
			[center, 1280, 720, 42, 326, 60, 360, 1000],
		]
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['1110'];
		if (thisScript.oper({
			id: 1110,
			name: '进入神秘商店',
			operator: [thisOperator[0], thisOperator[1], thisOperator[2], thisOperator[3]
				, thisOperator[11]]
		})) {
			return true;
		}
		if (thisScript.global.shopShare) {
			if (thisScript.oper({
				id: 1110,
				name: '分享',
				operator: [thisOperator[12], thisOperator[7]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 1110,
				name: '分享页面',
				operator: [{ desc: thisOperator[9].desc }]
			})) {
				const friend_name = thisScript.parseName(thisconf.friend_name as string)
				for (let i = 0; i < friend_name.length; i++) {
					thisScript.regionClick(thisOperator[9].oper)
					const input = className('android.widget.EditText').findOne(1000);
					if (input) {
						input.setText(friend_name[i]);
						thisScript.regionClick([thisOperator[10].oper[0]])
						thisScript.regionClick([thisOperator[10].oper[0]])
						inv(friend_name[i]);
					} else {
						continue;
					}
					thisScript.global.shopShare = false;
				}
				thisScript.regionClick([thisOperator[10].oper[3]])
				return true;
			}
			if (thisScript.oper({
				id: 1110,
				name: '下拉出搜索框',
				operator: [{ desc: thisOperator[8].desc }]
			})) {
				thisScript.regionSwipe(thisOperator[8].oper[0], thisOperator[8].oper[1], [700, 800], 1000);
				return true;
			}
		}
		let curCnt = 0;
		const maxCount = 3;
		while (thisScript.oper({
			id: 1110,
			name: '神秘商店中',
			operator: [{ desc: thisOperator[4].desc }]
		})) {
			curCnt++;
			thisScript.keepScreen(false);
			if (thisconf.black) {
				const point = thisScript.findMultiColor('神秘商店_黑碎');
				if (point) {
					const region = [left, 1280, 720, point.x - 70, point.y + 70, point.x + 70, point.y + 161]
					const point1 = thisScript.findMultiColor('神秘商店_黑碎', region);
					if (point1) {
						const oper = [[point.x, point.y, point.x + 5, point.y + 5, 1000]];
						thisScript.regionClick(oper);
						return true;
					}
				}
			}
			const point = thisScript.findMultiColor('神秘商店_蓝票');
			if (point) {
				const oper = [[point.x, point.y, point.x + 5, point.y + 5, 1000]];
				thisScript.regionClick(oper);
				if (thisScript.oper({
					id: 1110,
					name: '神秘商店中',
					operator: [{ desc: thisOperator[7].desc }]
				})) {
					if (thisScript.global.shopShare === null) {
						thisScript.global.shopShare = true;
					}
				}
				return true;
			}
			if (curCnt >= maxCount) {
				if (thisScript.oper({
					id: 1110,
					name: '已下滑',
					operator: [{ desc: thisOperator[5].desc }]
				})) {
					if (!thisScript.oper({
						id: 1110,
						name: '下一页',
						operator: [thisOperator[6]]
					})) {
						thisScript.regionClick(thisOperator[5].oper);
						thisScript.stop();
						break;
					} else {
						return false;
					}
				} else {
					thisScript.regionSwipe(thisOperator[4].oper[0], thisOperator[4].oper[1], [700, 800], 1000);
				}
				return false;
			}
			sleep(200);
		}
		function inv(name) {
			let curCnt = 0;
			const maxCount = 3;
			const maxMaxCount = 6;
			while (thisScript.oper({
				id: 1110,
				name: '秘闻排行',
				operator: [{ desc: thisOperator[10].desc }]
			})) {
				curCnt++;
				thisScript.keepScreen(false);
				const result = thisScript.findText('.+', 0, thisOperator[10].oper[4], '包含');
				const findInvName = thisScript.findTextByOcrResult(name, result, '包含')
				if (findInvName.length) {
					const toClickRegion = [
						findInvName[0].points[0].x + 20,
						findInvName[0].points[0].y,
						findInvName[0].points[0].x + 50,
						findInvName[0].points[0].y + 65,
						1000,
					]
					thisScript.regionClick([toClickRegion])
					thisScript.regionClick([thisOperator[10].oper[2]])
					thisScript.regionClick([thisOperator[10].oper[5]])
					break
				}
				if (curCnt >= maxMaxCount) {
					thisScript.myToast('跨区未找到,取消本次邀请')
					thisScript.regionClick([thisOperator[10].oper[2]])
					thisScript.regionClick([thisOperator[10].oper[5]])
					break;
				} else if (curCnt == maxCount) {
					thisScript.myToast('好友未找到,改为跨区')
					thisScript.regionClick([thisOperator[10].oper[1]])
				}
			}
		}
	}
}
