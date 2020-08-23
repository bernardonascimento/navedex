import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	display: flex;
	margin: 32px;
`;

export const Header = styled.div`
	width: 100vw;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Text = styled.span`
	font-weight: 600;
	font-size: 40px;
`;

export const WrapperButton = styled.div`
	width: 176px;
	height: 40px;
`;

export const Body = styled.div`
	margin: 20px 32px;

	display: grid;
`;

export const Cards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	column-gap: 55px;
`;
