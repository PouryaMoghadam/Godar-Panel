import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '../styles/sass/mainRTL.sass';
import { appWithTranslation } from '../config/i18n.js';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<>
				<Head>
					<title>Godar FrameWork</title>
					<meta name='language' content='fa' />
					<link rel='stylesheet' type='text/css' href='../static/fonts/IranSans/IranSans.css' />
					<link rel='stylesheet' type='text/css' href='../static/fonts/IranYekan/IranYekan.css' />
					<link rel='stylesheet' type='text/css' href='../static/fonts/Montserrat/Montserrat.css' />
				</Head>
				<div className='app'><Component {...pageProps} /></div>
			</>
		);
	}
}

export default appWithTranslation(MyApp);
