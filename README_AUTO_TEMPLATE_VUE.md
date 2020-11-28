# 说明
该demo由molysama大佬的[auto-template-html](https://github.com/molysama/auto-template-html)修改而来

# auto-template-vue

auto.pro 的 vue 模板, UI 使用 Vant, 自己可以改成别的

# Usage

首次安装

```
npm i
```

生成 build 文件夹并监听 src 的变化

```
npm start
```

F1 + 运行项目，即可在模拟器或手机上运行本项目

## html 相关

-   如果想将 html 打包在 app 内，可以在`src/teamplate`文件夹内写vue代码
-   调试本地 html  
    执行`npm run vue`，并在浏览器中打开`localhost:3001`可以实时调试本地 UI
-   编译 html  
    执行`npm run build`，会同时编译 auto 的代码和 html 代码，在`dist`目录下生成编译文件

## 通讯

### html 向 auto 发送事件

webview 可以自定义浏览器事件，因此我们可以拦截一些不常用事件，通过魔改这些事件来传值和执行安卓代码，这就是所谓的 JsBridge。在本项目里使用的是`prompt`事件来传递。

举栗说明：

```javascript
// html部分--------------------
document.getElementById("btn").onclick = function () {
    // result的值由done()的参数传过来
    var result = prompt("submit", JSON.stringify("molysama"))
    // alert(result)
}

// auto部分---------------------
import { effect$ } from "@auto.pro/core"
import { run } from "@auto.pro/webview"
const webview = run("file://" + files.path("dist/index.html"))

effect$.subscribe(() => {
    // 监听放在effect里，只有当权限到位后，监听才生效
    webview.on("submit").subscribe(([param, done]) => {
        // done可以主动返回一个值给html，作为prompt('submit')的结果
        // 这里啥都没传，所以结果是undefined
        done()

        // param是传过来的参数，也就是html部分的'molysama'
        toastLog("接受到参数：" + param)
    })
})
```

### auto 向 html 发送事件

auto 执行 html 的代码原理就很简单了，直接通过 webview 来执行一段代码

```javascript
import { effect$ } from "@auto.pro/core"
import { run } from "@auto.pro/webview"

const webview = run("file://" + files.path("dist/index.html"))
effect$.subscribe(() => {
    // 在html里执行document.title，获取到标题并返回
    webview.runHtmlJS("document.title").subscribe((value) => {
        toastLog(`title是${value}`)
    })

    // 在html里执行run，并传递两个参数
    webview.runHtmlFunction("run", "hello", "world").subscribe((value) => {})
})
```

由于本项目添加了代码混淆处理，html 内的变量名可能会被混淆，导致通讯时找不到对应的函数，请确保执行时能找到正确的函数名（如把变量挂载到 html 的`window`对象上）

# LICENSE

MIT
