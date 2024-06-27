import { useState } from 'react';

const UseStateGotcha = () => {
	const [value, setValue] = useState(0);
	console.log(value);
	const handleClick = () => {
		setTimeout(() => {
			console.log('clicked the button');
			setValue((preValue) => {
				return preValue + 1;
			});
		}, 1000);
	};
	return (
		<div>
			<div>{value}</div>

			<button
				className='btn'
				onClick={handleClick}>
				click
			</button>
		</div>
	);
};

export default UseStateGotcha;
