import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
// const right = 2;

export class Func997 implements IFuncOrigin {
	id = 997;
	name = '刷新式神寄养列表';
	desc = '刷新式神寄养列表_让其重新排序';
	config = [{
		desc: '',
		config: [{
			name: 'priority',
			desc: '结界优先顺序',
			type: 'list',
			data: ['太鼓6->太鼓5->太鼓4->太鼓3->斗鱼6->斗鱼5->斗鱼4', '太鼓6->斗鱼6->太鼓5->斗鱼5->太鼓4->太鼓3->斗鱼4', '斗鱼6->斗鱼5->斗鱼4->太鼓6->太鼓5->太鼓4->太鼓3', '太鼓6->太鼓5->太鼓4', '斗鱼6->斗鱼5->斗鱼4'],
			default: '太鼓6->太鼓5->太鼓4->太鼓3->斗鱼6->斗鱼5->斗鱼4',
			value: null,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [
		{
			// 检测是否微式神寄养列表
			desc: [1280, 720,
				[[left, 186, 171, 0x30221f],
					[center, 555, 138, 0xcbb59e],
					[center, 880, 562, 0xf4b25f],
					[center, 705, 347, 0xccb59e]]
			],
			oper: [
				[left, 1280, 720, 182, 182, 197, 195, 1200],		// 滑动起点
				[left, 1280, 720, 175, 547, 195, 555, 1200],		// 滑动终点
			],
		},
		{
			oper: [
				[center, 1280, 720, 795, 538, 967, 591, 3000],    // 进入结界按钮
			]
		},
		{
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
				[center, 1280, 720, 222, 95, 320, 152, 1200],     // 点击好友页签
			]
		},
		{
			desc:	// 是否为列表顶部
				[1280, 720,
					[[left, 186, 171, 0x30221f],
						[center, 555, 138, 0xcbb59e],
						[center, 880, 562, 0xf4b25f],
						[center, 705, 347, 0xccb59e],
						[left, 186, 189, 0xbe9c69]]
				],
		},
		{
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
				[center, 1280, 720, 344, 101, 440, 152, 1200],    // 点击跨区页签
			]
		}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['997']; // 获取配置
		const priority = String(thisconf.priority).split('->');

		const multiColorKey = priority.map(item => `结界卡_${item}星`);

		if (thisScript.oper({
			id: 997,
			name: '检测是否为式神寄养列表',
			operator: [{
				desc: thisOperator[0].desc,
			}]
		})) {

			if (thisScript.global.jy_enchantment_index > multiColorKey.length) {
				thisScript.global.jy_enchantment_index = 0;
				console.log('找不到指定结界卡，休眠15分钟后继续');
				sleep(60000 * 15);
			}

			if (!thisScript.global.jy_enchantment_index) {
				console.log('刷新式神寄养列表');

				if (thisScript.oper({
					id: 997,
					name: '当前为列表顶部,拖拽至列表最底部',
					operator: [{
						desc: thisOperator[3].desc,
					}]
				})) {
					thisScript.regionBezierSwipe(thisOperator[0].oper[0], thisOperator[0].oper[1], [1200, 1500], 0, 200);
				}

				thisScript.oper({
					id: 997,
					name: '当前为好友列表底部,切换至跨区列表',
					operator: [{
						desc: thisOperator[4].desc,
						oper: thisOperator[4].oper
					}]
				});

				if (thisScript.oper({
					id: 997,
					name: '当前为跨区列表底部,切换至好友列表,结束刷新操作',
					operator: [{
						desc: thisOperator[2].desc,
						oper: thisOperator[2].oper
					}]
				})) {
					thisScript.global.jy_enchantment_index = 1;
					sleep(5000);
				}

				return true;
			}

			const key = multiColorKey[thisScript.global.jy_enchantment_index - 1];
			console.log(`查找${key}结界`);
			sleep(2000);
			thisScript.keepScreen(true);
			const point = thisScript.findMultiColor(key);

			if (point) {
				console.log(`查找${key}结界成功`);
				const oper = [[
					point.x - 20,
					point.y - 20,
					point.x,
					point.y,
					1200
				]];
				thisScript.regionClick(oper);


				return thisScript.oper({
					id: 997,
					name: '点击进入结界按钮',
					operator: [{
						desc: thisOperator[0].desc,
						oper: thisOperator[1].oper
					}]
				});
			} else {
				console.log(`查找${key}结界失败`);
				if (thisScript.oper({
					id: 997,
					name: '是否为跨区结界列表底部',
					operator: [{
						desc: thisOperator[2].desc
					}]
				})) {
					if (thisScript.global.jy_enchantment_index === multiColorKey.length) {
						thisScript.global.jy_enchantment_index = 0;
						console.log('找不到指定结界卡，休眠15分钟后继续');
						sleep(60000 * 15);
					} else {
						thisScript.global.jy_enchantment_index++;
						thisScript.global.jy_list_swipe_times = 0;
					}
				}
			}

			return false;
		}
		return false;
	}
}
