import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ShopHeader from "../components/ShopHeader/ShopHeader";
import ShopListing from "../components/ShopListing/ShopListing";

export default function Toko() {
	return (
		<div>
			<Head>
				<title>AyoSehat | Toko Kesehatan</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main>
				<ShopHeader />
				<ShopListing />
			</main>
			<Footer />
		</div>
	);
}
