import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func519 implements IFuncOrigin {
	id = 519;
	name = '寮管理进入道馆开启界面';
	// desc = '星期567进入狭间,星期1234进入道馆(不会自动选择道馆)';
	config = [{
		desc: '',
		config: [{
			name: 'daoguan_scheme',
			desc: '进入后切换至下个方案',
			type: 'scheme',
			default: '道馆',
		}
			// , {
			// 	name: 'xiajian_scheme',
			// 	desc: '切换至狭间方案',
			// 	type: 'scheme',
			// 	default: '狭间暗域',
			// }
		]
	}]
	operator: IFuncOperatorOrigin[] = [{ // 0 神社界面
		desc: [
			1280, 720,
			[
				[right, 1194, 170, 0x82543e],
				[right, 1196, 293, 0x7d513b],
				[right, 1197, 416, 0xd5844f],
				[right, 1194, 539, 0x81533d],
				[left, 40, 30, 0xf7ebad],
			]
		],
		oper: [
			[center, 1280, 720, 731, 624, 787, 649, 1000], // 0 狭间
			[center, 1280, 720, 428, 170, 580, 304, 1000], // 1 道馆
		]
	}, { // 1 选攻打道馆界面
		desc: [
			1280, 720,
			[
				[right, 1142, 628, 0x6dcc97],
				[right, 1185, 658, 0x46a774],
				[left, 88, 618, 0xc1b8aa],
				[left, 189, 637, 0x777a83],
				[left, 35, 52, 0xf0f5fb],
			]
		]
	}
		// , { // 2 狭间开启界面
		// 	desc: [
		// 		1280, 720,
		// 		[
		// 			[left, 269, 206, 0xe4d0ad],
		// 			[left, 297, 181, 0xe4d8b3],
		// 			[left, 182, 227, 0xccaadd],
		// 			[left, 251, 364, 0xc9bb97],
		// 			[center, 431, 155, 0xe1d6b3],
		// 			[center, 716, 176, 0xe8e0bf],
		// 			[right, 1090, 155, 0xe7dcaf],
		// 		]
		// 	]
		// }
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['519'];
		if (thisScript.oper({
			id: 519,
			name: '检测_寮活动神社',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			// const now = new Date();
			// if (now.getDay() != 0 && now.getDay() < 5) {
			thisScript.regionClick([thisOperator[0].oper[1]]);
			// } else {
			// 	thisScript.regionClick([thisOperator[0].oper[0]]);
			// }
			return true;
		}
		if (thisScript.oper({
			id: 519,
			name: '检测_攻打道馆',
			operator: [{ desc: thisOperator[1].desc }]
		})) {
			thisScript.rerun(thisConf.daoguan_scheme);
			return true;
		}
		// if (thisScript.oper({
		// 	id: 519,
		// 	name: '检测_进入狭间',
		// 	operator: [{ desc: thisOperator[2].desc }]
		// })) {
		// 	thisScript.rerun(thisConf.xiajian_scheme);
		// 	return true;
		// }
		return false;
	}
}
