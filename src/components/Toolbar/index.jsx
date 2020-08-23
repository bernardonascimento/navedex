import React, { useContext } from "react";

import { NaverIconSmall } from "../Logo/NaverIconSmall";
import { Container, CloseButton } from "./styles";

import AuthContext from "../../contexts/auth";

function Toolbar() {
	const { logOut } = useContext(AuthContext);

	function handleClose() {
		logOut();
	}

	return (
		<Container>
			<NaverIconSmall />
			<CloseButton onClick={handleClose}>Sair</CloseButton>
		</Container>
	);
}

export default Toolbar;
