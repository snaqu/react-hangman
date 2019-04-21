import styled from 'styled-components';

export const Container = styled.div`
	width: 1100px;
	min-height: 800px;
	/* height: 100vh; */
	/* height: 100%; */
	/* display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; */
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	min-height: 700px;
	background-color: #fff;
	display: flex;
	/* justify-content: center; */
	flex-direction: column;
	align-items: center;
	position: relative;
	overflow: hidden;
	z-index:0;
	@media (max-width: 1330px) {
		height: 100%;
  }
	::before{
		content:'';
		position: absolute;
		background-color: rgb(76,197,228);
		opacity: .8;
		width: 2200px;
		height: 300px;
		z-index: -1;
		bottom: -40%;
		right: -40%;
		transform: rotate(-33deg);
		/* overflow: hidden; */
		@media (max-width: 700px) {
			right: -60%;
  	}
		@media (max-width: 460px) {
			right: -80%;
  	}
		@media (max-width: 340px) {
			right: -100%;
  	}
	}
`;


