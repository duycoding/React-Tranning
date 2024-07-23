import { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setError] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const resp = await fetch(url);
				if (!resp.ok) {
					setError(true);
					setIsLoading(false);
				}

				const user = await resp.json();
				setUser(user);
			} catch (error) {
				setError(true);
				console.log(error);
			}
			setIsLoading(false);
		};

		fetchUser();
	}, []);

	return { isLoading, isError, user };
};

export default useFetch;
