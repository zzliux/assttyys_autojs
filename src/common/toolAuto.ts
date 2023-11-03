import { IScheme } from '@/interface/IScheme';
import { IhelperBridge } from '@/system/helperBridge';
import type { Script } from '@/system/script';
import script from '@/system/script';

import { storeCommon } from '@/system/store';
import { getWidthPixels, getHeightPixels } from '@auto.pro/core';

// importClass(android.graphics.Color);
// importPackage(android.content);

export function requestMyScreenCapture(callback: Function, helperBridge: IhelperBridge) {
	if (device.sdkInt >= 29 && auto.service) {
		// 安卓10以上，有无障碍服务，通过无障碍服务把申请权限点了
		threads.start(function () {
			let cnt = 0;
			while (cnt++ < 10) {
				const obj = text('立即开始').findOnce() || desc('立即开始').findOnce();
				if (obj) {
					obj.click();
					myToast('已自动允许截图权限');
					break;
				}
				sleep(500);
			}
		});
	}
	// @ts-expect-error d.ts文件问题
	requestScreenCaptureAsync(getWidthPixels() < getHeightPixels()).then(function (success: boolean) {
		if (success) {
			helperBridge.init();
			script.initMultiDetectColors(); // 多点比色初始化要在helperbridge后才能进行
		}
		callback(success);
	});
}

/**
 * TODO，增加参数：{
 *    gravity: 对齐方向
 *    x, y:  两个坐标轴方向的相对距离
 *    timout: 多久后消失
 * }
 * @param {string} str
 */
function _toast(str: string) {
	const toast = android.widget.Toast.makeText(context.getApplicationContext(), str.toString(), android.widget.Toast.LENGTH_LONG);
	// let layout = toast.getView();
	// 设置景
	// layout.setBackgroundColor(android.graphics.Color.parseColor("#000000"))
	// layout.setBackgroundResource(context.getResources().getIdentifier("null", "id", context.getPackageName()));
	// let tv = layout.getChildAt(0);
	// 设置字体大小
	// tv.setTextSize(18);
	// let gradientDrawable = new android.graphics.drawable.GradientDrawable();
	// gradientDrawable.setColor(android.graphics.Color.parseColor("#ffffff"));//背景
	// gradientDrawable.setCornerRadius(10) //设置圆角
	// tv.setBackground(gradientDrawable);
	// 设置字体颜色
	// tv.setTextColor(android.graphics.Color.parseColor("#64feda"));//字体颜色
	// 显示的位置
	toast.setGravity(android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, 0);
	toast.show();
	setTimeout(function () {
		toast.cancel();
	}, 1000)
}

/**
 * @description 消息提示
 * @param {string}str
 */
export function myToast(str: string): void {
	ui.run(() => _toast(str));
	console.log(str);
}

function parsePMFlags(options, def) {
	if (!options) {
		return def;
	}

	function parseFlags(type, options) {
		let flags = 0;
		const flagStrings = options[type];
		if (!flagStrings) {
			return flags;
		}
		if (!Array.isArray(flagStrings)) {
			throw new TypeError();
		}
		flagStrings.forEach(str => {
			// TODO 找到aj源码里面的PM是啥玩意儿
			// @ts-expect-error d.ts文件问题
			flags |= PM[(type + '_' + str).toUpperCase()];
		});
		return flags;
	}

	return def | parseFlags('get', options) | parseFlags('match', options);
}

export const getInstalledApps = function (options) {
	const flags = parsePMFlags(options, android.content.pm.PackageManager.GET_META_DATA);
	return toJsArray(context.packageManager.getInstalledApplications(flags)).map(appInfo => {
		return new com.stardust.autojs.core.pm.AppInfo(context, appInfo)
	});
}

export const getInstalledPackages = function (options?) {
	const flags = parsePMFlags(options, android.content.pm.PackageManager.GET_META_DATA);
	return toJsArray(context.packageManager.getInstalledPackages(flags)).map(pkgInfo => {
		pkgInfo.applicationInfo = new com.stardust.autojs.core.pm.AppInfo(context, pkgInfo.applicationInfo);
		return pkgInfo;
	});
}

export const getApkInfo = function (file, options) {
	const flags = parsePMFlags(options, android.content.pm.PackageManager.GET_META_DATA);
	return context.packageManager.getPackageArchiveInfo(files.path(file), flags);
}

export const toJsArray = function (iterable) {
	const iterator = iterable.iterator();
	const arr = [];
	while (iterator.hasNext()) {
		arr.push(iterator.next());
	}
	return arr;
};


