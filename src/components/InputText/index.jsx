import React from "react";

import { Container, Label, Input } from "./styles";

function InputText({ label, placeholder }) {
	return (
		<Container>
			<Label>{label}</Label>
			<Input placeholder={placeholder} />
		</Container>
	);
}

export default InputText;
