import React from "react";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import { SearchBarContainer, SearchBarInput, ArticleSearchContainer } from "./ArticleSearch.styles";

const ArticleSearch = () => {
	return (
		<ArticleSearchContainer>
			<SectionTitle>Cari artikel</SectionTitle>
			<SearchBarContainer>
				<SearchBarInput placeholder="Judul atau kata kunci pencarian..." />
				<Button>Temukan</Button>
			</SearchBarContainer>
		</ArticleSearchContainer>
	);
};

export default ArticleSearch;
