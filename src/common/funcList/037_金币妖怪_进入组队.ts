import {
	IFuncOrigin,
	IFuncOperatorOrigin,
	IFuncOperator,
} from '@/interface/IFunc';
import { Script } from '@/system/script';
const left = 0;
const center = 1;
const right = 2;
let swiper = 0,
	scroll = true;

export class Func037 implements IFuncOrigin {
	id = 37;
	name = '金币妖怪_进入组队';
	desc = '从庭院进入金币妖怪组队界面';
	config = [
		{
			desc: '选择组队的副本类型',
			config: [
				{
					name: 'target',
					desc: '启动目标',
					type: 'list',
					data: ['金币妖怪', '经验妖怪', '年兽', '石距'],
					default: '金币妖怪',
				},
				{
					name: 'createMode',
					desc: '创建模式',
					type: 'list',
					data: ['创建队伍', '自动匹配'],
					default: '创建队伍',
				},
				{
					name: 'wait_time',
					desc: '组队等待时长(分钟)',
					type: 'text',
					default: '5',
				},
				{
					name: 'next_scheme',
					desc: '运行结束后的下一个方案',
					type: 'scheme',
					default: '关闭BUFF',
				},
			],
		},
	];
	operator: IFuncOperatorOrigin[] = [
		{
			//	0 新组队页面
			desc: [
				1280, 720,
				[
					[left, 169, 40, 0x09090a],
					[right, 1221, 87, 0x754824],
					[right, 1224, 621, 0x381f1c],
					[left, 100, 513, 0x372422],
					[center, 1226, 699, 0x3f2822],
					[center, 617, 657, 0xd2c2b4],
					[left, 43, 39, 0xf5e4a5],
				]
			],
			oper: [
				[center, 1280, 720, 171, 350, 326, 383, 1], //	滑动
				[center, 1280, 720, 165, 258, 338, 304, 1], //	滑动
				[left, 1280, 720, 117, 75, 392, 693, 1], //	组队 项目区域
				[right, 1280, 720, 992, 600, 1154, 650, 500], //	点击 创建队伍
				[center, 1280, 720, 713, 610, 857, 642, 500], //	点击 自动匹配
				[center, 1280, 720, 747, 35, 777, 65, 1000], // 5	点击 退出自动匹配
				[left, 1280, 720, 32, 20, 65, 49, 1200], //	点击 退出组队界面
			],
		},
		{
			// 1 旧组队页面
			desc: [1280, 720,
				[
					[left, 52, 28, 0xf0d08d],
					[left, 106, 32, 0xf5f0de],
					[left, 126, 51, 0xefead7],
					[left, 169, 40, 0x09090a],
					[left, 56, 60, 0xc4a97c],
					[right, 1221, 87, 0x754824],
					[right, 1224, 621, 0x381f1c],
					[right, 1212, 244, 0xdeba52],
					[left, 138, 31, 0xc5bfae],
				],
			],
		},
		{
			//	2 检测是否为队伍公开权限弹窗
			desc: [1280, 720,
				[
					[center, 546, 517, 0xf4b25f],
					[center, 730, 517, 0xf4b25f],
					[center, 906, 553, 0xcab39a],
					[center, 898, 174, 0xcbb59e],
					[center, 372, 172, 0xcbb59e],
					[center, 382, 545, 0xcbb59e],
				],
			],
			oper: [
				[center, 1280, 720, 410, 289, 426, 309, 1000], //	队伍公开权限 点击所有人可见
				[center, 1280, 720, 534, 491, 746, 537, 1000], //	队伍公开权限 点击创建
			],
		},
		{
			//	3	检测是否为确定退出自动匹配队列弹窗
			desc: [1280, 720,
				[
					[center, 416, 248, 0xcbb59e],
					[center, 865, 243, 0xc7b096],
					[center, 830, 430, 0xf4b25f],
					[center, 588, 438, 0xdf6851],
					[center, 641, 478, 0xbea88e],
				],
			],
			oper: [
				[center, 1280, 720, 692, 416, 822, 446, 1200], //	点击确认
			],
		},
		{
			//	4 检测是否为排队等待中
			desc: [1280, 720,
				[
					[left, 52, 28, 0xf0d08d],
					[left, 106, 32, 0xf5f0de],
					[left, 126, 51, 0xefead7],
					[left, 169, 40, 0x09090a],
					[left, 56, 60, 0xc4a97c],
					[right, 1221, 87, 0x754824],
					[right, 1224, 621, 0x381f1c],
					[right, 1212, 244, 0xdeba52],
					[left, 138, 31, 0xc5bfae],
					[center, 779, 17, 0xa08167],
					[center, 678, 86, 0xb2a290],
					[center, 390, 20, 0x8e6c45],
				],
			],
		},
		{
			//	5 检测是否不为排队等待中
			desc: [1280, 720,
				[
					[left, 52, 28, 0xf0d08d],
					[left, 106, 32, 0xf5f0de],
					[left, 126, 51, 0xefead7],
					[left, 169, 40, 0x09090a],
					[left, 56, 60, 0xc4a97c],
					[right, 1221, 87, 0x754824],
					[right, 1224, 621, 0x381f1c],
					[right, 1212, 244, 0xdeba52],
					[left, 138, 31, 0xc5bfae],
					[center, 444, 94, 0x483128],
					[center, 611, 94, 0x483128],
				],
			],
		},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['37'];

		if (
			thisScript.oper({
				id: 37,
				name: '检测是否为队伍公开权限弹窗/退出匹配弹窗',
				operator: [thisOperator[2], thisOperator[3]],
			})
		) {
			return true;
		}

		if (
			thisScript.oper({
				id: 37,
				name: '金币妖怪_是否排队等待中',
				operator: [thisOperator[4]],
			}) &&
			!thisScript.global.team_up_lagTime
		) {
			thisScript.global.team_up_lagTime = new Date();
		}

		if (
			thisScript.oper({
				id: 37,
				name: '金币妖怪_是否非排队等待中',
				operator: [thisOperator[5]],
			}) &&
			thisScript.global.team_up_lagTime
		) {
			thisScript.global.team_up_lagTime = undefined;
		}

		if (
			thisScript.oper({
				id: 37,
				name: '金币妖怪_进入组队',
				operator: [
					{
						desc: thisOperator[0].desc,
					},
					{
						desc: thisOperator[1].desc,
					},
				],
			})
		) {
			if (thisScript.global.team_up_lagTime) {
				const time = Number.parseInt(thisconf.wait_time as string, 10);
				if (
					new Date().getTime() - thisScript.global.team_up_lagTime.getTime() >
					time * 60000
				) {
					console.log('排队时间超过了' + time * 60000);
					thisScript.global.team_up_lagTime = undefined;
					//	点击组队计数清零
					thisScript.global.checked_yard_count = 1;
					return thisScript.oper({
						id: 37,
						name: '退出匹配等待',
						operator: [
							{
								oper: [thisOperator[0].oper[5]],
							},
						],
					});
				} else {
					return false;
				}
			}

			const target = (thisconf && thisconf.target) || '金币';
			const result = thisScript.findText(
				target as string,
				500,
				thisOperator[0].oper[2],
				'模糊|0.75'
			);

			if (result.length > 0) {
				const p = {
					x: (result[0].points[0].x + result[0].points[1].x) / 2,
					y: (result[0].points[0].y + result[0].points[3].y) / 2,
				};

				const lx = p.x - 5;
				const ly = p.y - 5;
				const rx = p.x + 5;
				const ry = p.y + 5;

				const toClick = [lx > 0 ? lx : 0, ly > 0 ? ly : 0, rx, ry, 1000];
				console.log('妖怪组队__识别成功，识别结果为:', toClick.toString(), p);
				thisScript.regionClick(
					[toClick],
					500 + +thisScript.scheme.commonConfig.afterClickDelayRandom
				);

				let createMode = 3;
				if (thisconf && thisconf.createMode) {
					switch (thisconf.createMode) {
						case '创建队伍': {
							createMode = 3;
							break;
						}
						case '自动匹配': {
							createMode = 4;
							break;
						}
					}
				}
				if (
					thisScript.oper({
						id: 37,
						name: '点击_创建队伍或自动匹配',
						operator: [
							{
								oper: [thisOperator[0].oper[createMode]],
							},
						],
					})
				) {
					// 做延时检测 防止登陆后的弹窗
					if (!thisScript.global.checked_yard_count) {
						thisScript.global.checked_yard_count = 1;
					} else {
						thisScript.global.checked_yard_count += 1;
						sleep(1000);
					}

					if (thisScript.global.checked_yard_count > 3) {
						sleep(1000);
						thisScript.oper({
							id: 37,
							name: '点击_退出组队界面',
							operator: [
								{
									oper: [thisOperator[0].oper[6]],
								},
							],
						});

						thisScript.rerun(thisconf.next_scheme);
					}
				}
			} else {
				thisScript.regionSwipe(
					thisOperator[0].oper[scroll ? 0 : 1],
					thisOperator[0].oper[scroll ? 1 : 0],
					[100, 300],
					0,
					3000
				);
				swiper++;
				if (swiper >= 6) {
					swiper = 0;
					scroll = !scroll;
				}
				return true;
			}
		}
		return false;
	}
}
