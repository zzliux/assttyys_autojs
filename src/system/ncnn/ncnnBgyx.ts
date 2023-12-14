import drawFloaty from '@/system/drawFloaty';
import _s from '@/system/ncnn/yolov5v8ncnn';

let t1, t2;
function bboxDraw(bbox) {
	t1 = t1 || new Date().getTime();
	const toDraw = [];
	for (let i2 = 0; i2 < bbox.length; i2++) {
		const box = bbox[i2];
		const x1 = box[0];
		const y1 = box[1];
		const x2 = box[2];
		const y2 = box[3];
		const prob = box[4];
		const label = box[5];
		toDraw.push({
			region: [x1, y1, x2, y2],
			color: 'red',
			text: _s.labels[label] + ' ' + sixNum(prob, 3)
		});

	}
	t2 = new Date().getTime();
	drawFloaty.draw(toDraw, (t2 - t1));
	t1 = t2;
}

function sixNum(num, retain) {
	const cont = Math.pow(10, retain);
	return Math.floor(num * cont) / cont;
}

let instance = null;
export default {

	prob_threshold: 0.3, // 预测值，返回大于该值的锚框，该值越大返回的锚框数量越少
	nms_thresh: 0.36, // 非极大值抑制，返回的锚框中重合面积不大于该值，该值越大返回的锚框重合率越高

	init() {
		instance = _s.yolov5('bgyx', 320); // 自己训练的模型
	},

	detect(img) {
		const t1 = new Date().getTime();
		const bbox = instance.detect(img.mat, this.prob_threshold, this.nms_thresh);
		console.log('用时:' + (new Date().getTime() - t1), '找到:' + bbox.length);
		if (drawFloaty.instacne) {
			bboxDraw(bbox);
		}
	}
}