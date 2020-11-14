import React, {useState} from 'react';

import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title.js';


const Services = () => {
	const [services, setServices] = useState([
			{
				icon: <FaCocktail />,
				title : "free cocktails",
				info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, excepturi."
			},
			{
				icon: <FaHiking />,
				title : "endless hikings",
				info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, excepturi."
			},
			{
				icon: <FaShuttleVan />,
				title : "free shuttles",
				info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, excepturi."
			},
			{
				icon: <FaBeer />,
				title : "strongest beer",
				info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, excepturi."
			}
		]);

	return (
		<section className="services">

			<Title title="services" />

			<div className="services-center">
				{
					services.map((item,index)=>{
						return (
							<article key={index} className="service">
								<span> {item.icon} </span>
								<h6> {item.title} </h6>
								<p> {item.info} </p>
							</article>
						);
					})
				}
			</div>
			
		</section>
	)
}

export default Services;