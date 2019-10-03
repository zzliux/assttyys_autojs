"ui";

importClass(android.content.Intent);


threads.start(function () {
    //请求截图权限
    if (!requestScreenCapture(true)) {
        toast("请求截图失败");
        exit();
    }
});

var mainLayout = require('./mainLayout');
var zzUtils = require('./zz_modules/zzUtils');

var assttyys = {
    
    floatyThread: null,
    funcList: [],
    ass: storages.create('assttyys'),

    init: function () {
        ui.layout(mainLayout);
        this.initUI();
        this.bindEvents();
        this.initData();
    },


    initUI: function () {
        var that = this;

        //创建选项菜单(右上角)
        ui.emitter.on("create_options_menu", menu=>{
            menu.add("设置");
            menu.add("重置配置");
            menu.add("关于");
        });
        
        activity.setSupportActionBar(ui.toolbar);

        //设置滑动页面的标题
        ui.viewpager.setTitles(["功能配置", "调试配置"]);
        //让滑动页面和标签栏联动
        ui.tabs.setupWithViewPager(ui.viewpager);

        //让工具栏左上角可以打开侧拉菜单
        ui.toolbar.setupWithDrawer(ui.drawer);

        ui.menu.setDataSource([
            {
                title: "退出",
                icon: "@drawable/ic_exit_to_app_black_48dp"
            }
        ]);
    },

    bindEvents: function () {
        var that = this;

        //监听选项菜单点击
        ui.emitter.on("options_item_selected", (e, item)=>{
            switch(item.getTitle()){
                case "设置":
                    alert("设置", "还没有设置");
                    break;
                case "关于":
                    alert("关于", "还没有关于");
                    break;
                case "重置配置":
                    that.ass.put('funcList', []);
                    ui.finish();
                    break;
            }
            e.consumed = true;
        });

        // 点击退出
        ui.menu.on("item_click", item => {
            switch (item.title) {
                case "退出":
                    ui.finish();
                    break;
            }
        });

        ui.funcList.on('item_bind', function (itemView, itemHolder) {
            itemView.listUp.on('click', function () {
                var pos = itemHolder.getPosition();
                if (pos > 0) {
                    // 上移
                    var t = that.funcList[pos];
                    that.funcList[pos] = that.funcList[pos - 1];
                    that.funcList[pos - 1]  = t;
                }
            })
            itemView.listDown.on('click', function () {
                var pos = itemHolder.getPosition();
                if (pos + 1 < that.funcList.length) {
                    // 下移
                    var t = that.funcList[pos];
                    that.funcList[pos] = that.funcList[pos + 1];
                    that.funcList[pos + 1]  = t;
                }
            })
            itemView.checkEnable.on('check', function (checked) {
                let item = itemHolder.item;
                item.enable = checked;
            });
        });

        ui.showFloaty.on('click', function () {
            that.ass.put('funcList', that.funcList);

            if (null === that.floatyThread) {
                that.floatyThread = threads.start(function () {
                    var dqFloaty = require('./zz_modules/dqFloaty');
                    dqFloaty.render();
                });
            }
            
            var i = app.intent({
                action: Intent.ACTION_MAIN,
                category: Intent.CATEGORY_HOME
            });
            context.startActivity(i);
            
        });
        
        ui.autoService.on("check", function(checked) {
            // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
            if(checked && auto.service == null) {
                app.startActivity({
                    action: "android.settings.ACCESSIBILITY_SETTINGS"
                });
            }
            if(!checked && auto.service != null){
                auto.service.disableSelf();
            }
        });

        // 当用户回到本界面时，resume事件会被触发
        ui.emitter.on("resume", function() {
            // 此时根据无障碍服务的开启情况，同步开关的状态
            ui.autoService.checked = auto.service != null;
        });
        
        // 点击设置
        events.broadcast.on('DQFLOATY_SETTING_CLICK', function () {
            var i = new android.content.Intent(context, activity.class);
            context.startActivity(i);
        });
    },

    initData: function () {
        var that = this;
        
        var funcConfig = require('./funcConfig');
        this.funcList = this.ass.get('funcList') || [];
        // 已配置和所有配置的合并一下，使新开发的功能不做别的干预也能出现在配置列表
        for (let i = 1, iLen = funcConfig.length; i < iLen; i++) {
            var flag = true;
            for (let j = 0, jLen = this.funcList.length; j < jLen; j++) {
                if (funcConfig[i].id == this.funcList[j].funcId) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                this.funcList.push({
                    funcId: funcConfig[i].id,
                    funcName: funcConfig[i].name,
                    enable: false
                });
            }
        }
        ui.funcList.setDataSource(this.funcList);
    }
};

assttyys.init();


setInterval(function () {
    // 保活？
}, 1000);
