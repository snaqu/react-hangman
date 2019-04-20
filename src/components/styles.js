import styled from 'styled-components';

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
		width: 1200px;
		height: 300px;
		z-index: -1;
		bottom: -10%;
		right: -40%;
		transform: rotate(-33deg);
		/* overflow: hidden; */
	}
`;


