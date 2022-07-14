import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
	Consultation,
	ConsultationContainer,
	ConsultationCount,
	ConsultationTitle,
	PopularConsultationContainer
} from "./PopularConsultation.styles";
import { MdBloodtype } from "react-icons/md";
import { GiHypodermicTest } from "react-icons/gi";
import { BiFace } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { IoEar } from "react-icons/io5";
import { FaTeethOpen, FaSadTear } from "react-icons/fa";

const PopularConsultation = () => {
	return (
		<PopularConsultationContainer>
			<SectionTitle>Populer & Terbaru</SectionTitle>
			<ConsultationContainer>
				<Consultation>
					<MdBloodtype />
					<ConsultationTitle>Penyakit Dalam</ConsultationTitle>
					<ConsultationCount>90k Konsultasi</ConsultationCount>
				</Consultation>
				<Consultation>
					<GiHypodermicTest />
					<ConsultationTitle>Penyintas COVID-19</ConsultationTitle>
					<ConsultationCount>303k Konsultasi</ConsultationCount>
				</Consultation>
				<Consultation>
					<BiFace />
					<ConsultationTitle>Pengobatan Jerawat</ConsultationTitle>
					<ConsultationCount>261k Konsultasi</ConsultationCount>
				</Consultation>
				<Consultation>
					<BiFace />
					<ConsultationTitle>Perawatan Luka</ConsultationTitle>
					<ConsultationCount>98k Konsultasi</ConsultationCount>
				</Consultation>
				<Consultation>
					<AiFillHeart />
					<ConsultationTitle>Jantung & hati</ConsultationTitle>
					<ConsultationCount>48k Konsultasi</ConsultationCount>
				</Consultation>
				<Consultation>
					<AiFillHeart />
					<ConsultationTitle>Pra-Operasi</ConsultationTitle>
					<ConsultationCount>32k Konsultasi</ConsultationCount>
				</Consultation>
				<Consultation>
					<FaSadTear />
					<ConsultationTitle>Psikologis & Mental</ConsultationTitle>
					<ConsultationCount>80k Konsultasi</ConsultationCount>
				</Consultation>
				<Consultation>
					<IoEar />
					<ConsultationTitle>THT</ConsultationTitle>
					<ConsultationCount>74k Konsultasi</ConsultationCount>
				</Consultation>
			</ConsultationContainer>
		</PopularConsultationContainer>
	);
};

export default PopularConsultation;
