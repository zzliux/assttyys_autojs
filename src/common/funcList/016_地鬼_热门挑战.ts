import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func016 implements IFuncOrigin {
	id = 16;
	name = '地鬼_热门挑战';
	desc = '在地域鬼王界面时，自动选热门进行挑战';
	operator: IFuncOperatorOrigin[] = [{
		// 0
		desc: [1280, 720,
			[
				[left, 60, 58, 0xc2cbe3],
				[left, 69, 670, 0xaf544c],
				[right, 1157, 49, 0xfbf5e5],
				[right, 1137, 39, 0xce737b],
				[right, 1206, 42, 0xc55149],
				[right, 1197, 532, 0xf4f4f4]
			]
		],
		oper: [
			[right, 1280, 720, 1116, 34, 1148, 62, 1000], // 筛选
			[right, 1280, 720, 1187, 155, 1239, 289, 500], // 热门
			[right, 1280, 720, 1093, 235, 1136, 282, 500], // 第一个
			[right, 1280, 720, 1096, 395, 1139, 447, 500], // 第二个
			[right, 1280, 720, 1094, 547, 1140, 592, 500], // 第三个
			[left, 1280, 720, 0, 0, 13, 19, 0], // 难度把手大小区域
			[left, 1280, 720, 47, 234, 120, 344, 0], // 难度把手滑动停止区域
			[left, 1280, 720, 1104, 505, 1207, 583, 0], // 挑战
		]
	}, {
		// 1 地鬼挑战页面
		desc: [1280, 720,
			[
				[left, 137, 216, 0xddd6ce],
				[left, 181, 631, 0xd7cdc6],
				[right, 1209, 43, 0xeecccc],
				[right, 1204, 520, 0xe8d5b0],
				[right, 1087, 624, 0xebe5ce],
				[right, 1210, 391, 0xb25d3b],
			]
		],
		oper: [
			[center, 1280, 720, 1195, 30, 1226, 59, 500]	//	关闭_地鬼挑战弹窗
		]
	}, {
		// 2
		desc: [1280, 720,
			[
				[left, 202, 388, 0x161211], // 第0个没打
				[left, 308, 386, 0x161211], // 第1个没打
				[left, 426, 388, 0x161211], // 第2个没打
			]
		],
		oper: [
			[left, 1280, 720, 38, 409, 88, 430, 800], // 今日挑战
			[left, 1280, 720, 51, 36, 95, 85, 1200], // 左上角的返回
		]
	}, {
		// 3 探索地图界面
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 641, 633, 701, 698, 1000],
		]
	}, {
		// 4 地鬼_挑战页面_极
		desc: [
			1280, 720,
			[
				[center, 447, 138, 0x9a4e50],
				[center, 475, 94, 0xdad1ca],
				[right, 1208, 400, 0xbe643b],
				[right, 1155, 581, 0xf1d8af],
				[right, 1140, 621, 0x581819],
				[left, 191, 612, 0xdcd6cf],
				[center, 532, 82, 0x576891],
			]
		],
		oper: [
			[center, 1280, 720, 522, 52, 557, 81, 1200]		//	极转为普通
		]
	}, {
		// 5
		desc: [
			1280, 720,
			[
				[left, 59, 56, 0x8a909d],
				[right, 1243, 40, 0x813939],
				[right, 1157, 48, 0xb1ada1],
				[right, 1071, 123, 0xd79b86],
				[right, 913, 147, 0xffd682],
			]
		],
		oper: [
			[center, 1280, 720, 158, 118, 821, 626, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 16,
			name: '探索界面',
			operator: [thisOperator[3]]
		})) {
			return true;
		}

		if (thisScript.oper({
			id: 16,
			name: '地鬼_挑战_关闭',
			operator: [thisOperator[1]]
		})) {
			return true;
		}

		if (thisScript.oper({
			id: 16,
			name: '地鬼_筛选界面_关闭',
			operator: [thisOperator[5]]
		})) {
			return true;
		}

		if (thisScript.oper({
			id: 16,
			name: '地鬼_热门挑战',
			operator: [{
				desc: thisOperator[0].desc,
				oper: [thisOperator[2].oper[0]]
			}]
		}, 2000)) { // 加了个两秒的重检测时间，防止退出来后
			thisScript.keepScreen();
			thisScript.global.dgCurNum = -1;
			for (let i = 0; i < thisOperator[2].desc.length; i++) {
				if (thisScript.oper({
					name: `地鬼_检测第${i}个未打`,
					operator: [{
						desc: [thisOperator[2].desc[i] as [number, number, number, number]]
					}]
				})) {
					thisScript.global.dgCurNum = i;
					break;
				}
			}

			if (thisScript.global.dgCurNum === -1) {
				thisScript.regionClick([thisOperator[2].oper[1]]);
				const next_scheme = '返回庭院';
				thisScript.setCurrentScheme(next_scheme);
				thisScript.myToast(`切换方案为[${next_scheme}]`);
				thisScript.rerun();
				return;
			}
			let clickOper = thisOperator[0].oper[2 + thisScript.global.dgCurNum];
			thisScript.regionClick([thisOperator[0].oper[0], thisOperator[0].oper[1], clickOper]);
			// sleep(1500);

			if (thisScript.compareColorLoop(thisOperator[4].desc, 3000)) {
				thisScript.regionClick(thisOperator[4].oper);
			}


			if (thisScript.compareColorLoop(thisOperator[1].desc, 3000)) {
				sleep(1500);
				thisScript.keepScreen(true);
				let point = thisScript.findMultiColor('地鬼_难度把手');
				if (point) {
					let beginRegion = [
						point.x,
						point.y,
						point.x + thisOperator[0].oper[5][2],
						point.y + thisOperator[0].oper[5][3],
					];
					thisScript.regionSwipe(beginRegion, thisOperator[0].oper[6], [100, 300], 0, 200);
				}
				thisScript.regionClick([thisOperator[0].oper[7]]);
				thisScript.myToast(`地鬼_热门挑战_第${thisScript.global.dgCurNum + 1}次`);
				sleep(1500);
				return true;
			}
			return true;
		}
	}
}