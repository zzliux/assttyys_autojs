import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func017 implements IFuncOrigin {
	id = 17;
	name = '百鬼夜行';
	desc = '在百鬼夜行的界面，随机自由散豆';
	config = [{
		desc: '',
		config: [{
			name: 'mode',
			desc: '模式，快速模式用于清票，开始后以最快速度进行撒豆',
			type: 'list',
			data: ['快速模式', '普通模式'],
			default: '普通模式',
			value: null,
		}, {
			name: 'bossPosition',
			desc: '选择第几个鬼王',
			type: 'list',
			data: ['1', '2', '3', '随机'],
			default: '随机',
			value: null,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0
		desc: [1280, 720,
			[
				[left, 45, 42, 0xf5e5a3],
				[center, 242, 657, 0xf3b969],
				[center, 640, 65, 0x1C1321],
				[center, 598, 31, 0x201723],
				[center, 458, 583, 0x4f1e2c],
				[center, 371, 657, 0xffcf7a],
				[center, 392, 660, 0x422d2a],
				[center, 429, 658, 0x38272f]
			]
		],
		oper: [
			[center, 1280, 720, 388, 646, 413, 667, 1],
			[center, 1280, 720, 617, 643, 652, 675, 1]
		]
	}, { // 1
		desc: [1280, 720,
			[
				[left, 45, 42, 0xf5e5a3],
				[center, 242, 657, 0xf3b969],
				[center, 640, 65, 0x1C1321],
				[center, 598, 31, 0x201723],
				[center, 458, 583, 0x4f1e2c]
			]
		],
		oper: [
			[center, 1280, 720, 90, 270, 1252, 528, 10]
		]
	}, { // 2
		desc: [1280, 720,
			[
				[left, 45, 42, 0xf5e5a3],
				[center, 242, 657, 0xf3b969],
				[center, 640, 65, 0x1C1321],
				[center, 598, 31, 0x201723],
				[center, 458, 583, 0x4f1e2c]
			]
		],
		oper: [
			[center, 1280, 720, 90, 270, 1252, 528, 500]
		]
	}, { // 3 邀请好友点击+号
		desc: [1280, 720,
			[
				[center, 170, 600, 0xfff2ce],
				[center, 1128, 594, 0x402f1f],
				[center, 1084, 202, 0xe7d4cf],
				[center, 554, 514, 0x846866],
				[center, 195, 156, 0xf9edee]
			]
		],
		oper: [
			[center, 1280, 720, 152, 578, 190, 623, 1500]
		]
	}, { // 4 邀请好友
		desc: [1280, 720,
			[
				[center, 170, 600, 0xc3b99e],
				[center, 392, 156, 0xe7bc93],
				[center, 391, 200, 0xd7bfae],
				[center, 582, 208, 0xd7bfae],
				[center, 886, 276, 0xeac9a0],
				[center, 608, 277, 0xeac9a0],
				[center, 1084, 202, 0xb1a29e],
				[center, 1132, 590, 0x322518]]
		],
		oper: [
			[center, 1280, 720, 468, 233, 624, 550, 500],
			[center, 1280, 720, 731, 229, 890, 563, 500],
		]
	}, { // 5
		desc: [1280, 720,
			[
				[center, 626, 64, 0x1F1627],
				[center, 45, 45, 0xf5e5a3],
				[right, 1177, 574, 0xc7a185],
				[center, 47, 650, 0x201018],
				[center, 997, 628, 0x7b4341]]
		],
		oper: [
			[center, 1280, 720, 245, 444, 304, 522, 500], // 第一个怪物位置
			[center, 1280, 720, 591, 429, 654, 504, 500], // 第二个怪物位置
			[center, 1280, 720, 978, 460, 1046, 515, 500], // 第三个怪物位置
			[center, 1280, 720, 1132, 562, 1210, 640, 9000], // 开始
		]
	}, { // 6
		desc: [1280, 720,
			[
				[center, 204, 277, 0xf0f0df],
				[center, 133, 122, 0xb5b5d6],
				[center, 102, 413, 0xf5ede5],
				[center, 233, 583, 0xeeeae2],
				[center, 1164, 245, 0xefebe3],
				[center, 698, 88, 0x7b7b9c]
			]
		],
		oper: [
			[center, 1280, 720, 71, 75, 207, 642, 2000]
		]
	}, { // 7
		desc: [1280, 720,
			[
				[center, 1128, 594, 0x402f1f],
				[center, 1084, 202, 0xe7d4cf],
				[center, 554, 514, 0x846866],
				[center, 195, 156, 0xf9edee]
			]
		],
		oper: [
			[center, 1280, 720, 1084, 576, 1138, 628, 1500]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['17'];
		if (thisScript.oper({
			id: 17,
			name: '百鬼夜行_杂项_前',
			operator: [thisOperator[3]]
		})) {
			return true
		}
		if (thisScript.oper({
			id: 17,
			name: '百鬼夜行_邀请好友',
			operator: [{
				desc: thisOperator[4].desc,
				oper: [thisOperator[4].oper[random(0, 1)]]
			}]
		})) {
			thisScript.keepScreen(false);
		}
		if (thisScript.oper({
			id: 17,
			name: '百鬼夜行_杂项_后',
			operator: [thisOperator[6], thisOperator[7]]
		})) {
			return true
		}
		let oper = null;
		if ('随机' === thisconf.bossPosition) {
			oper = [thisOperator[5].oper[random(0, 2)], thisOperator[5].oper[3]];
		} else {
			oper = [thisOperator[5].oper[(thisconf.bossPosition as number) - 1], thisOperator[5].oper[3]];
		}
		if (thisScript.oper({
			id: 18,
			name: '百鬼夜行_选择鬼王挑战',
			operator: [{
				desc: thisOperator[5].desc,
				oper: oper
			}]
		})) {
			return true;
		}
		if (thisconf && thisconf.mode === '快速模式') {
			if (thisScript.oper({
				id: 17,
				name: '百鬼夜行_随机散豆_拖10豆',
				operator: [{
					desc: thisOperator[0].desc
				}]
			})) {
				thisScript.regionSwipe(thisOperator[0].oper[0], thisOperator[0].oper[1], [100, 300], 200);
				return true;
			}
			return thisScript.oper({
				name: '百鬼夜行_随机散豆',
				operator: [thisOperator[1]]
			});
		}
		if (thisScript.oper({
			id: 17,
			name: '百鬼夜行_随机散豆',
			operator: [{ desc: thisOperator[2].desc }]
		})) {
			thisScript.regionClick(thisOperator[2].oper);
			return true;
		}
	}
}
