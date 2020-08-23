import styled, { css } from "styled-components";

import { Close } from "../../../styles/icons";

export const Container = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
`;

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 32px;
	display: flex;
	justify-content: flex-end;

	padding: 21px 21px 0 0;
`;

export const CloseWrapper = styled.div`
	height: 28px;
	width: 28px;
	cursor: pointer;
`;

export const Wrapper = styled.div`
	padding-left: 32px;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.div`
	font-weight: 600;
	font-size: 24px;
`;

export const SubTitle = styled.div`
	padding-top: 24px;
	font-weight: normal;
	font-size: 16px;
`;

const iconCSS = css`
	cursor: pointer;
	flex-shrink: 0;

	width: 24px;
	height: 24px;
	color: var(--gray);
`;

export const CloseIcon = styled(Close)`
	${iconCSS}
`;
