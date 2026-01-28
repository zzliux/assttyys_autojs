/*
 * @Author: 大柒
 * @QQ: 531310591@qq.com
 * @Date: 2021-04-18 05:27:34
 * @Version: Auto.Js Pro
 * @Description: 创建圆形按钮
 * @LastEditors: 大柒
 * @LastEditTime: 2021-04-19 12:19:02
 */
/*eslint-disable */
function CreateRoundButtonView(name, mGlobal) {
    let view, tag, items;
    let mEventAction = null;
    let viewClickEvent = null;
    let state = null;
    tag = name || '';

    function init() {
        view = ui.inflate("<widget-RoundButton />", null, null);
        view.setLayoutParams(new android.widget.LinearLayout.LayoutParams(mGlobal.size, mGlobal.size));
        viewPost(() => {
            let value;
            view.setPadding(mGlobal.padding, mGlobal.padding, mGlobal.padding, mGlobal.padding);
            viewClickEvent = (notTrigger) => {
                if (state != null) {
                    if (mGlobal.state.anim) return;
                    mGlobal.anim.stateChanged(state, items, view);
                    state = !state;
                }
                if (!notTrigger) {
                    if (mEventAction == null) {
                        value = mGlobal.eventActions.item_click(view, tag, state);
                        if (!value || value == undefined) {
                            mGlobal.state.menuOpen = false;
                        };
                    } else {
                        value = mEventAction(view, tag, state);
                        if (!value || value == undefined) {
                            mGlobal.state.menuOpen = false;
                        };
                    }
                }
                if (mGlobal.time.autoCloseMenu != 0) {
                    if (mGlobal.timer != null) {
                        clearTimeout(mGlobal.timer);
                    }
                    mGlobal.timer = setTimeout(() => {
                        mGlobal.state.menuOpen = false;
                        mGlobal.timer = null;
                    }, mGlobal.time.autoCloseMenu);
                }
            }
            view.on('click', () => {
                viewClickEvent();
            });
        });
    }

    this.getView = () => view;

    this.onClick = function (eventAction) {
        mEventAction = eventAction;
        return this;
    }

    this.setSize = function (px) {
        viewPost(function () {
            view.attr('w', parseInt(px) + 'px');
            view.attr('h', parseInt(px) + 'px');
        });
        return this;
    }

    this.setPadding = function (px) {
        viewPost(() => view.setPadding(px, px, px, px));
        return this;
    }

    this.setIcon = function (value) {
        viewPost(() => view.attr('src', value));
        return this;
    }

    this.setTint = function (colorStr) {
        viewPost(() => view.attr('tint', colorStr));
        return this;
    }

    this.setRotation = function (rotation) {
        viewPost(() => view.setRotation(rotation));
        return this;
    }

    this.setColor = function (colorStr) {
        viewPost(() => view.attr('backgroundTint', colorStr));
        return this;
    }

    this.setChecked = function (value, notTrigger) {
        if (state == value || state == null) return this;
        viewPost(() => {
            viewClickEvent(notTrigger);
        });
        return this;
    }

    this.getChecked = function () {
        return state;
    }

    this.toCheckbox = function (action) {
        action(new ViewToCheckbox(this));
        return this;
    }

    function ViewToCheckbox(viewUtil) {
        state = false;
        items = {};

        this.icon1 = function (value) {
            items.icon1 = value;
            viewUtil.setIcon(value);
            return this;
        }

        this.icon2 = function (value) {
            items.icon2 = value;
            return this;
        }

        this.tint1 = function (value) {
            items.tint1 = value;
            viewUtil.setTint(value);
            return this;
        }

        this.tint2 = function (value) {
            items.tint2 = value;
            return this;
        }

        this.color1 = function (value) {
            items.color1 = value;
            viewUtil.setColor(value);
            return this;
        }

        this.color2 = function (value) {
            items.color2 = value;
            return this;
        }

        this.rotation1 = function (rotation) {
            items.rotation1 = rotation;
        }

        this.rotation2 = function (rotation) {
            items.rotation2 = rotation;
        }

        this.setAnimTime = function (value) {
            animTime = value;
            return this;
        }

        return this;
    }

    function viewPost(action) {
        ui.run(action);
    }

    init();
};

module.exports = CreateRoundButtonView;