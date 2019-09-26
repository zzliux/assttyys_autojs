module.exports = <frame>
<vertical>
    <viewpager id="webpager">
        <frame>
            <vertical>
                <text text="功能选择" textSize="16sp"/>
                <input id="input_funcSelect" text="1,2" />
            </vertical>
        </frame>
        <frame>
            <vertical h="*">
                <list id="funcList">
                    <card w="*" h="40" id="{{'funcCard_' + this.funcId}}" margin="10 5" clickable="true" cardCornerRadius="2dp" cardElevation="1dp" foreground="?android:attr/selectableItemBackground">
                        <horizontal gravity="center_vertical">
                            <View bg="#e91363" h="*" w="10" />
                            <vertical padding="10 8" h="auto" w="auto" layout_weight="1">
                                <text id="title" text="{{this.funcId + ' ' + this.funcName}}" textColor="#222222" textSize="16sp" maxLines="1" />
                            </vertical>
                            <horizontal gravity="center|right" h="auto" w="auto">
                                <img h="30" w="30" src="@drawable/ic_keyboard_arrow_up_black_48dp" clickable="true" bg="?android:attr/selectableItemBackgroundBorderless"/>
                                <img h="30" w="30" src="@drawable/ic_keyboard_arrow_down_black_48dp" clickable="true" bg="?android:attr/selectableItemBackgroundBorderless"/>
                                <checkbox id="{{'funcCardCheckBox_' + this.funcId}}" marginRight="6" checked="{{true}}" />
                            </horizontal>
                        </horizontal>
                    </card>
                </list>
            </vertical>
        </frame>
        <frame>
            <vertical>
                <text text="调试配置界面" textSize="22sp" />
            </vertical>
        </frame>
    </viewpager>
</vertical>
<horizontal gravity="bottom|right">
    <button id="runScript" text="运行"/>
</horizontal>
</frame>;