// 参考: https://www.codenong.com/cs106983431/
/**
 * 0 表示已消除
 * 1~3 表示3种类型
 * 4 表示的大球，5个一排消的那种
 */
const mapGlobal = [
    [3, 3, 2, 1, 1, 2, 3, 2, 3],
    [4, 1, 3, 2, 1, 3, 2, 4, 4],
    [1, 3, 2, 2, 3, 4, 4, 3, 4],
    [4, 1, 4, 4, 1, 1, 4, 3, 2],
    [4, 3, 2, 2, 1, 2, 3, 1, 4],
    [2, 2, 5, 3, 3, 2, 2, 3, 4],
    [3, 1, 3, 4, 4, 1, 4, 1, 1],
    [3, 2, 3, 4, 4, 3, 2, 4, 4],
    [4, 4, 1, 1, 3, 4, 5, 1, 3],
];

/**
 * 交换
 * @param {*} map 地图
 * @param {*} x 
 * @param {*} y 
 * @param {*} dir 方向：1上，2右，3下，4左
 */
function bswap(map, x, y, dir) {
    let offset = [];
    switch (dir) {
        case 1: offset = [-1, 0]; break;
        case 2: offset = [0, 1]; break;
        case 3: offset = [1, 0]; break;
        case 4: offset = [0, -1]; break;
    }
    const nX = x + offset[0];
    const nY = y + offset[1];
    if (nX < 0 || nY < 0 || nX >= map.length || nY >= map[nX].length) {
        return false;
    }
    const tmp = map[x][y];
    map[x][y] = map[nX][nY];
    map[nX][nY] = tmp;
}

function abs(n) {
    return Math.abs(n);
}

/**
 * 消除方块，并使其下落，取负数表示这个块被预消除，比如说横三和竖三组合的情况需要判断
 * 返回分数
 * @param {*} map 
 */
function erase(map) {
    let cnt3 = 0, cnt4 = 0, cnt5 = 0;
    let m = map.length;
    let n = map[0].length;
    // 计算3，4，5的连续块个数
    // < 0 表示被消除
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 竖3
            if (i + 2 < m && map[i][j] != 0) {
                if (abs(map[i][j]) == abs(map[i + 1][j]) &&
                    abs(map[i + 1][j]) == abs(map[i + 2][j]))
                    map[i][j] = map[i + 1][j] = map[i + 2][j] = -abs(map[i][j]), cnt3++;
            }
            // 横3
            if (j + 2 < n && map[i][j] != 0) {
                if (abs(map[i][j]) == abs(map[i][j + 1]) &&
                    abs(map[i][j + 1]) == abs(map[i][j + 2]))
                    map[i][j] = map[i][j + 1] = map[i][j + 2] = -abs(map[i][j]), cnt3++;
            }
            // 竖4
            if (i + 3 < m && map[i][j] != 0) {
                if (abs(map[i][j]) == abs(map[i + 1][j]) &&
                    abs(map[i + 1][j]) == abs(map[i + 2][j]) &&
                    abs(map[i + 2][j]) == abs(map[i + 3][j]))
                    map[i][j] = map[i + 1][j] = map[i + 2][j] = map[i + 3][j] = -abs(map[i][j]), cnt4++;
            }
            // 横4
            if (j + 3 < n && map[i][j] != 0) {
                if (abs(map[i][j]) == abs(map[i][j + 1]) &&
                    abs(map[i][j + 1]) == abs(map[i][j + 2]) &&
                    abs(map[i][j + 2]) == abs(map[i][j + 3]))
                    map[i][j] = map[i][j + 1] = map[i][j + 2] = map[i][j + 3] = -abs(map[i][j]), cnt4++;
            }
            // 竖5
            if (i + 4 < m && map[i][j] != 0) {
                if (abs(map[i][j]) == abs(map[i + 1][j]) &&
                    abs(map[i + 1][j]) == abs(map[i + 2][j]) &&
                    abs(map[i + 2][j]) == abs(map[i + 3][j]) &&
                    abs(map[i + 3][j]) == abs(map[i + 4][j]))
                    map[i][j] = map[i + 1][j] = map[i + 2][j] = map[i + 3][j] = map[i + 4][j] = -abs(map[i][j]), cnt5++;
            }
            // 横5
            if (j + 4 < n && map[i][j] != 0) {
                if (abs(map[i][j]) == abs(map[i][j + 1]) &&
                    abs(map[i][j + 1]) == abs(map[i][j + 2]) &&
                    abs(map[i][j + 2]) == abs(map[i][j + 3]) &&
                    abs(map[i][j + 3]) == abs(map[i][j + 4]))
                    map[i][j] = map[i][j + 1] = map[i][j + 2] = map[i][j + 3] = map[i][j + 4] = -abs(map[i][j]), cnt5++;
            }
        }
    }

    // 下落
    for (let j = 0; j < n; j++) {
        let st = m - 1, ed = 0, dst = 0, delta = 0;
        while (st >= 0 && map[st][j] > 0) st--;
        for (ed = st; ed >= 0 && map[ed][j] <= 0; ed--) { }
        delta = st - ed;
        for (let i = ed; i >= 0; i--) {
            map[i + delta][j] = map[i][j], map[i][j] = 0;
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            map[i][j] = Math.max(map[i][j]);
        }
    }

    cnt4 -= 2 * cnt5, cnt3 -= (3 * cnt5 + 2 * cnt4);        // 消去重复的计数
    if (cnt3 + cnt4 * 4 + cnt5 * 10 == 0) {
        return 0;  // 是否需要消去新的连号
    }
    return cnt3 + cnt4 * 4 + cnt5 * 10 + erase(map);
}

function logMap(map) {
    console.log('\n' + map.map(item => item.join(' ')).join('\n') + '\n');
}

// 棋盘优解
const mapSet = {};

function dfs(map, deep, maxDepth) {
    const key = JSON.stringify(map);
    if (mapSet[key]) {
        return mapSet[key];
    }
    let ret = { x: -1, y: -1, dir: -1, score: 0, path: []};
    if (deep >= maxDepth) {
        return { x: -1, y: -1, dir: 1, score: 0, path: []};
    }
    let score = 0; //erase(newMap);
    for (let x = 0; x < map.length; x++) {
        for (let y = 0; y < map[x].length; y++) {
            if (!map[x][y]) continue;
            for (let dir = 1; dir <= 4; dir++) {
                const newMap = JSON.parse(key);
                bswap(newMap, x, y, dir);
                score = erase(newMap);
                let d = null;
                if (score) {
                    d = dfs(newMap, deep + 1, maxDepth);
                    score += d.score;
                }
                if (ret.score < score) {
                    ret.score = score;
                    ret.x = x;
                    ret.y = y;
                    ret.dir = dir;
                    ret.path = [{ x, y, dir, score }, ...d.path.map(item => ({ x: item.x, y: item.y, dir: item.dir, score: item.score}))];
                }
            }
        }
    }
    // console.log(key)
    // console.log('------------')
    mapSet[key] = ret;
    return ret;
}
const r = dfs(mapGlobal, 0, 4);

logMap(mapGlobal);
for (let i = 0; i < r.path.length; i++) {
    console.log(r.path[i]);
    bswap(mapGlobal, r.path[i].x, r.path[i].y, r.path[i].dir);
    erase(mapGlobal);
    logMap(mapGlobal);
}
