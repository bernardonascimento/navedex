const formatDateToLocaleString = (str) => {
	if (!str) return "";
	let data = new Date(str);

	return `${data.getUTCDate()}/${("00" + (data.getUTCMonth() + 1)).slice(
		-2
	)}/${data.getUTCFullYear()}`;
};

export { formatDateToLocaleString };
