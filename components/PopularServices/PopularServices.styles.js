import styled from "styled-components";

export const PopularServicesContainer = styled.section`
	padding: 10rem 0 10rem;
	background-image: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0.9) 10%,
			rgba(255, 255, 255, 0.4) 20%,
			rgba(255, 255, 255, 0.7) 90%,
			rgba(255, 255, 255, 0.9) 100%
		),
		url("/pattern-1.jpg");
	background-size: cover;
	background-position: center;

	@media screen and (max-width: 1400px) {
		padding: 3rem 0 5rem;
	}
`;

export const ServicesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 2rem;
	width: 160rem;
	margin: auto;
	margin-top: 5rem;

	@media screen and (max-width: 1700px) {
		width: 140rem;
	}

	@media screen and (max-width: 1500px) {
		width: 90vw;
	}

	@media screen and (max-width: 1200px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

export const ServiceCard = styled.div`
	border-radius: 1rem;
	background-color: #f9f9f9;
	box-shadow: var(--shadow-xs);
	display: flex;
	gap: 2rem;
	align-items: center;
	padding-left: 3rem;
	cursor: pointer;
	transition: var(--transition-normal);

	& > svg {
		font-size: 2.5rem;
	}

	&:hover {
		transform: scale(1.005) translateY(-2px);
		box-shadow: var(--shadow-xs-hover);
	}
`;

export const ServiceTitle = styled.h5`
	font-size: 1.6rem;
	font-weight: 400;
`;

export const FindMoreContainer = styled.div`
	grid-column: 1 / -1;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 3rem;
`;
