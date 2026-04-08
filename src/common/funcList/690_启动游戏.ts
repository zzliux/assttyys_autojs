import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func690 implements IFuncOrigin {
	id = 690;
	name = '启动游戏';
	desc = '启动游戏';
	config = [{
		desc: '',
		config: [{
			name: 'email_switch_enabled',
			desc: '是否切换邮箱',
			type: 'switch',
			default: false,
		}, {
			name: 'next_email',
			desc: '邮箱号码',
			type: 'text',
			default: '@163.com',
		}, {
			name: 'apple',
			desc: '是否为苹果账号',
			type: 'switch',
			default: false,
		}, {
			name: 'area',
			desc: '游戏区服',
			type: 'text',
			default: '',
			value: '',
		}, {
			name: 'name',
			desc: '游戏昵称',
			type: 'text',
			default: '',
			value: '',
		}, {
			name: 'scheme_switch_enabled',
			desc: '是否切换方案(不切换则只运行一次)',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '式神寄养',
		}, {
			name: 'close_game_new',
			desc: '长时间未识别时重启游戏',
			type: 'switch',
			default: true,
		}, {
			name: 'account_index',
			desc: '账号序号(用于同区多账号，账号序号优先级大于账号昵称)',
			type: 'text',
			default: 0,
			value: 0,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 0 是否为登录页
		desc: [1280, 720,
			[
				// 进入游戏按钮
				[center, 704, 602, 0xffffff],
				[center, 713, 611, 0xffffff],
				[center, 623, 597, 0xfffefe],
				[center, 630, 601, 0xfdfdfd],
				[center, 590, 611, 0xffffff],
				[center, 588, 592, 0xfefdfd],
				// 左上角阴阳师毛笔字
				[left, 86, 53, 0xfdfddb],
				[left, 88, 182, 0xfbdfae],
			]
		],
		oper: [
			[center, 1280, 720, 562, 574, 722, 617, 1200], // 点击开始游戏
			[center, 1280, 720, 425, 456, 686, 575, 1000], // 游戏区区域
		],
	}, { // 1 游戏公告页(26年3月更新)
		desc: [1280, 720,
			[
				[left, 67, 122, 0xdfc4bb],
				[left, 66, 358, 0x987c76],
				[left, 112, 74, 0xe4d7bc],
				[left, 206, 63, 0xd8c2a3],
				[left, 243, 62, 0xd8bc9d],
				[right, 1217, 88, 0xe8d4cf],
			]
		],
		oper: [
			[center, 1280, 720, 1203, 77, 1235, 102, 1000],
		]
	}, { // 2 是否为切换账号页
		desc: [
			1280,
			720,
			[
				[left, 210, 580, 0x284d16],
				[center, 376, 190, 0xf8f9fc],
				[center, 462, 446, 0xfb4f4f],
				[right, 826, 454, 0xfb4f4f],
			],
		],
		oper: [
			[center, 1280, 720, 386, 418, 893, 474, 1200], // 点击确认
		],
	}, { // 3 是否为被强登
		desc: [
			1280,
			720,
			[
				[center, 780, 260, 0x573828],
				[center, 677, 398, 0xf4b25f],
				[center, 664, 415, 0x272420],
				[center, 788, 393, 0xcbb59e],
			],
		],
		oper: [
			[center, 1280, 720, 578, 373, 704, 432, 1200], // 点击确认
		],
	}, { // 4 是否为选择游戏区域
		desc: [
			1280, 720,
			[
				[left, 162, 149, 0xd9a756],
				[center, 643, 74, 0xe1bf80],
				[right, 1050, 592, 0xffe1bd],
			]
		],
		oper: [
			[center, 1280, 720, 706, 507, 770, 539, 1200], // 切换按钮 区域
			[center, 1280, 720, 256, 570, 997, 615, 1000], // ocr昵称区域
		],
	}, { // 5
	}, { // 6 登陆后是否有下载插画弹窗
		desc: [
			1280,
			720,
			[
				[center, 439, 471, 0xdf6851],
				[center, 740, 463, 0xf4b25f],
				[center, 639, 280, 0xdbc5ae],
				[center, 642, 183, 0x765443],
			],
		],
		oper: [
			[center, 1280, 720, 432, 455, 564, 500, 1200], // 取消按钮
		],
	}, { // 7
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[right, 1280, 720, 1168, 592, 1230, 690, 1200], // 在首页打开菜单
		],
	}, { // 8
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
	}, { // 9 用户中心
		desc: [1280, 720,
			[
				[right, 1225, 255, 0xd0c3ac],
				[right, 1229, 245, 0xc8bca4],
				[right, 1227, 233, 0x816c56],
				[right, 1238, 240, 0x806c5a],
				[right, 1222, 246, 0xc6bda8],
			]
		],
		oper: [
			[center, 1280, 720, 1208, 228, 1236, 254, 1000],
		]
	}, { // 10 网络连接出错弹窗(适配 mumu6)
		desc: [
			1280,
			720,
			[
				[center, 928, 260, 0xffffff],
				[center, 330, 254, 0xffffff],
				[center, 332, 462, 0xffffff],
				[center, 376, 294, 0xf9e4d8],
			],
		],
		oper: [
			[center, 1280, 720, 875, 426, 924, 450, 1200], // 确认按钮
		],
	}, { // 11 同心队弹窗
		desc: [
			1280,
			720,
			[
				[right, 1127, 628, 0xf4b25f],
				[right, 1197, 116, 0x6d334c],
				[center, 744, 64, 0x543e2b],
				[left, 134, 657, 0xcbbdab],
				[left, 131, 100, 0xc9bcaa],
			],
		],
		oper: [
			[right, 1280, 720, 1155, 91, 1204, 138, 1200], // 关闭按钮
		],
	}, { // 12 切换账号
		desc: [1280, 720,
			[
				[right, 937, 201, 0xf97373],
				[right, 1010, 180, 0xf97879],
				[right, 1071, 208, 0xf97879],
				[right, 1001, 237, 0xf97879],
			]
		],
		oper: [
			[center, 1280, 720, 947, 195, 1066, 224, 1000],
		]
	}, { // 13
		desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
	}, { // 14 继续战斗弹窗
		desc: [
			1280,
			720,
			[
				[center, 835, 252, 0xcbb59e],
				[center, 452, 245, 0xcbb59e],
				[center, 817, 460, 0xcbb59e],
				[center, 447, 465, 0xcbb59e],
				[center, 582, 412, 0xdf6851],
				[center, 782, 410, 0xf4b25f],
				[right, 1153, 40, 0x594938], // 限制庭院背景
				[right, 1220, 36, 0x574836], // 按理说只有重启游戏才有此选项
			],
		],
		oper: [
			[center, 1280, 720, 492, 405, 590, 440, 1200], //	点击取消
		],
	}, { // 15  选择账号界面_账号选择框未打开
		desc: [1280, 720,
			[
				[center, 541, 213, 0xe71021],
				[center, 546, 213, 0xe92d3c],
				[center, 560, 213, 0xe61021],
				[center, 568, 213, 0xe71324],
				[center, 451, 445, 0xfb4f4f],
				[center, 837, 445, 0xfb4f4f],
			]
		],
		oper: [
			[center, 1280, 720, 596, 415, 678, 469, 1000], // 登录
			[center, 1280, 720, 580, 297, 703, 364, 1000], // 打开账号选择框
		]
	}, { // 16
		desc: '庭院已打开菜单_另另外一种图标',
	}, { // 17 客户端更新窗口关闭
		desc: [
			1280,
			720,
			[
				[center, 405, 395, 0xeddccc],
				[center, 869, 419, 0xeddccc],
				[center, 714, 556, 0xf4b25f],
				[center, 915, 131, 0x65333b],
				[right, 1224, 50, 0x54422f],
			],
		],
		oper: [[center, 1280, 720, 894, 119, 941, 175, 1000]],
	}, { // 18 同区多账号(目前只适配两个账号，多个账户需要进一步适配)
		desc: [
			1280,
			720,
			[
				[left, 38, 58, 0xeff5fb],
				[left, 90, 146, 0x371f16],
				[left, 98, 164, 0x432f2c],
				[left, 26, 163, 0x3e2825],
				[left, 97, 290, 0x422e2a],
				[left, 90, 270, 0x371f16],
				[left, 28, 302, 0x302020],
			],
		],
		oper: [
			[left, 1280, 720, 106, 101, 424, 607, 1200], //  多账号区域
			[left, 1280, 720, 142, 142, 261, 180, 1200], //  第一个账号坐标
			[left, 1280, 720, 126, 272, 264, 307, 1200], //  第二个账号坐标
			[left, 1280, 720, 126, 377, 289, 409, 1200], //  第三个账号坐标(瞎猜的，没有三个账号同区的场景)
		],
	}, { // 19 选择账号界面_账号选择框已打开
		desc: [1280, 720,
			[
				[center, 541, 213, 0xe71021],
				[center, 546, 213, 0xe92d3c],
				[center, 560, 213, 0xe61021],
				[center, 568, 213, 0xe71324],
				[center, 379, 325, 0xf0f0f0],
				[center, 379, 483, 0xf0f0f0],
			]
		],
		oper: [
			[center, 1280, 720, 844, 580, 877, 590, 1000], // 上拉起始
			[center, 1280, 720, 839, 250, 868, 260, 1000], // 上拉结束
			[center, 1280, 720, 453, 283, 894, 599, 1000], // ocr位置
		]
	}, { // 20 网络连接出错弹窗(适配 雷电)
		desc: [
			1280,
			720,
			[
				[center, 910, 436, 0x009688],
				[center, 928, 260, 0xffffff],
				[center, 330, 254, 0xffffff],
				[center, 332, 462, 0xffffff],
			],
		],
		oper: [
			[center, 1280, 720, 875, 426, 924, 450, 1200], // 确认按钮
		],
	}, { //	21 关闭皮肤广告误触导致点击了庭院樱花树，兜底方案
		desc: [
			1280, 720,
			[
				[center, 649, 241, 0xede2d0],
				[center, 752, 341, 0xede2d0],
				[center, 680, 416, 0xede2d0],
				[center, 577, 315, 0xede2d0],
				[right, 1153, 37, 0x987e61],
				[right, 1220, 35, 0x967b5c],
				[right, 1055, 428, 0x77746a],
			]
		],
		oper: [
			[center, 1280, 720, 814, 470, 960, 613, 1200], // 点击空白处
		]
	}, { // 22 选择安卓或苹果平台
		desc: [1280, 720,
			[
				[center, 532, 383, 0x1a1a1a],
				[center, 696, 383, 0x8ec220],
				[center, 530, 424, 0x1a1a1a],
				[center, 693, 422, 0x8ec220],
			]
		],
		oper: [
			[center, 1280, 720, 687, 377, 746, 430, 1000], // 安卓
			[center, 1280, 720, 527, 376, 586, 433, 1000], // 苹果
		]
	}, { // 23 开屏的zen动画
		desc: [1280, 720,
			[
				[left, 139, 147, 0x353435],
				[left, 150, 568, 0x363537],
				[right, 1146, 105, 0x353435],
				[right, 1135, 560, 0x353435],
				[right, 908, 296, 0x343334],
			]
		],
		oper: [
			[center, 1280, 720, 1030, 310, 1155, 507, 1000],
		]
	}, { // 24 加载进度条
		desc: [
			1280, 720,
			[
				[left, 57, 655, 0x815930],
				[left, 73, 654, 0xc0a77a],
				[left, 86, 654, 0xa68454],
				[left, 100, 653, 0x7f5b32],
				[left, 100, 658, 0x835b34],
			]
		]
	}, { // 25 更新进度条
		desc: [
			1280, 720,
			[
				[left, 84, 712, 0x835b34],
				[left, 107, 707, 0x835a31],
				[left, 122, 706, 0xc4ad81],
				[left, 137, 705, 0xc7a674],
				[left, 122, 710, 0x885f36],
			]
		]
	}, { // 26 关联手机
		desc: [1280, 720,
			[
				[right, 997, 451, 0xe7cfb1],
				[right, 1058, 491, 0xdec2a3],
				[right, 1020, 536, 0xd7b17b],
				[right, 876, 204, 0xe8e0d4],
			]
		],
		oper: [
			[center, 1280, 720, 968, 463, 1036, 522, 1000],
		]
	}, { // 27 关联手机确认框
		desc: [1280, 720,
			[
				[center, 480, 488, 0xdf6851],
				[center, 565, 515, 0xdf6851],
				[right, 710, 488, 0xf3b25e],
				[right, 692, 393, 0xf3b25e],
				[right, 834, 429, 0xf3b25e],
				[right, 802, 520, 0xf4b35d],
			]
		],
		oper: [
			[center, 1280, 720, 475, 483, 579, 523, 1000],
		]
	}, { // 28 战斗界面
		desc: '战斗界面'
	}, { // 29 三个号,已沉底
		desc: [1280, 720,
			[
				[center, 447, 568, 0xfd6969],
				[center, 447, 574, 0xfd6969],
				[center, 458, 570, 0xfd5d5d],
				[right, 713, 570, 0xbebebe],
				[right, 716, 570, 0xb6b6b6],
				[right, 728, 570, 0xb6b6b6],
			]
		],
		oper: [
			[center, 1280, 720, 1007, 336, 1120, 464, 1000],
		]
	}, { // 30 两个号,已沉底  //虚拟机里有色差,不想管了
		desc: [1280, 720,
			[
				[center, 443, 532, 0xfd7272],
				[center, 450, 532, 0xfd7272],
				[center, 458, 532, 0xfd5d5d],
				[right, 712, 532, 0xbbbbbb],
				[right, 728, 532, 0xb6b6b6],
			]
		],
		oper: [
			[center, 1280, 720, 1020, 396, 1161, 550, 1000],
		]
	},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['690'];
		if (!thisConf.close_game_new) {
			thisScript.global.app_is_open_flag = false;
		}
		if (thisScript.global.email_switch_enabled === null) {
			thisScript.global.email_switch_enabled = thisConf.email_switch_enabled as boolean;
		}
		if (thisScript.global.email_switch_enabled) {
			if (thisScript.oper({
				id: 690,
				name: '用户中心',
				operator: [thisOperator[9], thisOperator[12]],
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 690,
				name: '用户中心',
				operator: [{ desc: thisOperator[15].desc }],
			})) {
				thisScript.regionClick([thisOperator[15].oper[1]]);
				return true;
			}
			while (thisScript.oper({
				id: 609,
				name: '选取最后一个账号',
				operator: [{ desc: thisOperator[19].desc }]
			})) {
				if (thisScript.oper({
					id: 690,
					name: '已沉底',
					operator: [thisOperator[29]],
				})) {
					return true;
				}
				const result = thisScript.findText('.+', 0, thisOperator[19].oper[2], '包含');
				const findName = thisScript.findTextByOcrResult(thisConf.next_email as string, result, '包含')
				if (findName.length) {
					const toClickRegion = [
						findName[0].points[0].x + 10,
						findName[0].points[0].y,
						findName[0].points[0].x + 50,
						findName[0].points[0].y + 65,
						1000,
					]
					thisScript.regionClick([toClickRegion]);
					thisScript.regionClick([thisOperator[15].oper[0]]);
					thisScript.global.email_switch_enabled = false;
				} else {
					if (thisScript.oper({
						id: 690,
						name: '已沉底',
						operator: [thisOperator[30]],
					})) {
						return true;
					}
					thisScript.regionSwipe(thisOperator[19].oper[0], thisOperator[19].oper[1], [1500, 1700], 1000);
				}
				return true;
			}
		}
		if (thisScript.oper({
			id: 609,
			name: '选择平台',
			operator: [{ desc: thisOperator[22].desc }]
		})) {
			if (thisConf.apple) {
				thisScript.regionClick([thisOperator[22].oper[1]]);
			} else {
				thisScript.regionClick([thisOperator[22].oper[0]]);
			}
			return true;
		}
		if (!thisScript.global.open_only_once) {
			if (thisScript.oper({
				id: 690,
				name: '是否为庭院(未展开菜单)',
				operator: [thisOperator[7]],
			})) {
				return true;
			}
			// 做延时检测 防止登陆后的弹窗
			let curCnt = 0;
			const maxCount = 6;
			while (thisScript.oper({
				id: 690,
				name: '是否为庭院',
				operator: [thisOperator[8], thisOperator[13], thisOperator[16]],
			})) {
				curCnt++;
				thisScript.keepScreen();
				if (curCnt >= maxCount) {
					thisScript.global.checked_yard_count = 0;
					if (thisConf.scheme_switch_enabled) {
						thisScript.rerun(thisConf.next_scheme);
						break;
					} else {
						thisScript.global.open_only_once = true;
						return true;
					}
				}
				sleep(500);
			}
			const { lastFuncDateTime, currentDate, runDate } = thisScript;
			// 有开屏代表从新启动游戏了
			if (thisScript.oper({
				name: '开屏的zen动画',
				operator: [thisOperator[23], thisOperator[24], thisOperator[25]],
			})) {
				thisScript.global.app_is_open_flag = false;
				return true;
			}
			if (thisScript.oper({
				name: '战斗界面重置计时',
				operator: [thisOperator[28]]
			})) {
				thisScript.global.timestamp = new Date().getTime();
			}
			// 10秒钟未执行过任何操作，杀应用重启
			if (thisScript.global.app_is_open_flag &&
				new Date().getTime() - Math.max(thisScript.global.timestamp, lastFuncDateTime?.getTime() || 0, currentDate?.getTime() || 0, runDate?.getTime() || 0) > 10000
			) {
				thisScript.stopRelatedApp();
				sleep(2000);
				thisScript.launchRelatedApp();
				thisScript.global.game_area = '';
				thisScript.global.app_is_open_flag = false;
				return true;
			}
			if (thisScript.oper({
				id: 690,
				name: '是否为登录页',
				operator: [{ desc: thisOperator[0].desc }],
			})) {
				if (!thisScript.global.game_area && thisConf.area != '') {
					const toDetectAreaBmp = thisScript.helperBridge.helper.GetBitmap(
						...thisOperator[0].oper[1].slice(0, 4)
					);
					console.time('ocr.detect.area');
					const resultArea = thisScript.getOcrDetector().loadImage(toDetectAreaBmp);
					console.timeEnd('ocr.detect.area');
					toDetectAreaBmp.recycle();
					if (Array.isArray(resultArea) && resultArea.length > 0 && resultArea[0].label) {
						console.log('识别成功，识别结果为:', resultArea);
						for (const resultItem of resultArea) {
							if (resultItem && resultItem.label) {
								console.log('当前区域为' + resultItem.label);
								if (!resultItem.label.includes(String(thisConf.area))) {
									return thisScript.oper({
										name: '切换区域',
										operator: [{
											oper: [thisOperator[4].oper[0]],
										}],
									});
								}
							}
						}
					} else {
						console.log('识别游戏区域失败，识别结果为:', resultArea);
						return false;
					}
				} else {
					thisScript.global.game_area = 'findMultiColor_皮肤广告关闭按钮';
				}
				return thisScript.oper({
					name: '点击开始游戏',
					operator: [{ oper: [thisOperator[0].oper[0]] }],
				});
			}
			if (thisConf.account_index && thisScript.oper({
				id: 690,
				name: '是否为同区多账号',
				operator: [{
					desc: thisOperator[18].desc,
				}],
			})) {
				const index = parseInt(thisConf.account_index as string, 10);
				return thisScript.oper({
					name: `点击第${thisConf.account_index}个同区账号`,
					operator: [{ oper: [thisOperator[18].oper[index], thisOperator[0].oper[0]] },
					],
				});
			}
			if (thisConf.name && thisScript.oper({
				id: 690,
				name: '识别昵称',
				operator: [{ desc: thisOperator[4].desc }],
			})) {
				const name = thisScript.findText(String(thisConf.name), 0, thisOperator[4].oper[1], '包含');
				if (name.length > 0) {
					let toClickRegion = [
						name[0].points[0].x + 5, name[0].points[0].y,
						name[0].points[0].x + 40, name[0].points[0].y + 20, 1000,
					]
					thisScript.regionClick([toClickRegion]);
					toClickRegion = [
						name[0].points[0].x + 10, name[0].points[0].y - 80,
						name[0].points[0].x + 40, name[0].points[0].y - 60, 1000,
					]
					thisScript.regionClick([toClickRegion]);
					thisScript.regionClick([thisOperator[0].oper[0]]);
					thisScript.global.game_area = 'findMultiColor_皮肤广告关闭按钮';
					return true;
				} // 识别不到必须不做动作以衔接师徒号流程
			}
			if (thisScript.oper({
				id: 690,
				name: '登陆后是否有弹窗',
				operator: [
					thisOperator[1], thisOperator[2], thisOperator[3], thisOperator[6],
					thisOperator[9], thisOperator[10], thisOperator[11], thisOperator[14],
					thisOperator[17], thisOperator[20], thisOperator[21], thisOperator[26],
					thisOperator[27], { desc: thisOperator[15].desc, oper: [thisOperator[15].oper[0]] }
				]
			})) {
				return true;
			}
			//	游戏区域状态不为空
			if (thisScript.global.game_area) {
				// 检测是否有皮肤广告
				const point = thisScript.findMultiColor('皮肤广告关闭按钮');
				if (point) {
					console.log('识别广告关闭按钮成功');
					const oper = [[point.x - 10, point.y - 10, point.x, point.y, 1000]];
					thisScript.regionClick(oper);
					return true;
				}
			}
			return false;
		} else {
			return false;
		}
	}
}