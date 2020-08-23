import React from "react";
import { connect } from "react-redux";
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

import { formatDateToLocaleString } from "../../../utils/global";

function ModalNaver({
	isOpen,
	toggleModal,
	handleClickEdit,
	handleClickExclude,
	navers,
}) {
	const { show } = navers;

	return (
		<StyledModal
			isOpen={isOpen}
			onBackgroundClick={toggleModal}
			onEscapeKeydown={toggleModal}
		>
			<Container>
				<AvatarWrapper>
					<Avatar src={show.url} alt="Person photo" />
				</AvatarWrapper>
				<DataWrapper>
					<CloseWrapper>
						<CloseIcon onClick={toggleModal} />
					</CloseWrapper>

					<Description>
						<Name>{show.name}</Name>
						<SubTitle>{show.job_role}</SubTitle>

						<Title>Idade</Title>
						<SubTitle>{formatDateToLocaleString(show.birthdate)}</SubTitle>

						<Title>Tempo de empresa</Title>
						<SubTitle>{formatDateToLocaleString(show.admission_date)}</SubTitle>

						<Title>Projetos que participou</Title>
						<SubTitle>{show.project}</SubTitle>
					</Description>

					<IconWrapper>
						<DeleteIcon onClick={handleClickExclude} />
						<EditIcon onClick={handleClickEdit} />
					</IconWrapper>
				</DataWrapper>
			</Container>
		</StyledModal>
	);
}

const mapStateToProps = (state) => ({ navers: state.navers });
export default connect(mapStateToProps)(ModalNaver);

export const StyledModal = Modal.styled`
	width: 1006px;
	height: 503px;
  
  background-color: #FFFFFF;
`;
