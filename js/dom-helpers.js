export const createElement = (tagName, textContent) => {
	const element = document.createElement(tagName)
	element.innerHTML = textContent
	return element
}
