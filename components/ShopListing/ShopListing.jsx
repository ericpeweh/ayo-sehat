import React from "react";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
	CardContent,
	CardImageContainer,
	CardPrice,
	CardTitle,
	ShopCard,
	ShopListingContainer
} from "./ShopListing.styles";
import { RiShoppingBag3Line } from "react-icons/ri";

const ShopListing = () => {
	return (
		<ShopListingContainer>
			<SectionTitle>Daftar Produk</SectionTitle>
			{[...Array(10).keys()].map(item => (
				<ShopCard key={item}>
					<CardImageContainer imageUrl={`/banner-${item % 6 === 0 ? 6 : item % 6}.jpg`} />
					<CardContent>
						<CardTitle>Product A</CardTitle>
						<CardPrice>Rp399.000</CardPrice>
						<Button size="small">
							Tambahkan <RiShoppingBag3Line style={{ marginBottom: "-2px" }} />
						</Button>
					</CardContent>
				</ShopCard>
			))}
			<Button color="secondary">Produk lainnya &rarr;</Button>
		</ShopListingContainer>
	);
};

export default ShopListing;
