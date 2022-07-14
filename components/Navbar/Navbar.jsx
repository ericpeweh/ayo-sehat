import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import {
	NavActionsContainer,
	NavbarContainer,
	NavbarImageContainer,
	NavItem,
	NavLinkItem,
	NavLinks,
	NavlinksContainer
} from "./Navbar.styles";
import { useRouter } from "next/router";

const Navbar = () => {
	const router = useRouter();
	const currentPath = router.asPath;

	return (
		<NavbarContainer>
			<NavbarImageContainer>
				<Image src="/logo.png" layout="responsive" alt="logo" height={125} width={512} />
			</NavbarImageContainer>
			<NavlinksContainer>
				<NavLinks>
					<NavLinkItem>
						<Link href="/">
							<NavItem isActive={currentPath === "/"}>Beranda</NavItem>
						</Link>
					</NavLinkItem>
					<NavLinkItem>
						<Link href="/toko">
							<NavItem isActive={currentPath === "/toko"}>Toko</NavItem>
						</Link>
					</NavLinkItem>
					<NavLinkItem>
						<Link href="/konsultasi">
							<NavItem isActive={currentPath === "/konsultasi"}>Konsultasi</NavItem>
						</Link>
					</NavLinkItem>
					<NavLinkItem>
						<Link href="/artikel">
							<NavItem isActive={currentPath === "/artikel"}>Artikel</NavItem>
						</Link>
					</NavLinkItem>
				</NavLinks>
			</NavlinksContainer>
			<NavActionsContainer>
				<Button>Login</Button>
				<p>
					<span>ID</span> | <span>EN</span>
				</p>
			</NavActionsContainer>
		</NavbarContainer>
	);
};

export default Navbar;
