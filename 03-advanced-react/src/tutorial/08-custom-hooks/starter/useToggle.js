import { useState } from 'react';

const useToggle = (defaultValue) => {
	const [toggle, setToggle] = useState(defaultValue);

	const handle = () => {
		setToggle(!toggle);
	};

	return { toggle, handle };
};

export default useToggle;
