import { getWidthPixels, getHeightPixels } from '@auto.pro/core';
import helperBridge from '@/system/helperBridge';

// importClass(android.graphics.Color);
// importPackage(android.content);

export function requestMyScreenCapture (callback) {
    requestScreenCaptureAsync(getWidthPixels() < getHeightPixels()).then(function(success) {
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

export function myToast (str) {
    ui.run(() => _toast(str));
    console.log(str);
}

function parsePMFlags(options, def) {
    if(!options) {
        return def;
    }
    function parseFlags(type, options) {
        let flags = 0;
        let flagStrings = options[type];
        if(!flagStrings) {
            return flags;
        }
        if(!Array.isArray(flagStrings)) {
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