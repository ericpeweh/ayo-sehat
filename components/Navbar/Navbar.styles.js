import styled from "styled-components";

export const NavbarContainer = styled.div`
	height: 9rem;
	width: 100%;
	box-shadow: var(--shadow-xs);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 4rem;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #fff;
	z-index: 1000;
`;

export const NavbarImageContainer = styled.div`
	width: 20rem;
`;

export const NavlinksContainer = styled.nav`
	display: flex;
`;

export const NavLinks = styled.ul`
	list-style-type: none;
	display: flex;
	gap: 6rem;
`;

export const NavLinkItem = styled.li`
	&:hover a::after {
		width: 100%;
	}
`;

export const NavItem = styled.a`
	font-size: 2.1rem;
	height: 100%;
	display: block;
	cursor: pointer;
	position: relative;
	color: ${props => (props.isActive ? "var(--color-primary)" : "inherit")};

	&::after {
		content: "";
		width: ${props => (props.isActive ? "100%" : "0%")};
		height: 2px;
		border-radius: 1rem;
		background-color: var(--color-primary);
		position: absolute;
		bottom: -4px;
		left: 0;
		transform-origin: left center;
		transition: var(--transition-normal);
	}
`;

export const NavActionsContainer = styled.div`
	display: flex;
	gap: 2rem;

	& > button {
		align-self: center;
	}

	& > p {
		font-size: 2rem;

		& > span:first-child {
			cursor: pointer;
			color: var(--color-primary-dark);
		}

		& > span:not(:first-child) {
			cursor: pointer;
		}
	}
`;
