import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperator, IFuncOperatorOrigin } from '@/interface/IFunc';

// const normal = -1; //定义常量
// const left = 0;
const center = 1;
const right = 2;

export class Func003 implements IFuncOrigin {
	id = 3;
	name = '悬赏协作';
	config = [{
		desc: '',
		config: [{
			name: 'type',
			desc: '操作',
			type: 'list',
			data: ['关闭', '接受', '拒绝'],
			default: '关闭',
		}, {
			name: 'switch',
			desc: '仅接受勾协',
			type: 'switch',
			default: false,
		}]
	}, {
		desc: '邀约协作（活动）',
		config: [{
			name: 'yytype',
			desc: '操作',
			type: 'list',
			data: ['关闭', '接受', '拒绝'],
			default: '关闭'
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		desc: [
			1280, 720,
			[
				[center, 519, 139, 0xb29375],
				[center, 727, 171, 0xb29375],
				[center, 855, 518, 0xdc6958],
				[center, 849, 422, 0x53ae5b],
				[center, 783, 124, 0xe8d4cf],
				[center, 734, 141, 0xb29176],
				[center, 509, 136, 0xb39276],
				[center, 844, 396, 0x2e1e22],
				[center, 854, 543, 0x2f2025],
			]
		],
		oper: [
			[center, 1280, 720, 768, 109, 796, 138, 1000], // 关闭
			[center, 1280, 720, 833, 397, 874, 438, 1000], // 接受
			[center, 1280, 720, 835, 500, 875, 538, 1000], // 拒绝
		]
	}, {
		desc: [1280, 720,
			[[center, 519, 139, 0xb29375],
				[center, 727, 171, 0xb29375],
				[center, 855, 518, 0xdc6958],
				[center, 849, 422, 0x53ae5b],
				[center, 572, 473, 0x9d7838],
				[center, 618, 482, 0xdba83a],
				[center, 668, 510, 0x7746a8],
				[center, 694, 490, 0xef492e]]
		]
	}, { // 2 判断_阴阳寮成就页 这些乱七八糟的弹窗统一找个地方放吧，烦死了，暂时先放着:)
		desc:
			[
				1280, 720,
				[
					[right, 1055, 230, 0x997242],
					[right, 1072, 462, 0xecd7b9],
					[center, 347, 490, 0xb8a281],
					[center, 357, 240, 0xf5ebd5],
					[center, 830, 150, 0xefe4d0],
					[center, 697, 172, 0x805054],
					[center, 827, 230, 0xb58a55],
				]
			],
		oper: [
			[center, 1280, 720, 357, 535, 1045, 662, 1200]	//	点击空白处
		]
	}, { // 3 呱太弹窗
		desc: [1280, 720,
			[[center, 568, 225, 0xb7b052],
				[center, 733, 228, 0x4d4da2],
				[center, 756, 236, 0xc0c45e],
				[center, 879, 323, 0x690707],
				[center, 690, 422, 0xd3ae72]]
		],
		oper: [
			[center, 1280, 720, 517, 521, 841, 689, 1000],
			[center, 1280, 720, 509, 650, 912, 716, 1000]
		]
	}, { // 4 其他设备登录(被顶掉)
		desc: [
			1280, 720,
			[
				[center, 437, 258, 0x624333],
				[center, 841, 257, 0x664535],
				[center, 457, 289, 0xcbb59c],
				[center, 819, 428, 0xcbb59c],
				[center, 484, 329, 0x584f45],
				[center, 733, 322, 0x2b2723],
				[center, 581, 379, 0x963a2d],
				[center, 700, 428, 0x973c2e],
			]
		],
		oper: [
			[center, 1280, 720, 584, 382, 700, 429, 1000],
		]
	}, { // 5 邀约协作
		desc: [
			1280, 720,
			[
				[center, 420, 202, 0xd9bd97],
				[center, 434, 158, 0xbc8a4d],
				[center, 571, 149, 0xd7c3a6],
				[center, 791, 146, 0xffeca2],
				[center, 778, 120, 0x8c4a3a],
				[center, 854, 438, 0x57b260],
				[center, 857, 529, 0xdd705f],
			]
		],
		oper: [
			[center, 1280, 720, 762, 118, 796, 151, 1000], // 关闭
			[center, 1280, 720, 836, 410, 880, 457, 1000], // 接受
			[center, 1280, 720, 834, 510, 880, 556, 1000], // 拒绝
		]
	}];

	/**
	 *
	 * @param {*} thisScript script.js 这样可以拿到里面的对象用来做点击等操作
	 * @param {*} thisOperator 转换过适合当前分辨率的operator
	 */
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['3']; // 获取配置
		if (thisScript.oper({
			id: 3,
			name: '清除垃圾弹窗',
			operator: [thisOperator[2], thisOperator[3]]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 3,
			name: '意外情况,停止脚本',
			operator: [thisOperator[4]]
		})) {
			thisScript.doPush(thisScript, { text: '意外情况已停止，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
			sleep(3000);
			return true;
		}
		if (thisconf.switch && thisconf.type === '接受' && thisScript.oper({
			id: 3,
			name: '悬赏协作',
			operator: [{
				desc: [thisOperator[0].desc[0] as [number, number, number, number]]
			}]
		})) {
			if (thisScript.findMultiColor('勾协判定')) {
				thisScript.oper({
					id: 3,
					name: '悬赏协作_' + thisconf.type + '_勾协',
					operator: [{
						oper: [thisOperator[0].oper[1]]
					}]
				})
				thisScript.doPush(thisScript, { text: '接受到勾协，请确认是否影响到主体方案', before() { thisScript.myToast('正在上传数据'); } });
				return true;
			} else if (thisScript.oper({
				name: '悬赏协作_' + thisconf.type + '_非勾协关闭',
				operator: [{
					desc: thisOperator[0].desc,
					oper: [thisOperator[0].oper[0]]
				}]
			}, 0)) {
				return true;
			}
		} else {
			return thisScript.oper({
				id: 3,
				name: '悬赏协作_' + thisconf.type,
				operator: [{
					desc: thisOperator[0].desc,
					oper: [thisOperator[0].oper[{
						'关闭': 0,
						'接受': 1,
						'拒绝': 2
					}[thisconf.type as string]]]
				}]
			}) || thisScript.oper({
				id: 3,
				name: '邀约协作_' + (thisconf.yytype || '关闭'),
				operator: [{
					desc: thisOperator[5].desc,
					oper: [thisOperator[5].oper[{
						'关闭': 0,
						'接受': 1,
						'拒绝': 2
					}[(thisconf.yytype || '关闭') as string]]]
				}]
			});
		}
	}
}


export default new Func003();
