import Image from "next/image";
import React from "react";
import {
	Address,
	CopyrighText,
	FooterContainer,
	FooterContent,
	FooterContentContainer,
	FooterContentTitle,
	FooterList,
	FooterListItem,
	LogoContainer,
	SocialLink,
	SocialLinkContainer
} from "./Footer.styles";
import { BsInstagram, BsTwitter, BsFacebook, BsYoutube } from "react-icons/bs";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterContentContainer>
				<FooterContent>
					<FooterContentTitle>AyoSehat Main Office</FooterContentTitle>
					<Address>
						Jl. Gajahmada No.12345, Kec. Pontianak Kota, Kota Pontianak, Kalimantan Barat 78181
					</Address>
					<LogoContainer>
						<Image
							src="/logo.png"
							layout="responsive"
							height={125}
							width={512}
							alt="logo AyoSehat"
						/>
					</LogoContainer>
				</FooterContent>
				<FooterContent>
					<FooterContentTitle>Pintasan</FooterContentTitle>
					<FooterList>
						<FooterListItem>Artikel & Berita</FooterListItem>
						<FooterListItem>Pertanyaan Umum</FooterListItem>
						<FooterListItem>Syarat & Ketentuan</FooterListItem>
						<FooterListItem>Kebijakan Privasi</FooterListItem>
						<FooterListItem>Membership Premium</FooterListItem>
					</FooterList>
				</FooterContent>
				<FooterContent>
					<FooterContentTitle>Kampanye</FooterContentTitle>
					<FooterList>
						<FooterListItem>Indonesia Sehat</FooterListItem>
						<FooterListItem>Bantuan Sosial 2022</FooterListItem>
						<FooterListItem>Mari New Normal</FooterListItem>
						<FooterListItem>Hidup Sehat Tanpa Cemas</FooterListItem>
						<FooterListItem>2023 Herd Immunity</FooterListItem>
					</FooterList>
				</FooterContent>
				<FooterContent>
					<FooterContentTitle>Sosial Media</FooterContentTitle>
					<FooterList>
						<FooterListItem>
							<SocialLinkContainer>
								<BsInstagram />
								<SocialLink>Instagram</SocialLink>
							</SocialLinkContainer>
						</FooterListItem>
						<FooterListItem>
							<SocialLinkContainer>
								<BsTwitter />
								<SocialLink>Twitter</SocialLink>
							</SocialLinkContainer>
						</FooterListItem>
						<FooterListItem>
							<SocialLinkContainer>
								<BsFacebook />
								<SocialLink>Facebook</SocialLink>
							</SocialLinkContainer>
						</FooterListItem>
						<FooterListItem>
							<SocialLinkContainer>
								<BsYoutube />
								<SocialLink>Youtube</SocialLink>
							</SocialLinkContainer>
						</FooterListItem>
					</FooterList>
				</FooterContent>
			</FooterContentContainer>
			<CopyrighText>&copy; AyoSehat 2022. All Rights Reserved</CopyrighText>
		</FooterContainer>
	);
};

export default Footer;
