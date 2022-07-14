import styled from "styled-components";

export const PopularConsultationContainer = styled.section`
	margin-top: 5rem;
`;

export const ConsultationContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;
	width: 160rem;
	margin: 4rem auto 8rem;
`;

export const Consultation = styled.div`
	border-radius: 1rem;
	box-shadow: var(--shadow-xs);
	display: Grid;
	grid-template-columns: 10rem 1fr;
	grid-template-rows: repeat(2, 1fr);
	justify-items: center;
	align-items: center;
	padding: 2rem 1rem;
	cursor: pointer;
	transition: var(--transition-normal);

	& > svg {
		font-size: 5rem;
		grid-row: 1 / -1;
	}

	&:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-xs-hover);
	}
`;

export const ConsultationTitle = styled.h4`
	font-size: 2rem;
	font-weight: 600;
	padding: 0;
	margin: 0;
	align-self: flex-end;
	justify-self: flex-start;
`;

export const ConsultationCount = styled.p`
	font-size: 1.6rem;
	font-weight: 400;
	grid-column: 2 / -1;
	align-self: flex-start;
	justify-self: flex-start;
	padding: 0;
	margin: 0;
	color: #666;
`;
