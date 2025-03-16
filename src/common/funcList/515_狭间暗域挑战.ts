import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
// const left = 0;
const center = 1;
const right = 2;

export class Func515 implements IFuncOrigin {
	id = 515;
	name = '狭间暗域_挑战';
	operator: IFuncOperatorOrigin[] = [{
		desc: //    检测_怪物挑战页弹窗_前往
			[
				1280, 720,
				[
					[right, 1165, 597, 0xd5bfc2],
					[right, 1155, 659, 0xd9c3c5],
					[right, 1168, 491, 0xddd3c4],
					[center, 476, 412, 0x53170f],
					[right, 1016, 111, 0xe8d4cf],
					[center, 547, 582, 0x840517],
					[right, 1157, 642, 0xd9c3c6],
				]
			],
		oper: [
			[right, 1280, 720, 1124, 599, 1202, 661, 1200]    //  点击前往或挑战
		]
	},
	{
		desc: //    检测_怪物挑战页弹窗_挑战
			[
				1280, 720,
				[
					[right, 1165, 597, 0xd5bfc2],
					[right, 1155, 659, 0xd9c3c5],
					[right, 1168, 491, 0xddd3c4],
					[center, 476, 412, 0x53170f],
					[right, 1016, 111, 0xe8d4cf],
					[center, 547, 582, 0x840517],
					[right, 1136, 646, 0xdbc5c8],
				]
			],
		oper: [
			[right, 1280, 720, 999, 92, 1035, 126, 1200]	//	点击关闭
		]
	},
	{
		desc:	//	检测_前往怪物确认弹窗
			[
				1280, 720,
				[
					[center, 413, 240, 0xbfa88c],
					[center, 869, 243, 0xc7b096],
					[center, 863, 476, 0xc4ae93],
					[center, 408, 471, 0xcbb59e],
					[center, 450, 418, 0xdf6851],
					[center, 686, 420, 0xf4b25f],
					[center, 830, 442, 0xf4b25f],
				]
			],
		oper:
			[
				[center, 1280, 720, 680, 415, 831, 451, 1200]	//	点击确认
			]
	},
	{
		desc: //  检测_结算页
			[1280, 720,
				[
					[center, 481, 159, 0x841b12],
					[center, 458, 207, 0xa11c10],
					[center, 512, 205, 0xa11b10],
					[center, 515, 168, 0xc7b39e],
					[center, 447, 169, 0xc6b5a0],
					[center, 484, 222, 0xd3c4ae],
					[center, 510, 249, 0xd4c4ab]
				]
			],
		operStepRandom: [
			[
				[center, 1280, 720, 165, 60, 1070, 604, 400, 1],
				[center, 1280, 720, 165, 60, 1263, 530, 400, 1],
			]
		],
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		// const thisconf = thisScript.scheme.config['515'];

		if (thisScript.oper({
			name: '检测_怪物挑战页弹窗_前进',
			operator: [thisOperator[0]]
		})) {
			sleep(thisScript.global.narrow_time);	// 点击前往后，等待时间，以免卡游戏窗口bug
			return true;
		}

		if (thisScript.oper({
			name: '检测_怪物挑战页弹窗_挑战',
			operator: [{
				desc: thisOperator[1].desc
			}]
		})) {
			//  重置点击挑战计数字段
			thisScript.global.checked_yard_count = 0;

			return thisScript.oper({
				name: '检测_怪物挑战页弹窗_挑战',
				operator: [{ oper: thisOperator[0].oper }]
			});
		}

		if (thisScript.oper({
			name: '检测_结算页',
			operator: [thisOperator[3]]
		})) {
			let currentState = '';

			Object.keys(thisScript.global.narrow_state).findIndex(key => {
				if (!thisScript.global.narrow_state[key]) {
					console.log('当前挑战阶段为:', key);
					currentState = key;
					return true;
				}
				return false;
			});

			if (currentState) {
				thisScript.global.narrow_state[currentState] = true;
				return false;
			}

			return true;
		}

		thisScript.oper({
			name: '检测_前往怪物确认弹窗',
			operator: [thisOperator[2]]
		});

		return false;
	}
}