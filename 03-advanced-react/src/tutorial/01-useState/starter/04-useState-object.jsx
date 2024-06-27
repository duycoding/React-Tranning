import { useState } from 'react';

const UseStateObject = () => {
	const [people, setPeople] = useState({
		name: 'Duy',
		age: 20,
		hoppy: 'coding',
	});

	const [showButton, setShowButton] = useState(true);

	// const handleClick = () => {
	// 	setName('Duy');
	// 	setAge(20);
	// 	setHoppy('coding');
	// };

	function handleClick() {
		const people1 = { name: 'John', age: 22, hoppy: 'gaming' };
		setPeople(people1);
	}

	console.log('reset People');

	function resetPeople() {
		setPeople({
			name: 'Duy',
			age: 20,
			hoppy: 'coding',
		});
		setShowButton(false);
	}

	const { name, age, hoppy } = people;

	return (
		<div>
			{name} {age} {hoppy}
			{showButton && (
				<button
					className='btn'
					onClick={handleClick}>
					This is button
				</button>
			)}
			<button onClick={resetPeople}>Reset People</button>
		</div>
	);
};

export default UseStateObject;
