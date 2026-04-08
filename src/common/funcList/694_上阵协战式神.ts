import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;

export class Func694 implements IFuncOrigin {
	id = 694;
	name = '上阵协战式神';
	desc = '上阵第一个式神进行协战,用于协战十五次(排在准备前面,不要锁定阵容)';
	operator: IFuncOperatorOrigin[] = [{ // 0 上阵
		desc: [1280, 720,
			[
				[left, 266, 658, 0xf95e89],
				[center, 334, 675, 0xf95e89],
				[center, 372, 643, 0xee5a83],
				[left, 297, 512, 0xfa5c88],
			]
		],
		oper: [
			[center, 1280, 720, 297, 561, 337, 601, 1000],
			[center, 1280, 720, 387, 285, 429, 321, 1000],
			[center, 1280, 720, 1135, 557, 1217, 611, 1000],
		]
	}, { // 1 未准备
		desc: '准备界面_未准备',
		oper: [
			[center, 1280, 720, 785, 494, 825, 530, 2000],
		]
	}, { // 2 无协战式神
		desc: [1280, 720,
			[
				[left, 270, 551, 0xffe78d],
				[center, 370, 636, 0xffed91],
				[center, 370, 558, 0xffec91],
				[left, 270, 631, 0xffe68c],
			]
		],
		oper: [
			[center, 1280, 720, 23, 19, 49, 45, 1000],
			[center, 1280, 720, 23, 19, 49, 45, 1000],
			[center, 1280, 720, 680, 397, 802, 448, 1000],
			[center, 1280, 720, 680, 397, 802, 448, 1000],
		]
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['0'];
		if (thisScript.global.frist) {
			if (thisScript.oper({
				id: 692,
				name: 'frist',
				operator: [thisOperator[2]]
			})) {
				if (thisconf.after_operation === '切换方案') {
					thisScript.rerun(thisconf.next_scheme);
					sleep(3000);
				} else if (thisconf.after_operation === '停止脚本') {
					thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					// 停止脚本时关闭应用
					if (thisconf.stop_with_launched_app_exit) {
						thisScript.stopRelatedApp();
					}
					thisScript.stop();
					sleep(3000);
				}
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: 'frist',
				operator: [{ desc: thisOperator[0].desc }]
			})) {
				thisScript.regionSwipe(thisOperator[0].oper[0], thisOperator[0].oper[1], [800, 1000], 1000);
				thisScript.regionClick([thisOperator[0].oper[2]]);
				thisScript.global.frist = false;
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: 'frist',
				operator: [thisOperator[1]]
			})) {
				return true;
			}
		}
		return false;
	}
}