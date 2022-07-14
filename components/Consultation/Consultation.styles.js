import styled from "styled-components";

export const ConsultationContainer = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	background-image: var(--gradient-tertiary), url("/consultation.jpg");
	background-size: cover;
	background-position: center;

	& > h2 {
		color: #fff;
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
`;