/**
 *
 * @param {*} region 区域[x1, y1, x2, y2]
 * @param {*} pointBias 偏向坐标 [x, y]
 * @param {*} influence 影响力 [0, 1]之间
 * @returns
 */
export function getRegionBiasRnd(region, pointBias, influence) {
	const rnd1 = Math.random() * (region[2] - region[0]) + region[0];
	const rnd2 = Math.random() * (region[3] - region[1]) + region[1];
	const mix1 = Math.sqrt(Math.random() * influence);
	const mix2 = Math.sqrt(Math.abs(mix1 * mix1 - Math.pow(Math.random() * influence, 2)));
	if (region[2] - region[0] < region[3] - region[1]) {
		return [Math.floor(rnd1 * (1 - mix1) + pointBias[0] * mix1), Math.floor(rnd2 * (1 - mix2) + pointBias[1] * mix2)];
	} else {
		return [Math.floor(rnd1 * (1 - mix2) + pointBias[0] * mix2), Math.floor(rnd2 * (1 - mix1) + pointBias[1] * mix1)];
	}
}

/**
 * new bing生成的服从二维正态分布的函数，手动调了下根据influence与region生成方差
 * @param region
 * @param pointBias
 * @param influence
 * @returns
 */
export function getRegionBiasRnd2(region, pointBias, influence) {
	const [meanX, meanY] = pointBias;
	const sdX = (0.1 / influence * influence) * (region[2] - region[0]);
	const sdY = (0.1 / influence * influence) * (region[3] - region[1]);
	let u = 0,
		v = 0;
	while (u === 0) u = Math.random();
	while (v === 0) v = Math.random();
	let x = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
	let y = Math.sqrt(-2.0 * Math.log(u)) * Math.sin(2.0 * Math.PI * v);
	x = meanX + x * sdX;
	y = meanY + y * sdY;
	if (x < region[0] || x > region[2] || y < region[1] || y > region[3]) {
		return getRegionBiasRnd2(region, pointBias, influence * 2);
	}
	return [x, y];
}

/**
 * 根据str进行hash，返回值在lowerBound与upperBound之间
 * @param lowerBound 下限
 * @param upperBound 上限
 * @param str 被hash的字符串
 * @returns
 */
export function hash(lowerBound: number, upperBound: number, str: string): number {
	let hash = 0;
	if (str.length === 0) {
		return lowerBound;
	}
	for (let i = 0; i < str.length; i++) {
		const charCode = str.charCodeAt(i);
		hash = ((hash << 5) - hash) + charCode;
		hash = hash & hash; // Convert to 32bit integer
	}
	const range = upperBound - lowerBound + 1;
	return (hash & 0x7fffffff) % range + lowerBound;
}

/**
 * 根据Androidid 和点击区域 hash 出一个偏向点，偏向点不能过于接近start和end
 * @param {*} str
 * @param {*} start
 * @param {*} end
 * @returns
 */
export function strHashToNum(str, start, end) {
	const sStart = (end - start) / 4 + start;
	const sEnd = (start - end) / 4 + end;
	let sum = 0;
	const factor = 13;
	for (let i = 0; i < str.length; i++) {
		sum += str.charCodeAt(i) * factor;
	}
	return sum * Math.max((sum % factor), 1) % (sEnd - sStart - 1) + sStart;
}

/**
 * 使用osp推送qq
 * @param {*} userToken
 * @param {*} data
 */
export function ospPush(userToken: string, data: { type: string, data: string }[] | string) {
	return http.postJson('https://assttyys.zzliux.cn/api/osp/send', {
		// @ts-expect-error d.ts文件问题
		userToken,
		data
	});
}

/**
 * 发起oneBot推送
 * @param url
 * @param data
 */
export function oneBotPush(url: string, data: { type: string, data: Record<string, any> }[] | string) {
	return http.postJson(url, {
		// @ts-expect-error d.ts文件问题
		message: data
	});
}

/**
 * 发起gotify推送
 * @url https://gotify.net/docs/index
 * @param url
 * @param data
 */
export function gotifyPush(url: string, data: any) {
	return http.postJson(url, data);
}

export function pushplusPush(data: any) {
	return http.post('https://pushplus.plus/send', data)
}

/**
 * 发起消息推送
 * @param {Script} thisScript
 * @param options
 */
