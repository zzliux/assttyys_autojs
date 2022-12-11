import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func507 implements InterfaceFuncOrigin {
	id = 507;
	name = '狩猎战_挑战';
	operator: InterfaceFuncOperatorOrigin[] = [{	// 检测_是否为挑战奉献榜场景_待开始
		desc: [1280, 720,
			[[right, 1104, 568, 0xd7bfa5],
			[right, 1175, 600, 0xdfc29d],
			[right, 1122, 697, 0x5b0d07],
			[right, 1086, 615, 0x272420],
			[right, 1068, 593, 0xdec7aa]]
		],
		oper: [
			[right, 1280, 720, 1073, 568, 1171, 646, 1000]  // 进入鬼王挑战页
		]
	}, {	// 检测_挑战是否可用
<<<<<<< HEAD
		desc: [
			1280, 720,
=======
		desc: [1280, 720,
>>>>>>> 67cd9bff4332c5b78ad7590fd0702330ebd6d2d1
			[
				[left, 64, 482, 0x291522],
				[left, 33, 38, 0xd7c5a2],
				[left, 109, 24, 0xd7c5a2],
				[left, 179, 37, 0xd7c6a5],
				[center, 634, 624, 0x4c2a26],
				[center, 708, 35, 0x2a2237],
				[right, 1144, 692, 0xf2d59f],
			]
		],
		oper: [
			[right, 1280, 720, 1138, 561, 1218, 641, 1000]
		]
	}, {	// 检测_挑战奉献榜场景_已结束
		desc: [1280, 720,
			[[right, 1000, 648, 0xd42c23],
			[right, 986, 624, 0x060503],
			[right, 995, 671, 0x2d1c1c],
			[right, 1095, 640, 0xf0d09e],
			[right, 1155, 640, 0xe6bc83],
			[right, 1128, 620, 0x272420],
			[right, 1080, 595, 0x272420],
			[right, 1157, 595, 0x272420]]
		],
		oper: [
			[right, 1280, 720, 1166, 52, 1200, 86, 2200],
			[left, 1280, 720, 58, 43, 96, 82, 2200]
		]
<<<<<<< HEAD
	}, {	// 检测_狩猎战是否有酒瓶
=======
	},
	{	// 检测_狩猎战是否有酒瓶
>>>>>>> 67cd9bff4332c5b78ad7590fd0702330ebd6d2d1
		desc: [
			1280, 720,
			[
				[left, 64, 482, 0x291522],
				[left, 33, 38, 0xd7c5a2],
				[left, 109, 24, 0xd7c5a2],
				[left, 179, 37, 0xd7c6a5],
				[center, 634, 624, 0x4c2a26],
				[center, 708, 35, 0x2a2237],
				[center, 658, 405, 0xcdb49b],
				[center, 663, 421, 0x77472b],
			]
		],
		oper: [
			[center, 1280, 720, 627, 373, 677, 415, 1200],
		]
	},
	{	// 检测_狩猎战关闭酒瓶奖励
		desc: [
			1280, 720,
			[
				[right, 1131, 593, 0x393939],
				[center, 853, 241, 0x382a1c],
				[center, 801, 362, 0xcbb59e],
				[center, 368, 388, 0x906b41],
				[center, 576, 42, 0x0c0a12],
			]
		],
		oper: [
			[center, 1280, 720, 448, 488, 894, 574, 1200],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		let thisConf = thisScript.scheme.config['507'];

		if (thisScript.oper({
			name: '检测_是否为挑战奉献榜场景_待开始',
			operator: [{
				desc: thisOperator[0].desc,
				oper: thisOperator[0].oper
			}]
		})) {
			return true;
		}

		if (thisScript.oper({
			name: '检测_挑战是否可用',
			operator: [{
				desc: thisOperator[1].desc,
				oper: thisOperator[1].oper
			}]
		})) {
			return true;
		}

		if (thisScript.oper({
<<<<<<< HEAD
            name: '检测_是否有酒瓶',
            operator: [{
                desc: thisOperator[3].desc,
                oper: thisOperator[3].oper
            }]
        })) {
            return true;
        }

        if (thisScript.oper({
            name: '检测_是否领取酒瓶奖励页',
            operator: [{
                desc: thisOperator[4].desc,
                oper: thisOperator[4].oper
            }]
        })) {
            return true;
        }
=======
			name: '检测_是否有酒瓶',
			operator: [{
				desc: thisOperator[3].desc,
				oper: thisOperator[3].oper
			}]
		})) {
			return true;
		}

		if (thisScript.oper({
			name: '检测_是否领取酒瓶奖励页',
			operator: [{
				desc: thisOperator[4].desc,
				oper: thisOperator[4].oper
			}]
		})) {
			return true;
		}
>>>>>>> 67cd9bff4332c5b78ad7590fd0702330ebd6d2d1

		if (thisScript.oper({
			name: '检测_挑战奉献榜场景_已结束',
			operator: [{
				desc: thisOperator[2].desc,
				oper: thisOperator[2].oper
			}]
		})) {
			thisScript.global.back_courtyard_to_next_scheme = '庭院进入寮每日活动';
			const next_scheme = '返回庭院';
			thisScript.setCurrentScheme(next_scheme);
			thisScript.myToast(`切换方案为[${next_scheme}]`);
			thisScript.rerun();
		}
		return true;
	}
}