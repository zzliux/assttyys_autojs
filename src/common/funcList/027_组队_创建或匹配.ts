import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func027 implements IFuncOrigin {
	id = 27;
	name = '组队_创建或匹配';
	desc = '在庭院中点击下方的组队按钮后点击创建或排队按钮';
	operator: IFuncOperatorOrigin[] = [{ // 0 妖气自动匹配中的 图像
		desc: [
			1280, 720,
			[
				[center, 373, 14, 0x260904],
				[center, 730, 5, 0x2b0e17],
				[center, 760, 98, 0x290a04],
				[center, 411, 97, 0x300c13],
				[center, 751, 43, 0xd6c5a0],
				[center, 771, 61, 0xd7c3a2],
			]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 5000] // 匹配中等5秒
		]
	}, {
		// 1 庭院未打开菜单
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[right, 1280, 720, 1168, 592, 1230, 690, 1200]
		]
	}, { // 2 庭院已打开菜单
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[left, 1280, 720, 427, 619, 486, 683, 1000]
		]
	}, {
		// 3 庭院已打开菜单，另外一种图标
		desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
		oper: [
			[left, 1280, 720, 427, 619, 486, 683, 1000]
		]
	}, { // 4 组队大厅界面
		desc: '组队大厅',
		oper: [
			[center, 1280, 720, 993, 605, 1151, 649, 1000], // 创建队伍
		]
	}, { // 5 组队大厅界面(包含自动匹配按钮)
		desc: '组队大厅_自动匹配',
		oper: [
			[center, 1280, 720, 702, 601, 865, 650, 1000] // 组队界面 自动匹配
		]
	}, { // 6 组队大厅_创建队伍（不带选择副本类型）
		desc: '组队大厅_创建队伍',
		oper: [
			[center, 1280, 720, 404, 414, 430, 438, 1000], // 经验妖怪界面_不公开
			[center, 1280, 720, 536, 490, 739, 534, 1000], // 经验妖怪界面_创建
		]
	}, { // 7 创建队伍
		desc: '组队大厅_选择副本类型_创建队伍',
		oper: [
			[center, 1280, 720, 754, 499, 778, 521, 1000], // 不公开
			[center, 1280, 720, 818, 567, 932, 612, 1000]// 创建
		]
	}, { // 8 返回
		oper: [
			[center, 1280, 720, 31, 20, 73, 61, 1000]// 返回
		]
	}]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let curCnt = 0;
		const maxCount = 3;
		while (thisScript.oper({
			name: '组队_创建',
			operator: [thisOperator[4], thisOperator[6], thisOperator[7]]
		})) {
			curCnt++;
			thisScript.keepScreen();
			if (curCnt >= maxCount) {
				thisScript.regionClick([thisOperator[8].oper[0]]);
				thisScript.doPush(thisScript, { text: '体力不够创房，已停止。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				sleep(2000);
				return true;
			}
		}
		if (thisScript.oper({
			id: 27,
			name: '组队_匹配',
			operator: [
				thisOperator[0], thisOperator[1], thisOperator[2],
				thisOperator[3], /* thisOperator[4], */thisOperator[5],
				/* thisOperator[6], *//* thisOperator[7],*/
			]
		})) {
			return true;
		}
		return false;
	}
}
