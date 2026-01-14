import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func506 implements IFuncOrigin {
	id = 506;
	name = '进入寮活动';
	desc = '进入已开启寮活动，如道馆、宴会、狩猎战、首领退治';
	config = [{
		desc: '结束后切换方案',
		config: [
			// 	{
			// 	name: 'auto_switch_enabled',
			// 	desc: '是否启用自动模式(1-4道馆狩猎，5、7狭宴阴，6狭首阴',
			// 	type: 'switch',
			// 	default: false,
			// 	value: false,
			// },
			{
				name: 'gateOfHades_switch',
				desc: '是否进入阴门挑战(用于周末阴门)',
				type: 'switch',
				default: false,
				value: false,
			},
			{
				name: 'huntBoss_switch',
				desc: '是否进入首领退治(用于会长副会长问题)',
				type: 'switch',
				default: true,
				value: true,
			}]
	}];
	operator: IFuncOperatorOrigin[] = [
		{  // 0 已适配66 检查_道馆是否已开启
			desc: [1280, 720,
				[
					[left, 42, 31, 0xf4e4a4],
					[center, 588, 224, 0x3b291d],
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
		}, { // 1 已适配66 检查_首领退治是否已开启
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
		}, { // 2 检查_宴会是否已开启
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
		}, { // 3 已适配66 检查_是否为道馆地图页面
			desc: [
				1280, 720,
				[
					[left, 91, 614, 0xc1b8aa],
					[left, 205, 651, 0x573b28],
					[left, 45, 35, 0xf7e9aa],
					[left, 276, 633, 0xe7e6e3],
				]
			],
			oper: [
				[left, 1280, 720, 17, 140, 1244, 583, -1],  // 道馆出现方位
			]
		}, { // 4 检查_狩猎战是否开启
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
		}, { // 5 检测_鬼王集结点
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
		}, { // 6 检测_是否为道馆页
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
		}, { // 7 检测_是否为挑战奉献榜场景_待开始
			desc: [1280, 720,
				[
					[right, 1104, 568, 0xd7bfa5],
					[right, 1175, 600, 0xdfc29d],
					[right, 1122, 697, 0x5b0d07],
					[right, 1086, 615, 0x272420],
					[right, 1068, 593, 0xdec7aa]
				]
			]
		}, { //	8 检测_是否为道馆突破选择道馆页面
			desc: [
				1280, 720,
				[
					[left, 141, 77, 0xcb945a],
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
		}, { //	9 检测_是否为首领退治集结页
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
		}, { // 10 检测_阴门
			desc:
				[
					1280, 720,
					[
						[right, 1106, 632, 0x180a28],
						[right, 1126, 625, 0x180a28],
						[right, 1161, 618, 0x84a5bd],
						[right, 1262, 650, 0x698bad],
						[center, 713, 25, 0xe3d698],
						[left, 47, 35, 0xf5e2a3],
					]
				]
		}, { //	11 检测_狭间暗域是否已开启
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
		}, { //	12 检测_狭间页面
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
		}, { // 13 寮神社界面返回
			desc: '寮神社界面',
			oper: [
				[left, 1280, 720, 25, 10, 75, 54, 1000],     //  寮活动 返回区域
			]
		}, { // 14 检查_阴门是否开启
			desc: [1280, 720,
				[
					[left, 171, 549, 0xb5a186],
					[left, 242, 414, 0xc9b18f],
					[center, 346, 555, 0xb29e83],
					[left, 241, 510, 0xe0c4e5],
					[left, 254, 477, 0xb8583c],
					[left, 282, 516, 0xe0c5e6],
					[left, 262, 544, 0xe788c6],
					[left, 232, 475, 0x841212],
				]
			],
			oper: [
				[left, 1280, 720, 155, 417, 365, 574, 1000]     //  寮活动 阴门
			]
		}, { // 15 检测_2025年版本狩猎战
			desc: [
				1280, 720,
				[
					[right, 1060, 650, 0xfff3f3],
					[center, 885, 661, 0xfff4f5],
					[left, 259, 35, 0x2a2937],
					[left, 175, 589, 0x684b2c],
					[left, 33, 592, 0x8a6137],
				]
			],
		}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['506'];

		const _liao_activity_state: any = thisScript.runtimeParams ? thisScript.runtimeParams.liao_activity_state : undefined;
		if (_liao_activity_state) {
			let _finishFlag = true;

			//	若有一项未完成, 继续循环，否则返回庭院
			Object.keys(_liao_activity_state).forEach(key => {
				if (!_liao_activity_state[key]) {
					_finishFlag = false;
				}
			})
			console.log('寮活动当前状况为: ', _liao_activity_state, '返回庭院flag状态为: ', _finishFlag);
			if (_finishFlag) {
				const next_scheme = '返回庭院';
				thisScript.rerun(next_scheme);
			}
		} else {

			// if (thisConf.auto_switch_enabled) {
			// 	let nowDateDay = new Date().getDay();
			// 	switch (nowDateDay) {
			// 		case 1:
			// 		case 2:
			// 		case 3:
			// 		case 4: {
			// 			_liao_activity_state = {
			// 				dojo: false,
			// 				hunt: false,
			// 			}
			// 			break;
			// 		};
			// 		case 6: {
			// 			_liao_activity_state = {
			// 				huntBoss: false,
			// 				narrow: false,
			// 				gateOfHades: false,
			// 			}
			// 			break;
			// 		}
			// 		case 5:
			// 		case 0: {	//	TODO: 无奈之举，有没有大佬把这三个给做了
			// 			_liao_activity_state = {
			// 				banquet: false,
			// 				narrow: false,
			// 				gateOfHades: false,
			// 			}
			// 			break;
			// 		}
			// 	}
			// }
		}

		// 首次进入寮神社界面返回一次重新进，防止还有原来的缓存在里面
		if (thisScript.global.liao_activity_page_flag == 0 && thisScript.oper({
			id: 506,
			name: '寮神社界面',
			operator: [thisOperator[13]]
		})) {
			thisScript.global.liao_activity_page_flag += 2;
			thisScript.myToast('首次进入寮神社界面，退出重进');
			return true;
		}

		if (thisScript.oper({
			id: 506,
			name: '检测_道馆是否已开启_a',
			operator: [{
				desc: thisOperator[0].desc,
			}]
		})) {
			if (_liao_activity_state && _liao_activity_state.dojo) {
				return true;
			} else {
				return thisScript.oper({
					id: 506,
					name: '操作_道馆是否已开启_b',
					operator: [{
						oper: thisOperator[0].oper
					}]
				});
			}
		}

		if (thisScript.oper({
			id: 506,
			name: '检测_是否为道馆突破选择道馆页面',
			operator: [{
				desc: thisOperator[8].desc
			}]
		})) {
			const next_scheme = '返回庭院';
			thisScript.rerun(next_scheme);
		}

		if (thisScript.oper({
			id: 506,
			name: '检测_道馆地图场景',
			operator: [{
				desc: thisOperator[3].desc
			}]
		})) {
			const toDetectAreaBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[3].oper[0].slice(0, 4))
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
			name: '检测_道馆',
			operator: [{
				desc: thisOperator[6].desc
			}]
		})) {
			thisScript.global.liao_activity_page_flag = 0;
			const next_scheme = '道馆';
			thisScript.rerun(next_scheme, {
				liao_activity_state: _liao_activity_state
			});
			return true;
		}

		// 兼容没设置该按钮的逻辑 undefined 当true处理
		if (thisConf && thisConf.huntBoss_switch !== false) {
			if (thisScript.oper({
				name: '检测_首领退治是否已开启',
				operator: [{
					desc: thisOperator[1].desc
				}]
			})) {
				if (_liao_activity_state && _liao_activity_state.huntBoss) {
					return true;
				} else {
					return thisScript.oper({
						name: '检测_首领退治是否已开启',
						operator: [{
							oper: thisOperator[1].oper
						}]
					});
				}
			}
		}

		if (thisScript.oper({
			name: '检测_是否为首领退治页面',
			operator: [thisOperator[9]]
		})) {
			sleep(2000);
			thisScript.global.liao_activity_page_flag = 0;
			const next_scheme = '首领退治';
			thisScript.rerun(next_scheme, {
				liao_activity_state: _liao_activity_state
			});
			return true;
		}

		if (thisScript.oper({
			name: '检测_狭间暗域是否已开启',
			operator: [{
				desc: thisOperator[11].desc
			}]
		})) {
			if (_liao_activity_state && _liao_activity_state.narrow) {
				return true;
			} else {
				return thisScript.oper({
					name: '检测_狭间暗域是否已开启',
					operator: [{
						oper: thisOperator[11].oper
					}]
				});
			}
		}

		if (thisScript.oper({
			name: '检测_是否为狭间暗域选择页',
			operator: [thisOperator[12]]
		})) {
			sleep(2000);
			thisScript.global.liao_activity_page_flag = 0;
			const next_scheme = '狭间暗域';
			thisScript.rerun(next_scheme, {
				liao_activity_state: _liao_activity_state
			});
		}

		if (thisScript.oper({
			name: '检查_宴会是否已开启',
			operator: [{
				desc: thisOperator[2].desc
			}]
		})) {
			if (_liao_activity_state && _liao_activity_state.banquet) {
				return true;
			} else {
				thisScript.oper({
					name: '检查_宴会是否已开启',
					operator: [{
						oper: thisOperator[2].oper
					}]
				});

				sleep(2000);
				thisScript.global.liao_activity_page_flag = 0;
				const next_scheme = '宴会';
				thisScript.rerun(next_scheme, {
					liao_activity_state: _liao_activity_state
				});
			}
		}

		if (thisScript.oper({
			name: '检测_狩猎战是否已开启',
			operator: [{
				desc: thisOperator[4].desc
			}, {
				desc: thisOperator[14].desc
			}]
		})) {

			if (thisConf && thisConf.gateOfHades_switch) {
				if (_liao_activity_state) {
					const nowDateDay = new Date().getDay();
					console.log('今天是周', nowDateDay);

					switch (nowDateDay) {
						case 5:
						case 0: {
							if (!(_liao_activity_state.narrow && _liao_activity_state.banquet)) {
								return false;
							}
							break;
						}
						case 6: {
							if (!(_liao_activity_state.narrow && _liao_activity_state.huntBoss)) {
								return false;
							}
							break;
						}
					}
				}


				if (_liao_activity_state && _liao_activity_state.hunt) {
					return true;
				} else {
					return thisScript.oper({
						name: '检测_狩猎战是否已开启',
						operator: [{
							oper: thisOperator[4].oper
						}]
					});
				}
			}
		}

		if (thisScript.oper({
			name: '检测_狩猎战集结点',
			operator: [{
				desc: thisOperator[5].desc,
				oper: thisOperator[5].oper
			}]
		})) {
			return true;
		}

		if (thisScript.oper({
			name: '检测_是否为挑战奉献榜场景_待开始',
			operator: [{
				desc: thisOperator[7].desc,
			}]
		})) {

			sleep(2000);
			thisScript.global.liao_activity_page_flag = 0;
			const next_scheme = '狩猎战';
			thisScript.rerun(next_scheme, {
				liao_activity_state: _liao_activity_state
			});
		}

		if (thisScript.oper({
			name: '检测_2025年版本狩猎战',
			operator: [{
				desc: thisOperator[15].desc,
			}]
		})) {

			sleep(2000);
			thisScript.global.liao_activity_page_flag = 0;
			const next_scheme = '狩猎战';
			thisScript.rerun(next_scheme, {
				liao_activity_state: _liao_activity_state
			});
		}

		if (thisScript.oper({
			name: '检测_是否为阴门页面',
			operator: [thisOperator[10]]
		})) {
			sleep(2000);
			thisScript.global.liao_activity_page_flag = 0;
			const next_scheme = '阴门挑战';
			thisScript.rerun(next_scheme, {
				liao_activity_state: _liao_activity_state
			});
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
