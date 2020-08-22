import React from "react";
import Modal from "styled-react-modal";

import Button from "../../Button";

import { Container, Title, SubTitle, Wrapper, ButtonWrapper } from "./styles";

function ModalExclusion({ isOpenExclude, toggleModalExclude }) {
	return (
		<StyledModal
			isOpen={isOpenExclude}
			onBackgroundClick={toggleModalExclude}
			onEscapeKeydown={toggleModalExclude}
		>
			<Container>
				<Title>Excluir Naver</Title>
				<SubTitle>Tem certeza que deseja excluir este Naver?</SubTitle>

				<Wrapper>
					<ButtonWrapper>
						<Button text="Cancelar" outlined />
					</ButtonWrapper>

					<ButtonWrapper>
						<Button text="Excluir" />
					</ButtonWrapper>
				</Wrapper>
			</Container>
		</StyledModal>
	);
}

export default ModalExclusion;

export const StyledModal = Modal.styled`
	width: 592px;
	height: 233px;
  
  background-color: #FFFFFF;
`;
