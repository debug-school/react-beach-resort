import React, {useContext} from 'react';
import RoomsFilter from './RoomsFilter.js';
import RoomList from './RoomList.js';
import {RoomContext} from '../RoomContext.js';
import Loading from './Loading.js';

const RoomsContainer = () => {
	const {rooms, sortedRooms, loading ,searchParam} = useContext(RoomContext);


	if(loading){ return <Loading /> }

	return (
		<div>
			<RoomsFilter rooms={rooms} />
			<RoomList rooms={sortedRooms} />
		</div>
	)
}

export default RoomsContainer;