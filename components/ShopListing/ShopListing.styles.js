import styled from "styled-components";

export const ShopListingContainer = styled.section`
	width: 160rem;
	margin: 8rem auto;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 2rem;
	row-gap: 4rem;

	& > h2 {
		grid-column: 1 / -1;
	}

	& > button {
		grid-column: 1 / -1;
		justify-self: center;
		margin-top: 5rem;
	}
`;

export const ShopCard = styled.div`
	border-radius: 1rem;
	overflow: hidden;
	box-shadow: var(--shadow-xs);
`;

export const CardImageContainer = styled.div`
	height: 18rem;
	width: 100%;
	background-image: url(${props => props.imageUrl});
	background-size: cover;
	background-position: center;
`;

export const CardContent = styled.div`
	padding: 0 2rem 2rem;
	display: flex;
	flex-direction: column;
`;

export const CardTitle = styled.h4`
	font-size: 1.8rem;
	font-weight: 500;
	margin-bottom: 0;
	cursor: pointer;
`;

export const CardPrice = styled.p`
	font-size: 1.6rem;
	font-weight: 300;
	margin: 1rem 0 3rem;
`;
