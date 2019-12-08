Date.prototype.format = function(fmt){
	function hackZero(str, length){
		if(!length) length = 2;
		str = str.toString();
		while(str.length < length){
			str = '0' + str;
		}
		return str;
	}
	var date    = this.getDate(),//1-31
		day     = this.getDay(),//0-6 周日到周6
		month   = this.getMonth(),//0-11
		year    = this.getFullYear(),
		hours   = this.getHours(),
		minutes = this.getMinutes(),
		seconds = this.getSeconds();
	var fmter = {
		// 日
		// 月份中的第几天，有前导零的 2 位数字	01 到 31
		d: hackZero(date),
		// 	星期中的第几天，文本表示，3 个字母	Mon 到 Sun
		D: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][day],
		// 	月份中的第几天，没有前导零	1 到 31
		j: date.toString(),
		// （“L”的小写字母）	星期几，完整的文本格式	Sunday 到 Saturday
		l: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day],
		// ISO-8601 格式数字表示的星期中的第几天
		N: (day || (7)).toString(),
		// 每月天数后面的英文后缀，2 个字符。st，nd，rd 或者 th。可以和 j 一起用
		S: (date<4?['','st','nd','rd'][date]:'th'),
		// 星期中的第几天，数字表示	0（表示星期天）到 6（表示星期六）
		w: day.toString(),
		// 年份中的第几天	0 到 365
		//z: 'z',// TODO
		// 星期
		// 	ISO-8601 格式年份中的第几周，每周从星期一开始	例如：42（当年的第 42 周）
		//W： 'W',// TODO
		// 月
		// 月份，完整的文本格式，例如 January 或者 March	January 到 December
		F: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'Octorber', 'November', 'December'][month],
		// 数字表示的月份，有前导零	01 到 12
		m: hackZero(month+1),
		// 三个字母缩写表示的月份	Jan 到 Dec
		M: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec'][month],
		// 数字表示的月份，没有前导零	1 到 12
		n: (month+1).toString(),
		// 指定的月份有几天	28 到 31
		//t: 't', // TODO
		// 年
		// 是否为闰年	如果是闰年为 1，否则为 0
		L: ((year%4===0&&year%100!==0)||(year%400===0))?'1':'0',
		// ISO-8601 格式年份数字。这和 Y 的值相同，只除了如果 ISO 的星期数（W）属于前一年或下一年，则用那一年。（PHP 5.1.0 新加）	Examples: 1999 or 2003
		//o: 'o', // TODO
		// 4 位数字完整表示的年份	例如：1999 或 2003
		Y: year.toString(),
		// 2 位数字表示的年份	例如：99 或 03
		y: hackZero(year%100),
		// 时间
		// 小写的上午和下午值	am 或 pm
		a: hours<12?'am':'pm',
		// 大写的上午和下午值	AM 或 PM
		A: hours<12?'AM':'PM',
		// Swatch Internet 标准时	000 到 999
		//B: 'B' // TODO
		// 小时，12 小时格式，没有前导零	1 到 12
		g: ((hours%12===0)?12:(hours%12)).toString(),
		// 小时，24 小时格式，没有前导零	0 到 23
		G: hours.toString(),
		// 小时，12 小时格式，有前导零	01 到 12
		h: hackZero((hours%12===0)?12:(hours%12)),
		// 小时，24 小时格式，有前导零	00 到 23
		H: hackZero(hours),
		// 有前导零的分钟数	00 到 59>
		i: hackZero(minutes),
		// 秒数，有前导零	00 到 59>
		s: hackZero(seconds),
		// 毫秒 示例: 654321
		//u: 'u' // TODO
		// 时区
		// TODO
	}
	var keys = [];
	for(var key in fmter){
		keys.push(key);
	}
	var ret = '';
	for(var i=0; i<fmt.length; i++){
		ret += fmter[fmt.charAt(i)]||fmt.charAt(i);
	}
	return ret;
}

module.exports = {};