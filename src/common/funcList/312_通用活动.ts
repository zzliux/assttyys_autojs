import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

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
	}, { // 1 体力不足
		desc: [
			1280, 720,
			[
				[left, 260, 545, 0xeecfa0],
				[center, 468, 543, 0xedcfa4],
				[center, 539, 549, 0xe8c894],
				[center, 713, 546, 0xe6c692],
				[center, 922, 543, 0xefd1a3],
				[right, 998, 548, 0xe8c793],
			]
		],
		oper: [
			[center, 1280, 720, 1065, 252, 1151, 425, 1000],
		]
	}, { // 2 界面识别(测试中)
		desc: [
			1280, 720,
			[
				[right, 1245, 22, 0x654339],
				[right, 1244, 58, 0x5b433a],
				[right, 1240, 58, 0x6a4b3f],
				[right, 1240, 22, 0x6a473b],
			]
		],
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

		if (curCnt) {
			return true;
		}
		if (thisScript.oper({
			id: 312,
			name: '体力不足',
			operator: [thisOperator[1]]
		})) {
			thisScript.doPush(thisScript, { text: '体力不足，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
			sleep(3000);
			return;
		}
		return false;
	}
}