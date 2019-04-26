import React from 'react';
import * as S from './styles';
import hangman1 from '../../../assets/1.png';
import hangman2 from '../../../assets/2.png';
import hangman3 from '../../../assets/3.png';
import hangman4 from '../../../assets/4.png';
import hangman5 from '../../../assets/5.png';
import hangman6 from '../../../assets/6.png';
import hangman7 from '../../../assets/7.png';

const Hangman = ({ lifeScore }) => {
	// const importAll = (r) => r.keys().map(r);
	// const images = importAll(require.context('../../../assets', false, /\.(png|jpe?g|svg)$/));
	// const renderImages = images.map((item, index) => <S.hangmanEl1 key={index + item} src={item} alt="hangman" lifeScore={lifeScore} />);
	return (
		<S.Block>
			<S.hangmanEl1 src={hangman1} alt="hangman" lifeScore={lifeScore} />
			<S.hangmanEl2 src={hangman2} alt="hangman" lifeScore={lifeScore} />
			<S.hangmanEl3 src={hangman3} alt="hangman" lifeScore={lifeScore} />
			<S.hangmanEl4 src={hangman4} alt="hangman" lifeScore={lifeScore} />
			<S.hangmanEl5 src={hangman5} alt="hangman" lifeScore={lifeScore} />
			<S.hangmanEl6 src={hangman6} alt="hangman" lifeScore={lifeScore} />
			<S.hangmanEl7 src={hangman7} alt="hangman" lifeScore={lifeScore} />
		</S.Block>
	);
}

export default Hangman;