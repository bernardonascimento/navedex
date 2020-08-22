import styled, { css } from "styled-components";

import { KeyboardArrowLeft } from "../../styles/icons";

export const Container = styled.div`
	display: flex;
	justify-content: center;

	width: 100%;
	height: 100%;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 592px;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const IconWrapper = styled.div`
	padding-right: 22px;
`;

export const Text = styled.div`
	font-weight: 600;
	font-size: 24px;
`;

export const Body = styled.div`
	width: 100%;
`;

export const Form = styled.form`
	width: 100%;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const InputWrapper = styled.div`
	margin-top: 32px;
	width: 280px;
`;

export const ButtonContainer = styled.div`
	padding-top: 32px;
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

export const ButtonWrapper = styled.div`
	width: 176px;
`;

const iconCSS = css`
	cursor: pointer;
	flex-shrink: 0;

	width: 24px;
	height: 24px;
	color: #000000;
`;

export const ArrowLeft = styled(KeyboardArrowLeft)`
	${iconCSS}
`;
