import { InterfaceFunc } from "./InterfaceFunc";

export interface InterfaceScheme {
	id: number;
	schemeName: string;
	groupName?: string;
	inner?: boolean;
	star?: boolean;

	/**
	 * 功能id的清单
	 */
	list: number[];
	config?: {
		[key: number]: {
			[key: string]: string | boolean | number
		}
	};
	commonConfig?: {
		[key: string]: string | boolean | number
	};
	funcList?: InterfaceFunc[];
}