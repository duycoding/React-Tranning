import React from 'react';
import Question from './Question';

const Questions = ({ questions }) => {
	return (
		<section className='container'>
			<h2>Questions</h2>
			{questions.map((question) => {
				return (
					<Question
						key={question.id}
						{...question}
					/>
				);
			})}
		</section>
	);
};

export default Questions;
