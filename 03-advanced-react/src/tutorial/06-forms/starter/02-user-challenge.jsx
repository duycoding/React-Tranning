import { useState } from 'react';
import { data } from '../../../data.js';

const UserChallenge = () => {
	const [name, setName] = useState('');
	const [people, setPeople] = useState(data);
	const handleSubmit = (event) => {
		event.preventDefault();
		const idFake = Date.now();
		const person = { id: idFake, name: name };
		const newPeople = [...people, person];
		setPeople(newPeople);
		setName('');
	};
	console.log('render');
	return (
		<div>
			<form
				className='form'
				onSubmit={handleSubmit}>
				<h4>Add User</h4>
				<div className='form-row'>
					<label
						htmlFor='name'
						className='form-label'>
						name
					</label>
					<input
						type='text'
						className='form-input'
						onChange={(event) => setName(event.target.value)}
						id='name'
					/>
				</div>

				<button
					type='submit'
					className='btn btn-block'>
					submit
				</button>
			</form>
			{/* render users below */}
			<div>
				{people.map((item) => {
					return <h4>{item.name}</h4>;
				})}
			</div>
		</div>
	);
};
export default UserChallenge;
