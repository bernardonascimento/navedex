import styled from "styled-components";

import { NaversIcon } from "styles/icons";

export const Container = styled.div`
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Card = styled.div`
	width: 448px;
	height: 408px;
	border: 1px solid #212121;
	box-sizing: border-box;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NaveIcon = styled(NaversIcon)``;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 80%;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 384px;
	height: 70%;
`;
