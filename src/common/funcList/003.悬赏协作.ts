import { Script } from "@/system/script";
import { InterfaceFunc, InterfaceFuncOperatorOrigin } from "@/interface/InterfaceFunc";

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func003 implements InterfaceFunc {
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
		}]
	}];
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[[center,519,139,0xb29375],
			[center,727,171,0xb29375],
			[center,855,518,0xdc6958],
			[center,849,422,0x53ae5b]]
		],
		oper: [
			[center, 1280, 720, 768,109, 796,138, 1000], // 关闭
			[center, 1280, 720, 833,397, 874,438, 1000], // 接受
			[center, 1280, 720, 835,500, 875,538, 1000], // 拒绝
		]
	}];
	
	/**
	 * 
	 * @param {*} thisScript script.js 这样可以拿到里面的对象用来做点击等操作
	 * @param {*} thisOperator 转换过适合当前分辨率的operator
	 */
	operatorFunc(thisScript: Script, thisOperator) {
		let thisconf = thisScript.scheme.config['3']; // 获取配置
		return thisScript.oper({
			name: '悬赏协作_' + thisconf.type,
			operator: [{
				desc: thisOperator[0].desc,
				oper: [thisOperator[0].oper[{
					'关闭': 0,
					'接受': 1,
					'拒绝': 2
				}[thisconf.type]]]
			}]
		}, 0);
	};
}


export default new Func003();