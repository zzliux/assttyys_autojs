import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
const center = 1;

export class Func1103 implements IFuncOrigin {
	id = 1103;
	name = '新号达到等级';
	desc = '新号达到等级则找购买体力按钮';
	config = [{
		desc: '',
		config: [{
			name: 'level',
			desc: '输入需达到目标等级（ >= ）',
			type: 'text',
			default: '31',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		desc: '退出结算_单人_胜利太鼓',
		oper: [
			[center, 1280, 720, 351, 340, 421, 375, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config[1103];
		if (thisScript.oper({
			name: '区域',
			operator: [{ desc: thisOperator[0].desc }]
		}) && thisScript.getOcrDetector()) {
			const nowLevel = thisScript.findText('.+', 0, thisOperator[0].oper[0], '包含');
			thisScript.global.nowlevel = Number(nowLevel[0].label.replace(/[^\d]/g, ' '));
		}
		if (thisScript.global.nowlevel >= Number(thisconf.level)) {
			const point = thisScript.findMultiColor('购买体力按钮');
			if (point) {
				console.log('达到等级,开始寻找购买体力按钮');
				const oper = [[
					point.x - 5,
					point.y - 5,
					point.x + 5,
					point.y + 5,
					1200
				]];
				sleep(1000);
				thisScript.regionClick(oper);
				thisScript.shutDown['1103'] = true;
				return true;
			}
		}
	}
}