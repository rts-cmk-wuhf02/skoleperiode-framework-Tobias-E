import React, { FunctionComponent } from 'react';
import { Animal } from '@frontendmasters/pet';
import Pet from './Pet';

interface IProbs {
	pets: Animal[];
}

const Results: FunctionComponent<IProbs> = ({ pets }) => {
	return (
		<div className='search'>
			{pets.length === 0 ? (
				<h1>No Pets Found!</h1>
			) : (
				pets.map((pet) => (
					<Pet
						animal={pet.type}
						key={pet.id}
						name={pet.name}
						breed={pet.breeds.primary}
						media={pet.photos}
						location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
						id={pet.id}
					/>
				))
			)}
		</div>
	);
};

export default Results;
