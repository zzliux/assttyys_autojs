module.exports = <drawer id="drawer" bg="#eeeeeeee">
    <vertical>
        <appbar>
            <toolbar id="toolbar" title="assttyys" />
            <tabs id="tabs"/>
        </appbar>
        <viewpager id="viewpager">
            <frame>
                <vertical h="*" padding="0 10 0 0">
                    <list id="funcList">
                        <card w="*" h="40" id="card" margin="10 5" clickable="true" cardCornerRadius="2dp" cardElevation="1dp" foreground="?android:attr/selectableItemBackgroundBorderless">
                            <horizontal gravity="center_vertical">
                                <View bg="#e91363" h="*" w="10" />
                                <vertical padding="10 8" h="auto" w="auto" layout_weight="1">
                                    <text id="title" text="{{this.funcId + ' ' + this.funcName}}" textColor="#222222" textSize="16sp" maxLines="1" />
                                </vertical>
                                <horizontal gravity="center|right" h="auto" w="auto">
                                    <img h="30" w="30" id="listUp" src="@drawable/ic_keyboard_arrow_up_black_48dp" clickable="true" bg="?android:attr/selectableItemBackgroundBorderless" />
                                    <img h="30" w="30" id="listDown" src="@drawable/ic_keyboard_arrow_down_black_48dp" clickable="true" bg="?android:attr/selectableItemBackgroundBorderless" />
                                    <checkbox id="checkbox" marginRight="6" checked="{{this.enable}}" />
                                </horizontal>
                            </horizontal>
                        </card>
                    </list>
                </vertical>
                <fab id="showFloaty" w="auto" h="auto" src="@drawable/ic_check_black_48dp" margin="16" layout_gravity="bottom|right" tint="#ffffff" />
            </frame>
            <frame>
                <vertical>
                    <text text="调试配置界面" textSize="22sp" />
                </vertical>
            </frame>
        </viewpager>
    </vertical>
    <vertical layout_gravity="left" bg="#ffffff" w="280">
        <img w="280" h="200" scaleType="fitXY" src="http://images.shejidaren.com/wp-content/uploads/2014/10/023746fki.jpg"/>
        <list id="menu">
            <horizontal bg="?selectableItemBackground" w="*">
                <img w="50" h="50" padding="16" src="{{this.icon}}" tint="#009688"/>
                <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center"/>
            </horizontal>
        </list>
    </vertical>
</drawer>;
