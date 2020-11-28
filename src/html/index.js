// 由于开启了混淆，为防止找不到对应的函数名，将函数挂载到window上
import 'bulma/css/bulma.css'
import 'basscss/css/basscss.min.css'
import './style.css'
import uuidjs from 'uuid-js'

document.getElementById("submit").onclick = function () {
    // 执行prompt前，务必要用JSON.stringify转一次，无论任何变量类型!!!
    var result = prompt("submit", JSON.stringify(uuidjs.create(4).toString()))
    alert('submit result: ' + result)
}

window["run"] = function (param1, param2) {
    var result = 'run ' + param1 + param2
    alert(result)
}
