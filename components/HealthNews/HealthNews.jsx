import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import {
	FindMoreContainer,
	HealthNewsContainer,
	NewsActionsContainer,
	NewsCard,
	NewsContainer,
	NewsContent,
	NewsImage,
	NewsTitle,
	ViewerCount
} from "./HealthNews.styles";
import { MdRemoveRedEye } from "react-icons/md";
import SectionTitle from "../SectionTitle/SectionTitle";

const HealthNews = () => {
	return (
		<HealthNewsContainer>
			<SectionTitle>Berita Kesehatan</SectionTitle>
			<NewsContainer>
				<NewsCard>
					<NewsImage imageUrl="/news-1.jpg" />
					<NewsContent>
						<NewsTitle>Tindakan preventif terhadap COVID-19 pada era new normal</NewsTitle>
						<NewsActionsContainer>
							<ViewerCount>
								<MdRemoveRedEye />
								<p>2.3jt orang</p>
							</ViewerCount>
							<Button size="small">Baca selengkapnya</Button>
						</NewsActionsContainer>
					</NewsContent>
				</NewsCard>
				<NewsCard>
					<NewsImage imageUrl="/news-2.jpg" />
					<NewsContent>
						<NewsTitle>
							Jadwal Vaksin Juli - Oktober 2022 | Region Kalimantan Barat dan sekitarnya
						</NewsTitle>
						<NewsActionsContainer>
							<ViewerCount>
								<MdRemoveRedEye />
								<p>8.5jt orang</p>
							</ViewerCount>
							<Button size="small">Baca selengkapnya</Button>
						</NewsActionsContainer>
					</NewsContent>
				</NewsCard>
				<NewsCard>
					<NewsImage imageUrl="/news-3.jpg" />
					<NewsContent>
						<NewsTitle>
							Manfaat menerapkan pola hidup sehat pada masa new normal | Foodpedia
						</NewsTitle>
						<NewsActionsContainer>
							<ViewerCount>
								<MdRemoveRedEye />
								<p>4.3jt orang</p>
							</ViewerCount>
							<Button size="small">Baca selengkapnya</Button>
						</NewsActionsContainer>
					</NewsContent>
				</NewsCard>
				<FindMoreContainer>
					<Button>Berita lainnya &rarr;</Button>
				</FindMoreContainer>
			</NewsContainer>
		</HealthNewsContainer>
	);
};

export default HealthNews;
