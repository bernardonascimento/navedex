import React from "react";

import { NaverIconLarge } from "components/Logo/NaverIconLarge";

import InputText from "components/InputText";
import Button from "components/Button";

import { Container, Card, Wrapper, Form } from "./styles";

function Login() {
	return (
		<Container>
			<Card>
				<Wrapper>
					<NaverIconLarge />
					<Form>
						<InputText label="E-mail" placeholder="E-mail" />
						<InputText label="Senha" placeholder="Senha" />
						<Button text="Entrar" />
					</Form>
				</Wrapper>
			</Card>
		</Container>
	);
}

export default Login;
