import styled, { css } from "styled-components";

import { Close, Delete, Edit } from "../../../styles/icons";

export const Container = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
`;

export const Avatar = styled.img`
	width: 503px;
	height: 503px;
	cursor: pointer;
`;

export const AvatarWrapper = styled.div`
	width: 503px;
`;

export const DataWrapper = styled.div`
	width: 100%;
`;

export const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;

	padding: 21px 21px 0 0;
	cursor: pointer;
`;

export const Description = styled.div`
	display: flex;
	height: 80%;
	flex-direction: column;
	padding-left: 30px;
`;

export const Name = styled.div`
	font-weight: 600;
	font-size: 24px;
	color: #000000;
`;
export const Title = styled.div`
	padding-top: 24px;
	font-weight: 600;
	font-size: 16px;
	color: var(--gray);
`;

export const SubTitle = styled.div`
	padding-top: 10px;
	font-weight: normal;
	font-size: 16px;
	color: var(--gray);
`;

export const IconWrapper = styled.div`
	height: 10%;
	padding-left: 30px;

	display: flex;
	justify-content: flex-start;

	> svg {
		margin-right: 15px;
	}
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

export const DeleteIcon = styled(Delete)`
	${iconCSS}
`;
export const EditIcon = styled(Edit)`
	${iconCSS}
`;
