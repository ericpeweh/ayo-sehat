import React from "react";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import { SearchBarContainer, SearchBarInput, ShopSearchContainer } from "./ShopSearch.styles";

const ShopSearch = () => {
	return (
		<ShopSearchContainer>
			<SectionTitle>Cari produk</SectionTitle>
			<SearchBarContainer>
				<SearchBarInput placeholder="Nama produk atau kategori..." />
				<Button>Temukan</Button>
			</SearchBarContainer>
		</ShopSearchContainer>
	);
};

export default ShopSearch;
