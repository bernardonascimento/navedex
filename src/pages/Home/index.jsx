import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Loader from "../../components/Loader";
import Button from "../../components/Button";
import ModalExclusion from "../../components/Modal/ModalExclusion";
import ModalConfirmation from "../../components/Modal/ModalConfirmation";

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

import {
	getNavers,
	getNaverById,
	resetShow,
	deleteNavers,
} from "../../redux/Navers/action";

function Home({ history, dispatch, navers, loader }) {
	const { loading } = loader;
	const { index, show } = navers;

	const [isOpen, setIsOpen] = useState(false);
	const [isOpenConfirme, setIsOpenConfirme] = useState(false);
	const [isOpenExclude, setIsOpenExclude] = useState(false);
	const [idSelected, setIdSelected] = useState(null);

	useEffect(() => {
		if (index.length <= 0) dispatch(getNavers());
	}, [dispatch, index]);

	function toggleNaver(id) {
		setIdSelected(id);
		dispatch(getNaverById(id, false));
		setIsOpen(true);
	}

	function toggleModal() {
		setIsOpen(false);
		dispatch(resetShow());
	}

	function toggleModalConfirme() {
		setIsOpenConfirme(false);
	}

	function toggleModalExclude(e) {
		setIsOpenExclude(!isOpenExclude);
	}

	function handleClickAdd() {
		history.push("/naver/register");
	}

	function handleClickExclude(id) {
		setIsOpenExclude(true);
		setIdSelected(id);
	}

	function handleClickEdit(id) {
		dispatch(getNaverById(id));
		history.push(`/naver/register/${id}`);
	}

	function handleExclusion() {
		if (idSelected) {
			dispatch(deleteNavers(idSelected));
			setIsOpenExclude(false);

			if (isOpen) toggleModal();

			setIsOpenConfirme(true);
		}
	}

	if (loading) return <Loader />;

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
						{index.map((value) => (
							<Card
								key={value.id}
								data={value}
								toggleNaver={() => toggleNaver(value.id)}
								handleClickExclude={() => handleClickExclude(value.id)}
								handleClickEdit={() => handleClickEdit(value.id)}
							/>
						))}
					</Cards>
				</Body>
			</Container>

			{show.id && (
				<ModalNaver
					isOpen={isOpen}
					toggleModal={toggleModal}
					handleClickEdit={() => handleClickEdit(idSelected)}
					handleClickExclude={() => handleClickExclude(idSelected)}
				/>
			)}

			<ModalExclusion
				isOpenExclude={isOpenExclude}
				toggleModalExclude={toggleModalExclude}
				handleExclusion={handleExclusion}
			/>
			<ModalConfirmation
				isOpen={isOpenConfirme}
				toggleModal={toggleModalConfirme}
				titleMessage={"Naver excluído"}
				subTitleMessage={"Naver excluído com sucesso!"}
			/>
		</>
	);
}

const mapStateToProps = (state) => ({
	navers: state.navers,
	loader: state.loader,
});
export default connect(mapStateToProps)(Home);
