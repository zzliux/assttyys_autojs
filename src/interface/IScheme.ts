import { IFunc } from './IFunc';

export type SchemeConfig = {
	[key: number]: {
		[key: string]: string | boolean | number
	}
};

export type CommonConfig = {
	[key: string]: string | boolean | number
};

export interface IScheme {
	id: number;
	schemeName: string;
	groupName?: string;
	inner?: boolean;
	star?: boolean;

	/**
	 * 功能id的清单
	 */
	list: number[];
	config?: SchemeConfig;
	commonConfig?: CommonConfig;
	funcList?: IFunc[];
}