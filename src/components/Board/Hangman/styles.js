import styled from 'styled-components';

export const Block = styled.div`
	display: flex;
	position: relative;
	/* flex: 1; */
	width: 50%;
	@media (max-width: 1330px) {
		height: 550px;
		width: 100%;
    justify-content: center;
    align-items: center;
		/* justify-content: center; */
  }
	@media (max-width: 500px) {
		transform: scale(.8);
		margin: -50px 0 -80px 0;
  }
	@media (max-width: 420px) {
		transform: scale(.65);
		margin: -60px 0 -100px 0;
  }
`;

export const hangmanEl1 = styled.img`
position: absolute;
display: ${props => props.lifeScore >= 1 ? 'block' : 'none'};
`;

export const hangmanEl2 = styled.img`
position: absolute;
right: 49%;
top: -16px;
display: ${props => props.lifeScore >= 2 ? 'block' : 'none'};
@media (max-width: 1330px) {
	right: 40%;
	top: -11px;
}
`;

export const hangmanEl3 = styled.img`
position: absolute;
right: 51.2%;
top: 245px;
display: ${props => props.lifeScore >= 3 ? 'block' : 'none'};
@media (max-width: 1330px) {
	right: 41.5%;
	top: 252px;
}
`;
export const hangmanEl4 = styled.img`
position: absolute;
right: 48.4%;
top: 245px;
display: ${props => props.lifeScore >= 4 ? 'block' : 'none'};
@media (max-width: 1330px) {
	right: 39.9%;
	top: 252px;
}
`;
export const hangmanEl5 = styled.img`
position: absolute;
right: 66.2%;
top: 249px;
display: ${props => props.lifeScore >= 5 ? 'block' : 'none'};
@media (max-width: 1330px) {
	right: 48.9%;
	top: 256px;
}
`;
export const hangmanEl6 = styled.img`
position: absolute;
right: 59.3%;
top: 350px;
display: ${props => props.lifeScore >= 6 ? 'block' : 'none'};
@media (max-width: 1330px) {
	right: 45.4%;
	top: 358px;
}
`;
export const hangmanEl7 = styled.img`
position: absolute;
right: 50.5%;
top: 343px;
display: ${props => props.lifeScore >= 7 ? 'block' : 'none'};
@media (max-width: 1330px) {
	right: 40.9%;
	top: 348px;
}
`;