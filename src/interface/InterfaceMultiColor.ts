export interface InterfaceMultiColor {
	[key: string]: {
		region: [number, number, number, number, number, number, number];
		similar?: number;
		desc: [
			[number, number, number, number][]
		][];
	}
}

export interface InterfaceMultiColorOrigin {
	[key: string]: {
		region: [number, number, number, number, number, number, number];
		similar?: number;
		desc: [number, number, 
			[number, number, number, number][]
		][];
	}
}
