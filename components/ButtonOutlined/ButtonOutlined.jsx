import React from "react";
import { ButtonOutlinedContainer } from "./ButtonOutlined.styles";

const ButtonOutlined = ({ children, color = "primary" }) => {
	return <ButtonOutlinedContainer color={color}>{children}</ButtonOutlinedContainer>;
};

export default ButtonOutlined;
