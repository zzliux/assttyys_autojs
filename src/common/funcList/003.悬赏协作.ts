import { Script } from "@/system/script";
import { InterfaceFuncOrigin, InterfaceFuncOperator, InterfaceFuncOperatorOrigin } from "@/interface/InterfaceFunc";

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func003 implements InterfaceFuncOrigin {
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
			value: null,
		}, {
			name: 'switch',
			desc: '仅接受勾协',
			type: 'switch',
			default: 'true',
			value: null,
		}]
	}];
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[[center, 519, 139, 0xb29375],
			[center, 727, 171, 0xb29375],
			[center, 855, 518, 0xdc6958],
			[center, 849, 422, 0x53ae5b]]
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
	}];

	/**
	 * 
	 * @param {*} thisScript script.js 这样可以拿到里面的对象用来做点击等操作
	 * @param {*} thisOperator 转换过适合当前分辨率的operator
	 */
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		let thisconf = thisScript.scheme.config['3']; // 获取配置
		if (thisconf.switch && thisconf.type === '接受') {
			if (thisScript.oper({
				name: '悬赏协作_' + thisconf.type + '_勾协',
				operator: [{
					desc: thisOperator[1].desc,
					oper: [thisOperator[0].oper[1]]
				}]
			}, 0)) {
				thisScript.doOspPush(thisScript, { text: '接受到勾协。', before() { thisScript.myToast('正在上传数据'); } });
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
				name: '悬赏协作_' + thisconf.type,
				operator: [{
					desc: thisOperator[0].desc,
					oper: [thisOperator[0].oper[{
						'关闭': 0,
						'接受': 1,
						'拒绝': 2
					}[thisconf.type as string]]]
				}]
			}, 0);
		};
	}
}


export default new Func003();