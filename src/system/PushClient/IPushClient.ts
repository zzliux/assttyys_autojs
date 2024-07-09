type ConfigDefineItem = {
    desc: string,
    name: string,
    type: string, // 'switch' | 'integer' | 'text' | 'scheme' | 'list',
    default: boolean | string | number
};

type Config = Record<string, boolean | string | number>;

type Message = {
    type: 'text',
    data: string,
} | {
    type: 'image',
    data: any // android.graphics.Bitmap
}

export interface IPushClient {

    /**
     * 推送组件名称/类型
     */
    name: string;

    /**
     * 推送配置，如url,token之类的放这里面
     */
    configDefine?: ConfigDefineItem[];

	/**
	 * 推送消息
	 * @param data 推送数据
	 */
	push(data: Message[], config: Config): void;
}