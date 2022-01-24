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

    // 初始化
    init() {
        if (!!this.instacne) return;
        let self = this;
        self.instacne = floaty.rawWindow(`
            <frame>
                <canvas id="board"/>
            </frame>
        `);
        ui.post(() => {
            self.instacne.setTouchable(false);
            self.instacne.setSize(-1, -1);
        })
        
        // 命中框画笔（绿）
        var paintGreen = new Paint();
        paintGreen.setAntiAlias(true);//抗锯齿
        paintGreen.setAlpha(255);//0~255透明度
        paintGreen.setFakeBoldText(true);
        paintGreen.setStrokeWidth(3);
        paintGreen.setStyle(Paint.Style.STROKE);
        paintGreen.setColor(colors.parseColor("#FF00FF00"));

        // 未命中框画笔（红）
        var paintRed = new Paint();
        paintRed.setAntiAlias(true);//抗锯齿
        paintRed.setAlpha(255);//0~255透明度
        paintRed.setFakeBoldText(true);
        paintRed.setStrokeWidth(3);
        paintRed.setStyle(Paint.Style.STROKE);
        paintRed.setColor(colors.parseColor("#FFFF0000"));

        // 点击区域画笔（橙）
        var paintOrange = new Paint();
        paintOrange.setAntiAlias(true);//抗锯齿
        paintOrange.setAlpha(255);//0~255透明度
        paintOrange.setFakeBoldText(true);
        paintOrange.setStrokeWidth(3);
        paintOrange.setStyle(Paint.Style.STROKE);
        paintOrange.setColor(colors.parseColor("#FF963200"));

        var paintLine = new Paint();
        paintOrange.setAntiAlias(true);//抗锯齿
        paintOrange.setAlpha(255);//0~255透明度
        paintOrange.setFakeBoldText(true);
        paintOrange.setStrokeWidth(1);
        paintOrange.setStyle(Paint.Style.STROKE);
        paintOrange.setColor(colors.parseColor("#FF963200"));
        

        self.instacne.board.on("draw", function(canvas) {
            canvas.drawColor(0, android.graphics.PorterDuff.Mode.CLEAR);
            let toDraw = self.toDraw || [];
            // if (toDraw.length) {
            //     console.log(`准备绘制：${JSON.stringify(toDraw)}`);
            // }
            let pts = [];
            toDraw.forEach(item => {
                const { color, region } = item;
                let paint = null;
                switch (color) {
                    case 'green': paint = paintGreen; break;
                    case 'red': paint = paintRed; break;
                    case 'orange': paint = paintOrange; break;
                }
                if (!paint) return;
                // console.log(`绘制：${JSON.stringify(item)}`);
                pts = [...pts, device.width / 2, 0, parseInt((region[0] + region[2]) / 2), region[1]];
                canvas.drawRect(...region, paint);
            });
            canvas.drawLines(pts, paintLine);
        });
        this.thread = threads.start(function () {
            //设置一个空的定时来保持线程的运行状态
            setInterval(function () {}, 1000);
        });
    },

    /**
     * 清空上次绘制，绘制本次数组
     * @param {*} arr 
     * @param {*} time 
     */
    draw(arr, time) {
        let self = this;
        if (this.toDraw && this.toDraw.length) {
            // 有正在绘制的，暂不绘制新的
        } else {
            this.toDraw = arr;
            // 使用本线程中的setTimeout，防止调用时线程无法切入
            this.thread.setTimeout(function () {
                self.toDraw = null;
            }, time);
        }
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