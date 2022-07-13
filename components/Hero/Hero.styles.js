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
`;

export const HeroContentContainer = styled.div`
	padding-left: 10rem;
`;

export const HeroTitle = styled.h1`
	font-size: 3rem;
	font-weight: 600;
	color: #fff;
`;

export const HeroSubtitle = styled.h2`
	font-size: 2.4rem;
	font-weight: 300;
	text-shadow: 0px 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
	margin-bottom: 5rem;
	color: #fff;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 2rem;
`;
