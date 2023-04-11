import { Script } from "@/system/script";

export interface IFuncConfigOrigin {
	desc: string;
	config: Array<{
		name: string,
		desc: string,
		// TODO 修改为枚举类型
		type: string, // 'switch' | 'integer' | 'text' | 'scheme' | 'list',
		default: boolean | string | number
	}>
}

export interface IFuncOperatorOrigin {
	desc?: [number, number, 
		[number, number, number, number][]
	];
	oper?: [number, number, number, number, number, number, number, number][];
	operStepRandom?: [number, number, number, number, number, number, number, number, number][][];
	retest?: number;
	notForCnt?: boolean;
}

export interface IFuncOperator {
	desc?: [number, number, number, number][];
	oper?: [number, number, number, number, number][];
	operStepRandom?: [number, number, number, number, number, number, number, number, number][][];
	retest?: number;
	notForCnt?: boolean;
}


export interface IFuncOrigin {
	id: number;
	name: string;
	desc?: string;
	config?: IFuncConfigOrigin[];
	operator?: IFuncOperatorOrigin[];
	operatorFunc?(thisScript: Script, thisOperator: IFuncOperator[]): boolean;
}

export interface IFunc {
	id?: number;
	name?: string;
	desc?: string;
	config?: IFuncConfigOrigin[];
	operator?: IFuncOperator[];
	operatorFunc?(thisScript: Script, thisOperator: IFuncOperator[]): boolean;
	transed?: boolean;
}