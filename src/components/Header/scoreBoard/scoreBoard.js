import React from 'react';
import * as S from './styles';

const scoreBoard = (props) => {
	return (
		<S.scoreBoard>{props.points} points</S.scoreBoard>
	);
}

export default scoreBoard;