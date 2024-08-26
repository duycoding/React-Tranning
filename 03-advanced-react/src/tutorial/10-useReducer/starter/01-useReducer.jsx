import React, { useReducer } from 'react';
import { data, people } from '../../../data';

const CLEAR_LIST = 'CLEAR_LIST';
const RESET_LIST = 'RESET_LIST';
const REMOVE_ITEM = 'REMOVE_ITEM';

const defaultState = {
	people: data,
	isLoading: false,
};

const reducer = (state, action) => {
	console.log(action);
	if (action.type === 'CLEAR_LIST') {
		return { ...state, people: [] };
	}

	if (action.type === RESET_LIST) {
		return { ...state, people: data };
	}

	if (action.type === REMOVE_ITEM) {
		const people = data.filter((person) => {
			return person.id != action.payload.id;
		});
		return { ...state, people: people };
	}
};

const ReducerBasics = () => {
	const [state, dispatch] = useReducer(reducer, defaultState);

	const removeItem = (id) => {
		dispatch({ type: REMOVE_ITEM, payload: { id } });
	};

	const clearList = () => {
		dispatch({ type: 'CLEAR_LIST' });
	};

	const resetList = () => {
		dispatch({ type: RESET_LIST });
	};

	return (
		<div>
			{state.people.map((person) => {
				const { id, name } = person;
				return (
					<div
						key={id}
						className='item'>
						<h4>{name}</h4>
						<button
							onClick={() => {
								removeItem(id);
							}}>
							remove
						</button>
					</div>
				);
			})}
			{state.people.length < 1 ? (
				<button
					className='btn'
					style={{ marginTop: '2rem' }}
					onClick={resetList}>
					reset
				</button>
			) : (
				<button
					className='btn'
					style={{ marginTop: '2rem' }}
					onClick={clearList}>
					Remove all
				</button>
			)}
		</div>
	);
};

export default ReducerBasics;
