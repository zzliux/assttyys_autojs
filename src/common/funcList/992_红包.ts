import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
// const left = 0;
const center = 1;
// const right = 2;

export class Func992 implements IFuncOrigin {
	id = 992;
	name = '御祝都是我的';
	desc = '御祝，懂的都懂';
	operator: IFuncOperatorOrigin[] = [
		{
			// 点击鸢尾
			desc: [
				1280, 720,
				[
					[center, 535, 47, 0xd1c1b8],
					[center, 751, 95, 0xdacbbe],
					[center, 772, 121, 0xcbb1d3],
					[center, 523, 128, 0xf9f1e9],
					[center, 520, 588, 0xdecfbb],
					[center, 772, 590, 0xbfacd0],
					[center, 669, 484, 0xffda5f],
				]
			],
			oper: [
				[center, 1280, 720, 615, 452, 690, 523, 60]	// 点击开
			]
		},
		{ // 点击夜樱
			desc: [
				1280, 720,
				[
					[center, 532, 48, 0xd6c6bd],
					[center, 756, 99, 0xdacabf],
					[center, 771, 130, 0xf79faa],
					[center, 520, 119, 0xf79fad],
					[center, 625, 257, 0xefe7db],
					[center, 521, 585, 0xf7af92],
					[center, 773, 590, 0xf7af92],
					[center, 669, 484, 0xffda5f],
				]
			],
			oper: [
				[center, 1280, 720, 615, 452, 690, 523, 60]	// 点击开
			]
		},
		{
			desc: //  点击红包
				[
					1280, 720,
					[
						[center, 669, 482, 0xffdc5f],
						[center, 637, 467, 0xffec68],
						[center, 635, 498, 0xffc157],
						[center, 632, 471, 0xffe967],
					]
				],
			oper: [
				[center, 1280, 720, 615, 452, 690, 523, 60]	// 点击开
			]
		}, {
			desc: // 检测_是否为已领取
				[
					1280, 720,
					[
						[center, 538, 76, 0xd2c2b5],
						[center, 920, 129, 0xd3c4b6],
						[center, 547, 300, 0xe3d7cd],
						[center, 808, 192, 0x9a3034],
						[center, 882, 238, 0xd3d3d3],
						[center, 629, 227, 0x9a3034],
					]
				],
			oper: [
				[center, 1280, 720, 894, 52, 926, 83, 1200]   //  点击关闭
			]
		}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {

		if (thisScript.oper({
			id: 992,
			name: '点击鸢尾',
			operator: [{
				desc: thisOperator[0].desc,
				oper: thisOperator[0].oper
			}]
		})) {
			return true;
		}

		if (thisScript.oper({
			id: 992,
			name: '点击夜樱',
			operator: [{
				desc: thisOperator[1].desc,
				oper: thisOperator[1].oper
			}]
		})) {
			return true;
		}

		if (thisScript.oper({
			id: 992,
			name: '点击红包',
			operator: [{
				desc: thisOperator[2].desc,
				oper: thisOperator[2].oper
			}]
		})) {
			return true;
		}

		if (thisScript.oper({
			id: 992,
			name: '退出领取页',
			operator: [thisOperator[3]]
		})) {
			return true;
		}

		const point1 = thisScript.findMultiColor('红包_皇菊御祝');

		if (point1) {
			console.log('查找红包成功');
			const oper = [[
				point1.x - 10,
				point1.y - 10,
				point1.x + 10,
				point1.y + 10,
				120
			]];
			thisScript.regionClick(oper);
			return true;
		}

		const point2 = thisScript.findMultiColor('红包_鸢尾御祝');

		if (point2) {
			console.log('查找红包成功');
			const oper = [[
				point2.x - 10,
				point2.y - 10,
				point2.x + 10,
				point2.y + 10,
				120
			]];
			thisScript.regionClick(oper);
			return true;
		}

		const point3 = thisScript.findMultiColor('红包_夜樱御祝');

		if (point3) {
			console.log('查找红包成功');
			const oper = [[
				point3.x - 10,
				point3.y - 10,
				point3.x + 10,
				point3.y + 10,
				120
			]];
			thisScript.regionClick(oper);
			return true;
		}

		return false;
	}
}
