import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func609 implements IFuncOrigin {
	id = 609;
	name = '僵尸寮小号功能';
	desc = '用于切换小号进行每日寮任务';
	config = [{
		desc: '',
		config: [{
			name: 'account_count',
			desc: '账号数量',
			type: 'number',
			default: '10',
		}]
	}, {
		desc: '执行功能选择',
		config: [{
			name: 'juanGouYu',
			desc: '寮里捐100勾玉',
			type: 'switch',
			default: false,
		}, {
			name: 'liaoSanshi',
			desc: '寮三十(二十次组队和一次麒麟或阴界)',
			type: 'switch',
			default: false,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 用户中心
		desc: [1280, 720,
			[
				[right, 1225, 255, 0xd0c3ac],
				[right, 1229, 245, 0xc8bca4],
				[right, 1222, 245, 0xddcdb7],
				[right, 1227, 233, 0x816c56],
				[right, 1238, 240, 0x806c5a],
			]
		],
		oper: [
			[center, 1280, 720, 1208, 228, 1236, 254, 1000],
		]
	}, { // 1 切换账号
		desc: [1280, 720,
			[
				[left, 294, 332, 0x5e6266],
				[center, 523, 332, 0x5e6266],
				[right, 726, 335, 0x5e6266],
				[right, 962, 330, 0x606366],
			]
		],
		oper: [
			[center, 1280, 720, 947, 195, 1066, 224, 1000],
		]
	}, { // 2 选择账号界面_账号选择框未打开
		desc: [1280, 720,
			[
				[center, 540, 214, 0xe50113],
				[center, 575, 210, 0xe50517],
				[center, 626, 216, 0x3d3a3a],
				[center, 655, 218, 0x413e3e],
				[center, 705, 216, 0x3e3b3b],
				[center, 735, 223, 0x3c3939],
				[center, 451, 445, 0xfb4f4f],
				[center, 837, 445, 0xfb4f4f],
			]
		],
		oper: [
			[center, 1280, 720, 596, 415, 678, 469, 1000], // 登录
			[center, 1280, 720, 580, 297, 703, 364, 1000], // 打开账号选择框
		]
	}, { // 3 选择账号界面_账号选择框已打开
		desc: [1280, 720,
			[
				[center, 540, 214, 0xe50113],
				[center, 575, 210, 0xe50517],
				[center, 626, 216, 0x3d3a3a],
				[center, 655, 218, 0x413e3e],
				[center, 705, 216, 0x3e3b3b],
				[center, 735, 223, 0x3c3939],
				[center, 473, 463, 0xd8d8d8],
				[center, 473, 572, 0xd8d8d8],
			]
		],
		oper: [
			[center, 1280, 720, 825, 569, 854, 596, 1000], // 上拉起始点
			[center, 1280, 720, 849, 2, 873, 24, 1000], // 上拉结束点
			[center, 1280, 720, 780, 467, 825, 502, 1000], // 选择账号
		]
	}, { // 4 选择安卓或苹果平台
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
	}, { // 5 打开头像界面
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 35, 37, 84, 85, 1000], // 点击头像
		]
	}, { // 6 用户中心
		desc: [1280, 720,
			[
				[left, 123, 95, 0xdcac79],
				[right, 1181, 177, 0xbe6819],
				[right, 1182, 269, 0x593824],
				[right, 1183, 365, 0x593824],
				[right, 1182, 459, 0x593824],
				[left, 283, 634, 0xd3cbc7],
			]
		],
		oper: [
			[center, 1280, 720, 236, 478, 264, 492, 1000],
		]
	}, { // 7 进入阴阳寮
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 544, 627, 584, 653, 1000], // 点击阴阳寮
		]
	}, { // 8 阴阳寮界面
		desc: [1280, 720,
			[
				[center, 908, 667, 0xc76b41],
				[right, 985, 657, 0xead5b6],
				[right, 1090, 656, 0xfbfcfd],
				[right, 1171, 646, 0xc4b4a5],
				[right, 1212, 642, 0xfefcf8],
			]
		],
		oper: [
			[center, 1280, 720, 1175, 621, 1225, 669, 1000] // 点击寮信息
		]
	}, { // 9 寮信息界面
		desc: '寮信息界面',
		oper: [
			[center, 1280, 720, 269, 499, 293, 514, 1000], // 进入捐勾玉
		]
	}, { // 10 捐赠勾玉界面
		desc: [1280, 720,
			[
				[center, 399, 129, 0x6e4b38],
				[center, 888, 130, 0x644333],
				[center, 510, 388, 0x5c3a24],
				[center, 569, 541, 0xf3b25e],
				[center, 702, 559, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 788, 285, 826, 320, 200], // 加次数
			[center, 1280, 720, 788, 285, 826, 320, 200], // 加次数
			[center, 1280, 720, 788, 285, 826, 320, 200], // 加次数
			[center, 1280, 720, 788, 285, 826, 320, 200], // 加次数
			[center, 1280, 720, 565, 524, 710, 568, 1000], // 确认捐赠
		]
	}, { // 11 寮界面
		desc: [1280, 720,
			[
				[center, 908, 667, 0xc76b41],
				[right, 985, 657, 0xead5b6],
				[right, 1090, 656, 0xfbfcfd],
				[right, 1171, 646, 0xc4b4a5],
				[right, 1212, 642, 0xfefcf8],
			]
		],
		oper: [
			[center, 1280, 720, 45, 166, 186, 210, 1000], // 进入集体任务
		]
	}, { // 12 集体任务界面
		desc: [1280, 720,
			[
				[center, 503, 67, 0x835b46],
				[center, 710, 66, 0x593716],
				[center, 725, 65, 0x593716],
				[center, 750, 433, 0xd7982b],
				[center, 853, 433, 0xd99c2d],
			]
		],
		oper: [
			[center, 1280, 720, 1142, 100, 1186, 140, 1000], // 点击关闭
		]
	}, { // 13 已完成二十次组队
		desc: [1280, 720,
			[
				[right, 1015, 427, 0xeee9d7],
				[right, 1023, 428, 0xf4efdc],
				[right, 1015, 438, 0xf0ead8],
				[right, 1022, 438, 0xd3cdbc],
				[right, 1028, 429, 0xddd7c6],
				[right, 1037, 434, 0xdfdac8],
				[right, 1032, 423, 0x928a7c],
				[right, 1032, 440, 0xa0998a],
			]
		],
	}, { // 14 庭院组队
		desc: [1280, 720,
			[
				[center, 436, 631, 0xe3e0de],
				[center, 458, 628, 0xebe9e8],
				[center, 473, 629, 0xd6cdca],
				[center, 468, 656, 0x7a6c6f],
				[center, 439, 652, 0xc1b7b2],
			]
		],
		oper: [
			[center, 1280, 720, 437, 627, 471, 665, 1000],
		]
	}, { // 15 组队里_首次进入有大拇指
		desc: [1280, 720,
			[
				[left, 86, 635, 0xeda7a1],
				[left, 118, 693, 0x881a28],
				[left, 127, 682, 0x8e1c2a],
				[left, 137, 678, 0x8d1b29],
				[left, 48, 628, 0xfffee0],
			]
		],
		oper: [
			[center, 1280, 720, 36, 595, 117, 651, 1000],
		]
	}, { // 16 进入同心队
		desc: [1280, 720,
			[
				[left, 45, 596, 0xae3838],
				[left, 108, 599, 0xa0a0ae],
				[left, 88, 618, 0xf4d9c5],
				[left, 46, 628, 0xfdead5],
				[left, 86, 647, 0xffdbaf],
			]
		],
		oper: [
			[center, 1280, 720, 43, 589, 104, 642, 1000],
		]
	}, { // 17 同心队界面
		desc: [1280, 720,
			[
				[left, 83, 244, 0xf9e9bb],
				[left, 83, 287, 0xdabe8d],
				[left, 82, 387, 0xd4bbb8],
				[left, 112, 437, 0xc3a09c],
				[left, 112, 385, 0xd0b5b1],
				[right, 1129, 214, 0x6e342c],
			]
		],
		oper: [
			[center, 1280, 720, 509, 360, 761, 553, 1000], // ocr区域
			[center, 1280, 720, 1094, 622, 1177, 682, 1000], // 集结

		]
	}, { // 18 勾选队友一
		desc: [1280, 720,
			[
				[center, 423, 91, 0xa22927],
				[right, 886, 621, 0xa5312d],
				[center, 608, 263, 0x3b2b10],
				[center, 615, 262, 0x402f11],
				[center, 491, 345, 0x936e4a],
			]
		],
		oper: [
			[center, 1280, 720, 608, 258, 616, 267, 1000],
		]
	}, { // 19 勾选队友二
		desc: [1280, 720,
			[
				[center, 423, 91, 0xa22927],
				[right, 886, 621, 0xa5312d],
				[center, 491, 345, 0x936e4a],
				[right, 703, 263, 0x3c2c10],
				[right, 710, 263, 0x3e2e10],
			]
		],
		oper: [
			[center, 1280, 720, 702, 259, 711, 267, 1000],
		]
	}, { // 20 已勾选两名队友
		desc: [1280, 720,
			[
				[center, 610, 261, 0x4b5ee9],
				[center, 616, 267, 0x4555d0],
				[right, 704, 259, 0x485be3],
				[right, 710, 267, 0x4656d3],
				[center, 416, 91, 0xa22927],
				[right, 882, 619, 0xa83732],
			]
		],
		oper: [
			[center, 1280, 720, 518, 319, 757, 366, 1000],
		]
	}, { // 21 集结完毕
		desc: [1280, 720,
			[
				[left, 82, 237, 0xd3bab7],
				[left, 114, 276, 0xc3a09c],
				[left, 80, 381, 0xf3e2b6],
				[left, 112, 436, 0xe7c799],
				[left, 297, 301, 0x5f697f],
				[right, 860, 302, 0x616a7d],
			]
		],
		oper: [
			[center, 1280, 720, 970, 646, 1021, 690, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['609'];
		if (thisScript.global.account_state === 'login') {
			if (thisScript.global.account_num >= (thisconf.account_count as number)) {
				thisScript.stop();
				return true;
			}
			if (thisScript.oper({
				id: 609,
				name: '退出账号',
				operator: [thisOperator[0], thisOperator[1]]
			})) {
				return true
			}
			if (thisScript.oper({
				id: 609,
				name: '第一个号直接登录.否者打开账号选择框',
				operator: [{ desc: thisOperator[2].desc }]
			})) {
				if (thisScript.global.account_num == 0) {
					thisScript.regionClick([thisOperator[2].oper[0]]);
				} else {
					thisScript.regionClick([thisOperator[2].oper[1]]);
				}
				return true;
			}
			if (thisScript.oper({
				id: 609,
				name: '选取最后一个账号',
				operator: [{ desc: thisOperator[3].desc }]
			})) {
				thisScript.regionSwipe(thisOperator[3].oper[0], thisOperator[3].oper[1], [300, 500], 1000);
				thisScript.regionClick([thisOperator[3].oper[2]]);
				thisScript.regionClick([thisOperator[2].oper[0]]);
				return true;
			}
			if (thisScript.oper({
				id: 609,
				name: '选择平台',
				operator: [{ desc: thisOperator[4].desc }]
			})) {
				thisScript.regionClick([thisOperator[4].oper[thisScript.global.account_num % 2]]);
				thisScript.global.account_state = 'function';
				return true;
			}
		}
		if (thisScript.global.account_state === 'function') {
			if (!thisScript.global.function_Swith) {// 首次执行,读取按钮状况
				thisScript.global.function_Swith = {
					'juanGouYu': thisconf.juanGouYu as boolean,
					'liaoSanshi': thisconf.liaoSanshi as boolean,
					'liaoSanshi_tongXinDui_rally': false,
					'liaoSanshi_tongXinDui_fight': false,
					'liaoSanshi_tongXinDui_yuCun': false,
				};
			}
			if (thisScript.global.function_Swith.juanGouYu) {
				if (thisScript.oper({
					id: 609,
					name: '进入阴阳寮信息',
					operator: [thisOperator[7], thisOperator[8]]
				})) {
					return true;
				}
				let curCnt = 0;
				const maxCount = 3;
				while (thisScript.oper({
					id: 609,
					name: '点击捐赠勾玉',
					operator: [thisOperator[9]]
				})) {
					curCnt++;
					thisScript.keepScreen(false);
					if (curCnt >= maxCount) {
						thisScript.myToast('已达到捐赠上限');
						thisScript.global.function_Swith.juanGouYu = false;
						return true;
					}
				}
				if (thisScript.oper({
					id: 609,
					name: '捐赠',
					operator: [thisOperator[10]]
				})) {
					thisScript.global.function_Swith.juanGouYu = false;
					return true;
				}
			}
			if (thisScript.global.function_Swith.liaoSanshi) {
				if (thisScript.oper({
					id: 609,
					name: '进入集体任务界面',
					operator: [thisOperator[7], thisOperator[8], thisOperator[11]]
				})) {
					return true;
				}
				if (thisScript.oper({
					id: 609,
					name: '进入集体任务',
					operator: [{ desc: thisOperator[12].desc }]
				})) {
					// 如果已完成二十次同心队,则预存体力,否则开始同心队战斗(战斗完成后再跳转至预存体力)
					if (thisScript.oper({
						id: 609,
						name: '任务完成二十次',
						operator: [{ desc: thisOperator[13].desc }]
					})) {
						thisScript.global.function_Swith.liaoSanshi_tongXinDui_yuCun = true;
					} else {
						thisScript.global.function_Swith.liaoSanshi_tongXinDui_rally = true;
					}
					return true;
				}
				if (thisScript.global.function_Swith.liaoSanshi_tongXinDui_rally) {
					if (thisScript.oper({
						id: 609,
						name: '进入同心队',
						operator: [thisOperator[14], thisOperator[15], thisOperator[16]]
					})) {
						return true;
					}
					if (thisScript.oper({
						id: 609,
						name: '进入同心队',
						operator: [{ desc: thisOperator[17].desc }]
					})) {
						if (thisScript.getOcrDetector()) {
							const Str_ocr = thisScript.findNum(0, thisOperator[17].oper[0]);
							if (Array.isArray(Str_ocr) && Str_ocr.length > 0) {
								for (const item of Str_ocr) {
									const num = Number(item?.label);
									if (Number.isNaN(num) || num < 120) {
										console.log('队友体力小于120,跳过');
										thisScript.global.function_Swith.liaoSanshi_tongXinDui_rally = false;
										thisScript.global.function_Swith.liaoSanshi_tongXinDui_yuCun = true;
										return true;
									}
								}
								console.log('队友体力大于120,开始战斗');
								thisScript.regionClick([thisOperator[17].oper[1]]);
								return true;
							} else {
								console.log('OCR 没识别到字符,跳过');
								thisScript.global.function_Swith.liaoSanshi_tongXinDui_rally = false;
								thisScript.global.function_Swith.liaoSanshi_tongXinDui_yuCun = true;
								return true;
							}
						} else {
							thisScript.myToast('未安装OCR，无法进行ocr识别');
							thisScript.doPush(thisScript, { text: '未安装OCR，无法进行ocr识别' });
							thisScript.stop();
							sleep(3000);
						}
						return true;
					}
					if (thisScript.oper({
						id: 609,
						name: '进入组队',
						operator: [thisOperator[18], thisOperator[19], thisOperator[20]]
					})) {
						return true;
					}
					if (thisScript.oper({
						id: 609,
						name: '进入组队',
						operator: [thisOperator[21]]
					})) {
						thisScript.global.function_Swith.liaoSanshi_tongXinDui_rally = false;
						thisScript.global.function_Swith.liaoSanshi_tongXinDui_fight = true;
						return true;
					}
				}
				// if (thisScript.global.function_Swith.liaoSanshi_tongXinDui_fight) {
				// }
			}
		}
		if (thisScript.global.account_state === 'logout') {
			if (thisScript.oper({
				id: 609,
				name: '打开头像菜单',
				operator: [thisOperator[5], thisOperator[6]]
			})) {
				thisScript.global.account_num += 1;
				thisScript.global.function_Swith = null;
				thisScript.global.account_state = 'login';
				return true;
			}
		}
	}
}