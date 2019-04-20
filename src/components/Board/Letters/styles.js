import styled from 'styled-components';

export const letterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	padding: 70px 0;
	flex-wrap: wrap;
	@media (max-width: 1330px) {
		width: 50%;
  }
`;

export const letterBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 50px;
	height: 50px;
	border: ${props => props.active ? '2px solid #4cc5e4' : '2px solid gray'};
	margin: 10px;
	text-align: center;
	font-size: 2rem;
	text-transform: uppercase;
	cursor: pointer;
	transition: cubic-bezier(0.19, 1, 0.22, 1) ,.2s;
	:hover{
		border: 2px solid #4cc5e4;
	}
`;