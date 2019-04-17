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
		lifeScore: 1,
		alphabet: [
			{ letter: 'a', active: false },
			{ letter: 'b', active: false },
			{ letter: 'c', active: false },
			{ letter: 'd', active: false },
			{ letter: 'e', active: false },
			{ letter: 'f', active: false },
			{ letter: 'g', active: false },
			{ letter: 'h', active: false },
			{ letter: 'i', active: false },
			{ letter: 'j', active: false },
			{ letter: 'k', active: false },
			{ letter: 'l', active: false },
			{ letter: 'm', active: false },
			{ letter: 'n', active: false },
			{ letter: 'o', active: false },
			{ letter: 'p', active: false },
			{ letter: 'q', active: false },
			{ letter: 'r', active: false },
			{ letter: 's', active: false },
			{ letter: 't', active: false },
			{ letter: 'u', active: false },
			{ letter: 'v', active: false },
			{ letter: 'w', active: false },
			{ letter: 'x', active: false },
			{ letter: 'y', active: false },
			{ letter: 'z', active: false },
		],
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

	changeStatusHandler = (e) => {
		const alphabet = this.state.alphabet;
		alphabet.forEach(item => {
			if (item.letter === e) {
				item.active = true;
			}
		})
		this.setState((prevState, props) => ({
			alphabet: alphabet
		}));
	}

	addLetterHandler = (e) => {
		const wordToGuess = this.state.wordToGuess;
		const newWord = this.state.currentWord;
		const indexResult = [];
		wordToGuess.forEach((item, index) => item === e ? indexResult.push(index) : null);
		indexResult.forEach(item => newWord[item] = e);

		this.setState({
			currentWord: newWord,
		}, () => {
			if (this.state.wordToGuess.toString() === this.state.currentWord.toString()) {
				setTimeout(() => {
					alert('You win! C:');
					window.location.reload();
				}, 500)
			}
		})

		if (indexResult.length < 1) {
			this.setState((prevState, props) => ({
				lifeScore: prevState.lifeScore + 1
			}), () => {
				if (this.state.lifeScore >= 7) {
					setTimeout(() => {
						alert('You lost! :C');
						window.location.reload();
					}, 500);
				}
			});
		}
	}

	render() {
		return (
			<S.Wrapper>
				<Header />
				<Board
					addLetter={this.addLetterHandler}
					changeStatus={this.changeStatusHandler}
					wordToGuess={this.state.currentWord}
					lifeScore={this.state.lifeScore}
					alphabet={this.state.alphabet}
				/>
			</S.Wrapper>
		);
	}
}

export default App;