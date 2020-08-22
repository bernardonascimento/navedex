import React, { useState } from "react";

import InputText from "../../components/InputText";
import Button from "../../components/Button";

import ModalConfirmation from "../../components/Modal/ModalConfirmation";

import {
	Container,
	Wrapper,
	Header,
	IconWrapper,
	Text,
	ArrowLeft,
	Body,
	Form,
	InputWrapper,
	ButtonContainer,
	ButtonWrapper,
} from "./styles";

function Naver({ history }) {
	const [isOpen, setIsOpen] = useState(false);
	const [titleMessage, setTitleMessage] = useState("");
	const [subTitleMessage, setSubTitleMessage] = useState("");

	function toggleModal(e) {
		setIsOpen(!isOpen);
	}

	function handleBack() {
		history.push("/naver");
	}

	function handleSave(e) {
		e.preventDefault();

		setTitleMessage("Naver Criado");
		setSubTitleMessage("Naver criado com sucesso!");
		setIsOpen(true);
	}

	return (
		<>
			<Container>
				<Wrapper>
					<Header>
						<IconWrapper>
							<ArrowLeft onClick={handleBack} />
						</IconWrapper>
						<Text>Adicionar Naver</Text>
					</Header>

					<Body>
						<Form>
							<InputWrapper>
								<InputText label="Nome" placeholder="Nome" />
							</InputWrapper>

							<InputWrapper>
								<InputText label="Cargo" placeholder="Cargo" />
							</InputWrapper>

							<InputWrapper>
								<InputText label="Idade" placeholder="Idade" />
							</InputWrapper>

							<InputWrapper>
								<InputText
									label="Tempo de empresa"
									placeholder="Tempo de empresa"
								/>
							</InputWrapper>

							<InputWrapper>
								<InputText
									label="Projetos que participou"
									placeholder="Projetos que participou"
								/>
							</InputWrapper>

							<InputWrapper>
								<InputText
									label="URL da foto do Naver"
									placeholder="URL da foto do Naver"
								/>
							</InputWrapper>

							<ButtonContainer>
								<ButtonWrapper>
									<Button text="Salvar" onClick={handleSave} />
								</ButtonWrapper>
							</ButtonContainer>
						</Form>
					</Body>
				</Wrapper>
			</Container>

			<ModalConfirmation
				isOpen={isOpen}
				toggleModal={toggleModal}
				titleMessage={titleMessage}
				subTitleMessage={subTitleMessage}
			/>
		</>
	);
}

export default Naver;
