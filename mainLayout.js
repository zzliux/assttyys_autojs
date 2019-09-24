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
            <vertical>
                <text margin="10 0" id="title" text="启用功能" textColor="#666666" textSize="10sp" maxLines="1" />

                <list id="funcEnableList">
                    <card w="*" h="40" id="{{'funcCard_' + this.funcId}}" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground">
                        <horizontal gravity="center_vertical">
                            <View bg="#e91363" h="*" w="10" />
                            <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                <text id="title" text="{{this.funcId + ' ' + this.funcName}}" textColor="#222222" textSize="16sp" maxLines="1" />
                            </vertical>
                            <checkbox id="{{'funcCardCheckBox_' + this.funcId}}" marginLeft="4" marginRight="6" checked="{{true}}" />
                        </horizontal>
                    </card>
                </list>
                
                <text margin="10 5" id="title" text="停用功能" textColor="#666666" textSize="10sp" maxLines="1" />
                <list id="funcDisableList">
                    <card w="*" h="40" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground">
                        <horizontal gravity="center_vertical">
                            <View bg="#e91363" h="*" w="10" />
                            <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                <text id="title" text="1 准备" textColor="#222222" textSize="16sp" maxLines="1" />
                            </vertical>
                            <checkbox id="{{'funcCardCheckBox_' + this.funcId}}" marginLeft="4" marginRight="6" checked="{{false}}" />
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