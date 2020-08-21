import React from "react";

import InputText from "components/InputText";
import Button from "components/Button";

import { Container, Card, NaveIcon, Wrapper, Form } from "./styles";

function Login() {
	return (
		<Container>
			<Card>
				<Wrapper>
					<NaveIcon />
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
