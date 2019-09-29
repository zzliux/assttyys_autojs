"ui";

importClass(android.content.Intent);


var mainLayout = require('./mainLayout');
var zzUtils = require('./zz_modules/zzUtils');

var assttyys = {
    
    floatyThread: null,

    init: function () {
        ui.layout(mainLayout);
        this.initUI();
    },


    initUI: function () {
        var that = this;

        //创建选项菜单(右上角)
        ui.emitter.on("create_options_menu", menu=>{
            menu.add("设置");
            menu.add("关于");
        });
        //监听选项菜单点击
        ui.emitter.on("options_item_selected", (e, item)=>{
            switch(item.getTitle()){
                case "设置":
                    alert("设置", "还没有设置");
                    break;
                case "关于":
                    alert("关于", "还没有关于");
                    break;
            }
            e.consumed = true;
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

        ui.menu.on("item_click", item => {
            switch (item.title) {
                case "退出":
                    ui.finish();
                    break;
            }
        })


        var funcList = [
            {
                funcId: 1,
                funcName: '准备',
                enable: true
            }, {
                funcId: 2,
                funcName: '退出结算',
                enable: true
            }, {
                funcId: 3,
                funcName: '接受邀请',
                enable: true
            }, {
                funcId: 4,
                funcName: '接受自动邀请',
                enable: true
            }, {
                funcId: 5,
                funcName: '组队挑战',
                enable: true
            }, {
                funcId: 6,
                funcName: '组队三人挑战',
                enable: false
            }
        ]
        ui.funcList.setDataSource(funcList);
        ui.funcList.on('item_bind', function (itemView, itemHolder) {
            itemView.listUp.on('click', function () {
                var pos = itemHolder.getPosition();
                if (pos > 0) {
                    // 上移
                    var t = funcList[pos];
                    funcList[pos] = funcList[pos - 1];
                    funcList[pos - 1]  = t;
                }
            })
            itemView.listDown.on('click', function () {
                var pos = itemHolder.getPosition();
                if (pos + 1 < funcList.length) {
                    // 下移
                    var t = funcList[pos];
                    funcList[pos] = funcList[pos + 1];
                    funcList[pos + 1]  = t;
                }
            })
        });

        ui.showFloaty.on('click', function () {
            if (null === that.floatyThread) {
                that.floatyThread = threads.start(function () {
                    var dqFloaty = require('./zz_modules/dqFloaty');
                    dqFloaty.render();
                    toastLog('run dqFloaty');
                });
            }
            
            
            var i = app.intent({
                action: Intent.ACTION_MAIN,
                category: Intent.CATEGORY_HOME
            });
            context.startActivity(i);
            
        })
    }
};

assttyys.init();

setInterval(function () {
    // 保活？
}, 1000);

