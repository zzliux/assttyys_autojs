import { Script } from '@/system/script';
import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func015 implements InterfaceFuncOrigin {
	id = 15;
	name = '探索_换狗粮';
	desc = '准备界面时，队长位置在左(换式神界面时队长位置在右)，若在非队长位置出现满级式神，则上素材的第一个和第二个，因此使用时需要将要练的素材添加喜欢，并取消折叠；N卡则是找到1级的N卡后上N卡';
	config = [{
		desc: '',
		config: [{
			name: 'type',
			desc: '类型',
			type: 'list',
			data: ['队长', '打手'],
			default: '打手',
		}, {
			name: 'dog_food_type',
			desc: '狗粮类型',
			type: 'list',
			data: ['素材', 'N卡'],
			default: '素材'
		}, {
			name: 'handle_position',
			desc: '换N卡时第一次滚动条拖动比例',
			type: 'list',
			data: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%'],
			default: '20%'
		}]
	}];
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[[left, 34, 41, 0xd7c5a2],
			[left, 109, 37, 0xd7c5a2],
			[left, 183, 39, 0xd7c5a2],
			[right, 1114, 660, 0xefd6a5],
			[right, 1220, 659, 0xedcc99],
			[right, 1218, 529, 0xe0c8a9],
			[left,70,691,0xfff9f1],
			[left,75,667,0xdc6d61]]
		],
		oper: [
			[center, 1280, 720, 215,475, 721,642, 100],
			[center, 1280, 720, 215,475, 721,642, 1500],
			[left, 1280, 720, 44,633, 97,682, 400],
			[left, 1280, 720, 44,295, 92,345, 400], // 3-素材
			[left, 1280, 720, 148,311, 195,361, 400], // 4-N
			[center, 1280, 720, 205,551, 246,608, 0], // 5-第一个位置
			[center, 1280, 720, 336,555, 371,611, 0], // 6-第二个位置
			[center, 1280, 720, 184,339, 234,403, 0], // 7-打手-待换的第一个位置
			[center, 1280, 720, 616,334, 669,389, 0], // 8-打手-待换的第二个位置
			[center, 1280, 720, 312,298, 358,362, 0], // 9-队长-待换的第一个位置
			[center, 1280, 720, 910,282, 951,352, 0], // 10-队长-待换的第二个位置
			[center, 1280, 720, 181,516, 267,664, 0], // 11-式神列表的第一个位置
			[center, 1280, 720, 934,520, 1024,656, 0], // 12-式神列表的最后一个位置
			[center, 1280, 720, 178,684, 204,699, 0], // 13-滚动条把手左侧
			[center, 1280, 720, 868,684, 895,699, 0], // 14-滚动条把手右侧
			[left, 1280, 720, 27, 51, 62, 84, 0], // 15-1级标识到中心区域的相对位置
			[left, 1280, 720, 149, 51, 185, 84, 0], // 16-1级标识到第二个中心区域的相对位置
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '准备界面_判断',
			operator: [{ desc: thisOperator[0].desc }]
		}, 1000)) {
			if (thisScript.findMultiColor('准备界面_满级标识')) {
				let thisconf = thisScript.scheme.config['15'];
				if (!thisconf.dog_food_type || '素材' === thisconf.dog_food_type) {
					// 素材
					while (thisScript.oper({
						name: '换狗粮_素材_step1',
						operator: [{
							desc: thisOperator[0].desc,
							oper: [thisOperator[0].oper[0], thisOperator[0].oper[0]]
						}]
					})) {
						sleep(500);
						thisScript.keepScreen(false);
					}
					sleep(1500);
					thisScript.helperBridge.regionClick([thisOperator[0].oper[2], thisOperator[0].oper[3]], thisScript.scheme.commonConfig.afterClickDelayRandom);
					sleep(1500);

					if ('打手' == thisconf.type) {
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[5], thisOperator[0].oper[7], [800, 1200], 200);
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[5], thisOperator[0].oper[6], [200, 400], 500);
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[6], thisOperator[0].oper[8], [1200, 1500], 200);
					} else if ('队长' == thisconf.type) {
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[5], thisOperator[0].oper[9], [800, 1200], 200);
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[5], thisOperator[0].oper[6], [200, 400], 500);
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[6], thisOperator[0].oper[10], [1200, 1500], 200);
					}
				} else {
					// N卡
					while (thisScript.oper({
						name: '换狗粮_N卡_step1',
						operator: [{
							desc: thisOperator[0].desc,
							oper: [thisOperator[0].oper[0], thisOperator[0].oper[0]]
						}]
					})) {
						sleep(500);
						thisScript.keepScreen(false);
					}
					sleep(1500);
					thisScript.helperBridge.regionClick([thisOperator[0].oper[2], thisOperator[0].oper[4]], thisScript.scheme.commonConfig.afterClickDelayRandom);
					sleep(1500);
					let handlePos = (thisconf.handle_position as number);
					// 先用把手拖一段距离
					if (handlePos) {
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[13], [
							thisOperator[0].oper[13][0] + (thisOperator[0].oper[14][0] - thisOperator[0].oper[13][0]) * handlePos / 100,
							thisOperator[0].oper[13][1],
							thisOperator[0].oper[13][2] + (thisOperator[0].oper[14][2] - thisOperator[0].oper[13][2]) * handlePos / 100,
							thisOperator[0].oper[13][3],
						], [800, 1200], 200);
						sleep(500);
						thisScript.keepScreen(true);
					}
					let point = thisScript.findMultiColor('准备_N卡');
					let pointCnt = 20;
					while (!point && --pointCnt) {
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[12], thisOperator[0].oper[11], [800, 1200], 200);
						sleep(1000);
						point = thisScript.findMultiColor('准备_N卡');
						thisScript.keepScreen(true);
					}
					let path1 = [
						{
							x: point.x + random(thisOperator[0].oper[15][0], thisOperator[0].oper[15][2]),
							y: point.y + random(thisOperator[0].oper[15][1], thisOperator[0].oper[15][3])
						}, 
						{ delay: 800, x: null, y: null }, 
						{ delay: 800, x: null, y: null }
					];
					let path2 = [
						{
							x: point.x + random(thisOperator[0].oper[16][0], thisOperator[0].oper[16][2]),
							y: point.y + random(thisOperator[0].oper[16][1], thisOperator[0].oper[16][3])
						}, 
						{ delay: 800, x: null, y: null }, 
						{ delay: 800, x: null, y: null }
					]
					if ('打手' == thisconf.type) {
						path1[2].x = random(thisOperator[0].oper[7][0], thisOperator[0].oper[7][2]);
						path1[2].y = random(thisOperator[0].oper[7][1], thisOperator[0].oper[7][3]);
						path1[1].y = random(thisOperator[0].oper[7][1], thisOperator[0].oper[7][3]);

						path2[2].x = random(thisOperator[0].oper[8][0], thisOperator[0].oper[8][2]);
						path2[2].y = random(thisOperator[0].oper[8][1], thisOperator[0].oper[8][3]);
						path2[1].y = random(thisOperator[0].oper[8][1], thisOperator[0].oper[8][3]);
					} else if ('队长' == thisconf.type) {
						path1[2].x = random(thisOperator[0].oper[9][0], thisOperator[0].oper[9][2]);
						path1[2].y = random(thisOperator[0].oper[9][1], thisOperator[0].oper[9][3]);
						path1[1].y = random(thisOperator[0].oper[9][1], thisOperator[0].oper[9][3]);

						path2[2].x = random(thisOperator[0].oper[10][0], thisOperator[0].oper[10][2]);
						path2[2].y = random(thisOperator[0].oper[10][1], thisOperator[0].oper[10][3]);
						path2[1].y = random(thisOperator[0].oper[10][1], thisOperator[0].oper[10][3]);
					}
					path1[1].x = point.x + random(thisOperator[0].oper[15][0], thisOperator[0].oper[15][2]);
					path2[1].x = point.x + random(thisOperator[0].oper[16][0], thisOperator[0].oper[16][2]);
					thisScript.helperBridge.swipePath(path1);
					sleep(random(300, 500));
					thisScript.helperBridge.swipePath(path2);
				}
				return true;
			}
		}
	}
}