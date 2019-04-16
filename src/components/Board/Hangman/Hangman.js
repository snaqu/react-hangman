import React from 'react';
import hangman1 from '../../../assets/1.png';
import * as S from './styles';
import hangman2 from '../../../assets/2.png';
import hangman3 from '../../../assets/3.png';
import hangman4 from '../../../assets/4.png';
import hangman5 from '../../../assets/5.png';
import hangman6 from '../../../assets/6.png';
import hangman7 from '../../../assets/7.png';

const Hangman = (props) => {
	return (
		<S.Block>
			<S.hangmanEl1 src={hangman1} alt="hangman" lifeScore={props.lifeScore} />
			<S.hangmanEl2 src={hangman2} alt="hangman" lifeScore={props.lifeScore} />
			<S.hangmanEl3 src={hangman3} alt="hangman" lifeScore={props.lifeScore} />
			<S.hangmanEl4 src={hangman4} alt="hangman" lifeScore={props.lifeScore} />
			<S.hangmanEl5 src={hangman5} alt="hangman" lifeScore={props.lifeScore} />
			<S.hangmanEl6 src={hangman6} alt="hangman" lifeScore={props.lifeScore} />
			<S.hangmanEl7 src={hangman7} alt="hangman" lifeScore={props.lifeScore} />
		</S.Block>
	);
}

export default Hangman;