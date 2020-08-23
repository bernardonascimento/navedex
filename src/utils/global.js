const formatDateToLocaleString = (str) => {
	if (!str) return "";
	let data = new Date(str);

	return `${("00" + data.getUTCDate()).slice(-2)}/${(
		"00" +
		(data.getUTCMonth() + 1)
	).slice(-2)}/${data.getUTCFullYear()}`;
};

const formatDateToInput = (str) => {
	if (!str) return "";
	let data = new Date(str);

	return `${data.getUTCFullYear()}-${("00" + (data.getUTCMonth() + 1)).slice(
		-2
	)}-${("00" + data.getUTCDate()).slice(-2)}`;
};

export { formatDateToLocaleString, formatDateToInput };
