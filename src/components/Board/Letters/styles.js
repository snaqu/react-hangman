import styled from 'styled-components';

export const letterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	padding: 70px 0;
	flex-wrap: wrap;
`;

export const letterBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 50px;
	height: 50px;
	border: 2px solid gray;
	margin: 10px;
	text-align: center;
	font-size: 2rem;
	text-transform: uppercase;
	cursor: pointer;
`;