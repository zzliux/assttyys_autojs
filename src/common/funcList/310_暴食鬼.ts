import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func310 implements IFuncOrigin {
	id = 310;
	name = '暴食鬼吃经验';
	desc = '暴食鬼吃一二三星经验书';
	operator: IFuncOperatorOrigin[] = [{ // 暴食鬼界面
		desc: [1280, 720,
			[[center, 958, 521, 0x261615],
				[center, 958, 530, 0x241614],
				[left, 43, 40, 0xf5e4a8],
				[left, 118, 40, 0xaf8c56],
				[left, 179, 43, 0xab8954],
				[right, 1084, 30, 0x971e20],
				[right, 1086, 58, 0xc8bfaf]]
		],
		oper: [
			[center, 1280, 720, 88, 208, 168, 285, 1000], // 第一排第一列

		]
	}, { // 1,一二三级经验书
		desc: [1280, 720,
			[[left, 82, 199, 0x153a7c],
				[left, 82, 294, 0x0e4196],
				[left, 175, 293, 0x0e4196],
				[left, 152, 227, 0x414249]]
		]
	}, { // 2,四级经验书
		desc: [1280, 720,
			[[left, 128, 278, 0xf1801a],
				[left, 142, 279, 0xe8932d],
				[left, 82, 200, 0x0e4196],
				[left, 116, 240, 0x9c9c9c],
				[left, 124, 258, 0x86918f],
				[left, 100, 235, 0xfbf8f2]]
		]
	}, { // 3,五六级经验书
		desc: [1280, 720,
			[[left, 128, 278, 0xf1801a],
				[left, 142, 279, 0xe8932d],
				[left, 82, 200, 0x0e4196],
				[left, 116, 240, 0x9c9c9c],
				[left, 124, 258, 0x86918f],
				[left, 100, 235, 0xfbf8f2]]
		]
	}, { // 4,存入
		desc: [1280, 720,
			[[left, 188, 200, 0x5b95c8],
				[left, 269, 205, 0x0282a8],
				[left, 264, 215, 0xfdfef3],
				[left, 276, 210, 0xfffff4],
				[center, 833, 639, 0x704127],
				[center, 926, 674, 0x7c4b2a]]
		],
		oper: [
			[center, 1280, 720, 833, 639, 926, 674, 1000]// 存入
		]
	}, { // 5,已满
		desc: [1280, 720,
			[[center, 944, 516, 0xd47526],
				[center, 943, 533, 0xfed760],
				[center, 947, 531, 0xffcc5d],
				[center, 955, 519, 0xf7a333],
				[center, 830, 642, 0x704028],
				[center, 921, 674, 0x7b4a29]]
		]
	}]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 310,
			name: '暴食鬼',
			operator: [{
				desc: thisOperator[0].desc
			}]
		})) {
			if (thisScript.oper({
				id: 310,
				name: '暴食鬼_存入',
				operator: [thisOperator[4]]
			})) {
				sleep(2000);
				return true;
			}

			if (thisScript.oper({
				id: 310,
				name: '暴食鬼选_经验',
				operator: thisOperator.slice(1, 4)
			})) {
				thisScript.regionClick([[...thisOperator[0].oper[0], 1000]])
				return true;
			}

		}
		if (thisScript.oper({
			id: 310,
			name: '暴食鬼_已满',
			operator: [{
				desc: thisOperator[3].desc
			}]
		})) {
			thisScript.doPush(thisScript, { text: '经验已满，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
		}
		return false;
	}
}
