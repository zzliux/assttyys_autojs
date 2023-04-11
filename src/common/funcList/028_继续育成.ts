import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from "@/interface/IFunc";
import { Script } from "@/system/script";

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func028 implements IFuncOrigin {
	id = 28;
	name = '继续育成';
	desc = '式神升级界面点击确定后再点击继续育成';
	config = [{
		desc: '材料个数，低于这个值时判定结束，比如说5个红蛋喂1个蓝蛋，最后一次上的红蛋个数不足5个时说明红蛋已经不够喂了，脚本会自动停止',
		config: [{
			name: 'count',
			desc: '材料个数',
			type: 'list',
			data: ['1', '2', '3', '4', '5', '6', '7', '8'],
			default: '5',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 等级提升界面
		desc: [1280,720,
			[[center,656,130,0xcad2de],
			[center,1005,133,0xc8d1db],
			[center,852,126,0xe2bd5e],
			[center,702,598,0xf4b25f],
			[center,983,604,0xf4b25f],
			[center,813,550,0xdfcebe]]
		],
		oper: [
			[center, 1280, 720, 632,598, 770,639, 500], // 继续育成
		]
	}, {
		// 育成选材料界面
		desc: [1280,720,
			[[left,44,37,0xf5e8a9],
			[center,964,631,0xcbb9b2],
			[center,919,642,0xf4b25f],
			[right,1233,45,0xd7c5a2],
			[right,1222,161,0xfbeddb],
			[center,598,674,0x2b1f1b]]
		],
		oper: [
			[center, 1280, 720, 821,632, 932,670, 2500], // 确定
		]
	}, {
		desc: [1280,720,
			// 8个+号的中心
			[[center,590,182,0xd3c3b5],
			[center,590,303,0xd3c4b7],
			[center,590,428,0xd2c1b5],
			[center,592,550,0xcfc1b5],
			[center,1048,184,0xd2c1b5],
			[center,1049,305,0xd3c2b6],
			[center,1049,427,0xd3c2b6],
			[center,1049,550,0xd3c1b6]]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let thisconf = thisScript.scheme.config['28'];
		let cntIndex = parseInt(thisconf.count) - 1;
		if (thisScript.oper({
			name: '继续育成',
			operator: [thisOperator[0]]
		})) {
			return true;
		} else if (thisScript.oper({
			name: '育成',
			operator: [{
				desc: thisOperator[1].desc,
			}]
		}) && !thisScript.oper({
			name: '育成_材料个数判断',
			operator: [{
				desc: [thisOperator[2].desc[cntIndex]],
			}]
		})) {
			thisScript.helperBridge.regionClick(thisOperator[1].oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
			return true;
		}
		return false;
	}
}