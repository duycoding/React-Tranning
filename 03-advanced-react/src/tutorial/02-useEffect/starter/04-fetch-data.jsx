import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
	const [users, setUser] = useState([]);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const respone = await fetch(url);
				const user = await respone.json();
				setUser(user);
			} catch (error) {
				console.log('This is error: ' + error);
			}
		};

		fetchUser();
	}, []);

	const removeUser = (id) => {
		let newUsers = users.filter((user) => {
			return user.id != id;
		});
		console.log(newUsers);
		setUser(newUsers);
	};

	console.log(users);
	return (
		<div className='container'>
			<div className='users'>
				{users.map((user) => {
					const { id, avatar_url, login, html_url } = user;
					return (
						<div key={id}>
							<h2>{login}</h2>
							<img
								src={avatar_url}
								alt={login}></img>
							<p>{html_url}</p>
							<button
								className='btn'
								onClick={() => {
									removeUser(id);
								}}>
								Remove
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default FetchData;
