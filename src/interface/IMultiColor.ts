export interface IMultiFindColorsOrigin {
	[key: string]: {
		region: [number, number, number, number, number, number, number];
		similar?: number;
		desc: [number, number,
			[number, number, number, number][]
		][];
	}
}

export interface IMultiFindColors {
	[key: string]: {
		region: [number, number, number, number, number, number, number];
		similar?: number;
		desc: [
			[number, number, number, number][]
		][];
	}
}

export interface IMultiDetectColorsOrigin {
	[key: string]: {
		// similar?: number;  目前暂时用不上

		// desc不像多点找色做成集合，只保留一个，毕竟针对不同界面的处理方式肯定是不一样的
		desc: [number, number,
			[number, number, number, number][]
		]
	}
}

export interface IMultiDetectColors {
	[key: string]: {
		// similar?: number;  目前暂时用不上
		desc: [number, number, number, number][]
	}
}
