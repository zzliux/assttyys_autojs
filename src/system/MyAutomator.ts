import { isRoot } from '@auto.pro/core';
import Bezier from 'bezier-js';

// @ts-expect-error d.ts文件问题
export const myShell = isRoot ? new Shell(true) : undefined;

export interface IMyAutomator {
	tapType: number;
	dirctionReverse: boolean;
	RA: any;
	shell: any;

	setTapType(tapType: 0 | 1 | 2 | 3): void;
	press(x: number, y: number, delay: number): void;
	swipe(x0: number, y0: number, x1: number, y1: number, delay: number): void;
	regionBezierSwipe(transedOperS: Array<number>, transedOperE: Array<number>, duration: Array<number>, baseSleep: number, randomSleep: number, type?: number): void;
}

class MyAutomator implements IMyAutomator {
	tapType: number;
	dirctionReverse: boolean;
	RA: any;
	shell: any;

	setTapType(tapType: 0 | 1 | 2 | 3): void {
		this.tapType = { '无障碍': 0, 'RootAutomator': 1, 'Shell': 2, 'Root': 3 }[tapType]; // 0 无障碍， 1 RootAutomator， 2 Shell， 3 普通Root
		console.log(`修改automator：${tapType}：${this.tapType}`);
		const self = this;
		if (this.tapType == 0) {
			// TODO
		} else if (this.tapType == 1) {
			const thd = threads.start(function () {
				// @ts-expect-error d.ts文件问题
				if (!self.RA) self.RA = new RootAutomator();
			});
			// 5秒无响应直接杀死
			setTimeout(() => {
				if (thd.isAlive()) {
					thd.interrupt();
					toastLog('RootAutomator初始化失败，可能是环境不支持');
				}
			}, 5000)
		} else if (this.tapType == 2) {
			// @ts-expect-error d.ts文件问题
			if (!this.shell) this.shell = new Shell(true);
		} else if (this.tapType == 3) {
			// none
		}
	}

	press(x: number, y: number, delay: number): void {
		if (this.dirctionReverse) {
			const dm = context.getResources().getDisplayMetrics();
			const wm = context.getSystemService(context.WINDOW_SERVICE);
			wm.getDefaultDisplay().getRealMetrics(dm);
			const tmpx = dm.heightPixels - y;
			y = x;
			x = tmpx;
		}
		if (this.tapType == 0) {
			press(x, y, delay);
		} else if (this.tapType == 1) {
			this.RA.press(x, y, delay);
		} else if (this.tapType == 2) {
			this.shell.execAndWaitFor('input swipe ' + x + ' ' + y + ' ' + x + ' ' + y + ' ' + delay);
		} else if (this.tapType == 3) {
			Tap(x, y); // 忽略点击时长, 官方不支持
		}
	}

	swipe(x0: number, y0: number, x1: number, y1: number, delay: number): void {
		if (this.dirctionReverse) {
			const dm = context.getResources().getDisplayMetrics();
			const wm = context.getSystemService(context.WINDOW_SERVICE);
			wm.getDefaultDisplay().getRealMetrics(dm);
			let tmpx = dm.heightPixels - y0;
			y0 = x0;
			x0 = tmpx;
			tmpx = dm.heightPixels - y1;
			y1 = x1;
			x1 = tmpx;
		}

		if (this.tapType == 0) {
			// this.bezierSwiper.swipe(x0, y0, x1, y1, delay);
			swipe(x0, y0, x1, y1, delay);
		} else if (this.tapType == 1) {
			// this.bezierSwiper.swipe(x0, y0, x1, y1, delay);
			this.RA.swipe(x0, y0, x1, y1, delay);
		} else if (this.tapType == 2) {
			this.shell.execAndWaitFor('input swipe ' + x0 + ' ' + y0 + ' ' + x1 + ' ' + y1 + ' ' + delay);
		} else if (this.tapType == 3) {
			Swipe(x0, y0, x1, y1, delay);
		}
	}

	gesture = gesture;

