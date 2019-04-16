import React, { Component } from 'react';
import * as S from './styles';
import Header from './Header/Header';
import Board from './Board/Board';

// pseudo API
const wordsToGame = ['shelter', 'rock', 'noxious', 'vigorous', 'alike', 'earthquake', 'advice', 'dirty', 'various', 'watch', 'impolite', 'enchanted'];


class App extends Component {
	state = {
		wordToGuess: [],
		currentWord: [],
		lifeScore: 1
	}

	componentDidMount() {
		this.setState({
			wordToGuess: (wordsToGame[Math.floor(Math.random() * wordsToGame.length)]).split('')
		}, () => {
			this.setState({
				currentWord: Array.from({ length: this.state.wordToGuess.length })
			})
		})
	}

	addLetterHandler = (e) => {


		const wordToGuess = this.state.wordToGuess;
		const newWord = this.state.currentWord;
		const indexResult = [];
		wordToGuess.forEach((item, index) => {
			return item === e ? indexResult.push(index) : null
		})

		indexResult.forEach(item => newWord[item] = e);
		this.setState({
			currentWord: newWord
		})



		if (indexResult.length < 1) {
			this.setState((prevState, props) => ({
				lifeScore: prevState.lifeScore + 1
			}));
		}

		if (this.state.lifeScore > 7) {
			alert('You lost! :C');
		}

		console.log(newWord);
		console.log(indexResult);
		console.log(this.state.lifeScore);
		console.log(this.state.currentWord);
	}

	render() {
		return (
			<S.Wrapper>
				<Header />
				<Board
					addLetter={this.addLetterHandler}
					wordToGuess={this.state.currentWord}
					lifeScore={this.state.lifeScore}
				/>
			</S.Wrapper>
		);
	}
}

export default App;