import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
export class Func001 implements IFuncOrigin {
	id = 1;
	name = '准备';
	desc = '在准备界面执行准备或退出操作';
	config = [{
		desc: '退出',
		config: [{
			name: 'exitBeforeReady',
			desc: '准备前是否退出,常用于个人突破的降级',
			type: 'switch',
			default: false,
		}],
	}];
	operator: IFuncOperatorOrigin[] = [{
		desc: '准备界面_未准备',
		// 0-方向, 1-左上角x, 2-左上角y, 3-右下角x, 4-右下角y, 5-点击后延迟
		oper: [
			[right, 1280, 720, 1137, 542, 1228, 632, 1000], // 准备
			[left, 1280, 720, 22, 19, 52, 47, 1500], // 左上角返回
			[center, 1280, 720, 683, 401, 795, 442, 500], // 确认
		]
	}, {
		// 手动状态
		desc: '战斗界面_手动状态',
		oper: [
			[left, 1280, 720, 37, 637, 86, 686, 1000]
		]
	}, { // 2 准备界面无左上角取点
		desc: [
			1280, 720,
			[
				[left, 42, 681, 0xe49780],
				[left, 49, 682, 0xfff9ef],
				[left, 124, 682, 0xfef1d8],
				[left, 150, 682, 0xfbdec5],
				[center, 322, 699, 0x231917],
				[right, 1188, 684, 0xa26f4d],
			]
		]
	}, { // 3 准备界面左上角取点
		desc: [
			1280, 720,
			[
				[left, 106, 41, 0xd0a77b],
				[left, 168, 23, 0xd4ae84],
				[left, 180, 38, 0xcba073],
			]
		]
	}, { // 4 准备界面经典主题
		desc: [
			1280, 720,
			[
				[left, 41, 681, 0xdf8471],
				[left, 49, 680, 0xfff7ec],
				[left, 36, 567, 0x913157],
				[left, 122, 686, 0xfdead1],
				[center, 441, 645, 0x573c3c],
				[right, 1169, 672, 0xd5a86c],
			]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['1'];
		if (thisconf.exitBeforeReady) {
			const exitOper = [thisOperator[0].oper[1], thisOperator[0].oper[2]];
			const exitThemeDescList = [
				'准备界面_未准备_凛霜寒雪',
				'准备界面_未准备_春缕含青',
				'准备界面_未准备_蝶寻花踪',
				'准备界面_未准备_雅乐之邦',
				'准备界面_未准备_莲华圣域',
				'准备界面_未准备_笼梦之境',
				'准备界面_未准备_辰烁奇夜',
				'准备界面_未准备_流焰蝶舞',
				'准备界面_未准备',
			];
			return thisScript.oper({
				id: 1,
				name: '准备界面_退出',
				operator: exitThemeDescList.map(desc => ({
					desc,
					oper: exitOper
				}))
			}, 0)
		} else {
			if (thisScript.oper({
				id: 1,
				name: '准备',
				operator: [{
					desc: '准备界面_未准备',
					oper: [thisOperator[0].oper[0]]
				}]
			}, 0) || thisScript.oper({
				id: 1,
				name: '手动修正自动',
				operator: [thisOperator[1]]
			}, 1000)) {

				// 每点一次准备 重置一次红标状态
				if (thisScript.global.redFlag) {
					thisScript.global.redFlag = false;
				}

				return true;
			}
		}
	}
}

export default new Func001();