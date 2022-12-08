import { Script } from '@/system/script';
import { InterfaceFunc } from '../../interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func017 implements InterfaceFunc {
	id = 17;
	name = '百鬼夜行_邀请好友';
	desc = '在百鬼夜行挑战界面，随机邀请好友';
	operator = [{
		desc: [1280,720,
			[[center,170,600,0xfff2ce],
			[center,1128,594,0x402f1f],
			[center,1084,202,0xe7d4cf],
			[center,554,514,0x846866],
			[center,195,156,0xf9edee]]
		],
		oper: [
			[center, 1280, 720, 152,578, 190,623, 1500]
		]
	}, {
		desc: [1280,720,
			[[center,170,600,0xc3b99e],
			[center,392,156,0xe7bc93],
			[center,391,200,0xd7bfae],
			[center,582,208,0xd7bfae],
			[center,886,276,0xeac9a0],
			[center,608,277,0xeac9a0],
			[center,1084,202,0xb1a29e],
			[center,1132,590,0x322518]]
		],
		oper: [
			[center,1280,720, 468,233, 624,550, 500],
			[center,1280,720, 731,229, 890,563, 500],
		]
	}];
	operatorFunc = function (thisScript: Script, thisOperator): boolean {
		return thisScript.oper({
			id: 17,
			name: '百鬼夜行_邀请好友',
			operator: [thisOperator[0], {
				desc: thisOperator[1].desc,
				oper: [thisOperator[1].oper[random(0 ,1)]]
			}]
		});
	}
}
