import React, { useState, useContext } from "react";

import { NaverIconLarge } from "../../components/Logo/NaverIconLarge";

import InputText from "../../components/InputText";
import Button from "../../components/Button";
import AuthContext from "../../contexts/auth";

import { Container, Card, Wrapper, Form } from "./styles";

function Login() {
	const { logIn } = useContext(AuthContext);
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		// let error = await validate([
		// 	{ name: "email", value: form.email },
		// 	{ name: "senha", value: form.senha },
		// ]);

		// if (error) return;

		const result = await logIn(form);
		console.log(result);

		// if (Array.isArray(result)) {
		// 	setEmpresas(result);
		// 	setOpenDialog(true);
		// } else {
		// 	if (result !== "success") {
		// 		setMessageError(result);
		// 		setOpen(true);
		// 	}
		// }
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
							label="E-mail"
							placeholder="E-mail"
							name="email"
							value={form.email}
							onChange={handleChange}
						/>
						<InputText
							label="Senha"
							placeholder="Senha"
							name="password"
							value={form.password}
							onChange={handleChange}
						/>
						<Button text="Entrar" type="submit" />
					</Form>
				</Wrapper>
			</Card>
		</Container>
	);
}

export default Login;
