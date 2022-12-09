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
	desc?: [number, number, 
		[number, number, number, number][]
	];
	oper?: [number, number, number, number, number, number, number, number][];
	operStepRandom?: [number, number, number, number, number, number, number, number, number][][];
	retest?: number;
	notForCnt?: boolean;
}

export interface InterfaceFuncOperator {
	desc?: [number, number, number, number][];
	oper?: [number, number, number, number, number][];
	operStepRandom?: [number, number, number, number, number, number, number, number, number][][];
	retest?: number;
	notForCnt?: boolean;
}


export interface InterfaceFuncOrigin {
	id: number;
	name: string;
	desc?: string;
	config?: InterfaceFuncConfigOrigin[];
	operator?: InterfaceFuncOperatorOrigin[];
	operatorFunc?(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean;
}

export interface InterfaceFunc {
	id?: number;
	name?: string;
	desc?: string;
	config?: InterfaceFuncConfigOrigin[];
	operator?: InterfaceFuncOperator[];
	operatorFunc?(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean;
	transed?: boolean;
}