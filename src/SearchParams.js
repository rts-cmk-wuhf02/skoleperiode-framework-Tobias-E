import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
	const [location, setLocation] = useState('Seattle, WA');
	const [breeds, setBreeds] = useState([]);
	const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
	const [breed, BreedDropdown] = useDropdown('Breed', '', breeds);

	return (
		<div className='search-params'>
			<form action=''>
				<label htmlFor='location'>
					Location
					<input
						type='text'
						id='location'
						value={location}
						placeholder='Location'
						onChange={(e) => setLocation(e.target.value)}
					/>
				</label>
				<AnimalDropdown />
				<BreedDropdown />
				{/* <label htmlFor='animal'>
					Animal
					<select
						id='animal'
						value={animal}
						onChange={(e) => setAnimal(e.target.value)}
						onBlur={(e) => setAnimal(e.target.value)}
					>
						<option>All </option>
						{ANIMALS.map((animal) => (
							<option key={animal} value={animal}>
								{animal}
							</option>
						))}
					</select>
				</label>
				<label htmlFor='breed'>
					breed
					<select
						id={breed}
						value={breed}
						onChange={(e) => setBreed(e.target.value)}
						onBlur={(e) => setBreed(e.target.value)}
						disabled={!breeds.length}
					>
						<option value=''>All</option>
						{breeds.map((breedString) => (
							<option
								key={breedString}
								value={breedString}
							></option>
						))}
					</select>
				</label> */}
				<button>Submit</button>
			</form>
		</div>
	);
};

export default SearchParams;
