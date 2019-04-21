import styled from 'styled-components';

export const wordWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	padding: 70px 0 0 0;
	flex-wrap: wrap;
	@media (max-width: 800px) {
		width: 50%;
  }
	@media (max-width: 550px) {
		width: 30%;
  }
`;

export const letterBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 50px;
	height: 50px;
	border-bottom: 3px solid #4cc5e4;
	margin: 10px;
	text-align: center;
	font-size: 2rem;
	text-transform: uppercase;
`;