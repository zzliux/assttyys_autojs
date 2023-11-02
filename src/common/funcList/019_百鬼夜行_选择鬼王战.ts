import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
// const left = 0;
const center = 1;
const right = 2;

export class Func019 implements IFuncOrigin {
	id = 19;
	name = '百鬼夜行_选择鬼王挑战';
	desc = '百鬼夜行中三选一鬼王界面时，选择一个鬼王后开始挑战，可配置随机或指定位置';
	config = [{
		desc: '',
		config: [{
			name: 'bossPosition',
			desc: '选择第几个鬼王',
			type: 'list',
			data: ['1', '2', '3', '随机'],
			default: '随机',
			value: null,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280,720,
			[[center,626,64,0x1F1627],
			[center,45,45,0xf5e5a3],
			[right,1177,574,0xc7a185],
			[center,47,650,0x201018],
			[center,997,628,0x7b4341]]
		],
		oper: [
			[center, 1280, 720, 245,444, 304,522, 500], // 第一个怪物位置
			[center, 1280, 720, 591,429, 654,504, 500], // 第二个怪物位置
			[center, 1280, 720, 978,460, 1046,515, 500], // 第三个怪物位置
			[center, 1280, 720, 1132,562, 1210,640, 9000], // 开始
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['19'];
		let oper = null;
		if ('随机' === thisconf.bossPosition) {
			oper = [thisOperator[0].oper[random(0, 2)], thisOperator[0].oper[3]];
		} else {
			oper = [thisOperator[0].oper[(thisconf.bossPosition as number) - 1], thisOperator[0].oper[3]];
		}
		return thisScript.oper({
			id: 18,
			name: '百鬼夜行_选择鬼王挑战',
			operator: [{
				desc: thisOperator[0].desc,
				oper: oper
			}]
		})
	}
}
