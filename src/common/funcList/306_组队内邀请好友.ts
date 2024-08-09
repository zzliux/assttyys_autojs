import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func306 implements IFuncOrigin {
	id = 306;
	name = '组队内邀请好友';
	desc = '组队界面邀请好友'
	config = [{
		desc: '',
		config: [{
			name: 'selectArea',
			desc: '选择好友所在区域',
			type: 'list',
			data: ['好友', '跨区'],
			default: '好友',
			value: null,
		}, {
			name: 'inviteName',
			desc: '第一位好友昵称',
			type: 'text',
			default: '第一位昵称'
		}, {
			name: 'secondPlayer',
			desc: '邀请两位好友（三人组队），关闭则邀请一位（二人组队)）',
			type: 'switch',
			default: false
		}, {
			name: 'selectAreaTwo',
			desc: '第二位好友所在区域',
			type: 'list',
			data: ['好友', '跨区'],
			default: '好友',
			value: null,
		}, {
			name: 'inviteNameTwo',
			desc: '第二位好友昵称',
			type: 'text',
			default: '第二位昵称'
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '通用准备退出',
		}, {
			name: 'qilingmod',
			desc: '契灵模式',
			type: 'switch',
			default: false,
		}],
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0,三号位
		desc: [1280, 720,
			[
				[center, 642, 3, 0x101011],
				[left, 42, 38, 0xf7e8aa],
				[center, 641, 52, 0x080c0a],
				[center, 648, 571, 0x422c29],
				[right, 1088, 254, 0xffffff]]
		],
		oper: [
			[center, 1280, 720, 1025, 194, 1145, 306, 500]
		]
	}, { // 1,邀请界面
		desc: [1280, 720,
			[
				[center, 390, 570, 0xd6bead],
				[center, 502, 574, 0xde6952],
				[center, 638, 583, 0xd6bead],
				[center, 776, 582, 0xf7b263]]
		],
		oper: [
			[center, 1280, 720, 436, 188, 910, 526, 0], // ocr区域
			[center, 1280, 720, 718, 553, 827, 597, 1500], // 邀请
		]
	}, { // 2,组队界面
		desc: [1280, 720,
			[
				[center, 642, 3, 0x101011],
				[left, 42, 38, 0xf7e8aa],
				[center, 641, 52, 0x080c0a],
				[center, 648, 571, 0x422c29]]
		]
	}, { // 3,组队挑战按钮
		desc: [1280, 720,
			[
				[left, 43, 37, 0xf5e6a8],
				[right, 1177, 667, 0xd8b871],
				[right, 1187, 679, 0xcda35d],
				[right, 1188, 609, 0xf1e096],
				[left, 60, 39, 0x84582f],
				[left, 19, 47, 0x281717]]
		],
		oper: [
			[center, 1280, 720, 448, 552, 562, 600, 1000], // 取消
		]
	}, { // 4 二号位
		desc: [
			1280, 720,
			[
				[center, 642, 3, 0x101011],
				[left, 42, 38, 0xf7e8aa],
				[center, 642, 266, 0xfffef8],
				[center, 568, 427, 0x534a55],
				[center, 722, 432, 0x554d56],
				[center, 642, 302, 0xdccab3],
			]
		],
		oper: [
			[right, 1280, 720, 1192, 613, 1251, 677, 1000], // 点击挑战
			[right, 1280, 720, 603, 223, 675, 278, 1000], // 点击二号位
		]
	}, { // 5 战斗界面
		desc: '战斗界面',
	}, { // 6 组队类型_契灵
		desc: [
			1280, 720,
			[
				[center, 405, 121, 0xe9c096],
				[center, 522, 106, 0x8c5740],
				[center, 625, 115, 0xd5bfad],
				[center, 733, 118, 0xa58e79],
			]
		],
		oper: [
			[center, 1280, 720, 477, 93, 566, 136, 1000],
		]
	}, { // 7 组队类型_御魂
		desc: [
			1280, 720,
			[
				[center, 350, 111, 0xe1b089],
				[center, 465, 115, 0x9a644a],
				[center, 573, 112, 0x8f5a43],
				[center, 688, 116, 0x925d45],
				[center, 793, 106, 0xa48e79],
			]
		],
		oper: [
			[center, 1280, 720, 678, 88, 775, 134, 1000], // 跨区
			[center, 1280, 720, 333, 85, 425, 140, 1000], // 好友
		]
	}, { // 8 组队类型_探索
		desc: [
			1280, 720,
			[
				[center, 706, 107, 0xa58e79],
				[center, 786, 120, 0x37322c],
				[center, 815, 117, 0xa7330a],
				[center, 847, 116, 0xa72e04],
				[center, 895, 121, 0x39332c],
				[center, 464, 121, 0xd1bbaa],
				[center, 579, 116, 0xc9b5a4],
			]
		],
		oper: [
			[center, 1280, 720, 473, 90, 564, 137, 1000],
			[center, 1280, 720, 592, 90, 680, 136, 1000],
		]
	}]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['306'];
		const team_up_Frist = thisScript.global.team_up_Frist;
		let team_up_lagTime = thisScript.global.team_up_lagTime;
		const team_up_Time = 5;
		// 非组队界面重置计时
		if (!team_up_lagTime || !thisScript.oper({
			name: '非组队界面',
			operator: [{ desc: thisOperator[2].desc }]
		})) {
			thisScript.global.team_up_lagTime = new Date();
		}
		// 战斗界面重置计数
		if (thisScript.oper({
			name: '战斗界面',
			operator: [{ desc: thisOperator[5].desc }]
		})) {
			thisScript.global.team_up_Time = 0;
			return false;
		}
		team_up_lagTime = new Date();
		// 开启后首次进入组队则邀请 或 停留组队界面超过15秒
		if (team_up_Frist || team_up_lagTime.getTime() - thisScript.global.team_up_lagTime.getTime() > 10000) {
			// 契灵模式
			if (thisConf.qilingmod && thisScript.oper({
				name: '组队挑战契灵模式_判断是否邀请',
				operator: [{ desc: thisOperator[3].desc }]
			})) {
				thisScript.regionClick([thisOperator[4].oper[1]]);
				thisScript.global.team_up_Frist = false;
				thisScript.global.team_up_lagTime = new Date();
				thisScript.global.team_up_Time++;
				if (team_up_Time < thisScript.global.team_up_Time) {
					thisScript.doPush(thisScript, { text: '多次邀请未响应，或多次未识别到昵称，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
					sleep(3000);
					return;
				}
				return true;
			} else if (thisConf.qilingmod == false && thisScript.oper({
				name: '三号位',
				operator: [thisOperator[0]]
			})) {
				// 普通模式
				thisScript.global.team_up_Frist = false;
				thisScript.global.team_up_lagTime = new Date();
				thisScript.global.team_up_Time++;
				if (team_up_Time < thisScript.global.team_up_Time) {
					thisScript.doPush(thisScript, { text: '多次邀请未响应，或多次未识别到昵称，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
					sleep(3000);
					return;
				}
				return true;
			}
		}
		// 邀请界面_开始邀请好友
		if (thisScript.oper({
			name: '邀请界面',
			operator: [{ desc: thisOperator[1].desc }]
		}) && thisScript.getOcrDetector()) {
			let toClickRegion = null;
			let toClickRegionTwo = null;
			{ // 判断邀请类型
				if (thisConf.qilingmod && thisConf.selectArea == '跨区') {
					thisScript.regionClick(thisOperator[6].oper);
				}
				if (thisScript.oper({
					name: '组队类型_御魂',
					operator: [{ desc: thisOperator[7].desc }]
				}) && thisConf.selectArea == '跨区') {
					thisScript.regionClick(thisOperator[7].oper);
				}
				if (thisScript.oper({
					name: '组队类型_探索',
					operator: [{ desc: thisOperator[8].desc }]
				})) {
					if (thisConf.selectArea == '好友') {
						thisScript.regionClick([thisOperator[8].oper[0]]);
					} else {
						thisScript.regionClick([thisOperator[8].oper[1]]);
					}
				}
			}
			thisScript.keepScreen();
			const result = thisScript.findText('.+', 0, thisOperator[1].oper[0], '包含');
			if (result.length === 0) {
				console.log('未识别到任何昵称');
				thisScript.global.team_up_Time++;
				thisScript.regionClick([thisOperator[4].oper[0]]);
				thisScript.global.team_up_lagTime = new Date(2000);
				return false;
			} else {
				for (const i in result) {
					console.log(`昵称历遍:${result[i].label}`)
				}
				// 邀请里点击第一位好友
				const findInvName = thisScript.findTextByOcrResult(thisConf.inviteName as string, result, '包含')
				if (findInvName.length) {
					toClickRegion = [
						findInvName[0].points[0].x + 20,
						findInvName[0].points[0].y,
						findInvName[0].points[0].x + 50,
						findInvName[0].points[0].y + 65,
						1000,
					]
				}
				if (toClickRegion === null) {
					console.log(`未识别到第一位昵称:${thisConf.inviteName}`);
					thisScript.global.team_up_Time++;
					thisScript.regionClick([thisOperator[4].oper[0]]);
					thisScript.global.team_up_lagTime = new Date(2000);
					return false;
				}
				toClickRegion && thisScript.regionClick([toClickRegion]);
			}
			// 邀请第二位好友
			if (thisConf.secondPlayer) {
				{ // 判断邀请类型
					if (thisScript.oper({
						name: '组队类型_御魂',
						operator: [{ desc: thisOperator[7].desc }]
					})) {
						if (thisConf.selectAreaTwo == '跨区') {
							thisScript.regionClick([thisOperator[7].oper[0]]);
						} else {
							thisScript.regionClick([thisOperator[7].oper[1]]);
						}
					}
				}
				thisScript.keepScreen();
				const result = thisScript.findText('.+', 0, thisOperator[1].oper[0], '包含');
				if (result.length === 0) {
					console.log('未识别到任何昵称');
					thisScript.global.team_up_Time++;
					thisScript.regionClick([thisOperator[4].oper[0]]);
					thisScript.global.team_up_lagTime = new Date(2000);
					return false;
				} else {
					for (const i in result) {
						console.log(`昵称历遍:${result[i].label}`)
					}
					// 邀请里点击第二位好友
					const findInvNameTwo = thisScript.findTextByOcrResult(thisConf.inviteNameTwo as string, result, '包含')
					if (findInvNameTwo.length) {
						toClickRegionTwo = [
							findInvNameTwo[0].points[0].x + 10,
							findInvNameTwo[0].points[0].y,
							findInvNameTwo[0].points[0].x + 50,
							findInvNameTwo[0].points[0].y + 65,
							1000,
						]
					}
					if (toClickRegionTwo === null) {
						console.log(`未识别到第二位昵称:${thisConf.inviteNameTwo}`);
						thisScript.global.team_up_Time++;
						thisScript.regionClick([thisOperator[4].oper[0]]);
						thisScript.global.team_up_lagTime = new Date(2000);
						return false;
					}
					toClickRegionTwo && thisScript.regionClick([toClickRegionTwo]);
				}
			}
			if (toClickRegion || toClickRegionTwo) {
				return thisScript.oper({
					id: 306,
					name: '邀请按钮',
					operator: [{
						oper: [thisOperator[1].oper[1]]
					}]
				});
			}
		}
		// 契灵模式_判断是否挑战
		if (thisConf.qilingmod && thisScript.oper({
			name: '组队挑战契灵模式_判断队友是否进入',
			operator: [{ desc: thisOperator[3].desc }]
		})) {
			if (!thisScript.oper({
				name: '二号位',
				operator: [{ desc: thisOperator[4].desc }]
			})) {
				thisScript.regionClick([thisOperator[4].oper[0]]);
			}
			return true;
		}
		// 普通模式
		if (thisScript.oper({
			name: '组队挑战_判断',
			operator: [{ desc: thisOperator[3].desc }]
		})) {
			if (thisConf && !thisConf.secondPlayer) {
				thisScript.rerun(thisConf.next_scheme);
				sleep(3000);
				return;
			} else if (thisConf && thisConf.secondPlayer && !thisScript.oper({
				name: '三号位',
				operator: [{ desc: thisOperator[0].desc }]
			})) {
				thisScript.rerun(thisConf.next_scheme);
				sleep(3000);
				return;
			}
		}
		return false;
	}
}
