import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func519 implements IFuncOrigin {
	id = 519;
	name = '寮管理攻打道馆';
	desc = '星期1234进入道馆';
	config = [{
		desc: '',
		config: [{
			name: 'defense',
			desc: '‘防守成功’次数超过X不打，设置99为关闭',
			type: 'integer',
			default: 99,
		}, {
			name: 'coefficient',
			desc: '‘系数’超过X不打',
			type: 'integer',
			default: 5,
		}, {
			name: 'people',
			desc: '忽略低于X的‘人数’',
			type: 'integer',
			default: 0,
		}, {
			name: 'day',
			desc: '星期567不进入',
			type: 'switch',
			default: 'true',
		}]
	}]
	operator: IFuncOperatorOrigin[] = [{ // 0 神社界面
		desc: [
			1280, 720,
			[
				[right, 1194, 170, 0x82543e],
				[right, 1196, 293, 0x7d513b],
				[right, 1197, 416, 0xd5844f],
				[right, 1194, 539, 0x81533d],
				[left, 40, 30, 0xf7ebad],
			]
		],
		oper: [
			[center, 1280, 720, 428, 170, 580, 304, 1000], // 道馆
		]
	}, { // 1 选攻打道馆界面
		desc: [
			1280, 720,
			[
				[right, 1142, 628, 0x6dcc97],
				[right, 1185, 658, 0x46a774],
				[left, 88, 618, 0xc1b8aa],
				[left, 189, 637, 0x777a83],
				[left, 35, 52, 0xf0f5fb],
			]
		],
		oper: [
			[center, 1280, 720, 60, 40, 0, 0, 0], // 找色参数
			[center, 1280, 720, 1103, 530, 1223, 594, 200], // 滑动开始区域
			[center, 1280, 720, 1095, 32, 1240, 94, 200], // 滑动结束区域
			[center, 1280, 720, 1132, 631, 1191, 668, 1000], // 刷新
			[center, 1280, 720, 684, 400, 798, 444, 1000], // 刷新确认
		]
	}, { // 2 道馆内
		desc: [
			1280, 720,
			[
				[left, 64, 482, 0x291522],
				[left, 33, 38, 0xd7c5a2],
				[left, 109, 24, 0xd7c5a2],
				[left, 179, 37, 0xd7c6a5],
			]
		]
	}, { // 3 前4 ocr区域
		desc: [
			1280, 720,
			[
				[right, 1127, 48, 0x805224],
				[right, 1136, 37, 0x7f5123],
				[right, 1190, 36, 0x7b5122],
				[right, 1200, 47, 0x7b5022],
				[right, 1136, 475, 0x7f5123],
				[right, 1126, 487, 0x815224],
				[right, 1162, 477, 0x7b4c26],
			]
		],
		oper: [
			[center, 1280, 720, 1150, 100, 1220, 132, 1000],
			[center, 1280, 720, 1150, 246, 1220, 278, 1000],
			[center, 1280, 720, 1150, 392, 1220, 424, 1000],
			[center, 1280, 720, 1150, 538, 1220, 571, 1000],
		]
	}, { // 4 前4 寮头像
		desc: [
			1280, 720,
			[
				[center, 882, 256, 0xae7c53],
			]
		],
		oper: [
			[center, 1280, 720, 1128, 48, 1189, 99, 1500],
			[center, 1280, 720, 1130, 199, 1191, 246, 1500],
			[center, 1280, 720, 1127, 342, 1190, 390, 1500],
			[center, 1280, 720, 1127, 489, 1189, 543, 1500],
		]
	}, { // 5 后4 ocr区域
		oper: [
			[center, 1280, 720, 1150, 88, 1220, 120, 1000],
			[center, 1280, 720, 1150, 234, 1220, 266, 1000],
			[center, 1280, 720, 1150, 380, 1220, 412, 1000],
			[center, 1280, 720, 1150, 526, 1220, 558, 1000],
		]
	}, { // 6 后4 寮头像
		desc: [
			1280, 720,
			[
				[center, 900, 255, 0x7a4d2c],
			]
		],
		oper: [
			[center, 1280, 720, 1132, 38, 1191, 85, 1000],
			[center, 1280, 720, 1128, 188, 1192, 232, 1000],
			[center, 1280, 720, 1130, 333, 1189, 380, 1000],
			[center, 1280, 720, 1126, 480, 1191, 529, 1000],
		]
	}, { // 7 建立道馆
		desc: [
			1280, 720,
			[
				[left, 273, 622, 0x8b6d2f],
				[left, 297, 620, 0xe7db9e],
				[left, 276, 619, 0x886a2e],
				[left, 281, 653, 0x9e803c],
				[left, 315, 651, 0x181818],
			]
		],
		oper: [
			[center, 1280, 720, 260, 615, 311, 661, 1000],
			[center, 1280, 720, 762, 414, 881, 457, 5000], // 建立道馆_确认
			[center, 1280, 720, 1171, 106, 1224, 143, 1000], // 建立道馆_关闭详细
		]
	}, { // 8 0次机会
		desc: [
			1280, 720,
			[
				[center, 550, 653, 0xddd9c8],
				[center, 645, 666, 0xe2ddcc],
				[center, 687, 664, 0xa8a598],
				[center, 707, 662, 0xde8001],
				[center, 716, 661, 0xe18201],
				[center, 732, 662, 0xe88501],
				[center, 562, 87, 0x07080f],
			]
		]
	}, { // 9 没次数和背水buff
		desc: [1280, 720,
			[
				[right, 883, 75, 0x9f4c43],
				[right, 1086, 200, 0x9b2f1c],
				[right, 1103, 183, 0x9b2f1c],
				[right, 1145, 595, 0x272420],
				[right, 1199, 588, 0x272420],
				[right, 1147, 605, 0xdabf99],
			]
		],
		oper: [
			[center, 1280, 720, 54, 595, 132, 669, 1000],
			[center, 1280, 720, 677, 399, 797, 447, 1000],
		]
	}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const now = new Date();
		const thisConf = thisScript.scheme.config['519'];
		if (thisConf.day && (now.getDay() == 0 || now.getDay() >= 5)) {
			thisScript.myToast('星期567,关闭方案');
			thisScript.doPush(thisScript, { text: '星期567,关闭方案', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
			sleep(2000);
			return true;
		}
		if (thisScript.oper({
			id: 519,
			name: '当日机会为0',
			operator: [thisOperator[8]]
		})) {
			thisScript.myToast('两次机会用光');
			thisScript.doPush(thisScript, { text: '两次机会用光', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
			sleep(2000);
			return true;
		}
		if (thisScript.oper({
			id: 519,
			name: '检测_寮活动神社',
			operator: [thisOperator[0], thisOperator[7], thisOperator[9]]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 519,
			name: '检测_攻打道馆界面',
			operator: [{ desc: thisOperator[1].desc }]
		})) {
			thisScript.global.daoGuan_exit = false;
			if (thisScript.global.daoGuan_click) {
				// 比较完成，点挑战
				const point = thisScript.findMultiColor('敌方道馆_挑战')
				if (point) {
					thisScript.regionClick([
						[point.x, point.y, point.x + thisOperator[1].oper[0][0], point.y + thisOperator[1].oper[0][0], 1000]
					]);
					thisScript.global.daoGuan_click = false;
					thisScript.global.daoGuan_swip = true;
					return true;
				}
			}
			if (thisScript.getOcrDetector()) {
				const glod = [];
				const people = [];
				const defense = [];
				const result = [];
				// 记录金币 人数 防御次数
				for (let i = 0; i < 4; i++) {
					let temp = [];
					if (thisScript.global.daoGuan_swip) {
						temp = thisScript.findText('.+', 0, thisOperator[3].oper[i], '包含');
						thisScript.regionClick([thisOperator[4].oper[i]]);
					} else {
						temp = thisScript.findText('.+', 0, thisOperator[5].oper[i], '包含');
						thisScript.regionClick([thisOperator[6].oper[i]]);
					}
					if (temp.length <= 0) {
						console.log('OCR未识别到字符,将重试一遍');
						return true;
					}
					glod[i] = parseInt(temp[0].label.replace(/[^\d]/g, ' '), 10);
					if (glod[i] > 12000) {
						glod[i] = Math.floor(glod[i] / 10);
						log(glod[i])
					}
					if (glod[i] > 1200) {
						glod[i] = Math.floor(glod[i] / 10);
						log(glod[i])
					}
					thisScript.keepScreen();
					const point = thisScript.findMultiColor('敌方道馆_挑战');
					if (point) {
						temp = thisScript.findText('.+', 0, [point.x - 90, point.y - 54, point.x - 30, point.y - 20], '包含');
						people[i] = parseInt(temp[0].label.replace(/[^\d]/g, ' '), 10);
						if (people[i] > 180) {
							people[i] = Math.floor(people[i] / 10);
						}
						temp = thisScript.findText('.+', 0, [point.x - 90, point.y + 16, point.x - 30, point.y + 48], '包含');
						defense[i] = parseInt(temp[0].label.replace(/[^\d]/g, ' '), 10);
						if (defense[i] >= 40) {
							defense[i] = Math.floor(defense[i] / 10);
						}
					} else {
						return false;
					}
				}
				log('金币为:' + glod);
				log('人数为:' + people);
				log('防守次数为:' + defense);
				// 筛选后的结果
				for (let i = 0; i < 4; i++) {
					// 防御次数小于参数,否则重置为0值
					if (Number(thisConf.defense) === 99) {
						// 系数小于参数,否则重置为0值
						log('第' + (i + 1) + '个寮的系数为:' + glod[i] / people[i])
						if (glod[i] / people[i] < Number(thisConf.coefficient)) {
							result[i] = people[i];
						} else {
							result[i] = 0;
						}
					} else if (defense[i] <= Number(thisConf.defense)) {
						log('第' + (i + 1) + '个寮的系数为:' + glod[i] / people[i])
						if (glod[i] / people[i] < Number(thisConf.coefficient)) {
							result[i] = people[i];
						} else {
							result[i] = 0;
						}
					} else {
						result[i] = 0;
					}
					if (result[i] < thisConf.people) {
						result[i] = 0;
					}
				}
				// 比较大小并存储 索引0存储前4寮最大人数,索引1存储前4寮位置,索引2存储后4寮最大人数,索引3存储后4寮位置
				if (thisScript.global.daoGuan_swip) {
					for (let i = 0; i < 4; i++) {
						thisScript.global.daoGuan_compare[0] = Number(Math.max(...result));
						if (thisScript.global.daoGuan_compare[0] === Number(result[i])) {
							thisScript.global.daoGuan_compare[1] = i;
							break;
						}
					}
					log('前四最大人数为:' + thisScript.global.daoGuan_compare[0] + ';是第' + (thisScript.global.daoGuan_compare[1] + 1) + '个寮')
					thisScript.regionSwipe(thisOperator[1].oper[1], thisOperator[1].oper[2], [300, 400], 0, 3000);
					thisScript.global.daoGuan_swip = false;
					return true;
				} else {
					for (let i = 0; i < 4; i++) {
						thisScript.global.daoGuan_compare[2] = Number(Math.max(...result));
						if (thisScript.global.daoGuan_compare[2] === Number(result[i])) {
							thisScript.global.daoGuan_compare[3] = i;
							break;
						}
					}
					log('后四最大人数为:' + thisScript.global.daoGuan_compare[2] + ';是第' + (thisScript.global.daoGuan_compare[3] + 1) + '个寮')
				}
				// 两次取完值后开始比较最大值
				if (thisScript.global.daoGuan_compare[0] === 0 && thisScript.global.daoGuan_compare[2] === 0) {
					if (thisScript.global.flash_time >= 3) {
						thisScript.doPush(thisScript, { text: '没有符合条件的寮', before() { thisScript.myToast('没有符合条件的寮'); } });
						thisScript.stop();
						sleep(3000);
						return true;
					} else {
						thisScript.regionClick([thisOperator[1].oper[3]]);
						thisScript.regionClick([thisOperator[1].oper[4]]);
						thisScript.global.daoGuan_swip = true;
						thisScript.global.flash_time++;
						return true;
					}

				} else if (Number(thisScript.global.daoGuan_compare[0]) > Number(thisScript.global.daoGuan_compare[2])) {
					thisScript.regionSwipe(thisOperator[1].oper[2], thisOperator[1].oper[1], [300, 400], 0, 3500);
					thisScript.regionClick([thisOperator[4].oper[thisScript.global.daoGuan_compare[1]]]);
				} else {
					thisScript.regionClick([thisOperator[6].oper[thisScript.global.daoGuan_compare[3]]]);
				}
				thisScript.global.daoGuan_click = true;
				return true;
			}
			return false;
		}
	}
}