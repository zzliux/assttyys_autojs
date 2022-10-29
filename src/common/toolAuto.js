import { getWidthPixels, getHeightPixels } from '@auto.pro/core';
import helperBridge from '@/system/helperBridge';

// importClass(android.graphics.Color);
// importPackage(android.content);

export function requestMyScreenCapture(callback) {
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
 * @param {*} str 
 */
function _toast(str) {
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

export function myToast(str) {
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

export const getInstalledPackages = function (options) {
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
        return [parseInt(rnd1 * (1 - mix1) + pointBias[0] * mix1), parseInt(rnd2 * (1 - mix2) + pointBias[1] * mix2)];
    } else {
        return [parseInt(rnd1 * (1 - mix2) + pointBias[0] * mix2), parseInt(rnd2 * (1 - mix1) + pointBias[1] * mix1)];
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