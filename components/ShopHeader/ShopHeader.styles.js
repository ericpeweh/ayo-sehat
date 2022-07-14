import styled from "styled-components";

export const ShopHeaderContainer = styled.div`
	margin-top: calc(9rem + 5rem);

	@media screen and (max-width: 900px) {
		margin-top: calc(7rem + 4rem);
	}
`;

export const ShopHeaderContent = styled.div`
	display: grid;
	grid-template-areas:
		"a b b b f"
		"a b b b f"
		"a b b b g"
		"a c d e g";
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(4, 1fr);
	height: 80vh;
	width: 160rem;
	margin: 4rem auto;
	gap: 2rem;

	& > div {
		border-radius: 1rem;
	}

	& > div:not(:first-child) {
		display: flex;
		align-items: flex-end;
		cursor: pointer;

		&:hover p {
			transform: translateY(-4px);
		}

		& > p {
			font-size: 2rem;
			padding: 2rem;
			margin-bottom: 0;
			font-weight: 500;
			color: #fff;
			transition: var(--transition-normal);
		}
	}

	@media screen and (max-width: 1700px) {
		width: 140rem;
	}

	@media screen and (max-width: 1500px) {
		width: 90vw;
		height: 80vh;
	}

	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(8, 1fr);
		grid-template-areas:
			"b b b b c c c c"
			"b b b b c c c c"
			"b b b b c c c c"
			"d d e e g g f f";
		height: 60vh;
	}

	@media screen and (max-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas:
			"b b"
			"c c"
			"e f"
			"g d";
		gap: 1.5rem;
	}
`;

export const LeftBanner = styled.div`
	grid-area: a;
	overflow: auto;
	border: 1px solid var(--color-primary);
	background-color: #f7f7f7;

	@media screen and (max-width: 1000px) {
		display: none;
	}

	&::-webkit-scrollbar {
		display: none;
	}

	ul {
		list-style-type: none;
		padding-left: 0;
		display: flex;
		flex-direction: column;

		& > li {
			padding: 1rem 2rem;
			margin: 0;
			font-size: 1.6rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex: 1;
			cursor: pointer;

			@media screen and (max-width: 1400px) {
				padding: 0.5rem 2rem;
			}

			&:hover {
				color: var(--color-primary);
			}
		}

		& > li:not(:last-child) {
			border-bottom: 1px solid var(--color-primary);
		}
	}
`;

export const CenterBanner = styled.div`
	grid-area: b;
	background-image: url("/banner-1.jpg");
	background-size: cover;
	background-position: center;

	& > p {
		color: #333 !important;
		font-weight: 600 !important;
	}
`;

export const RecommendedItemA = styled.div`
	grid-area: c;
	background-image: url("/banner-3.jpg");
	background-size: cover;
	background-position: center;
`;

export const RecommendedItemB = styled.div`
	grid-area: d;
	background-image: url("/banner-4.jpg");
	background-size: cover;
	background-position: center;
`;

export const RecommendedItemC = styled.div`
	grid-area: e;
	background-image: url("/banner-2.jpg");
	background-size: cover;
	background-position: center;
`;

export const SuggestedItemA = styled.div`
	grid-area: f;
	background-image: url("/banner-5.jpg");
	background-size: cover;
	background-position: center;

	& > p {
		color: #333 !important;
		font-weight: 600 !important;
	}
`;

export const SuggestedItemB = styled.div`
	grid-area: g;
	background-image: url("/banner-6.jpg");
	background-size: cover;
	background-position: center;

	& > p {
		color: #333 !important;
		font-weight: 600 !important;
	}
`;
