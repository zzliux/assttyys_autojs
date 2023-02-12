// 乞丐版验证CRON表达式方法，不支持L与/操作符
export function checkedDateByCron(cronData: string, nowDate = new Date()) {
    const _cronArray = cronData.split(' ');
    const _result = new Array<boolean>();

    //  补位
    if (_cronArray.length < 7) {
        const complement = 7 - _cronArray.length;

        for (let i = 0; i < complement; i++) {
            _cronArray.push('*');
        }
    }

    const _secondCron = _cronArray[0];
    _result.push(compareDate(_secondCron, nowDate.getSeconds()));

    const _minuteCron = _cronArray[1];
    _result.push(compareDate(_minuteCron, nowDate.getMinutes()));

    const _hourCron = _cronArray[2];
    _result.push(compareDate(_hourCron, nowDate.getHours()));

    const _dateCron = _cronArray[3];
    _result.push(compareDate(_dateCron, nowDate.getDate()));

    const _monthCron = _cronArray[4];
    _result.push(compareDate(_cronArray[4], nowDate.getMonth()));

    const _dayCron = _cronArray[5];
    _result.push(compareDate(_dayCron, nowDate.getDay()));

    const _yearCron = _cronArray[6];
    _result.push(compareDate(_yearCron, nowDate.getFullYear()));

    return _result.findIndex(item => !item) === -1;
}

// 缺陷版根据当前时间获取cron表达式的下一次符合规则的时间
export function getNextByCron(cronData: string, nowDate = new Date(), _runCount = 1): Date {
    const _originalDate = new Date(nowDate.toString());
    // console.log('--date--次数:', _runCount, '时间为:', nowDate);
    // 循环29次后退出，避免死循环
    if (_runCount < 30) {
        _runCount++;
    } else {
        return null;
    }
    const _cronArray = cronData.split(' ');

    //  补位 秒 分 时 日 月 周 年
    if (_cronArray.length < 7) {
        const complement = 7 - _cronArray.length;

        for (let i = 0; i < complement; i++) {
            _cronArray.push('*');
        }
    }

    // 根据cron计算时间
    const _secondCron = _cronArray[0];
    const _resultSecond = isGreaterCron(_secondCron, nowDate.getSeconds());
    nowDate.setSeconds(_resultSecond.carry * 60 + _resultSecond.time);

    const _minuteCron = _cronArray[1];
    const _resultMinute = isGreaterCron(_minuteCron, nowDate.getMinutes());
    nowDate.setMinutes(_resultMinute.carry * 60 + _resultMinute.time);

    if (_resultMinute.carry > 0) {
        const _t = isGreaterCron(_secondCron, 0);
        nowDate.setSeconds(_t.time);
    }

    const _hourCron = _cronArray[2];
    const _resultHour = isGreaterCron(_hourCron, nowDate.getHours());
    nowDate.setHours(_resultHour.carry * 24 + _resultHour.time);

    const _dateCron = _cronArray[3];
    const _resultdate = isGreaterCron(_dateCron, nowDate.getDate());
    nowDate.setDate(_resultdate.time);
    nowDate.setMonth(_resultdate.carry + nowDate.getMonth());

    const _monthCron = _cronArray[4];
    const _resultmonth = isGreaterCron(_monthCron, nowDate.getMonth());
    nowDate.setMonth(_resultmonth.carry * 12 + _resultmonth.time);

    const _yearCron = _cronArray[6];
    const _resultYear = isGreaterCron(_yearCron, nowDate.getFullYear());

    // 若年需要进位，cron格式有问题
    if (_resultYear.carry === 1) {
        return null;
    }
    nowDate.setFullYear(_resultYear.time);

    // 判断当前位是否有更改，若有变更，其后置位取最小值
    switch (true) {
        case _originalDate.getFullYear() !== nowDate.getFullYear(): {
            const _t = isGreaterCron(_monthCron, 0);
            nowDate.setMonth(_t.time);
        }
        case _originalDate.getMonth() !== nowDate.getMonth(): {
            const _t = isGreaterCron(_dateCron, 0);
            nowDate.setDate(_t.time);
        }
        case _originalDate.getDate() !== nowDate.getDate(): {
            const _t = isGreaterCron(_hourCron, 0);
            nowDate.setHours(_t.time);
        }
        case _originalDate.getHours() !== nowDate.getHours(): {
            const _t = isGreaterCron(_minuteCron, 0);
            nowDate.setMinutes(_t.time);
        }
        case _originalDate.getMinutes() !== nowDate.getMinutes(): {
            const _t = isGreaterCron(_secondCron, 0);
            nowDate.setSeconds(_t.time);
        }
    }

    // 判断当前日期是否符合cron
    if (checkedDateByCron(cronData, nowDate)) {
        return nowDate;
    } else {
        // 若不符合cron，递归，找到当前时间最高位的 * 跟 ? ，并在其上一位增加1
        const _notAllStatueWithStar = cronData.split(' ').lastIndexOf('*');
        const _notAllStatueWithQuestion = cronData.split(' ').lastIndexOf('?');

        switch (Math.max(_notAllStatueWithStar, _notAllStatueWithQuestion)) {
            case 0: {
                nowDate.setMinutes(nowDate.getMinutes() + 1);
                break;
            }
            case 1: {
                nowDate.setHours(nowDate.getHours() + 1);
                break;
            }
            case 2: {
                nowDate.setDate(nowDate.getDate() + 1);
                break;
            }
            case 3: {
                nowDate.setMonth(nowDate.getMonth() + 1);
                break;
            }
            default: {
                nowDate.setSeconds(nowDate.getSeconds() + 1);
            }
        }

        return getNextByCron(cronData, nowDate, _runCount);
    }
}

