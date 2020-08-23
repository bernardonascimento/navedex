import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

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

import { postNavers, putNavers, getNaverById } from "../../redux/Navers/action";

import { formatDateToLocaleString } from "../../utils/global";

const initialValues = {
	job_role: "",
	admission_date: "",
	birthdate: "",
	project: "",
	name: "",
	url: "test-path/image-test.png",
};

function Naver({ history, dispatch, match, navers }) {
	const [isOpen, setIsOpen] = useState(false);
	const [titleMessage, setTitleMessage] = useState("");
	const [subTitleMessage, setSubTitleMessage] = useState("");
	const [form, setForm] = useState(initialValues);
	const { id } = match.params;
	const { show } = navers;

	useEffect(() => {
		if (id) dispatch(getNaverById(id));
	}, [dispatch, id]);

	useEffect(() => {
		if (show.id)
			setForm({
				...show,
				admission_date: formatDateToLocaleString(show.admission_date),
				birthdate: formatDateToLocaleString(show.birthdate),
			});
	}, [show]);

	function toggleModal(e) {
		setIsOpen(false);
		history.push("/naver");
	}

	function handleBack() {
		history.push("/naver");
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	}

	function handleSave(e) {
		e.preventDefault();

		if (id) {
			dispatch(putNavers(form));
			setTitleMessage("Naver atualizado");
			setSubTitleMessage("Naver atualizado com sucesso!");
			setIsOpen(true);
		} else {
			dispatch(postNavers(form));
			setTitleMessage("Naver criado");
			setSubTitleMessage("Naver criado com sucesso!");
			setIsOpen(true);
		}
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
								<InputText
									label="Nome"
									placeholder="Nome"
									name="name"
									value={form.name}
									onChange={handleChange}
								/>
							</InputWrapper>

							<InputWrapper>
								<InputText
									label="Cargo"
									placeholder="Cargo"
									name="job_role"
									value={form.job_role}
									onChange={handleChange}
								/>
							</InputWrapper>

							<InputWrapper>
								<InputText
									label="Idade"
									placeholder="Idade"
									name="birthdate"
									value={form.birthdate}
									onChange={handleChange}
								/>
							</InputWrapper>

							<InputWrapper>
								<InputText
									label="Tempo de empresa"
									placeholder="Tempo de empresa"
									name="admission_date"
									value={form.admission_date}
									onChange={handleChange}
								/>
							</InputWrapper>

							<InputWrapper>
								<InputText
									label="Projetos que participou"
									placeholder="Projetos que participou"
									name="project"
									value={form.project}
									onChange={handleChange}
								/>
							</InputWrapper>

							<InputWrapper>
								<InputText
									label="URL da foto do Naver"
									placeholder="URL da foto do Naver"
									name="url"
									value={form.url}
									onChange={handleChange}
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

const mapStateToProps = (state) => ({ navers: state.navers });
export default connect(mapStateToProps)(Naver);
