import React, { useState } from "react";

import Button from "components/Button";

import Card from "./Card";
import ModalNaver from "./ModalNaver";

import {
	Container,
	Wrapper,
	Header,
	Text,
	WrapperButton,
	Body,
	Cards,
} from "./styles";

function Home() {
	const [isOpen, setIsOpen] = useState(false);

	function toggleModal(e) {
		setIsOpen(!isOpen);
	}

	return (
		<Container>
			<Wrapper>
				<Header>
					<Text>Navers</Text>
					<WrapperButton>
						<Button text="Adicionar Naver" />
					</WrapperButton>
				</Header>
			</Wrapper>

			<Body>
				<Cards>
					<Card toggleNaver={toggleModal} />
					<Card toggleNaver={toggleModal} />
					<Card toggleNaver={toggleModal} />
					<Card toggleNaver={toggleModal} />
					<Card toggleNaver={toggleModal} />
					<Card toggleNaver={toggleModal} />
				</Cards>
			</Body>

			<ModalNaver isOpen={isOpen} toggleModal={toggleModal} />
		</Container>
	);
}

export default Home;
