import styled from "styled-components";

export const HeroSectionContainer = styled.div`
	border-radius: 1rem;
	background-color: #fff;
	width: 75vw;
	min-height: 25rem;
	margin-top: -12.5rem;
	left: 50%;
	transform: translateX(-50%);
	position: relative;
	box-shadow: 0rem 0.5rem 2rem rgba(0, 0, 0, 0.2);
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 4rem;
	padding: 3rem 4rem;

	@media screen and (max-width: 1600px) {
		width: 85vw;
		gap: 2rem;
		padding: 2rem 2rem;
		margin-top: -8rem;
	}

	@media screen and (max-width: 1000px) {
		margin-top: -5rem;
	}

	@media screen and (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
		margin-top: -10rem;
		width: 90%;

		& > div:last-child {
			grid-column: 1 / -1;
		}
	}

	@media screen and (max-width: 600px) {
		margin-top: -15rem;
	}
`;

export const HeroSectionCard = styled.div`
	height: 100%;
	width: 100%;
	border-radius: 1rem;
	background-color: #f7f7f7;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	box-shadow: var(--shadow-xs);
	transition: var(--transition-normal);

	&:hover {
		transform: scale(1.01) translateY(-5px);
		box-shadow: var(--shadow-xs-hover);
	}
`;

export const HeroCardImage = styled.div`
	width: 9rem;
	height: 9rem;
	border-radius: 50%;
	overflow: hidden;
	border: 3px solid var(--color-secondary-light);
	margin-top: 1rem;

	@media screen and (max-width: 1100px) {
		width: 8rem;
		height: 8rem;
	}
`;

export const HeroCardTitle = styled.h3`
	font-size: 1.8rem;
	font-weight: 500;
	text-align: center;

	@media screen and (max-width: 1100px) {
		font-size: 1.6rem;
	}
`;