export function doPush(thisScript: Script, options: {
    text: string,
    before?: () => void,
    after?: () => void
}): void {
	const storeSettings = storeCommon.get('settings', {});
	if (storeSettings.push_type === '关闭推送') {
		console.log('推送已关闭，不执行推送');
		return;
	}
	if (storeSettings.push_type === 'oneBot' && !storeSettings.oneBot_url) {
		console.error('未配置oneBot_url');
		return;
	} else if (storeSettings.push_type === 'ospPush' && !storeSettings.osp_user_token) {
		console.error('未配置ospUserToken');
		return;
	} else if (storeSettings.push_type === 'Gotify' && !storeSettings.gotify_url) {
		console.error('未配置gotify_url');
		return;
	} else if (storeSettings.push_type === 'pushplus' && !storeSettings.pushplus_token) {
		console.error('未配置pushplus token');
	}
	try {
		// 停止前不更新截图
		// thisScript.keepScreen();
		// 根据不同推送方式调整图片压缩率
		let scale = 0.5;

		switch (storeSettings.push_type) {
		case 'pushplus':
			scale = 0.05;
			break;
		case 'Gotify':
			scale = 0.3;
			break;
		default:
			scale = 0.5;
		}
		const bmp = scaleBmp(thisScript.helperBridge.helper.GetBitmap(), scale);
		const baos = new java.io.ByteArrayOutputStream();
		bmp.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, baos);
		baos.flush();
		baos.close();
		bmp.recycle();

		const b64str = android.util.Base64.encodeToString(baos.toByteArray(), android.util.Base64.NO_WRAP);
		const data = [{
			type: 'text',
			data: storeSettings.msgPush_prefix
		}, {
			type: 'text',
			data: options && options.text || ''
		}, {
			type: 'image',
			data: b64str
		}];
		console.log('图片b64大小' + b64str.length);

		// myToast('脚本即将停止，正在上传数据');
		options && options.before && options.before();
		let res;
		// 上传
		console.log('push_type', storeSettings.push_type)
		if (storeSettings.push_type === 'oneBot') {
			const removeBase64Prefix = (str: string) => str.replace(new RegExp('data:image/\\S+;base64,'), '');
			const oneBotVersion = storeSettings.oneBot_version || '12';
			const message = oneBotVersion !== '12' ? data.map(item => {
				const { type, data } = item;
				return type === 'text' ? data : `[CQ:image,file=base64://${removeBase64Prefix(data)}]`
			}).join('') : data.map(item => {
				const { type, data } = item;
				return {
					type,
					data: {
						[type === 'text' ? 'text' : 'file_id']: type === 'text' ? data : `base64://${removeBase64Prefix(data)}`
					}
				}
			});
			res = oneBotPush(storeSettings.oneBot_url, message)
		} else if (storeSettings.push_type === 'ospPush') {
			res = ospPush(storeSettings.osp_user_token, data);
		} else if (storeSettings.push_type === 'Gotify') {
			res = gotifyPush(`${storeSettings.gotify_url}?token=${storeSettings.gotify_user_token}`, {
				title: storeSettings.msgPush_prefix,
				priority: 8,    // 消息等级 https://github.com/gotify/android
				extras: {
					'client::display': {
						contentType: 'text/markdown'    //  将message标记为markdown
					}
				},
				message: `${options.text}  \n  ![](data:image/png;base64,${b64str})`
			});
		} else if (storeSettings.push_type === 'pushplus') {
			res = pushplusPush({
				token: storeSettings.pushplus_token,
				title: `${storeSettings.msgPush_prefix} ASSTTYYS消息通知`,
				content: `<p>${options.text}</p><img src="data:image/png;base64,${b64str}" />`
			})
		}
		console.log(res.body.string());
		// myToast(`提交推送响应内容：${res.body.string()}`);
		myToast('推送成功!');
		options && options.after && options.after();
	} catch (e) {
		myToast(`提交推送发生了错误：${e}`);
		console.error($debug.getStackTrace(e));
	}
}

export function scaleBmp(bmp, scale: number) {
	const width = bmp.getWidth();
	const height = bmp.getHeight();
	const matrix = new android.graphics.Matrix();
	matrix.postScale(scale, scale);
	const newBmp = android.graphics.Bitmap.createBitmap(bmp, 0, 0, width, height, matrix, false);
	bmp.recycle();
	return newBmp;
}


export const mergeSchemeList = (savedSchemeList: IScheme[], innerSchemeList: IScheme[]) => {
	const toMerge = [];
	for (const innerScheme of innerSchemeList) {
		let flag = true;
		innerScheme.inner = true;
		for (const savedScheme of savedSchemeList) {
			if (savedScheme.schemeName === innerScheme.schemeName) {
				flag = false;
				break;
			}
		}
		if (flag) {
			toMerge.push(innerScheme);
		}
	}
	return [...savedSchemeList, ...toMerge];
}
