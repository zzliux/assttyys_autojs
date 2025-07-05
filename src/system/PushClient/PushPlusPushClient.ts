import { bmpToBase64, scaleBmp } from '@/common/toolAuto';
import { AbstractPushClient, Message } from './AbstractPushClient';

export default class PushPlusPushClient extends AbstractPushClient {

	name = 'pushplus';

	configDefine = [{
		desc: 'token',
		name: 'pushplus_token',
		type: 'text',
		default: ''
	}, {
		desc: '推送内容前缀',
		name: 'msgPush_prefix',
		type: 'text',
		default: '[assttyys]'
	}];

	push(data: Message[], config: Record<string, string>) {
		const { pushplus_token, msgPush_prefix } = config;
		if (!pushplus_token) {
			throw new Error('未配置pushplus_token');
		}
		const firstText = data.find(item => item.type === 'text')?.data || 'ASSTTYYS消息通知';
		return http.postJson('https://pushplus.plus/send', {
			// @ts-expect-error d.ts文件问题
			token: pushplus_token,
			title: `${msgPush_prefix} ${firstText}`,
			content: data.map(item => {
				if (item.type === 'text') return `<p>${item.data}</p>`;
				else if (item.type === 'image')
					return `<img src="data:image/png;base64,${bmpToBase64(scaleBmp(item.data, 0.05))}" />`;
				return '';
			}).join()// `<p>${options.text}</p><img src="data:image/png;base64,${b64str}" />`
		});
	}
}