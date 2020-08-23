import React from "react";
import Modal from "styled-react-modal";

import {
	Container,
	HeaderWrapper,
	CloseWrapper,
	CloseIcon,
	Wrapper,
	Title,
	SubTitle,
} from "./styles";

function ModalConfirmation({
	isOpen,
	toggleModal,
	titleMessage,
	subTitleMessage,
}) {
	return (
		<StyledModal
			isOpen={isOpen}
			onBackgroundClick={toggleModal}
			onEscapeKeydown={toggleModal}
		>
			<Container>
				<HeaderWrapper>
					<CloseWrapper>
						<CloseIcon onClick={toggleModal} />
					</CloseWrapper>
				</HeaderWrapper>

				<Wrapper>
					<Title>{titleMessage}</Title>
					<SubTitle>{subTitleMessage}</SubTitle>
				</Wrapper>
			</Container>
		</StyledModal>
	);
}

export default ModalConfirmation;

export const StyledModal = Modal.styled`
	width: 592px;
	height: 160px;
  
  background-color: #FFFFFF;
`;
