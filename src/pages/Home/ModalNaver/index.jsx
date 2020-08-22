import React from "react";
import Modal from "styled-react-modal";

import {
	Container,
	Avatar,
	AvatarWrapper,
	DataWrapper,
	CloseWrapper,
	CloseIcon,
	Name,
	Title,
	SubTitle,
	IconWrapper,
	Description,
	DeleteIcon,
	EditIcon,
} from "./styles";

import photo from "../../../assets/photo.jpg";

function ModalNaver({ isOpen, toggleModal }) {
	function handleDelete() {
		console.log("delete");
	}

	function handleEdit() {
		console.log("delete");
	}

	return (
		<StyledModal
			isOpen={isOpen}
			onBackgroundClick={toggleModal}
			onEscapeKeydown={toggleModal}
		>
			<Container>
				<AvatarWrapper>
					<Avatar src={photo} alt="Person photo" />
				</AvatarWrapper>
				<DataWrapper>
					<CloseWrapper>
						<CloseIcon onClick={toggleModal} />
					</CloseWrapper>

					<Description>
						<Name>Juliano Reis</Name>
						<SubTitle>Front-end Developer</SubTitle>

						<Title>Idade</Title>
						<SubTitle>Lorem Ipsum</SubTitle>

						<Title>Tempo de empresa</Title>
						<SubTitle>Lorem Ipsum</SubTitle>

						<Title>Projetos que participou</Title>
						<SubTitle>Lorem Ipsum</SubTitle>
					</Description>

					<IconWrapper>
						<DeleteIcon onClick={handleDelete} />
						<EditIcon onClick={handleEdit} />
					</IconWrapper>
				</DataWrapper>
			</Container>
		</StyledModal>
	);
}

export default ModalNaver;

export const StyledModal = Modal.styled`
	width: 1006px;
	height: 503px;
  
  background-color: #FFFFFF;
`;
