import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	padding: 32px;
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

export const Wrapper = styled.div`
	padding-top: 45px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;

	div:last-child {
		margin-left: 24px;
	}
`;

export const ButtonWrapper = styled.div`
	width: 176px;
`;
