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
	}, {
		desc: '推送图片缩放大小，取值范围(0,1]，1为原始大小图片，默认值0.5',
		name: 'msgPush_imageScale',
		type: 'text',
		default: '0.5'
	}];
	push(data: Message[], config: Record<string, string>) {
		const { oneBot_version, oneBot_url, msgPush_prefix, msgPush_imageScale } = config;
		if (!oneBot_url || !oneBot_url.startsWith('http')) {
			throw new Error('OneBot推送地址未配置或配置错误');
		}
		console.log()
		const OneBotVersion = oneBot_version || '12';
		const msgData = [{
			type: 'text',
			data: msgPush_prefix
		}, ...data];
		const message = OneBotVersion !== '12' ? msgData.map(item => {
			const { type, data } = item;
			let dataStr;
			if (type === 'image') {
				dataStr = bmpToBase64(scaleBmp(data, parseFloat(msgPush_imageScale || '0.5')));
			}
			return type === 'text' ? data : `[CQ:image,file=base64://${dataStr}]`
		}).join('') : msgData.map(item => {
			const { type, data } = item;
			let dataStr;
			if (type === 'image') {
				dataStr = bmpToBase64(scaleBmp(data, parseFloat(msgPush_imageScale || '0.5')));
			}
			return {
				type,
				data: {
					[type === 'text' ? 'text' : 'file_id']: type === 'text' ? data : `base64://${dataStr}`
				}
			}
		});
		return http.postJson(oneBot_url, {
			...getAllParamsFromUrl(oneBot_url),
			// group_id: getParamFromURL('group_id', oneBot_url),
			// @ts-expect-error d.ts文件问题
			message: message
		});
	}
}

function getAllParamsFromUrl(url: string): Record<string, string> {
	const ret: Record<string, string> = {};
	let queryString = url;
	if (url.indexOf('?')) {
		queryString = url.split('?')[1];
	}
	const parts = queryString.split('&');
	for (const part of parts) {
		const [k, v] = part.split('=').map(str => decodeURIComponent(str));
		ret[k] = v;
	}
	return ret;
}

// function getParamFromURL(key: string, url: string): string {
// 	return getAllParamsFromUrl(url)[key];
// }