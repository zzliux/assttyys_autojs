import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

/**
 * 超鬼王「祸至无日 · 祸主降临」新界面适配（2026-11）
 *
 * 旧界面流程：搜索鬼王（按门票星级判断） → 鬼王界面 → 强力切普通 → 挑战
 * 新界面流程：自己发现为空 → 召唤鬼王 → 鬼王详情页（挑战） → 组队准备页（准备） → 战斗
 *
 * 新界面已无「搜索鬼王」，星级也不再显示在鬼王详情页上，
 * 而是由「裂变之眼」的星级决定：用几星的裂变之眼召唤，就出几星的鬼王。
 * 所以低星控制改为在游戏内手动做：点右侧「全部队列」，
 * 把「即将召唤」切到目标星级的裂变之眼，脚本只负责召唤和挑战。
 *
 * 注意：右侧 y≈497~542 那条「2.5倍伤害」是游戏里的增益开关，
 * 脚本不要点它，所有点击区域都刻意避开了这一带。
 */
export class Func317 implements IFuncOrigin {
	id = 317;
	name = '清自己鬼王';
	desc = '召唤并清理自己发现的鬼王。星级由游戏内「裂变之眼」决定，请先在召唤队列里选好「即将召唤」的星级';
	operator: IFuncOperatorOrigin[] = [{ // 0 鬼王详情页（右下角为「挑战」）
		desc: [1280, 720,
			[
				[right, 1150, 620, 0x222027],	// 挑战按钮菱形暗面
				[left, 270, 185, 0x9c254c],		// 自己发现卡片上的「集结」按钮
				[right, 1147, 629, 0xfaf0e5],	// 挑战按钮亮面
				[left, 255, 185, 0xa52649],		// 集结按钮
			]
		],
		oper: [
			[right, 1280, 720, 1130, 590, 1235, 660, 1000],	// 挑战
		]
	}, { // 1 组队准备页（右下角为「准备」鼓）
		// 注意：队伍加载完成后「准备」按钮会由深色变为浅色鼓面，
		// 所以这里刻意不取按钮本身的颜色，改用两种状态下都不变的画面元素。
		desc: [1280, 720,
			[
				[center, 635, 49, 0xad6008],	// 顶部中间的「组」徽记
				[right, 1200, 60, 0x632127],	// 右上天空
				[left, 50, 670, 0xfdf2e2],		// 左下「预设」
				[center, 635, 694, 0x231917],	// 底部提示条
			]
		],
		oper: [
			[right, 1280, 720, 1150, 565, 1220, 610, 1000],	// 准备
		]
	}, { // 2 主界面 · 自己发现为空（右下角为「召唤鬼王」）
		desc: [1280, 720,
			[
				[right, 1170, 519, 0x54263d],	// 右侧「全部队列」横条
				[right, 1225, 519, 0x502134],
				[right, 1105, 519, 0x77404e],
			]
		],
		oper: [
			[right, 1280, 720, 1130, 590, 1235, 660, 1000],	// 召唤鬼王
		]
	}];

	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		// 鬼王详情页：直接挑战
		if (thisScript.oper({
			id: 317,
			name: '鬼王详情页_挑战',
			operator: [thisOperator[0]]
		})) {
			// 连点多次还没进准备页，多半是疲劳度超过100或挑战被拒
			thisScript.global.cgwDetailCnt++;
			if (thisScript.global.cgwDetailCnt > 8) {
				thisScript.global.cgwDetailCnt = 0;
				thisScript.doPush(thisScript, {
					text: '多次点击挑战都没有进入战斗，可能已达疲劳度上限（>100）或挑战被拒，脚本停止。',
					before() { thisScript.myToast('脚本即将停止，正在上传数据'); }
				});
				thisScript.stop();
				sleep(3000);
			}
			return true;
		}
		// 组队准备页：点准备开打，并清空详情页连点计数
		if (thisScript.oper({
			id: 317,
			name: '组队准备页_准备',
			operator: [thisOperator[1]]
		})) {
			thisScript.global.cgwDetailCnt = 0;
			return true;
		}
		// 自己发现为空：召唤鬼王
		if (thisScript.oper({
			id: 317,
			name: '自己发现为空_召唤鬼王',
			operator: [thisOperator[2]]
		})) {
			thisScript.global.cgwDetailCnt = 0;
			return true;
		}
		return false;
	}
}
