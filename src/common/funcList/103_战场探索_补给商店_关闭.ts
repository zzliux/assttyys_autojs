import { InterfaceFunc, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func103 implements InterfaceFunc {
	id = 103;
	name = '战场探索_补给商店_关闭';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280,720,
			[[right,1090,619,0xdbd3ba],
			[right,1203,632,0xbdb493],
			[center,878,524,0x9a7a62],
			[center,1019,202,0x9d7c64],
			[center,1207,77,0x623038],
			[center,1208,91,0xe7d5cf]]
		],
		oper: [
			[center, 1280, 720, 1189,70, 1230,114, 1000]
		]
	}]
}