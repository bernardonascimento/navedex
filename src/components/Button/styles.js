import styled from "styled-components";

export const ButtonText = styled.button`
	background: ${(props) => {
		if (props.outlined) return "transparent";
		if (props.disabled) return "#CCCCCC";
		else return "var(--gray)";
	}};

	color: ${(props) => (props.outlined ? "var(--gray)" : "var(--primary)")};
	border: ${(props) => (props.outlined ? "1px solid var(--gray)" : "none")};

	cursor: pointer;
	height: 40px;
	width: 100%;
	padding: 8px;

	font-weight: 600;
	font-size: 14px;
`;
