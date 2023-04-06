export type globalRootType = {
    currentNotifyDate: null | Date,
    app_is_open_flag: number,
    checked_yard_count: number,
    currentRunTimes: Record<string, number>,
    running: boolean,
    define_run_time: number,
    define_pause_time: number,
    runningTime: number,
    pauseTime: number,
    notifyTime: number,
    tp_swipe_times: number,
    tsAttackSwhipeNum: number,
    dgCurNum: number,
    currentChatEnd: number,
    greenPosition: number[] | null,
    greenTagEnd: number,
    greenNonDTime: number,
    d6LoadBuff: boolean | null,
    d6LoadedBuff: boolean | null
    d6d: Record<string, number[]>,
    d6RefreshCnt: number,
    d6dCurrentBegin: number,
    d6dBegin: number,
    times: number,
    d6NxFilter: string[],
    d6NextStation: string,
    d6NxRefreshCnt: number,
    d6NextEvent: string[],
    jy_list_swipe_times: number,
    jy_list_getTime_fault_count: number,
    jy_friends_enchantment_waitingtime: number,
    jy_enchantment_index: number,
    back_courtyard_to_next_scheme: string,
    fm_kiss_boss_flag: boolean, //  逢魔 是否已击杀首领
    fm_boss_btn_click_cnt: number, // 点击逢魔首领按钮次数
    change_shikigami_flag: boolean, //  更换式神
    change_shikigami_state: 'flushed' | 'search_group' | 'search_default' | 'change_team_default_1' | 'change_team_default_2' | 'finish', //  跟换式神预设状态值
    change_shikigami_list_swipe_times: number,
    change_shikigami_last_group_name: string,   //  式神录预设分组最后一项的名称
    narrow_state: Record<string, boolean>,   //  狭间暗域状态
    liao_activity_page_flag: boolean,   //  寮活动翻页标记
    banquet_change_flag: boolean,   //  宴会轮换开关标识
    gateOfHades_state: boolean,     //  阴门状态
    team_up_lagTime: null | Date,    //组队延时
    team_up_Frist: boolean,  //首次组队
    xsOpened: boolean, // 是否打开过悬赏
    intensify_lagTime: null | Date, //强化延时
    intensify_NumOT: number, //强化计数
    create_NumOT: number, //创建队伍计数
    redFlag: boolean;   //  红标标识
    yl_next: number,//言灵对弈下一个
    bgy_three: boolean; //百鬼奕三胜
    bgy_ten: boolean; //百鬼奕十次
}

export const globalRoot: globalRootType = {
    currentNotifyDate: null,
    app_is_open_flag: 0,
    checked_yard_count: 0,
    currentRunTimes: {},
    running: undefined,
    define_run_time: 0,
    define_pause_time: 0,
    runningTime: 0,
    pauseTime: 0,
    notifyTime: 0,
    tp_swipe_times: 0,
    tsAttackSwhipeNum: undefined,
    dgCurNum: 0,
    currentChatEnd: undefined,
    greenPosition: null,
    greenTagEnd: undefined,
    greenNonDTime: 0,
    d6LoadBuff: undefined,
    d6LoadedBuff: undefined,
    d6d: undefined,
    d6RefreshCnt: undefined,
    d6dCurrentBegin: undefined,
    d6dBegin: undefined,
    times: 0,
    d6NxFilter: undefined,
    d6NextStation: undefined,
    d6NxRefreshCnt: undefined,
    d6NextEvent: undefined,
    jy_list_swipe_times: 0,
    jy_list_getTime_fault_count: 0,
    jy_friends_enchantment_waitingtime: undefined,
    jy_enchantment_index: 0,
    back_courtyard_to_next_scheme: '',
    fm_kiss_boss_flag: false,
    fm_boss_btn_click_cnt: 0,
    change_shikigami_flag: false,
    change_shikigami_state: 'flushed',
    change_shikigami_list_swipe_times: 0,
    change_shikigami_last_group_name: undefined,
    narrow_state: undefined,
    liao_activity_page_flag: false,
    banquet_change_flag: false,
    gateOfHades_state: false,
    team_up_lagTime: null,
    team_up_Frist: true,
    xsOpened: false,
    intensify_lagTime: null,
    intensify_NumOT: 0,
    create_NumOT: 0,
    redFlag: false,
    yl_next: 0,
    bgy_three: false,
    bgy_ten: false,
}