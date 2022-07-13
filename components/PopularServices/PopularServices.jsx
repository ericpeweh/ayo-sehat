import React from "react";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
	FindMoreContainer,
	PopularServicesContainer,
	ServiceCard,
	ServicesContainer,
	ServiceTitle
} from "./PopularServices.styles";
import { MdBloodtype } from "react-icons/md";
import { GiHypodermicTest } from "react-icons/gi";
import { BiFace } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { IoEar } from "react-icons/io5";
import { FaTeethOpen, FaSadTear } from "react-icons/fa";

const PopularServices = () => {
	return (
		<PopularServicesContainer>
			<SectionTitle>Layanan Populer</SectionTitle>
			<ServicesContainer>
				<ServiceCard>
					<MdBloodtype />
					<ServiceTitle>Cek darah lengkap</ServiceTitle>
				</ServiceCard>
				<ServiceCard>
					<GiHypodermicTest />
					<ServiceTitle>Test SWAB Antigen</ServiceTitle>
				</ServiceCard>
				<ServiceCard>
					<GiHypodermicTest />
					<ServiceTitle>Test PCR & Serologi</ServiceTitle>
				</ServiceCard>
				<ServiceCard>
					<GiHypodermicTest />
					<ServiceTitle>Rapid Test</ServiceTitle>
				</ServiceCard>
				<ServiceCard>
					<BiFace />
					<ServiceTitle>Konsultasi Jerawat</ServiceTitle>
				</ServiceCard>
				<ServiceCard>
					<BiFace />
					<ServiceTitle>Spesialis Penyakit Kulit</ServiceTitle>
				</ServiceCard>
				<ServiceCard>
					<BiFace />
					<ServiceTitle>Rekomendasi Skincare</ServiceTitle>
				</ServiceCard>
				<ServiceCard>
					<AiFillHeart />
					<ServiceTitle>Spesialis Penyakit Dalam</ServiceTitle>
				</ServiceCard>
				<ServiceCard>
					<AiFillHeart />
					<ServiceTitle>Jantung dan Paru</ServiceTitle>
				</ServiceCard>
				<ServiceCard>
					<IoEar />
					<ServiceTitle>Konsultasi THT</ServiceTitle>
				</ServiceCard>
				<ServiceCard>
					<FaTeethOpen />
					<ServiceTitle>Gigi dan Mulut</ServiceTitle>
				</ServiceCard>
				<ServiceCard>
					<FaSadTear />
					<ServiceTitle>Psikologis & Mental</ServiceTitle>
				</ServiceCard>
				<FindMoreContainer>
					<Button>Layanan lainnya &rarr;</Button>
				</FindMoreContainer>
			</ServicesContainer>
		</PopularServicesContainer>
	);
};

export default PopularServices;
