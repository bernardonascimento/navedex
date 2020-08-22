import React from "react";

import { ButtonText } from "./styles";

function Button({ text, ...rest }) {
	return <ButtonText {...rest}>{text}</ButtonText>;
}

export default Button;
