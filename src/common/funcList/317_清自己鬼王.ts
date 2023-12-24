import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func317 implements IFuncOrigin {
	id = 317;
	name = '清自己鬼王';
	desc: '只清理1-4星鬼王，56星自行开启通知或不时查看（脚本会停下）';
	config = [{
		desc: '',
		config: [{
			name: 'fight_level_four',
			desc: '是否清理4星',
			type: 'switch',
			default: true,
			value: null,
		}]
	}]
	operator: IFuncOperatorOrigin[] = [{ // 0 鬼王界面
		desc: [
			1280, 720,
			[
				[left, 310, 28, 0xa89cb1],
				[left, 240, 36, 0x583716],
				[left, 119, 37, 0xf8f3e0],
				[left, 32, 34, 0xf8ecaf],
				[left, 36, 685, 0xccb085],
			]
		]
	}, { // 1  易级别
		desc: [
			1280, 720,
			[
				[left, 33, 310, 0x969696],
				[left, 41, 302, 0x7a7a7a],
				[left, 50, 311, 0xaeaeae],
				[left, 41, 312, 0xc8cfd6],
				[left, 41, 321, 0xebebeb],
			]
		]
	}, { // 2  中级别
		desc: [
			1280, 720,
			[
				[left, 32, 311, 0x147acf],
				[left, 50, 312, 0x2288dd],
				[left, 41, 302, 0x0c61be],
				[left, 41, 314, 0xdde8f1],
				[left, 40, 309, 0xd0ddea],
			]
		]
	}, { // 3  高级别
		desc: [
			1280, 720,
			[
				[left, 33, 311, 0xac2fce],
				[left, 41, 302, 0x811ab4],
				[left, 50, 311, 0xb935d7],
				[left, 42, 307, 0xc3bdda],
				[left, 41, 320, 0xc947e5],
			]
		]
	}, { // 4  难级别
		desc: [
			1280, 720,
			[
				[left, 33, 311, 0xf48b11],
				[left, 40, 304, 0xf26b0d],
				[left, 50, 310, 0xf4910b],
				[left, 45, 315, 0xe6ebf3],
				[left, 41, 309, 0xdee5e9],
			]
		]
	}, { // 5  极级别
		desc: [
			1280, 720,
			[
				[left, 32, 311, 0xfb8a75],
				[left, 50, 311, 0xff967b],
				[left, 41, 302, 0xfb383c],
				[left, 41, 320, 0xffa296],
				[left, 38, 311, 0xe2ecf1],
				[left, 43, 311, 0xa16762],
			]
		]
	}, { // 6  搜索鬼王
		desc: [
			1280, 720,
			[
				[right, 1098, 635, 0xc48c16],
				[right, 1193, 635, 0xfaecb8],
				[right, 1101, 620, 0xce9415],
				[right, 1225, 621, 0xc89116],
				[right, 1165, 647, 0xf8ecb9],
				[right, 1163, 613, 0xfcecbb],
			]
		],
		oper: [
			[center, 1280, 720, 1114, 590, 1209, 671, 1000],
		]
	}, { // 7  强力状态切换普通
		desc: [
			1280, 720,
			[
				[right, 1247, 506, 0xa88d59],
				[right, 1248, 524, 0xc4a56b],
				[right, 1085, 505, 0x4a3c21],
				[right, 1123, 527, 0x4d3f23],
			]
		],
		oper: [
			[center, 1280, 720, 1071, 503, 1152, 528, 1000],
		]
	}, { // 8  挑战鬼王
		oper: [
			[center, 1280, 720, 1108, 583, 1215, 658, 1000],
		]
	}, { // 9  自己鬼王 结算中
		desc: [
			1280, 720,
			[
				[left, 20, 292, 0xffffd8],
				[left, 273, 291, 0xffffea],
				[center, 666, 511, 0xffeeb3],
				[center, 711, 522, 0xffeeb3],
				[center, 758, 509, 0xffeeb3],
				[center, 722, 525, 0xffeeb3],
			]
		]
	}, { // 10  好友鬼王 结算中
		desc: [
			1280, 720,
			[
				[left, 20, 465, 0xffffd8],
				[left, 273, 466, 0xfffff2],
				[center, 666, 511, 0xffeeb3],
				[center, 711, 522, 0xffeeb3],
				[center, 758, 509, 0xffeeb3],
				[center, 722, 525, 0xffeeb3],
			]
		],
		oper: [
			[center, 1280, 720, 92, 303, 260, 359, 1000],
		]
	}, { // 11	分享鬼王
		desc: [
			1280, 720,
			[
				[left, 225, 328, 0xffde79],
				[left, 235, 318, 0x392611],
				[left, 246, 317, 0x33260f],
				[left, 257, 331, 0xf6d16c],
				[left, 245, 337, 0xf7cf5b],
			]
		],
		oper: [
			[center, 1280, 720, 226, 320, 254, 352, 1000],
		]
	}, { // 12 疲劳上限
		desc: [
			1280, 720,
			[
				[center, 502, 365, 0x45448c],
				[center, 514, 353, 0xa53f2d],
				[center, 539, 363, 0x5044d6],
				[center, 630, 472, 0xe9361e],
				[center, 750, 212, 0x645248],
			]
		],
		oper: [
			[center, 1280, 720, 912, 178, 958, 216, 1000],
		]
	}];


	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['317'];
		if (thisScript.oper({
			id: 317,
			name: '搜索鬼王',
			operator: [thisOperator[6]]
		})) {
			thisScript.global.waitFight = true;
			thisScript.global.faXian_NumOT++;
			if (thisScript.global.faXian_NumOT > 3) {
				thisScript.doPush(thisScript, { text: '多次点击未开始，票已清光。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				sleep(3000);
				return true;
			}
			return true;
		}
		if (thisScript.oper({
			id: 317,
			name: '结算中',
			operator: [thisOperator[9], thisOperator[10]]
		})) {
			thisScript.global.waitFight = true;
			thisScript.global.faXian_NumOT = 0;
			return true;
		}
		// 分享鬼王被击杀后才再次攻打鬼王
		if (thisScript.global.waitFight && thisScript.oper({
			id: 317,
			name: '鬼王界面',
			operator: [thisOperator[0]]
		})) {
			let results = false;
			// 处理易和中的级别
			if (thisScript.oper({
				id: 317,
				name: '鬼王等级:易或中',
				operator: [thisOperator[1], thisOperator[2]]
			})) {
				thisScript.oper({
					id: 317,
					name: '强力状态切换普通',
					operator: [thisOperator[7]]
				})
				thisScript.regionClick([thisOperator[8].oper[0]]);
				return true;
			}
			// 识别高的级别
			if (thisScript.oper({
				id: 317,
				name: '鬼王等级:高',
				operator: [thisOperator[3]]
			})) {
				if (thisConf.fight_level_four) {
					thisScript.oper({
						id: 317,
						name: '强力状态切换普通',
						operator: [thisOperator[7]]
					})
					thisScript.regionClick([thisOperator[8].oper[0]]);
					return true;
				} else {
					results = true;
				}
			}
			// 识别难和极的级别
			if (thisScript.oper({
				id: 317,
				name: '鬼王等级:难或极',
				operator: [thisOperator[4], thisOperator[5]]
			})) {
				results = true;
			}
			// 对不清理的鬼王集中处理
			if (results) {
				thisScript.doPush(thisScript, { text: '高星鬼王已出现。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				sleep(3000);
				thisScript.global.waitFight = false;
				return true;
			}
		}
		if (thisScript.oper({
			id: 317,
			name: '疲劳上限',
			operator: [thisOperator[12]]
		})) {
			thisScript.doPush(thisScript, { text: '多次点击未开始，票已清光。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
			sleep(3000);
			return true;
		}
		return false;
	}
}