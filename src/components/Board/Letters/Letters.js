import React from 'react';
import * as S from './styles';

const Letters = (props) => {
	const alphabet = props.alphabet;
	const generateLetters = alphabet.map(item => (
		<S.letterBox
			key={item.letter}
			onClick={() => {props.addLetter(item.letter); props.changeStatus(item.letter);}}
			active={item.active}
		>{item.letter}</S.letterBox >
	));

	return (
		<S.letterWrapper>
			{generateLetters}
		</S.letterWrapper>
	);
}

export default Letters;