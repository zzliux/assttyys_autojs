# getScheme （获取方案）
前端在设置方案页需要获取某个方案的具体信息，包括方案名，启用的功能的ID，对于有修改功能默认配置的需要将配置信息也给带出来
## 参数
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| schemeName | string | 方案名 |
## 返回值（例）
```javascript
{
    schemeName: '寮突破', // 方案名
    list: [1, 2, 4, 10, 20, 15, 16, 14, 13, 12, 11], // funcList中的id集合
    config: { // 方案中的配置，如返回空的话使用默认配置
        '1': { // key为功能的ID（1表示准备）
            enabled: true,
            position: '五人-左1'
        }
    },
    commonConfig: { // 通用参数
        clickDelay: 200, // 点击后固定延时
        clickDelayRandom: 1000, // 点击后延时随机数
        // 等
    }
}
```

# saveSchemeList （保存方案列表）
## 参数
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| schemeList | Array | 方案列表，每个元素结构如下 |
```javascript
{
    id: 3
    schemeName: '寮突破',
    type: 'inner' // inner-预设方案, user-用户方案
    star: false // 是否收藏，收藏的方案可通过悬浮球进行切换
    list: [1, 2, 4, 10, 20, 15, 16, 14, 13, 12, 11], // funcList中的id集合
    config: { // 方案中的配置，如返回空的话使用默认配置
        '1': { // key为功能的ID（1表示准备）
            enabled: false,
            position: '五人-左1'
        }
    },
    commonConfig: { // 通用参数
        clickDelay: 200, // 点击后固定延时
        clickDelayRandom: 1000, // 点击后延时随机数
        // 等
    }
}
```
## 返回值
void

# saveScheme （保存方案）
修改方案的功能启用的细节以及每个功能的详细配置
## 参数
| 参数名 | 类型 | 描述 |
| - | - | - |
| option | Object | 参数详情如下 |
```javascript
{
    schemeName: '寮突破', // 方案名
    funcList: funcList, // 结构见 /src/common/funcList.js
}
```
### 返回值
void

# setCurrentScheme（设置当前方案）
## 参数
| 参数名 | 类型 | 描述 |
| - | - | - |
| schemeName | string | 方案名 |
## 返回值
void


# startScript（启动悬浮）
前端发起启动悬浮按钮事件，脚本啥的由悬浮内进行启动
## 参数
void
## 返回值
void



