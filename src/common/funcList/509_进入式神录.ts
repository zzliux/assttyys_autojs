import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func509 implements InterfaceFuncOrigin {
	id = 509;
	name = '进入式神录';
	desc = '从不同页面进入式神录';
	operator: InterfaceFuncOperatorOrigin[] = [
        {   // 庭院_式神录
		desc: [1280, 720,
			[[center, 560, 608, 0xbc3433],
			[center, 542, 639, 0x7b1515],
			[center, 575, 646, 0xc1b8b0],
			[center, 590, 638, 0xb07970]]
		],
		oper: [
			[right, 1280, 720, 1106, 623, 1153, 653, 1200]	// 点击式神录
		]
	}, {
		// 庭院_式神录，另外一种图标
		desc: [1280, 720,
			[
				[right, 1223, 662, 0xdbcbc7],
				[right, 1155, 41, 0xd7b188],
				[center, 451, 631, 0xe8e4e1],
				[center, 673, 651, 0xdb8b3f],
			]
		],
		oper: [
			[right, 1280, 720, 1106, 623, 1153, 653, 1200]	// 点击式神录
		]
	},
    {   // 检测是否为式神录
		desc: [
			1280, 720,
			[
				[left, 34, 27, 0xf7ebae],
				[left, 231, 10, 0x302118],
				[left, 164, 38, 0x48332c],
				[left, 252, 90, 0x594641],
				[left, 307, 94, 0x604c48],
				[center, 405, 97, 0x5c4a48],
				[center, 483, 98, 0x5c4946],
				[center, 493, 687, 0x43322a],
				[left, 29, 673, 0x413028],
			]
		]
	}];
    operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
        if (thisScript.global.change_shikigami_flag) {
            return false;
        } else {
            thisScript.oper({
                name: '庭院进入式神录',
                operator: [thisOperator[0], thisOperator[1]]
            })
            
            if (thisScript.oper({
                name: '是否为式神录',
                operator: [thisOperator[2]]
            })) {
                thisScript.global.change_shikigami_flag = true;
            }
        }
        return true;
    }
}
