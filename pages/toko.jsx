import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ShopHeader from "../components/ShopHeader/ShopHeader";
import ShopListing from "../components/ShopListing/ShopListing";
import ShopSearch from "../components/ShopSearch/ShopSearch";

export default function Toko() {
	return (
		<div>
			<Head>
				<title>AyoSehat | Toko Kesehatan</title>
				<meta
					name="description"
					content="AyoSehat - Toko Kesehatan lengkap untuk kebutuhan kesehatan anda"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main>
				<ShopHeader />
				<ShopSearch />
				<ShopListing />
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps(context) {
	return {
		props: {}
	};
}
