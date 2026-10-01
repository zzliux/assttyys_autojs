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
			data: ['面灵气喵', '查查尔', '槐下30'],
			default: '面灵气喵',
		}],
	}]
	operator: IFuncOperatorOrigin[] = [{ // 0 庭院
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰'
	}, { // 1 庭院
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰'
	}, { // 2 选边
		desc: [1280, 720,
			[
				[center, 325, 301, 0xc69f73],
				[center, 365, 361, 0x262421],
				[right, 1121, 337, 0x282521],
				[right, 1141, 343, 0xb0805a],
				[right, 1060, 648, 0x6e3824],
			]
		],
		oper: [
			[center, 1280, 720, 247, 265, 432, 449, 1000], // 左边
			[center, 1280, 720, 1090, 309, 1219, 419, 1000], // 右边
			[center, 1280, 720, 851, 580, 966, 627, 1000], // 三十万
			[center, 1280, 720, 1007, 416, 1109, 494, 1000], // 押注
			[center, 1280, 720, 682, 408, 832, 448, 1000], // 押注确认
			[left, 1280, 720, 6, 7, 60, 54, 2000], // 完了之后返回上一级（庭院）
		]
	}, { // 3 竞猜成功
		desc: [
			1280, 720,
			[
				[right, 728, 294, 0xedce97],
				[center, 386, 349, 0xac7d56],
				[right, 1164, 406, 0xb48459],
				[right, 795, 498, 0x43241f],
				[right, 700, 506, 0x3f231e],
			]
		],
		oper: [
			[center, 1280, 720, 721, 406, 782, 438, 1000],
		]
	}, { // 4 竞猜下一把
		desc: [1280, 720,
			[
				[center, 360, 412, 0xb4885c],
				[right, 700, 506, 0x8e6958],
				[right, 793, 522, 0x321e1e],
				[right, 1136, 406, 0xb07f55],
				[right, 736, 36, 0x3a2321],
			]
		],
		oper: [
			[center, 1280, 720, 770, 484, 819, 532, 1000],
		]
	}, { // 5 识别数字
		oper: [
			[center, 1280, 720, 240, 456, 433, 516, 1000],
			[center, 1280, 720, 1054, 456, 1254, 527, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 401,
			name: '对弈竞猜_杂项',
			operator: [thisOperator[4], thisOperator[3],]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 401,
			name: '庭院内',
			operator: [thisOperator[0], thisOperator[1]]
		})) {
			let point = null;
			let cnt = 3;
			while (cnt-- > 0 && !point) {
				sleep(80);
				thisScript.keepScreen(true);
				point = thisScript.findMultiColor('对弈竞猜');
			}
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
					200
				]];
				thisScript.regionClick(oper);
				sleep(1400);
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
				'查查尔': 'https://rsshub.zzliux.cn/163/ds/d9dc2a75497c4a91b2db1e909a36544d',
				'槐下30': 'https://rsshub.zzliux.cn/163/ds/a9724e98c1cb4a4e931ebc3f467ea73d',
			}[thisconf.follow_whose as string || '面灵气喵'];

			// 获取下次下注场次时间
			const now = new Date();
			const h = now.getHours();
			let nextH = Math.floor(h / 2) * 2 + '';
			if (nextH.length === 1) nextH = '0' + nextH;
			// @ts-expect-error d.ts文件问题
			const str = http.get(rssUrl).body.string();
			const str2 = str.match(/<item[\s\S\n]+?<description>([\s\S\n]+?)<\/description>/g)
				.filter((o: string) => !o.match(/体验服/)) // 过滤体服，避免拿到体服的
				.slice(0, 5) // 从最近的5个拿，避免拿到昨天的
				.join('');
			console.log(str2);

			// 该规则目前是面灵气喵的固定规则，其他的up还得再看看怎么搞
			// 增加关键词，避免拿到体服的
			const reg = new RegExp(`对弈竞猜.*${nextH}:00.+?([左右红蓝]|翻盘)`);
			const r = str2.match(reg);
			if (r) {
				if (r[1] === '红' || r[1] === '左') { // 押左
					thisScript.regionClick([thisOperator[2].oper[0]]);
				} else if (r[1] === '蓝' || r[1] === '右') { // 押右
					thisScript.regionClick([thisOperator[2].oper[1]]);

				} else if (r[1] === '翻盘' && thisScript.getOcrDetector()) { // 押翻盘
					const realTimeBmpLeft = thisScript.findText('.+', 0, thisOperator[5].oper[0], '包含');
					const realTimeBmpRight = thisScript.findText('.+', 0, thisOperator[5].oper[1], '包含');
					if (realTimeBmpLeft.length != 0 && realTimeBmpRight.length != 0) {
						const realTimeTextLeft = realTimeBmpLeft[0].label;
						const realTimeTextpRight = realTimeBmpRight[0].label;
						console.log(`ocr识别为左右分别为：${realTimeTextLeft},${realTimeTextpRight}`);
						if (Number(realTimeTextLeft) < Number(realTimeTextpRight)) {
							thisScript.regionClick([thisOperator[2].oper[0]]);
						} else {
							thisScript.regionClick([thisOperator[2].oper[1]]);
						}
					}
				}
				// 押注确认
				thisScript.regionClick([thisOperator[2].oper[2]]);
				thisScript.regionClick([thisOperator[2].oper[3]]);
				thisScript.regionClick([thisOperator[2].oper[3]]);
				thisScript.regionClick([thisOperator[2].oper[4]]);
				// 推送的时候更新截图
				thisScript.keepScreen();
				thisScript.regionClick([thisOperator[2].oper[5]]); // 更新截图后返回庭院
				thisScript.myToast(`根据${thisconf.follow_whose}选择押${r[1]}`);
				thisScript.doPush(thisScript, { text: `根据${thisconf.follow_whose}选择押${r[1]}`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				sleep(3000);
			} else {
				thisScript.myToast(`获取${thisconf.follow_whose}押注信息失败，1分钟后再次获取`);
				thisScript.doPush(thisScript, { text: `获取${thisconf.follow_whose}押注信息失败，1分钟后再次获取`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				sleep(60000);
			}
		}
		return false;
	}
}
