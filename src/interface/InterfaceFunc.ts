import { Script } from "@/system/script";

export interface InterfaceFunc {
    id: number;
	name: string;
	desc?: string;
	config?: any;
	operator?: any;
	operatorFunc?: (thisScript: Script, thisOperator: any) => boolean;
}