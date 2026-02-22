import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func304 implements IFuncOrigin {
	id = 304;
	name = '检测绘卷进度';
	desc = ''
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
			name: 'choiceEmaki',
			desc: '选择卷X（输入数字1,2,3,4,5,6）',
			type: 'text',
			default: '1'
		}, {
			name: 'rankOpen',
			desc: '保持设定的排名,一分钟限制捐一次，小-中-大的顺序',
			type: 'number',
			default: '93'
		}
		]
	}]
	operator: IFuncOperatorOrigin[] = [{ // 0,绘卷界面和卷X坐标
		desc: [1280, 720,
			[
				[center, 559, 26, 0x543d33],
				[right, 1129, 23, 0x1e1413],
				[right, 1109, 691, 0x593716],
				[right, 1263, 40, 0x722b3d],
			]
		],
		oper: [
			[center, 1280, 720, 327, 212, 468, 283, 1000], // 卷1
			[center, 1280, 720, 637, 210, 803, 287, 1000], // 卷2
			[center, 1280, 720, 986, 209, 1151, 286, 1000], // 卷3
			[center, 1280, 720, 334, 444, 458, 526, 1000], // 卷4
			[center, 1280, 720, 657, 446, 788, 540, 1000], // 卷5
			[center, 1280, 720, 980, 449, 1144, 534, 1000], // 卷6
			[center, 1280, 720, 1188, 290, 1224, 402, 2000], // 排行榜
		]
	}, { // 1,绘卷进度
		desc: [1280, 720,
			[
				[left, 132, 64, 0x926f54],
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
	}, { // 3 95排名 废弃
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
	}, { // 7 排名ocr区域
		desc: [1280, 720,
			[
				[center, 559, 26, 0x543d33],
				[right, 1129, 23, 0x1e1413],
				[right, 1109, 691, 0x593716],
				[right, 1263, 40, 0x722b3d],
			]
		],
		oper: [
			[center, 1280, 720, 266, 321, 395, 358, 1000],
			[center, 1280, 720, 603, 320, 723, 358, 1000],
			[center, 1280, 720, 927, 322, 1040, 358, 1000],
			[center, 1280, 720, 258, 557, 380, 594, 1000],
			[center, 1280, 720, 608, 558, 724, 595, 1000],
			[center, 1280, 720, 933, 559, 1040, 594, 1000],
		]
	}]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['304'];
		const emaki = Number(thisconf.choiceEmaki) - 1;
		let paiMing = 999;
		const realTimeBmp = thisScript.findTextWithCompareColor(
			'.+', 0, thisOperator[7].oper[emaki], '包含',
			{
				id: 304,
				name: '绘卷进度界面检测',
				operator: [{
					desc: thisOperator[7].desc,
				}]
			})
		if (realTimeBmp.length != 0) {
			paiMing = Number(realTimeBmp[0].label.match(/\d+/)?.[0]);
			thisScript.regionClick([thisOperator[0].oper[emaki]])
			return true
		}
		if (thisScript.oper({
			name: '绘卷进度界面',
			operator: [{
				desc: thisOperator[1].desc
			}]
		})) {
			if (thisconf.osp) {
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
						thisconf.osp = false;
						return true;
					}
				}
			}
			if (paiMing > (thisconf.rankOpen as number)) {
				log('开始捐分');
				let tap = 1;
				if (thisScript.oper({
					name: '小不足',
					operator: [thisOperator[4]]
				})) {
					tap = 2;
					if (thisScript.oper({
						name: '中不足',
						operator: [thisOperator[5]]
					})) {
						tap = 3;
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
					thisScript.regionClick([thisOperator[2].oper[tap]]);
					thisScript.regionClick([thisOperator[2].oper[4]]);
					thisScript.regionClick([thisOperator[2].oper[5]]);
					thisScript.regionClick([thisOperator[1].oper[0]]);
					console.log('已捐赠一次')
				}
			}
			sleep(61000)
			return true;
		}
		return false;
	}
}