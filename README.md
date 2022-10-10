# ASSTTYYS NG
ASISTTANT YYS NEXT GENERATION

# 前端
使用 **@auto.pro** 模块，webview加载网页作为UI使用，前端使用Vue + VantUI，个人第一次使用vue，代码和逻辑估处理可能会有很多不恰当的地方

针对每个小功能都将会提供丰富的配置属性，且不会再将功能拆得过细（比如说接受悬赏和拒绝悬赏将合成一个功能，具体接受和拒绝以及执行的条件将会放在配置中）

**浏览器调试前端时在console执行```localStorage.debug = 1```可使浏览器环境调用promptMock实现接口数据模拟**

# 环境说明及使用方法
普通用户只用看**方法4**，开发环境使用的pro8.1+/pro9+，安卓7+使用无障碍点击，安卓7以下需要root才能使用，方法1~3为开发环境运行方法
- 方法1：直接运行根目录下的run.js, 会下载最新版已打包好的脚本至aj的外部目录下并运行项目
- 方法2：解压根目录下的assttyys_ng.zip后运行项目，方法1中下载的也是该压缩包
- 方法3（开发调试）：
   1. 环境需求： node 14+, auto.js pro8.1+
   2. 执行npm install下载依赖
   3. 执行npm run build打包脚本，打包生成dist目录和已有的assets目录以及项目文件project.json作为一个auto.js项目
   4. 保存项目至设备并运行项目
- 方法4：手机使用51虚拟机或vmos等虚拟机，电脑使用mumu、蓝叠或雷电等模拟器，设置分辨率为720*1280，使用最新已打包好的apk文件（本项目置顶issue中提供下载地址），该apk由子项目hotrun进行打包，脚本内容为热更新加载，每次打开都是最新的脚本，无需重新下载新安装包


# 脚本
1. 脚本主要还是和上一代架构相近，对于某个图标或图像的多点找色需兼容多组数组的情况
2. 将会新增上一代没实现的实用性功能
   - 满足某条件时进行方案切换（比如说狗粮中把突破券打满后自动打突破，突破券消耗完后又自动打狗粮）
   - 满足某条件时进行休息一定时间（可能会和上一点做到一起）
   - ....

# 分辨率支持情况
脚本开发分辨率为 720 * 1280 该分辨率的横屏或竖屏均能兼容，其他分辨率兼容原理见 <https://gitee.com/yiszza/ScriptLib> 中 README 所提到的锚点比色 与 多点找色，开发分辨率得到的相关坐标点都会在运行分辨率上进行一次缩放与位移，但未测试过其他分辨率，因目前大多真机都是异型屏，阴阳师对异型屏有特殊优化，导致几乎所有异型屏都不支持锚点比色做阴阳师的多分辨率兼容，建议使用配合虚拟机或云手机使用。

# 主体功能完成情况
1. 逻辑框架（已完成）
   - 逻辑主要还是和上一代脚本类似，比色找色点击兼容了多分辨率
   - 运行过程中的方案切换（部分完成）
   - 自动停止脚本机制（已完成）
2. 方案、功能
   - 循环御魂，包括个人，组队等（已完成）
   - 循环探索，包括个人，组队，只打经验和所有都打（已完成）
      - ~~换狗粮，包括司机位置换素材、N卡，打手位置换素材、N卡（DOING）~~
      - 挑战，包括打经验怪和所有都打（已完成）
      - 打完后回到地图界面/组队界面的宝箱领取（TODO）
      - 组队模式下打手在司机退出后也需要退出（已完成）
      - etc.
   - 循环突破，包括个人突破，寮突破（已完成）
   - 准备功能里在准备后需要进行绿标（已完成）

