import React from 'react';
import * as S from './styles';

const Word = (props) => {
	const wordToGuess = props.wordToGuess.split('');
	const renderLetters = wordToGuess.map(item => {
		return (
			<S.letterBox> {item} </S.letterBox>
		)
	})

	return (
		<S.wordWrapper>
			{renderLetters}
		</S.wordWrapper>
	);
}

export default Word;