// 解析逗号表达式
function splicComma(data: string) {
    const _result = data.split(',');
    return _result
}

// 解析cron
function compareDate(cron: string, nowDate: number) {
    const _array = splicComma(cron);
    for (let i = 0; i < _array.length; i++) {
        if (checkedTime(_array[i], nowDate)) {
            return true;
        }
    }
    return false;
}

/**
 * @description 检测时间是否符合cron(颗粒维度)
 * @param second 
 * @param nowSecond 
 * @returns 
 */
function checkedTime(second: string, nowSecond: number): boolean {
    if (second === '*' || second === '?') {
        return true;
    }

    if (second.includes('-')) {
        const { startDate, endDate } = getDateSection(second);
        return Number.parseInt(endDate, 10) >= nowSecond && Number.parseInt(startDate, 10) <= nowSecond;
    }

    return Number.parseInt(second, 10) === nowSecond;
}

// 解析跨度表达式
function getDateSection(sectionDate: string) {
    const _arrayDate = sectionDate.split('-');
    return {
        startDate: _arrayDate[0],
        endDate: _arrayDate[1]
    };
}

/**
 * @description 解析cron并根据cron获取下次最佳执行时间
 * @param cron 
 * @param nowDate 
 * @returns 
 */
function isGreaterCron(cron: string, nowDate: number): { time: number, carry: number } {
    const _array = splicComma(cron);
    const _resultArray = new Array<{ time: number, carry: number }>();
    for (let i = 0; i < _array.length; i++) {
        _resultArray.push(getNextTimeByDate(_array[i], nowDate));
    }

    const zeroCarryArray = _resultArray.filter(item => item.carry === 0);
    if (zeroCarryArray.length > 0) {
        return {
            time: Math.min(...zeroCarryArray.map(item => item.time)),
            carry: 0,
        };
    } else {
        return {
            time: Math.min(..._resultArray.filter(item => item.carry === 1).map(item => item.time)),
            carry: 1,
        };
    }

}

/**
 * @description 获取下次运行时间(颗粒维度)
 * @param second cron时间
 * @param nowSecond 当前时间
 * @return time 返回时间
 * @return carry 是否需要进位
 */
function getNextTimeByDate(second: string, nowSecond: number): { time: number, carry: number } {
    const _second = Number.parseInt(second, 10);
    if (second === '*' || second === '?') {
        return {
            time: nowSecond,
            carry: 0,
        };
    }

    if (second.includes('-')) {
        const { startDate, endDate } = getDateSection(second);
        if (Number.parseInt(endDate, 10) >= nowSecond && Number.parseInt(startDate, 10) <= nowSecond) {
            return { time: nowSecond, carry: 0 };
        } else {
            const _minTime = Math.min(Number.parseInt(endDate, 10), Number.parseInt(startDate, 10));
            return {
                time: _minTime,
                carry: _minTime > nowSecond ? 0 : 1
            };
        }
    }

    if (_second === nowSecond) {
        return {
            time: nowSecond,
            carry: 0
        };
    } else if (_second < nowSecond) {
        return {
            time: _second,
            carry: 1
        };
    } else {
        return {
            time: _second,
            carry: 0
        };
    }
}