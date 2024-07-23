import Tour from './Tour';
import Tours from './Tours';
import Loading from './Loading';
import { useEffect, useState } from 'react';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
	const [tours, setTours] = useState([]);
	const [loading, setLoading] = useState(true);

	if (loading) {
		<Loading />;
	}

	const getData = async () => {
		try {
			const data = await fetch(url);
			const convertData = await data.json();
			setTours(convertData);
			setLoading(!loading);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const removeTour = (id) => {
		const newTour = tours.filter((tour) => tour.id !== id);
		setTours(newTour);
	};
	return (
		<div className='container'>
			<Tours
				tours={tours}
				removeTour={removeTour}></Tours>
		</div>
	);
};
export default App;
