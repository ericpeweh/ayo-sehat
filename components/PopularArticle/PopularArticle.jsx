import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
	Article,
	ArticleContainer,
	ArticleCount,
	ArticleTitle,
	PopularArticleContainer
} from "./PopularArticle.styles";
import { MdOutlinePets, MdHealthAndSafety } from "react-icons/md";
import { GrYoga } from "react-icons/gr";
import { GiHypodermicTest } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { FaChild, FaMapMarkerAlt } from "react-icons/fa";
import { BsFlower3 } from "react-icons/bs";

const PopularArticle = () => {
	return (
		<PopularArticleContainer>
			<SectionTitle>Topik terpopuler</SectionTitle>
			<ArticleContainer>
				<Article>
					<GiHypodermicTest />
					<ArticleTitle>Vaksinasi</ArticleTitle>
					<ArticleCount>1.2k Artikel</ArticleCount>
				</Article>
				<Article>
					<MdHealthAndSafety />
					<ArticleTitle>Pola Hidup Sehat</ArticleTitle>
					<ArticleCount>1.4k Artikel</ArticleCount>
				</Article>
				<Article>
					<GrYoga />
					<ArticleTitle>Olahraga dan Yoga</ArticleTitle>
					<ArticleCount>872 Artikel</ArticleCount>
				</Article>
				<Article>
					<BsFlower3 />
					<ArticleTitle>Diet Vegetarian</ArticleTitle>
					<ArticleCount>304 Artikel</ArticleCount>
				</Article>
				<Article>
					<FaChild />
					<ArticleTitle>Merawat Anak</ArticleTitle>
					<ArticleCount>756 Artikel</ArticleCount>
				</Article>
				<Article>
					<FaMapMarkerAlt />
					<ArticleTitle>Destinasi Liburan</ArticleTitle>
					<ArticleCount>364 Artikel</ArticleCount>
				</Article>
				<Article>
					<AiFillHeart />
					<ArticleTitle>Self Love</ArticleTitle>
					<ArticleCount>605 Artikel</ArticleCount>
				</Article>
				<Article>
					<MdOutlinePets />
					<ArticleTitle>Hewan Peliharaan</ArticleTitle>
					<ArticleCount>483 Artikel</ArticleCount>
				</Article>
			</ArticleContainer>
		</PopularArticleContainer>
	);
};

export default PopularArticle;
