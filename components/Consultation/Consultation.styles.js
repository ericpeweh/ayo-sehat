import styled from "styled-components";

export const ConsultationContainer = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: calc(100vh - 9rem);
	background-image: var(--gradient-tertiary), url("/consultation.jpg");
	background-size: cover;
	background-position: center;
	margin-top: 9rem;

	& > h2 {
		color: #fff;
	}

	@media screen and (max-width: 900px) {
		margin-top: 7rem;
		height: calc(60vh - 7rem);
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
