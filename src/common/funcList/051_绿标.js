import { ocr } from "@/system/ocr";
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 51,
	name: '绿标',
	desc: '战斗界面标记我方式神',
	checked: false,
	config: [{
		desc: '绿标',
		config: [{
			name: 'greenType',
			desc: '绿标类型',
			type: 'list',
			data: ['自定义坐标', '自定义文本'],
			default: '自定义文本',
		}, {
			name: 'greenPosition',
			desc: '绿标坐标，仅绿标类型为自定义坐标时生效，格式x,y，实际点击时xy坐标会在±20内随机点击，如245,500',
			type: 'text',
			default: '245,500'
		}, {
			name: 'greenText',
			desc: '绿标文本内容，将式神名称与文本内容保持一致，使用该功能请安装OCR扩展',
			type: 'text',
			default: '绿标专用'
		}]
	}],
	operator: [{
		// 开始战斗后的场景
		desc: [1280, 720,
			[[left, 34, 23, 0xdbb48b],
			[left, 106, 24, 0xcfa375],
			[right, 1270, 132, 0x48371f],
			[right, 1270, 700, 0x241919]]
		],
		oper: [
			[left, 1280, 720, 0, 0, 0, 60, -1], // A的下方位置
			[left, 1280, 720, 0, 0, 30, 50, -1], // 下方位置的矩形
			[left, 1280, 720, 0, 0, 1279, 719, -1], // 屏幕大小
			[center, 1280, 720, 0, 220, 1279, 590, -1], // 文本识别的区域
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		let thisconf = thisScript.scheme.config['51'];

		if (thisScript.oper({
			id: 51,
			name: '战斗界面检测',
			operator: [{
				desc: thisOperator[0].desc,
			}]
		})) {
			// TODO 配合准备/退出功能，次数变更后不需要判断绿标，直接点
			// 当局有多次判断时，连续3秒内都未检测到绿标方可进行点击
			// 没有找到绿标的开始时间
			thisScript.global.greenNonDTime = new Date().getTime();
			if (thisScript.findMultiColor('绿标')) {
				return false;
			}
			// 开启绿标
			let toClick = null;
			if (thisconf.greenType === '自定义坐标') {
				let posPam = (thisconf.greenPosition || '').split(',');
				if (posPam.length !== 2) {
					toastLog('自定义坐标格式定义错误，请检查');
					return true;
				}
				let inX = parseInt(posPam[0]);
				let inY = parseInt(posPam[1]);
				if (Number.isNaN(inX) || Number.isNaN(inY)) {
					toastLog('自定义坐标格式定义错误，请检查');
					return true;
				}
				toClick = [
					Math.max(inX - 20, 0),
					Math.max(inY - 20, 0),
					inX + 20,
					inY + 20,
					1000
				]
			} else if (thisconf.greenType === '自定义文本') {
				let result = ocr.findTextByOcr(thisScript.getOcr(), function () {
					thisScript.keepScreen(); // 更新图片
					return thisScript.helperBridge.helper.GetBitmap(); // 返回bmp
				}, new RegExp(thisconf.greenText), 3000, thisOperator[0].oper[3]);
				if (result.length === 0) {
					console.log(`未识别式神别名“${thisconf.greenText}”`);
					return true;
				}
				let p = {
					x: (result[0].points[0].x + result[0].points[1].x) / 2,
					y: (result[0].points[0].y + result[0].points[3].y) / 2,
				}
				let lx = p.x - thisOperator[0].oper[1][2] / 2;
				let ly = p.y + thisOperator[0].oper[0][3] - thisOperator[0].oper[1][3] / 2;
				let rx = p.x + thisOperator[0].oper[1][2] / 2;
				let ry = p.y + thisOperator[0].oper[0][3] + thisOperator[0].oper[1][3] / 2;
				toClick = [
					lx > 0 ? lx : 0,
					ly > 0 ? ly : 0,
					rx < thisOperator[0].oper[2][2] ? rx : thisOperator[0].oper[2][2],
					ry < thisOperator[0].oper[2][3] ? ry : thisOperator[0].oper[2][3],
					1000
				];
			}
			if (toClick) {
				// 当局有多次判断时，连续3秒内都未检测到绿标方可进行点击（避免因御魂图标挡着导致识别错误）
				do {
					sleep(200);
					thisScript.keepScreen(true);
					if (thisScript.findMultiColor('绿标')) {
						return false;
					}
				} while (new Date().getTime() - thisScript.global.greenNonDTime < 3000);
				thisScript.helperBridge.regionClick([toClick], thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			}
		}
	}
}
