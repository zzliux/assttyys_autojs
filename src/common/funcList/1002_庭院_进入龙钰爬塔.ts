import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1002 implements IFuncOrigin {
	id = 1002;
	name = '庭院进入_爬塔活动';
	desc = '只适配默认皮肤';
	config = [{
		desc: '进入雀儿乐',
		config: [{
			name: 'enabled_majiang',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme_majiang',
			desc: '下一个方案',
			type: 'scheme',
			default: '喜乐雀儿戏', }]
	}, {
		desc: '进入999',
		config: [{
			name: 'enabled_999',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '通用活动', }]
	}]
	operator: IFuncOperatorOrigin[] = [{ // 0 庭院
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰'
	}, { // 1 庭院
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰'
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
			[center, 1280, 720, 343, 364, 428, 588, 1500],
			[center, 1280, 720, 883, 184, 952, 392, 1500],
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
		const thisconf = thisScript.scheme.config['1002'];
		if (
			thisScript.oper({
				id: 1002,
				name: '庭院内',
				operator: [thisOperator[0], thisOperator[1]]
			})
		) {
			let point = null;
			let cnt = 3;
			while (cnt-- > 0 && !point) {
				sleep(80);
				thisScript.keepScreen(true);
				point = thisScript.findMultiColor('龙钰活动');
			}
			if (point) {
				console.log('龙钰活动');
				const oper = [[
					point.x - 5,
					point.y - 5,
					point.x + 5,
					point.y + 5,
					200
				]];
				thisScript.regionClick(oper);
				sleep(1400);
				return true;
			}
		}
		if (
			thisScript.oper({
				id: 1002,
				name: '是否999页面',
				operator: [{
					desc: thisOperator[3].desc,
				}]
			})
		) {
			sleep(1000);
			thisScript.rerun(thisconf.next_scheme);
		}
		if (thisconf.enabled_999) {
			if (
				thisScript.oper({
					id: 1002,
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
		if (
			thisScript.oper({
				id: 1002,
				name: '是否雀儿乐界面',
				operator: [{
					desc: thisOperator[4].desc,
				}]
			})
		) {
			sleep(1000);
			thisScript.rerun(thisconf.next_scheme_majiang);
		}
		if (thisconf.enabled_majiang) {
			if (
				thisScript.oper({
					id: 1002,
					name: '进入雀儿乐',
					operator: [{
						desc: thisOperator[2].desc,
						oper: [thisOperator[2].oper[0]],
					}]
				})
			) {
				thisScript.rerun(thisconf.next_scheme_majiang);
				return true;
			}
		}
		return false;
	}
}

export default new Func1002();
