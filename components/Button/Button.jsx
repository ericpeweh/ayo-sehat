import React from "react";
import { ButtonContainer } from "./Button.styles";

const Button = ({ children, color = "primary", size = "medium" }) => {
	return (
		<ButtonContainer color={color} size={size}>
			{children}
		</ButtonContainer>
	);
};

export default Button;
