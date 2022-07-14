import styled from "styled-components";

export const HealthNewsContainer = styled.section`
	margin: 15rem 0 5rem;

	@media screen and (max-width: 1400px) {
		margin: 8rem 0 2rem;
	}

	@media screen and (max-width: 900px) {
		margin: 8rem 0 5rem;
	}
`;

export const NewsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 3rem;
	width: 160rem;
	margin: 6rem auto;

	@media screen and (max-width: 1700px) {
		width: 140rem;
	}

	@media screen and (max-width: 1500px) {
		width: 90vw;
	}

	@media screen and (max-width: 900px) {
		grid-template-columns: 1fr;
	}
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

	@media screen and (max-width: 1200px) {
		height: 20rem;
	}
`;

export const NewsContent = styled.div`
	padding: 1rem 2rem 3rem;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 1200px) {
		padding: 1rem 2rem 2rem;
	}
`;

export const NewsTitle = styled.h4`
	font-size: 1.7rem;
	font-weight: 500;
	min-height: calc(2.7rem * 3);

	@media screen and (max-width: 800px) {
		font-size: 1.6rem;
		min-height: auto;
	}
`;

export const NewsActionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 1300px) {
		flex-direction: column;
		align-items: stretch;
	}
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

	@media screen and (max-width: 800px) {
		font-size: 1.4rem;
	}
`;

export const FindMoreContainer = styled.div`
	grid-column: 1 / -1;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 3rem;

	@media screen and (max-width: 700px) {
		margin-top: 1rem;
	}
`;
