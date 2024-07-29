import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Question({ title, info }) {
	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		setToggle(!toggle);
	};

	return (
		<article className='question'>
			<header>
				<h5>{title}</h5>
				<button
					className='question-btn'
					onClick={handleClick}>
					{toggle ? <AiOutlinePlus /> : <AiOutlineMinus />}
				</button>
			</header>
			{toggle && <p>{info}</p>}
		</article>
	);
}

export default Question;
