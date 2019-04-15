import React, { Component } from 'react';
import * as S from './styles';
import Header from './Header/Header';
import Board from './Board/Board';

class App extends Component {
	state = {
		wordToGuess: 'Lemoniada',
	}

	render() {
		return (
			<S.Wrapper>
				<Header />
				<Board
					wordToGuess={this.state.wordToGuess}
				/>
			</S.Wrapper>
		);
	}
}

export default App;