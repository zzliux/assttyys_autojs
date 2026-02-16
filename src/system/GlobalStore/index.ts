export type globalRootType = {
	currentNotifyDate: null | Date,
	app_is_open_flag: boolean,
	checked_yard_count: number,
	checked_yard_count_999: number,
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
	jy_change_shikigami: 'change' | 'get_reward' | 'change_enchantment' | 'jy_flag',   //  寄养_是否更换养成式神(狗粮)  更换式神 | 获取奖励 | 更换结界卡 | 寄养
	jy_experience_wine_pot_count: number,   //  寄养获取经验酒壶次数
	jy_enchantment_experience_count: number,   //  寄养获取结界卡奖励次数
	back_courtyard_to_next_scheme: string,
	fm_kiss_boss_flag: boolean, //  逢魔 是否已击杀首领
	fm_boss_btn_click_cnt: number, // 点击逢魔首领按钮次数
	change_shikigami_flag: boolean, //  更换式神
	change_shikigami_state: 'flushed' | 'search_group' | 'search_default' | 'change_team_default_1' | 'change_team_default_2' | 'finish' | 'second_groud' | 'second_default_1' | 'second_default_2', //  跟换式神预设状态值
	change_shikigami_list_swipe_times: number,
	change_shikigami_last_group_name: string,   //  式神录预设分组最后一项的名称
	narrow_state: Record<string, boolean>,   //  狭间暗域状态
	narrow_time: number, // 狭间暗域自定义3D人物走路时等待时间
	narrow_mode: boolean,
	recruitCount?: number, // 招募点击计数
	recruitClickedY?: number[], // 招募已点击的Y坐标
	lastRecruitFinishTime?: number | null, // 招募完成点击的时间戳
	recruitHasScrolled?: boolean, // 是否已翻页
	liao_activity_page_flag: number,   //  寮活动翻页标记
	liao_activity_Swith: Record<string, boolean>, // 寮活动记录
	liao_banquet_collect: boolean,   //  宴会筹备状态
	liao_banquet_onGoing: boolean,   //  宴会进行状态
	banquet_change_flag: boolean,   //  宴会轮换开关标识
	gateOfHades_state: boolean,     //  阴门状态
	team_up_lagTime: null | Date,    // 组队延时
	team_up_Frist: boolean,  // 首次组队
	xsOpened: boolean, // 是否打开过悬赏
	xsFilter: Record<number, number>,
	intensify_lagTime: null | Date, // 强化延时
	intensify_NumOT: number, // 强化计数
	create_NumOT: number, // 创建队伍计数
	redFlag: boolean;   //  红标标识
	yl_next: number, // 言灵对弈下一个
	bgy_three: boolean; // 百鬼奕三胜
	bgy_ten: boolean; // 百鬼奕十次
	xxlLastLevel: number;
	buff_enable_page_flag: boolean; // 开启buff是否完成翻页
	team_up_Time: number;   // 被邀请的次数
	game_area: string;  //  游戏区域
	operate_finish_flag: boolean;  // 寄养完成操作flag
	preset_once_groupNum: number | null;     // 一次性修改的预设分组
	preset_once_defaultNum: number | null;     // 一次性修改的预设阵容
	preset_once_team_groupNum: number | null;     // 315预设阵容的预设分组
	preset_once_team_defaultNum: number | null;     // 315预设阵容的预设阵容
	qiling_Position: number[] | null;   //  契灵的地图位置
	qiling_last: number | null;     //  契灵的上次类型
	qiling_shop: boolean; // 契灵商店购买
	opened_buff: boolean; // 是否已执行开启buff
	closed_buff: boolean; // 是否已执行关闭buff
	huahezhan: boolean;//    是否已领取花合战
	shangyushe: boolean;//    是否已上过预设
	d6Loop: number;//     椒图事件点击循环数
	d6RouFeng: number;//     椒图柔风实时buff数
	upYuHun: boolean;//      强化御魂记录界面次数
	bgyxLastCapture: number; // 上次截图的时间戳
	waitFight: boolean;//      等待分享鬼王被击杀
	faXian_NumOT: number, // 点击发现鬼王计数
	youjiequyuan_ten: boolean;//      缘结趣游是否十抽
	dengluNumOT: number, // 登录账号计数
	dengluState: boolean, // 登录账号状态
	yaoqing_close: boolean, // 关闭_接受邀请
	frist_open: boolean, // 首次开启方案
	tongXinDui_ZhanDou: 'collect' | 'judge' | 'prestore' | 'juexing' | 'stage' | 'yuhun' | 'back';   // 同心队预存阶段
	daoGuan_swip: boolean, // 选寮往下滑
	daoGuan_compare: number[], // 选寮存储记录的值
	daoGuan_click: boolean, // 选寮点挑战
	daoGuan_exit: boolean, // 道馆退出突破
	daoGuan_again: boolean, // 道馆再次攻打是否攻打第二阵容
	daoguan_team: boolean, // 道馆是否切换队伍
	first_create_team: boolean, // 首次创建队伍
	open_only_once: boolean, // 首次启动游戏
	fight_switch_skill: boolean, // 三号位切换技能
	flash_time: number, // 519刷新次数
	fengNa: boolean, // 302奉纳
	finght_time: number, // 320战斗时间
	xxxskill: number, // 寻香行技能
	MT_share: 'start' | 'back' | 'end', // 每周分享
	MT_liaoShop: 'start' | 'back' | 'end', // 寮商店购买
	MT_liaoShopList: string[], // 寮商店购买_未购买列表
	MT_shop: 'zhiBo' | 'jiShouWu' | 'miJuanWu' | 'zaHuoPu_teSu' | 'zaHuoPu_rongYu' | 'zaHuoPu_youQing' | 'zaHuoPu_xunZhang' | 'zaHuoPu_meiLi' | 'done', // 商店购买
	zhiBoBack: boolean, // 直播间返回
	shop_find: string[], // 商店购买_查找物品
	fengZi: boolean, // 风姿
	zhenLvJu: boolean, // 珍旅居
	shenKan: boolean, // 神龛
	zhenShe: number, // 真蛇
	sneak_level_open: boolean, // 选择层数
	day_chouKa: boolean, // 每日抽卡
	shiHe_jingYan: boolean, // 食盒经验领取上限
	xianShiFengMo: number,
	account_num: number, // 账号计数
	account_state: 'login' | 'function' | 'logout',
	function_Swith: Record<string, boolean | number>, // 小号功能记录
	loop_add: boolean, // 循环增加
}

