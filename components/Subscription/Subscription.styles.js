import styled from "styled-components";

export const SubscriptionContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	justify-items: center;
	align-items: center;
	background-image: var(--gradient-tertiary), url("/subscription.jpg");
	background-size: cover;
	background-position: bottom;
	color: #fff;
	margin-top: 5rem;
`;

export const SubscriptionContent = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	width: 160rem;
	padding: 10rem 0;
`;

export const SubscriptionTitle = styled.h2`
	font-size: 2.4rem;
	font-weight: 500;
`;

export const SubscriptionDescription = styled.p`
	font-size: 1.8rem;
	font-weight: 400;
`;

export const AdvantagesList = styled.ul`
	margin-bottom: 5rem;
`;

export const Advantage = styled.li`
	padding: 1rem;
	font-size: 1.7rem;
`;