	// helperBridge过来的
	regionBezierSwipe(transedOperS: Array<number>, transedOperE: Array<number>, duration: Array<number>, baseSleep: number, randomSleep: number, _type?: number): void {
		const time = random(duration[0], duration[1])
		// swipe(
		//     random(transedOperS[0], transedOperS[2]), // x1
		//     random(transedOperS[1], transedOperS[3]), // y1
		//     random(transedOperE[0], transedOperE[2]), // x2
		//     random(transedOperE[1], transedOperE[3]), // y2
		//     time // duration
		// );
		// sleep(time + random(0, randomSleep))

		const x1 = random(transedOperS[0], transedOperS[2]);
		const y1 = random(transedOperS[1], transedOperS[3]);
		const x2 = random(transedOperE[0], transedOperE[2]);
		const y2 = random(transedOperE[1], transedOperE[3]);
		if (this.tapType != 0) {
			this.swipe(x1, y1, x2, y2, time);
			sleep(time + 200 + random(0, randomSleep));
			return;
		}
		// const xMax = Math.max(x1, x2);
		// const xMin = Math.min(x1, x2);
		// const yMax = Math.max(y1, y2);
		// const yMin = Math.min(y1, y2);
		// const screenWidth = getWidthPixels();
		// let c1, c2;
		// TODO 开始和结束的附近的点需要更密集
		// if (!type) {
		// 	c1 = [
		// 		random(xMin, xMax),
		// 		random(yMin, yMax),
		// 	];
		// 	c2 = [
		// 		random(xMin, xMax),
		// 		random(yMin, yMax),
		// 	];
		// } else {
		// 	// TODO
		// }

		const [c1, c2] = generateRandomPoints([x1, y1], [x2, y2]);
		const curve = new Bezier(x1, y1, ...c1, ...c2, x2, y2);
		const pointsOrigin = curve.getLUT(200).map(p => [Math.floor(p['x']), Math.floor(p['y'])]);

		// const pointsOrigin = bezierCreate(x1, y1, p1[0], p1[1], p2[0], p2[1], x2, y2);
		// console.log(pointsOrigin);

		let toRetain = [0, 1, 2, 3, 4, 5, 191, 192, 193, 194, 195, 196, 197, 198, 199];
		for (let i = 190, stepLen = 1; i > 5; i -= stepLen, stepLen++) {
			toRetain.push(i);
		}
		toRetain = toRetain.sort((a, b) => Math.floor(a) - Math.floor(b));
		const points = [];
		toRetain.forEach(item => {
			points.push(pointsOrigin[item]);
		});
		// 小于安卓8用普通gesture
		if (device.sdkInt < 26) {
			this.gesture(time, ...points);
			sleep(baseSleep + time + random(0, randomSleep));
			return
		}

		// 大于安卓8，用优化版gesture，可以精控到每个点之间的时间
		const avgItemTime = Math.ceil(time / points.length);
		const strokes = [];
		let lastPoint = points[0];
		let currentStroke = null;
		for (let i = 1; i < points.length - 1; i++) {
			const currentPoint = points[i];
			const path = new android.graphics.Path();
			path.moveTo(lastPoint[0], lastPoint[1]);
			path.lineTo(currentPoint[0], currentPoint[1]);
			if (!currentStroke) {
				currentStroke = new android.accessibilityservice.GestureDescription.StrokeDescription(path, 0, avgItemTime, true);
			} else {
				currentStroke = currentStroke.continueStroke(path, 0, avgItemTime, true);
			}
			strokes.push(currentStroke);
			lastPoint = currentPoint;
		}
		const path = new android.graphics.Path();
		path.moveTo(lastPoint[0], lastPoint[1]);
		path.lineTo(points[points.length - 1][0], points[points.length - 1][1]);
		currentStroke = currentStroke.continueStroke(path, 0, avgItemTime, false);
		strokes.push(currentStroke);
		for (const stroke of strokes) {
			autojsGestures([stroke]);
		}
		sleep(baseSleep + random(0, randomSleep));
	}

	constructor(tapType: number, dirctionReverse?: boolean) {
		const self = this;
		this.tapType = { '无障碍': 0, 'RootAutomator': 1, 'Shell': 2, 'Root': 3 }[tapType]; // 0 无障碍， 1 RootAutomator， 2 Shell， 3 普通Root
		console.log(`初始化automator：${tapType}`);
		this.dirctionReverse = dirctionReverse;
		if (this.tapType == 0) {
			// TODO
		} else if (this.tapType == 1) {
			const thd = threads.start(function () {
				// @ts-expect-error d.ts文件问题
				self.RA = new RootAutomator();
			});
			// 5秒无响应直接杀死
			setTimeout(() => {
				if (thd.isAlive()) {
					thd.interrupt();
					toastLog('RootAutomator初始化失败，可能是环境不支持');
				}
			}, 5000)
		} else if (this.tapType == 2) {
			this.shell = myShell;
		} else if (this.tapType == 3) {
			// none
		}
	}
}

export default MyAutomator;




