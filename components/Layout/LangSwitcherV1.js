import React, { Component } from 'react';
import { i18n, Link, withTranslation } from '../../config/i18n.js'

class LangSwitcherV1 extends Component {
	render() {
		return (
			<div className="langSwitcher__holder">
				<span
					onClick={() => i18n.changeLanguage('en')}
				>
					En
				</span>
				|
				<span
					onClick={() => i18n.changeLanguage('fa')}
				>
					Fa
				</span>
				<span
					className='langSwitcher__button--active'
				/>
				<style jsx>{`
						.langSwitcher__button--active {
							left: ${(i18n.language === 'fa' ? '54px' : '0px')}
						}
					`}
				</style>
			</div>
		);
	}
}

export default LangSwitcherV1;