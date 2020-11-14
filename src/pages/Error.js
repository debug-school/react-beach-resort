import React from 'react';
import Hero from '../components/Hero.js';
import Banner from '../components/Banner.js'
import {Link} from 'react-router-dom';
const Error = () => {
	return (
		<Hero>
			<Banner title="404" subtitle="page not found">
				<Link to="/" className="btn-primary">
					back to home
				</Link>
			</Banner>
		</Hero>
	)
}

export default Error;