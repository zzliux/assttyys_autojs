import { IPushClient } from './IPushClient';

export class OneBotPushClient implements IPushClient {

	name = 'OneBot';
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
	push(_data, _config) {
		// TODO
	}
}