import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
	console.log(data);
	const [people, setPeople] = useState(data);

	function removeEntire() {
		setPeople([]);
	}
	// a b c d
	// Xóa: c
	//  != c

	function removeSigleItem(id) {
		let newData = people.filter((person) => person.id != id);
		setPeople(newData);
	}

	return (
		<div>
			{people.map((person) => {
				return (
					<>
						<ul>
							<div>
								<li key={person.id}>{person.name}</li>
								<button
									className='btn'
									onClick={() => removeSigleItem(person.id)}>
									Remove single item
								</button>
							</div>
						</ul>
					</>
				);
			})}
			<button
				className='btn'
				onClick={removeEntire}>
				Remove All
			</button>
		</div>
	);
};

export default UseStateArray;
