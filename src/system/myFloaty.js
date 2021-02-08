import { createFloaty } from '@auto.pro/floaty';
import schemeDialog from '@/system/schemeDialog';
import script from '@/system/script';

importClass(android.content.Intent);

var myFloaty = {
    fy: null,
    init: function () {
        var self = this;
        let fy = createFloaty({
            logo: 'https://pro.autojs.org/images/logo.png',
            logoSize: 30,
            initX: -10,
            edge: -10,
            duration: 150,
            radius: 60,
            angle: 90,
            moveLimit: 15,
            items: [{
                id: 'home',
                color: '#0099FF',
                icon: 'ic_home_black_48dp',
                callback() {
                    var i = new Intent(activity, activity.class);
                    i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    i.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);
                    context.startActivity(i);
                    // app.startActivity(i);
                    // console.log(context.getPackageName());
                    // context.startActivity(context.getPackageManager().getLaunchIntentForPackage(context.getPackageName()).addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK));
                    // app.launchPackage(context.getPackageName())
                },
            }, {
                id: 'run_stop',
                color: ['#08BC92', '#DC1C2C'],
                icon: ['ic_play_arrow_black_48dp', 'ic_stop_black_48dp'],
                callback() {
                    if (fy.status === 'running') {
                        fy.stop();
                    } else if (fy.status === 'stoped') {
                        fy.start();
                    }
                }
            }, {
                id: 'setting',
                color: '#bfc1c0',
                icon: 'ic_format_indent_increase_black_48dp',
                callback() {
                    schemeDialog.show();
                }
            },]
        });
        
        fy.status = 'stoped';
        fy.start = function () {
            fy.status = 'running';
            script.run();
        }
        fy.stop = function () {
            fy.status = 'stoped';
            script.stop();
        }

        this.fy = fy;

        script.setRunCallback(function () {
            ui.post(function() {
                fy.FLOATY.img_logo.setColorFilter(colors.argb(255, 255, 153, 0));
                fy.status = 'running';
                fy.items[1].toggleIcon(1);
            });
        });

        script.setStopCallback(function () {
            ui.post(function() {
                fy.FLOATY.img_logo.setColorFilter(colors.argb(0, 255, 153, 0));
                fy.status = 'stoped';
                fy.items[1].toggleIcon(0);
            });
        });
    }
};

// console.log(fy.FLOATY.getWidth())
// 可以订阅悬浮窗的开关状态
// fy.isOpen$.subscribe(v => console.log('floaty is open?', v))

// 可以手动切换悬浮窗的按钮，仅当该按钮的icon为数组时生效，这里切换第二个按钮，它的索引为1
// fy.items[1].toggleIcon()
// 也可以设置切换到的图标ID
// fy.items[1].toggleIcon(1)

// setTimeout(() => { fy.close() }, 5000)


export default myFloaty