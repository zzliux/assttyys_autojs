import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func318 implements IFuncOrigin {
	id = 318;
	name = '战斗内操作选项';
	desc = '';
	config = [{
		desc: '',
		config: [{
			name: 'xingMie',
			desc: '星灭切换',
			type: 'switch',
			default: false,
		}, {
			name: 'diSiTian',
			desc: '帝释天开局锁二,行动后切普攻(只支持"奚落天穹"皮肤)',
			type: 'switch',
			default: false,
		}, {
			name: 'time',
			desc: '计时退出（单位：秒,0为关闭）',
			type: 'number',
			default: 0,
		}]
	}]
	operator: IFuncOperatorOrigin[] = [{ // 0 阴阳师行动
		desc: [
			1280, 720,
			[
				[right, 1185, 644, 0xb17148],
				[right, 1261, 644, 0xa6694d],
				[right, 1216, 596, 0xfffbdf],
				[right, 1235, 592, 0xfffade],
				[right, 1207, 616, 0xffffe9],
				[right, 1239, 616, 0xffffe5],
			]
		],
		oper: [
			[center, 1280, 720, 1194, 636, 1252, 695, 0], // 晴明
		],
		retest: 500
	}, { // 1 开始战斗后的场景
		desc: '战斗界面',
	}, { // 2 妖术二
		desc: [
			1280, 720,
			[
				[right, 1240, 684, 0xdeccbf],
				[right, 1245, 684, 0xe0cdc0],
				[right, 1253, 688, 0xd9c6ba],
				[right, 1247, 674, 0xe4d1c4],
				[right, 1242, 677, 0xdbc9bc],
			]
		]
	}, { // 3 技能框
		desc: [
			1280, 720,
			[
				[center, 940, 479, 0x1f2552],
				[right, 965, 506, 0x1f214e],
				[center, 928, 514, 0x383a91],
				[center, 938, 504, 0xf4feff],
				[center, 897, 445, 0xc79a54],
				[right, 1250, 442, 0xb38140],
				[right, 1263, 445, 0xb5864a],
				[right, 1266, 454, 0xac7f44],
				[right, 1265, 555, 0xbd9250],
				[center, 904, 546, 0xb18349],
			]
		]
	}, { // 4 未弹起的技能框和 技能坐标
		desc: [
			1280, 720,
			[
				[center, 895, 469, 0xbf9350],
				[right, 1266, 478, 0xbd8a49],
				[center, 895, 569, 0xaa7743],
				[center, 902, 577, 0xb08043],
				[right, 1154, 483, 0x473a32],
				[right, 1165, 462, 0x231a23],
				[right, 1172, 486, 0x473a30],
				[right, 1173, 471, 0x2b1d15],
				[right, 1189, 480, 0x2b3d36],
			]
		],
		oper: [
			[center, 1280, 720, 1011, 481, 1051, 518, 1000], // 2技能
			[center, 1280, 720, 1099, 482, 1145, 519, 1000], // 3技能
		]
	}, { // 5 非晴明阴阳师，并且单技能
		desc: [1280, 720,
			[
				[right, 996, 448, 0xbc914f],
				[right, 1267, 450, 0xb78347],
				[right, 1266, 555, 0xb38245],
				[right, 996, 546, 0xaa7743],
			]
		],
		oper: [
			[center, 1280, 720, 1201, 643, 1245, 682, 0],
		]
	}, { // 6 战字
		desc: [
			1280, 720,
			[
				[center, 528, 311, 0xe2ceba],
				[center, 593, 316, 0x030303],
				[center, 660, 332, 0x030303],
				[center, 749, 297, 0xe4d0b6],
				[center, 569, 523, 0x8e2214],
				[center, 709, 524, 0x881509],
				[center, 638, 472, 0xf3daaa],
			]
		]
	}, { // 7 帝释天行动条
		desc: [1280, 720,
			[
				[right, 1210, 480, 0xf8ec82],
				[right, 1277, 481, 0xf9e563],
				[right, 1242, 447, 0xe5c058],
				[right, 1242, 513, 0xf7ef89],
				[right, 1236, 465, 0xfbf6f2],
				[right, 1234, 490, 0x4a4a9c],
				[right, 1259, 483, 0x524b8a],
				[right, 1247, 489, 0xd6a696],
			]
		],
	}, { // 8 战斗退出
		desc: '战斗界面',
		oper: [
			[left, 1280, 720, 22, 19, 52, 47, 1500], // 左上角返回
			[center, 1280, 720, 683, 401, 795, 442, 500], // 确认
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['318'];
		if (!thisScript.global.fight_Swith) {
			thisScript.global.fight_Swith = {
				'xingMie': thisconf.xingMie as boolean,
				'diSiTian': thisconf.diSiTian as boolean,
				'time': null,

			};
		}
		if (thisconf.time != '0') {
			if (!thisScript.global.fight_Swith.time && thisScript.oper({
				name: '战斗界面',
				operator: [{
					desc: thisOperator[8].desc
				}]
			})) {
				thisScript.global.fight_Swith.time = new Date().getTime() + Number(thisconf.time) * 1000;
			}
			if (thisScript.global.fight_Swith.time && new Date().getTime() > (thisScript.global.fight_Swith.time as number)) {
				thisScript.global.fight_Swith.time = null;
				return thisScript.oper({
					id: 320,
					name: '计时退出',
					operator: [thisOperator[8]]
				});
			}
			if (thisScript.oper({
				id: 320,
				name: '战字',
				operator: [{
					desc: thisOperator[6].desc
				}]
			})) {
				thisScript.global.fight_Swith.time = new Date().getTime() + Number(thisconf.time) * 1000;
			}
		}
		if (thisScript.global.fight_Swith.xingMie) {
			if (thisScript.oper({
				name: '战斗界面',
				operator: [thisOperator[1]]
			}) && thisScript.oper({
				id: 318,
				name: '阴阳师行动',
				operator: [thisOperator[0]]
			})) {
				thisScript.keepScreen();
			}
			if (thisScript.oper({
				id: 318,
				name: '技能框',
				operator: [thisOperator[3]]
			})) {
				sleep(200);
				if (thisScript.oper({
					id: 318,
					name: '锁定妖术二中,切换为妖术三',
					operator: [thisOperator[2]]
				})) {
					thisScript.regionClick([thisOperator[4].oper[1]]);
				} else {
					thisScript.regionClick([thisOperator[4].oper[0]]);
				}
				thisScript.keepScreen();
			}
			if (thisScript.oper({
				id: 318,
				name: '单技能框',
				operator: [thisOperator[5]]
			})) {
				thisScript.keepScreen();
			}
			if (thisScript.oper({
				id: 318,
				name: '未弹起的技能框',
				operator: [{ desc: thisOperator[4].desc }]
			})) {
				thisScript.regionClick([thisOperator[0].oper[0]]);
				thisScript.keepScreen();
			}
		}
		if (thisScript.global.fight_Swith.diSiTian) {
			if (thisScript.oper({
				id: 318,
				name: '战字',
				operator: [{ desc: thisOperator[6].desc }]
			})) {
				const point = thisScript.findMultiColor('帝释天', null, false, false)
				if (point) {
					console.log('开局查找到帝释天,锁二');
					const oper = [[point.x, point.y, point.x + 10, point.y + 10, 500]];
					thisScript.regionClick(oper);
					if (point.x < 1090) {
						const oper = [[point.x - 30, point.y - 130, point.x - 20, point.y - 120, 200]];
						thisScript.regionClick(oper);
					} else {
						const oper = [[point.x - 80, point.y - 130, point.x - 70, point.y - 120, 200]];
						thisScript.regionClick(oper);
					}
					return true;
				}
			}
			if (thisScript.oper({
				id: 318,
				name: '帝释天行动',
				operator: [{ desc: thisOperator[7].desc }]
			})) {
				const point = thisScript.findMultiColor('帝释天', null, false, false)
				if (point) {
					console.log('开局查找到帝释天,锁普攻');
					sleep(2000);
					const oper = [[point.x, point.y, point.x + 10, point.y + 10, 500]];
					thisScript.regionClick(oper);
					if (point.x < 1090) {
						const oper = [[point.x - 120, point.y - 130, point.x - 110, point.y - 120, 200]];
						thisScript.regionClick(oper);
					} else {
						const oper = [[point.x - 80, point.y - 170, point.x - 70, point.y - 160, 200]];
						thisScript.regionClick(oper);
					}
					return true;
				}
			}
		}
		return false;
	}
}
