import { IFunc } from './IFunc';

export interface IScheme {
    id: number;
    schemeName: string;
    groupNames?: string[];
    inner?: boolean;
    star?: boolean;

    /**
     * 功能id的清单
     */
    list: number[];
    config?: {
        [key: number]: {
            [key: string]: string | boolean | number | string[]
        }
    };
    commonConfig?: {
        [key: string]: string | boolean | number
    };
    funcList?: IFunc[];
}