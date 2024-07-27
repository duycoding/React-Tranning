import { FaBeer, FaIndent } from 'react-icons/fa';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';

const App = () => {
	const [index, setIndex] = useState(0);

	const handlePre = () => {
		setIndex((prevIndex) => {
			const newIndex = prevIndex - 1;
			return newIndex < 0 ? reviews.length - 1 : newIndex;
		});
	};

	const handleNext = () => {
		setIndex((prevIndex) => {
			const newIndex = prevIndex + 1;
			return newIndex >= reviews.length ? 0 : newIndex;
		});
	};

	const randomPersion = () => {
		let randomNumber = Math.floor(Math.random() * reviews.length);
		if (randomNumber === index) randomNumber = index + 1;
		const newIndex = randomNumber % reviews.length;
		setIndex(newIndex);
	};

	return (
		<main>
			<article className='review'>
				<div key={reviews[index].id}>
					<div className='img-container'>
						<img
							src={reviews[index].image}
							alt={reviews[index].name}
							className='person-img'
						/>
						<span className='quote-icon'>
							<FaQuoteRight />
						</span>
					</div>

					<h4>{reviews[index].name}</h4>
					<p className='job'>{reviews[index].job}</p>
					<div className='btn-container'>
						<button
							className='prev-btn'
							onClick={handlePre}>
							<FaChevronLeft />
						</button>
						<button
							className='next-btn'
							onClick={handleNext}>
							<FaChevronRight />
						</button>
					</div>
				</div>
				<div
					className='btn btn-hipster'
					onClick={randomPersion}>
					supprise me
				</div>
			</article>
		</main>
	);
};

export default App;
