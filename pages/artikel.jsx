import Head from "next/head";
import ArticleHeader from "../components/ArticleHeader/ArticleHeader";
import ArticleSearch from "../components/ArticleSearch/ArticleSearch";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import PopularArticle from "../components/PopularArticle/PopularArticle";

export default function Artikel() {
	return (
		<div>
			<Head>
				<title>AyoSehat | Artikel & Berita</title>
				<meta
					name="description"
					content="Artikel dan berita mengenai kesehatan dan pola hidup sehat"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<ArticleSearch />
			<main>
				<ArticleHeader />
				<PopularArticle />
			</main>
			<Footer />
		</div>
	);
}
