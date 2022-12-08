
export interface InterfaceScheme {
	id: number;
	schemeName: string;
	groupName?: string;
	star?: boolean;
	list: Array<number>
	// config?: { // 方案中的配置，如返回空的话使用默认配置
	// 	'1': { // key为功能的ID（1表示准备）
	// 		enabled: false,
	// 		position: '五人-左1'
	// 	}
	// },
	config?: any;
	commonConfig?: object;
}