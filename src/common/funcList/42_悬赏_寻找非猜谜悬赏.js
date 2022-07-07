import {
	setCurrentScheme
} from '@/common/tool';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 42,
	name: '悬赏_寻找非猜谜悬赏',
	checked: false,
	operator: [{
		desc: [1280, 720,
			[
				[center, 722, 72, 0xebc952],
				[center, 588, 92, 0xe2dbc9],
				[center, 610, 90, 0xada190],
				[center, 618, 95, 0xa89c8a],
				[center, 621, 80, 0xd5ccba],
				[center, 659, 78, 0xf8f3e0],
				[center, 679, 95, 0xd8d0bd],
				[left, 107, 89, 0x624724],
				[left, 98, 122, 0x776e6c],
				[right, 1178, 92, 0x372720],
				[right, 1149, 89, 0x593726]
			]
		],
		oper: [
			[left, 1280, 720, 0, 0, 42, 51, 2000],
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
				name: '悬赏_悬赏封印所有任务界面',
				operator: [{
					desc: thisOperator[0].desc
				}]
			})) {
			let point = thisScript.findMultiColor('悬赏_击败字样') || null;
			if (point) {
				let oper = [
					[point.x, point.y - 200, point.x, point.y - 200, 500]
				];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			} else {
				return false;
			}
		} else {
			return false
		}
	}
}