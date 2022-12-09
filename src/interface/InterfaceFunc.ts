import { Script } from "@/system/script";

export interface InterfaceFuncConfigOrigin {
	desc: string;
	config: Array<{
		name: string,
		desc: string,
		// TODO 修改为枚举类型
		type: string, // 'switch' | 'integer' | 'text' | 'scheme' | 'list',
		default: boolean | string | number
	}>
}

export interface InterfaceFuncOperatorOrigin {
	desc?: [devScreenWidth: number, devScreenHeight: number, 
		colorDescSingle: [direction: number, x: number, y: number, color: number][]
	];
	// desc?: (number | number[][])[]
	oper?: [direction: number, devScreenWidth: number, devScreenHeight: number, x0: number, y0: number, x1: number, y1: number, delay: number][];
	operStepRandom?: [direction: number, devScreenWidth: number, devScreenHeight: number, x0: number, y0: number, x1: number, y1: number, delay: number, randomWeight: number][][];
	retest?: number;
	notForCnt?: boolean;
}


export interface InterfaceFunc {
	id: number;
	name: string;
	desc?: string;
	config?: Array<InterfaceFuncConfigOrigin>;
	operator?: Array<InterfaceFuncOperatorOrigin>;
	operatorFunc?(thisScript: Script, thisOperator: any): boolean;
}