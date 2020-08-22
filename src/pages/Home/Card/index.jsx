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

function Card({ toggleNaver }) {
	function handleDelete() {
		console.log("delete");
	}

	function handleEdit() {
		console.log("delete");
	}

	return (
		<Container>
			<Avatar src={photo} alt="Person photo" onClick={toggleNaver} />
			<TextName>Juliano Reis</TextName>
			<TextCharge>Front-end Developer</TextCharge>
			<IconWrapper>
				<DeleteIcon onClick={handleDelete} />
				<EditIcon onClick={handleEdit} />
			</IconWrapper>
		</Container>
	);
}

export default Card;
