import styled from "styled-components";

export const ShopSearchContainer = styled.section`
	margin-top: 9rem;
	height: 40vh;
	background-color: lightseagreen;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background-image: var(--gradient-tertiary), url("/product-search.jpg");
	background-size: cover;
	background-position: center;

	& > h2 {
		color: #fff;
	}

	@media screen and (max-width: 900px) {
		height: 30vh;
		margin-top: 7rem;
	}
`;

export const SearchBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
`;

export const SearchBarInput = styled.input`
	padding: 1rem 2rem;
	font-size: 2rem;
	border-radius: 1rem;
	border: 1px solid #666;
	width: 60rem;

	@media screen and (max-width: 900px) {
		width: 40rem;
	}
`;
