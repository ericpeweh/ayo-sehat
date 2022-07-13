import styled from "styled-components";

export const HealthNewsContainer = styled.section`
	margin: 15rem 0 5rem;
`;

export const NewsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 3rem;
	width: 160rem;
	margin: 6rem auto;
`;

export const NewsCard = styled.div`
	border-radius: 1rem;
	box-shadow: var(--shadow-xs);
	border: 1px solid rgb(199, 199, 199, 0.5);
	overflow: hidden;
`;

export const NewsImage = styled.div`
	height: 24rem;
	width: 100%;
	background-position: center;
	background-size: cover;
	background-image: url(${props => props.imageUrl});
`;

export const NewsContent = styled.div`
	padding: 1rem 2rem 3rem;
	display: flex;
	flex-direction: column;
`;

export const NewsTitle = styled.h4`
	font-size: 1.7rem;
	font-weight: 500;
`;

export const NewsActionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ViewerCount = styled.div`
	font-size: 1.6rem;
	color: #333;
	display: flex;
	align-items: center;
	gap: 1rem;

	& > svg {
		font-size: 2rem;
	}
`;

export const FindMoreContainer = styled.div`
	grid-column: 1 / -1;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 3rem;
`;
