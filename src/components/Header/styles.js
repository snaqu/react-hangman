import styled from 'styled-components';

export const Header = styled.h1`
	font-size: 3rem;
	text-align: center;
	/* flex:4; */
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 0px;
	`;

export const headerContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 150px;
	@media (max-width: 800px) {
		height: 190px;
}
`;