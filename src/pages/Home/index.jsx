import React, { useState } from "react";

import Button from "../../components/Button";
import ModalExclusion from "../../components/Modal/ModalExclusion";

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

function Home({ history }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenExclude, setIsOpenExclude] = useState(false);

	function toggleModal(e) {
		setIsOpen(!isOpen);
	}

	function toggleModalExclude(e) {
		setIsOpenExclude(!isOpenExclude);
	}

	function handleClickAdd() {
		history.push("/naver/register");
	}

	function handleClickExclude() {
		setIsOpenExclude(true);
	}

	return (
		<>
			<Container>
				<Wrapper>
					<Header>
						<Text>Navers</Text>
						<WrapperButton>
							<Button text="Adicionar Naver" onClick={handleClickAdd} />
						</WrapperButton>
					</Header>
				</Wrapper>

				<Body>
					<Cards>
						<Card
							toggleNaver={toggleModal}
							handleClickExclude={handleClickExclude}
						/>
						<Card
							toggleNaver={toggleModal}
							handleClickExclude={handleClickExclude}
						/>
						<Card
							toggleNaver={toggleModal}
							handleClickExclude={handleClickExclude}
						/>
						<Card
							toggleNaver={toggleModal}
							handleClickExclude={handleClickExclude}
						/>
						<Card
							toggleNaver={toggleModal}
							handleClickExclude={handleClickExclude}
						/>
						<Card
							toggleNaver={toggleModal}
							handleClickExclude={handleClickExclude}
						/>
					</Cards>
				</Body>
			</Container>

			<ModalNaver
				isOpen={isOpen}
				toggleModal={toggleModal}
				handleClickExclude={handleClickExclude}
			/>
			<ModalExclusion
				isOpenExclude={isOpenExclude}
				toggleModalExclude={toggleModalExclude}
			/>
		</>
	);
}

export default Home;
