import React from "react";
import { connect } from "react-redux";

import Loading from "react-loader-spinner";

import { Container, LoaderWrapper } from "./styles";

function Loader({ loader }) {
	const { loading } = loader;

	return (
		<>
			{loading && (
				<Container>
					<LoaderWrapper>
						<Loading type="Rings" color="#212121" height={80} width={80} />
						<span style={{ color: "#212121" }}>Carregando</span>
					</LoaderWrapper>
				</Container>
			)}
		</>
	);
}

const mapStateToProps = (state) => ({ loader: state.loader });
export default connect(mapStateToProps)(Loader);
