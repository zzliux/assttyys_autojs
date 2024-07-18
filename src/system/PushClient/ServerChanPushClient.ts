import { bmpToBase64, escapeMarkdown, scaleBmp } from '@/common/toolAuto';
import { AbstractPushClient, Message } from './AbstractPushClient';


export default class ServerChanPushClient extends AbstractPushClient {
	name = 'Server酱';
	configDefine = [{
		desc: 'SendKey',
		name: 'ServerChan_SendKey',
		type: 'text',
		default: '',
	}, {
		desc: '推送内容前缀',
		name: 'msgPush_prefix',
		type: 'text',
		default: '[assttyys]'
	}, {
		desc: '图片缩放比例',
		name: 'msgPush_scale',
		type: 'text',
		default: '0.1'
	}];
	push(data: Message[], config: Record<string, string>) {
		const { ServerChan_SendKey, msgPush_prefix, msgPush_scale } = config;
		const msgData: Message[] = [{ type: 'text', data: msgPush_prefix }, ...data];
		const short = msgData.map((item) => item.type === 'text' ? item.data : '').join('');
		const bodyJson = {
			title: short,
			short: short,
			desp: msgData.map((item) => {
				if (item.type === 'text') return escapeMarkdown(item.data);
				else if (item.type === 'image')
					return `![](data:image/png;base64,${bmpToBase64(scaleBmp(item.data, parseFloat(msgPush_scale) || 0.1))})`;
				return '';
			}).join('\n\n')
			// short: msgData.map(item => {
			// 	if (item.type === 'text') return `<p>${item.data}</p>`;
			// 	else if (item.type === 'image')
			// 		return `<img src="data:image/png;base64,${bmpToBase64(scaleBmp(item.data, 0.05))}" />`;
			// 	return '';
			// }).join()
		};
		console.log(`正文长度：${bodyJson.desp.length}`);
		// @ts-expect-error d.ts文件问题
		http.postJson(`https://sctapi.ftqq.com/${ServerChan_SendKey}.send`, bodyJson);
	}
}