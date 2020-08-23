import React, { useState, useContext, useEffect } from "react";

import { NaverIconLarge } from "../../components/Logo/NaverIconLarge";

import InputText from "../../components/InputText";
import Button from "../../components/Button";
import AuthContext from "../../contexts/auth";

import { Container, Card, Wrapper, Form } from "./styles";

function Login() {
	const { logIn } = useContext(AuthContext);
	const [disabled, setDisabled] = useState(false);
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	useEffect(() => {
		setDisabled(false);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setDisabled(true);

		const result = await logIn(form);
		console.log(result);
	};

	function handleChange(e) {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	}

	return (
		<Container>
			<Card>
				<Wrapper>
					<NaverIconLarge />
					<Form onSubmit={handleSubmit}>
						<InputText
							type="e-mail"
							label="E-mail"
							placeholder="E-mail"
							name="email"
							value={form.email}
							onChange={handleChange}
							required
						/>
						<InputText
							type="password"
							label="Senha"
							placeholder="Senha"
							name="password"
							value={form.password}
							onChange={handleChange}
							required
						/>
						<Button text="Entrar" type="submit" disabled={disabled} />
					</Form>
				</Wrapper>
			</Card>
		</Container>
	);
}

export default Login;
