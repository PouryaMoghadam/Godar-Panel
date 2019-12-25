import React, { Component } from 'react';
import Link from 'next/link';

class CopyrightV1 extends Component {
	render() {
		return (
			<div className="copyright__holder">
				<span>
					<Link href="">
						<a target='_blank'>قوانین و مقررات</a>
					</Link>
				</span>
				<span>
					<Link href="">
						<a target='_blank'>شرایط استفاده کاربران</a>
					</Link>
				</span>
			</div>
		);
	}
}

export default CopyrightV1;