import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func521 implements IFuncOrigin {
	id = 521;
	name = '庭院进入寮信息与招募';
	desc = '庭院进入寮信息判断与自动招募功能';

	config = [{
		desc: '配置',
		config: [{
			name: 'maxRecruitTimes',
			desc: '最大招募次数（默认100次）',
			type: 'text',
			default: '100',
		}, {
			name: 'scheme_switch_enabled',
			desc: '招募结束后切换方案',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '通用准备退出',
		}]
	}];

	operator: IFuncOperatorOrigin[] = [{
		// 0: 在庭院打开菜单
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[right, 1280, 720, 1168, 592, 1230, 690, 1200]    // 在首页打开菜单
		]
	}, {
		// 1: 点击阴阳寮
		desc: [1280, 720,
			[[center, 560, 608, 0xbc3433],
				[center, 560, 608, 0x8b0e0e],
				[center, 542, 639, 0x7b1515],
				[center, 575, 646, 0xc1b8b0],
				[center, 590, 638, 0xb07970]]
		],
		oper: [
			[center, 1280, 720, 544, 612, 594, 661, 1200]    // 点击阴阳寮
		]
	}, {
		// 2: 点击阴阳寮，另外一种图标
		desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 544, 612, 594, 661, 1200]    // 点击阴阳寮
		]
	}, {
		// 3: 庭院已打开菜单，另另外一种图标
		desc: '庭院已打开菜单_另另外一种图标',
		oper: [
			[center, 1280, 720, 544, 612, 594, 661, 1200]    // 点击阴阳寮
		]
	}, {
		// 4: 判断是否为寮首页
		desc: [
			1280, 720,
			[
				[right, 1193, 615, 0x4f414a],
				[right, 1175, 623, 0xc39273],
				[left, 45, 39, 0xf4e4a3],
				[right, 1227, 668, 0xdfd0cb],
			]
		],
		oper: [
			[right, 1280, 720, 1172, 613, 1227, 668, 1200]    // 点击下方寮信息
		],
		retest: 1000
	}, {
		// 5: 判断是否为寮信息页面
		desc: [
			1280, 720,
			[
				[left, 45, 39, 0xf4e4a3],
				[left, 317, 492, 0xc1babd],
				[left, 315, 521, 0xd62d29],
				[center, 348, 510, 0x761d1c]
			]
		],
		oper: [
			[left, 1280, 720, 251, 75, 335, 133, 1200]    // 点击上方寮信息
		],
		retest: 1000
	}, {
		// 6: 判断是否可点击管理
		desc: [
			1280, 720,
			[
				[left, 166, 522, 0x4b3825],
				[left, 285, 526, 0xc09531],
				[left, 320, 526, 0xfddfe2],
				[left, 296, 228, 0x3e2f28]
			]
		],
		oper: [
			[left, 1280, 720, 353, 612, 423, 649, 1200]    // 点击管理招募
		]
	}, {
		// 7: 判断是否可进入招募
		desc: [
			1280, 720,
			[
				[left, 304, 443, 0x96392d],
				[left, 309, 443, 0xeaa65a],
				[center, 344, 468, 0x2d2822],
				[center, 387, 464, 0x312b23]
			]
		],
		oper: [
			[left, 1280, 720, 328, 371, 465, 411, 1200]    // 点击进入招募
		]
	}, {
		// 8: 判断是否为招募界面
		desc: [
			1280, 720,
			[
				[center, 564, 33, 0xf7f2df],
				[center, 564, 33, 0xf7f2df],
				[right, 595, 35, 0x23180f],
				[right, 720, 39, 0x583716],
				[right, 729, 37, 0xc99e42],
				[center, 401, 619, 0xcaa97f],
				[center, 405, 639, 0xbc9972],
				[center, 417, 609, 0x4c403b],
				[center, 424, 649, 0xe8e6e4]
			]
		],
		oper: [] // 添加空操作数组避免类型错误
	}, {
		// 9: 招募区域1
		desc: [
			1280, 720,
			[
				[center, 564, 33, 0xf7f2df],
				[center, 564, 33, 0xf7f2df],
				[right, 595, 35, 0x23180f],
				[right, 720, 39, 0x583716],
				[right, 729, 37, 0xc99e42],
				[center, 401, 619, 0xcaa97f],
				[center, 405, 639, 0xbc9972],
				[center, 417, 609, 0x4c403b],
				[center, 424, 649, 0xe8e6e4],
				[right, 1119, 173, 0xe1c197]
			]
		],
		oper: [
			[right, 1280, 720, 1104, 160, 1135, 189, 1000] // 点击第一个招募区域
		]
	}, {
		// 10: 招募区域2
		desc: [
			1280, 720,
			[
				[center, 564, 33, 0xf7f2df],
				[center, 564, 33, 0xf7f2df],
				[right, 595, 35, 0x23180f],
				[right, 720, 39, 0x583716],
				[right, 729, 37, 0xc99e42],
				[center, 401, 619, 0xcaa97f],
				[center, 405, 639, 0xbc9972],
				[center, 417, 609, 0x4c403b],
				[center, 424, 649, 0xe8e6e4],
				[right, 1120, 255, 0xe1c197]
			]
		],
		oper: [
			[right, 1280, 720, 1105, 237, 1136, 271, 1000] // 点击第二个招募区域
		]
	}, {
		// 11: 招募区域3
		desc: [
			1280, 720,
			[
				[center, 564, 33, 0xf7f2df],
				[center, 564, 33, 0xf7f2df],
				[right, 595, 35, 0x23180f],
				[right, 720, 39, 0x583716],
				[right, 729, 37, 0xc99e42],
				[center, 401, 619, 0xcaa97f],
				[center, 405, 639, 0xbc9972],
				[center, 417, 609, 0x4c403b],
				[center, 424, 649, 0xe8e6e4],
				[right, 1119, 335, 0xe1c197]
			]
		],
		oper: [
			[right, 1280, 720, 1103, 320, 1136, 353, 1000] // 点击第三个招募区域
		]
	}, {
		// 12: 招募区域4
		desc: [
			1280, 720,
			[
				[center, 564, 33, 0xf7f2df],
				[center, 564, 33, 0xf7f2df],
				[right, 595, 35, 0x23180f],
				[right, 720, 39, 0x583716],
				[right, 729, 37, 0xc99e42],
				[center, 401, 619, 0xcaa97f],
				[center, 405, 639, 0xbc9972],
				[center, 417, 609, 0x4c403b],
				[center, 424, 649, 0xe8e6e4],
				[right, 1119, 415, 0xe1c197]
			]
		],
		oper: [
			[right, 1280, 720, 1103, 404, 1132, 433, 1000] // 点击第四个招募区域
		]
	}, {
		// 13: 招募区域5
		desc: [
			1280, 720,
			[
				[center, 564, 33, 0xf7f2df],
				[center, 564, 33, 0xf7f2df],
				[right, 595, 35, 0x23180f],
				[right, 720, 39, 0x583716],
				[right, 729, 37, 0xc99e42],
				[center, 401, 619, 0xcaa97f],
				[center, 405, 639, 0xbc9972],
				[center, 417, 609, 0x4c403b],
				[center, 424, 649, 0xe8e6e4],
				[right, 1117, 495, 0xe1c197]
			]
		],
		oper: [
			[right, 1280, 720, 1101, 485, 1132, 516, 1000] // 点击第五个招募区域
		]
	}, {
		// 14: 换一批功能
		desc: [
			1280, 720,
			[
				[right, 1110, 170, 0x5eb969],
				[right, 1120, 183, 0x5ab465],
				[right, 1136, 164, 0x62b86c],
				[right, 1139, 171, 0x284122],
			]
		],
		oper: [
			[right, 1280, 720, 999, 615, 1104, 650, 8000] // 点击换一批区域，等待8秒
		]
	}];

	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		console.log('Func521: 开始执行庭院进入寮信息与招募功能');

		const thisconf = thisScript.scheme.config['521'];
		const maxRecruitTimes = parseInt(String(thisconf?.maxRecruitTimes || '100'));

		// 初始化全局计数状态
		const globalAny = thisScript.global as any;

		if (!globalAny.recruitData) {
			globalAny.recruitData = {
				totalRecruitCount: 0, // 总招募次数
				recruitRounds: 0,     // 招募轮次（用于统计）
				lastOperationTime: Date.now() // 添加时间戳
			};
		}

		const recruitData = globalAny.recruitData;

		// 检查是否已达到最大招募次数
		if (recruitData.totalRecruitCount >= maxRecruitTimes) {
			const toLog = `寮招募完成。总招募次数: ${recruitData.totalRecruitCount}次，已达到最大次数限制(${maxRecruitTimes}次)。执行方案: [${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]`;

			thisScript.myToast(toLog);
			// 直接推送，不再检查开关
			thisScript.doPush(thisScript, {
				text: toLog,
				before() {
					thisScript.myToast('正在上传招募数据');
				}
			});
			sleep(2000);

			console.log(toLog);

			// 检查是否切换方案
			if (thisconf.scheme_switch_enabled) {
				const nextScheme = thisconf.next_scheme || '通用准备退出';
				console.log(`切换到下一个方案: ${nextScheme}`);
				thisScript.rerun(nextScheme);
				return true;
			} else {
				thisScript.stop();
				return false;
			}
		}

		// 首先检查是否在招募界面
		console.log('检查是否在招募界面...');
		if (thisScript.oper({
			id: 521,
			name: '检查招募界面',
			operator: [thisOperator[8]]
		})) {
			console.log('检测到招募界面，开始自动招募流程');
			recruitData.lastOperationTime = Date.now();

			// 执行5个招募区域的操作
			let successfulRecruits = 0;
			for (let i = 9; i <= 13; i++) {
				// 每次操作前检查是否达到上限
				if (recruitData.totalRecruitCount >= maxRecruitTimes) {
					break;
				}

				console.log(`检查招募区域 ${i-8}...`);
				if (thisScript.oper({
					id: 521,
					name: `执行招募操作-区域${i - 8}`,
					operator: [thisOperator[i]]
				})) {
					console.log(`招募区域${i - 8}操作完成`);
					successfulRecruits++;

					// 更新计数（使用全局状态）
					recruitData.totalRecruitCount++;
					recruitData.lastOperationTime = Date.now();

					console.log(`当前轮次招募次数: ${successfulRecruits}，总招募次数: ${recruitData.totalRecruitCount}`);

					// 检查是否达到最大招募次数
					if (recruitData.totalRecruitCount >= maxRecruitTimes) {
						const toLog = `寮招募完成。总招募次数: ${recruitData.totalRecruitCount}次，已达到最大次数限制(${maxRecruitTimes}次)。执行方案: [${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]`;

						thisScript.myToast(toLog);
						// 直接推送，不再检查开关
						thisScript.doPush(thisScript, {
							text: toLog,
							before() {
								thisScript.myToast('正在上传招募数据');
							}
						});
						sleep(2000);

						console.log(toLog);

						// 检查是否切换方案
						if (thisconf.scheme_switch_enabled) {
							const nextScheme = thisconf.next_scheme || '通用准备退出';
							console.log(`切换到下一个方案: ${nextScheme}`);
							thisScript.rerun(nextScheme);
							return true;
						} else {
							thisScript.stop();
							return false;
						}
					}

					sleep(300);
				} else {
					console.log(`招募区域${i - 8}操作失败，可能已被招募或条件不匹配`);
				}
			}

			// 执行换一批操作
			if (thisScript.oper({
				id: 521,
				name: '执行换一批操作',
				operator: [thisOperator[14]]
			})) {
				recruitData.recruitRounds++;
				recruitData.lastOperationTime = Date.now();
				console.log(`换一批操作完成，本轮成功招募: ${successfulRecruits}个，总招募次数: ${recruitData.totalRecruitCount}，总轮次: ${recruitData.recruitRounds}轮`);

				// 检查是否达到最大招募次数
				if (recruitData.totalRecruitCount >= maxRecruitTimes) {
					const toLog = `寮招募完成。总招募次数: ${recruitData.totalRecruitCount}次，已达到最大次数限制(${maxRecruitTimes}次)。执行方案: [${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]`;

					thisScript.myToast(toLog);
					// 直接推送，不再检查开关
					thisScript.doPush(thisScript, {
						text: toLog,
						before() {
							thisScript.myToast('正在上传招募数据');
						}
					});
					sleep(2000);

					console.log(toLog);

					// 检查是否切换方案
					if (thisconf.scheme_switch_enabled) {
						const nextScheme = thisconf.next_scheme || '通用准备退出';
						console.log(`切换到下一个方案: ${nextScheme}`);
						thisScript.rerun(nextScheme);
						return true;
					} else {
						thisScript.stop();
						return false;
					}
				}

				return true;
			} else {
				console.log('换一批操作失败，可能按钮不可用或已无次数');
			}
		} else {
			console.log('未检测到招募界面，尝试从庭院进入寮信息流程');
		}

		// 如果不在招募界面，执行原有的庭院进入寮信息流程
		const result = thisScript.oper({
			id: 521,
			name: '庭院进入寮信息',
			operator: [
				thisOperator[0], // 庭院打开菜单
				thisOperator[1], // 点击阴阳寮（第一种图标）
				thisOperator[2], // 点击阴阳寮（第二种图标）
				thisOperator[3], // 点击阴阳寮（第三种图标）
				thisOperator[4], // 判断寮首页并点击寮信息
				thisOperator[5], // 判断寮信息页面并点击上方寮信息
				thisOperator[6], // 判断管理按钮并点击
				thisOperator[7]  // 判断招募入口并点击
			]
		});

		if (result) {
			recruitData.lastOperationTime = Date.now();
			console.log('庭院进入寮信息流程执行成功');
		} else {
			console.log('庭院进入寮信息流程执行失败，可能界面状态不正确');
			// 添加延迟防止过快重试
			sleep(1000);
		}

		return result;
	}
}

export default new Func521();
