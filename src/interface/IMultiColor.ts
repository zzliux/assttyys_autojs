export interface IMultiColor {
	[key: string]: {
		region: [number, number, number, number, number, number, number];
		similar?: number;
		desc: [
			[number, number, number, number][]
		][];
	}
}

export interface IMultiColorOrigin {
	[key: string]: {
		region: [number, number, number, number, number, number, number];
		similar?: number;
		desc: [number, number, 
			[number, number, number, number][]
		][];
	}
}
