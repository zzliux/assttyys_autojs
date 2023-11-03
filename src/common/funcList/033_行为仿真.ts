import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
// const right = 2;

export class Func033 implements IFuncOrigin {
	id = 33;
	name = '行为仿真';
	desc = '启用后战斗中一定概率打开聊天框，若将概率都设置0，则不会打开任何聊天框，并且会自动关闭聊天框';
	config = [{
		desc: '战斗中行为，所有选项互斥，且从上向下顺序判断',
		config: [{
			name: 'only_open_chat_probability',
			desc: '打开公共聊天框并点击未读频道的概率',
			type: 'text',
			default: '0.2',
		}, {
			name: 'open_chat_and_send_emoticon_probability',
			desc: '打开公共聊天框并发送表情的概率',
			type: 'text',
			default: '0.1'
		}, {
			name: 'open_pm_chat_and_probability',
			desc: '打开好友聊天框并随机点击好友列表的概率',
			type: 'text',
			default: '0.2'
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 战斗场景
		desc: '战斗界面',
		oper: [
			[left, 1280, 720, 163, 16, 192, 40, 1000], // 0-公频聊天按钮
			[left, 1280, 720, 95, 18, 122, 44, 5000], // 1-好友聊天按钮
			[left, 1280, 720, 426, 660, 461, 698, 1000], // 2-表情图标位置
			[left, 1280, 720, 63, 386, 563, 552, 1000], // 3-表情图标范围
			[center, 1280, 720, 490, 655, 606, 700, 500], // 4-发送图标位置
			[center, 1280, 720, 140, 200, 422, 572, 500], // 5-好友列表范围
			[left, 1280, 720, 0, 0, 24, 50, 500], // 6-频道按钮大小
		]
	}, {
		// 公频聊天，关闭
		desc: [1280, 720,
			[[left, 48, 39, 0x917057],
				[left, 655, 323, 0x4e3925],
				[left, 532, 659, 0xf4b25f],
				[left, 656, 357, 0xc1af8e],
				[left, 634, 249, 0x625140]]
		],
		oper: [
			[left, 1280, 720, 640, 318, 672, 398, 1000],
		]
	}, {
		// 好友聊天，关闭
		desc: [1280, 720,
			[[center, 707, 65, 0x5d3c1c],
				[center, 908, 148, 0xc7bfb2],
				[center, 1180, 99, 0x65313b],
				[center, 966, 618, 0xd0af87],
				[center, 524, 647, 0xb3a79d]]
		],
		oper: [
			[center, 1280, 720, 1160, 96, 1200, 130, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '行为仿真_战斗场景判断',
			operator: [{
				desc: thisOperator[0].desc
			}]
		})) {
			// 只有在开启一轮新的后才会执行，开启新的一轮通过结束次数进行判断
			if ((thisScript.global.currentChatEnd !== thisScript.runTimes['2'] && thisScript.runTimes['2']) || (
				!thisScript.global.currentChatEnd && !thisScript.runTimes['2']
			)) {
				thisScript.global.currentChatEnd = thisScript.runTimes['2'] || -1;
				const thisconf = thisScript.scheme.config['33'];
				const only_open_chat_probability = +thisconf.only_open_chat_probability;
				const open_chat_and_send_emoticon_probability = +thisconf.open_chat_and_send_emoticon_probability;
				const open_pm_chat_and_probability = +thisconf.open_pm_chat_and_probability;
				if (Math.random() < only_open_chat_probability) {
					// 打开公共聊天框，点击有消息的判断
					thisScript.myToast('打开公共聊天框');
					thisScript.regionClick([thisOperator[0].oper[0]], 1000 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
					sleep(1000);
					// 点击存在红点的频道
					let point = null;
					thisScript.keepScreen(true);
					// eslint-disable-next-line no-cond-assign
					while (point = thisScript.findMultiColor('公频聊天_未读红点')) {
						const oper = [[point.x, point.y, point.x + thisOperator[0].oper[6][2], point.y + thisOperator[0].oper[6][3], thisOperator[0].oper[6][4]]];
						thisScript.regionClick(oper, 1000 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
						thisScript.keepScreen(true);
						sleep(1000);
					}
					return true;
				} else if (Math.random() < open_chat_and_send_emoticon_probability) {
					// 打开公共聊天框并发送表情
					thisScript.myToast('打开公共聊天框并发送表情');
					const oper = [thisOperator[0].oper[0], thisOperator[0].oper[2], thisOperator[0].oper[3], thisOperator[0].oper[4], thisOperator[0].oper[4]];
					thisScript.regionClick(oper, 1000 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
					return true;
				} else if (Math.random() < open_pm_chat_and_probability) {
					// 打开好友聊天框，随便点几下好友列表
					thisScript.myToast('打开好友聊天框');
					const toClick = [thisOperator[0].oper[1]];
					const times = random(2, 4); // 点击次数
					for (let j = 0; j < times; j++) {
						toClick.push(thisOperator[0].oper[5]);
					}
					thisScript.regionClick(toClick, 3000 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
					return true;
				}
				return false;
			}
			sleep(2000);
		} else {
			// 关闭聊天窗口
			return thisScript.oper({
				name: '聊天_战斗场景判断',
				operator: [thisOperator[1], thisOperator[2]]
			});
		}
	}
}