// function bezierCreate(x1, y1, x2, y2, x3, y3, x4, y4) {
// 	// 构建参数
// 	const h = 0;
// 	const cp = [
// 		{ x: x1, y: y1 + h },
// 		{ x: x2, y: y2 + h },
// 		{ x: x3, y: y3 + h },
// 		{ x: x4, y: y4 + h },
// 	];
// 	const numberOfPoints = 200;
// 	const curve = [];
// 	const dt = 1.0 / (numberOfPoints - 1);

// 	// 计算轨迹
// 	for (let i = 0; i < numberOfPoints; i++) {
// 		// const ax, bx, cx;
// 		// const ay, by, cy;
// 		// const tSquared, tCubed;
// 		// const result_x, result_y;

// 		const cx = 3.0 * (cp[1].x - cp[0].x);
// 		const bx = 3.0 * (cp[2].x - cp[1].x) - cx;
// 		const ax = cp[3].x - cp[0].x - cx - bx;
// 		const cy = 3.0 * (cp[1].y - cp[0].y);
// 		const by = 3.0 * (cp[2].y - cp[1].y) - cy;
// 		const ay = cp[3].y - cp[0].y - cy - by;

// 		const t = dt * i;
// 		const tSquared = t * t;
// 		const tCubed = tSquared * t;
// 		const result_x = ax * tCubed + bx * tSquared + cx * t + cp[0].x;
// 		const result_y = ay * tCubed + by * tSquared + cy * t + cp[0].y;
// 		curve[i] = {
// 			x: result_x,
// 			y: result_y,
// 		};
// 	}

// 	// 轨迹转路数组
// 	const array = [];
// 	for (let i = 0; i < curve.length; i++) {
// 		let xx, yy;
// 		try {
// 			const j = i < 100 ? i : 199 - i;
// 			xx = Math.floor(curve[j].x);
// 			yy = Math.floor(Math.abs(100 - curve[j].y));
// 		} catch (e) {
// 			break;
// 		}
// 		array.push([xx, yy]);
// 	}

// 	return array;
// }

function getRandomPoint(q1, q2, tMin, tMax) {
	// 计算从 q1 到 q2 的向量
	const vector = [q2[0] - q1[0], q2[1] - q1[1]];

	// 生成一个随机的 t 值，确保点在 q1 和 q2 的线段内
	const t = Math.random() * (tMax - tMin) + tMin;

	// 计算随机点的坐标
	const px = q1[0] + t * vector[0];
	const py = q1[1] + t * vector[1];

	// 生成一个随机的偏移量，确保点不在连线上
	const offset = Math.random() * 0.4 - 0.2;

	// 计算垂直向量
	const perpendicularVector = [-vector[1], vector[0]];

	// 应用偏移量
	const finalPx = px + offset * perpendicularVector[0];
	const finalPy = py + offset * perpendicularVector[1];

	return [finalPx, finalPy];
}

// function isOnSameSide(p1, p2, q1, q2) {
// 	// 计算向量 q1q2
// 	const q1q2 = [q2[0] - q1[0], q2[1] - q1[1]];

// 	// 计算向量 q1p1 和 q1p2
// 	const q1p1 = [p1[0] - q1[0], p1[1] - q1[1]];
// 	const q1p2 = [p2[0] - q1[0], p2[1] - q1[1]];

// 	// 计算叉积
// 	const crossProduct1 = q1q2[0] * q1p1[1] - q1q2[1] * q1p1[0];
// 	const crossProduct2 = q1q2[0] * q1p2[1] - q1q2[1] * q1p2[0];

// 	// 判断叉积是否同号
// 	return crossProduct1 * crossProduct2 > 0;
// }

function generateRandomPoints(q1, q2) {
	// let p1, p2;
	// let attempts = 0;
	// do {
	const p1 = getRandomPoint(q1, q2, 0.0005, 0.3); // p1 更靠近 q1
	const p2 = getRandomPoint(q1, q2, 0.7, 0.9995); // p2 更靠近 q2
	// attempts++;
	// if (attempts > 1000) {
	//     console.error("Too many attempts to generate points. Possible issue with logic.");
	//     break;
	// }
	// } while (!isOnSameSide(p1, p2, q1, q2));

	return [p1, p2];
}

/**
 * copy from 抠脚本人：进阶手势录制，变速曲线滑动
 * @param strokes [x, y, duration][]
 */

function autojsGestures(strokes) {
	const strokeDescription = java.lang.reflect.Array.newInstance(android.accessibilityservice.GestureDescription.StrokeDescription, strokes.length);
	for (let i = 0; i < strokes.length; i++) {
		strokeDescription[i] = strokes[i];
	}
	return runtime.automator.gestures.bind(runtime.automator)(strokeDescription);
}