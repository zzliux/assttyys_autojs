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
		desc: '',
		config: [{
			name: 'count',
			desc: '超时次数(每30秒检查一次寮活动状态)',
			type: 'integer',
			default: 10,
		}]
	}, {
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
				name: 'a_ctivity_banquet_time',
				desc: '宴会时间',
				type: 'lists',
				data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
				default: ['星期五', '星期日'],
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
						[center, 861, 540, 0xd09f4a],
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
					[center, 612, 211, 0x261b15],
					[center, 590, 229, 0x2e2019],
					[center, 602, 219, 0xce9f49],
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
		}, { // 14 狭间滑动
			desc: [
				1280, 720,
				[
					[left, 256, 122, 0xd1b463],
					[center, 499, 126, 0xdedb9f],
					[center, 746, 126, 0xdedb9f],
					[right, 995, 125, 0xdfd287],
					[left, 253, 373, 0xdecb7a],
					[center, 488, 621, 0xded89a],
					[center, 759, 622, 0xe4db8d],
				]
			],
			oper: [
				[center, 1280, 720, 552, 162, 836, 212, -1],     //  寮活动 滑动上位置
				[center, 1280, 720, 526, 500, 863, 505, -1],     //  寮活动 滑动下位置
				[left, 1280, 720, 25, 10, 75, 54, 1000],     //  寮活动 返回区域
			]
		}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['500'];
		const nowHour = new Date().getHours();
		const nowDay = new Date().getDay();
		// 设置全局方案起始点
		thisScript.superGlobal.next_scheme_name = thisScript.scheme.schemeName;
		if (!thisScript.superGlobal.liao_activity_Swith) {// 首次执行,读取按钮状况
			thisScript.superGlobal.liao_activity_Swith = {
				'a_ctivity_gateOfHades': thisconf.a_ctivity_gateOfHades as boolean,
				'a_ctivity_dojo': thisconf.a_ctivity_dojo as boolean,
				'a_ctivity_dojo_again': false,
				'a_ctivity_hunt': thisconf.a_ctivity_hunt as boolean,
				'a_ctivity_narrow': thisconf.a_ctivity_narrow as boolean,
				'a_ctivity_banquet': thisconf.a_ctivity_banquet as boolean,
				'a_ctivity_huntBoss': thisconf.a_ctivity_huntBoss as boolean,
			};
		}
		// 判断用户是否有选择选项,全部选项为假则退出任务
		const allFalse = Object.values(thisScript.superGlobal.liao_activity_Swith).every(value => value === false);
		if (allFalse) {
			thisScript.myToast('任务执行完毕!');
			thisScript.superGlobal.next_scheme_name = null;
			thisScript.rerun('返回庭院')
			return true;
		}
		// 首次进入寮神社界面返回一次重新进，防止还有原来的缓存在里面
		if (thisScript.global.liao_activity_page_flag == -1 && thisScript.oper({
			id: 500,
			name: '寮神社界面',
			operator: [thisOperator[11]]
		})) {
			thisScript.global.liao_activity_page_flag++;
			thisScript.myToast('首次进入寮神社界面，退出重进');
			return true;
		}
		// 狩猎战判断
		if (thisScript.superGlobal.liao_activity_Swith['a_ctivity_hunt']) {
			if ([1, 2, 3, 4].includes(nowDay) && nowHour >= 18 && nowHour < 21) { // 判断星期一二三四,是否在18-21点(18时为误差,有人18:55开启定时)
				if (thisScript.oper({
					name: '检测_狩猎战',
					operator: [thisOperator[3], thisOperator[4]],
				})) {
					return true;
				}
				if (thisScript.oper({
					name: '检测_是否在狩猎战界面',
					operator: [thisOperator[5]],
				})) {
					const next_scheme = thisconf.a_ctivity_hunt_select;
					// 关闭开关 传参 切换到狩猎战
					thisScript.superGlobal.liao_activity_Swith['a_ctivity_hunt'] = false;
					thisScript.rerun(next_scheme);
					return true;
				}
			} else {
				console.log('狩猎战 不在时间段内');
				thisScript.superGlobal.liao_activity_Swith['a_ctivity_hunt'] = false;
			}

		}
		// 阴门判断(其他开关为关时)
		if (Object.entries(thisScript.superGlobal.liao_activity_Swith).every(([key, value]) => key === 'a_ctivity_gateOfHades' ? true : value === false
		)) {
			if ((nowDay === 0 || nowDay === 5 || nowDay === 6) && nowHour >= 19 && nowHour < 23) {// 判断星期五六七是否在19-23点
				// 关闭开关 切换到阴门
				thisScript.superGlobal.liao_activity_Swith['a_ctivity_gateOfHades'] = false;
				const next_scheme = thisconf.a_ctivity_gateOfHades_select;
				thisScript.rerun(next_scheme);
				return true;
			} else {
				// 非阴门活动时间,关闭阴门开关
				console.log('阴门 不在时间段内');
				thisScript.superGlobal.liao_activity_Swith['a_ctivity_gateOfHades'] = false;
			}
		}
		// 宴会活动
		if (thisScript.superGlobal.liao_activity_Swith['a_ctivity_banquet']) {
			let a_ctivity_banquet_time_one;// 判断星期几
			let a_ctivity_banquet_time_two;// 判断星期几
			switch (thisconf.a_ctivity_banquet_time[0]) {
				case '星期一':
					a_ctivity_banquet_time_one = 1;
					break;
				case '星期二':
					a_ctivity_banquet_time_one = 2;
					break;
				case '星期三':
					a_ctivity_banquet_time_one = 3;
					break;
				case '星期四':
					a_ctivity_banquet_time_one = 4;
					break;
				case '星期五':
					a_ctivity_banquet_time_one = 5;
					break;
				case '星期六':
					a_ctivity_banquet_time_one = 6;
					break;
				case '星期日':
					a_ctivity_banquet_time_one = 0;
					break;
				default:
					console.log('宴会时间设置错误');
					break;
			}
			switch (thisconf.a_ctivity_banquet_time[1]) {
				case '星期一':
					a_ctivity_banquet_time_two = 1;
					break;
				case '星期二':
					a_ctivity_banquet_time_two = 2;
					break;
				case '星期三':
					a_ctivity_banquet_time_two = 3;
					break;
				case '星期四':
					a_ctivity_banquet_time_two = 4;
					break;
				case '星期五':
					a_ctivity_banquet_time_two = 5;
					break;
				case '星期六':
					a_ctivity_banquet_time_two = 6;
					break;
				case '星期日':
					a_ctivity_banquet_time_two = 0;
					break;
				default:
					console.log('宴会时间设置错误');
					break;
			}
			if (a_ctivity_banquet_time_one === nowDay || a_ctivity_banquet_time_two === nowDay) {// 判断是否符合
				if (thisScript.oper({
					name: '检查_宴会是否已开启',
					operator: [thisOperator[1]]
				})) {
					// 关闭开关 传参 切换到宴会
					thisScript.superGlobal.liao_activity_Swith['a_ctivity_banquet'] = false;
					const next_scheme = thisconf.a_ctivity_banquet_select;
					thisScript.rerun(next_scheme);
					return true;
				}
			} else {
				console.log('宴会 不在时间段内');
				thisScript.superGlobal.liao_activity_Swith['a_ctivity_banquet'] = false;
			}
		}
		// 周六首领退治活动
		if (thisScript.superGlobal.liao_activity_Swith['a_ctivity_huntBoss']) {
			if (nowHour >= 10 && nowHour < 23 && nowDay === 6) {// 判断是否在周六10-23点
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
					// 关闭开关 传参 切换到退治
					thisScript.superGlobal.liao_activity_Swith['a_ctivity_huntBoss'] = false;
					const next_scheme = thisconf.a_ctivity_huntBoss_select;
					thisScript.rerun(next_scheme);
					return true;
				}
			} else {
				console.log('退治 不在时间段');
				thisScript.superGlobal.liao_activity_Swith['a_ctivity_huntBoss'] = false;
			}
		}
		// 道馆活动
		if (thisScript.superGlobal.liao_activity_Swith['a_ctivity_dojo'] || thisScript.superGlobal.liao_activity_Swith['a_ctivity_dojo_again']) {
			if (thisScript.oper({
				name: '检测_寮界面道馆是否已开启',
				operator: [thisOperator[12]]
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '检测_点击道馆后是否选择寮界面', // 道馆还没开
				operator: [thisOperator[6]]
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '检测_是否道馆集结页',
				operator: [{
					desc: thisOperator[13].desc
				}]
			})) {
				thisScript.superGlobal.liao_activity_Swith['a_ctivity_dojo'] = false;
				thisScript.superGlobal.liao_activity_Swith['a_ctivity_dojo_again'] = false;
				thisScript.superGlobal.liao_activity_Swith['a_ctivity_narrow'] = false;
				const next_scheme = thisconf.a_ctivity_dojo_select;
				thisScript.rerun(next_scheme);
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
				return true;
			}
		}
		// 狭间活动判断
		if (thisScript.superGlobal.liao_activity_Swith['a_ctivity_narrow']) {
			if (nowDay === 0 || nowDay === 5 || nowDay === 6) {// 判断星期几
				if (thisScript.oper({
					name: '寮神社_下滑',
					operator: [{ desc: thisOperator[14].desc }]
				})) {
					thisScript.regionBezierSwipe(thisOperator[14].oper[1], thisOperator[14].oper[0], [1200, 1500], 1000);
					thisScript.keepScreen();
				}
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
					// 关闭开关 传参 切换到狭间
					thisScript.superGlobal.liao_activity_Swith['a_ctivity_narrow'] = false;
					thisScript.superGlobal.liao_activity_Swith['a_ctivity_dojo'] = false;
					const next_scheme = thisconf.a_ctivity_narrow_select;
					thisScript.rerun(next_scheme);
					return true;
				}
			} else {
				console.log('狭间 不在时间段');
				// 关闭狭间开关
				thisScript.superGlobal.liao_activity_Swith['a_ctivity_narrow'] = false;
			}
		}
		if (thisScript.oper({
			id: 500,
			name: '寮神社界面',
			operator: [thisOperator[11]]
		})) {
			thisScript.global.liao_activity_page_flag++;
			const r = random(2800, 3200);
			if (thisScript.global.liao_activity_page_flag < (thisconf.count as number)) {
				thisScript.myToast(`未开启寮活动,等待${Math.round(r / 1000)}秒后再次检测,剩余${(thisconf.count as number) - thisScript.global.liao_activity_page_flag}次`);
				sleep(r);
				return true;
			} else {
				thisScript.myToast('执行次数完毕,检查阴界之门')
				thisScript.superGlobal.liao_activity_Swith = {
					...thisScript.superGlobal.liao_activity_Swith,
					'a_ctivity_dojo': false,
					'a_ctivity_dojo_again': false,
					'a_ctivity_hunt': false,
					'a_ctivity_narrow': false,
					'a_ctivity_banquet': false,
					'a_ctivity_huntBoss': false,
				};
				return true;
			}
		}
		return false;
	}
}