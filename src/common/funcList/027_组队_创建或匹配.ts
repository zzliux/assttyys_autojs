import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func027 implements InterfaceFuncOrigin {
	id = 27;
	name = '组队_创建或匹配';
	desc = '在庭院中点击下方的组队按钮后点击创建或排队按钮';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				//妖气自动匹配中的 图像
				[center, 392, 46, 0x644217],
				[center, 804, 44, 0x986f55],
				[center, 660, 53, 0xac9e90],
				[center, 704, 27, 0xaa9379],
				[center, 807, 27, 0x9d7051],
				[center, 556, 98, 0x2e090d],
				[center, 397, 22, 0x766838]
			]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 5000] // 匹配中等5秒
		]
	}, {
		// 庭院未打开菜单
		desc: [1280, 720,
			[[right, 1211, 606, 0x885f46],
			[right, 1205, 624, 0x987777],
			[right, 1208, 646, 0xaf4949],
			[right, 1175, 680, 0xb08e7d]]
		],
		oper: [
			[right, 1280, 720, 1168, 592, 1230, 690, 1200]
		]
	}, { // 庭院已打开菜单
		desc: [1280, 720,
			[
				[center, 560, 608, 0xbc3433],
				[center, 542, 639, 0x7b1515],
				[center, 575, 646, 0xc1b8b0],
				[center, 590, 638, 0xb07970]
			]
		],
		oper: [
			[left, 1280, 720, 427, 619, 486, 683, 1000]
		]
	}, {
		// 庭院已打开菜单，另外一种图标
		desc: [1280, 720,
			[
				[right, 1223, 662, 0xdbcbc7],
				[right, 1155, 41, 0xd7b188],
				[center, 451, 631, 0xe8e4e1],
				[center, 673, 651, 0xdb8b3f],
			]
		],
		oper: [
			[left, 1280, 720, 427, 619, 486, 683, 1000]
		]
	}, {
		desc: [1280, 720,
			[[center, 840, 143, 0xd7c8ba],
			[center, 623, 620, 0xccbbaa],
			[center, 721, 625, 0xf4b25f],
			[center, 422, 631, 0xdc935a],
			[center, 722, 156, 0xdbcdc4],
			[center, 1134, 98, 0x482f28]]
		],
		oper: [
			[center, 1280, 720, 702, 601, 865, 650, 1000] //组队界面 自动匹配
		]
	}, {
		desc: [1280, 720,// 组队界面
			[[left, 42, 38, 0xf7e5a7],
			[left, 76, 614, 0x94796b],
			[right, 1194, 34, 0xd6c7a5],
			[right, 1071, 628, 0xf7b263]]
		],
		oper: [
			[center, 1280, 720, 993, 605, 1151, 649, 1000]// 创建队伍
		]
	}, {
		desc: [1280, 720,//创建队伍
			[[left, 228, 62, 0xed8ba1],
			[center, 398, 66, 0x624430],
			[center, 402, 584, 0xde6952],
			[center, 877, 590, 0xf7b263]]
		],
		oper: [
			[center, 1280, 720, 754, 499, 778, 521, 1000],//不公开
			[center, 1280, 720, 818, 567, 932, 612, 1000]//创建
		]
	}]
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 27,
			name: '组队_匹配',
			operator: thisOperator.slice(0,-1)
		})) {
			return true;
		};
		if (thisScript.oper({
			id: 27,
			name: '组队_创建',
			operator: [thisOperator[6]]
		})) {
			if (++thisScript.global.create_NumOT > 3){
				thisScript.doOspPush(thisScript, { text: '体力不够创房，已停止。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
        thisScript.stop();  
			}
			return true;
		};
		if (!thisScript.oper({
			id: 27,
			name: '组队_非创建界面',
			operator: [thisOperator[6]]
		})) {
			thisScript.global.create_NumOT=0;
		};
		return false;
	}
}