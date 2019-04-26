import React from 'react';
import * as S from './styles';

const Word = (props) => {
	const wordToGuess = props.wordToGuess;
	const renderLetters = wordToGuess.map(item => <S.letterBox key={Math.random()} > {item} </S.letterBox>);

	return (
		<S.wordWrapper>
			{renderLetters}
		</S.wordWrapper>
	);
}

export default Word;