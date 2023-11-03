import {
	IFuncOrigin,
	IFuncOperatorOrigin,
	IFuncOperator,
} from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func030 implements IFuncOrigin {
	id = 30;
	name = '斗技_杂项';
	desc = '斗技界面点击“战”按钮，自动跳过段位提升等';
	config = [
		{
			desc: '',
			config: [
				{
					name: 'level',
					desc: '达到指定段位停止运行(只支持向上选择,比如:当前段位七段,选择了五段为错误行为)',
					type: 'list',
					data: ['名士', '四段', '五段', '九段'],
					default: '名士',
				},
			],
		},
	];
	operator: IFuncOperatorOrigin[] = [
		{
			// 0 检测_斗技主界面
			desc: '斗技主界面',
			oper: [[right, 1280, 720, 1166, 580, 1232, 638, 1000]],
		},
		{
			// 1 有段位保护
			desc: [
				1280,
				720,
				[
					// [left, 37, 25, 0xf6e6a7],  // 图裂识别容错
					[left, 207, 26, 0x583716],
					[right, 1206, 74, 0x745a45],
					[right, 1206, 178, 0x745a44],
					[right, 1179, 594, 0x585a5d],
					[right, 1203, 601, 0x565358],
					[right, 1179, 624, 0xc6cbb9],
				],
			],
			oper: [[right, 1280, 720, 1166, 580, 1232, 638, 1000]],
		},
		{
			// 2 有裂痕的段位保护
			desc: [
				1280,
				720,
				[
					// [left, 37, 25, 0xf6e6a7],  // 图裂识别容错
					[left, 207, 26, 0x583716],
					[right, 1206, 74, 0x745a45],
					[right, 1206, 178, 0x745a44],
					[right, 1182, 574, 0xaeccda],
					[right, 1162, 600, 0xaec8cd],
					[right, 1179, 601, 0x657e90],
					[right, 1180, 625, 0xb4cbcf],
				],
			],
			oper: [[right, 1280, 720, 1166, 580, 1232, 638, 1000]],
		},
		{
			// 3 段位上升
			desc: [
				1280,
				720,
				[
					[center, 424, 329, 0xaa8957],
					[center, 579, 298, 0xe6d8a9],
					[center, 738, 382, 0xb6261c],
					[center, 774, 293, 0xf3e5ba],
					[center, 774, 332, 0x967742],
					[center, 869, 325, 0x9d824c],
				],
			],
			oper: [[right, 1280, 720, 1166, 580, 1232, 638, 1000]],
		},
		{
			// 4 自动上阵
			desc: [
				1280, 720,
				[
					[center, 614, 60, 0x1c100c],
					[center, 628, 58, 0xfff1cf],
					[center, 666, 56, 0x190f0c],
					[left, 34, 143, 0x826851],
					[left, 44, 149, 0xffffff],
					[left, 60, 158, 0x826851],
					[left, 69, 512, 0x423141],
					[right, 1166, 532, 0xd5bb9d],
					[left, 49, 181, 0xffffff],
					[left, 65, 145, 0xffffff],
				]
			],
			oper: [[left, 1280, 720, 44, 139, 77, 178, 1000]],
		},
		{
			// 5,斗技界面
			desc: [
				1280,
				720,
				[
					// [left, 36, 28, 0xf5eaab],  // 图裂识别容错
					[left, 221, 28, 0x583716],
					[right, 1207, 87, 0x725844],
					[right, 1204, 185, 0x735943],
				],
			],
		},
		{
			// 6,五段
			desc: [
				1280,
				720,
				[
					[center, 598, 344, 0x201b1c],
					[center, 635, 366, 0xcfcecb],
					[center, 675, 344, 0x282121],
					[center, 614, 427, 0xf9eec9],
					[center, 611, 452, 0xf9eec9],
				],
			],
		},
		{
			// 7,九段
			desc: [
				1280,
				720,
				[
					[center, 598, 344, 0xcf9432],
					[center, 638, 354, 0x8e5b9f],
					[center, 679, 348, 0xd09633],
					[center, 611, 432, 0xf9eec9],
					[center, 612, 421, 0x894212],
				],
			],
		},
		{
			// 8,四段
			desc: [
				1280,
				720,
				[
					[center, 599, 342, 0x695649],
					[center, 639, 366, 0xd1cecb],
					[center, 673, 346, 0x69544b],
					[center, 612, 428, 0xf0e0ba],
					[center, 614, 444, 0x894212],
				],
			],
		},
		{
			// 9,八段
			desc: [
				1280,
				720,
				[
					[center, 601, 345, 0x200204],
					[center, 638, 370, 0xbd7924],
					[center, 679, 348, 0x200204],
					[center, 602, 441, 0xf9eec9],
					[center, 623, 440, 0xf9eec9],
				],
			],
		},
		{
			// 10 适配支持逐原之争
			desc: [
				1280,
				720,
				[
					[left, 36, 24, 0xf7eaab],
					[right, 1208, 81, 0x90685c],
					[right, 1228, 621, 0xd6c095],
					[right, 1203, 602, 0x3b1e0d],
					[right, 974, 640, 0xc9a87b],
					[center, 798, 40, 0x593615],
				],
			],
			oper: [[center, 1280, 720, 1153, 572, 1243, 663, 1000]],
		},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['30'];
		if (
			thisconf &&
			thisconf.level &&
			thisScript.oper({
				id: 30,
				name: '斗技_杂项',
				operator: [
					{
						desc: thisOperator[5].desc,
					},
				],
			})
		) {
			switch (thisconf.level) {
			case '名士':
				break;
			case '五段':
				if (
					thisScript.oper({
						id: 30,
						name: '斗技_五段',
						operator: [thisOperator[6]],
					})
				) {
					thisScript.doPush(thisScript, {
						text: '已达到段位，请查看。',
						before() {
							thisScript.myToast('脚本即将停止，正在上传数据');
						},
					});
					thisScript.stop();
					return true;
				}
				break;
			case '九段':
				if (
					thisScript.oper({
						id: 30,
						name: '斗技_九段',
						operator: [thisOperator[7]],
					})
				) {
					thisScript.doPush(thisScript, {
						text: '已达到段位，请查看。',
						before() {
							thisScript.myToast('脚本即将停止，正在上传数据');
						},
					});
					thisScript.stop();
					return true;
				}
				break;
			case '四段':
				if (
					thisScript.oper({
						id: 30,
						name: '斗技_四段',
						operator: [thisOperator[8]],
					})
				) {
					thisScript.doPush(thisScript, {
						text: '已达到段位，请查看。',
						before() {
							thisScript.myToast('脚本即将停止，正在上传数据');
						},
					});
					thisScript.stop();
					return true;
				}
				break;
			case '八段':
				if (
					thisScript.oper({
						id: 30,
						name: '斗技_八段',
						operator: [thisOperator[9]],
					})
				) {
					thisScript.doPush(thisScript, {
						text: '已达到段位，请查看。',
						before() {
							thisScript.myToast('脚本即将停止，正在上传数据');
						},
					});
					thisScript.stop();
					return true;
				}
				break;
			}
		}

		if (
			thisScript.oper({
				id: 30,
				name: '斗技_杂项',
				operator: [
					thisOperator[0],
					thisOperator[1],
					thisOperator[2],
					thisOperator[3],
					thisOperator[4],
					thisOperator[10],
				],
			})
		) {
			return true;
		}
	}
}
