import React from "react";

import InputText from "../../components/InputText";
import Button from "../../components/Button";

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
	function handleBack() {
		history.push("/naver");
	}

	return (
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
								<Button text="Salvar" />
							</ButtonWrapper>
						</ButtonContainer>
					</Form>
				</Body>
			</Wrapper>
		</Container>
	);
}

export default Naver;
