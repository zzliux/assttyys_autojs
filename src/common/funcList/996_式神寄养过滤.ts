import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
// const right = 2;

export class Func996 implements IFuncOrigin {
	id = 996;
	name = '式神寄养过滤';
	desc = '式神寄养过滤';
	config =[
		{
			desc: '寄存好友',
			config: [{
				name: 'friendName',
				desc: '寄存好友名称',
				type: 'text',
				default: '老王',
				value: '老王'
			}],
		}
	];
	operator: IFuncOperatorOrigin[] = [{
		// 检测是否为式神寄养列表
		desc: [1280, 720,
			[[left, 186, 171, 0x30221f],
			[center, 555, 138, 0xcbb59e],
			[center, 880, 562, 0xf4b25f],
			[center, 705, 347, 0xccb59e]]
		],
		oper: [
			[center, 1280, 720, 210, 169, 634, 567, 1000], // 好友列表区域
			[left, 1280, 720, 325, 30, 615, 65, -1],    // 结界边框方位
			[left, 1280, 720, 0, 0, 1279, 719, -1], // 屏幕大小
		]
	}, {
		oper: [
			[center, 1280, 720, 795, 538, 967, 591, 3000],  // 进入结界按钮
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['996'];

		if (thisScript.oper({
			id: 996,
			name: '检测是否为式神寄养列表',
			operator: [{
				desc: thisOperator[0].desc,
			}]
		})) {
			const result = thisScript.findText(String(thisconf.friendName), 5000, thisOperator[0].oper[0], '模糊');

			if (result.length === 0) {
				console.log(`未识别${thisconf.friendName}`);
				return false;
			}

			console.log('识别成功:' + result, thisconf.friendName);

			const p = {
				x: (result[0].points[0].x + result[0].points[1].x) / 2,
				y: (result[0].points[0].y + result[0].points[3].y) / 2,
			}

			const lx = thisOperator[0].oper[1][0];
			const ly = p.y - thisOperator[0].oper[1][1];
			const rx = thisOperator[0].oper[1][2];
			const ry = p.y + thisOperator[0].oper[1][3];

			const toClick = [
				lx > 0 ? lx : 0,
				ly > 0 ? ly : 0,
				rx < thisOperator[0].oper[2][2] ? rx : thisOperator[0].oper[2][2],
				ry < thisOperator[0].oper[2][3] ? ry : thisOperator[0].oper[2][3],
				1000
			];
			console.log('目标坐标为:', toClick.toString(), p);
			thisScript.regionClick([toClick]);

			return thisScript.oper({
				id: 996,
				name: '点击进入结界按钮',
				operator: [{
					desc: thisOperator[0].desc,
					oper: thisOperator[1].oper
				}]
			});
		}

		return false;
	}
}
