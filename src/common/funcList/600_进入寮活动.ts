import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func600 implements IFuncOrigin {
	id = 600;
	name = '进入寮活动';
	desc = '进入已开启寮活动(狩猎战、道馆、狭间暗域、首领退治、宴会、阴界之门)';
	config = [{
		desc: '',
		config: [{
			name: 'count',
			desc: '超时次数(每30秒检查一次寮活动状态)',
			type: 'integer',
			default: 10,
		}, {
			name: 'admin',
			desc: '寮管理主动开启道馆,宴会',
			type: 'switch',
			default: false,
		}]
	}, {
		desc: '识别到后的操作(切换方案)',
		config: [{
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
		}]
	}];
	operator: IFuncOperatorOrigin[] = [
		{ // 0 检查_首领退治是否已开启
			desc: [
				1280, 720,
				[
					[left, 42, 31, 0xf4e4a4],
					[center, 736, 237, 0x8a7c67],
					[center, 766, 235, 0xc24137],
					[center, 760, 245, 0x653f37],
					[right, 836, 222, 0x32221b],
					[right, 850, 223, 0xb78d42],
					[right, 841, 232, 0x2a1d18],
				]
			],
			oper: [
				[center, 1280, 720, 656, 177, 855, 322, 1200]	// 打开首领退治
			]
		}, { // 1 检查_宴会是否已开启
			desc: [1280, 720,
				[
					[right, 951, 227, 0x99af97],
					[right, 994, 242, 0xcc614a],
					[right, 986, 296, 0x8d1d1d],
					[right, 1077, 284, 0xfa9998],
					[right, 1076, 284, 0xfa9998],
					[right, 1083, 226, 0x3b281e],
					[right, 1105, 226, 0x261b14],
				]
			],
			oper: [
				[center, 1280, 720, 949, 213, 1053, 293, 1000],
			]
		}, { // 2 检查_是否为道馆地图页面
			desc: [
				1280, 720,
				[
					[left, 91, 614, 0xc1b8aa],
					[left, 205, 651, 0x573b28],
					[left, 45, 35, 0xf7e9aa],
				]
			]
		}, { // 3 进入_狩猎战
			desc: [1280, 720,
				[
					[left, 242, 487, 0xf99184],
					[left, 262, 487, 0xf9ad9b],
					[left, 287, 486, 0xfcfaf7],
					[left, 288, 510, 0xbe6c77],
					[left, 237, 515, 0xcf838e],
				]
			],
			oper: [
				[center, 1280, 720, 203, 449, 343, 554, 1000],
			]
		}, { // 4 检测_狩猎战内
			desc: [1280, 720,
				[
					[left, 35, 592, 0x8a6138],
					[left, 112, 594, 0x664b30],
					[left, 139, 590, 0x5b452c],
					[left, 175, 603, 0x966f47],
					[right, 884, 661, 0xfff3f6],
					[right, 1061, 650, 0xfff2f2],
				]
			],
		}, { // 5 检测_是否为狩猎战挑战奉献榜场景_待开始（弃用）
			desc: [1280, 720,
				[
					[right, 1104, 568, 0xd7bfa5],
					[right, 1175, 600, 0xdfc29d],
					[right, 1122, 697, 0x5b0d07],
					[right, 1086, 615, 0x272420],
					[right, 1068, 593, 0xdec7aa]
				]
			]
		}, { // 6 检测_道馆内
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
						[center, 713, 25, 0xe3d698],
						[left, 47, 35, 0xf5e2a3],
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
					[center, 736, 237, 0x8a7c67],
					[center, 766, 235, 0xc24137],
					[center, 760, 245, 0x653f37],
					[center, 612, 211, 0x261b15],
					[center, 590, 229, 0x2e2019],
					[center, 602, 219, 0xce9f49],
				]
			],
			oper: [
				[center, 1280, 720, 407, 169, 608, 322, 1200]	// 打开道馆
			]
		}, { // 13 狭间滑动
			desc: [
				1280, 720,
				[
					[left, 251, 131, 0xd8c372],
					[center, 499, 132, 0xddcc7b],
					[right, 747, 133, 0xdecd7b],
					[right, 994, 131, 0xddcb7a],
					[left, 253, 386, 0xdac570],
					[right, 995, 386, 0xdcc66f],
					[right, 1196, 416, 0xd4804b],
				]
			],
			oper: [
				[center, 1280, 720, 552, 162, 836, 212, -1],     //  寮活动 滑动上位置
				[center, 1280, 720, 526, 500, 863, 505, -1],     //  寮活动 滑动下位置
				[left, 1280, 720, 25, 10, 75, 54, 1000],     //  寮活动 返回区域
			]
		}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['600'];
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
			log('600_thisScript.superGlobal.next_scheme_name:' + thisScript.superGlobal.next_scheme_name);
			thisScript.rerun('返回庭院')
			sleep(3000);
			return true;
		}
		// 首次进入寮神社界面返回一次重新进，防止还有原来的缓存在里面
		if (thisScript.global.liao_cheak == -1 && thisScript.oper({
			id: 600,
			name: '寮神社界面',
			operator: [thisOperator[11]]
		})) {
			thisScript.global.liao_cheak++;
			thisScript.myToast('首次进入寮神社界面，退出重进');
			return true;
		}
		// 道馆活动
		if (thisScript.superGlobal.liao_activity_Swith['a_ctivity_dojo'] || thisScript.superGlobal.liao_activity_Swith['a_ctivity_dojo_again']) {
			if ((nowDay >= 1 && nowDay <= 4) ||
				((nowDay === 5 || nowDay === 6 || nowDay === 0) && !thisconf.a_ctivity_narrow)
			) {
				if (thisconf.admin && thisScript.oper({
					id: 600,
					name: '寮神社界面',
					operator: [{ desc: thisOperator[11].desc }]
				})) {
					thisScript.superGlobal.liao_activity_Swith['a_ctivity_dojo'] = false;
					thisScript.superGlobal.liao_activity_Swith['a_ctivity_dojo_again'] = false;
					thisScript.superGlobal.liao_activity_Swith['a_ctivity_narrow'] = false;
					const next_scheme = thisconf.a_ctivity_dojo_select;
					thisScript.rerun(next_scheme);
					return true;
				}
				if (thisScript.oper({
					name: '检测_寮界面道馆是否已开启',
					operator: [thisOperator[12]]
				})) {
					return true;
				}
				if (thisScript.oper({
					name: '检测_道馆内',
					operator: [{
						desc: thisOperator[6].desc
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
					id: 600,
					name: '检测_道馆', // 道馆地图界面,集结中
					operator: [thisOperator[2]]
				})) {
					const point = thisScript.findMultiColor('道馆集结')
					if (point) {
						const oper = [
							point.x + 70,
							point.y - 110,
							point.x + 120,
							point.y - 80,
							1000
						];
						thisScript.regionClick([oper]);
					}
					return true;
				}
			} else {
				console.log('星期五六日执行狭间');
				thisScript.superGlobal.liao_activity_Swith['a_ctivity_dojo'] = false;
				thisScript.superGlobal.liao_activity_Swith['a_ctivity_dojo_again'] = false;
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
				if (thisconf.admin && Object.entries(thisScript.superGlobal.liao_activity_Swith).every(
					([key, value]) => ['a_ctivity_gateOfHades', 'a_ctivity_hunt'].includes(key) || value === false
				)) { // 其他开关为关时
					thisScript.superGlobal.liao_activity_Swith['a_ctivity_banquet'] = false;
					const next_scheme = thisconf.a_ctivity_banquet_select;
					thisScript.rerun(next_scheme);
				}
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
		// 狭间活动
		if (thisScript.superGlobal.liao_activity_Swith['a_ctivity_narrow']) {
			if (nowDay === 0 || nowDay === 5 || nowDay === 6) {// 判断星期几
				if (thisScript.oper({
					name: '寮神社_下滑',
					operator: [{ desc: thisOperator[13].desc }]
				})) {
					thisScript.regionBezierSwipe(thisOperator[13].oper[1], thisOperator[13].oper[0], [1200, 1500], 1000);
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
		// 狩猎战活动
		if (thisScript.superGlobal.liao_activity_Swith['a_ctivity_hunt']) {
			// 星期一二三四, 是否在6 - 23点
			if ([1, 2, 3, 4].includes(nowDay) && nowHour >= 6 && nowHour < 23) {
				if (Object.entries(thisScript.superGlobal.liao_activity_Swith).every(
					([key, value]) => ['a_ctivity_gateOfHades', 'a_ctivity_hunt'].includes(key) || value === false
				)) { // 其他开关为关时
					if (thisScript.oper({
						name: '检测_狩猎战',
						operator: [thisOperator[3]],
					})) {
						return true;
					}
					if (thisScript.oper({
						name: '检测_是否在狩猎战界面',
						operator: [thisOperator[4]],
					})) {
						const next_scheme = thisconf.a_ctivity_hunt_select;
						// 关闭开关 传参 切换到狩猎战
						thisScript.superGlobal.liao_activity_Swith['a_ctivity_hunt'] = false;
						thisScript.rerun(next_scheme);
						return true;
					}
				}
			} else {
				console.log('狩猎战 不在时间段内');
				thisScript.superGlobal.liao_activity_Swith['a_ctivity_hunt'] = false;
			}
		}
		// 阴门活动
		if (thisScript.superGlobal.liao_activity_Swith['a_ctivity_gateOfHades']) {
			// 判断星期五六七是否在17-23点
			if ((nowDay === 0 || nowDay === 5 || nowDay === 6) && nowHour >= 17 && nowHour < 23) {
				if (Object.entries(thisScript.superGlobal.liao_activity_Swith).every(
					([key, value]) => key === 'a_ctivity_gateOfHades' || value === false
				) && thisScript.oper({
					id: 600,
					name: '寮神社界面',
					operator: [{ desc: thisOperator[11].desc }]
				})) {// 其他开关为关时
					// 关闭开关 切换到阴门
					thisScript.superGlobal.liao_activity_Swith['a_ctivity_gateOfHades'] = false;
					const next_scheme = thisconf.a_ctivity_gateOfHades_select;
					thisScript.rerun(next_scheme);
					return true;
				}
			} else {
				// 非阴门活动时间,关闭阴门开关
				console.log('阴门 不在时间段内');
				thisScript.superGlobal.liao_activity_Swith['a_ctivity_gateOfHades'] = false;
				return true;
			}
		}
		if (thisScript.oper({
			id: 600,
			name: '寮神社界面',
			operator: [{ desc: thisOperator[11].desc }]
		})) {
			thisScript.global.liao_cheak++;
			const r = random(28000, 32000);
			thisScript.oper({
				id: 600,
				name: '寮神社界面返回',
				operator: [{ oper: thisOperator[11].oper }]
			})
			if (thisScript.global.liao_cheak < (thisconf.count as number)) {
				thisScript.myToast(`未开启寮活动,等待${Math.round(r / 1000)}秒后再次检测,剩余${(thisconf.count as number) - thisScript.global.liao_cheak}次`);
				log(thisScript.superGlobal.liao_activity_Swith);
				sleep(r);
				return true;
			} else if (thisScript.global.liao_cheak < (thisconf.count as number) + 1) {
				thisScript.myToast('执行次数完毕,检查狩猎战或阴界之门或宴会')
				if (thisconf.admin) {
					thisScript.superGlobal.liao_activity_Swith = {
						...thisScript.superGlobal.liao_activity_Swith,
						'a_ctivity_dojo': false,
						'a_ctivity_dojo_again': false,
						'a_ctivity_narrow': false,
						'a_ctivity_huntBoss': false,
					};
					return true;
				} else {
					thisScript.superGlobal.liao_activity_Swith = {
						...thisScript.superGlobal.liao_activity_Swith,
						'a_ctivity_dojo': false,
						'a_ctivity_dojo_again': false,
						'a_ctivity_narrow': false,
						'a_ctivity_banquet': false,
						'a_ctivity_huntBoss': false,
					};
					return true;
				}
			} else if (thisScript.global.liao_cheak < (thisconf.count as number) + 3) {
				thisScript.oper({
					id: 600,
					name: '寮神社界面返回',
					operator: [{ oper: thisOperator[11].oper }]
				})
				thisScript.myToast('未找到狩猎战或阴界之门或宴会');
				thisScript.superGlobal.next_scheme_name = null;
				log('600_thisScript.superGlobal.next_scheme_name:' + thisScript.superGlobal.next_scheme_name);
				thisScript.rerun('返回庭院')
				sleep(3000);
				return true;
			}
		}
		return false;
	}
}