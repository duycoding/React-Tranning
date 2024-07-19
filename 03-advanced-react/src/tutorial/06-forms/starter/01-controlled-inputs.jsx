import { useState } from 'react';

const ControlledInputs = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleForm = (event) => {
		event.preventDefault();
		console.log(name, email);
	};
	return (
		<form
			className='form'
			onSubmit={handleForm}>
			<h4>Controlled inputs</h4>
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
					id='name'></input>
			</div>
			<div className='form-row'>
				<label
					htmlFor='email'
					className='form-label'>
					Email
				</label>
				<input
					type='email'
					className='form-input'
					onChange={(event) => setEmail(event.target.value)}
					id='email'
				/>
			</div>
			<button className='btn btn-block'>Submit</button>
		</form>
	);
};
export default ControlledInputs;
