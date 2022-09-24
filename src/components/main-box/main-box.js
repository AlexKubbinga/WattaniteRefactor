import React, { useContext } from 'react';
import './main-box.css';
import OptionBox from '../option-box/option-box';
import { CTX } from '../../App';

const MainBox = () => {
	const { movieList } = useContext(CTX);

	return (
		<div className='main-box'>
			{movieList.map((movie) => (
				<OptionBox
					key={movie.id}
					movie={movie}
					vote={movie.voteCount}
				></OptionBox>
			))}
		</div>
	);
};

export default MainBox;

// update your option box vraibles now that they're getting a diferent result from the api
