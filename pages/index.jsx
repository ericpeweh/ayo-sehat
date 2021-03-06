import Head from "next/head";
import Footer from "../components/Footer/Footer";
import HealthNews from "../components/HealthNews/HealthNews";
import Hero from "../components/Hero/Hero";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import PopularServices from "../components/PopularServices/PopularServices";
import Subscription from "../components/Subscription/Subscription";

export default function Home() {
	return (
		<div>
			<Head>
				<title>AyoSehat - Solusi Kesehatan Anda</title>
				<meta name="description" content="AyoSehat - Solusi Kesehatan Anda" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<main>
				<Hero />
				<HeroSection />
				<HealthNews />
				<PopularServices />
				<Subscription />
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
