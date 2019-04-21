import React, { Component } from 'react';
import * as S from './styles';
import Header from './Header/Header';
import Board from './Board/Board';
import Words from './words';

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
		points: 0,
	}

	componentDidMount() {
		this.setState({
			wordToGuess: (Words[Math.floor(Math.random() * Words.length)]).split('')
		}, () => {
			this.setState({
				currentWord: Array.from({ length: this.state.wordToGuess.length })
			})
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.points !== this.state.points) {
			if (this.state.points < 0) {
				setTimeout(() => {
					alert('You lost! :C');
					window.location.reload();
				}, 300);
			} else if (this.state.points >= 100) {
				setTimeout(() => {
					alert('You win! C:');
					window.location.reload();
				}, 300);
			} else {
				const newAlphabet = this.state.alphabet;
				newAlphabet.forEach(item => {
					item.active = false;
				})
				setTimeout(() => {
					this.setState({
						wordToGuess: (Words[Math.floor(Math.random() * Words.length)]).split(''),
						alphabet: newAlphabet,
						lifeScore: 1
					}, () => {
						this.setState({
							currentWord: Array.from({ length: this.state.wordToGuess.length })
						})
					})
				}, 400);
			}
		}
	}

	changeStatusHandler = (e) => {
		const alphabet = this.state.alphabet;
		alphabet.forEach(item => item.letter === e ? item.active = true : null);
		this.setState((prevState, props) => ({
			alphabet: alphabet
		}));
	}

	addLetterHandler = (e, status) => {
		if (status !== true) {
			const wordToGuess = this.state.wordToGuess;
			const newWord = this.state.currentWord;
			const indexResult = [];
			wordToGuess.forEach((item, index) => item === e ? indexResult.push(index) : null);
			indexResult.forEach(item => newWord[item] = e);

			this.setState({
				currentWord: newWord,
			}, () => {
				if (this.state.wordToGuess.toString() === this.state.currentWord.toString()) {
					this.setState((prevState, props) => ({
						points: prevState.points + 2
					}))
				}
			})

			if (indexResult.length < 1) {
				this.setState((prevState, props) => ({
					lifeScore: prevState.lifeScore + 1
				}), () => {
					if (this.state.lifeScore >= 7) {
						this.setState((prevState, props) => ({
							points: prevState.points - 1
						}))
					}
				});
			}
		}
	}

	render() {
		const { alphabet, lifeScore, currentWord, points } = this.state;
		return (
			<S.Wrapper>
				<S.Container>
					<Header
						points={points}
					/>
					<Board
						addLetter={this.addLetterHandler}
						changeStatus={this.changeStatusHandler}
						wordToGuess={currentWord}
						lifeScore={lifeScore}
						alphabet={alphabet}
					/>
				</S.Container>
			</S.Wrapper>
		);
	}
}

export default App;