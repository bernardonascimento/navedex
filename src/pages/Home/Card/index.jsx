import React from "react";

import {
	Container,
	Avatar,
	TextName,
	TextCharge,
	IconWrapper,
	DeleteIcon,
	EditIcon,
} from "./styles";

function Card({ toggleNaver, handleClickEdit, handleClickExclude, data }) {
	return (
		<Container>
			<Avatar src={data.url || ""} alt="Person photo" onClick={toggleNaver} />
			<TextName>{data.name}</TextName>
			<TextCharge>{data.job_role}</TextCharge>
			<IconWrapper>
				<DeleteIcon onClick={handleClickExclude} />
				<EditIcon onClick={handleClickEdit} />
			</IconWrapper>
		</Container>
	);
}

export default Card;
