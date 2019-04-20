import React from 'react';
import * as S from './styles';
import ScoreBoard from './scoreBoard/scoreBoard';

const Header = (props) => {
	return (
		<S.headerContainer>
			<S.Header>
				Hangman
			</S.Header>
			<ScoreBoard
				points={props.points}
			/>
		</S.headerContainer>
	);
}

export default Header;