import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
// const right = 2;

export class Func050 implements IFuncOrigin {
	id = 50;
	name = '开启BUFF';
	config = [{
		desc: '开启后切换方案',
		config: [{
			name: 'scheme_switch_enabled',
			desc: '是否启用',
			type: 'switch',
			default: true,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '个人探索',
		}]
	}, {
		desc: '选择开启BUFF的类型',
		config: [{
			name: 'buff_type',
			desc: '开启BUFF类型',
			type: 'list',
			data: ['觉醒', '御魂', '金币', '经验'],
			default: '经验'
		}]
	}, {
		desc: '准备界面下开启buff',
		config: [{
			name: 'ready_once_buff',
			desc: '是否在准备界面下开启buff，运行一次后不再运行，启用需将本功能排在“001准备”前',
			type: 'switch',
			default: false,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 0 buff界面
		desc: [1280, 720,
			[
				[center, 352, 526, 0x9c977e],
				[center, 933, 526, 0x747865],
				[center, 848, 528, 0xb89e7c],
				[center, 497, 522, 0x9e9d8c],
				[center, 363, 120, 0xd4c4bb],
				[center, 913, 121, 0xd8c7bf],
				[center, 878, 124, 0xdfd4cb]
			]
		],
		oper: [
			[center, 1280, 720, 0, 0, 855 - 782, 431 - 415, 2000],
			[center, 1280, 720, 937, 272, 1160, 531, 500],
		]
	}, {
		// 1 被横幅遮挡的御魂BUFF 一种
		desc: [
			1280, 720,
			[
				[center, 401, 205, 0x009db1],
				[center, 775, 211, 0xaf0d28],
				[center, 456, 215, 0xe85c2e],
				[center, 512, 221, 0xb83927],
				[center, 468, 196, 0xefdfbf],
			]
		],
		oper: [
			[center, 1280, 720, 774, 210, 852, 231, 1000],
		]
	}, { // 2 被横幅遮挡的御魂BUFF 二种
		desc: [
			1280, 720,
			[
				[center, 401, 205, 0x00bbd2],
				[center, 775, 211, 0xaf0d28],
				[center, 456, 215, 0xe85c2e],
				[center, 512, 221, 0xb83927],
				[center, 468, 196, 0xefdfbf],
			]
		],
		oper: [
			[center, 1280, 720, 774, 210, 852, 231, 1000],
		]
	}, {
		// 3 准备界面
		desc: '准备界面_未准备',
		oper: [
			[left, 1280, 720, 119, 659, 150, 712, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['50'];
		if (thisScript.oper({
			name: 'BUFF界面',
			operator: [{
				desc: thisOperator[0].desc
			}]
		})) {
			thisScript.global.opened_buff = true;
			if (thisconf.buff_type === '御魂' && thisScript.oper({
				name: '被横幅遮挡的御魂BUFF',
				operator: [thisOperator[1], thisOperator[2]]
			})) {
				return true;
			}
			const point = thisScript.findMultiColor(`关闭的BUFF_${thisconf.buff_type}`) || null
			if (point) {
				thisScript.regionClick([
					[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], 1000]
				]);
				return true;
			} else {
				thisScript.regionClick([thisOperator[0].oper[1]]);
				if (thisconf && thisconf.scheme_switch_enabled) {
					thisScript.rerun(thisconf.next_scheme);
				} else if (thisconf && !thisconf.ready_once_buff) {
					thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
				}
				return true;
			}
		}

		if (thisconf && thisconf.ready_once_buff && !thisScript.global.opened_buff) {
			return thisScript.oper({
				id: 50,
				name: '准备界面开buff',
				operator: [thisOperator[3]]
			});
		}

		return false;
	}
}
