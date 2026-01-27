import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func304 implements IFuncOrigin {
	id = 304;
	name = '检测绘卷进度';
	desc = '达到进度即osp推送，搭配Takser食用更佳（ASSTTYYS用户操作手册304功能有说明），使用该功能需安装OCR扩展'
	config = [{
		desc: '检测绘卷进度设置',
		config: [{
			name: 'osp',
			desc: '启用osp推送',
			type: 'switch',
			default: false
		}, {
			name: 'progress',
			desc: '达到X进度时则osp提醒（输入数字，例95,97,99）',
			type: 'text',
			default: '95'
		}, {
			name: 'cdWaitTime',
			desc: '检测频率(s)，逗号分隔，表示检测频率的下限与上限',
			type: 'text',
			default: '300,360'
		}, {
			name: 'choiceEmaki',
			desc: '选择卷X（输入数字1,2,3,4,5,6）',
			type: 'text',
			default: '1'
		}, {
			name: 'rankOpen',
			desc: '保持排名在95,一分钟限制捐一次，小-中-大的顺序',
			type: 'switch',
			default: false
		}
		]
	}]
	operator: IFuncOperatorOrigin[] = [{ // 0,绘卷界面和卷X坐标
		desc: [1280, 720,
			[
				[left, 26, 539, 0xd6ae21],
				[left, 32, 689, 0x42174a],
				[center, 559, 26, 0x543d33],
				[right, 1129, 23, 0x1e1413],
			]
		],
		oper: [
			[center, 1280, 720, 127, 124, 446, 350, 1000], // 卷1
			[center, 1280, 720, 476, 124, 800, 354, 1000], // 卷2
			[center, 1280, 720, 823, 123, 1150, 354, 1000], // 卷3
			[center, 1280, 720, 126, 378, 450, 606, 1000], // 卷4
			[center, 1280, 720, 476, 378, 801, 605, 1000], // 卷5
			[center, 1280, 720, 826, 379, 1146, 605, 1000], // 卷6
			[center, 1280, 720, 1188, 290, 1224, 402, 2000], // 排行榜
		]
	}, { // 1,绘卷进度
		desc: [1280, 720,
			[
				[left, 43, 50, 0x393735],
				[center, 637, 64, 0x946d52],
				[center, 604, 652, 0x946d52],
				[right, 1161, 67, 0xefcbce]]
		],
		oper: [
			[center, 1280, 720, 1151, 54, 1175, 79, 1000], // 红色关闭
			[center, 1280, 720, 397, 592, 490, 624, 1000]// 百分比坐标

		]
	}, { // 2 回忆
		desc: [
			1280, 720,
			[
				[right, 1180, 162, 0x733e1c],
				[right, 1227, 155, 0x90572c],
				[right, 1190, 304, 0xeab47b],
				[right, 1229, 392, 0xe6b076],
			]
		],
		oper: [
			[center, 1280, 720, 1184, 151, 1229, 259, 1500], // 回忆
			[center, 1280, 720, 1090, 120, 1121, 154, 1000], // 小
			[center, 1280, 720, 1088, 270, 1123, 305, 1000], // 中
			[center, 1280, 720, 1088, 424, 1126, 461, 1000], // 大
			[center, 1280, 720, 995, 580, 1159, 621, 1000], // 贡献
			[center, 1280, 720, 492, 644, 582, 694, 1000], // 贡献关闭
		]
	}, { // 3 95排名
		desc: [
			1280, 720,
			[
				[center, 838, 598, 0x272420],
				[center, 837, 612, 0x272420],
				[center, 851, 611, 0x272420],
				[center, 843, 603, 0x272420],
				[center, 849, 597, 0x272420],
				[center, 858, 603, 0x272420],
				[center, 872, 605, 0x272420],
			]
		]
	}, { // 4 小不足
		desc: [
			1280, 720,
			[
				[right, 980, 165, 0x9f2b02],
				[right, 1007, 165, 0xa62c01],
				[right, 981, 176, 0xa72c01],
				[right, 1006, 181, 0xa62c01],
			]
		]
	}, { // 5 中不足
		desc: [
			1280, 720,
			[
				[right, 978, 317, 0xa02b02],
				[right, 1007, 317, 0xa62c01],
				[right, 981, 331, 0xa72c01],
				[right, 1006, 333, 0xa62c01],
			]
		]
	}, { // 6 大不足
		desc: [
			1280, 720,
			[
				[right, 978, 469, 0x9d2a02],
				[right, 981, 481, 0xa72c01],
				[right, 1007, 485, 0xa72c01],
				[right, 1000, 469, 0xa72c01],
			]
		]
	}, { // 7 ocr
		desc: [
			1280, 720,
			[
				[center, 765, 80, 0x8ea746],
			]
		],
		oper: [
			[center, 1280, 720, 1008, 155, 1159, 205, 1000], // 95识别区域
			[center, 1280, 720, 1070, 531, 1080, 539, 1000], // 滑动开始
			[center, 1280, 720, 1064, 2, 1074, 11, 1000], // 滑动结束
			[center, 1280, 720, 1010, 583, 1153, 640, 1000], // 本人分数
		]
	}, { // 8 100名
		desc: [
			1280, 720,
			[
				[center, 831, 475, 0x513b2b],
				[center, 838, 487, 0x292622],
				[center, 845, 486, 0x272420],
				[center, 854, 488, 0x47433d],
				[center, 859, 488, 0x272420],
				[center, 868, 488, 0x35322d],
			]
		]
	}, { // 9 回忆返回
		desc: [
			1280, 720,
			[
				[right, 1192, 156, 0xeab47b],
				[right, 1195, 252, 0xe6b076],
				[right, 1114, 67, 0x926c55],
				[right, 992, 114, 0x697687],
				[right, 997, 265, 0x747f91],
				[right, 994, 431, 0x273761],
			]
		],
		oper: [
			[center, 1280, 720, 1145, 51, 1186, 78, 1000],
		]
	}]

	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['304'];
		const emaki = Number(thisconf.choiceEmaki) - 1;
		if (thisScript.oper({
			name: '绘卷界面',
			operator: [{
				desc: thisOperator[0].desc,
				oper: [thisOperator[0].oper[emaki], thisOperator[0].oper[6]]
			}]
		})) {
			return true;
		}
		let cd = 0;
		if (thisScript.oper({
			name: '绘卷进度界面',
			operator: [{
				desc: thisOperator[1].desc
			}]
		})) {
			if (thisScript.global.HJosp === null) {
				thisScript.global.HJosp = thisconf.osp as boolean;
			}
			if (thisScript.global.HJosp) {
				const realTimeBmp = thisScript.findTextWithCompareColor(
					'.+', 0, thisOperator[1].oper[1], '包含',
					{
						id: 304,
						name: '绘卷进度界面检测',
						operator: [{
							desc: thisOperator[1].desc,
						}]
					})
				if (realTimeBmp.length != 0) {
					let realTimeText = realTimeBmp[0].label;
					realTimeText = realTimeText.replace('%', '0');
					realTimeText = realTimeText.replace('-', '.');
					if (realTimeText === '100.CO0') {
						console.log('ocr识别进度为：100.CO%，转换为100');
						realTimeText = '100';
					}
					const realTimeNum = Number(realTimeText);
					console.log(`ocr识别进度为：[${realTimeNum}]`);
					if (!isNaN(realTimeNum) && (realTimeNum as number) > (thisconf.progress as number)) {
						thisScript.doPush(thisScript, { text: '绘卷进度已达到目标进度。', before() { thisScript.myToast('绘卷进度已达到目标进度，正在上传数据'); } });
						thisScript.global.HJosp = false;
						return true;
					} else if (!isNaN(realTimeNum) && (realTimeNum as number) < (thisconf.progress as number)) {
						const cdWaiteTimePair = String(thisconf.cdWaitTime).split(',');
						const cdWaitTime = random(parseInt(cdWaiteTimePair[0]), parseInt(cdWaiteTimePair[1]));
						cd = 1000 * (cdWaitTime);
					}
				}
			} else {
				const cdWaiteTimePair = String(thisconf.cdWaitTime).split(',');
				const cdWaitTime = random(parseInt(cdWaiteTimePair[0]), parseInt(cdWaiteTimePair[1]));
				cd = 1000 * (cdWaitTime);
			}
			if (cd > 0) {
				const now = new Date();
				const minutes = now.getMinutes();
				const seconds = now.getSeconds();
				if (!thisScript.global.HJsec) {
					thisScript.global.HJsec = seconds;
				}
				if (thisconf.rankOpen && ((thisScript.global.HJmin != minutes
					&& seconds >= thisScript.global.HJsec) || minutes - thisScript.global.HJmin > 1 || minutes - thisScript.global.HJmin < -5)
				) {
					thisScript.global.HJmin = minutes;
					let curCnt = 0;
					const maxCount = 10;
					while (!thisScript.oper({
						name: '下拉置底',
						operator: [thisOperator[8]]
					})) {
						curCnt++;
						thisScript.regionSwipe(thisOperator[7].oper[1], thisOperator[7].oper[2], [200, 210], 1000, 200);
						thisScript.keepScreen();
						if (curCnt >= maxCount) {
							break;
						}
					}
					const goalrankrResult = thisScript.findText('.+', 0, thisOperator[7].oper[0], '包含',)
					const realrankResult = thisScript.findText('.+', 0, thisOperator[7].oper[3], '包含',)
					let goalrank;
					let realrank;
					if (goalrankrResult.length > 0 && realrankResult.length > 0) {
						goalrank = goalrankrResult[0].label.match(/\d+/);
						realrank = realrankResult[0].label.match(/\d+/);
					}
					log('目标分数为：' + Number(goalrank) + '，个人分数为：' + Number(realrank));
					if (Number(goalrank) >= Number(realrank)) {
						log('开始捐分');
						let tap = 1;
						let fraction = 10;
						thisScript.regionClick([thisOperator[2].oper[0]]);
						thisScript.keepScreen();
						if (thisScript.oper({
							name: '小不足',
							operator: [thisOperator[4]]
						})) {
							tap = 2;
							fraction = 20;
							if (thisScript.oper({
								name: '中不足',
								operator: [thisOperator[5]]
							})) {
								tap = 3;
								fraction = 100;
								if (thisScript.oper({
									name: '大不足',
									operator: [thisOperator[6]]
								})) {
									tap = 4;
								}
							}
						}
						if (tap == 4) {
							if (thisconf.osp) {
								thisScript.doPush(thisScript, { text: '绘卷不足', before() { thisScript.myToast('正在上传数据'); } });
							}
						} else {
							log
							let x = (Number(goalrank) - Number(realrank)) / fraction
							if (x > 5) {
								x = 5;
							}
							for (let i = 0; i <= x; i++) {
								thisScript.regionClick([thisOperator[2].oper[tap]]);
							}
							thisScript.regionClick([thisOperator[2].oper[4]]);
							thisScript.regionClick([thisOperator[2].oper[5]]);
							console.log('已捐赠一次')
						}
					}
				}
				thisScript.myToast(`绘卷刷新CD, ${(cd / 1000)}秒后再次检测`);
				sleep(cd);
				thisScript.regionClick([thisOperator[1].oper[0]]);
				return true;
			}
		}
		if (thisScript.oper({
			name: '绘卷进度界面',
			operator: [thisOperator[9]]
		})) {
			return true;
		}
		return false;
	}
}