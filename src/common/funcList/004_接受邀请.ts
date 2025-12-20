import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func004 implements IFuncOrigin {
	id = 4;
	name = '接受邀请';
	desc = '左侧弹出邀请提示时，自动接受邀请';
	config = [{
		desc: '',
		config: [{
			name: 'exit',
			desc: '对邀请提示不做动作并返回庭院，然后以下切换方案（用于当做判断条件）',
			type: 'switch',
			default: false,
		}, {
			name: 'designated_scheme',
			desc: '所指定的方案(在历史运行方案中匹配所输入的字并切换过去,可用","隔断多个关键字)',
			type: 'text',
			default: ',',
		}, {
			name: 'teammate_exit',
			desc: '队长退出后切换方案',
			type: 'switch',
			default: true,
		}, {
			name: 'teammate_exit_next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '关闭BUFF',
		}, {
			name: 'auto_team',
			desc: '自动接受后不再处理接受邀请',
			type: 'switch',
			default: false,
		},]
	}]
	operator: IFuncOperatorOrigin[] = [{
		// 0 自动接受邀请
		desc: [1280, 720,
			[
				[left, 20, 254, 0x7e6750],
				[left, 45, 248, 0xdf6e5b],
				[left, 138, 260, 0x57b260],
				[left, 234, 251, 0xefc791],
				[left, 247, 269, 0x59b462],
				[left, 255, 276, 0x86705d],
				[left, 192, 276, 0xeadece]]
		],
		oper: [
			[left, 1280, 720, 219, 237, 254, 275, 600]
		]
	}, { // 1 接受一次邀请
		desc: [1280, 720,
			[
				[left, 128, 255, 0x58b361],
				[left, 45, 257, 0xdd6a59],
				[left, 79, 222, 0xe3d3c2],
				[left, 14, 299, 0xf1be36],
				[left, 176, 291, 0xefe5d6],
				[center, 454, 207, 0xf79a6b],
				[center, 515, 220, 0x9e3925]
			]
		],
		oper: [
			[left, 1280, 720, 120, 239, 159, 273, 600]
		]
	}, { // 2	挑战_亮
		desc: [1280, 720,
			[
				[left, 43, 37, 0xf5e6a8],
				[right, 1177, 667, 0xd8b871],
				[right, 1187, 679, 0xcda35d],
				[right, 1188, 609, 0xf1e096],
				[left, 60, 39, 0x84582f],
				[left, 19, 47, 0x281717]
			]
		]
	}, { // 3	挑战_暗
		desc: [
			1280, 720,
			[
				[left, 43, 37, 0xf5e6a8],
				[right, 1210, 621, 0xd9d9d9],
				[right, 1228, 658, 0xc8c8c8],
				[left, 60, 39, 0x84582f],
				[left, 19, 47, 0x281717]
			]
		],
		oper: [

		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['4'];
		if (thisConf && thisConf.teammate_exit && thisScript.oper({
			id: 4,
			name: '队长退出',
			operator: [thisOperator[2], thisOperator[3]]
		})) {
			thisScript.rerun(thisConf.teammate_exit_next_scheme);
			sleep(3000)
			return true;
		}
		if (thisConf && thisConf.exit && thisScript.oper({
			id: 4,
			name: '邀请切换横幅',
			operator: [{ desc: thisOperator[0].desc }, { desc: thisOperator[1].desc }]
		})) {
			const designated_scheme = String(thisConf.designated_scheme).split(',').map(s => s.trim()).filter(Boolean);
			if (designated_scheme.length < 1) {
				thisScript.myToast('格式定义错误，请检查');
				thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
			} else {
				const filtered = thisScript.schemeHistory.filter(item => designated_scheme.some(word => item.schemeName.includes(word)));
				if (filtered.length < 1) {
					thisScript.myToast('未找到指定方案，已停止');
					thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
				} else {
					log(filtered)
					thisScript.rerun(filtered[filtered.length - 1].schemeName);
				}
			}
			return true;
		}
		if (thisConf && thisConf.auto_team && thisScript.global.yaoqing_close) {
			return false;
		}
		if (thisScript.oper({
			id: 4,
			name: '接受邀请',
			operator: [thisOperator[0]]
		})) {
			thisScript.global.yaoqing_close = true;
			return true;
		}
		if (thisScript.oper({
			id: 4,
			name: '接受邀请',
			operator: [thisOperator[1]]
		})) {
			return true;
		}
	}
}
