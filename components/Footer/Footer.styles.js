import styled from "styled-components";

export const FooterContainer = styled.footer`
	background-color: var(--color-primary);
	padding-top: 6rem;
`;

export const FooterContentContainer = styled.div`
	width: 160rem;
	display: grid;
	grid-template-columns: 50rem repeat(3, 1fr);
	margin: 0 auto 6rem;
	gap: 2rem;

	@media screen and (max-width: 1700px) {
		width: 140rem;
	}

	@media screen and (max-width: 1500px) {
		width: 90vw;
	}

	@media screen and (max-width: 1400px) {
		grid-template-columns: 40rem repeat(2, 1fr);
		& > div:nth-child(2) {
			display: none;
		}
	}

	@media screen and (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);

		& > div:last-child {
			grid-column: 1 / -1;
		}

		& > div:last-child > ul {
			display: flex;
			flex-direction: row;
			gap: 4rem;
			width: 100%;
		}
	}

	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;

		& > div:last-child > ul {
			gap: 4rem;
			row-gap: 1rem;
			flex-wrap: wrap;
		}
	}
`;

export const LogoContainer = styled.div`
	width: 16rem;
	background-color: #fff;
	border-radius: 1rem;
	padding: 1rem 2rem;
	margin: 3rem 0;
`;

export const FooterContent = styled.div``;

export const FooterContentTitle = styled.h5`
	font-size: 1.8rem;
	color: #fff;
	font-weight: 600;
	margin-top: 0;
`;

export const FooterList = styled.ul`
	list-style-type: none;
	padding-left: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const Address = styled.p`
	font-size: 1.6rem;
	color: #fff;
	width: 90%;
`;

export const FooterListItem = styled.li`
	font-size: 1.6rem;
	color: #fff;
	margin-bottom: 2rem;
	cursor: pointer;
	position: relative;

	&:hover::after {
		width: 100%;
	}

	&::after {
		content: "";
		width: 0%;
		height: 2px;
		border-radius: 1rem;
		background-color: #fff;
		position: absolute;
		bottom: -4px;
		left: 0;
		transform-origin: left center;
		transition: var(--transition-normal);
	}
`;

export const SocialLinkContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;

	& > svg {
		font-size: 1.8rem;
	}
`;

export const SocialLink = styled.a``;

export const CopyrighText = styled.p`
	font-size: 1.6rem;
	color: #fff;
	grid-column: 1 / -1;
	background-color: var(--color-primary-dark);
	text-align: center;
	margin-bottom: 0;
	padding: 1.5rem;
`;
