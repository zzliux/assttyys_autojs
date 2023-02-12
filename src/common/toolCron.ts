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

export function getNextByCron(cronData: string, nowDate = new Date(), _runCount = 1): Date {
    if (_runCount < 30) {
        _runCount++;
    } else {
        return null;
    }
    const _cronArray = cronData.split(' ');

    //  补位
    if (_cronArray.length < 7) {
        const complement = 7 - _cronArray.length;

        for (let i = 0; i < complement; i++) {
            _cronArray.push('*');
        }
    }

    const _secondCron = _cronArray[0];
    const _resultSecond = isGreaterCron(_secondCron, nowDate.getSeconds());
    nowDate.setSeconds(_resultSecond.carry * 60 + _resultSecond.time);

    const _minuteCron = _cronArray[1];
    const _resultMinute = isGreaterCron(_minuteCron, nowDate.getMinutes());
    nowDate.setMinutes(_resultMinute.carry * 60 + _resultMinute.time);

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
    if (_resultYear.carry === 1) {
        return null;
    }
    nowDate.setFullYear(_resultYear.time);

    if (checkedDateByCron(cronData, nowDate)) {
        return nowDate;
    } else {
        const _notAllStatue = cronData.split(' ').findIndex(item => item !== '*' && item !== '?');
        switch (_notAllStatue) {
            case 0: {
                nowDate.setSeconds(nowDate.getSeconds() + 1);
                break;
            }
            case 1: {
                nowDate.setMinutes(nowDate.getMinutes() + 1);
                break;
            }
            case 2: {
                nowDate.setHours(nowDate.getHours() + 1);
                break;
            }
            case 3: {
                nowDate.setDate(nowDate.getDate() + 1);
                break;
            }
            case 4: {
                nowDate.setMonth(nowDate.getMonth() + 1);
                break;
            }
        }

        return getNextByCron(cronData, nowDate, _runCount);
    }
}

function splicComma(data: string) {
    const _result = data.split(',');
    return _result
}

function compareDate(part: string, nowDate: number) {
    const _array = splicComma(part);
    for (let i = 0; i < _array.length; i++) {
        if (checkedTime(_array[i], nowDate)) {
            return true;
        }
    }
    return false;
}

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

function getDateSection(sectionDate: string) {
    const _arrayDate = sectionDate.split('-');
    return {
        startDate: _arrayDate[0],
        endDate: _arrayDate[1]
    };
}

function isGreaterCron(part: string, nowDate: number): { time: number, carry: number } {
    const _array = splicComma(part);
    const _resultArray = new Array<{ time: number, carry: number }>();
    for (let i = 0; i < _array.length; i++) {
        _resultArray.push(checkedByGetNextTime(_array[i], nowDate));
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

function checkedByGetNextTime(second: string, nowSecond: number): { time: number, carry: number } {
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