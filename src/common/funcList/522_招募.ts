
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

const center = 1;
const right = 2;

export class Func522 implements IFuncOrigin {
	id = 522;
	name = '自动招募';
	desc = '自动点击招募成员界面中的10个+号，然后等待设定时间后点击换一批。建议开启OCR插件以获得最佳效果。';
	config = [{
		desc: '配置',
		config: [{
			name: 'waitTime',
			desc: '点击10个后的等待时间(分钟)',
			type: 'list',
			data: ['1', '2', '3', '4', '5', '10'],
			default: '1',
			value: null,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		oper: [
			[center, 1280, 720, 500, 20, 780, 80, 0], // 顶部标题区域
		]
	}, {
		oper: [
			[right, 1280, 720, 1000, 620, 1200, 700, 0], // 右下角换一批区域
		]
	}, {
		oper: [
			[center, 1280, 720, 783, 173, 784, 174, 0], // 向下滑动
			[center, 1280, 720, 777, 534, 778, 535, 0], // 向下滑动
		]
	}, {
		oper: [
			[center, 1280, 720, 777, 534, 778, 535, 0], // 向上滑动
			[center, 1280, 720, 783, 173, 784, 174, 0], // 向上滑动
		]
	}];

	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['522'];
		const waitTimeMs = parseInt(thisConf.waitTime as string) * 60 * 1000;
		const titleRes = thisScript.findText('招募成员', 0, thisOperator[0].oper[0].slice(0, 4), '包含');
		if (titleRes.length === 0) {
			return false;
		}
		if (typeof thisScript.global.recruitCount === 'undefined') {
			thisScript.global.recruitCount = 0;
		}
		if (!thisScript.global.recruitClickedY) {
			thisScript.global.recruitClickedY = [];
		}
		if (typeof thisScript.global.recruitHasScrolled === 'undefined') {
			thisScript.global.recruitHasScrolled = false;
		}

		if (thisScript.global.recruitCount >= 10) {
			const now = new Date().getTime();
			if (!thisScript.global.lastRecruitFinishTime) {
				thisScript.global.lastRecruitFinishTime = now;
				thisScript.myToast(`已完成 10/10 次点击，开始 ${thisConf.waitTime} 分钟倒计时...`);
			}

			const elapsedMs = now - thisScript.global.lastRecruitFinishTime;
			if (elapsedMs >= waitTimeMs) {
				const countdownRes = thisScript.findText('秒', 0, thisOperator[1].oper[0].slice(0, 4), '包含');
				if (countdownRes.length > 0) {
					thisScript.myToast('游戏内按钮处于倒计时，等待中...');
					return true;
				}

				const refreshRes = thisScript.findText('换一批', 0, thisOperator[1].oper[0].slice(0, 4), '包含');
				const refreshColor = thisScript.findMultiColor('招募_换一批');

				if (refreshRes.length > 0 || refreshColor) {
					thisScript.myToast('时间到，点击换一批');
					if (refreshRes.length > 0) {
						thisScript.regionClick([[
							refreshRes[0].points[0].x,
							refreshRes[0].points[0].y,
							refreshRes[0].points[2].x,
							refreshRes[0].points[2].y,
							1200
						]]);
					} else {
						thisScript.regionClick([[
							refreshColor.x - 50,
							refreshColor.y - 20,
							refreshColor.x + 50,
							refreshColor.y + 20,
							1200
						]]);
					}
				} else {
					thisScript.myToast('未识别到换一批，使用固定坐标点击');
					thisScript.regionClick([[1048 - 30, 627 - 20, 1048 + 30, 627 + 20, 1200]]);
				}

				// 重置计数器和状态
				thisScript.global.recruitCount = 0;
				thisScript.global.recruitClickedY = [];
				thisScript.global.lastRecruitFinishTime = null;
				thisScript.global.recruitHasScrolled = false;

				// 滑动回顶部
				thisScript.myToast('正在回滚到最顶部');
				thisScript.regionSwipe(thisOperator[2].oper[0], thisOperator[2].oper[1], [800, 1000], 200);
				sleep(500);
				thisScript.regionSwipe(thisOperator[2].oper[0], thisOperator[2].oper[1], [800, 1000], 200);
				sleep(1000);

				return true;
			} else {
				const remainingSec = Math.ceil((waitTimeMs - elapsedMs) / 1000);
				const min = Math.floor(remainingSec / 60);
				const sec = remainingSec % 60;
				thisScript.myToast(`倒计时: ${min}分${sec}秒`);
			}
			return true;
		}

		let clickedInThisTurn = false;

		if (!thisScript.global.recruitHasScrolled && thisScript.global.recruitCount >= 5) {
			thisScript.myToast('正在滚动到后5个');
			thisScript.regionSwipe(thisOperator[3].oper[0], thisOperator[3].oper[1], [800, 1000], 200);
			sleep(500);
			thisScript.regionSwipe(thisOperator[3].oper[0], thisOperator[3].oper[1], [800, 1000], 200);

			thisScript.global.recruitClickedY = [];
			thisScript.global.recruitHasScrolled = true;
			sleep(1500);
			return true;
		}


		const plusPoints = thisScript.findMultiColorEx('招募_加号');
		if (plusPoints.length > 0) {
			for (const point of plusPoints) {
				const centerY = point.y;
				if (thisScript.global.recruitClickedY.some((y: number) => Math.abs(y - centerY) < 25)) {
					continue;
				}

				thisScript.global.recruitCount++;
				const prefix = thisScript.global.recruitHasScrolled ? '后' : '前';
				const currentInPhase = thisScript.global.recruitHasScrolled ? (thisScript.global.recruitCount - 5) : thisScript.global.recruitCount;
				thisScript.myToast(`(${prefix}${currentInPhase}/5个)`);

				thisScript.regionClick([[point.x - 30, point.y - 30, point.x + 30, point.y + 30, 1200]]);
				thisScript.global.recruitClickedY.push(centerY);
				clickedInThisTurn = true;
				if (thisScript.global.recruitCount >= 10 || (!thisScript.global.recruitHasScrolled && thisScript.global.recruitCount >= 5)) break;
			}
		}

		if (!clickedInThisTurn && thisScript.global.recruitCount < 10) {
			const statusRes = thisScript.findText('在线|小时前|分钟前|昨天', 0, [880, 100, 1100, 620], '正则');
			if (statusRes.length > 0) {
				for (const status of statusRes) {
					const centerY = (status.points[0].y + status.points[2].y) / 2;
					if (thisScript.global.recruitClickedY.some((y: number) => Math.abs(y - centerY) < 25)) {
						continue;
					}
					const clickX = 1118;
					const clickY = centerY;

					thisScript.global.recruitCount++;
					const prefix = thisScript.global.recruitHasScrolled ? '后' : '前';
					const currentInPhase = thisScript.global.recruitHasScrolled ? (thisScript.global.recruitCount - 5) : thisScript.global.recruitCount;
					thisScript.myToast(`(${prefix}${currentInPhase}/5个)`);

					thisScript.regionClick([[clickX - 35, clickY - 35, clickX + 35, clickY + 35, 1200]]);
					thisScript.global.recruitClickedY.push(centerY);
					clickedInThisTurn = true;
					if (thisScript.global.recruitCount >= 10 || (!thisScript.global.recruitHasScrolled && thisScript.global.recruitCount >= 5)) break;
				}
			}
		}


		if (!clickedInThisTurn && thisScript.global.recruitCount < 10) {
			const currentCoords = thisScript.global.recruitHasScrolled
				? [202, 283, 364, 445, 525]
				: [172, 254, 334, 415, 496];

			for (const y of currentCoords) {
				if (thisScript.global.recruitClickedY.some((clickedY: number) => Math.abs(clickedY - y) < 25)) {
					continue;
				}
				thisScript.global.recruitCount++;
				const prefix = thisScript.global.recruitHasScrolled ? '后' : '前';
				const currentInPhase = thisScript.global.recruitHasScrolled ? (thisScript.global.recruitCount - 5) : thisScript.global.recruitCount;
				thisScript.myToast(`(${prefix}${currentInPhase}/5个)`);

				thisScript.regionClick([[1118 - 35, y - 35, 1118 + 35, y + 35, 1200]]);
				thisScript.global.recruitClickedY.push(y);
				clickedInThisTurn = true;
				if (thisScript.global.recruitCount >= 10 || (!thisScript.global.recruitHasScrolled && thisScript.global.recruitCount >= 5)) break;
			}
		}

		return true;
	}
}

export default new Func522();
