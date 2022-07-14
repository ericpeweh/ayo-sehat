import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import HealthNews from "../HealthNews/HealthNews";
import { ArticleHeaderContainer } from "./ArticleHeader.styles";

const ArticleHeader = () => {
	return (
		<ArticleHeaderContainer>
			<HealthNews />
		</ArticleHeaderContainer>
	);
};

export default ArticleHeader;
