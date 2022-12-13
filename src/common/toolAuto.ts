import type { Script } from '@/system/script';

import { storeCommon } from '@/system/store';
import { getWidthPixels, getHeightPixels } from '@auto.pro/core';

// importClass(android.graphics.Color);
// importPackage(android.content);

export function requestMyScreenCapture(callback, helperBridge) {
    // @ts-ignore
    requestScreenCaptureAsync(getWidthPixels() < getHeightPixels()).then(function (success) {
        if (success) {
            helperBridge.init();
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
    let toast = android.widget.Toast.makeText(context.getApplicationContext(), str.toString(), android.widget.Toast.LENGTH_LONG);
    // let layout = toast.getView();
    //设置景
    // layout.setBackgroundColor(android.graphics.Color.parseColor("#000000"))
    // layout.setBackgroundResource(context.getResources().getIdentifier("null", "id", context.getPackageName()));
    // let tv = layout.getChildAt(0);
    //设置字体大小
    // tv.setTextSize(18);
    // let gradientDrawable = new android.graphics.drawable.GradientDrawable();
    // gradientDrawable.setColor(android.graphics.Color.parseColor("#ffffff"));//背景
    // gradientDrawable.setCornerRadius(10) //设置圆角
    // tv.setBackground(gradientDrawable);
    //设置字体颜色
    // tv.setTextColor(android.graphics.Color.parseColor("#64feda"));//字体颜色
    //显示的位置
    toast.setGravity(android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, 0);
    toast.show();
    setTimeout(function () { toast.cancel(); }, 1000)
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
        let flagStrings = options[type];
        if (!flagStrings) {
            return flags;
        }
        if (!Array.isArray(flagStrings)) {
            throw new TypeError();
        }
        flagStrings.forEach(str => {
            // TODO 找到aj源码里面的PM是啥玩意儿
            // @ts-ignore
            flags |= PM[(type + "_" + str).toUpperCase()];
        });
        return flags;
    }
    return def | parseFlags("get", options) | parseFlags("match", options);
}

export const getInstalledApps = function (options) {
    let flags = parsePMFlags(options, android.content.pm.PackageManager.GET_META_DATA);
    return toJsArray(context.packageManager.getInstalledApplications(flags)).map(appInfo => {
        return new com.stardust.autojs.core.pm.AppInfo(context, appInfo)
    });
}

export const getInstalledPackages = function (options?) {
    let flags = parsePMFlags(options, android.content.pm.PackageManager.GET_META_DATA);
    return toJsArray(context.packageManager.getInstalledPackages(flags)).map(pkgInfo => {
        pkgInfo.applicationInfo = new com.stardust.autojs.core.pm.AppInfo(context, pkgInfo.applicationInfo);
        return pkgInfo;
    });
}

export const getApkInfo = function (file, options) {
    let flags = parsePMFlags(options, android.content.pm.PackageManager.GET_META_DATA);
    return context.packageManager.getPackageArchiveInfo(files.path(file), flags);
}

export const toJsArray = function (iterable) {
    var iterator = iterable.iterator();
    var arr = [];
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
    let rnd1 = Math.random() * (region[2] - region[0]) + region[0];
    let rnd2 = Math.random() * (region[3] - region[1]) + region[1];
    let mix1 = Math.sqrt(Math.random() * influence);
    let mix2 = Math.sqrt(Math.abs(mix1 * mix1 - Math.pow(Math.random() * influence, 2)));
    if (region[2] - region[0] < region[3] - region[1]) {
        return [Math.floor(rnd1 * (1 - mix1) + pointBias[0] * mix1), Math.floor(rnd2 * (1 - mix2) + pointBias[1] * mix2)];
    } else {
        return [Math.floor(rnd1 * (1 - mix2) + pointBias[0] * mix2), Math.floor(rnd2 * (1 - mix1) + pointBias[1] * mix1)];
    }
}

/**
 * 根据Androidid 和点击区域 hash 出一个偏向点，偏向点不能过于接近start和end
 * @param {*} str 
 * @param {*} start 
 * @param {*} end 
 * @returns 
 */
export function strHashToNum(str, start, end) {
    let sStart = (end - start) / 4 + start;
    let sEnd = (start - end) / 4 + end;
    let sum = 0;
    let factor = 13;
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
export function ospPush (userToken, data) {
    return http.postJson('https://assttyys.zzliux.cn/api/osp/send', {
        // @ts-ignore
        userToken,
        data
    });
}

/**
 * 发起osp消息推送
 * @param {Script} thisScript 
 * @param options
 */
export function doOspPush (thisScript: Script, options: {
    text: string,
    before?: () => void,
    after?: () => void
}): void {
    let storeSettings = storeCommon.get('settings', {});
    if (storeSettings.use_osp) {
        if (!storeSettings.osp_user_token) {
            console.error('未配置ospUserToken');
            return;
        }
        try {
            thisScript.keepScreen();
            let bmp = scaleBmp(thisScript.helperBridge.helper.GetBitmap(), 0.5);
            let baos = new java.io.ByteArrayOutputStream();
            bmp.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, baos);
            baos.flush();
            baos.close();
            bmp.recycle();

            let b64str = android.util.Base64.encodeToString(baos.toByteArray(), android.util.Base64.NO_WRAP);
            let data = [{
                type: 'text',
                data: options && options.text || ''
            }, {
                type: 'image',
                data: b64str
            }];
            console.log('图片b64大小' + b64str.length);

            // myToast('脚本即将停止，正在上传数据');
            options && options.before && options.before();
            // 上传
            const res = ospPush(storeSettings.osp_user_token, data);
            // @ts-ignore
            myToast(`提交osp响应内容：${res.body.string()}`);
            options && options.after && options.after();
        } catch (e) {
            myToast(`提交osp发生了错误：${e}`);
            console.error($debug.getStackTrace(e));
        }
    }
}

export function scaleBmp(bmp, scale) {
    let width = bmp.getWidth();
    let height = bmp.getHeight();
    let matrix = new android.graphics.Matrix();
    matrix.postScale(scale, scale);
    let newBmp = android.graphics.Bitmap.createBitmap(bmp, 0, 0, width, height, matrix, false);
    bmp.recycle();
    return newBmp;
}



export const mergeSchemeList = (savedSchemeList, innerSchemeList) => {
    let toMerge = [];
    for (let innerScheme of innerSchemeList) {
        let flag = true;
        innerScheme.inner = true;
        for (let savedScheme of savedSchemeList) {
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
