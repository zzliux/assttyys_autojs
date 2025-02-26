import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func403 implements IFuncOrigin {
	id = 403;
	name = '超鬼王_低星';
	desc = '合成并攻打234星鬼王';
	operator: IFuncOperatorOrigin[] = [{ // 0 合成界面
		desc: [
			1280, 720,
			[
				[right, 1211, 188, 0xf0e6d8],
				[right, 1227, 214, 0xeccdb5],
				[right, 1239, 187, 0xede6da],
				[right, 1249, 173, 0xff1616],
			]
		],
		oper: [
			[center, 1280, 720, 1202, 180, 1244, 213, 1000],
		]
	}, { // 1 合成按钮
		desc: [
			1280, 720,
			[
				[center, 638, 591, 0xffb278],
				[center, 636, 615, 0xfed2b1],
				[center, 727, 592, 0xffb67f],
				[center, 721, 613, 0xffd0ae],
				[center, 688, 600, 0x754e2e],
			]
		],
		oper: [
			[center, 1280, 720, 623, 588, 728, 617, 1000],
			[center, 1280, 720, 836, 589, 945, 621, 3000],
		]
	}, { // 2 无合成次数
		desc: [
			1280, 720,
			[
				[center, 355, 244, 0x80644b],
				[center, 547, 238, 0xfadd9d],
				[center, 686, 245, 0xfadd9d],
				[center, 771, 259, 0xfadd9d],
				[center, 382, 303, 0xbb5816],
				[center, 380, 398, 0xbd8d12],
			]
		],
		oper: [
			[center, 1280, 720, 926, 226, 962, 260, 1000],
			[center, 1280, 720, 1045, 58, 1087, 88, 1000],
		]
	}, { // 3 召唤队列
		desc: [
			1280, 720,
			[
				[left, 150, 156, 0x816d53],
				[left, 204, 157, 0x847254],
				[left, 164, 176, 0x837052],
				[left, 187, 178, 0x857255],
				[left, 178, 209, 0x887356],
				[left, 90, 169, 0x463824],
				[right, 1159, 589, 0x222027],
				[right, 1199, 597, 0x222027],
				[right, 1169, 631, 0x222027],
				[right, 1197, 638, 0x222027],
			]
		],
		oper: [
			[center, 1280, 720, 1127, 520, 1236, 540, 1000],
		]
	}, { // 4 关闭强力
		desc: [
			1280, 720,
			[
				[right, 1127, 527, 0xfefefa],
				[right, 1136, 520, 0xfffefb],
				[right, 1128, 520, 0x0d84a5],
				[right, 1135, 530, 0x0d83a3],
			]
		],
		oper: [
			[center, 1280, 720, 1119, 516, 1137, 532, 1000],
		]

	}, { // 5 召唤界面
		desc: [
			1280, 720,
			[
				[center, 502, 200, 0xfadd9d],
				[center, 607, 208, 0xdfc38b],
				[center, 684, 202, 0xfadd9d],
				[center, 710, 202, 0xfadd9d],
				[center, 752, 198, 0xfadd9d],
				[right, 993, 209, 0xe8d4cf],
				[center, 331, 210, 0x584227],
			]
		]
	}, { // 6 结算分数中
		desc: [
			1280, 720,
			[
				[left, 156, 179, 0xece3d6],
				[left, 180, 179, 0xfaf3e6],
				[left, 196, 181, 0xe4dbce],
				[left, 217, 180, 0xece4d7],
				[left, 240, 179, 0xe3dacc],
				[left, 260, 178, 0xf1eadd],
				[left, 277, 176, 0xe4dcce],
			]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 3000],
		]
	}, { // 7 从花间进入超鬼王
		desc: [
			1280, 720,
			[
				[right, 1146, 597, 0xe1d6c1],
				[right, 1183, 600, 0x3c2b26],
				[right, 1205, 621, 0x3c2b26],
				[right, 1150, 646, 0xfd892e],
				[right, 1163, 634, 0xddd1bb],
				[right, 1170, 588, 0xe3d8c2],
			]
		],
		oper: [
			[center, 1280, 720, 16, 19, 59, 58, 1000],
			[center, 1280, 720, 748, 160, 788, 272, 1000],
		]
	}, { // 8 分数结算
		desc: [
			1280, 720,
			[
				[center, 568, 615, 0xfcdf8c],
				[center, 566, 643, 0xffebb6],
				[center, 707, 618, 0xfee290],
				[center, 704, 639, 0xffeab0],
				[center, 634, 633, 0xffe6a1],
			]
		],
		oper: [
			[center, 1280, 720, 560, 609, 719, 649, 1000],
		]
	}, { // 9 低星鬼王攻打
		desc: [
			1280, 720,
			[
				[left, 261, 164, 0xfff2c9],
				[left, 269, 170, 0xf7eac1],
				[left, 266, 190, 0xead9c3],
				[left, 284, 189, 0xfff2c9],
				[left, 284, 171, 0xefdece],
				[center, 323, 187, 0xefd88b],
				[right, 1149, 619, 0x222027],
				[right, 1172, 596, 0xe6dbc5],
				[right, 1204, 632, 0x222027],
			]
		],
		oper: [
			[center, 1280, 720, 1129, 575, 1223, 662, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 403,
			name: '召唤界面',
			operator: [thisOperator[5]]
		})) {
			const point = thisScript.findMultiColor('超鬼王_低星');
			if (point) {
				console.log('找到超鬼王_低星');
				const oper = [[
					point.x,
					point.y - 10,
					point.x + 10,
					point.y + 5,
					1200
				], [
					566, 438, 711, 477, 1200
				]];
				thisScript.regionClick(oper);
				return true;
			} else {
				thisScript.doPush(thisScript, { text: '已完毕，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
			}
		}
		if (thisScript.oper({
			id: 403,
			name: '鬼王_杂项',
			operator: thisOperator
		})) {
			return true;
		}
		return false;
	}
}
