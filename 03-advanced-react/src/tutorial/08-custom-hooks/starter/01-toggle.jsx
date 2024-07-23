import { useState } from 'react';
import useToggle from './useToggle';

const ToggleExample = () => {
	const { toggle, handle } = useToggle(true);
	return (
		<div>
			<h4>toggle custom hook</h4>
			<button
				className='btn'
				onClick={handle}>
				toggle
			</button>
			{toggle && <h4>some stuff</h4>}
		</div>
	);
};
export default ToggleExample;
