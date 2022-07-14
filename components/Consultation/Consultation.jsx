import React from "react";
import Button from "../Button/Button";
import { ConsultationContainer, SearchBarContainer, SearchBarInput } from "./Consultation.styles";
import SectionTitle from "../SectionTitle/SectionTitle";

const Consultation = () => {
	return (
		<ConsultationContainer>
			<SectionTitle>Konsultasi mengenai</SectionTitle>
			<SearchBarContainer>
				<SearchBarInput placeholder="Spesialisasi atau gejala penyakit..." />
				<Button>Temukan</Button>
			</SearchBarContainer>
		</ConsultationContainer>
	);
};

export default Consultation;
