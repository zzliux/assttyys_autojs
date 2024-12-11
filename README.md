# ASSTTYYS NG
ASISTTANT YYS NEXT GENERATION<br/>
仅作学习用途，请勿用于其他非法途径！<br/>
欢迎在issue中提出bug与建议，也欢迎有能力的同学加入开发与维护的队列中来<br/>
![GitHub](https://img.shields.io/github/license/zzliux/assttyys_autojs)
[![group:864842180](https://img.shields.io/badge/group-864842180-blue)](https://qm.qq.com/q/H852T6N0OG)


# 分辨率支持情况
脚本开发分辨率为 720 * 1280 该分辨率的横屏或竖屏均能兼容，其他分辨率兼容原理见 <https://gitee.com/yiszza/ScriptLib> 中 README 所提到的锚点比色 与 多点找色，开发分辨率得到的相关坐标点都会在运行分辨率上进行一次缩放与位移，但未测试过其他分辨率，因目前大多真机都是异型屏，阴阳师对异型屏有特殊优化，导致几乎所有异型屏都不支持锚点比色做阴阳师的多分辨率兼容，建议使用配合虚拟机或云手机使用。

# 目录说明
前端已从本项目分离，见 [zzliux/assttyys_ui](https://github.com/zzliux/assttyys_ui)
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
│  │  index.ts                                 入口文件
│  ├─common                                    公共模块
│  │  │  commonConfig.ts                       公共默认配置，每个方案右上角的配置来源
│  │  │  fmmxQuestionList.ts                   逢魔密信题库
│  │  │  funcList.ts                           功能入口，用以动态加载funcList下所有模块
│  │  │  globalCommconConfig.ts                全局参数，用于在设置中体现
│  │  │  multiDetectColors.ts                  **多点找色配置文件**
│  │  │  multiFindColors.ts                    **多点找色配置文件**
│  │  │  schemeList.tson                       **预设方案配置文件**
│  │  │  ...
│  │  └─funcList                               **功能配置目录**
│  │          000_结束判断.ts
│  │          001_准备.ts
│  │          002_退出结算.ts
│  │          003.悬赏协作.ts
│  │          004_接受邀请.ts
│  │          ...
│  ├─system                                    aj端目录
│  │  │  drawFloaty.ts                         悬浮绘制模块
│  │  │  helperBridge.ts                       操作模块，集成scriptlib以及点击等操作
│  │  │  index.ts                              aj端入口
│  │  │  inputhideutil.ts                      适配软键盘弹起布局的模块
│  │  │  myFloaty.ts                           悬浮按钮模块
│  │  │  ocr.ts                                ocr模块
│  │  │  schemeDialog.ts                       方案弹窗选择模块
│  │  │  script.ts                             **脚本逻辑模块**
│  │  │  store.ts                              本地存储模块
│  │  ├─FloatButton                            大柒悬浮按钮
│  │  └─webviewEvents                          auto端处理前端路由目录
│  │          funcList.ts
│  │          index.ts
│  │          ...
├─test                                          测试目录，里面有乱七八糟的测试用的文件
|  ...                                          待补充
```

# 特别鸣谢
感谢下面几位dalao的顶力支持，在本项目的开发过程中提出的需求均能快速响应与采纳！
- [yiszza](https://gitee.com/yiszza)
  - [ScriptLib](https://gitee.com/yiszza/ScriptLib)：基于Auto.ts的高性能比色找色库，本项目的所有多点比色和多点找色均基于AnchorGraphicHelper完成
  - [综合图色助手](https://gitee.com/yiszza/ScriptGraphicHelper)：一款简单好用的图色助手, 快速生成多种脚本开发工具的图色格式代码
- [molysama](https://github.com/molysama)
  - [@auto.pro](https://github.com/molysama/auto.pro)的提供者，本项目基于该框架完成
- 以及本项目的 [贡献者](https://github.com/zzliux/assttyys_autojs/graphs/contributors) 们

# LICENSE
MIT
