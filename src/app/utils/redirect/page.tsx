'use client';

import Script from 'next/script';
import axios from 'axios';

// https://cp-public-test.wukongacademy.com/public/api/wechat/share/corp/js/sdk/config

const RedirectPage = () => {
	return (
		<>
			<Script
				src="//res.wx.qq.com/open/js/jweixin-1.6.0.js"
				onLoad={() => {
					axios
						.get(
							'https://cp-public-test.wukongacademy.com/public/api/wechat/share/corp/js/sdk/config',
						)
						.then((res) => {
							window.wx.config({
								beta: true, // 必须这么写，否则wx.invoke调用形式的jsapi会有问题
								debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
								appId: 'wwe0a041436f827b20', // 必填，企业微信的corpID，必须是本企业的corpID，不允许跨企业使用
								timestamp: '', // 必填，生成签名的时间戳
								nonceStr: '', // 必填，生成签名的随机串
								signature: res, // 必填，签名，见 附录-JS-SDK使用权限签名算法
								jsApiList: ['openUserProfile'], // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
							});

							window.wx.ready(() => {
								window.wx.invoke(
									'openUserProfile',
									{
										type: 1, //1表示该userid是企业成员，2表示该userid是外部联系人
										userid: 'wmEAlECwAAHrbWYDetiu3Af13xlYDAAA', //可以是企业成员，也可以是外部联系人
									},
									function (res: { err_msg: string }) {
										console.log(res, 999);
										if (res.err_msg != 'openUserProfile:ok') {
											//错误处理
											console.log(res);
										}
									},
								);
							});
						});
				}}
			/>
		</>
	);
};

export default RedirectPage;
