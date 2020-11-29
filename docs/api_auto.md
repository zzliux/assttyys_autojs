# getSecheme （获取方案）
## 描述
前端在设置方案页需要获取某个方案的具体信息，包括方案名，启用的功能的ID，对于有修改功能默认配置的需要将配置信息也给带出来
## 参数
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| schemeName | string | 方案名 |
## 返回值（例）
```javascript
{
    name: '寮突破', // 方案名
    list: [1, 2, 4, 10, 20, 15, 16, 14, 13, 12, 11], // funcList中的id集合
    config: { // 方案中的配置，如返回空的话使用默认配置
        '1': { // key为功能的ID（1表示准备）
            enabled: true,
            position: '五人-左1'
        }
    }
    commonConfig: { // 通用参数
        clickDelay: 200, // 点击后固定延时
        clickDelayRandom: 1000, // 点击后延时随机数
        // 等
    }
}
```

# saveScheme（保存方案）
## 描述
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

# setCurrentSeheme（设置当前方案）
## 参数
| 参数名 | 类型 | 描述 |
| - | - | - |
| schemeName | string | 方案名 |
## 返回值
void


# startScript（启动指定方案的脚本，从悬浮启动）
## 参数
| 参数名 | 类型 | 描述 |
| - | - | - |
| schemeName | string | 方案名 |
## 返回值
thread对象，可通过该thread.interrupt()停止执行脚本