export const globalRoot: globalRootType = {
	currentNotifyDate: null,
	app_is_open_flag: true,
	checked_yard_count: 0,
	checked_yard_count_999: 0,
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
	jy_change_shikigami: 'change',
	jy_experience_wine_pot_count: 0,
	jy_enchantment_experience_count: 0,
	back_courtyard_to_next_scheme: '',
	fm_kiss_boss_flag: false,
	fm_boss_btn_click_cnt: 0,
	change_shikigami_flag: true,
	change_shikigami_state: 'flushed',
	change_shikigami_list_swipe_times: 0,
	change_shikigami_last_group_name: undefined,
	narrow_state: undefined,
	narrow_time: 0,
	narrow_mode: false,
	recruitCount: 0,
	recruitClickedY: [],
	lastRecruitFinishTime: null,
	recruitHasScrolled: false,
	liao_activity_page_flag: 0,
	liao_activity_Swith: undefined,
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
	xxlLastLevel: 0,
	buff_enable_page_flag: false,
	team_up_Time: 0,
	game_area: '',
	operate_finish_flag: false,
	preset_once_groupNum: null,
	preset_once_defaultNum: null,
	preset_once_team_groupNum: null,
	preset_once_team_defaultNum: null,
	qiling_Position: null,
	qiling_last: null,
	opened_buff: false,
	closed_buff: false,
	huahezhan: true,
	shangyushe: true,
	d6Loop: 0,
	d6RouFeng: 1,
	upYuHun: false,
	bgyxLastCapture: undefined,
	waitFight: true,
	faXian_NumOT: 0,
	youjiequyuan_ten: true,
	dengluNumOT: 0,
	dengluState: true,
	yaoqing_close: false,
	frist_open: true,
	tongXinDui_ZhanDou: 'collect',
	daoGuan_swip: true,
	daoGuan_compare: [],
	daoGuan_click: false,
	daoGuan_exit: false,
	daoGuan_again: true,
	daoguan_team: true,
	first_create_team: false,
	open_only_once: false,
	fight_switch_skill: true,
	flash_time: 0,
	fengNa: false,
	xsFilter: {},
	finght_time: null,
	xxxskill: 0,
	MT_share: 'start',
	MT_liaoShop: 'start',
	MT_liaoShopList: null,
	MT_shop: 'zhiBo',
	zhiBoBack: false,
	shop_find: null,
	fengZi: true,
	zhenLvJu: true,
	shenKan: true,
	zhenShe: 2,
	sneak_level_open: true,
	day_chouKa: true,
	qiling_shop: false,
	shiHe_jingYan: false,
	liao_banquet_collect: false,
	liao_banquet_onGoing: true,
	xianShiFengMo: 0,
	account_num: 0,
	account_state: 'login',
	function_Swith: null,
	loop_add: true,
}
export type superGlobalRootType = {
	liao_activity_Swith: Record<string, boolean>, // 寮活动记录
	next_scheme_name: string, // 中转后的下个方案
	daoguan_lose: boolean, // 记录道馆第一次失败
	runTime: number, // 记录结界卡时间
}

export const superGlobalRoot: superGlobalRootType = {
	liao_activity_Swith: undefined,
	next_scheme_name: null,
	daoguan_lose: true,
	runTime: 0,
}