import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func317 implements IFuncOrigin {
	id = 317;
	name = '清自己鬼王';
	desc: '只清理1-4星鬼王，56星自行开启通知或不时查看（脚本会停下）';
	config = [{
		desc: '',
		config: [{
			name: 'xy',
			desc: '点击坐标范围，格式为：左上角x,左上角y,右下角x,右下角y，例：1134,590,1225,645',
			type: 'text',
			default: '1134,590,1225,645',
			value: null,
		}, {
			name: 'exit',
			desc: '达到时间后退出(需要ocr)',
			type: 'switch',
			default: false,
			value: null,
		}, {
			name: 'time',
			desc: '目标时间（输入数字，逗号分隔）',
			type: 'text',
			default: '1,20',
			value: null,
		}]
	}]
	operator: IFuncOperatorOrigin[] = [{ // 0 鬼王界面
		desc: [
			1280, 720,
			[
				[left, 310, 28, 0xa89cb1],
				[left, 240, 36, 0x583716],
				[left, 119, 37, 0xf8f3e0],
				[left, 32, 34, 0xf8ecaf],
				[left, 36, 685, 0xccb085],
			]
		]
	}, { // 1  易级别
		desc: [
			1280, 720,
			[
				[left, 33, 310, 0x969696],
				[left, 41, 302, 0x7a7a7a],
				[left, 50, 311, 0xaeaeae],
				[left, 41, 312, 0xc8cfd6],
				[left, 41, 321, 0xebebeb],
			]
		]
	}, { // 2  中级别
		desc: [
			1280, 720,
			[
				[left, 32, 311, 0x147acf],
				[left, 50, 312, 0x2288dd],
				[left, 41, 302, 0x0c61be],
				[left, 41, 314, 0xdde8f1],
				[left, 40, 309, 0xd0ddea],
			]
		]
	}, { // 3  高级别
		desc: [
			1280, 720,
			[
				[left, 33, 311, 0xac2fce],
				[left, 41, 302, 0x811ab4],
				[left, 50, 311, 0xb935d7],
				[left, 42, 307, 0xc3bdda],
				[left, 41, 320, 0xc947e5],
			]
		]
	}, { // 4  难级别
		desc: [
			1280, 720,
			[
				[left, 33, 311, 0xf48b11],
				[left, 40, 304, 0xf26b0d],
				[left, 50, 310, 0xf4910b],
				[left, 45, 315, 0xe6ebf3],
				[left, 41, 309, 0xdee5e9],
			]
		]
	}, {// 5  极级别
	}, { // 6  搜索鬼王
		desc: [
			1280, 720,
			[
				[right, 1098, 635, 0xc48c16],
				[right, 1224, 639, 0xbe8b17],
				[right, 1101, 620, 0xce9415],
				[right, 1225, 621, 0xc89116],
				[right, 1165, 647, 0xf8ecb9],
				[right, 1163, 613, 0xfcecbb],
			]
		],
		oper: [
			[center, 1280, 720, 1114, 590, 1209, 671, 1000],
		]
	}, { // 7  强力状态切换普通
		desc: [
			1280, 720,
			[
				[right, 1247, 506, 0xa88d59],
				[right, 1248, 524, 0xc4a56b],
				[right, 1085, 505, 0x4a3c21],
				[right, 1123, 527, 0x4d3f23],
			]
		],
		oper: [
			[center, 1280, 720, 1071, 503, 1152, 528, 1000],
		]
	}, { // 8  挑战鬼王
		oper: [
			[center, 1280, 720, 1108, 583, 1215, 658, 1000],
		]
	}, { // 9  结算中
		desc: [
			1280, 720,
			[
				[center, 666, 510, 0xfdebb0],
				[center, 682, 520, 0xffeeb3],
				[center, 708, 496, 0xffeeb3],
				[center, 722, 521, 0xffeeb3],
				[center, 757, 507, 0xffeeb3],
			]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 317,
			name: '级别状态',
			operator: [thisOperator[9], thisOperator[6]]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 317,
			name: '鬼王界面',
			operator: [thisOperator[0]]
		}) && thisScript.oper({
			id: 317,
			name: '级别状态',
			operator: [thisOperator[1], thisOperator[2], thisOperator[3]]
		})) {
			thisScript.oper({
				id: 317,
				name: '强力状态切换普通',
				operator: [thisOperator[7]]
			})
			thisScript.regionClick([thisOperator[8].oper[0]]);
			return true;
		}
		return false;
	}
}