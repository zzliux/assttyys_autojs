

runtime.images.initOpenCvIfNeeded();
importClass('org.opencv.imgproc.Imgproc');
importClass('org.opencv.imgcodecs.Imgcodecs');
importClass('org.opencv.core.Point');
importClass('org.opencv.core.Scalar');

const ncnnPath = '/sdcard/assttyys/ncnn';

function getCurrAbi() {
	const abis = android.os.Build.SUPPORTED_ABIS;
	if (abis.indexOf('x86') > -1) {
		return 'x86';
	} else if (abis.indexOf('x86_64') > -1) {
		return 'x86_64';
	} else if (abis.indexOf('arm64-v8a') > -1) {
		return 'arm64-v8a';
	} else if (abis.indexOf('armeabi-v7a') > -1) {
		return 'armeabi-v7a';
	}
}

const _s = {
	cpugpu: 0,
	labels: ['buff-DengLong', 'buff-DongJie', 'buff-DouZiHuoQu', 'buff-GaiLvUP', 'buff-GuiWang', 'buff-HaoYouGaiLvUP', 'buff-JiaSuSaDou', 'buff-JianSu', 'g-BiAnHuaGua', 'g-CiMuGua', 'g-DaTianGouGua', 'g-HuaNiaoJuanGua', 'g-HuangChuanGua', 'g-HuangGua', 'g-HuiYeJiGua', 'g-JiuTunGua', 'g-QingXingDengGua', 'g-XiaoLuNanGua', 'g-XueTongZiGua', 'g-YanMoGua', 'g-YaoDaoJiGua', 'g-YiMuLianGua', 'g-YuZaoQianGua', 'g-YuZhuanJinGua', 'n-ChiShe', 'n-DaoMuXiaoGui', 'n-DengLongGui', 'n-JiShengHun', 'n-TangZhiSanYao', 'n-TiDengXiaoSeng', 'n-TianXieGuiChi', 'n-TianXieGuiHuang', 'n-TianXieGuiLv', 'n-TianXieGuiQing', 'n-TuBi', 'n-ZhouShen', 'r-BingYong', 'r-ChongShi', 'r-ChouShiZhiNv', 'r-DuYanXiaoSeng', 'r-EGui', 'r-GouChang', 'r-GuLongHuo', 'r-GuanHu', 'r-HeTong', 'r-HuDieJing', 'r-JiaoTu', 'r-JiuMingMao', 'r-Jue', 'r-LiMao', 'r-LiYuJing', 'r-QingWaCiQi', 'r-SanWeiHu', 'r-ShanTong', 'r-ShanTu', 'r-ShiFaGui', 'r-ShouWu', 'r-TiaoTiaoDiDi', 'r-TiaoTiaoMeiMei', 'r-TieShu', 'r-TongNan', 'r-TongNv', 'r-WuGuShi', 'r-WuShiZhiLing', 'r-XiaoXiuZhiShou', 'r-YaTianGou', 'r-YingCao', 'r-YingE', 'r-YuNv', 'r-ZuoFuTongZi', 'sp-ChanBingXueNv', 'sp-ChiYingYaoDaoJi', 'sp-ChuLingShanFeng', 'sp-DaYeMoTianYanMo', 'sp-FangYuanYuanJieShen', 'sp-FuGuQingJi', 'sp-FuShiQingXingDeng', 'sp-GuiWangJiuTunTongZi', 'sp-HuiShiHuaNiaoJuan', 'sp-LianYuCiMuTongZi', 'sp-LiuGuangZhuiYueShen', 'sp-MengXunShanTu', 'sp-ShaoYuDaTianGou', 'sp-XiuLuoGuiTongWan', 'sp-XunSenXiaoLuNan', 'sp-YuYuanBoRe', 'sr-BaiLang', 'sr-BaiMuGui', 'sr-BaiTongZi', 'sr-BoRe', 'sr-ChuanYuan', 'sr-DaoRenShen', 'sr-FenPoPo', 'sr-FengHuangHuo', 'sr-FengLi', 'sr-GuHuoNiao', 'sr-GuiNvHongYe', 'sr-GuiShiBai', 'sr-HaiFangZhu', 'sr-HeiTongZi', 'sr-HuaJing', 'sr-HuiBiShou', 'sr-HuiMingDeng', 'sr-JiaLouLuo', 'sr-JinYuJi', 'sr-JiuCiLiang', 'sr-KuiLeiShi', 'sr-LianYou', 'sr-LingHaiDie', 'sr-LuoXinFu', 'sr-MaoZhangGui', 'sr-MengPo', 'sr-PanGuan', 'sr-QingFangZhu', 'sr-QingJi', 'sr-QuanShen', 'sr-RuLianShi', 'sr-RuNeiQue', 'sr-ShiMengMo', 'sr-ShuWeng', 'sr-TaoHuaYao', 'sr-TianNiMei', 'sr-TiaoTiaoGeGe', 'sr-XiXueJi', 'sr-XiaZhongShaoNv', 'sr-XiaoSongWan', 'sr-XieJi', 'sr-XieNv', 'sr-XingXiongTongZi', 'sr-XueNv', 'sr-Xun', 'sr-YanYanLuo', 'sr-YaoHu', 'sr-YaoQinShi', 'sr-YeCha', 'sr-Yi', 'sr-YiFanMuMian', 'sr-YiJinZhenTian', 'sr-YiXiGong', 'sr-YingHuaYao', 'sr-YuJuChong', 'sr-Zhen', 'sr-ZhiWu', 'sr-ZhuiYueShen', 'ssr-BaQiDaShe', 'ssr-BaiZangZhu', 'ssr-BiAnHua', 'ssr-BuJianYue', 'ssr-BuZhiHuo', 'ssr-DaTianGou', 'ssr-DiShiTian', 'ssr-GuiTongWan', 'ssr-Huang', 'ssr-HuangChuanZhiZhu', 'ssr-HuiYeJi', 'ssr-KongQueMingWang', 'ssr-LingLuYuQian', 'ssr-MianLingQi', 'ssr-ShanFeng', 'ssr-ShiLing', 'ssr-XuZuoZhiNan', 'ssr-XueTongZi', 'ssr-XunXiangXing', 'ssr-YanMo', 'ssr-YiMuLian', 'ssr-YiXieNaMei', 'ssr-YuZaoQian', 'ssr-YuanJieShen', 'ssr-YueDu', 'ssr-YunWaiJing', 'status-DongJie', 'status-GaiLvUP', 'status-HaoYouGaiLvUP', 'status-JiaSuSaDou', 'status-JianSu'],

	yolov5: function (model, target_size) {
		const ncnnParam = ncnnPath + '/model/' + model + '.param';
		const ncnnBin = ncnnPath + '/model/' + model + '.bin';
		const dexPath = ncnnPath + '/dex/mengxin_yolov8ncnn.dex';
		const soDir = ncnnPath + '/lib/' + getCurrAbi() + '/';
		const dcl = _s.getDexClassLoader(dexPath, soDir);
		const yolo = dcl.loadClass('com.mengxin.ncnn.Yolov8Ncnn').newInstance();
		yolo.yolov5(ncnnParam, ncnnBin, target_size, _s.cpugpu);
		return yolo;
	},
	// yolov8: function (model, target_size) {
	// 	const ncnnParam = ncnnPath + '/model/' + model + '.param';
	// 	const ncnnBin = ncnnPath + '/model/' + model + '.bin';
	// 	const dexPath = ncnnPath + '/dex/mengxin_yolov8ncnn.dex';
	// 	const soDir = ncnnPath + '/lib/' + getCurrAbi() + '/';
	// 	const dcl = _s.getDexClassLoader(dexPath, soDir);
	// 	const yolo = dcl.loadClass('com.mengxin.ncnn.Yolov8Ncnn').newInstance();
	// 	yolo.yolov8(ncnnParam, ncnnBin, target_size, _s.cpugpu);
	// 	return yolo;
	// },
	getDexClassLoader: function (dexPath, soDir) {
		if (this.dcl != null) {
			return this.dcl;
		}
		const dirDir = context.getDir('dex', android.app.Activity.MODE_PRIVATE).getAbsolutePath(); //  /data/user/0/org.autojs.autojspro/app_dex
		const jniDir = context.getDir('libs', android.app.Activity.MODE_PRIVATE); //  /data/user/0/org.autojs.autojspro/app_libs
		files.removeDir(jniDir);

		const newjniDir = jniDir + '/' + (new Date().getTime()) + '/'; // 转时间戳
		files.createWithDirs(newjniDir); // 创建文件夹

		const soList = files.listDir(soDir, function (f) { // 遍历目录的so文件 /sdcard/脚本/ncnn//lib/arm64-v8a
			return f.endsWith('.so');
		});

		for (let i = 0; i < soList.length; i++) {
			const f1 = new java.io.File(soDir, soList[i]).getAbsolutePath(); //  /sdcard/脚本/ncnn/lib/arm64-v8a/libmx.so
			const f2 = new java.io.File(newjniDir, soList[i]).getAbsolutePath(); //  /data/user/0/org.autojs.autojspro/app_libs/1695914766343/libmx.so
			files.copy(f1, f2);
		}
		// @ts-expect-error 不认识Packages
		const dcl = new Packages.dalvik.system.DexClassLoader(dexPath, dirDir, newjniDir, java.lang.ClassLoader.getSystemClassLoader());
		this.dcl = dcl;
		return this.dcl;
	},
	// drawAndSave: function (bbox, img) {
	//     //const mat = Imgcodecs.imread(imgPath);
	//     const mat = img.mat;
	//     Imgproc.cvtColor(mat, mat, Imgproc.COLOR_BGR2RGB);
	//     for (const i = 0; i < bbox.length; i++) {
	//         const box = bbox[i];
	//         const x1 = box[0];
	//         const y1 = box[1];
	//         const x2 = box[2];
	//         const y2 = box[3];
	//         const prob = box[4];
	//         const label = box[5];
	//         Imgproc.rectangle(mat, Point(x1, y1), Point(x2, y2), Scalar(255, 255, 0));
	//     }

	//     Imgcodecs.imwrite('/storage/emulated/0/assttyys/ncnn/yolo.jpg', mat);
	// }
}

export default _s;
