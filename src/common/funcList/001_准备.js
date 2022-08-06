import { ocr } from "@/system/ocr";
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 1,
	name: '准备',
	desc: '在准备界面执行准备或退出操作，可配置是否启用绿标',
	checked: false,
	config: [{
		desc: '退出',
		config: [{
			name: 'exitBeforeRead',
			desc: '准备前是否退出,常用于个人突破的降级',
			type: 'switch',
			default: false,
		}],
	}, {
		desc: '绿标',
		config: [{
			name: 'greenType',
			desc: '绿标类型',
			type: 'list',
			data: ['关闭', '标A', '自定义坐标', '自定义文本'],
			default: '关闭',
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
		desc: [1280,720,
			[[right,1124,698,0xd0af86],
			[right,1240,702,0xcead83],
			[right,1191,596,0xa46149],
			[right,1182,586,0xf7e6c3],
			[center,360,699,0x241818],
			[left,32,23,0xdbb48b]]
		],
		// 0-方向, 1-左上角x, 2-左上角y, 3-右下角x, 4-右下角y, 5-点击后延迟
		oper: [
			[right, 1280, 720, 1137,542, 1228,632, 2000], // 准备
			[left, 1280, 720, 22,19, 52,47, 500], // 左上角返回
			[center, 1280, 720, 683,401, 795,442, 500], // 确认
		]
	}, {
		// 开始战斗后的场景
		desc: [1280,720,
			[[left,34,23,0xdbb48b],
			[left,106,24,0xcfa375],
			// [left,254,34,0xc5a57d],
			[right,1270,132,0x48371f],
			[right,1270,700,0x241919]]
		],
		oper: [
			[left, 1280, 720, 0,0, 0, 160, -1], // A的下方位置
			[left, 1280, 720, 0,0, 70, 90, -1], // 下方位置的矩形
			[left, 1280, 720, 0,0, 1279, 719, -1] // 屏幕大小
		]
	}, {
		// 手动状态
		desc: [1280,720,
			[[left,34,23,0xdbb48b],
			[left,106,24,0xcfa375],
			// [left,254,34,0xc5a57d],
			[right,1270,132,0x48371f],
			[right,1270,700,0x241919],
			[left,45,656,0xeac4a7],
			[left,78,670,0xf0caac]]
		],
		oper: [
			[left, 1280, 720, 37,637, 86,686, 1000]
		]
	}, {
		// 文本识别的区域
		oper: [
			[center, 1280, 720, 0, 266, 1279, 590, -1]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		let thisconf = thisScript.scheme.config['1'];
		if (thisconf.exitBeforeReady) {
			return thisScript.oper({
				id: 1,
				name: '准备界面_退出',
				operator: [{
					desc: thisOperator[0].desc,
					oper: [thisOperator[0].oper[1], thisOperator[0].oper[2]]
				}]
			})
		} else {
			if (thisScript.oper({
				id: 1,
				name: '准备',
				operator: [{
					desc: thisOperator[0].desc,
					oper: [thisOperator[0].oper[0]]
				}]
			}) || thisScript.oper({
				id: 1,
				name: '手动修正自动',
				operator: [thisOperator[2]]
			}, 1000)) {
				if (thisconf.greenType === '标A' || thisconf.greenType === '自定义坐标' || thisconf.greenType === '自定义文本') {
					// 开启绿标
					if (thisScript.compareColorLoop(thisOperator[1].desc, 16000)) {
						if (thisconf.greenType === '标A') {
							let p = thisScript.findMultiColorLoop('绿标_标识_A', 5000);
							if (p) {
								let lx = p.x - thisOperator[1].oper[1][2] / 2;
								let ly = p.y + thisOperator[1].oper[0][3] - thisOperator[1].oper[1][3] / 2;
								let rx = p.x + thisOperator[1].oper[1][2] / 2;
								let ry = p.y + thisOperator[1].oper[0][3] + thisOperator[1].oper[1][3] / 2;
								let toClick = [
									lx > 0 ? lx : 0,
									ly > 0 ? ly : 0,
									rx < thisOperator[1].oper[2][2] ? rx : thisOperator[1].oper[2][2],
									ry < thisOperator[1].oper[2][3] ? ry : thisOperator[1].oper[2][3],
									4000
								];
								thisScript.helperBridge.regionClick([toClick], thisScript.scheme.commonConfig.afterClickDelayRandom);
								return true;
							} else {
								toastLog('未识别式神别名“A”');
								return true;
							}
						} else if (thisconf.greenType === '自定义坐标') {
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
							let toClick = [
								Math.max(inX - 20, 0),
								Math.max(inY - 20, 0),
								inX + 20,
								inY + 20,
								4000
							]
							thisScript.helperBridge.regionClick([toClick], thisScript.scheme.commonConfig.afterClickDelayRandom);
							return true;
						} else if (thisconf.greenType === '自定义文本') {
							let result = ocr.findTextByOcr(thisScript.getOcr(), function () {
								thisScript.keepScreen(); // 更新图片
								return thisScript.helperBridge.helper.GetBitmap(); // 返回bmp
							}, new RegExp(thisconf.greenText), 10000, thisOperator[3].oper[0]);
							if (result.length === 0) {
								toastLog(`未识别式神别名“${thisconf.greenText}”`);
								return true;
							}
							let p = {
								x: (result[0].points[0].x + result[0].points[1].x ) / 2,
								y: (result[0].points[0].y + result[0].points[3].y ) / 2,
							}
							let lx = p.x - thisOperator[1].oper[1][2] / 2;
							let ly = p.y + thisOperator[1].oper[0][3] - thisOperator[1].oper[1][3] / 2;
							let rx = p.x + thisOperator[1].oper[1][2] / 2;
							let ry = p.y + thisOperator[1].oper[0][3] + thisOperator[1].oper[1][3] / 2;
							let toClick = [
								lx > 0 ? lx : 0,
								ly > 0 ? ly : 0,
								rx < thisOperator[1].oper[2][2] ? rx : thisOperator[1].oper[2][2],
								ry < thisOperator[1].oper[2][3] ? ry : thisOperator[1].oper[2][3],
								4000
							];
							thisScript.helperBridge.regionClick([toClick], thisScript.scheme.commonConfig.afterClickDelayRandom);
							return true;
						}
					} else {
						toastLog('准备15秒后未检测到战斗场景');
						return true;
					}
				} else {
					return true;
				}
			}
		}
	}
}
