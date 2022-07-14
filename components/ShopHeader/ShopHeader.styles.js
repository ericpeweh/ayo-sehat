import styled from "styled-components";

export const ShopHeaderContainer = styled.div`
	margin-top: calc(9rem + 5rem);
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
`;

export const LeftBanner = styled.div`
	grid-area: a;
	overflow: auto;
	border: 1px solid var(--color-primary);
	background-color: #f7f7f7;

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
