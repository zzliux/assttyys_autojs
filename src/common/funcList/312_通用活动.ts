import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
// const right = 2;

export class Func312 implements IFuncOrigin {
	id = 312;
	name = '通用活动';
	desc: '识别到“左上角感叹号”或“右上角体力”或“右下角锁定阵容”图标后，再点设定的坐标范围，详细看手册';
	config = [{
		desc: '',
		config: [{
			name: 'xy',
			desc: '点击坐标范围，格式为：左上角x,左上角y,右下角x,右下角y，例：1134,590,1225,645',
			type: 'text',
			default: '1134,590,1225,645',
			value: null,
		}, {
			name: 'exit',
			desc: '达到时间后退出(需要ocr)',
			type: 'switch',
			default: false,
			value: null,
		}, {
			name: 'time',
			desc: '目标时间（输入数字，逗号分隔）',
			type: 'text',
			default: '1,20',
			value: null,
		}]
	}]
	operator: IFuncOperatorOrigin[] = [{
		desc: '战斗界面',
		oper: [
			[center, 1280, 720, 750, 420, 1279, 719, -1], // 右下角范围
			[center, 1280, 720, 1166, 48, 1233, 81, -1], // 时间范围
			[left, 1280, 720, 22, 19, 52, 47, 500], // 左上角返回
			[center, 1280, 720, 683, 401, 795, 442, 500], // 确认
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['312'];
		let curCnt = 0;
		const maxCount = 5;
		while ((thisScript.findMultiColor('活动说明的感叹号') || thisScript.findMultiColor('体力图标') ||
      thisScript.findMultiColor('右下角锁定阵容'))) {
			curCnt++;
			if (curCnt >= maxCount) {
				thisScript.myToast(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
				thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				sleep(2000);
				return false;
			}// 复制活动停止代码
			{// 执行点击
				const xy = String(thisConf.xy).split(',');
				if (xy.length !== 4) {
					thisScript.myToast('自定义坐标格式定义错误，请检查');
					return true;
				}
				const inX1 = parseInt(xy[0]);
				const inY1 = parseInt(xy[1]);
				const inX2 = parseInt(xy[2]);
				const inY2 = parseInt(xy[3]);
				if (Number.isNaN(inX1) || Number.isNaN(inY1) || Number.isNaN(inX2) || Number.isNaN(inY2)) {
					thisScript.myToast('自定义坐标格式定义错误，请检查');
					return true;
				}
				const oper = [
					[inX1, inY1, inX2, inY2, 1000]
				];
				thisScript.regionClick(oper);
			}
			thisScript.keepScreen();
		}

		if (thisConf.exit && thisScript.oper({
			name: '当前成绩',
			operator: [{ desc: thisOperator[0].desc }]
		}) && thisScript.getOcrDetector()) {
			const time = String(thisConf.time).split(',');
			const result = thisScript.findText('.+', 0, thisOperator[0].oper[1], '包含');
			if (result.length === 0) {
				console.log('未识别到任何字样');
				return false;
			} else {
				const realTime = String(result[0].label).split(':');
				if (Number.isNaN(realTime[0]) && Number.isNaN(realTime[1])) {
					console.log('非数字，等待5秒继续检测');
					sleep(5000);
				} else if (Number(realTime[0]) == Number(time[0]) && Number(realTime[1]) <= Number(time[1]) || Number(realTime[0]) < Number(time[0])) {
					return thisScript.oper({
						id: 312,
						name: '退出',
						operator: [{
							oper: [thisOperator[0].oper[2], thisOperator[0].oper[3]]
						}]
					}, 0)
				} else {
					sleep(5000);
				}
			}
		}

		if (curCnt) {
			return true;
		}
		return false;
	}
}