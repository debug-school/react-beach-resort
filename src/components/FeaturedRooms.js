import React, {useContext} from 'react';
import {RoomContext} from '../RoomContext.js';
import Title from './Title.js';
import Room from './Room.js';
import Loading from './Loading.js';

const FeaturedRooms = () => {
	const {loading, featuredRooms : rooms} = useContext(RoomContext);


	return (
		<section className="featured-rooms">
			<Title title="featured rooms" />
			
			<div className="featured-rooms-center">
				{
					loading ? <Loading/>
					:( rooms.map( (room)=> <Room key={room.id} room={room} /> ) )
				}
			</div>
		</section>
	)
}

export default FeaturedRooms;