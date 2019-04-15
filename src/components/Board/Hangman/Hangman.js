import React from 'react';
import hangman from '../../../assets/1.png';
import * as S from './styles';
// import hangman2 from '../../../assets/2.png';
// import hangman3 from '../../../assets/3.png';

const Hangman = () => {
	return (
		<S.Block>
			<img src={hangman} />
			{/* <img src={hangman2} /> */}
			{/* <img src={hangman3} /> */}
		</S.Block>
	);
}

export default Hangman;