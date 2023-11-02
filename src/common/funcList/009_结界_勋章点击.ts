import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
// const center = 1;
// const right = 2;

export class Func009 implements IFuncOrigin {
	id = 9;
	name = '结界_勋章点击';
	desc = '在突破界面点击勋章，可配置点击勋章的优先级';
	config = [{
		desc: '',
		config: [{
			name: 'priority',
			desc: '挑战顺序',
			type: 'list',
			data: ['呱太->4->5->3->2->1->0', '呱太->5->4->3->2->1->0', '呱太->0->1->2->3->4->5'],
			default: '呱太->4->5->3->2->1->0',
			value: null,
		}, {
			name: 'scheme_switch_enabled',
			desc: '识别到攻打第一排第一列结界则切换方案',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '个突_9退4_退出',
		}
		]
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 0 突破界面
		desc: '突破界面',
		oper: [
			[left, 1280, 720, 30, 10, 160, 80, 500],
			[left, 1280, 720, 80, 0, 40, 0, 500],
			[left, 1280, 720, 160, 492, 824, 54, 0],//头像框 横轴坐标内
			[left, 1280, 720, 0, 0, 0, 0, 0],
		]
	}, {
		// 1 第一排第一列结界坐标
		desc: '突破界面',
		oper: [
			[left, 1280, 720, 147, 146, 465, 265, 500]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '突破界面_判断',
			operator: [{ desc: thisOperator[0].desc }]
		}, 0)) {
			// const thisconfFor008 = thisScript.scheme.config['8']; // 获取8功能配置
			// const thistype = thisconfFor008.type;
			const thisconf = thisScript.scheme.config['9']; // 获取配置
			const priority = String(thisconf.priority).split('->');
			const multiColorKey = [];
			for (const item of priority) {
				multiColorKey.push(`结界_${item}勋章`);
			}
			for (const key of multiColorKey) {
				const point = thisScript.findMultiColor(key);
				const add = thisOperator[0].oper[3];
				// if (point && thistype === '个人突破' && ((point.x > thisOperator[0].oper[2][0] &&
				// 	point.x < thisOperator[0].oper[2][0] + thisOperator[0].oper[2][3]) ||
				// 	(point.x > thisOperator[0].oper[2][1] &&
				// 		point.x < thisOperator[0].oper[2][1] + thisOperator[0].oper[2][3]) ||
				// 	(point.x > thisOperator[0].oper[2][2] &&
				// 		point.x < thisOperator[0].oper[2][2] + thisOperator[0].oper[2][3]))) {
				// 	console.log("识别到点击范围在头像框附近，对点击范围更正");
				// 	add = thisOperator[0].oper[1];
				// }
				if (point) {
					const oper = [[
						point.x + thisOperator[0].oper[0][0] + add[0],
						point.y + thisOperator[0].oper[0][1] + add[1],
						point.x + thisOperator[0].oper[0][2] + add[2],
						point.y + thisOperator[0].oper[0][3] + add[3],
						// point.x,
						// point.y,
						// point.x,
						// point.y,
						thisOperator[0].oper[0][4]]];
					thisScript.regionClick(oper);
					//第一排第一列结界坐标
					const fristFirstOper = thisOperator[1].oper[0] //[147, 146, 465, 265];
					const thisconf = thisScript.scheme.config['9'];
					if (Number(oper[0][0]) > fristFirstOper[0] && Number(oper[0][1]) > fristFirstOper[1] && Number(oper[0][2]) < fristFirstOper[2] && Number(oper[0][3]) < fristFirstOper[3]) {
						console.log('检测点击范围在第一排第一列结界内');
						if (thisconf && thisconf.scheme_switch_enabled) {
							thisScript.rerun(thisconf.next_scheme);
							sleep(3000);
							return;
						}
					}
					console.log(key);
					return true;
				}
			}
			return false;
		}
		return false;
	}
}
