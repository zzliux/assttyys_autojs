import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func500 implements IFuncOrigin {
	id = 500;
	name = '进入寮活动';
	desc = '进入已开启寮活动，如道馆、宴会、狩猎战、首领退治';
	config = [{
		desc: '识别到后的操作(切换方案)',
		config: [
			{
				name: 'a_ctivity_gateOfHades',
				desc: '阴门',
				type: 'switch',
				default: false,
				value: false,
			}, {
				name: 'a_ctivity_gateOfHades_select',
				desc: '阴门方案',
				type: 'scheme',
				default: '阴门挑战',
			}, {
				name: 'a_ctivity_dojo',
				desc: '道馆',
				type: 'switch',
				default: false,
				value: false,
			}, {
				name: 'a_ctivity_dojo_select',
				desc: '道馆方案',
				type: 'scheme',
				default: '道馆',
			}, {
				name: 'a_ctivity_hunt',
				desc: '狩猎战',
				type: 'switch',
				default: false,
				value: false,
			}, {
				name: 'a_ctivity_hunt_select',
				desc: '狩猎战方案',
				type: 'scheme',
				default: '狩猎战',
			}, {
				name: 'a_ctivity_narrow',
				desc: '狭间',
				type: 'switch',
				default: false,
				value: false,
			}, {
				name: 'a_ctivity_narrow_select',
				desc: '狭间方案',
				type: 'scheme',
				default: '狭间暗域',
			}, {
				name: 'a_ctivity_banquet',
				desc: '宴会',
				type: 'switch',
				default: false,
				value: false,
			}, {
				name: 'a_ctivity_banquet_select',
				desc: '宴会方案',
				type: 'scheme',
				default: '宴会',
			}, {
				name: 'a_ctivity_huntBoss',
				desc: '首领退治',
				type: 'switch',
				default: false,
				value: false,
			}, {
				name: 'a_ctivity_huntBoss_select',
				desc: '退治方案',
				type: 'scheme',
				default: '首领退治',
			}]
	}, {
		desc: '活动未开(切换方案)',
		config: [
			{
				name: 'a_ctivity_off',
				desc: '活动未开(切换方案)',
				type: 'switch',
				default: false,
				value: false,
			}, {
				name: 'a_ctivity_off_select',
				desc: '返回庭院',
				type: 'scheme',
				default: '返回庭院',
			}
		]
	}];
	operator: IFuncOperatorOrigin[] = [
		{ // 0 检查_首领退治是否已开启
			desc: [1280, 720,
				[
					[left, 42, 31, 0xf4e4a4],
					[right, 760, 255, 0xe2dfda],
					[right, 820, 276, 0xdebce4],
					[right, 702, 265, 0xe0bfe5],
					[right, 755, 285, 0x4c4943],
					[right, 857, 237, 0x2b1d15],
					[right, 836, 240, 0x30221b],
					[right, 767, 246, 0xb03a32],
				]
			],
			oper: [
				[center, 1280, 720, 656, 177, 855, 322, 1200]	// 打开首领退治
			]

		}, { // 1 检查_宴会是否已开启
			desc: [1280, 720,
				[
					[right, 1099, 212, 0x4a3627],
					[right, 935, 231, 0x96ac94],
					[right, 996, 280, 0xb23736],
					[right, 1035, 293, 0xfda7a7],
					[right, 1071, 248, 0x8e2020],
				]
			],
			oper: [
				[center, 1280, 720, 896, 172, 1103, 321, 1200]	// 打开宴会
			]
		}, { // 2 检查_是否为道馆地图页面
			desc: [
				1280, 720,
				[
					[left, 38, 53, 0xeef4fb],
					[left, 247, 53, 0x593716],
					[left, 91, 614, 0xc1b8aa],
					[left, 255, 60, 0xd39c37],
					[left, 118, 66, 0xf8f3e0],
					[left, 175, 54, 0xf8f3e0],
					[left, 205, 651, 0x573b28],
				]
			]
			/** oper: [ // 识别到还是别点击了
				[left, 1280, 720, 17, 140, 1244, 583, -1],  // 道馆出现方位
			]*/
		}, { // 3 检查_狩猎战是否开启
			desc: [1280, 720,
				[
					[left, 244, 469, 0xbda88d],
					[center, 346, 483, 0xbeab91],
					[center, 360, 435, 0xe80000],
					[left, 260, 491, 0xffbda6],
					[left, 232, 511, 0xca808b],
					[left, 267, 581, 0xb3a085],
				]
			],
			oper: [
				[left, 1280, 720, 155, 417, 365, 574, 1000]
			]
		}, { // 4 检测_狩猎战鬼王集结点
			desc: [
				1280, 720,
				[
					[center, 590, 40, 0x5c6887],
					[right, 1155, 622, 0x2c160e],
					[center, 720, 24, 0xebd798],
					[center, 761, 20, 0xe4ce8a],
					[left, 68, 61, 0xc5cce1],
				]
			],
			oper: [
				[right, 1280, 720, 1068, 602, 1268, 680, 1200]  // 点击鬼王集结点，固定地图右下角
			]
		}, { // 5 检测_是否为狩猎战挑战奉献榜场景_待开始
			desc: [1280, 720,
				[
					[right, 1104, 568, 0xd7bfa5],
					[right, 1175, 600, 0xdfc29d],
					[right, 1122, 697, 0x5b0d07],
					[right, 1086, 615, 0x272420],
					[right, 1068, 593, 0xdec7aa]
				]
			]
		}, { //	6 检测_是否为道馆突破选择道馆页面
			desc: [
				1280, 720,
				[
					[left, 141, 77, 0xd19c6d],
					[left, 33, 52, 0xeff5fb],
					[left, 245, 50, 0x583716],
					[left, 203, 650, 0x5b3e2b],
					[left, 89, 618, 0xc1b9a9],
					[right, 1113, 650, 0xdfdbcf],
					[right, 1103, 62, 0xddd3c0],
					[right, 1251, 125, 0xc4b4a0],
				]
			],
			oper: [
				[left, 1280, 720, 27, 28, 56, 65, 1200]	//	跑路
			]
		}, { //	7 检测_是否为首领退治集结页
			desc:
				[
					1280, 720,
					[
						[left, 182, 37, 0xd5c4a3],
						[left, 108, 26, 0xd7c5a2],
						[left, 47, 28, 0xd7c5a2],
						[left, 232, 139, 0x583716],
						[left, 76, 550, 0x322219],
						[right, 1039, 648, 0xd3c3bd],
						[center, 872, 606, 0x493a38],
						[center, 727, 611, 0xdfc7ac],
					]
				]
		}, { // 8 检测_阴门
			desc:
				[
					1280, 720,
					[
						[right, 1106, 632, 0x180a28],
						[right, 1126, 625, 0x180a28],
						[right, 1161, 618, 0x84a5bd],
						[right, 1262, 650, 0x698bad],
						[left, 72, 62, 0xb9c2da],
						[center, 713, 25, 0xe3d698],
					]
				]
		}, { //	9 检测_狭间暗域是否已开启
			desc:
				[1280, 720,
					[
						[right, 847, 537, 0x32231c],
						[right, 870, 525, 0x271b15],
						[right, 760, 555, 0x473049],
						[right, 741, 553, 0x31282c],
						[right, 684, 501, 0xc7b396],
						[right, 859, 613, 0xb4a085],
						[right, 715, 556, 0xbd727b],
					]
				],
			oper: [
				[center, 1280, 720, 702, 495, 848, 617, 1200]	//	点击狭间暗域
			]
		}, { //	10 检测_狭间页面
			desc:
				[
					1280, 720,
					[
						[left, 269, 206, 0xe4d0ad],
						[left, 297, 181, 0xe4d8b3],
						[left, 182, 227, 0xccaadd],
						[left, 251, 364, 0xc9bb97],
						[center, 431, 155, 0xe1d6b3],
						[center, 716, 176, 0xe8e0bf],
						[right, 1090, 155, 0xe7dcaf],
					]
				]
		}, { // 11 寮神社界面返回
			desc: '寮神社界面',
			oper: [
				[left, 1280, 720, 25, 10, 75, 54, 1000],     //  寮活动 返回区域
			]
		}, {  // 12 检查_道馆是否已开启
			desc: [1280, 720,
				[
					[left, 42, 31, 0xf4e4a4],
					[right, 1098, 646, 0x2d170b],
					[center, 605, 332, 0xb29e83],
					[center, 532, 268, 0xd6d0bc],
					[center, 508, 292, 0xa87d41],
					[center, 610, 227, 0x251b14],
				]
			],
			oper: [
				[center, 1280, 720, 411, 192, 609, 339, 1200]	// 打开道馆
			]
		}, { // 13 检测_是否为道馆集结界面
			desc:
				[1280, 720,
					[
						[left, 44, 25, 0xd6c4a1],
						[center, 552, 629, 0xebe8e5],
						[right, 706, 649, 0x573a28],
						[right, 929, 621, 0xcf4a55],
						[right, 1014, 607, 0x473a39],
						[left, 163, 109, 0xd2c7b9],
					]
				],
		}, { // 14 已适配66 检测_是否为道馆地图页面
			desc: [
				1280, 720,
				[
					[left, 91, 614, 0xc1b8aa],
					[left, 205, 651, 0x573b28],
					[left, 45, 35, 0xf7e9aa],
				]
			],
			oper: [
				[left, 1280, 720, 17, 140, 1244, 583, -1],  // 道馆出现方位
			]
		}, { // 15 道馆今日挑战成功无次数
			desc: [
				1280, 720,
				[
					[center, 518, 653, 0xddd9c8],
					[center, 533, 650, 0xdedac9],
					[center, 558, 649, 0xe8e4d2],
					[center, 577, 653, 0xc1beaf],
					[center, 599, 650, 0xbdbbad],
					[center, 622, 648, 0xe2decd],
					[center, 644, 649, 0x9d9c91],
					[center, 666, 649, 0xbab8aa],
					[center, 690, 648, 0xb8b6a7],
				]
			]
		}, { //	16 检测_是否为道馆突破选择道馆页面===次数还有一次
			desc: [
				1280, 720,
				[
					[left, 141, 77, 0xc8a98c],
					[left, 40, 37, 0xfcf1b9],
					[left, 321, 45, 0xc6c39c],
					[left, 203, 650, 0x5b3e2b],
					[left, 89, 618, 0xc1b9a9],
					[right, 1113, 650, 0xdfdbcf],
					[right, 1103, 62, 0xddd3c0],
					[right, 1251, 125, 0xc4b4a0],
					[right, 669, 643, 0xf98f01],
					[right, 669, 648, 0xeb8803],
					[right, 669, 651, 0xef8a02],
					[right, 687, 648, 0xf08a01],
				]
			],
			oper: [
				[left, 1280, 720, 27, 28, 56, 65, 1200]	//	跑路
			]
		}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['500'];
		if (!thisScript.global.liao_activity_Switch) {// 首次执行,读取按钮状况
			thisScript.global.liao_activity_Switch = {
				'a_ctivity_gateOfHades': thisconf.a_ctivity_gateOfHades as boolean,
				'a_ctivity_dojo': thisconf.a_ctivity_dojo as boolean,
				'a_ctivity_hunt': thisconf.a_ctivity_hunt as boolean,
				'a_ctivity_narrow': thisconf.a_ctivity_narrow as boolean,
				'a_ctivity_banquet': thisconf.a_ctivity_banquet as boolean,
				'a_ctivity_huntBoss': thisconf.a_ctivity_huntBoss as boolean,
			}
		}
		// 判断用户是否有选择选项,全部选项为假则退出任务
		const allFalse = Object.values(thisScript.global.liao_activity_Switch).every(value => value === false);
		if (allFalse) {
			thisScript.myToast('未选择任务或任务执行完毕!');
			const next_scheme = '返回庭院';// 选择为空,返回庭院
			thisScript.rerun(next_scheme, {})
		}
		// 首次进入寮神社界面返回一次重新进，防止还有原来的缓存在里面
		if (thisScript.global.liao_activity_page_flag == 0 && thisScript.oper({
			id: 506,
			name: '寮神社界面',
			operator: [thisOperator[11]]
		})) {
			thisScript.global.liao_activity_page_flag += 2;
			thisScript.myToast('首次进入寮神社界面，退出重进');
			return true;
		}
		/**  狩猎战、阴门活动判断与操作
		if (thisconf.a_ctivity_gateOfHades || thisconf.a_ctivity_hunt) {// 有些寮不是周末开饭,所以不加入这里
			const currentHour = new Date().getHours();
			if (currentHour >= 19 && currentHour < 21) {// 判断是否在19-21点
				const nowDateDay = new Date().getDay();
				if (nowDateDay === 0 || nowDateDay === 5 || nowDateDay === 6) {// 判断星期几
					thisconf.a_ctivity_hunt = false;
					if (thisScript.global.liao_activity_Swith && Object.prototype.hasOwnProperty.call(thisScript.global.liao_activity_Swith, 'a_ctivity_hunt')) {
						thisScript.global.liao_activity_Swith['a_ctivity_hunt'] = false;
					}
					if (thisScript.oper({
						name: '检测_是否为阴门页面、',
						operator: [thisOperator[8]]
					})) {
						sleep(2000);
						thisScript.global.liao_activity_page_flag = 0;
						const next_scheme = thisconf.a_ctivity_gateOfHades_select;
						thisScript.rerun(next_scheme, {});
					}
				} else {
					thisconf.a_ctivity_narrow = false;
					thisconf.a_ctivity_gateOfHades = false;
					const targetKeys = ['a_ctivity_narrow', 'a_ctivity_gateOfHades'];
					targetKeys.forEach(key => {
						if (thisScript.global.liao_activity_Swith && Object.prototype.hasOwnProperty.call(thisScript.global.liao_activity_Swith, key)) {
							thisScript.global.liao_activity_Swith[key] = false;
						}
					});
					if (thisconf.a_ctivity_hunt && thisScript.oper({
						name: '检测_狩猎战',
						operator: [thisOperator[3], thisOperator[4]],
					})) {
						return true;
					}
					if (thisconf.a_ctivity_hunt && thisScript.oper({
						name: '检测_是否在狩猎战界面',
						operator: [thisOperator[5]],
					})) {
						sleep(2000);
						thisScript.global.liao_activity_page_flag = 0;
						const next_scheme = thisconf.a_ctivity_hunt_select;
						thisScript.rerun(next_scheme, {});
					}
				}
			} else {
				console.log('阴门/狩猎战 不在时间段内');
				thisconf.a_ctivity_hunt = false;
				thisconf.a_ctivity_gateOfHades = false;
				const targetKeys = ['a_ctivity_hunt', 'a_ctivity_gateOfHades'];
				targetKeys.forEach(key => {
					if (thisScript.global.liao_activity_Swith && Object.prototype.hasOwnProperty.call(thisScript.global.liao_activity_Swith, key)) {
						thisScript.global.liao_activity_Swith[key] = false;
					}
				});
			}
		}*/
		if (thisconf.a_ctivity_gateOfHades || thisconf.a_ctivity_hunt) {// 有些寮不是周末开饭,所以不加入这里
			const currentHour = new Date().getHours();
			const nowDateDay = new Date().getDay();
			let exitLHD = false
			if (nowDateDay === 0 || nowDateDay === 5 || nowDateDay === 6) {// 判断星期几
				if (currentHour >= 17 && currentHour < 23) {// 判断是否在17-23点
					thisconf.a_ctivity_hunt = false;
					if (thisScript.global.liao_activity_Switch && Object.prototype.hasOwnProperty.call(thisScript.global.liao_activity_Switch, 'a_ctivity_hunt')) {
						thisScript.global.liao_activity_Switch['a_ctivity_hunt'] = false;
					}
					if (thisScript.oper({
						name: '检测_是否为阴门页面',
						operator: [thisOperator[8]]
					})) {
						sleep(2000);
						thisScript.global.liao_activity_page_flag = 0;
						const next_scheme = thisconf.a_ctivity_gateOfHades_select;
						thisScript.rerun(next_scheme, {});
					}
				} else {
					exitLHD = true
				}
			} else {
				if (currentHour >= 6 && currentHour < 23) {// 判断是否在6-23点
					thisconf.a_ctivity_narrow = false;
					thisconf.a_ctivity_gateOfHades = false;
					const targetKeys = ['a_ctivity_narrow', 'a_ctivity_gateOfHades'];
					targetKeys.forEach(key => {
						if (thisScript.global.liao_activity_Switch && Object.prototype.hasOwnProperty.call(thisScript.global.liao_activity_Switch, key)) {
							thisScript.global.liao_activity_Switch[key] = false;
						}
					});
					if (thisconf.a_ctivity_hunt && thisScript.oper({
						name: '检测_狩猎战',
						operator: [thisOperator[3], thisOperator[4]],
					})) {
						return true;
					}
					if (thisconf.a_ctivity_hunt && thisScript.oper({
						name: '检测_是否在狩猎战界面',
						operator: [thisOperator[5]],
					})) {
						sleep(2000);
						thisScript.global.liao_activity_page_flag = 0;
						const next_scheme = thisconf.a_ctivity_hunt_select;
						thisScript.rerun(next_scheme, {});
					}
				} else {
					exitLHD = true
				}
			}
			if (exitLHD) {
				console.log('阴门/狩猎战 不在时间段内');
				thisconf.a_ctivity_hunt = false;
				thisconf.a_ctivity_gateOfHades = false;
				const targetKeys = ['a_ctivity_hunt', 'a_ctivity_gateOfHades'];
				targetKeys.forEach(key => {
					if (thisScript.global.liao_activity_Switch && Object.prototype.hasOwnProperty.call(thisScript.global.liao_activity_Switch, key)) {
						thisScript.global.liao_activity_Switch[key] = false;
					}
				});

			}
		}
		// 狭间活动判断
		if (thisconf.a_ctivity_narrow) {
			const nowDay = new Date().getDay();
			if (nowDay === 0 || nowDay === 5 || nowDay === 6) {// 判断星期几
				if (thisScript.oper({
					name: '检测_狭间暗域是否已开启',
					operator: [thisOperator[9]]
				})) {
					return true;
				}
				if (thisScript.oper({
					name: '检测_是否为狭间暗域选择页',
					operator: [thisOperator[10]]
				})) {
					sleep(2000);
					thisScript.global.liao_activity_page_flag = 0;
					const next_scheme = thisconf.a_ctivity_narrow_select;
					thisScript.rerun(next_scheme, {});
				}
			} else {
				console.log('不在狭间时间段');
				thisconf.a_ctivity_narrow = false;
				if (thisScript.global.liao_activity_Switch && Object.prototype.hasOwnProperty.call(thisScript.global.liao_activity_Switch, 'a_ctivity_narrow')) {
					thisScript.global.liao_activity_Switch['a_ctivity_narrow'] = false;
				}
			}
		}
		// 宴会活动
		if (thisconf.a_ctivity_banquet && thisScript.oper({
			name: '检查_宴会是否已开启',
			operator: [{
				desc: thisOperator[1].desc
			}]
		})) {
			thisScript.oper({
				name: '检查_宴会是否已开启',
				operator: [{
					oper: thisOperator[1].oper
				}]
			});
			sleep(2000);
			thisScript.global.liao_activity_page_flag = 0;
			const next_scheme = thisconf.a_ctivity_banquet_select;
			thisScript.rerun(next_scheme, {});
		}
		// 周六首领退治活动
		if (thisconf.a_ctivity_huntBoss) {
			const currenthuntBossHour = new Date().getHours();
			const nowDayhuntBoss = new Date().getDay();
			if (currenthuntBossHour >= 10 && currenthuntBossHour < 23 && nowDayhuntBoss === 6) {// 判断是否在周六10-23点
				if (thisScript.oper({
					name: '检测_首领退治是否已开启',
					operator: [thisOperator[0],]
				})) {
					return true;
				}
				if (thisScript.oper({
					name: '检测_是否为首领退治页面',
					operator: [thisOperator[7]]
				})) {
					sleep(2000);
					thisScript.global.liao_activity_page_flag = 0;
					const next_scheme = thisconf.a_ctivity_huntBoss_select;
					thisScript.rerun(next_scheme, {});
					return true;
				}
			} else {
				console.log('不在退治时间段');
				thisconf.a_ctivity_huntBoss = false;
				if (thisScript.global.liao_activity_Switch && Object.prototype.hasOwnProperty.call(thisScript.global.liao_activity_Switch, 'a_ctivity_huntBoss')) {
					thisScript.global.liao_activity_Switch['a_ctivity_huntBoss'] = false;
				}
			}
		}
		// 道馆活动
		if (thisconf.a_ctivity_dojo) {
			if (thisconf.a_ctivity_off) {
				if (thisScript.oper({
					id: 500,
					name: '检测_道馆次数剩余1次还没开活动', // 道馆还没开
					operator: [thisOperator[16]] // 15，道馆挑战成功，无次数
				})) {
					const next_scheme = thisconf.a_ctivity_off_select;
					thisScript.rerun(next_scheme);
				}
			}
			if (thisScript.oper({
				id: 500,
				name: '检测_寮界面道馆是否已开启',
				operator: [thisOperator[12]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 500,
				name: '检测_点击道馆后是否选择寮界面', // 道馆还没开
				operator: [thisOperator[6], thisOperator[15]] // 15，道馆挑战成功，无次数
			})) {
				const next_scheme = '返回庭院';
				thisScript.rerun(next_scheme);
			}
			if (thisScript.oper({
				id: 500,
				name: '检测_道馆地图场景',
				operator: [{
					desc: thisOperator[14].desc
				}]
			})) {
				const toDetectAreaBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[14].oper[0].slice(0, 4))
				console.time('ocr.detect.area');
				const resultArea = thisScript.getOcrDetector().loadImage(toDetectAreaBmp);
				console.timeEnd('ocr.detect.area');
				toDetectAreaBmp.recycle();

				if (Array.isArray(resultArea) && resultArea.length > 0 && resultArea[0].label) {
					console.log('识别成功，识别结果为:', resultArea);
					const resultAreaTarget = resultArea[0];

					if (resultAreaTarget && resultAreaTarget.label) {
						console.log('当前区域为' + resultAreaTarget.label, '坐标为' + resultAreaTarget.points[0].x, resultAreaTarget.points[0].y, resultAreaTarget.points[3].x, resultAreaTarget.points[3].y);

						const p = {
							x: ((resultAreaTarget.points[0].x + resultAreaTarget.points[1].x) / 2),
							y: ((resultAreaTarget.points[0].y + resultAreaTarget.points[3].y + 150) / 2),
						}

						const lx = p.x - 25;
						const ly = p.y - 8;
						const rx = p.x + 25;
						const ry = p.y + 8;

						const toClick = [lx, ly, rx, ry, 1200];

						console.log('识别成功, 点击坐标为', toClick);

						thisScript.regionClick([toClick]);
						return true;
					}
				}
			}
			if (thisScript.oper({
				id: 500,
				name: '检测_是否道馆集结页',
				operator: [{
					desc: thisOperator[13].desc
				}]
			})) {
				thisScript.global.liao_activity_page_flag = 0;
				const next_scheme = thisconf.a_ctivity_dojo_select;
				if (thisScript.runtimeParams && thisScript.runtimeParams.liao_activity_state) {
					thisScript.rerun(next_scheme, { ...thisScript.runtimeParams, });// 存在寮活动对象则传递参数
				} else {
					thisScript.rerun(next_scheme);
				}
				return true;
			}
			/** if (thisScript.oper({
				id: 500,
				name: '检测_道馆', // 道馆地图界面,集结中
				operator: [thisOperator[2]]// thisOperator[2]是用来全局找位置的条件
			})) {
				const point = thisScript.findMultiColor('道馆集结')
				if (point) {
					const oper = [ // 175,414--176,273--318,405
						point.x, // 175
						point.y - 150, // 264
						point.x + 150, // 325
						point.y - 10, // 404
						1000
					];
					thisScript.regionClick([oper]);
				}
				thisScript.global.redFlag = true;
				return true;
			} **/
		}
		//	做延时识别
		if (thisScript.global.checked_yard_count > 5) {
			thisScript.global.checked_yard_count = 0;
			thisScript.global.liao_activity_page_flag += 1;
			return false;
		} else {
			sleep(500);
			if (!thisScript.global.checked_yard_count) {
				thisScript.global.checked_yard_count = 1;
			} else {
				thisScript.global.checked_yard_count += 1;
			}
			return true;
		}
	}
}