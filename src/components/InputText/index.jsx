import React from "react";

import { Container, Label, Input } from "./styles";

function InputText({ label, ...rest }) {
	return (
		<Container>
			<Label>{label}</Label>
			<Input {...rest} />
		</Container>
	);
}

export default InputText;
