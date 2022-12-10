import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func220 implements InterfaceFuncOrigin {
	id = 220;
	name = '夜行荒河_杂项';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[right, 1201, 48, 0x725742],
				[right, 1203, 134, 0x745944],
				[left, 47, 46, 0xf5e4a2],
				[right, 1165, 561, 0xd7c6a4],
				[left, 356, 32, 0x282f57],
				[right, 1208, 230, 0x735843],
			]
		],
		oper: [
			[right, 1280, 720, 1119, 560, 1214, 646, 1500],
		]
	}];
}