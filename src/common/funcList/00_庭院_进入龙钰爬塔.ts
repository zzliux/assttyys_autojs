import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1003 implements IFuncOrigin {
	id = 1003;
	name = '庭院进入_爬塔活动';
	desc = '只适配默认皮肤';
	config = [{
		desc: '进入雀儿了乐或999后切换方案',
		config: [{
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '通用活动',
		}]
	}, {
		desc: '进入雀儿乐',
		config: [{
			name: 'enabled_majiang',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}]
	}, {
		desc: '进入999',
		config: [{
			name: 'enabled_999',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}]
	}]
	operator: IFuncOperatorOrigin[] = [{
		// 0 庭院未展开界面
		desc: [1280, 720,
			[
				[right, 1208, 637, 0xddd2cc],
				[right, 1189, 668, 0xd9c7c3],
				[right, 1178, 707, 0x371f16],
				[right, 1220, 600, 0x331a12],
				[right, 1188, 645, 0x792413],
				[center, 440, 183, 0xa0c5c5],
				[center, 475, 187, 0xedf5f6],
				[center, 459, 203, 0xbabed9],
			]
		],
		oper: [
			[center, 1280, 720, 432, 161, 483, 216, 1000], // 庭院点击活动
		]
	}, { // 1 庭院展开界面
		desc: [1280, 720,
			[
				[right, 1226, 47, 0xcda47a],
				[right, 1228, 646, 0xd6c6c3],
				[center, 366, 56, 0xf9cf9a],
				[right, 1154, 40, 0xd7b288],
				[center, 440, 183, 0xa0c5c5],
				[center, 475, 187, 0xedf5f6],
				[center, 459, 203, 0xbabed9],
			]
		]
	}, { // 2 龙钰活动界面
		desc: [1280, 720,
			[
				[left, 252, 26, 0xe7c763],
				[left, 41, 9, 0x452d21],
				[left, 252, 45, 0xd29f39],
				[right, 1093, 40, 0x503f2f],
				[right, 957, 629, 0xffffe7],
				[right, 1066, 630, 0x38423e],
			]
		],
		oper: [
			[center, 1280, 720, 343, 364, 428, 588, 1000],
			[center, 1280, 720, 883, 184, 952, 392, 1000],
		]
	}, { // 3 999界面
		desc: [1280, 720,
			[
				[right, 884, 35, 0xe4be91],
				[right, 894, 35, 0xeddfd8],
				[right, 884, 41, 0xd8b287],
				[right, 995, 659, 0x37332c],
			]
		]
	}, { // 4 雀儿乐界面
		desc: [1280, 720,
			[
				[right, 1079, 50, 0x986429],
				[right, 1090, 49, 0xbf9045],
				[left, 70, 533, 0xf7f3d3],
				[left, 76, 519, 0x8a7a65],
				[right, 868, 661, 0xe7f3de],
			]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['1003'];
		if (
			thisScript.oper({
				id: 1003,
				name: '页面是否为庭院未展开',
				operator: [{
					desc: thisOperator[0].desc,
					oper: [thisOperator[0].oper[0]],
				}]
			})
		) {
			return true;
		}
		if (
			thisScript.oper({
				id: 1003,
				name: '页面是否为庭院展开',
				operator: [{
					desc: thisOperator[1].desc,
					oper: [thisOperator[0].oper[0]],
				}]
			})
		) {
			return true;
		}
		if (
			thisScript.oper({
				id: 1003,
				name: '是否999页面',
				operator: [{
					desc: thisOperator[3].desc,
				}]
			})
		) {
			sleep(1000);
			thisScript.rerun(thisconf.next_scheme);
		}
		if (
			thisScript.oper({
				id: 1003,
				name: '是否雀儿乐界面',
				operator: [{
					desc: thisOperator[4].desc,
				}]
			})
		) {
			sleep(1000);
			thisScript.rerun(thisconf.next_scheme);
		}
		if (thisconf.enabled_majiang) {
			if (
				thisScript.oper({
					id: 1003,
					name: '进入雀儿乐',
					operator: [{
						desc: thisOperator[2].desc,
						oper: [thisOperator[2].oper[0]],
					}]
				})
			) {
				thisScript.rerun(thisconf.next_scheme);
				return true;
			}
		}
		if (thisconf.enabled_999) {
			if (
				thisScript.oper({
					id: 1003,
					name: '进入999活动',
					operator: [{
						desc: thisOperator[2].desc,
						oper: [thisOperator[2].oper[1]],
					}]
				})
			) {
				thisScript.rerun(thisconf.next_scheme);
				return true;
			}
		}
		return false;
	}
}

export default new Func1003();