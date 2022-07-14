import styled from "styled-components";

export const MobileNavbarContainer = styled.div`
	height: 100%;
	width: 100%;
	background-color: #fff;
	z-index: 1100;
	position: fixed;
	top: 0;
	left: 0;
	display: none;
	flex-direction: column;
	justify-content: center;
	transition: var(--transition-normal);
	transform: ${props => (props.isOpen ? "translateX(0)" : "translateX(100%)")};

	@media screen and (max-width: 900px) {
		display: flex;
	}
`;

export const LogoContainer = styled.div`
	width: 40%;
	margin: 2rem auto 4rem;
`;

export const MobileNavbarListContainer = styled.nav`
	width: 80%;
	margin: 10rem auto;
`;

export const MobileNavLinkList = styled.ul`
	list-style-type: none;
	padding-left: 0;
`;

export const MobileNavListItem = styled.li`
	margin-bottom: 2rem;
	padding: 1rem 2rem;
	cursor: pointer;
	color: ${props => (props.isActive ? "var(--color-primary)" : "#222")};
	font-weight: ${props => (props.isActive ? 600 : 500)};

	&:not(:last-child):hover,
	&:not(:last-child):active {
		color: var(--color-primary);
	}

	& > button {
		margin-top: 3rem;
		width: 100%;
	}
`;

export const MobileNavLink = styled.a`
	display: block;
	font-size: 1.6rem;
	text-align: center;
	text-transform: uppercase;
`;

export const CloseButton = styled.button`
	cursor: pointer;
	border-radius: 50%;
	border: none;
	width: 4rem;
	height: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 2rem;
	right: 2rem;
	color: var(--color-primary);
	transition: var(--transition-normal);
	-webkit-tap-highlight-color: transparent;

	& > svg {
		font-size: 5rem;
	}

	&:active,
	&:hover {
		color: #fff;
		background-color: var(--color-primary);
		transform: scale(1.01) rotate(90deg);
	}
`;
