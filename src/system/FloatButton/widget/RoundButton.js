/*
 * @Author: 大柒
 * @QQ: 531310591@qq.com
 * @Date: 2021-04-18 04:34:46
 * @Version: Auto.Js Pro
 * @Description: 自定义控件 按钮
 * @LastEditors: 大柒
 * @LastEditTime: 2021-04-19 12:19:40
 */

var RoundButton = (function () {
    util.extend(RoundButton, ui.Widget);

    function RoundButton() {
        ui.Widget.call(this);
    }

    RoundButton.prototype.render = function () {
        return "<img\
            padding='8'\
            layout_gravity='center_vertical'\
            background='@drawable/abc_seekbar_tick_mark_material'\
            backgroundTint='#FFFFFF'\
        />";
    }

    ui.registerWidget("widget-RoundButton", RoundButton);
    return RoundButton;
})();

module.exports;