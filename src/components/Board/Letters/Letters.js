import React from 'react';
import * as S from './styles';

const Letters = (props) => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const generateLetters = alphabet.map(item => {
		return (
			<S.letterBox key={Math.random()} onClick={() => props.addLetter(item)}>{item}</S.letterBox >
			// <S.letterBox key={Math.random()} onClick={click="true"}>{item}</S.letterBox >
		)
	})

	return (
		<S.letterWrapper>
			{generateLetters}
		</S.letterWrapper>
	);
}

export default Letters;