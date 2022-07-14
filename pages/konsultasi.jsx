import Head from "next/head";
import Consultation from "../components/Consultation/Consultation";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import PopularConsultation from "../components/PopularConsultation/PopularConsultation";

export default function Konsultasi() {
	return (
		<div>
			<Head>
				<title>AyoSehat | Konsultasi</title>
				<meta name="description" content="Konsultasi kesehatan dengan tenaga medis terbaik" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main>
				<Consultation />
				<PopularConsultation />
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
