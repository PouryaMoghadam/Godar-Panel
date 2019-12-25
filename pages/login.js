import React, { Component } from 'react';
import Link from 'next/link';
import {axiios} from '../_APIs';
import PropTypes from 'prop-types'
import { i18n, withTranslation } from '../config/i18n.js'
import {CopyrightV1 , LangSwitcherV1, InputText} from '../components';

class Login extends Component {
	render() {
		const {t} = this.props;
		return (
			<div className='app__login'>
				<LangSwitcherV1 />
				<div className="form__holder">
					<div className="form__title--text">
						{t('form__title')}
					</div>
					<div className="form__login--inputs">
						<InputText
							direction={'rtl'}
							label={'ایمیل یا نام کاربری شما'}
							valid={'true'}
							validationLabel={'ایمیل یا نام کاربری وارد شده معتبر نمی باشد'}
						/>
						<span className='__or--text'>{t('or--text')}</span>
						google
					</div>
					<div className="form__register--link">
						<Link href='/login'>
							<a>{t('register__link')}</a>
						</Link>
					</div>
				</div>
				<CopyrightV1 />
			</div>
		);
	}
}

Login.getInitialProps = async () => ({
	namespacesRequired: ['login'],
});

Login.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withTranslation('login')(Login)