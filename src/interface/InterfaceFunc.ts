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
	// desc?: [number, number, 
	// 	Array<[number, number, number, number]>
	// ];
	desc?: (number | number[][])[]
	oper?: any;
	operStepRandom?: any;
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