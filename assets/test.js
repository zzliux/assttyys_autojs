const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;


if (!requestScreenCapture(true)) {
    alert("请求截图权限失败");
    exit();
}

runtime.unloadDex("./lib/scriptlib.dex")
runtime.loadDex("./lib/scriptlib.dex")
importClass(com.scriptlib.AnchorGraphicHelper);

print("版本号: " + AnchorGraphicHelper.Version()); //静态方法

/**
 * 构造函数
 *
 * @param obj:       aj_runtime
 * @param devWidth:  开发分辨率_宽
 * @param devHeight: 开发分辨率_高
 * @param left:      运行设备布局 startX
 * @param top:       运行设备布局 startY
 * @param right      运行设备布局 endX
 * @param bottom:    运行设备布局 endY
*/
//public AnchorGraphicHelper(Object obj, int devWidth, int devHeight, int left, int top, int right, int bottom)
var helper = new AnchorGraphicHelper(runtime, 1280, 720, 0, 0, 2559, 1079);


print("获取截图数据到数组: " + helper.KeepScreen(true));

print("获取x,y in left: " + helper.GetPoint(103, 71, left));
print("获取x,y in center: " + helper.GetPoint(103, 71, center));
print("获取x,y in right: " + helper.GetPoint(103, 71, right));

print(helper.GetPixel(100, 100, left));//获取指定像素数据(int数组)
print(helper.GetPixel(100, 100, center));//获取指定像素数据(int数组)
print(helper.GetPixel(100, 100, right));//获取指定像素数据(int数组)