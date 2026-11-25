/**
 * 结界皮肤适配。
 *
 * 结界皮肤是整套重绘的：三个牌位（式神育成 / 结界防守 / 结界卡）的纸面、
 * 装饰与背景在每套皮肤下颜色都不同，因此「是否处于己方结界主界面」这一判定
 * 必须按皮肤分别取锚点（见 multiDetectColors 中「页面是否为己方结界_<皮肤名>」）。
 *
 * - 己方结界（700 / 998）：用户在功能配置里选自己的皮肤即可，选「自动」时逐套尝试。
 * - 好友结界（702）：好友用什么皮肤无法预知，始终逐套尝试。
 *
 * 新增皮肤只需两步：在 multiDetectColors 加一条 <皮肤名> 的锚点，再把名字加进下面的数组。
 */
export const AUTO_SKIN = '自动';

/** 已适配锚点的结界皮肤，顺序与锚点表一致 */
export const ENCHANTMENT_SKINS = [
	'妖伞结界',
	'见世山廊',
	'莲心梦乡',
	'花海繁生',
	'狐梦之乡',
	'金鱼梦境',
	'斗鱼之地',
];

/** 功能配置里「结界皮肤」下拉的选项 */
export const ENCHANTMENT_SKIN_OPTIONS = [AUTO_SKIN, ...ENCHANTMENT_SKINS];

const ANCHOR_PREFIX = '页面是否为己方结界_';

/** 上次命中的皮肤锚点 key，用于「自动」模式下把它排到最前，稳定后通常一次比色就命中 */
let lastHitKey: string | null = null;

/**
 * 取需要尝试的锚点 key 列表。
 * @param selected 配置里选的皮肤名；为空或「自动」时返回全部
 *                 （方案配置的值类型是 string | number | boolean | string[]，这里统一收口）
 */
export function enchantmentAnchorKeys(selected?: any): string[] {
	const name = typeof selected === 'string' ? selected : '';
	let keys: string[];
	if (name && name !== AUTO_SKIN && ENCHANTMENT_SKINS.indexOf(name) >= 0) {
		keys = [ANCHOR_PREFIX + name];
	} else {
		keys = ENCHANTMENT_SKINS.map(skin => ANCHOR_PREFIX + skin);
	}
	if (keys.length > 1 && lastHitKey && keys.indexOf(lastHitKey) > 0) {
		keys = [lastHitKey].concat(keys.filter(key => key !== lastHitKey));
	}
	return keys;
}

/** 记录本次命中的皮肤，供下次优先尝试 */
export function rememberEnchantmentKey(key?: string) {
	if (key) {
		lastHitKey = key;
	}
}
