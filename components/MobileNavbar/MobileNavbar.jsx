import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Button from "../Button/Button";
import {
	CloseButton,
	LogoContainer,
	MobileNavbarContainer,
	MobileNavbarListContainer,
	MobileNavLink,
	MobileNavLinkList,
	MobileNavListItem
} from "./MobileNavbar.styles";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";
import { enableScroll, disableScroll } from "../../utils/controlScrollbar";

const MobileNavbar = ({ isOpen, onClose }) => {
	const router = useRouter();
	const currentPath = router.asPath;

	useEffect(() => {
		if (isOpen) {
			disableScroll();
		} else {
			enableScroll();
		}
	}, [isOpen]);

	return (
		<MobileNavbarContainer isOpen={isOpen}>
			<CloseButton onClick={onClose}>
				<IoMdClose />
			</CloseButton>
			<MobileNavbarListContainer>
				<LogoContainer>
					<Image src="/logo.png" alt="AyoSehat logo" layout="responsive" height={125} width={512} />
				</LogoContainer>
				<MobileNavLinkList>
					<MobileNavListItem isActive={currentPath === "/"}>
						<Link href="/">
							<MobileNavLink>Beranda</MobileNavLink>
						</Link>
					</MobileNavListItem>
					<MobileNavListItem isActive={currentPath === "/toko"}>
						<Link href="/toko">
							<MobileNavLink>Toko Kesehatan</MobileNavLink>
						</Link>
					</MobileNavListItem>
					<MobileNavListItem isActive={currentPath === "/konsultasi"}>
						<Link href="/konsultasi">
							<MobileNavLink>Konsultasi Medis</MobileNavLink>
						</Link>
					</MobileNavListItem>
					<MobileNavListItem isActive={currentPath === "/artikel"}>
						<Link href="/artikel">
							<MobileNavLink>Artikel & Berita</MobileNavLink>
						</Link>
					</MobileNavListItem>
					<MobileNavListItem>
						<Button size="small">LOGIN</Button>
					</MobileNavListItem>
				</MobileNavLinkList>
			</MobileNavbarListContainer>
		</MobileNavbarContainer>
	);
};

export default MobileNavbar;
