import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
	const [value, setValue] = useState(0);
	const refContainer = useRef(null);

	console.log(refContainer);

	useEffect(() => {
		refContainer.current.focus();
	});

	const isMounted = useRef(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('*');
		console.log('Is mounted: ', isMounted);
		console.log(refContainer.current);
		const name = refContainer.current.value;
		console.log(name);
	};

	useEffect(() => {
		console.log('After: ', isMounted);
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}
		console.log('re-render');
	}, [value]);

	return (
		<div>
			<form
				className='form'
				onSubmit={handleSubmit}>
				<div className='form-row'>
					<label
						htmlFor='name'
						className='form-label'>
						Name
					</label>
					<input
						type='text'
						id='name'
						className='form-input'
						ref={refContainer}
					/>
				</div>
				<button
					type='submit'
					className='btn btn-block'>
					submit
				</button>
			</form>
			<h1>value : {value}</h1>
			<button
				onClick={() => setValue(value + 1)}
				className='btn'>
				increase
			</button>
		</div>
	);
};

export default UseRefBasics;
