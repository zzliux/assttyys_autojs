import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func995 implements IFuncOrigin {
	id = 995;
	name = '结界卡更换';
	desc = '';
	config = [{
		desc: '',
		config: [{
			name: 'change_enchantment_type',
			desc: '更换结界卡的所属类型',
			type: 'list',
			data: ['太鼓', '斗鱼'],
			default: '太鼓',
			value: '太鼓',
		}, {
			name: 'next_scheme',
			desc: '执行完成后的操作',
			type: 'scheme',
			default: '返回庭院',
			value: '返回庭院',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [
		{ //	0 判断_是否为己方结界
			desc: [1280, 720,
				[
					[center, 611, 300, 0x0c0804],
					[center, 913, 305, 0x0c0804],
					[left, 318, 305, 0x0c0804],
					[center, 613, 294, 0xe1cf6b],
					[left, 202, 462, 0x10100c],
				],
			],
			oper: [
				[center, 1280, 720, 599, 301, 626, 389, 1000], //  点击 式神育成
				[center, 1280, 720, 890, 305, 917, 391, 600], //  点击 结界卡
			],
		}, { // 1 判断_是否有结界卡奖励
			desc: [1280, 720,
				[
					[center, 909, 304, 0xdecdc3],
					[center, 908, 150, 0x10100c],
					[center, 623, 308, 0xe4ccc1],
				],
			],
			oper: [
				[center, 1280, 720, 904, 171, 939, 197, 1000], //  点击 结界卡奖励
			],
		}, { // 2 检测_结界卡激活确认框
			desc: [1280, 720,
				[
					[center, 854, 188, 0x362d28],
					[right, 1152, 561, 0x5c5235],
					[right, 1109, 120, 0x524e49],
					[center, 850, 255, 0xcbb59e],
					[center, 430, 256, 0xcbb59e],
					[center, 820, 436, 0xf4b25f],
					[center, 580, 430, 0xdf6851],
				],
			],
			oper: [
				[center, 1280, 720, 704, 416, 820, 447, 1200], //  点击 确认
			],
		}, { // 3 检测_是否为结界卡界面
			desc: [1280, 720,
				[
					[left, 120, 76, 0x75542b],
					[right, 1116, 109, 0xc7bdb2],
					[center, 748, 64, 0x543b2b],
					[right, 1150, 531, 0xb9b0a5],
					[center, 562, 498, 0xc7bdb2],
				],
			],
			oper: [
				[right, 1280, 720, 1160, 96, 1202, 128, 1200], //  点击 关闭
			],
		}, { // 4 检测_结界卡界面_结界卡为空
			desc: [
				1280,
				720,
				[
					[center, 850, 317, 0x452e20],
					[center, 850, 205, 0x826c61],
					[right, 1105, 100, 0xc7bdb3],
					[left, 114, 71, 0x6b4d28],
					[center, 747, 61, 0x543d2c],
				],
			],
			oper: [
				[center, 1280, 720, 381, 107, 486, 140, 1200], // 点击 结界卡类型下拉框
			],
		}, { // 5 检测_检测_结界卡界面_结界卡为空_下拉框已打开
			desc: [
				1280,
				720,
				[
					[center, 844, 291, 0x452e20],
					[center, 844, 211, 0x826c61],
					[center, 575, 102, 0xc7bdb2],
					[center, 466, 120, 0xe7d7c3],
					[center, 490, 566, 0x825e49],
					[center, 377, 192, 0xd7c9ba],
				],
			],
			oper: [
				[center, 1280, 720, 386, 248, 497, 278, 1000], // 点击 结界卡分类 太鼓
				[center, 1280, 720, 392, 317, 491, 348, 1000], // 点击 结界卡分类 斗鱼
				[left, 1280, 720, 278, 201, 465, 266, 1000], // 点击 第一个结界卡
			],
		}, { // 6 检测_结界卡已放置待激活
			desc: [
				1280, 720,
				[
					[center, 897, 276, 0xd0c8bf],
					[center, 847, 208, 0x826c61],
					[right, 1117, 117, 0xc7bdb2],
					[center, 572, 107, 0xc7bdb2],
					[right, 1088, 553, 0xfbf1b1],
					[right, 1150, 563, 0xdec47e],
					[right, 981, 605, 0x423128],
					[center, 958, 590, 0x3f3025],
					[center, 934, 640, 0x423128],
				]
			],
			oper: [
				[right, 1280, 720, 1062, 573, 1140, 638, 1200], //  点击激活
			],
		}, { // 7 desc:式神育成页 oper123:上阵N卡
			desc: [1280, 720,
				[
					[right, 1084, 83, 0xa7371d],
					[right, 1184, 203, 0x525252],
					[right, 968, 204, 0x505150],
					[right, 1127, 715, 0x3e2d1c],
					[right, 1185, 152, 0x414141],
				],
			],
			oper: [
				[center, 1280, 720, 40, 636, 90, 670, 700],
				[center, 1280, 720, 146, 312, 189, 350, 700],
				[center, 1280, 720, 1034, 548, 1056, 576, 700],
				[left, 1280, 720, 23, 24, 60, 63, 1200], //	点击 退出
				[center, 1280, 720, 599, 301, 626, 389, 1000], //  点击 式神育成
			]
		}, { // 8 检测_结界卡已激活_高星(4+星)适配
			desc: [
				1280,
				720,
				[
					[center, 897, 276, 0xd0c8bf],
					[center, 847, 208, 0x826c61],
					[right, 1117, 117, 0xc7bdb2],
					[center, 572, 107, 0xc7bdb2],
					[right, 1150, 563, 0xdec47e],
					[center, 946, 605, 0xc4a379],
					[right, 986, 586, 0xd2af88],
					[right, 974, 596, 0xbc9a73],
				],
			],
		}, { // 9 检测_结界卡已激活_低星(3-星)适配
			desc: [
				1280,
				720,
				[
					[center, 897, 276, 0xd0c8bf],
					[center, 847, 208, 0x826c61],
					[right, 1117, 117, 0xc7bdb2],
					[center, 572, 107, 0xc7bdb2],
					[right, 1150, 563, 0xdec47e],
					[center, 946, 605, 0xc4a379],
					[right, 986, 586, 0x3f2f27],
					[right, 974, 596, 0x403027],
				],
			],
		}, { // 10 还剩余几分钟到期
			desc: [
				1280, 720,
				[
					[center, 939, 276, 0xae4721],
					[center, 947, 276, 0xaa360d],
					[center, 951, 276, 0xb45e3e],
					[center, 958, 276, 0xaf4a25],
					[right, 967, 276, 0xb15330],
					[right, 975, 276, 0xac4019],
					[right, 1056, 568, 0xf6e7a4],
					[right, 1119, 584, 0x3d2a16],
					[right, 1108, 636, 0xe2bb54],
					[right, 1145, 636, 0xdfb84d],
				]
			],
			oper: [
				[center, 1280, 720, 1145, 92, 1201, 131, 1000],
			]
		}, { // 11 COR范围
			oper: [
				[center, 1280, 720, 918, 253, 1026, 294, 1000],
			]
		}, { //	12 判断_是否为己方结界
			desc: [1280, 720,
				[
					[center, 611, 300, 0x0c0804],
					[center, 913, 305, 0x0c0804],
					[left, 318, 305, 0x0c0804],
					[center, 613, 294, 0xe1cf6b],
					[left, 202, 462, 0x10100c],
				],
			],
			oper: [
				[center, 1280, 720, 582, 270, 638, 400, 600], //  点击 式神育成
			],
		}, { // 13 育成候补式神
			desc: [1280, 720,
				[
					[center, 460, 258, 0xcbb59e],
					[center, 799, 268, 0xcbb59e],
					[center, 467, 429, 0xdf6851],
					[center, 700, 431, 0xf4b25f],
					[center, 641, 429, 0xcbb59c],
					[center, 560, 356, 0x3e2e10],
				]
			],
			oper: [
				[center, 1280, 720, 544, 351, 566, 369, 1000],
				[center, 1280, 720, 690, 414, 831, 453, 1000],
			]
		}, { // 14 退出结算_取消确认框
			desc: '退出结算_取消确认框',
			oper: [
				[center, 1280, 720, 444, 410, 598, 449, 1000],
				[center, 1280, 720, 955, 150, 988, 185, 1000],
			]
		}, { // 15 育成界面_全部
			desc: [1280, 720,
				[
					[left, 36, 642, 0x4e2e9f],
					[left, 60, 660, 0x3534b8],
					[left, 94, 650, 0x263e82],
					[left, 79, 635, 0x2c3d8e],
					[left, 65, 671, 0x2b2788],
				]
			],
			oper: [
				[center, 1280, 720, 40, 636, 90, 670, 700],
				[center, 1280, 720, 39, 292, 86, 329, 1000],
				[center, 1280, 720, 198, 556, 229, 588, 1000], // 点击排位第一的白蛋
			]
		}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['995'];
		if (thisScript.oper({
			id: 995,
			name: '还剩余几分钟到期',
			operator: [thisOperator[10]]
		})) {
			thisScript.myToast('结界卡快到期，等待1分钟再操作');
			sleep(60000); // 等待1分钟再操作
			return true;
		}
		if (thisScript.oper({
			id: 995,
			name: '结界界面',
			operator: [{ desc: thisOperator[0].desc }],
		})) {
			if (thisScript.oper({
				id: 995,
				name: '领取结界卡奖励',
				operator: [thisOperator[1]]
			})) {
				change();
			}
			thisScript.regionClick([thisOperator[0].oper[1]]); // 点击 结界卡
			return true;
		}
		if (thisScript.oper({
			id: 995,
			name: '检测_是否为结界卡界面',
			operator: [{ desc: thisOperator[3].desc, }]
		})) {
			if (thisScript.oper({
				id: 995,
				name: '检测_结界卡界面_结界卡为空_下拉框已打开',
				operator: [{ desc: thisOperator[5].desc }],
			})) {
				const change_enchantment_type_index =
					thisconf && thisconf.change_enchantment_type === '斗鱼'
						? 1
						: 0 || 0;
				return thisScript.oper({
					id: 995,
					name: '点击 结界卡分类',
					operator: [{
						oper: [
							thisOperator[5].oper[change_enchantment_type_index],
							thisOperator[5].oper[2],
						]
					}],
				});
			}
			if (thisScript.oper({ // [2]需要测试别处是否能点击到
				id: 995,
				name: '更换结界操作_杂项',
				operator: [thisOperator[2], thisOperator[4], thisOperator[6]],
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 995,
				name: '检测_结界卡已激活',
				operator: [
					{ desc: thisOperator[8].desc },
					{ desc: thisOperator[9].desc }
				]
			})) {
				if (thisScript.getOcrDetector()) {
					const timeStr_ocr = thisScript.findNum(0, thisOperator[11].oper[0]);
					const timeStr = timeStr_ocr[0]?.label ?? '';   // OCR 没识别到就给空字符串
					if (timeStr) {
						// 统一格式，把中文冒号、空格都替换成英文冒号
						const cleanTime = timeStr.replace(/：/g, ':').replace(/\s+/g, '');
						const [h, m, s] = cleanTime.split(':').map(Number);
						const totalSeconds = h * 3600 + m * 60 + s;
						console.log('OCR 时间:', cleanTime, '=> 秒数:', totalSeconds,);
						thisScript.superGlobal.runTime = totalSeconds;
					} else {
						console.log('OCR 没识别到时间');
						thisScript.superGlobal.runTime = 300; // 5分钟后再试
					}
				}
				console.log('更换完毕');
				thisScript.regionClick([thisOperator[3].oper[0]]); // 关闭
				thisScript.doPush(thisScript, { text: '更换完毕，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.rerun(thisconf.next_scheme);
				sleep(3000);
				return true;
			}
		}
		return false;
		function change() {
			log('开始更换满级式神');
			let curCnt = 0;
			const maxCount = 10;
			outerLoop: for (; ;) {
				thisScript.keepScreen();
				if (thisScript.oper({
					id: 995,
					name: '进入式神育成',
					operator: [thisOperator[12], thisOperator[13], thisOperator[14]]
				})) {
					curCnt = 0;
					continue;
				}
				if (thisScript.oper({
					id: 995,
					name: '判断_是否为己方结界',
					operator: [
						{ desc: thisOperator[7].desc },
					],
				})) {
					const emptyPoint = thisScript.findMultiColorEx('寄养狗粮_空');
					if (emptyPoint && emptyPoint.length > 0) {
						const emptyCount = emptyPoint.length;
						if (thisScript.oper({
							id: 995,
							name: '式神育成_全部',
							operator: [{ desc: thisOperator[15].desc }]
						})) {
							thisScript.regionClick([thisOperator[7].oper[0]]);
							thisScript.regionClick([thisOperator[7].oper[1]]);
						}
						for (let i = 0; i < emptyCount - 1; i++) {
							thisScript.regionClick([thisOperator[7].oper[2]]);
						}
						curCnt = 0;
						continue;
					} else {
						console.log('没有空位了');
					}
					const fullLevelPoint = thisScript.findMultiColorEx('寄养狗粮_满级标识');
					if (fullLevelPoint && fullLevelPoint.length > 0) {
						console.log('有狗粮满级了,清空狗粮');
						for (let i = 0; i < fullLevelPoint.length; i++) {
							if (fullLevelPoint[i].y > 350) {
								thisScript.regionClick(thisOperator[15].oper);
								thisScript.doPush(thisScript, { text: '全部N卡已满级' });
								break outerLoop;
							}
							const oper = [
								[
									fullLevelPoint[i].x,
									fullLevelPoint[i].y,
									fullLevelPoint[i].x + 20,
									fullLevelPoint[i].y + 20,
									500,
								],
							];
							console.log('清空满级狗粮', i);
							thisScript.regionClick(oper);
						}
						curCnt = 0;
						continue;
					} else {
						// 狗粮没满级
						console.log('狗粮没满级');
						thisScript.regionClick([thisOperator[7].oper[3]]);
						break;
					}
				}
				curCnt++;
				if (curCnt >= maxCount) {
					break;
				}
				sleep(300)
			}
		}
	}
}