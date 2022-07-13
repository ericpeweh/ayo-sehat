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

export const HeroCardImage = styled.h3`
	width: 9rem;
	height: 9rem;
	border-radius: 50%;
	overflow: hidden;
	border: 3px solid var(--color-secondary-light);
`;

export const HeroCardTitle = styled.h3`
	font-size: 1.8rem;
	font-weight: 500;
`;
