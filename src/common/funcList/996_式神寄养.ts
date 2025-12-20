import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
import { doPush } from '../toolAuto';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func996 implements IFuncOrigin {
	id = 996;
	name = '式神寄养';
	desc = '';
	config = [{
		desc: '',
		config: [{
			name: 'priority',
			desc: '结界优先顺序',
			type: 'list',
			data: ['太鼓6->太鼓5->太鼓4->太鼓3->斗鱼6->斗鱼5->斗鱼4', '太鼓6->斗鱼6->太鼓5->斗鱼5->太鼓4->太鼓3->斗鱼4', '斗鱼6->斗鱼5->斗鱼4->太鼓6->太鼓5->太鼓4->太鼓3', '太鼓6->太鼓5->太鼓4', '斗鱼6->斗鱼5->斗鱼4'],
			default: '太鼓6->太鼓5->太鼓4->太鼓3->斗鱼6->斗鱼5->斗鱼4',
			value: null,
		}, {
			name: 'claimReward',
			desc: '领取寄养奖励',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme',
			desc: '执行完成后的操作',
			type: 'scheme',
			default: '返回庭院',
			value: '返回庭院',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [
		{ //	0 判断_是否为己方结界
			desc: [1280, 720,
				[
					[center, 611, 300, 0x0c0804],
					[center, 913, 305, 0x0c0804],
					[left, 318, 305, 0x0c0804],
					[center, 613, 294, 0xe1cf6b],
					[left, 202, 462, 0x10100c],
				],
			],
			oper: [
				[center, 1280, 720, 599, 301, 626, 389, 1000], //  点击 式神育成
			],
		}, { // 1 点击 式神养成页 空式神寄养
			desc: [
				1280,
				720,
				[
					[right, 1186, 74, 0xd4ccbb],
					[right, 1186, 95, 0x282420],
					[right, 1186, 136, 0xc19b6d],
					[right, 1200, 106, 0xbab19c],
					[center, 756, 186, 0xac9b79],
				],
			],
			oper: [[right, 1280, 720, 1142, 50, 1226, 129, 1200]], //  点击 空式神寄养
		}, { // 2 检测是否为式神寄养列表
			desc: [1280, 720,
				[
					[left, 188, 172, 0x352721],
					[center, 555, 138, 0xcbb59e],
					[center, 880, 562, 0xf4b25f],
					[center, 705, 347, 0xccb59e]
				]
			],
			oper: [
				[left, 1280, 720, 182, 182, 197, 195, 1200],		// 刷新的滑动起点
				[left, 1280, 720, 175, 547, 195, 555, 1200],		// 刷新的滑动终点
				[center, 1280, 720, 496, 536, 514, 555, 1000], // 滑动界面起点
				[center, 1280, 720, 482, 122, 504, 142, 1000], // 滑动界面终点
				[center, 1280, 720, 23, 33, 58, 63, 1000], // 点击 返回
				[center, 1280, 720, 795, 538, 967, 591, 3000],    // 进入结界按钮
			],
		}, { // 3 是否为列表顶部
			desc:
				[1280, 720,
					[
						[left, 188, 172, 0x352721],
						[center, 555, 138, 0xcbb59e],
						[center, 880, 562, 0xf4b25f],
						[center, 705, 347, 0xccb59e],
						[left, 186, 189, 0xbe9c69]
					]
				],
		}, { // 4 是否为好友列表底部
			desc:
				[1280, 720,
					[
						[left, 188, 172, 0x352721],
						[center, 555, 138, 0xcbb59e],
						[center, 880, 562, 0xf4b25f],
						[center, 705, 347, 0xccb59e],
						[left, 186, 522, 0xbe9c69],
						[left, 271, 146, 0xe9c89e]
					]
				],
			oper: [
				[center, 1280, 720, 344, 101, 440, 152, 1200],    // 点击跨区页签
			]
		}, { // 5 是否为跨区列表底部
			desc:
				[1280, 720,
					[
						[left, 188, 172, 0x352721],
						[center, 555, 138, 0xcbb59e],
						[center, 880, 562, 0xf4b25f],
						[center, 705, 347, 0xccb59e],
						[left, 186, 522, 0xbe9c69],
						[left, 271, 146, 0xa46c4d]
					]
				],
			oper: [
				[center, 1280, 720, 222, 95, 320, 152, 1200],     // 点击好友页签
			]
		}, { // 6 是否为好友列表
			desc:
				[1280, 720,
					[
						[left, 188, 172, 0x352721],
						[center, 555, 138, 0xcbb59e],
						[center, 880, 562, 0xf4b25f],
						[center, 705, 347, 0xccb59e],
						[left, 271, 146, 0xe9c89e]
					]
				],
		}, { // 7 是否为跨区列表
			desc:
				[1280, 720,
					[
						[left, 188, 172, 0x352721],
						[center, 555, 138, 0xcbb59e],
						[center, 880, 562, 0xf4b25f],
						[center, 705, 347, 0xccb59e],
						[left, 271, 146, 0xa46c4d]
					]
				],
		}, { // 8 好友寄养字样_一个坑位
			desc: [1280, 720,
				[
					[right, 1072, 57, 0xa5361e],
					[right, 1087, 55, 0xa8371f],
					[right, 1070, 75, 0xe3e1e0],
					[right, 1081, 74, 0xfdfdfd],
					[right, 1080, 62, 0xfafafa],
				]
			],
			oper: [
				[center, 1280, 720, 40, 636, 90, 670, 700],
				[center, 1280, 720, 126, 303, 177, 343, 1000],
				[center, 1280, 720, 198, 556, 229, 588, 1000], // 点击排位第一的N卡
			],
		}, { // 9 好友寄养字样_两个坑位
			desc: [1280, 720,
				[
					[right, 913, 74, 0xfff6f7],
					[right, 910, 63, 0xfffbfd],
					[right, 908, 117, 0xa6371f],
					[right, 916, 108, 0xc9c6c4],
					[right, 913, 142, 0xdad9d7],
				]
			],
			oper: [
				[center, 1280, 720, 40, 636, 90, 670, 700],
				[center, 1280, 720, 126, 303, 177, 343, 1000],
				[center, 1280, 720, 198, 556, 229, 588, 1000], // 点击排位第一的N卡
			],
		}, { // 10 确认寄养所选式神弹窗
			desc: [1280, 720,
				[
					[center, 527, 279, 0xcbb59e],
					[center, 489, 159, 0x9e866e],
					[center, 689, 544, 0xf4b25f],
					[center, 583, 546, 0xdf6851],
					[left, 35, 46, 0x616467],
				],
			],
			oper: [
				[center, 1280, 720, 672, 514, 798, 572, 2000], // 点击确认
			],
		}, { // 11 N卡全满级
			desc: [1280, 720,
				[
					[left, 161, 501, 0x2d170b],
					[left, 171, 502, 0xfcc62d],
					[left, 179, 506, 0xeec73e],
					[left, 173, 495, 0xecaf16],
					[left, 172, 511, 0x362015],
				]
			],
			oper: [
				[center, 1280, 720, 40, 636, 90, 670, 700],
				[center, 1280, 720, 40, 636, 90, 670, 700],
				[center, 1280, 720, 198, 556, 229, 588, 1000], // 点击排位第一的白蛋
			],
		}, { // 12 已寄养
			desc: [1280, 720,
				[
					[center, 355, 661, 0x4c3333],
					[center, 502, 658, 0x5c4041],
					[right, 728, 659, 0x583d3b],
					[right, 930, 656, 0x3a2725],
					[left, 33, 48, 0xf0f5fc],
				]
			],
			oper: [
				[center, 1280, 720, 24, 31, 59, 60, 1000],
				[center, 1280, 720, 24, 31, 59, 60, 1000],
			]
		}, { // 13 领取寄养奖励
			desc: [1280, 720,
				[
					[center, 612, 139, 0x12100c],
					[center, 591, 167, 0xfecb0d],
					[center, 610, 169, 0xffd607],
					[center, 627, 168, 0xffd109],
					[center, 613, 193, 0x12100c],
				]
			],
			oper: [
				[center, 1280, 720, 593, 146, 637, 188, 1000],
			]
		}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['996'];
		if (thisconf.claimReward && thisScript.oper({
			id: 996,
			name: '领取寄养奖励',
			operator: [thisOperator[13]],
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 996,
			name: '检测是否为式神寄养列表',
			operator: [thisOperator[0], thisOperator[1]],
		})) {
			return true;
		}
		if (!thisScript.global.jy_enchantment_index) {
			if (thisScript.oper({
				id: 996,
				name: '当前为列表顶部,拖拽至列表最底部',
				operator: [{ desc: thisOperator[3].desc }]
			})) {
				thisScript.regionSwipe(thisOperator[2].oper[0], thisOperator[2].oper[1], [700, 800], 1000);
				return true;
			}
			if (thisScript.oper({
				id: 996,
				name: '当前为好友列表底部,切换至跨区列表',
				operator: [thisOperator[4]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 996,
				name: '当前为跨区列表底部,切换至好友列表,结束刷新操作',
				operator: [thisOperator[5]]
			})) {
				thisScript.global.jy_enchantment_index = 1;
				sleep(1000);
				return true;
			}
		}
		if (thisScript.oper({
			id: 996,
			name: '完成退出',
			operator: [thisOperator[12]],
		})) {
			console.log('寄养完成');
			thisScript.doPush(thisScript, { text: '寄养完成', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.rerun(thisconf.next_scheme)
			sleep(3000);
			return true;
		}
		if (thisScript.oper({
			id: 996,
			name: 'N卡已满级',
			operator: [thisOperator[11]],
		})) {
			doPush(thisScript, { text: '寄养的N卡已满级' });
			return true;
		}
		if (thisScript.oper({
			id: 996,
			name: '寄养N卡',
			operator: [thisOperator[8], thisOperator[9], thisOperator[10]],
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 996,
			name: '筛选结界卡',
			operator: [{ desc: thisOperator[2].desc }]
		})) {
			const priority = String(thisconf.priority).split('->');
			const multiColorKey = priority.map(item => `结界卡_${item}星`);
			const key = multiColorKey[thisScript.global.jy_enchantment_index - 1];
			if (key === undefined) {
				thisScript.superGlobal.runTime = 300; // 5分钟后再试
				console.log('找不到指定结界卡，5分钟后再试');
				thisScript.regionClick([thisOperator[2].oper[4]]); // 关闭
				thisScript.regionClick([thisOperator[2].oper[4]]); // 关闭
				thisScript.doPush(thisScript, { text: '找不到指定结界卡，5分钟后再试', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.rerun(thisconf.next_scheme);
				sleep(3000);
				return true;
			}
			console.log(`查找${key}结界`);
			const point = thisScript.findMultiColor(key);
			if (point) {
				const oper = [[
					point.x - 20,
					point.y - 20,
					point.x,
					point.y,
					1200
				]];
				thisScript.regionClick(oper);
				return thisScript.oper({
					id: 996,
					name: '点击进入结界按钮',
					operator: [{
						desc: thisOperator[2].desc,
						oper: [thisOperator[2].oper[5]]
					}]
				});
			} else {
				console.log(`查找${key}结界失败`);
				const card_empty = thisScript.findMultiColor('结界卡_无');
				if (card_empty) {
					if (thisScript.oper({
						id: 996,
						name: '切换到跨区列表',
						operator: [{
							desc: thisOperator[6].desc,
							oper: thisOperator[4].oper
						}]
					})) {
						return true;
					} else if (thisScript.oper({
						id: 996,
						name: '切换到好友列表',
						operator: [{
							desc: thisOperator[7].desc,
							oper: thisOperator[5].oper
						}]
					})) {
						thisScript.global.jy_enchantment_index++;
						return true;
					}
				} else {
					thisScript.regionSwipe(thisOperator[2].oper[2], thisOperator[2].oper[3], [1000, 1100], 1000);
					return true;
				}
			}
		}
	}
}