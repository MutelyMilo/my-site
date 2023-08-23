'use client';

import axios from 'axios';
import * as ww from '@wecom/jssdk';
import { useEffect } from 'react';

// https://cp-public-test.wukongacademy.com/public/api/wechat/share/corp/js/sdk/config
// https://cp-public-test.wukongacademy.com/api/tm/organize/js_sdk

const getTicket = () => {
	return axios
		.get(
			'https://cp-public-test.wukongacademy.com/api/wechat/share/corp/js/sdk/config',
		)
		.then((res) => res);
};

const RedirectPage = () => {
	useEffect(() => {
		axios
			.get(
				'https://cp-public-test.wukongacademy.com/public/api/wechat/share/corp/js/sdk/config',
			)
			.then((res: string) => {
				ww.register({
					corpId: 'wwe0a041436f827b20',
					jsApiList: ['openUserProfile'],
					getConfigSignature() {
						return ww.getSignature(res);
					},
				});
				ww.openUserProfile({
					type: 1,
					userid: 'wmEAlECwAAHrbWYDetiu3Af13xlYDAAA',
					success(res) {
						console.log(res);
					},
					fail(res) {
						console.log(res);
					},
				}).then((res) => {
					console.log(res);
				});
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
	return (
		<>
			<div>waiting</div>
		</>
	);
};

export default RedirectPage;
