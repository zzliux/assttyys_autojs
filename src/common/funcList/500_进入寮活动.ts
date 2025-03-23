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
	}];
	operator: IFuncOperatorOrigin[] = [
		{ // 0 检查_首领退治是否已开启
			desc: [
				1280, 720,
				[
					[left, 42, 31, 0xf4e4a4],
					[center, 744, 39, 0x593716],
					[center, 736, 237, 0x403d38],
					[center, 766, 235, 0xaf3a31],
					[center, 760, 245, 0xe3e0da],
					[center, 842, 198, 0xffdd66],
					[center, 837, 216, 0x3c291d],
					[center, 857, 232, 0x352117],
					[center, 851, 197, 0x453022],
					[center, 854, 193, 0x4c3422],
				]
			],
			oper: [
				[center, 1280, 720, 656, 177, 855, 322, 1200]	// 打开首领退治
			]

		}, { // 1 检查_宴会是否已开启
			desc: [
				1280, 720,
				[
					[right, 1099, 212, 0x4a3627],
					[right, 1036, 265, 0x7e1818],
					[right, 1043, 291, 0xf6b2b2],
					[right, 988, 286, 0x93211f],
					[center, 946, 228, 0x3f2c19],
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
					[left, 244, 469, 0xc47f7e],
					[left, 273, 485, 0xc95757],
					[left, 260, 519, 0x735162],
					[center, 362, 420, 0xfc0c0c],
					[center, 355, 419, 0xfe1515],
					[center, 346, 483, 0xc2ac91]
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
		}, { //	9 检测_狭间暗域
			desc:
				[
					1280, 720,
					[
						[center, 848, 535, 0x422d1e],
						[center, 826, 496, 0xcbb497],
						[center, 687, 505, 0xcab596],
						[center, 778, 560, 0x442f47],
						[center, 684, 615, 0xb9a489],
						[center, 866, 573, 0x734e25],
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

			desc: [
				1280, 720,
				[
					[left, 42, 31, 0xf4e4a4],
					[center, 744, 39, 0x593716],
					[center, 736, 237, 0x403d38],
					[center, 766, 235, 0xaf3a31],
					[center, 760, 245, 0xe3e0da],
					[center, 591, 187, 0x593e25],
					[center, 612, 211, 0x261b15],
					[center, 595, 193, 0xfff970],
					[center, 601, 250, 0x462e1c],
				]
			],
			oper: [
				[center, 1280, 720, 407, 169, 608, 322, 1200]	// 打开道馆
			]
		}, { // 13 检测_是否为道馆集结界面
			desc:
				[
					1280, 720,
					[
						[center, 879, 611, 0xc7414e],
						[center, 913, 644, 0x493a38],
						[center, 609, 651, 0x583a28],
						[left, 62, 532, 0x882349],
						[left, 48, 26, 0xd7c5a2],
						[left, 109, 23, 0xd7c5a2],
						[left, 175, 22, 0xd4c4a3],
					]
				],
		}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['500'];
		if (!thisScript.global.liao_activity_Swith) {// 首次执行,读取按钮状况
			thisScript.global.liao_activity_Swith = {
				'a_ctivity_gateOfHades': thisconf.a_ctivity_gateOfHades as boolean,
				'a_ctivity_dojo': thisconf.a_ctivity_dojo as boolean,
				'a_ctivity_hunt': thisconf.a_ctivity_hunt as boolean,
				'a_ctivity_narrow': thisconf.a_ctivity_narrow as boolean,
				'a_ctivity_banquet': thisconf.a_ctivity_banquet as boolean,
				'a_ctivity_huntBoss': thisconf.a_ctivity_huntBoss as boolean,
			}
		}
		// 判断用户是否有选择选项,全部选项为假则退出任务
		const allFalse = Object.values(thisScript.global.liao_activity_Swith).every(value => value === false);
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
		// 狩猎战、阴门活动判断与操作
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
				if (thisScript.global.liao_activity_Swith && Object.prototype.hasOwnProperty.call(thisScript.global.liao_activity_Swith, 'a_ctivity_narrow')) {
					thisScript.global.liao_activity_Swith['a_ctivity_narrow'] = false;
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
				if (thisScript.global.liao_activity_Swith && Object.prototype.hasOwnProperty.call(thisScript.global.liao_activity_Swith, 'a_ctivity_huntBoss')) {
					thisScript.global.liao_activity_Swith['a_ctivity_huntBoss'] = false;
				}
			}
		}
		// 道馆活动
		if (thisconf.a_ctivity_dojo) {
			if (thisScript.oper({
				name: '检测_寮界面道馆是否已开启',
				operator: [thisOperator[12]]
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '检测_点击道馆后是否选择寮界面', // 道馆还没开
				operator: [thisOperator[6],]
			})) {
				const next_scheme = '返回庭院';
				thisScript.rerun(next_scheme);
			}
			if (thisScript.oper({
				name: '检测_是否道馆集结页',
				operator: [{
					desc: thisOperator[13].desc
				}]
			})) {
				thisScript.global.liao_activity_page_flag = 0;
				const next_scheme = thisconf.a_ctivity_dojo_select;
				thisScript.rerun(next_scheme, {});
				return true;
			}
			if (thisScript.oper({
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
			}
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