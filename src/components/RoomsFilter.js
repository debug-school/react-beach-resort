import React, {useContext} from 'react';
import {RoomContext} from '../RoomContext.js';
import Title from './Title.js';

const getUniqueTypeOrSize = (items,value)=>{
	return [...new Set( items.map( (item)=> item[value] ) )];
}

const RoomsFilter = ({rooms}) => {
	const {type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, handleChange} = useContext(RoomContext);

	// get types for filter
	let types = getUniqueTypeOrSize(rooms, 'type');
	types= ["all", ...types];
	//jsx for filter by search
	types = types.map((type,index)=>{
		return <option value={type} key={index}> {type} </option>
	});
	//end of get types for filter

	//get guest capacity for filter
	let people = getUniqueTypeOrSize(rooms, "capacity");
	people = people.map((item,index)=>{
		return <option value={item} key={index}> {item} </option>
	}) 
	//endof get guest capacity for filter


	return (
		<section className="filter-container">

			<Title title="search rooms" />

			<form className="filter-form">
				{/* select type */}
				<div className="form-group">
					<label htmlFor="type">room type</label>
					<select 
						name="type" 
						id="type" 
						value={type}
						className="form-control"
						onChange={handleChange}
					>
						{types}
					</select>
				</div>
				{/* end of select type */}

				{/* guests capacity */}
				<div className="form-group">
					<label htmlFor="capacity">Guests</label>
					<select 
						name="capacity" 
						id="capacity" 
						value={capacity}
						className="form-control"
						onChange={handleChange}
					>
						{people}
					</select>
				</div>
				{/* end of guests capacity */}

				{/* room price */}
				<div className="form-group">
					<label htmlFor="price">room price ${price}</label>
					<input
				 		type="range"
				 		name="price"
				 		id="price"
				 		min={minPrice}
				 		max={maxPrice}
				 		onChange={handleChange}
				 		value={price}
				 		className="form-control"
				 	/>
				</div>
				{/* end of room price */}

				{/* size */}
				<div className="form-group">
					<label htmlFor="size">room size</label>
					<div className="size-inputs">
						<input
							type="number"
							name="minSize"
							id="size"
							value={minSize}
							onChange={handleChange}
							className="size-input"
						/>
						<input
							type="number"
							name="maxSize"
							id="size"
							value={maxSize}
							onChange={handleChange}
							className="size-input"
						/>
					</div>
				</div>
				{/*endof size */}

				{/*extras */}
				<div className="form-group">
					<div className="single-extra">
						<input
							type="checkbox"
							name="breakfast"
							id="breakfast"
							checked={breakfast}
							onChange={handleChange}
						/>
						<label htmlFor="breakfast">breakfast</label>
					</div>

					<div className="single-extra">
						<input
							type="checkbox"
							name="pets"
							id="pets"
							checked={pets}
							onChange={handleChange}
						/>
						<label htmlFor="pets">pets</label>
					</div>
				</div>
				{/*endof extras */}
			</form>

		</section>
	)
}

export default RoomsFilter;