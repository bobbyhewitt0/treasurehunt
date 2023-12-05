const standardise = (text) => {
	text = text.toLowerCase()
	text = text.replace(/[^A-Z0-9]+/ig, "");
	return text
}

export default standardise