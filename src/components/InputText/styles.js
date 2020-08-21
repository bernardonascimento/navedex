import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 62px;
`;

export const Label = styled.label`
	font-size: 14px;
	padding-bottom: 4px;
	font-weight: 600;
`;

export const Input = styled.input`
	height: 40px;
	font-size: 16px;
	border: 1px solid #424242;
	box-sizing: border-box;
	padding: 8px;

	&::placeholder {
		color: var(--placeholder);
	}
`;
