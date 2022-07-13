import React from "react";
import Button from "../Button/Button";
import {
	Advantage,
	AdvantagesList,
	SubscriptionContainer,
	SubscriptionContent,
	SubscriptionDescription,
	SubscriptionTitle
} from "./Subscription.styles";

const Subscription = () => {
	return (
		<SubscriptionContainer>
			<SubscriptionContent>
				<SubscriptionTitle>Berlangganan Membership</SubscriptionTitle>
				<SubscriptionDescription>
					Bergabung sebagai member premium untuk mendapatkan beberapa benefit dengan harga
					terjangkau.
				</SubscriptionDescription>
				<AdvantagesList>
					<Advantage>Layanan konsultasi 24 jam</Advantage>
					<Advantage>Prioritas untuk pemeriksaan umum</Advantage>
					<Advantage>Voucher gratis ongkir Toko Kesehatan</Advantage>
					<Advantage>Membership poin, asuransi, dan lainnya</Advantage>
				</AdvantagesList>
				<Button color="secondary">Dapatkan sekarang</Button>
			</SubscriptionContent>
		</SubscriptionContainer>
	);
};

export default Subscription;
