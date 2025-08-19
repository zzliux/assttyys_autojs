import {
	IFuncOrigin,
	IFuncOperatorOrigin,
	IFuncOperator,
} from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
// const left = 0;
const center = 1;
const right = 2;

export class Func311 implements IFuncOrigin {
	id = 311;
	name = '红标';
	desc = '战斗界面标记敌方式神';
	config = [
		{
			desc: '红标',
			config: [
				{
					name: 'redType',
					desc: '红标类型',
					type: 'list',
					data: ['PVE顶部BOSS血条固定红标', '自定义坐标', '神荒'],
					default: 'PVE顶部BOSS血条固定红标',
				},
				{
					name: 'redPosition',
					desc: '红标坐标，仅红标类型为自定义坐标时生效，(格式x(横轴),y(纵轴)左上角为0,0)，实际点击时xy坐标会在±20内随机点击，如625,220',
					type: 'text',
					default: '625,220',
				}
			],
		},
	];
	operator: IFuncOperatorOrigin[] = [
		{
			//  开始战斗后的场景
			desc: '战斗界面',
		},
		{
			//  1 检测_PVE顶部BOSS血条
			desc: [
				1280,
				720,
				[
					[center, 430, 3, 0x42291f],
					[center, 380, 5, 0x41271f],
					[center, 337, 4, 0x1e110c],
				],
			],
			oper: [
				[center, 1280, 720, 387, 15, 418, 54, 1200], //  点击 PVE顶部BOSS血条红标
			],
		},
		{
			//  检测_PVE顶部BOSS血条已添加红标
			desc: [
				1280,
				720,
				[
					[center, 395, 47, 0x755842],
					[center, 410, 59, 0x755743],
					[center, 430, 3, 0x42291f],
					[center, 380, 5, 0x41271f],
					[center, 337, 4, 0x1e110c],
				],
			],
		}, { // 3 站位区域
			desc: [
				1280, 720,
				[
					[center, 806, 85, 0x676a97],
				]
			],
			oper: [
				[center, 1280, 720, 341, 176, 378, 208, 1000], // 左一
				[center, 1280, 720, 470, 216, 501, 243, 1000],
				[center, 1280, 720, 626, 217, 662, 246, 1000],
				[center, 1280, 720, 763, 193, 809, 227, 1000],
				[center, 1280, 720, 903, 175, 946, 208, 1000], // 右一
			]
		}, { // 4 行动条红色
			desc: [
				1280, 720,
				[
					[right, 1210, 480, 0xef5252],
					[right, 1276, 480, 0xd7312e],
					[right, 1243, 447, 0xdc3939],
					[right, 1243, 513, 0xef383a],
				]
			]
		}, { // 5 行动条黄色
			desc: [
				1280, 720,
				[
					[right, 1210, 480, 0xf8ec82],
					[right, 1276, 480, 0xd4b758],
					[right, 1243, 447, 0xeac45b],
					[right, 1243, 513, 0xf9f18f],
				]
			]
		}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['311'];
		// 已点击 需要准备方案重置
		if (thisScript.global.redFlag) {
			return false;
		}
		if (
			thisScript.oper({
				name: '红标-战斗界面检测',
				operator: [
					{
						desc: '战斗界面',
					},
				],
			})
		) {
			// 开启红标
			let toClick = null;
			if (thisconf.redType === '自定义坐标') {
				const posPam = String(thisconf.redPosition).split(',');
				if (posPam.length !== 2) {
					thisScript.myToast('自定义坐标格式定义错误，请检查');
					return true;
				}
				const inX = parseInt(posPam[0]);
				const inY = parseInt(posPam[1]);
				if (Number.isNaN(inX) || Number.isNaN(inY)) {
					thisScript.myToast('自定义坐标格式定义错误，请检查');
					return true;
				}
				toClick = [
					Math.max(inX - 20, 0),
					Math.max(inY - 20, 0),
					inX + 20,
					inY + 20,
					1000,
				];
				sleep(1000);
				console.log('[红标]--点击坐标为', toClick);
				// 点一次 需要准备方案重置才能再次点击
				thisScript.global.redFlag = true;
				thisScript.regionClick([toClick]);
				return true;
			} else if (thisconf.redType === 'PVE顶部BOSS血条固定红标') {
				if (
					thisScript.oper({
						id: 311,
						name: '红标-PVE顶部BOSS血条已被标记',
						operator: [thisOperator[2]],
					})
				) {
					// 点一次 需要准备方案重置才能再次点击
					thisScript.global.redFlag = true;
					return true;
				}

				if (
					thisScript.oper({
						id: 311,
						name: '红标-检测_PVE顶部BOSS血条并点击红标',
						operator: [thisOperator[1]],
					})
				) {
					// 点一次 需要准备方案重置才能再次点击
					thisScript.global.redFlag = true;
					return true;
				}
			} else if (thisconf.redType === '神荒') {
				if (thisScript.oper({
					name: '红标-行动条检测',
					operator: [thisOperator[4], thisOperator[5]],
				})) {
					let point = thisScript.findMultiColor('腐血', null, false, false)
					if (point) {
						console.log('开局查找到腐血');
						const point_blood = thisScript.findMultiColorEx('红标_血条')
						const operList = [];
						for (const flagPoint of point_blood) {
							if (point.x > flagPoint.x + 4 && point.x < flagPoint.x + 115) {
								operList.push(flagPoint);
							}
						}
						operList.sort((a, b) => b.y - a.y); // 从大到小排序
						if (operList.length > 1 && point.y < operList[1].y) {
							// 点击阴阳师位置
							const oper = [
								operList[1].x + 35,
								operList[1].y + 42,
								operList[1].x + 40,
								operList[1].y + 45,
								1000
							];
							log('点击阴阳师位置')
							thisScript.regionClick([oper]);
							thisScript.global.redFlag = true;
						} else if (operList.length > 0) {
							const oper = [
								operList[0].x + 35,
								operList[0].y + 60,
								operList[0].x + 40,
								operList[0].y + 80,
								1000
							];
							log('点击式神位置')
							thisScript.regionClick([oper]);
							thisScript.global.redFlag = true;
						} else if (thisScript.global.jietu) {
							const now = new Date().getTime();
							const ajImg = com.stardust.autojs.core.image.ImageWrapper.ofBitmap(thisScript.helperBridge.helper.GetBitmap());
							const path = `/sdcard//Pictures/批量截图/${now}.png`;
							files.ensureDir(path);
							ajImg.saveTo(path);
							ajImg.recycle();
							thisScript.global.jietu = false;
						}
						return true;
					}
					point = thisScript.findMultiColor('神荒', null, false, false)
					if (point) {
						console.log('开局查找到神荒');
						const point_blood = thisScript.findMultiColorEx('红标_血条')
						const operList = [];
						for (const flagPoint of point_blood) {
							if (point.x > flagPoint.x + 4 && point.x < flagPoint.x + 115) {
								operList.push(flagPoint);
							}
						}
						operList.sort((a, b) => b.y - a.y); // 从大到小排序
						if (operList.length > 1 && point.y < operList[1].y) {
							// 点击阴阳师位置
							const oper = [
								operList[1].x + 35,
								operList[1].y + 42,
								operList[1].x + 40,
								operList[1].y + 45,
								1000
							];
							log('点击阴阳师位置')
							thisScript.regionClick([oper]);
							thisScript.global.redFlag = true;
						} else if (operList.length > 0) {
							const oper = [
								operList[0].x + 35,
								operList[0].y + 60,
								operList[0].x + 40,
								operList[0].y + 80,
								1000
							];
							log('点击式神位置')
							thisScript.regionClick([oper]);
							thisScript.global.redFlag = true;
						} else if (thisScript.global.jietu) {
							const now = new Date().getTime();
							const ajImg = com.stardust.autojs.core.image.ImageWrapper.ofBitmap(thisScript.helperBridge.helper.GetBitmap());
							const path = `/sdcard//Pictures/批量截图/${now}.png`;
							files.ensureDir(path);
							ajImg.saveTo(path);
							ajImg.recycle();
							thisScript.global.jietu = false;
						}
						return true;
					}
					thisScript.global.redFlag = true;
				}
			}
			return false;
		}
	}
}