# 目录说明 （截至2022-01-28）
```
assttyys_autojs
├─assets                                       资源目录，不经过webpack打包，运行时可加载该目录下的文件
│  ├─img                                       
│  └─lib
├─build                                        aj打包时自动产生的构建目录
├─config                                       webpack打包配置
├─dist                                         webpack打包目标目录
├─docs                                         文档
│  └─img
├─hotrun                                       热更新壳程序
│  ├─build
│  └─res
├─node_modules                                 npm依赖包路径
├─res                                          aj打包时自动产生的资源目录
├─src                                          源码目录
│  │  index.js                                 入口文件
│  ├─common                                    公共模块
│  │  │  commonConfig.js                       公共默认配置，每个方案右上角的配置来源
│  │  │  fmmxQuestionList.js                   逢魔密信题库
│  │  │  funcList.js                           功能入口，用以动态加载funcList下所有模块
│  │  │  globalCommconConfig.js                全局参数，用于在设置中体现
│  │  │  multiColors.js                        **多点找色配置文件**
│  │  │  schemeList.json                       **预设方案配置文件**
│  │  │  ...
│  │  └─funcList                               **功能配置目录**
│  │          000_结束判断.js
│  │          001_准备.js
│  │          002_退出结算.js
│  │          003.悬赏协作.js
│  │          004_接受邀请.js
│  │          ...
│  ├─mock                                      前端模拟数据
│  │      promptMock.js
│  ├─system                                    aj端目录
│  │  │  drawFloaty.js                         悬浮绘制模块
│  │  │  helperBridge.js                       操作模块，集成scriptlib以及点击等操作
│  │  │  index.js                              aj端入口
│  │  │  inputhideutil.js                      适配软键盘弹起布局的模块
│  │  │  myFloaty.js                           悬浮按钮模块
│  │  │  ocr.js                                ocr模块
│  │  │  schemeDialog.js                       方案弹窗选择模块
│  │  │  script.js                             **脚本逻辑模块**
│  │  │  store.js                              本地存储模块
│  │  ├─FloatButton                            大柒悬浮按钮
│  │  └─webviewEvents                          auto端处理前端路由目录
│  │          funcList.js
│  │          index.js
│  │          ...
│  └─template
│     │  App.vue
│     │  index.html
│     │  index.js
│     ├─assets                                  前端静态资源
│     ├─components                              前端组件
│     │      AppListLaunchDialog.vue
│     │      AppListRefDialog.vue
│     │      FuncConfigBox.vue
│     │      FuncConfigDialog.vue
│     └─pages                                   前端页面
│              About.vue
│              FuncList.vue
│              SchemeList.vue
│              Settings.vue
├─test                                          测试目录，里面有乱七八糟的测试用的文件
|  ...                                          待补充
```

# 已知问题
- 使用浩然的OCR识别逢魔密信中答案只有一个数字或字符的情况无法识别
- ~~修改了本地node_modules/@auto.pro/floaty/src/index.js中主logo透明度，从0.4调整为0.9~~
- ~~修改了本地node_modules/@auto.pro/core/src/screen/index.js中android.content.BroadcastReceiver使用JavaAdapter进行实例化~~
- helperBridge.swipePath中使用root进行手势需要补点，否则会出现拖动速度过快导致被游戏忽略~~

# 其他说明
仅作学习用途，请勿用于其他非法途径！<br/>
学习交流群: 864842180<br/>
欢迎在issue中提出bug与建议，也欢迎有能力的同学加入开发与维护的队列中来

# 特别鸣谢
感谢下面两位dalao的顶力支持，在本项目的开发过程中提出的需求均能快速响应与采纳！
- [yiszza](https://gitee.com/yiszza)
  - [ScriptLib](https://gitee.com/yiszza/ScriptLib)：基于Auto.js的高性能比色找色库，本项目的所有多点比色和多点找色均基于AnchorGraphicHelper完成
  - [综合图色助手](https://gitee.com/yiszza/ScriptGraphicHelper)：一款简单好用的图色助手, 快速生成多种脚本开发工具的图色格式代码
- [molysama](https://github.com/molysama)
  - [@auto.pro](https://github.com/molysama/auto.pro)的提供者，本项目基于该框架完成

- [aiou](https://gitee.com/LIUAWEIO)
  - 贡献本项目的悬赏封印、金币妖怪、宴会方案及相关功能

- [horsemi](https://gitee.com/horsemi)
  - 贡献本项目**定时任务**、结界寄养等功能

# LICENSE
MIT
