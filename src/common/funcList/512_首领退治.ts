import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func512 implements IFuncOrigin {
	id = 512;
	name = '首领退治_挑战';
	operator: IFuncOperatorOrigin[] = [{	// 检测_是否为首领退治集结页
		desc: [
			1280, 720,
			[
				[left, 182, 37, 0xd5c4a3],
				[left, 108, 26, 0xd7c5a2],
				[left, 47, 28, 0xd7c5a2],
				[left, 232, 139, 0x583716],
				[left, 76, 550, 0x322219],
				[right, 1039, 648, 0xd3c3bd],
				[center, 872, 606, 0x493a38],
				[center, 727, 611, 0xdfc7ac],
				[right, 1172, 568, 0xd6bda3],
				[right, 1217, 662, 0xebc47b],
			]
		],
		oper: [
			[right, 1280, 720, 1157, 577, 1232, 646, 1200]  // 点击挑战
		]
	},
	{
		desc:	//	检测_首领结束页
			[
				1280, 720,
				[
					[left, 172, 262, 0xd7cfbe],
					[left, 164, 347, 0xd8cfbf],
					[left, 129, 442, 0xe0d8c8],
					[center, 486, 132, 0xd5c6b0],
					[center, 841, 130, 0x8a6940],
					[right, 1098, 341, 0x9c8154],
				]
			],
		oper:
			[
				[right, 1280, 720, 1224, 112, 1274, 691, 1200]	//	点击空白处关闭
			]
	},
	{
		desc:   //  检测_寮活动神社
		[
			1280, 720,
			[
					[right, 1176, 171, 0x7f543d],
					[right, 1219, 173, 0x7a5138],
					[right, 1220, 292, 0x7b5239],
					[right, 1176, 288, 0x855640],
					[right, 1179, 414, 0xbb764a],
					[right, 1218, 418, 0xbb7148],
					[right, 1178, 540, 0x81553f],
					[right, 1221, 536, 0x7c533a],
					[right, 1200, 662, 0x791f1f],
					[left, 46, 36, 0xeddc9a],
					[left, 50, 20, 0xecd391],
			]
	]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let thisConf = thisScript.scheme.config['512'];

		if (thisScript.oper({
			name: '检测_是否为首领退治集结页',
			operator: [thisOperator[0]]
		})) {
			return true;
		}

		if (thisScript.oper({
			name: '检测_首领结束页',
			operator: [thisOperator[1], thisOperator[2]]
		})) {

			if (thisScript.runtimeParams && thisScript.runtimeParams.liao_activity_state) {
				thisScript.runtimeParams.liao_activity_state['huntBoss'] = true;

				const next_scheme = '返回庭院';
				thisScript.setCurrentScheme(next_scheme as string, {
					next_scheme_name: '庭院进入寮每日活动',
					liao_activity_state: thisScript.runtimeParams.liao_activity_state
				});
				thisScript.myToast(`切换方案为[${next_scheme}]`);
				thisScript.rerun();
			} else {
				const next_scheme = '返回庭院';
				thisScript.setCurrentScheme(next_scheme);
				thisScript.myToast(`切换方案为[${next_scheme}]`);
				thisScript.rerun();
			}

		}
		return false;
	}
}