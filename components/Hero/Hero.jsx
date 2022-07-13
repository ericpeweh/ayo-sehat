import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import ButtonOutlined from "../ButtonOutlined/ButtonOutlined";
import {
	ButtonsContainer,
	HeroContainer,
	HeroContentContainer,
	HeroSubtitle,
	HeroTitle
} from "./Hero.styles";

const Hero = () => {
	return (
		<HeroContainer>
			<HeroContentContainer>
				<HeroTitle>Akses Kesehatan Dimanapun, Kapanpun!</HeroTitle>
				<HeroSubtitle>
					Sistem kesehatan tersentralisasi, lakukan konsultasi, janji medis, media pengobatan, toko
					kesehatan dan komunitas kesehatan hanya dari rumah anda.
				</HeroSubtitle>
				<ButtonsContainer>
					<Button color="secondary">Pelajari lebih lanjut &rarr;</Button>
					<ButtonOutlined>Daftar sekarang</ButtonOutlined>
				</ButtonsContainer>
			</HeroContentContainer>
		</HeroContainer>
	);
};

export default Hero;
