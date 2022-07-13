import Image from "next/image";
import React from "react";
import {
	HeroCardImage,
	HeroCardTitle,
	HeroSectionCard,
	HeroSectionContainer
} from "./HeroSection.styles";

const HeroSection = () => {
	return (
		<HeroSectionContainer>
			<HeroSectionCard>
				<HeroCardImage>
					<Image
						src="/card-1.png"
						alt="konsultasi"
						layout="responsive"
						width={1050}
						height={1050}
					/>
				</HeroCardImage>
				<HeroCardTitle>Konsultasi</HeroCardTitle>
			</HeroSectionCard>
			<HeroSectionCard>
				<HeroCardImage>
					<Image
						src="/card-2.png"
						alt="janji medis"
						layout="responsive"
						width={1050}
						height={1050}
					/>
				</HeroCardImage>
				<HeroCardTitle>Janji Medis</HeroCardTitle>
			</HeroSectionCard>
			<HeroSectionCard>
				<HeroCardImage>
					<Image
						src="/card-3.png"
						alt="media pengobatan"
						layout="responsive"
						width={1050}
						height={1050}
					/>
				</HeroCardImage>
				<HeroCardTitle>Media Pengobatan</HeroCardTitle>
			</HeroSectionCard>
			<HeroSectionCard>
				<HeroCardImage>
					<Image
						src="/card-4.png"
						alt="toko kesehatan"
						layout="responsive"
						width={1050}
						height={1050}
					/>
				</HeroCardImage>
				<HeroCardTitle>Toko Kesehatan</HeroCardTitle>
			</HeroSectionCard>
			<HeroSectionCard>
				<HeroCardImage>
					<Image src="/card-5.png" alt="komunitas" layout="responsive" width={1050} height={1050} />
				</HeroCardImage>
				<HeroCardTitle>Komunitas</HeroCardTitle>
			</HeroSectionCard>
		</HeroSectionContainer>
	);
};

export default HeroSection;
