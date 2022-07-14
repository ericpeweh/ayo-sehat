import styled from "styled-components";

export const HeroContainer = styled.div`
	height: calc(100vh - 9rem);
	margin-top: 9rem;
	width: 100%;
	background-image: var(--gradient-tertiary), url("/hero.jpg");
	background-size: cover;
	background-position: left;
	display: grid;
	grid-template-columns: 2fr 1fr;
	align-items: center;

	@media screen and (max-width: 1400px) {
		height: calc(100vh - 7rem);
		margin-top: 7rem;
	}

	@media screen and (max-width: 900px) {
		grid-template-columns: 1fr;
		background-position: center;
	}
`;

export const HeroContentContainer = styled.div`
	padding-left: 10rem;

	@media screen and (max-width: 900px) {
		padding-right: 10rem;
	}

	@media screen and (max-width: 800px) {
		padding-right: 5rem;
		padding-left: 5rem;
	}

	@media screen and (max-width: 600px) {
		padding-right: 3rem;
		padding-left: 3rem;
	}
`;

export const HeroTitle = styled.h1`
	font-size: 3rem;
	font-weight: 600;
	color: #fff;

	@media screen and (max-width: 900px) {
		font-size: 2.8rem;
	}

	@media screen and (max-width: 600px) {
		font-size: 2.4rem;
	}
`;

export const HeroSubtitle = styled.h2`
	font-size: 2.4rem;
	font-weight: 300;
	text-shadow: 0px 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
	margin-bottom: 5rem;
	color: #fff;

	@media screen and (max-width: 900px) {
		font-size: 2.2rem;
	}

	@media screen and (max-width: 600px) {
		font-size: 1.8rem;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 2rem;

	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
`;
