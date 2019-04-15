import React from 'react';
import * as S from './styles';
import Hangman from './Hangman/Hangman';
import Letters from './Letters/Letters';
import Word from './Word/Word';

const Board = (props) => {
	return (
		<S.WrapperBoard>
			<Hangman />
			<S.Interface>
				<Word
					wordToGuess={props.wordToGuess}
				/>
				<Letters />
			</S.Interface>
		</S.WrapperBoard>
	);
}

export default Board;