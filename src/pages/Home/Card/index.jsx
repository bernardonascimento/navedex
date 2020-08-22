import React from "react";

import photo from "../../../assets/photo.jpg";

import {
	Container,
	Avatar,
	TextName,
	TextCharge,
	IconWrapper,
	DeleteIcon,
	EditIcon,
} from "./styles";

function Card({ toggleNaver, handleClickExclude }) {
	function handleEdit() {
		console.log("delete");
	}

	return (
		<Container>
			<Avatar src={photo} alt="Person photo" onClick={toggleNaver} />
			<TextName>Juliano Reis</TextName>
			<TextCharge>Front-end Developer</TextCharge>
			<IconWrapper>
				<DeleteIcon onClick={handleClickExclude} />
				<EditIcon onClick={handleEdit} />
			</IconWrapper>
		</Container>
	);
}

export default Card;
