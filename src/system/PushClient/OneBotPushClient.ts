import { bmpToBase64, scaleBmp } from '@/common/toolAuto';
import { AbstractPushClient, Message } from './AbstractPushClient';

export default class OneBotPushClient extends AbstractPushClient {

	name = 'oneBot';
	configDefine = [{
		desc: 'OneBot版本',
		name: 'oneBot_version',
		type: 'list',
		data: ['11', '12'],
		default: '12'
	}, {
		desc: '推送地址',
		name: 'oneBot_url',
		type: 'text',
		default: ''
	}, {
		desc: '推送内容前缀',
		name: 'msgPush_prefix',
		type: 'text',
		default: '[assttyys]'
	}];
	push(data: Message[], config: Record<string, string>) {
		const { oneBot_version, oneBot_url, msgPush_prefix } = config;
		if (!oneBot_url || !oneBot_url.startsWith('http')) {
			throw new Error('OneBot推送地址未配置或配置错误');
		}
		const OneBotVersion = oneBot_version || '12';
		const msgData = [{
			type: 'text',
			data: msgPush_prefix
		}, ...data];
		const message = OneBotVersion !== '12' ? msgData.map(item => {
			const { type, data } = item;
			let dataStr;
			if (type === 'image') {
				dataStr = bmpToBase64(scaleBmp(data, 0.5));
			}
			return type === 'text' ? data : `[CQ:image,file=base64://${dataStr}]`
		}).join('') : msgData.map(item => {
			const { type, data } = item;
			let dataStr;
			if (type === 'image') {
				dataStr = bmpToBase64(scaleBmp(data, 0.5));
			}
			return {
				type,
				data: {
					[type === 'text' ? 'text' : 'file_id']: type === 'text' ? data : `base64://${dataStr}`
				}
			}
		});
		return http.postJson(oneBot_url, {
			// @ts-expect-error d.ts文件问题
			message: message
		});
	}
}