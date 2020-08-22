import styled, { css } from "styled-components";

import { Delete, Edit } from "../../../styles/icons";

export const Container = styled.div`
	width: 281px;
	height: 400px;
`;

export const Avatar = styled.img`
	width: 280px;
	height: 280px;
	cursor: pointer;
`;

export const TextName = styled.div`
	font-weight: 600;
	font-size: 16px;
	padding: 2px 0 0;
`;

export const TextCharge = styled.div`
	font-size: 16px;
	padding: 4px 0 0;
`;

export const IconWrapper = styled.div`
	padding: 10px 0 0;
	width: 80px;

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

export const DeleteIcon = styled(Delete)`
	${iconCSS}
`;
export const EditIcon = styled(Edit)`
	${iconCSS}
`;
