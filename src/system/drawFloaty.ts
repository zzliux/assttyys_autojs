/**
 * 绘制用悬浮，用于
 * 1. 绘制desc命中点与未命中点(script.js)
 * 3. 绘制多点找色命中区域(script.js)
 * 2. 绘制点击区域与实际点击点(helperBridge.js)
 */
const drawFloaty = {
	// 悬浮实例
	instacne: null,
	thread: null,
	toDraw: [],
	option: {
		statusBarHeight: 0
	},

	// 初始化
	init(option?) {
		if (this.instacne) return;

		if (option) {
			this.option.statusBarHeight = option.statusBarHeight || 0
		}

		const self = this;
		self.instacne = floaty.rawWindow(`
            <frame>
                <canvas id="board"/>
            </frame>
        `);
		ui.post(() => {
			self.instacne.setTouchable(false);
			self.instacne.setSize(-1, -1);
		});

		// 命中框画笔（绿）
		const paintGreen = new android.graphics.Paint();
		paintGreen.setAntiAlias(true); // 抗锯齿
		paintGreen.setAlpha(255); // 0~255透明度
		paintGreen.setFakeBoldText(true);
		paintGreen.setStrokeWidth(2);
		paintGreen.setStyle(android.graphics.Paint.Style.STROKE);
		paintGreen.setColor(colors.parseColor('#FF00FF00'));
		const textPaintGreen = new android.graphics.Paint();
		textPaintGreen.setTextSize(15);
		textPaintGreen.setColor(colors.parseColor('#FF00FF00'));

		// 未命中框画笔（红）
		const paintRed = new android.graphics.Paint();
		paintRed.setAntiAlias(true); // 抗锯齿
		paintRed.setAlpha(255); // 0~255透明度
		paintRed.setFakeBoldText(true);
		paintRed.setStrokeWidth(2);
		paintRed.setStyle(android.graphics.Paint.Style.STROKE);
		paintRed.setColor(colors.parseColor('#FFFF0000'));
		const textPaintRed = new android.graphics.Paint();
		textPaintRed.setTextSize(15);
		textPaintRed.setColor(colors.parseColor('#FFFF0000'));

		// 点击区域画笔（橙）
		const paintOrange = new android.graphics.Paint();
		paintOrange.setAntiAlias(true); // 抗锯齿
		paintOrange.setAlpha(255); // 0~255透明度
		paintOrange.setFakeBoldText(true);
		paintOrange.setStrokeWidth(2);
		paintOrange.setStyle(android.graphics.Paint.Style.STROKE);
		paintOrange.setColor(colors.parseColor('#FF963200'));
		const textPaintOrange = new android.graphics.Paint();
		textPaintOrange.setTextSize(15);
		textPaintOrange.setColor(colors.parseColor('#FF963200'));

		const paintLine = new android.graphics.Paint();
		paintLine.setAntiAlias(true);// 抗锯齿
		paintLine.setAlpha(255);// 0~255透明度
		paintLine.setFakeBoldText(true);
		paintLine.setStrokeWidth(1);
		paintLine.setStyle(android.graphics.Paint.Style.STROKE);
		paintLine.setColor(colors.parseColor('#FF963200'));

		self.instacne.board.on('draw', function(canvas) {
			canvas.drawColor(0, android.graphics.PorterDuff.Mode.CLEAR);
			const toDraw = self.toDraw || [];
			// if (toDraw.length) {
			//     console.log(`准备绘制：${JSON.stringify(toDraw)}`);
			// }
			let toMove = 0;
			let pts = [];
			const now = new Date().getTime();
			for (const item of toDraw) {
				if (now >= item.et) {
					toMove++
					continue;
				}
				const color = item.color;
				const region = item.region;
				let paint = null;
				let textPaint = null;
				switch (color) {
				case 'green':
					paint = paintGreen;
					textPaint = textPaintGreen;
					break;
				case 'red':
					paint = paintRed;
					textPaint = textPaintRed;
					break;
				case 'orange':
					paint = paintOrange;
					textPaint = textPaintOrange;
					break;
				}
				if (!paint) return;
				// console.log(`绘制：${JSON.stringify(item)}`);
				pts = [...pts, device.width / 2, 0, Math.floor((region[0] + region[2]) / 2), region[1]];
				canvas.drawRect(...region, paint);
				if (item.text) {
					canvas.drawText(item.text, region[0], region[3] + 15, textPaint);
				}
			}
			self.toDraw.splice(0, toMove)
			canvas.drawLines(pts, paintLine);
		});
		this.thread = threads.start(function () {
			// 设置一个空的定时来保持线程的运行状态
			setInterval(function () {}, 1000);
		});
	},

	/**
     * 绘制数组
     * @param {*} arr
     * @param {*} time
     */
	draw: function(arr, time) {
		arr.forEach(i => {
			i.region[1] = i.region[1] - this.option.statusBarHeight;
			i.region[3] = i.region[3] - this.option.statusBarHeight;
			i.et = new Date().getTime() + time;
		});
		this.toDraw = this.toDraw.concat(arr);
	},

	// 销毁
	destroy() {
		if (this.instacne) {
			this.instacne.close();
			this.instacne = null;
		}
		if (this.thread) {
			this.thread.interrupt();
			this.thread = null;
		}
	}
}

export default drawFloaty;