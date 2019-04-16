import styled from 'styled-components';

export const Block = styled.div`
	display: flex;
	position: relative;
	flex: 1;
`;

export const hangmanEl1 = styled.img`
position: absolute;
display: ${props => props.lifeScore >= 1 ? 'block' : 'none'};
`;

export const hangmanEl2 = styled.img`
position: absolute;
right: 49%;
top: -16px;
/* display: block; */
display: ${props => props.lifeScore >= 2 ? 'block' : 'none'};
`;

export const hangmanEl3 = styled.img`
position: absolute;
right: 51.2%;
top: 245px;
display: ${props => props.lifeScore >= 3 ? 'block' : 'none'};
`;
export const hangmanEl4 = styled.img`
position: absolute;
right: 48.4%;
top: 245px;
display: ${props => props.lifeScore >= 4 ? 'block' : 'none'};
`;
export const hangmanEl5 = styled.img`
position: absolute;
right: 63.7%;
top: 248px;
display: ${props => props.lifeScore >= 5 ? 'block' : 'none'};
`;
export const hangmanEl6 = styled.img`
position: absolute;
right: 57.9%;
top: 350px;
display: ${props => props.lifeScore >= 6 ? 'block' : 'none'};
`;
export const hangmanEl7 = styled.img`
position: absolute;
right: 50.5%;
top: 343px;
display: ${props => props.lifeScore >= 7 ? 'block' : 'none'};
`;