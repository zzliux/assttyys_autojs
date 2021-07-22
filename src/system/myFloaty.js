require('@/system/FloatButton/FloatButton');
import schemeDialog from '@/system/schemeDialog';
import script from '@/system/script';




const myFloaty = {
    fb: null,
    runEventFlag: false,
    init: function () {
        if (this.fb) return;
        let self = this;
        this.fb = new FloatButton();
        this.fb.setMenuOpenAngle(120);
        this.fb.setMenuRadius(36);
        this.fb.setIcon('file://' + files.cwd() + '/assets/img/ay.png');
        this.fb.setColor('#FFFFFF');
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
                var i = new Intent(activity, activity.class);
                i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                i.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);
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
                schemeDialog.show(myFloaty);
                self.runEventFlag = false;
                return false;
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
                self.fb.getView('logo').setColorFilter(colors.argb(0, 0, 0, 0));
            });
        });

        this.thisRun = function() {
            if (app.autojs.versionCode >= 8081200) {
                let capOpt = images.getScreenCaptureOptions();
                if (null == capOpt) {
                    // 通过报错来切换图标状态
                    script.run();
                    toastLog('无截图权限');
                } else {
                    script.run();
                }
            } else {
                script.run();
            }
        }

        this.thisStop = function() {
            script.stop();
        }
        
    }
};


export default myFloaty;
