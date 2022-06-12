/*
 * @Author: zzliux
 * @Email: zzliux@outlook.com
 * @Date: 2021-08-16
 * @Version: Auto.Js Pro
 * @Description: \
 * 	QQ水排序自动解题，开发设备小米11，分辨率3200*1440，
 * 	参考：https://blog.csdn.net/nameofcsdn/article/details/117620445，
 * 		基于该文章最终代码调整，加入基于当前状态与上一步操作的评分机制（未充分测试，还有巨大优化空间），
 * 		优化end()后还剩一至两步的自动完成（基于评分机制）
 */

const fsPromise = require('fs/promises')

const { accessibility, takeScreenshot, press } = require('accessibility');
const { delay } = require('lang');
const { device } = require('device');
const { showToast } = require('toast');
const { Color } = require('color');

const _showToast = (msg) => {
	console.log(msg);
	showToast(msg);
}

async function main() {
	// 若进入游戏后有状态栏，修改该值为状态栏高度
	let prefixHeight = 0;


	await accessibility.enableService({ toast: true });
	await delay(1000);
	let t1 = new Date().getTime();

	// events.on('exit', () => {
	//     engines.execScriptFile('./QQ水排序.js')
	// });

	let pointss = [
		// 7瓶
		[
			// 上三
			[[328, 1066], [328, 1180], [322, 1314], [318, 1431]].reverse(),
			[[717, 1065], [724, 1187], [717, 1333], [708, 1440]].reverse(),
			[[1124, 1068], [1118, 1203], [1107, 1311], [1132, 1418]].reverse(),
			// 下四
			[[241, 1834], [243, 1953], [241, 2068], [233, 2194]].reverse(),
			[[562, 1826], [553, 1954], [556, 2068], [562, 2193]].reverse(),
			[[883, 1818], [874, 1950], [875, 2068], [877, 2181]].reverse(),
			[[1216, 1835], [1200, 1941], [1210, 2054], [1192, 2183]].reverse(),
		],

		// 9瓶
		[
			// 上四
			[[243, 1071], [244, 1178], [246, 1327], [235, 1426]].reverse(),
			[[567, 1062], [551, 1194], [567, 1311], [567, 1435]].reverse(),
			[[891, 1070], [877, 1183], [882, 1317], [877, 1431]].reverse(),
			[[1195, 1073], [1197, 1196], [1194, 1307], [1207, 1403]].reverse(),
			// 下五
			[[188, 1833], [183, 1952], [178, 2076], [186, 2188]].reverse(),
			[[443, 1817], [456, 1948], [454, 2070], [458, 2188]].reverse(),
			[[712, 1821], [717, 1952], [717, 2067], [718, 2197]].reverse(),
			[[984, 1827], [992, 1948], [988, 2065], [998, 2182]].reverse(),
			[[1256, 1817], [1255, 1950], [1254, 2081], [1258, 2186]].reverse(),
		],

		// 11瓶
		// 上五
		[
			[[185, 1021], [203, 1178], [186, 1305], [191, 1438]].reverse(),
			[[466, 1066], [450, 1186], [460, 1306], [450, 1445]].reverse(),
			[[720, 1060], [723, 1188], [716, 1308], [718, 1435]].reverse(),
			[[990, 1058], [988, 1181], [990, 1308], [991, 1433]].reverse(),
			[[1260, 1061], [1260, 1193], [1250, 1308], [1261, 1431]].reverse(),
			// 下六
			[[151, 1830], [145, 1946], [146, 2070], [150, 2188]].reverse(),
			[[371, 1818], [376, 1951], [378, 2068], [376, 2188]].reverse(),
			[[611, 1821], [610, 1960], [610, 2071], [606, 2186]].reverse(),
			[[833, 1815], [840, 1965], [831, 2061], [843, 2193]].reverse(),
			[[1075, 1825], [1070, 1946], [1068, 2068], [1061, 2193]].reverse(),
			[[1295, 1826], [1291, 1948], [1291, 2061], [1305, 2185]].reverse(),
		],

		// 14 瓶
		[
			// 	 // 第一排，坐标上往下
			[[128, 1057], [133, 1191], [127, 1316], [122, 1432]].reverse(),
			[[334, 1060], [322, 1180], [339, 1318], [318, 1430]].reverse(),
			[[516, 1070], [517, 1196], [522, 1314], [517, 1429]].reverse(),
			[[717, 1062], [722, 1184], [718, 1300], [716, 1422]].reverse(),
			[[920, 1066], [916, 1182], [918, 1311], [920, 1435]].reverse(),
			[[1114, 1066], [1120, 1190], [1117, 1304], [1127, 1428]].reverse(),
			[[1320, 1070], [1321, 1181], [1322, 1304], [1319, 1431]].reverse(),
			// 第二排
			[[119, 1822], [122, 1946], [114, 2067], [115, 2197]].reverse(),
			[[318, 1812], [313, 1945], [317, 2070], [315, 2196]].reverse(),
			[[521, 1825], [514, 1950], [521, 2064], [522, 2190]].reverse(),
			[[720, 1828], [716, 1944], [717, 2066], [718, 2187]].reverse(),
			[[923, 1824], [921, 1946], [921, 2065], [920, 2188]].reverse(),
			[[1123, 1812], [1118, 1943], [1119, 2064], [1119, 2189]].reverse(),
			[[1321, 1823], [1321, 1942], [1318, 2062], [1318, 2186]].reverse(),
		]
	].reverse();


	// 计算坐标，开发分辨率3200*1440
	let devWidth = 1440;
	let devHeight = 3200;
	let centerHeight = devHeight / 2;
	let scale = device.screenWidth / devWidth;
	// 所有坐标都是居中对齐
	for (let points of pointss) {
		for (let point of points) {
			for (let poin of point) {
				poin[0] = parseInt(poin[0] * scale);
				poin[1] = parseInt(prefixHeight / 2 + (poin[1] - centerHeight) * scale + device.screenHeight / 2);
			}
		}
	}


	let NC, colorCnt, colorMapper, vm;

	let SIZE = 4; // 一个瓶子的体积
	let visit = {};
	let steps = [];
	let points = null;


	let img = null;
	img = await takeScreenshot();

	if (!img) {
		_showToast('截图出现异常');
		exit();
	}

	for (let curPoints of pointss) {
		NC = curPoints.length - 2; // 颜色种类个数
		colorCnt = 0;
		colorMapper = {};

		for (let i = 0; i < curPoints.length; i++) {
			for (let j = 0; j < curPoints[i].length; j++) {
				let color = img.pixel(curPoints[i][j][0], curPoints[i][j][1]);
				let flag = true;
				for (let key in colorMapper) {
					let color2 = new Color(parseInt(key));
					if (color.isSimilarTo(color2)) {
						flag = false;
						color = color2;
						break;
					}
				}
				curPoints[i][j][2] = color.value;
				if (!colorMapper[color.value]) {
					colorMapper[color.value] = {
						id: colorCnt++,
						cnt: 1
					};
				} else {
					colorMapper[color.value].cnt++;
				}
			}
		}

		let flag = true;
		let truth = [];
		for (let key in colorMapper) {
			if (colorMapper[key].cnt === SIZE) {
				truth.push(colorMapper[key].id);
			}
		}
		if (truth.length === curPoints.length - 2) {
			_showToast('识别难度成功，当前难度为：' + curPoints.length + '瓶' + NC + '色');
			points = curPoints;
			break;
		}
	}
	img.recycle();

	if (!points) {
		_showToast('识别难度失败');
		return;
	}

	console.log(points);

	vm = [];
	for (let point of points) {
		let vi = [];
		for (let poin of point) {
			if (colorMapper[poin[2]] && colorMapper[poin[2]].cnt === SIZE) {
				vi.push(colorMapper[poin[2]].id);
			}
		}
		vm.push(vi);
	}

	let ts = new Date().getTime();
	dfs(0);
	let te = new Date().getTime();
	_showToast('计算耗时' + (te - ts) + 'ms');


	let doingTarget = {};

	let newStepss = [];
	// 合并可合并操作
	let toPush = [];
	for (let i = 0; i < steps.length; i++) {
		let step = steps[i];
		let flag = true;
		for (let ele of toPush) {
			if (ele[0] === step[0]) {
				flag = false;
				break;
			}
			if (ele[0] === step[1]) {
				flag = false;
				break;
			}
		}
		if (flag) {
			toPush.push(step);
		} else {
			newStepss.push(toPush);
			toPush = [];
			i--;
		}
	}
	if (toPush.length) {
		newStepss.push(toPush);
		toPush = [];
	}

	let sl1 = 20;
	let sl2 = 50;
	_showToast('求解步数: ' + steps.length + "\n" + '简化步数: ' + newStepss.length);
	for (let newSteps of newStepss) {
		let doingInt = [];
		for (let newStep of newSteps) {
			let x1 = points[newStep[0]][1][0] + random(-10, 10);
			let y1 = points[newStep[0]][1][1] + random(-10, 10);
			let x2 = points[newStep[1]][1][0] + random(-10, 10);
			let y2 = points[newStep[1]][1][1] + random(-10, 10);
			if (doingInt.indexOf(newStep[1]) === -1) {
				doingInt.push(newStep[1]);
			}
			await press(x1, y1, sl1);
			await delay(sl2);
			await press(x2, y2, sl1);
			await delay(sl2);
		}
		await delay(sl2);
		for (let n of doingInt) {
			let x2 = points[n][1][0] + random(-10, 10);
			let y2 = points[n][1][1] + random(-10, 10);
			await press(x2, y2, sl1);
			await delay(sl2);
			await press(x2, y2, sl1);
			await delay(sl2);
		}
		await delay(500);
	}

	let t2 = new Date().getTime();
	_showToast('解题完成，总耗时' + ((t2 - t1) / 1000).toFixed(2) + '秒');

	// 是否非纯色
	function notOneCol(vi) {
		for (let i = vi.length - 1; i > 0; i--) {
			if (vi[i] !== vi[i - 1]) {
				return vi.length - i;
			}
		}
		return false;
	}

	// 是否纯色
	function oneCol(vi) {
		if (!notOneCol(vi)) {
			return vi.length;
		}
		return false;
	}

	function end() {
		for (let vi of vm) {
			if (notOneCol(vi) || (vi.length !== SIZE && vi.length !== 0)) return false;
		}
		return true;
	}

	// i能否倒给j
	// vm[i] 为 vi
	// vi 为这个瓶子从下向上的颜色 id
	function canPourNum(i, j) {
		if (i === j) return false;
		let si = vm[i].length,
			sj = vm[j].length;
		if (si === 0 || sj === SIZE) return false;
		if (sj === 0) { // 排除纯色元素倒入空试管的情况
			return notOneCol(vm[i]);
		}
		let ci = vm[i][si - 1],
			cj = vm[j][sj - 1];
		if (ci !== cj) return false;
		let num = 0;
		for (let k = si - 1; k >= 0; k--) {
			if (vm[i][k] === ci) num++;
			if (k !== 0 && vm[i][k] !== vm[i][k - 1]) break;
		}
		if (sj + num > SIZE) {
			return SIZE - sj || false;
			// return false
		}
		return num;
	}

	function topNum(i) {
		let vi = vm[i];
		if (vi.length === 0) return 0;
		let ret = 1;
		for (let i = vi.length - 2; i >= 0 && vi[i] === vi[i + 1]; i--) {
			ret++;
		}
		return ret;
	}

	// 返回倒了几个
	function pour(i, j) {
		let pourNum = canPourNum(i, j);
		let ret = pourNum;
		while (pourNum--) {
			let o = vm[i].pop();
			vm[j].push(o);
		}
		return ret;
	}

	// 按照数目回溯
	function pour_f(i, j, num) {
		while (num--) {
			let o = vm[i].pop();
			vm[j].push(o);
		}
	}

	function parseVm() {
		return JSON.stringify(vm);
	}

	// 自定义倒水评分规则
	function getSortedList(lastI, lastJ) {
		// 每个颜色分布在哪个瓶子的哪个深度，用于后面计分，平均深度越浅的分数越高
		// colorDeepSum[colorId] -> sumDeepNum
		let colorDeepSum = [];
		for (let vmId = 0; vmId < vm.length; vmId++) {
			let vi = vm[vmId];
			for (let i = vi.length - 1; i >= 0; i--) {
				if (i !== vi.length - 1 && vi[i] === vi[i + 1]) continue;
				let deep = vi.length - i;
				let p = colorDeepSum[vi[i]] || { sum: 0, cnt: 0 };
				p.sum += deep;
				p.cnt++;
				colorDeepSum[vi[i]] = p;
			}
		}
		let ret = [];
		for (let i = 0; i < vm.length; i++) {
			for (let j = 0; j < vm.length; j++) {
				let cpn = canPourNum(i, j);
				if (!cpn) continue;
				let ele = [i, j, 10]
				// 和上次目标相同加分
				if (j === lastJ) {
					ele[2] += 50;
				}

				// 和上次源不同加分
				if (i !== lastI && j !== lastI) {
					ele[2] += 50;
				}

				// 连续使用同一个往外倒减分
				if (i === j) {
					ele[2] -= 100;
				}

				// 根据当前瓶能倒出去的数量扣分，倒出去越多，扣分越多
				if (cpn) {
					// 倒出去后为空瓶，适当扣分
					let ocni = oneCol(vm[i]);
					if (ocni) {
						ele[2] -= 50;
					}

					// 倒出去倒不完，剪枝
					let tn = topNum(i);
					if (tn + vm[j].length > SIZE) {
						ele[2] -= 110000;
					}

					// 如果能倒满加10分
					let ocnj = oneCol(vm[j]);
					if (ocnj && ocnj + cpn === SIZE) {
						//	ele[2] += 10;
					}
					// 如果倒不满扣分
					// ele[2] -= cpn;
				}

				// 目标为空瓶减分，倒出去的越多减分越多
				if (vm[j].length === 0) {
					ele[2] -= (cpn) * 4;
				}

				// 当前能倒出去的颜色的平均深度，深度越浅，分数越高
				let colorId = vm[i][vm[i].length - 1];
				ele[2] += parseInt((SIZE - colorDeepSum[colorId].sum / colorDeepSum[colorId].cnt) * 20);

				// 当前为空瓶负, 倒不出去负
				if (vm[i].length === 0 || !cpn) {
					ele[2] = -99999;
				}
				ret.push(ele);
			}
		}
		ret.sort(function (a, b) {
			if (a[2] === b[2]) return random(-1, 1); // 增加随机性
			return b[2] - a[2];
		});
		return ret;
	}

	function dfs(deep, ii, jj) {
		let strVm = parseVm();
		if (visit[strVm]) return false;
		visit[strVm] = true;
		if (end() || deep > 60) {
			return true;
		}
		let lis = getSortedList(ii, jj);
		for (let li of lis) {
			// 评分为负数则不考虑
			if (li[2] < -10000) continue;
			let x = pour(li[0], li[1]);
			// console.log('状态: ' + JSON.stringify(vm));
			// console.log('尝试: ' + li[0] + ' -> ' + li[1] + ', 当前步数: ' + deep);
			if (dfs(deep + 1, li[0], li[1])) {
				steps.unshift([li[0], li[1], x])
				return true;
			}
			// console.log('回溯: ' + li[0] + ' -> ' + li[1] + ', 当前步数: ' + deep);
			pour_f(li[1], li[0], x)
		}
		return false;
	}

	function random(a, b) {
		return (Math.random() * 1000000) % (b + 1) + a
	}
}

main();