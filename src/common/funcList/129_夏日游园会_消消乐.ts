import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func129 implements IFuncOrigin {
    id = 129;
    name = '夏日游园会_消消乐';
    config = [{
        desc: '配置',
        config: [{
            name: 'auto_push_enabled',
            desc: '结束后使用osp推送',
            type: 'switch',
            default: false,
        }, {
            name: 'auto_exit_enabled',
            desc: '100关(满收益)后主动退出，需启用ocr扩展',
            type: 'switch',
            default: false,
        }]
    }];
    operator: IFuncOperatorOrigin[] = [{//  红
        desc: [1280, 720,
            [
                [center, 332, 74, 0xf66d7c],
                [center, 362, 74, 0xfb5f6b],
                [center, 366, 79, 0xffcba4],
                [center, 329, 79, 0xfdc5aa]
            ]
        ],
        oper: [
            [center, 1280, 720, 314, 32, 76, 68, 75]
        ]
    }, {
        // 界面检测
        desc: [1280, 720,
            [
                [right, 1026, 138, 0xd7e2e3],
                [right, 1055, 141, 0xe4eded],
                [right, 1084, 139, 0xe4eded],
                [right, 1112, 140, 0xd9e4e5]
            ]
        ],
        oper: [
            [center, 1280, 720, 400, 127, 862, 278, -1], // 第x关的识别区域
            [left, 1280, 720, 14, 14, 72, 68, 1000], // 退出
            [center, 1280, 720, 475, 295, 557, 383, 1000], // 确认
        ]
    }, {
        // 第x关
        desc: [
            1280, 720,
            [
                [left, 35, 37, 0x5b6069],
                [center, 283, 329, 0x4e7c9a],
                [center, 869, 353, 0x5a90b0],
                [center, 958, 438, 0x71a0b0],
                [center, 1051, 407, 0x365563],
                [center, 1067, 123, 0x273e48],
            ]
        ],
        oper: [
            [center, 1280, 720, 303, 453, 993, 669, 500],
        ]
    }, {
        // 玩死了，不玩了，步数耗尽
        desc: [
            1280, 720,
            [
                [left, 36, 36, 0x595e69],
                [left, 279, 41, 0x13130f],
                [center, 463, 379, 0x588eaf],
                [center, 857, 372, 0x6095b4],
                [center, 808, 207, 0x84c7d4],
            ]
        ],
        oper: [
            [center, 1280, 720, 268, 487, 1005, 693, 1000],
            [center, 1280, 720, 673, 407, 843, 458, 1000],
        ]
    }, {
        // 玩死了，不玩了，游戏结束
        desc: [
            1280, 720,
            [
                [left, 38, 39, 0x5c6169],
                [left, 278, 42, 0x13140f],
                [center, 753, 259, 0x4b779e],
                [center, 1224, 103, 0x132838],
                [center, 673, 211, 0xfee1bc],
            ]
        ],
        oper: [
            [center, 1280, 720, 289, 494, 977, 692, 1000],
        ]
    }];
    operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
        const thisConf = thisScript.scheme.config['129'];
        if (thisConf && thisConf.auto_push_enabled && thisScript.oper({
            name: '夏日游园会_消消乐_推送',
            operator: [{
                desc: thisOperator[4].desc
            }]
        })) {
            thisScript.doOspPush(thisScript, { text: '夏日游园会消消乐本局已结束，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
            sleep(200);
        }

        if (thisConf && thisConf.auto_exit_enabled) {
            let ocrResult = thisScript.findTextWithCompareColor(
                '\\d+',
                500,
                thisOperator[1].oper[0],
                '包含',
                {
                    name: '夏日游园会_消消乐_第x关检测',
                    operator: [{
                        desc: thisOperator[2].desc,
                    }]
                }
            );
            if (ocrResult.length > 0) {
                const curLevelStr = ocrResult[0].label;
                const curLevel = parseInt(curLevelStr.match(/(\d+)/)[1]);
                thisScript.myToast(`当前第${curLevel}关`);
                if (curLevel > 100) {
                    return thisScript.oper({
                        id: 129,
                        name: '夏日游园会_消消乐_退出',
                        operator: [{
                            desc: thisOperator[2].desc,
                            oper: [...thisOperator[2].oper, thisOperator[1].oper[1], thisOperator[1].oper[2]]
                        }]
                    })
                }
            }
        }

        if (thisScript.oper({
            name: '夏日游园会_消消乐_杂项',
            operator: [thisOperator[2], thisOperator[3], thisOperator[4]]
        })) {
            return true;
        }
        if (thisScript.oper({
            name: '夏日游园会_消消乐_界面检测',
            operator: [{
                desc: thisOperator[1].desc,
            }]
        })) {
            let leftx = thisOperator[0].oper[0][0];
            let lefty = thisOperator[0].oper[0][1];
            let upNextx = thisOperator[0].oper[0][2];
            let upThis = thisOperator[0].oper[0][3];
            let upNexty = thisOperator[0].oper[0][4];
            let arr = new Array();
            for (let y = 0; y < 9; y++) {
                arr[y] = new Array();
                lefty = lefty + y * upNexty;
                for (let x = 0; x < 9; x++) {
                    leftx = leftx + x * upNextx;
                    let region = [leftx, lefty, leftx + upThis, lefty + upThis];
                    let arrFind = [`消消乐_红`, `消消乐_黑`, `消消乐_蓝`, `消消乐_黄`]
                    for (let i = 0; i < 4; i++) {
                        arr[y][x] = 5;
                        if (thisScript.findMultiColor(arrFind[i], region)) {
                            arr[y][x] = i + 1;
                            break;
                        }
                    }
                    leftx = thisOperator[0].oper[0][0];
                }
                lefty = thisOperator[0].oper[0][1];
            }
            // thisScript.stop();
            // 如果当前棋盘能消，表示在消的途中，等待再消
            logMap(arr);
            if (erase(arr)) {
                sleep(500);
                return false;
            }


            const curResult = dfs(arr, 0, 1);
            if (curResult.dir < 0) {
                sleep(500);
                return false;
            }
            let offset;
            switch (curResult.dir) {
                case 1: offset = [-1, 0]; break;
                case 2: offset = [0, 1]; break;
                case 3: offset = [1, 0]; break;
                case 4: offset = [0, -1]; break;
            }
            const nX = curResult.x + offset[0];
            const nY = curResult.y + offset[1];

            const oper = [
                // 第一个点
                [
                    thisOperator[0].oper[0][0] + thisOperator[0].oper[0][2] * curResult.y,
                    thisOperator[0].oper[0][1] + thisOperator[0].oper[0][4] * curResult.x,
                    thisOperator[0].oper[0][0] + thisOperator[0].oper[0][2] * curResult.y + thisOperator[0].oper[0][3],
                    thisOperator[0].oper[0][1] + thisOperator[0].oper[0][4] * curResult.x + thisOperator[0].oper[0][3],
                    150
                ],
                //第二个点
                [
                    thisOperator[0].oper[0][0] + thisOperator[0].oper[0][2] * nY,
                    thisOperator[0].oper[0][1] + thisOperator[0].oper[0][4] * nX,
                    thisOperator[0].oper[0][0] + thisOperator[0].oper[0][2] * nY + thisOperator[0].oper[0][3],
                    thisOperator[0].oper[0][1] + thisOperator[0].oper[0][4] * nX + thisOperator[0].oper[0][3],
                    1000
                ],
            ]
            console.log(curResult);
            thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
            return true;
        }
    }
};


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
            if (i + 2 < m && map[i][j] != 0 && map[i][j] != 5) {
                if (abs(map[i][j]) == abs(map[i + 1][j]) &&
                    abs(map[i + 1][j]) == abs(map[i + 2][j]))
                    map[i][j] = map[i + 1][j] = map[i + 2][j] = -abs(map[i][j]), cnt3++;
            }
            // 横3
            if (j + 2 < n && map[i][j] != 0 && map[i][j] != 5) {
                if (abs(map[i][j]) == abs(map[i][j + 1]) &&
                    abs(map[i][j + 1]) == abs(map[i][j + 2]))
                    map[i][j] = map[i][j + 1] = map[i][j + 2] = -abs(map[i][j]), cnt3++;
            }
            // 竖4
            if (i + 3 < m && map[i][j] != 0 && map[i][j] != 5) {
                if (abs(map[i][j]) == abs(map[i + 1][j]) &&
                    abs(map[i + 1][j]) == abs(map[i + 2][j]) &&
                    abs(map[i + 2][j]) == abs(map[i + 3][j]))
                    map[i][j] = map[i + 1][j] = map[i + 2][j] = map[i + 3][j] = -abs(map[i][j]), cnt4++;
            }
            // 横4
            if (j + 3 < n && map[i][j] != 0 && map[i][j] != 5) {
                if (abs(map[i][j]) == abs(map[i][j + 1]) &&
                    abs(map[i][j + 1]) == abs(map[i][j + 2]) &&
                    abs(map[i][j + 2]) == abs(map[i][j + 3]))
                    map[i][j] = map[i][j + 1] = map[i][j + 2] = map[i][j + 3] = -abs(map[i][j]), cnt4++;
            }
            // 竖5
            if (i + 4 < m && map[i][j] != 0 && map[i][j] != 5) {
                if (abs(map[i][j]) == abs(map[i + 1][j]) &&
                    abs(map[i + 1][j]) == abs(map[i + 2][j]) &&
                    abs(map[i + 2][j]) == abs(map[i + 3][j]) &&
                    abs(map[i + 3][j]) == abs(map[i + 4][j]))
                    map[i][j] = map[i + 1][j] = map[i + 2][j] = map[i + 3][j] = map[i + 4][j] = -abs(map[i][j]), cnt5++;
            }
            // 横5
            if (j + 4 < n && map[i][j] != 0 && map[i][j] != 5) {
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
            map[i][j] = Math.max(map[i][j], 0);
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
    let ret = { x: -1, y: -1, dir: -1, score: 0, path: [] };
    if (deep >= maxDepth) {
        return { x: -1, y: -1, dir: 1, score: 0, path: [] };
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
                    ret.path = [{ x, y, dir, score }, ...d.path.map(item => ({ x: item.x, y: item.y, dir: item.dir, score: item.score }))];
                }
            }
        }
    }
    // console.log(key)
    // console.log('------------')
    mapSet[key] = ret;
    return ret;
}
