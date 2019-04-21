import React from 'react';
import * as S from './styles';

const scoreBoard = (props) => {
	return (
		<S.scoreBoard>Score: {props.points}</S.scoreBoard>
	);
}

export default scoreBoard;