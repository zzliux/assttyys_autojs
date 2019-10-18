"ui";

importClass(android.content.Intent);
importClass(android.widget.ArrayAdapter);
importClass(android.widget.AdapterView);
importClass(android.R);
importClass(java.util.ArrayList);


threads.start(function () {
    //请求截图权限
    if (!requestScreenCapture(true)) {
        toast("请求截图失败");
        exit();
    }
});

var mainLayout = require('./mainLayout');
// var zzUtils = require('./zz_modules/zzUtils');
var globalPreFuncList = require('./config/preFuncConfig');
var configList = require('./config/configConfig');

var assttyys = {

    floatyThread: null,

    /**
     *  funcId: funcConfig[i].id,
     *  funcName: funcConfig[i].name,
     *  enable: false
     */
    funcList: [],

    preFuncList: [],
    ass: storages.create('assttyys'),
    configConfigItemData: [],
    
    // 最近活动包名，用于启动脚本快速返回界面
    currentPackage: null,

    init: function () {
        var mainLayoutA = this.preHandleLayoutStr(mainLayout);
        ui.layout(mainLayoutA);
        this.initUI();
        this.bindEvents();
        this.initData();
    },

    preHandleLayoutStr: function (layoutStr) {
        var configXML = '';
        // 外层遍历category
        for (let i = 0; i < configList.length; i++) {
            configXML += '<text textSize="16sp" margin="5 10 0 10">' + configList[i].categoryName + '</text>';
            let itemData = configList[i].itemData;
            // 内层遍历每个参数
            for (let j = 0; j < itemData.length; j++) {
                configXML += '<horizontal w="*" h="40" margin="10 0">';
                if ('integer' == itemData[j].fieldType) {
                    this.configConfigItemData.push(itemData[j]);
                    configXML += '<input id="' + itemData[j].fieldName + '" text="' + itemData[j].default + '" textSize="14sp" w="50"/>'; 
                } else if ('boolean' == itemData[j].fieldType) {
                    this.configConfigItemData.push(itemData[j]);
                    configXML += '<checkbox id="' + itemData[j].fieldName + '" checked="{{' + itemData[j].default + '}}" w="50" />';                    
                }
                configXML += '<text textSize="16sp">' + itemData[j].itemName + '</text>'
                configXML += '</horizontal>';
            }
        }
        return java.lang.String.valueOf(layoutStr).replace('<LX-CONFIGCONFIG/>', configXML);
    },

    initUI: function () {
        var that = this;

        //创建选项菜单(右上角)
        ui.emitter.on("create_options_menu", menu => {
            menu.add('方案管理');
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

        this.initPreFuncSpinner();
    },

    initPreFuncSpinner: function () {
        var that = this;
        // console.log(this.ass.get('userFuncList'));
        // this.ass.put('userFuncList', null);
        var userFuncList = this.ass.get('userFuncList') || [];
        var preFuncList = [];
        for (var i = 0; i < globalPreFuncList.length; i++) {
            preFuncList.push(globalPreFuncList[i]);
        }

        // 合并两个对象, 以用户设置的为准
        for (var i = 0; i < userFuncList.length; i++) {
            var flag = false;
            for (var j = 0; j < preFuncList.length; j++) {
                if (preFuncList[j].name == userFuncList[i].name) {
                    preFuncList[j] = userFuncList[i];
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                preFuncList.push(userFuncList[i]);
            }
        }
        this.preFuncList = preFuncList;

        var spinner = ui.preFunc;
        var  preFuncStrList = [];
        for (var i = 0; i < preFuncList.length; i++) {
            preFuncStrList.push(preFuncList[i].name);
        }
        var data_list = new ArrayList(preFuncStrList);

        // 适配器
        var arr_adapter = new ArrayAdapter(context, android.R.layout.simple_spinner_item, data_list);
        // 设置样式
        arr_adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        // 加载适配器
        spinner.setAdapter(arr_adapter);


        // 选择事件
        // http://www.makaidong.com/%E5%8D%9A%E5%AE%A2%E5%9B%AD%E6%8E%92%E8%A1%8C/30189.shtml
        // 3. rhino如何实现java接口
        var selectedListener = {
            onItemSelected: function (parent, view, position, id) {
                if (position === 0) {
                    return;
                }
                var pos = position;
                var funcNumbers = that.preFuncList[pos].funcNumbers;
                var enbs = [];
                for (var j = 0; j < funcNumbers.length; j++) {
                    for (var i = 0; i < that.funcList.length; i++) {
                        if (funcNumbers[j] == that.funcList[i].funcId) {
                            that.funcList[i].enable = true;
                            enbs.push(that.funcList[i]);
                            break;
                        }
                    }
                }
                var newFuncList = [];
                for (var i = 0; i < enbs.length; i++) {
                    newFuncList.push(enbs[i]);
                }
                for(var i = 0; i < that.funcList.length; i++) {
                    var flag = true;
                    for(var j = 0; j < enbs.length; j++) {
                        if (enbs[j].funcId == that.funcList[i].funcId) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        that.funcList[i].enable = false;
                        newFuncList.push(that.funcList[i]);
                    }
                }
                that.funcList = newFuncList;
                ui.funcList.setDataSource(that.funcList);
            },
            onNothingSelected: function (parent) { }
        };
        spinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener(selectedListener));
    },

    bindEvents: function () {
        var that = this;

        //监听选项菜单点击
        ui.emitter.on("options_item_selected", (e, item)=>{
            switch(item.getTitle()){
                case "关于":
                    alert("关于", "作者：zzliux\n开源地址：https://gitee.com/zzliux/assttyys_autojs");
                    break;
                case "重置配置":
                    dialogs.confirm('提示', '重置配置后所有配置将被重置并退出程序，确认？', function (is) {
                        if (!is) return;
                        that.ass.put('funcList', []);
                        that.ass.put('userFuncList', []);
                        that.ass.put('userConfigConfig', {});
                        ui.finish();
                    });
                    break;
                case '方案管理':
                    that.savePrevFuncEvent();
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

            if (!ui.autoService.checked) {
                toastLog('请开启无障碍权限');
                return;
            }

            that.ass.put('funcList', that.funcList);

            var userConfigConfig = {};
            for (let i = 0; i < that.configConfigItemData.length; i++) {
                if ('integer' == that.configConfigItemData[i].fieldType) {
                    var fieldName = that.configConfigItemData[i].fieldName;
                    var text = ui[fieldName].text();
                    if (!/^\d+$/.test(text)) {
                        toastLog('配置项[' + that.configConfigItemData[i].itemName + ']请填入整数。');
                        return;
                    }
                    userConfigConfig[fieldName] = java.lang.Integer.parseInt(text);
                } else if ('boolean' == that.configConfigItemData[i].fieldType) {
                    var fieldName = that.configConfigItemData[i].fieldName;
                    userConfigConfig[fieldName] = ui[fieldName].isChecked();
                }
            }
            that.ass.put('userConfigConfig', userConfigConfig);

            if (null === that.floatyThread) {
                that.floatyThread = threads.start(function () {
                    var dqFloaty = require('./zz_modules/dqFloaty');
                    dqFloaty.render();
                });
            }

            if (null == that.currentPackage) {
                var i = app.intent({
                    action: Intent.ACTION_MAIN,
                    category: Intent.CATEGORY_HOME,
                    flags: ['ACTIVITY_NEW_TASK'],
                });
                context.startActivity(i);
            } else {
                launch(that.currentPackage);
            }
        });

        ui.autoService.checked = auto.service != null;
        ui.autoService.on("check", function(checked) {
            // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
            if(checked && auto.service == null) {
                toastLog('请在无障碍中将assttyys开启');
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

        // 点击返回回到桌面，不退出程序
        ui.emitter.on("back_pressed", function (e) {
            e.consumed = true;
            var i = app.intent({
                action: Intent.ACTION_MAIN,
                category: Intent.CATEGORY_HOME,
                flags: ['ACTIVITY_NEW_TASK']
            });
            context.startActivity(i);
        });

        // 点击设置
        events.broadcast.on('DQFLOATY_SETTING_CLICK', function () {
            // 广播停止脚本
            that.currentPackage = currentPackage();
            events.broadcast.emit('DQFLOATY_STOP_CLICK', '');
            var i = new Intent(context, activity.class);
            i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(i);
        });
    },

    initData: function () {
        var that = this;
 
        var funcConfig = require('./config/funcConfig');
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

        // 设置配置
        var userConfigConfig = this.ass.get('userConfigConfig') || {};
        for (let i = 0; i < this.configConfigItemData.length; i++) {
            var fieldName = this.configConfigItemData[i].fieldName;
            if (typeof ui[fieldName] != 'undefined' && null != userConfigConfig[fieldName]) {
                if ('integer' == this.configConfigItemData[i].fieldType) {
                    if (typeof userConfigConfig[fieldName] != 'undefined') {
                        ui[fieldName].text(java.lang.String.valueOf(userConfigConfig[fieldName]).replace('.0', ''));
                    }
                } else if ('boolean' == this.configConfigItemData[i].fieldType) {
                    ui[fieldName].setChecked(userConfigConfig[fieldName]);
                }
            }
        }
    },


    savePrevFuncEvent: function () {
        var that = this;
        dialogs.select('操作', ['另存当前方案', '覆盖已有方案', '删除已有方案'], function (operId) {
            if (operId == 0) {
                dialogs.rawInput('请输入方案名', '', function (prevFuncName) {
                    if (null == prevFuncName || '' == prevFuncName) return;
                    that.savePrevUserFunc(prevFuncName);
                    that.initPreFuncSpinner();
                });
            } else if (operId == 1) {
                var userFuncList = that.ass.get('userFuncList') || [];
                var funcNameList = [];
                for (let i = 0; i < userFuncList.length; i++) {
                    funcNameList.push(userFuncList[i].name);
                }
                dialogs.select('选择要覆盖的方案', funcNameList, function (coverOperId) {
                    if (coverOperId == -1) return;
                    that.savePrevUserFunc(funcNameList[coverOperId]);
                    that.initPreFuncSpinner();
                });
            } else if (operId == 2) {
                var userFuncList = that.ass.get('userFuncList') || [];
                var funcNameList = [];
                for (let i = 0; i < userFuncList.length; i++) {
                    funcNameList.push(userFuncList[i].name);
                }
                dialogs.select('选择要删除的方案', funcNameList, function (deleteOperId) {
                    if (deleteOperId == -1) return;
                    that.deletePrevUserFunc(funcNameList[deleteOperId]);
                    that.initPreFuncSpinner();
                });
            }
        });

    },
    
    savePrevUserFunc: function (prevFuncName) {
        var that = this;
        var userFuncList = that.ass.get('userFuncList') || [];
        var funcNumbers = [];
        for (let i = 0; i < that.funcList.length; i++) {
            if (that.funcList[i].enable) {
                funcNumbers.push(that.funcList[i].funcId);
            }
        }
        var flag = true;
        for (let i = 0; i < userFuncList.length; i++) {
            if (userFuncList[i].name == prevFuncName) {
                flag = false;
                userFuncList[i].funcNumbers = funcNumbers;
                break;
            }
        }
        if (flag) {
            userFuncList.push({
                name: prevFuncName,
                funcNumbers: funcNumbers
            });
        }
        that.ass.put('userFuncList', userFuncList);
        toastLog('已保存');
    },

    deletePrevUserFunc: function (prevFuncName) {
        var userFuncList = this.ass.get('userFuncList') || [];
        var toSave = [];
        for (let i = 0; i < userFuncList.length; i++) {
            if (userFuncList[i].name != prevFuncName) {
                toSave.push(userFuncList[i]);
            }
        }
        this.ass.put('userFuncList', toSave);
        toastLog('已保存');
    }
};

assttyys.init();


setInterval(function () {
    // 保活？
}, 1000);
