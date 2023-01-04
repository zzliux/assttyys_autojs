// require('@/system/FloatButton/FloatButton');
import FloatButton from '@/system/FloatButton/FloatButton';
import schemeDialog from '@/system/schemeDialog';
import script from '@/system/script';

/**
 * 悬浮按钮，对大柒的悬浮按钮进行封装
 */
export class MyFloaty {
    fb: any;
    runEventFlag: boolean = false;
    init() {
        if (this.fb) return;
        let self = this;
        this.fb = new FloatButton();
        this.fb.setMenuOpenAngle(180);
        this.fb.setAllButtonSize(30);
        this.fb.setMenuRadius(34);
        this.fb.setIcon('file://' + files.cwd() + '/assets/img/ay.png');
        this.fb.setColor('#FFFFFF');
        this.fb.setAutoCloseMenuTime(3000);
        this.fb.addItem('Home')
            //设置图标
            .setIcon('@drawable/ic_home_black_48dp')
            //图标着色
            .setTint('#FFFFFF')
            //背景颜色
            .setColor('#0099FF')
            //点击事件
            .onClick((view, name) => {
                self.runEventFlag = false;
                script.stop();
                var i = new android.content.Intent(activity, activity.class);
                i.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
                i.addFlags(android.content.Intent.FLAG_ACTIVITY_SINGLE_TOP);
                context.startActivity(i);
                return false;
            });



        let runStopItem = this.fb.addItem('RunStop');
        //启用复选框属性
        runStopItem.toCheckbox(mUtil => {
            //未选中样式
            mUtil.icon1('@drawable/ic_play_arrow_black_48dp').tint1('#FFFFFF').color1('#08BC92');
            //选中样式
            mUtil.icon2('@drawable/ic_stop_black_48dp').tint2('#FFFFFF').color2('#DC1C2C');
        })
            //设置属性为选中 第一种
            //.setChecked(true)
            .onClick((view, name, state) => {
                if (self.runEventFlag) {
                    self.runEventFlag = false;
                    return;
                }
                if (state) {
                    self.thisRun();
                } else {
                    self.thisStop();
                }
                self.runEventFlag = false;
                //返回 true:保持菜单开启 false:关闭菜单
                return false;
            });

        this.fb.addItem('SchemeListMenu')
            //设置图标
            .setIcon('@drawable/ic_format_indent_increase_black_48dp')
            //图标着色
            .setTint('#FFFFFF')
            //背景颜色
            .setColor('#bfc1c0')
            //点击事件
            .onClick((view, name) => {
                script.stop();
                schemeDialog.show(this);
                self.runEventFlag = false;
                return false;
            });

        this.fb.addItem('SchemeAutoRun')
            .setIcon('@drawable/ic_playlist_play_black_48dp')
            //图标着色
            .setTint('#FFFFFF')
            //背景颜色
            .setColor('#FF9933')
            //点击事件
            .onClick((view, name) => {
                script.stop();
                self.thisRun('autoRun');
                self.runEventFlag = false;
                return false;
            });

        this.fb.addItem('CapScreen')
            .setIcon('@drawable/ic_landscape_black_48dp')
            //图标着色
            .setTint('#FFFFFF')
            .setColor('#FF3300')
            .onClick((view, name) => {
                threads.start(function () {
                    sleep(600);
                    script.keepScreen(); // 更新图片
                    let bmp = script.helperBridge.helper.GetBitmap();
                    let img = com.stardust.autojs.core.image.ImageWrapper.ofBitmap(bmp);
                    let path = `/sdcard/assttyys/screenshot/${new Date().getTime()}.png`;
                    files.ensureDir(path);
                    img.saveTo(path);
                    img.recycle();
                    media.scanFile(path);
                    script.myToast(`截图已保存至${path}`);
                });
            });


        this.fb.setAllButtonPadding(6);
        this.fb.getViewUtil('logo').setPadding(0);
        this.fb.setColor('#00000000');
        this.fb.show();

        script.setRunCallback(function () {
            self.runEventFlag = true;
            setTimeout(() => {
                self.runEventFlag = false;
            }, 500);
            runStopItem.setChecked(true);
            // self.fb.setTint('#ff08bc92');
            ui.run(function () {
                // @ts-ignore
                self.fb.getView('logo').setColorFilter(colors.argb(255, 0x08, 0xbc, 0x92));
            });
        });

        script.setStopCallback(function () {
            self.runEventFlag = true;
            setTimeout(() => {
                self.runEventFlag = false;
            }, 500);
            runStopItem.setChecked(false);
            // self.fb.setTint('#00000000');
            ui.run(function () {
                // @ts-ignore
                self.fb.getView('logo').setColorFilter(colors.argb(0, 0, 0, 0));
            });
        });
    }

    thisRun(type?: string) {
        type = type || 'run';
        if (app.autojs.versionCode >= 8081200) {
            // @ts-ignore
            let capOpt = images.getScreenCaptureOptions();
            if (null == capOpt) {
                // 通过报错来切换图标状态
                script[type](this);
                toastLog('无截图权限');
            } else {
                script[type](this);
            }
        } else {
            script[type](this);
        }
    }

    thisStop() {
        script.stop();
    }
}

export default new MyFloaty();
