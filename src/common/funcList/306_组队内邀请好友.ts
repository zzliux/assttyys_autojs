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
			desc: '邀请两位好友（三人组队），关闭则邀请一位（二人组队），（困28的队友被认定为第二位好友）',
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
		}],
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0,三号位
		desc: [1280, 720,
			[[center, 642, 3, 0x101011],
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
			[[center, 390, 570, 0xd6bead],
				[center, 502, 574, 0xde6952],
				[center, 638, 583, 0xd6bead],
				[center, 776, 582, 0xf7b263]]
		],
		oper: [
			[center, 1280, 720, 310, 61, 790, 163, 0], // 好友区域
			[center, 1280, 720, 436, 188, 910, 526, 0], // ocr区域
			[center, 1280, 720, 718, 553, 827, 597, 1500], // 邀请
		]
	}, { // 2,组队界面
		desc: [1280, 720,
			[[center, 642, 3, 0x101011],
				[left, 42, 38, 0xf7e8aa],
				[center, 641, 52, 0x080c0a],
				[center, 648, 571, 0x422c29]]
		]
	}, { // 3,组队挑战按钮
		desc: [1280, 720,
			[[left, 43, 37, 0xf5e6a8],
				[right, 1177, 667, 0xd8b871],
				[right, 1187, 679, 0xcda35d],
				[right, 1188, 609, 0xf1e096],
				[left, 60, 39, 0x84582f],
				[left, 19, 47, 0x281717]]
		],
		oper: [
			[center, 1280, 720, 448, 552, 562, 600, 1000], // 取消
		]
	}]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['306'];
		const team_up_Frist = thisScript.global.team_up_Frist;
		let team_up_lagTime = thisScript.global.team_up_lagTime;
		const team_up_Time = 10;
		// 非组队界面重置计时
		if (!team_up_lagTime || !thisScript.oper({
			name: '非组队界面',
			operator: [{ desc: thisOperator[2].desc }]
		})) {
			thisScript.global.team_up_lagTime = new Date();
		}
		team_up_lagTime = new Date();
		// 开启后首次进入组队则邀请 或 停留组队界面超过10秒
		if (team_up_Frist || team_up_lagTime.getTime() - thisScript.global.team_up_lagTime.getTime() > 15000) {
			if (thisScript.oper({
				name: '三号位',
				operator: [thisOperator[0]]
			})) {
				thisScript.global.team_up_Frist = false;
				thisScript.global.team_up_lagTime = new Date();
				thisScript.global.team_up_Time++;
				if (team_up_Time < thisScript.global.team_up_Time) {
					thisScript.doPush(thisScript, { text: '多次邀请未响应，或多次未识别到昵称，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
					sleep(3000);
					return;
				}
			}
		}

		if (thisScript.oper({
			name: '邀请界面',
			operator: [{ desc: thisOperator[1].desc }]
		})) {
			if (thisScript.getOcrDetector()) {
				const selectArea = thisScript.findText(thisConf.selectArea as string, 0, thisOperator[1].oper[0], '模糊');
				if (selectArea.length === 0) {
					console.log('找不到第一位（好友/跨区）按钮');
					thisScript.regionClick([thisOperator[3].oper[0]]);
					return false;
				} else {
					const p = {
						x: (selectArea[0].points[0].x + selectArea[0].points[1].x) / 2,
						y: (selectArea[0].points[0].y + selectArea[0].points[3].y) / 2,
					}
					const lx = p.x - 5;
					const ly = p.y - 5;
					const rx = p.x + 5;
					const ry = p.y + 5;
					const toClick = [
						lx > 0 ? lx : 0,
						ly > 0 ? ly : 0,
						rx,
						ry,
						1000
					];
					thisScript.regionClick([toClick]);
					thisScript.keepScreen();
				}
				let result = thisScript.findText('.+', 0, thisOperator[1].oper[1], '包含');
				if (result.length === 0) {
					console.log('未识别到任何昵称');
					thisScript.global.team_up_Time++;
					return false;
				} else {
					let toClickRegion = null;
					let toClickRegionTwo = null;
					for (const i in result) {
						console.log(`昵称历遍:${result[i].label}`)
					}
					// 邀请里点击第一位好友
					const findInvName = thisScript.findTextByOcrResult(thisConf.inviteName as string, result, '包含')
					if (findInvName.length) {
						toClickRegion = [
							findInvName[0].points[0].x + 10,
							findInvName[0].points[0].y,
							findInvName[0].points[0].x + 50,
							findInvName[0].points[0].y + 65,
							1000,
						]
					}
					if (toClickRegion === null) {
						console.log(`未识别到第一位昵称:${thisConf.inviteName}`);
					}
					toClickRegion && thisScript.regionClick([toClickRegion]);

					// 邀请里点击第二位好友
					if (thisConf.secondPlayer) {
						if (thisConf.selectArea != thisConf.selectAreaTwo) {
							const selectAreaTwo = thisScript.findText(thisConf.selectAreaTwo as string, 0, thisOperator[1].oper[0], '模糊');
							if (selectAreaTwo.length === 0) {
								console.log('找不到第二位（好友/跨区）按钮');
								thisScript.regionClick([thisOperator[3].oper[0]]);
								return false;
							} else {
								const p = {
									x: (selectAreaTwo[0].points[0].x + selectAreaTwo[0].points[1].x) / 2,
									y: (selectAreaTwo[0].points[0].y + selectAreaTwo[0].points[3].y) / 2,
								}
								const lx = p.x - 5;
								const ly = p.y - 5;
								const rx = p.x + 5;
								const ry = p.y + 5;
								const toClick = [
									lx > 0 ? lx : 0,
									ly > 0 ? ly : 0,
									rx,
									ry,
									1000
								];
								thisScript.regionClick([toClick]);
								thisScript.keepScreen();
								result = thisScript.findText('.+', 0, thisOperator[1].oper[1], '包含');
							}
						}
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
						}
						toClickRegionTwo && thisScript.regionClick([toClickRegionTwo]);
					}
					if (toClickRegion || toClickRegionTwo) {
						return thisScript.oper({
							id: 306,
							name: '邀请按钮',
							operator: [{
								oper: [thisOperator[1].oper[2]]
							}]
						});
					}
				}
			}
		}

		if (thisScript.oper({
			name: '组队挑战_判断',
			operator: [{ desc: thisOperator[3].desc }]
		}, 0)) {
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
