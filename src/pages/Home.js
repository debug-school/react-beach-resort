import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../components/Hero.js';
import Banner from '../components/Banner.js'
import Services from '../components/Services.js';
import FeaturedRooms from '../components/FeaturedRooms.js';
import StyledHero from '../components/StyledHero.js';

const Home = () => {
	return (
		<React.Fragment>
			<Hero>

				<Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299" >
					<Link to="/rooms" className="btn-primary">
						our rooms
					</Link>
				</Banner>

			</Hero>

			<Services />

			<FeaturedRooms />
		</React.Fragment>
	)
}

export default Home;