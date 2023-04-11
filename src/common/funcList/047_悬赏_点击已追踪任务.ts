import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
let swiper = 0

export class Func047 implements IFuncOrigin {
	id = 47;
	name = '悬赏_点击已追踪任务';
	config = [{
		desc: '结束后切换方案',
		config: [{
			name: 'scheme_switch_enabled',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '地鬼日常',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[left, 35, 45, 0x2e1972],
				[left, 67, 652, 0xde67e2],
				[right, 1170, 145, 0xd5cec1],
				[right, 1164, 29, 0xd8b38a],
				[left, 190, 671, 0xd22c2b],
				[center, 382, 641, 0xeedbc8],
				[left, 145, 709, 0x70432d]
			]
		],
		oper: [
			[left, 1280, 720, 0, 0, -42, -51, 2000],
		]
	}, {
		desc: [1280, 720,
			[
				[left, 54, 43, 0xeaf4fc],
				[left, 51, 36, 0x9eafee],
				[left, 52, 78, 0xcadbff],
				[left, 119, 652, 0xa86420],
				[left, 209, 643, 0xf6f0b7],
				[center, 326, 640, 0xcfc9b8],
				[center, 430, 652, 0xb96567],
				[center, 500, 640, 0x564635],
				[left, 135, 132, 0x76551c],
				[left, 117, 133, 0x47362e]
			]
		],
		oper: [
			[center, 1280, 720, 29, 461, 115, 467, 1],
			[center, 1280, 720, 25, 174, 105, 178, 1]
		]
	}, {
		// 旧
		desc: [1280, 720,
			[
				[left, 35, 45, 0x2e1972],
				[left, 67, 652, 0xde67e2],
				[right, 1170, 145, 0xd5cec1],
				[right, 1164, 29, 0xd8b38a],
				[left, 190, 671, 0xd22c2b],
				[center, 382, 641, 0xeedbc8],
				[left, 145, 709, 0x70432d]
			]
		],
		oper: [
			[left, 1280, 720, 0, 0, -42, -51, 2000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '悬赏_探索界面',
			operator: [{
				desc: thisOperator[0].desc
			}, {
				desc: thisOperator[2].desc
			}]
		})) {
			const suspension = thisScript.findMultiColor('探索界面_检测左边是否有追踪任务的悬浮列表') || null;
			const point = thisScript.findMultiColor('悬赏_已追踪任务') || null;
			const thisconf = thisScript.scheme.config['47'];
			if (suspension != null) {
				// 如果有悬浮列表
				if (point != null) {
					let oper = [
						[point.x, point.y, point.x + 1, point.y + 1, 1000]
					];
					thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
					return true;
				} else {
					// 如果没有追踪任务就滑动，可能是真蛇之类的把任务挤下去了
					if (swiper === 3) {
						swiper = 0;
						if (thisconf && thisconf.scheme_switch_enabled) {
							thisScript.setCurrentScheme(thisconf.next_scheme as string);
							thisScript.myToast(`切换方案为[${thisconf.next_scheme}]`);
							thisScript.rerun();
							sleep(3000);
							return;
						} else {
							thisScript.doOspPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
							thisScript.stop();
							sleep(3000);
							return;
						}
					}
					thisScript.helperBridge.regionSwipe(thisOperator[1].oper[0], thisOperator[1].oper[1], [100, 300], 2000);
					swiper++
					return true
				}
			} else {
				// 如果没有悬浮列表说明任务做完了
				if (thisconf && thisconf.scheme_switch_enabled) {
					thisScript.setCurrentScheme(thisconf.next_scheme as string);
					thisScript.myToast(`切换方案为[${thisconf.next_scheme}]`);
					thisScript.rerun();
				} else {
					thisScript.doOspPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
				}
			}
		} else {
			return false
		}
	}
}