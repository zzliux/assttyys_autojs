import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// import { contactListProps } from 'vant';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func027 implements IFuncOrigin {
	id = 27;
	name = '组队_创建或匹配';
	desc = '创建指定副本组队或直接匹配';
	config = [
		{
			desc: '选择组队的副本类型层数',
			config: [
				{
					name: 'mission',
					desc: '选择副本',
					type: 'list',
					data: ['御魂', '探索（困难）', '永生之海', '日轮之陨', '特殊活动', '不做动作'],
					default: '御魂',
				},
				{
					name: 'level',
					desc: '选择御魂层数',
					type: 'list',
					data: ['魂十', '魂土', '魂王'],
					default: '魂土',
				}
			],
		},
	];
	operator: IFuncOperatorOrigin[] = [{ // 0 妖气自动匹配中的 图像
		desc: [
			1280, 720,
			[
				[center, 373, 14, 0x260904],
				[center, 730, 5, 0x2b0e17],
				[center, 760, 98, 0x290a04],
				[center, 411, 97, 0x300c13],
				[center, 751, 43, 0xd6c5a0],
				[center, 771, 61, 0xd7c3a2],
			]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 5000] // 匹配中等5秒
		]
	}, {
		// 1 庭院未打开菜单
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[right, 1280, 720, 1168, 592, 1230, 690, 1200]
		]
	}, { // 2 庭院已打开菜单
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[left, 1280, 720, 427, 619, 486, 683, 1000]
		]
	}, {
		// 3 庭院已打开菜单，另外一种图标
		desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
		oper: [
			[left, 1280, 720, 427, 619, 486, 683, 1000]
		]
	}, { // 4 组队大厅界面
		desc: '组队大厅',
		oper: [
			[center, 1280, 720, 993, 605, 1151, 649, 1000], // 创建队伍
		]
	}, { // 5 组队大厅界面(包含自动匹配按钮)
		desc: '组队大厅_自动匹配',
		oper: [
			[center, 1280, 720, 702, 601, 865, 650, 1000] // 组队界面 自动匹配
		]
	}, { // 6 组队大厅_创建队伍（不带选择副本类型）
		desc: '组队大厅_创建队伍',
		oper: [
			[center, 1280, 720, 404, 414, 430, 438, 1000], // 经验妖怪界面_不公开
			[center, 1280, 720, 536, 490, 739, 534, 1000], // 经验妖怪界面_创建
		]
	}, { // 7 创建队伍
		desc: '组队大厅_选择副本类型_创建队伍',
		oper: [
			[center, 1280, 720, 754, 499, 778, 521, 1000], // 不公开
			[center, 1280, 720, 818, 567, 932, 612, 1000]// 创建
		]
	}, { // 8 返回
		oper: [
			[center, 1280, 720, 31, 20, 73, 61, 1000]// 返回
		]
	}, { // 9 自动准备
		desc: [1280, 720,
			[
				[center, 360, 21, 0x62522c],
				[center, 327, 15, 0x2d0a03],
				[center, 625, 59, 0xf0a664],
				[right, 645, 61, 0xf2af6f],
			]
		],
		oper: [
			[center, 1280, 720, 624, 43, 744, 71, 1000],
		]
	}, { // 10 妖气f封印自动匹配中的 图像
		desc: [1280, 720,
			[
				[center, 373, 14, 0x9e8163],
				[center, 730, 5, 0x2b0e17],
				[center, 760, 98, 0x290a04],
				[center, 411, 97, 0x300c13],
				[right, 781, 55, 0x9e8e78],
				[right, 796, 54, 0xd6c4a1],
				[center, 629, 58, 0x3a2a1a],
				[right, 657, 55, 0x312316],
			]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 5000] // 匹配中等5秒
		]
	}, { // 11 划动
		oper: [
			[center, 1280, 720, 137, 126, 377, 154, 1000], // 副本上划起始
			[center, 1280, 720, 134, 632, 377, 660, 1000], // 副本上划结束
			[center, 1280, 720, 337, 645, 355, 657, 1000], // 永生划动
			[center, 1280, 720, 346, 567, 360, 580, 1000], // 永生划动
			[center, 1280, 720, 393, 533, 586, 564, 1000], // 层数下划起始
			[center, 1280, 720, 398, 183, 584, 210, 1000], // 层数下划结束
		]
	}, { // 12 顶部的全部字样
		desc: [1280, 720,
			[
				[left, 231, 155, 0x2c2924],
				[left, 238, 161, 0x282521],
				[left, 248, 155, 0x272420],
				[left, 275, 154, 0x443e38],
			]
		],
		oper: [
			[center, 1280, 720, 179, 576, 331, 612, 700], // 御魂
			[center, 1280, 720, 164, 207, 349, 249, 700], // 探索
			[center, 1280, 720, 185, 648, 343, 663, 700], // 日轮
			[center, 1280, 720, 429, 402, 551, 441, 700], // 日轮三层
			[center, 1280, 720, 425, 468, 551, 508, 700], // 永生四层
			[center, 1280, 720, 407, 376, 569, 419, 700], // 魂十
			[center, 1280, 720, 413, 450, 574, 485, 700], // 魂土
			[center, 1280, 720, 414, 516, 571, 553, 700], // 魂王
		]
	}, { // 13 第二栏的全部字样
		desc: [1280, 720,
			[
				[left, 237, 219, 0x2c2924],
				[left, 230, 229, 0x272420],
				[left, 238, 229, 0x272420],
				[left, 275, 228, 0x443f38],
			]
		],
		oper: [
			[center, 1280, 720, 255, 230, 260, 235, 1000], // 副本上划起始
			[center, 1280, 720, 255, 155, 260, 160, 1000], // 副本上划结束
		]
	}]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['27'];
		if (!thisScript.global.first_create_team && thisScript.oper({
			name: '组队置顶',
			operator: [{ desc: thisOperator[12].desc }, { desc: thisOperator[13].desc }]
		})) {
			if (thisScript.oper({
				name: '组队置顶',
				operator: [{ desc: thisOperator[13].desc }]
			})) {
				thisScript.regionBezierSwipe(thisOperator[13].oper[0], thisOperator[13].oper[1], [2000, 2050], 500);
			}
			switch (thisConf.mission) {
				case '御魂':
					thisScript.regionClick([thisOperator[12].oper[0]]);
					thisScript.regionBezierSwipe(thisOperator[11].oper[4], thisOperator[11].oper[5], [200, 250], 500);
					switch (thisConf.level) {
						case '魂十':
							thisScript.regionClick([thisOperator[12].oper[5]]);
							break;
						case '魂土':
							thisScript.regionClick([thisOperator[12].oper[6]]);
							break;
						case '魂王':
							thisScript.regionClick([thisOperator[12].oper[7]]);
							break;
					}
					break;
				case '探索（困难）':
					thisScript.regionClick([thisOperator[12].oper[1]]);
					break;
				case '日轮之陨':
					thisScript.regionClick([thisOperator[12].oper[2]]);
					thisScript.regionClick([thisOperator[12].oper[3]]);
					break;
				case '永生之海':
					thisScript.regionBezierSwipe(thisOperator[11].oper[2], thisOperator[11].oper[3], [1200, 1250], 500);
					thisScript.regionClick([thisOperator[12].oper[2]]);
					thisScript.regionClick([thisOperator[12].oper[4]]);
					break;
				case '不做动作':
					break;
			}
			thisScript.global.first_create_team = true;
		}

		if (!thisScript.global.first_create_team && thisScript.oper({
			name: '组队界面',
			operator: [{ desc: thisOperator[4].desc }]
		})) {
			thisScript.regionBezierSwipe(thisOperator[11].oper[0], thisOperator[11].oper[1], [200, 250], 500);
			return true;
		}
		let curCnt = 0;
		const maxCount = 3;
		while (thisScript.oper({
			name: '组队_创建',
			operator: [thisOperator[7]]
		})) {
			thisScript.global.team_up_Frist = true;
			curCnt++;
			thisScript.keepScreen();
			if (curCnt >= maxCount) {
				thisScript.regionClick([thisOperator[8].oper[0]]);
				thisScript.doPush(thisScript, { text: '体力不够创房，已停止。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				sleep(2000);
				return true;
			}
		}
		if (thisScript.oper({
			id: 27,
			name: '组队_匹配',
			operator: [
				thisOperator[10], thisOperator[1], thisOperator[2], thisOperator[9], thisOperator[3],
				thisOperator[0], thisOperator[4], thisOperator[6], thisOperator[5]
			]
		})) {
			return true;
		}
		return false;
	}
}
