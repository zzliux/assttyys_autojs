import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func994 implements InterfaceFuncOrigin {
	id = 994;
	name = '寄养好友列表_翻页';
	desc = '寄养好友列表操作，应排在[996,997]后';
	config = [{
		desc: '',
		config: [{
			name: 'count',
			desc: '连续执行x次后执行完成',
			type: 'list',
			data: ['2', '3', '4', '5', '6', '7', '8', '9'],
			default: '3',
			value: null,
		}, {
			name: 'afterCountOper',
			desc: '执行完成的操作',
			type: 'list',
			data: ['停止脚本', '切换方案'],
			default: '停止脚本',
			value: null,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '通用准备退出',
		}]
	}];
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: 	// 寄养界面_判断
			[1280, 720,
				[[left, 186, 171, 0x30221f],
				[center, 555, 138, 0xcbb59e],
				[center, 880, 562, 0xf4b25f],
				[center, 705, 347, 0xccb59e]]
			],
		oper: [
			[center, 1280, 720, 221, 558, 611, 590, 0],	// 滑动起点
			[center, 1280, 720, 225, 450, 608, 455, 0],	// 滑动终点
			// [center, 1280, 720, 1188,115, 1225,151, 500],
		]
	}, {
		desc:	// 是否为好友列表底部
			[1280, 720,
				[[left, 186, 171, 0x30221f],
				[center, 555, 138, 0xcbb59e],
				[center, 880, 562, 0xf4b25f],
				[center, 705, 347, 0xccb59e],
				[left, 186, 522, 0xbe9c69],
				[left, 271, 146, 0xe9c89e]]
			],
		oper: [
			[center, 1280, 720, 344, 101, 440, 152, 5000],  // 点击跨区页签
		]
	}, {
		desc:	// 是否为跨区列表底部
			[1280, 720,
				[[left, 186, 171, 0x30221f],
				[center, 555, 138, 0xcbb59e],
				[center, 880, 562, 0xf4b25f],
				[center, 705, 347, 0xccb59e],
				[left, 186, 522, 0xbe9c69],
				[left, 271, 146, 0xa46c4d]]
			],
		oper: [
			[center, 1280, 720, 222, 100, 321, 149, 5000],  // 点击好友页签
		]
	}, {
		desc:	// 是否为好友列表
			[1280, 720,
				[[left, 186, 171, 0x30221f],
				[center, 555, 138, 0xcbb59e],
				[center, 880, 562, 0xf4b25f],
				[center, 705, 347, 0xccb59e],
				[left, 271, 146, 0xe9c89e]]
			],
	},	{
		desc:	// 是否为跨区列表
			[1280, 720,
				[[left, 186, 171, 0x30221f],
				[center, 555, 138, 0xcbb59e],
				[center, 880, 562, 0xf4b25f],
				[center, 705, 347, 0xccb59e],
				[left, 271, 146, 0xa46c4d]]
			],
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		let thisConf = thisScript.scheme.config['994'];
		let defaultCount = +thisConf.count * 2;	// 共有两个页签
		if (thisScript.oper({
			id: 994,
			name: '寄养界面_判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			thisScript.helperBridge.regionBezierSwipe(thisOperator[0].oper[0], thisOperator[0].oper[1], [200, 250], 200);
			if (!thisScript.global.jy_list_swipe_times) {
				thisScript.global.jy_list_swipe_times = 0;
			}

			const findOccupyColor = '式神寄养_全列表被占用';
			const findEmptyColor = '式神寄养_全列表空结界卡';

			let occupyPoint = thisScript.findMultiColor(findOccupyColor);
			let emptyPoint = thisScript.findMultiColor(findEmptyColor);

			if (occupyPoint || emptyPoint) {
				console.log(`全列表被占用: ${occupyPoint}`, `全列表空结界卡: ${emptyPoint}`);
				console.log('切换页签');
				thisScript.global.jy_list_swipe_times++;
				thisScript.oper({
					id: 994,
					name: '检测_好友列表',
					operator: [{
						desc: thisOperator[3].desc,
						oper: thisOperator[1].oper
					}]
				})

				if (thisScript.oper({
					id: 994,
					name: '检测_跨区好友列表',
					operator: [{
						desc: thisOperator[4].desc,
						oper: thisOperator[2].oper
					}]
				})) {
					thisScript.global.jy_enchantment_index++;
				}

				return true;
			}

			if (thisScript.oper({
				id: 994,
				name: '好友列表底部_判断',
				operator: [{
					desc: thisOperator[1].desc
				}]
			})) {
				thisScript.global.jy_list_swipe_times++;
				return (thisScript.oper({
					id: 994,
					name: '点击跨区页签',
					operator: [{
						oper: thisOperator[1].oper
					}]
				}));
			}

			if (thisScript.oper({
				id: 994,
				name: '跨区列表底部_判断',
				operator: [{
					desc: thisOperator[2].desc
				}]
			})) {
				thisScript.global.jy_list_swipe_times++;
				return (thisScript.oper({
					id: 994,
					name: '点击好友页签',
					operator: [{
						oper: thisOperator[2].oper
					}]
				}));
			}

			if (thisScript.global.jy_list_swipe_times >= defaultCount) {
				thisScript.global.jy_list_swipe_times = 0;
				if ('停止脚本' === thisConf.afterCountOper) {
					thisScript.doOspPush(thisScript, { text: '脚本已停止，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
				} else if ('切换方案' === thisConf.afterCountOper) {
					// let oper = thisOperator[0].oper[2];
					// thisScript.helperBridge.regionClick([oper], 500 + thisScript.scheme.commonConfig.afterClickDelayRandom);
					thisScript.setCurrentScheme(thisConf.next_scheme as string);
					thisScript.myToast(`切换方案为[${thisConf.next_scheme}]`);
					thisScript.rerun();
				}
			}
			return true;
		}
		return false;
	}
}