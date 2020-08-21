import React from "react";

import { Container, NaveIcon, CloseButton } from "./styles";

function Toolbar() {
	return (
		<Container>
			<NaveIcon />
			<CloseButton>Sair</CloseButton>
		</Container>
	);
}

export default Toolbar;
