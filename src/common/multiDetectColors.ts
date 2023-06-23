import { IMultiDetectColorsOrigin } from "@/interface/IMultiColor";

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

const multiDetectColors: IMultiDetectColorsOrigin = {
    '准备界面': {
        desc: [1280, 720,
            [
                [right, 1124, 698, 0xd0af86],
                [right, 1240, 702, 0xcead83],
                [right, 1191, 596, 0xa46149],
                [right, 1182, 586, 0xf7e6c3],
                [center, 360, 699, 0x241818],
                [left, 32, 23, 0xdbb48b]
            ]
        ]
    },
    '战斗界面_手动状态': {
        desc: [
			1280, 720,
			[
				[left, 34, 23, 0xdbb48b],
				[left, 106, 24, 0xcfa375],
				[right, 1270, 132, 0x48371f],
				[right, 1270, 700, 0x241919],
				[left, 46, 671, 0xefc9ab],
				[left, 81, 670, 0xf0caac],
			]
		]
    }
};


export default multiDetectColors;
