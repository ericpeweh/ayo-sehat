import styled from "styled-components";

export const ButtonContainer = styled.button`
	padding: ${props => (props.size === "medium" ? "1rem 3rem" : "0.7rem 1.7rem")};
	border-radius: 1rem;
	background-color: ${props =>
		props.color === "primary" ? "var(--color-primary)" : "var(--color-secondary)"};
	border: none;
	color: white;
	font-size: ${props => (props.size === "medium" ? "2rem" : "1.8rem")};
	cursor: pointer;
	transition: var(--transition-normal);

	&:hover {
		background-color: ${props =>
			props.color === "primary" ? "var(--color-secondary)" : "var(--color-primary)"};
		transform: scale(1.02) translateY(-2px);
		box-shadow: var(--shadow-sm);
	}

	&:active {
		transform: scale(1.01) translateY(-1px);
		box-shadow: var(--shadow-xs);
	}
`;
