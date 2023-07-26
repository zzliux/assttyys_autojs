import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const left = 0;
const center = 1;
const right = 2;

export class Func052 implements IFuncOrigin {
	id = 52;
	name = '悬赏_庭院打开悬赏界面';
	desc = '用于其他方案转悬赏方案中转，如金币妖怪转悬赏；或放在功能29前用于一次性执行，执行成功后不再执行，放在29前请关闭切换方案';
	config = [{
		desc: '结束后切换方案',
		config: [{
			name: 'scheme_switch_enabled',
			desc: '是否启用',
			type: 'switch',
			default: true,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '悬赏',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 庭院未打开菜单
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[left, 1280, 720, 0, 0, 32, 63, 1000]
		]
	}, { // 庭院已打开菜单
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰'
	}, {
		// 庭院已打开菜单，另外一种图标
		desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰'
	}, {
		// 庭院已打开菜单，另另外一种图标
		desc: '庭院已打开菜单_另另外一种图标'
	}, {
		// 悬赏界面
		desc: [1280, 720,
			[
				[left, 99, 69, 0x3a383e],
				[center, 641, 50, 0x7c5a2e],
				[center, 599, 82, 0x685646],
				[center, 731, 81, 0x5c3919],
				[right, 1180, 120, 0x67323c],
				[right, 1166, 87, 0x654824],
				[right, 961, 84, 0x725233],
				[center, 878, 81, 0x4c3727],
				[center, 521, 96, 0x664b31]
			]
		],
		oper: [
			[left, 1280, 720, 1120, 587, 1180, 645, 1000]
		]
	}, {
		// 悬赏界面 旧
		desc: [1280, 720,
			[
				[left, 116, 67, 0x3d3c42],
				[left, 114, 88, 0x634624],
				[center, 365, 85, 0x4f3928],
				[center, 640, 50, 0x7a5930],
				[right, 1022, 87, 0x4b3826],
				[right, 1156, 81, 0x583f27]
			]
		],
		oper: [
			[left, 1280, 720, 1120, 587, 1180, 645, 1000]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.global.xsOpened) {
			return false;
		}
		if (thisScript.oper({
			name: '悬赏_庭院界面',
			operator: [{
				desc: thisOperator[0].desc
			}, {
				desc: thisOperator[1].desc
			}, {
				desc: thisOperator[2].desc
			}]
		})) {
			const point = thisScript.findMultiColor('悬赏_庭院检测悬赏图标') || null;
			if (point !== null) {
				thisScript.regionClick([[point.x, point.y, point.x + 20, point.y + 20, 1000]]);
				return true
			} else {
				return false
			}
		} else {
			if (thisScript.oper({
				name: '悬赏_悬赏界面',
				operator: [{
					desc: thisOperator[3].desc
				}, {
					desc: thisOperator[4].desc
				}]
			})) {
				const thisconf = thisScript.scheme.config['52'];
				thisScript.global.xsOpened = true;
				if (thisconf && thisconf.scheme_switch_enabled) {
					thisScript.rerun(thisconf.next_scheme);
					sleep(3000);
				} else {
					return false
				}
			}
			return false
		}
	}
}