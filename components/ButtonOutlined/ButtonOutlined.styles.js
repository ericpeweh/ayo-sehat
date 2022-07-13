import styled from "styled-components";

export const ButtonOutlinedContainer = styled.button`
	padding: 1rem 3rem;
	border-radius: 1rem;
	background-color: #fff;
	border: none;
	color: ${props =>
		props.color === "primary" ? "var(--color-primary)" : "var(--color-secondary)"};
	font-size: 2rem;
	cursor: pointer;
	transition: var(--transition-normal);

	&:hover {
		color: ${props =>
			props.color === "primary" ? "var(--color-secondary)" : "var(--color-primary)"};
		transform: scale(1.02) translateY(-2px);
		box-shadow: var(--shadow-sm);
	}

	&:active {
		transform: scale(1.01) translateY(-1px);
		box-shadow: var(--shadow-xs);
	}
`;
