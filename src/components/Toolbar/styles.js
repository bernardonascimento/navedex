import styled from "styled-components";

import { NaversIcon } from "components/NaversIcon";

export const Container = styled.div`
	height: 85;
	padding: 24px;

	display: flex;
	justify-content: space-between;
`;

export const NaveIcon = styled(NaversIcon)`
	height: 37px;
`;

export const CloseButton = styled.button`
	cursor: pointer;
`;
