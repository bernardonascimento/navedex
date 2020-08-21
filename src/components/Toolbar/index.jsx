import React from "react";

import { NaverIconSmall } from "components/Logo/NaverIconSmall";
import { Container, CloseButton } from "./styles";

function Toolbar() {
	return (
		<Container>
			<NaverIconSmall />
			<CloseButton>Sair</CloseButton>
		</Container>
	);
}

export default Toolbar;