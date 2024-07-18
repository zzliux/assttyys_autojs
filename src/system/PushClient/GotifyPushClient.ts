import { bmpToBase64, escapeMarkdown, scaleBmp } from '@/common/toolAuto';
import { AbstractPushClient, Message } from './AbstractPushClient';

export default class GotifyPushClient extends AbstractPushClient {

	name = 'Gotify';

	configDefine = [{
		desc: 'gotify的token',
		name: 'gotify_user_token',
		type: 'text',
		default: ''
	}, {
		desc: '推送地址',
		name: 'gotify_url',
		type: 'text',
		default: ''
	}, {
		desc: '推送内容前缀',
		name: 'msgPush_prefix',
		type: 'text',
		default: '[assttyys]'
	}];

	push(data: Message[], config: Record<string, string>) {
		const { gotify_user_token, gotify_url, msgPush_prefix } = config;
		if (!gotify_url) {
			throw new Error('未配置gotify_url');
		}
		http.postJson(`${gotify_url}?token=${gotify_user_token}`, {
			// @ts-expect-error d.ts文件问题
			title: msgPush_prefix,
			priority: 8,    // 消息等级 https://github.com/gotify/android
			extras: {
				'client::display': {
					contentType: 'text/markdown'    //  将message标记为markdown
				}
			},
			message: data.map(item => {
				if (item.type === 'text') return escapeMarkdown(item.data);
				else if (item.type === 'image')
					return `![](data:image/png;base64,${bmpToBase64(scaleBmp(item.data, 0.3))})`;
				return '';
			}).join('\n') // `${options.text}  \n  ![](data:image/png;base64,${b64str})`
		});
	}
}