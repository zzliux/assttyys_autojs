import { Script } from '@/system/script';
import { SchemeConfigOperator } from './SchemeConfigOperator';


/**
 * onSchemeSwitchIn 上一个方案切入
 * onSchemeStart 当前方案运行
 * onSchemeStop 当前方案停止
 * onSchemeSwitchOut 当前方案切出
 * @param thisScript
 * @param lastConfigOpeator 上一个方案配置操作类
 * @param thisConfigOperator 当前个方案配置操作类
 */
export type schemeSwitchInFunc = (thisScript: Script, lastConfigOpeator: SchemeConfigOperator, thisConfigOperator: SchemeConfigOperator) => void;
export type schemeStartFunc = (thisScript: Script, thisConfigOperator: SchemeConfigOperator) => void;
export type schemeStopFunc = (thisScript: Script, thisConfigOperator: SchemeConfigOperator) => void;
export type schemeSwitchOutFunc = (thisScript: Script, thisConfigOperator: SchemeConfigOperator, nextConfigOperator: SchemeConfigOperator) => void;


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
	] | string; // 如果是string的话表示从multiDetectColors.ts里面引用
	oper?: [number, number, number, number, number, number, number, number][];
	operStepRandom?: [number, number, number, number, number, number, number, number, number][][];
	retest?: number;
	notForCnt?: boolean;
}

export interface IFuncOperator {
	desc?: [number, number, number, number][] | string;
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
	transed?: boolean;

	onSchemeSwitchIn?: schemeSwitchInFunc;
	onSchemeStart?: schemeStartFunc;
	onSchemeStop?: schemeStopFunc;
	onSchemeSwitchOut?: schemeSwitchOutFunc;
}

export interface IFunc {
	id?: number;
	name?: string;
	desc?: string;
	config?: IFuncConfigOrigin[];
	operator?: IFuncOperator[];
	operatorFunc?(thisScript: Script, thisOperator: IFuncOperator[]): boolean;
	transed?: boolean;

	onSchemeSwitchIn?: schemeSwitchInFunc;
	onSchemeStart?: schemeStartFunc;
	onSchemeStop?: schemeStopFunc;
	onSchemeSwitchOut?: schemeSwitchOutFunc;
}