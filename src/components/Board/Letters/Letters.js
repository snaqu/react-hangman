import React from 'react';
import * as S from './styles';

const Letters = () => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const generateLetters = alphabet.map(item => {
		return (
			<S.letterBox>{item}</S.letterBox >
		)
	})

	return (
		<S.letterWrapper>
			{generateLetters}
		</S.letterWrapper>
	);
}

export default Letters;