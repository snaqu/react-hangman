import styled from 'styled-components';

export const WrapperBoard = styled.div`
	/* width: 1300px; */
	/* height: 100%; */
	display: flex;
	flex-direction: row;
	@media (max-width: 1330px) {
		flex-direction: column;
  }
`;

export const Interface = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	@media (max-width: 1330px) {
		width: 100%;
  }
	/* padding: 0 0 0 150px; */
`;