import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func401 implements IFuncOrigin {
	id = 401;
	name = '对弈竞猜';
	desc = '对弈竞猜选边';
	config = [{
		desc: '配置',
		config: [{
			name: 'follow_whose',
			desc: '跟押哪位大佬',
			type: 'list',
			data: ['面灵气喵'],
			default: '面灵气喵',
		}],
	}]
	operator: IFuncOperatorOrigin[] = [{ // 0 庭院
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰'
	}, { // 1 庭院
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰'
	}, { // 2 选边
		desc: [
			1280, 720,
			[
				[left, 48, 39, 0xf4e3a2],
				[center, 575, 16, 0xf8f3e0],
				[center, 670, 14, 0xf8f3e0],
				[left, 80, 148, 0xa33939],
				[right, 1188, 157, 0x29437b],
				[left, 161, 359, 0xb78a61],
				[right, 1123, 349, 0xbd9168],
			]
		],
		oper: [
			[center, 1280, 720, 97, 351, 216, 457, 1000], // 左边
			[center, 1280, 720, 1053, 350, 1182, 450, 1000], // 右边
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		// TODO 收上一次的奖励
		if (thisScript.oper({
			id: 401,
			name: '庭院内',
			operator: [thisOperator[0], thisOperator[1]]
		})) {
			let point = thisScript.findMultiColor('对弈竞猜');
			if (!point) {
				point = thisScript.findMultiColor('右边侧栏下一页图标');
			}
			if (point) {
				console.log('右边侧栏下一页图标');
				const oper = [[
					point.x - 5,
					point.y - 5,
					point.x + 5,
					point.y + 5,
					1200
				]];
				thisScript.regionClick(oper);
				return true;
			}
		}
		if (thisScript.oper({
			id: 401,
			name: '对弈竞猜_选边',
			operator: [{ desc: thisOperator[2].desc }]
		})) {
			const thisconf = thisScript.scheme.config['401'];
			const rssUrl = {
				'面灵气喵': 'https://rsshub.zzliux.cn/163/ds/462382f1127b46c5add1185d88f0ea40',
				'姝酱': 'https://rsshub.zzliux.cn/163/ds/6f3189e218fb4f6492b99efcbbd79119',
				'嘤嘤井': 'https://rsshub.zzliux.cn/163/ds/e7107cd3010e418da26672669d8eeb5e',
			}[thisconf.follow_whose as string || '面灵气喵'];

			// 获取下次下注场次时间
			const now = new Date();
			const h = now.getHours();
			let nextH = Math.floor(h / 2) * 2 + '';
			if (nextH.length === 1) nextH = '0' + nextH;
			// @ts-expect-error d.ts文件问题
			const str = http.get(rssUrl).body.string();
			// 从最近的5个拿，避免拿到昨天的
			const str2 = str.match(/<item[\s\S\n]+?<description>([\s\S\n]+?)<\/description>/g).slice(0, 5).join('');
			console.log(str2);

			// 该规则目前是面灵气喵的固定规则，其他的up还得再看看怎么搞
			const reg = new RegExp(nextH + ':00.+?([左右红蓝])');
			console.log(reg);
			const r = str2.match(reg);
			if (r) {
				if (r[1] === '红' || r[1] === '左') {
					// 押左 TODO 选择金额 确认
					thisScript.regionClick([thisOperator[2].oper[0]]);

					thisScript.myToast(`根据${thisconf.follow_whose}选择押左`);
					thisScript.doPush(thisScript, { text: `根据${thisconf.follow_whose}选择押左`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
					sleep(3000);

				} else if (r[1] === '蓝' || r[1] === '右') {
					// 押右 TODO 选择金额 确认
					thisScript.regionClick([thisOperator[2].oper[1]]);

					thisScript.myToast(`根据${thisconf.follow_whose}选择押右`);
					thisScript.doPush(thisScript, { text: `根据${thisconf.follow_whose}选择押右`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
					sleep(3000);
				}
			} else {
				thisScript.myToast(`获取${thisconf.follow_whose}押注信息失败`);
				thisScript.doPush(thisScript, { text: `获取${thisconf.follow_whose}押注信息失败`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				sleep(3000);
			}

			// 选边
			// if (true) {
			// 	thisScript.regionClick([thisOperator[2].oper[0]]);
			// } else {
			// 	thisScript.regionClick([thisOperator[2].oper[1]]);
			// }
			// return true;
		}
		return false;
	}
}
