import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
	CenterBanner,
	LeftBanner,
	RecommendedItemA,
	RecommendedItemB,
	RecommendedItemC,
	ShopHeaderContainer,
	ShopHeaderContent,
	SuggestedItemA,
	SuggestedItemB
} from "./ShopHeader.styles";
import { FiChevronRight } from "react-icons/fi";

const ShopHeader = () => {
	return (
		<ShopHeaderContainer>
			<SectionTitle>Toko Kesehatan</SectionTitle>
			<ShopHeaderContent>
				<LeftBanner>
					<ul>
						<li>
							<p>Obat maag</p>
							<FiChevronRight />
						</li>
						<li>
							<p>Skincare jerawat</p>
							<FiChevronRight />
						</li>
						<li>
							<p>Mata & pengelihatan</p>
							<FiChevronRight />
						</li>
						<li>
							<p>Antibiotik</p>
							<FiChevronRight />
						</li>
						<li>
							<p>Alat bantu dengar</p>
							<FiChevronRight />
						</li>
						<li>
							<p>Perawatan luka</p>
							<FiChevronRight />
						</li>
						<li>
							<p>Perawatan kulit</p>
							<FiChevronRight />
						</li>
						<li>
							<p>Mulut & tenggorokan</p>
							<FiChevronRight />
						</li>
						<li>
							<p>P3K</p>
							<FiChevronRight />
						</li>
						<li>
							<p>Kebutuhan Pria</p>
							<FiChevronRight />
						</li>
						<li>
							<p>Kebutuhan Wanita</p>
							<FiChevronRight />
						</li>
					</ul>
				</LeftBanner>
				<CenterBanner>
					<p>Vaksinasi Booster Gratis 2022</p>
				</CenterBanner>
				<RecommendedItemA>
					<p>Produk Kecantikan</p>
				</RecommendedItemA>
				<RecommendedItemB>
					<p>Krim Luka</p>
				</RecommendedItemB>
				<RecommendedItemC>
					<p>Suplemen</p>
				</RecommendedItemC>
				<SuggestedItemA>
					<p>Completely B</p>
				</SuggestedItemA>
				<SuggestedItemB>
					<p>Ordinary</p>
				</SuggestedItemB>
			</ShopHeaderContent>
		</ShopHeaderContainer>
	);
};

export default ShopHeader;
