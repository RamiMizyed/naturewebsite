export const splitText = (element: HTMLElement) => {
	if (!element) return;

	// Get the parent element's content, preserving HTML tags like <br>, <b>
	const htmlContent = element.innerHTML;

	// Clear the parent element
	element.innerHTML = "";

	// Create a temporary container to preserve the original structure
	const tempContainer = document.createElement("div");
	tempContainer.innerHTML = htmlContent;

	// Function to wrap each character of text in a <span>, while preserving structure
	const wrapTextNodes = (node: ChildNode) => {
		if (node.nodeType === Node.TEXT_NODE) {
			const text = node.textContent || "";

			text.split("").forEach((char) => {
				const span = document.createElement("span");
				span.classList.add("char");
				span.textContent = char;
				element.appendChild(span);
			});
		} else if (node.nodeType === Node.ELEMENT_NODE) {
			// If it's an inline element like <b> or <br>, append it as is
			const clonedElement = node.cloneNode(false) as HTMLElement;
			element.appendChild(clonedElement);

			// Recursively wrap text nodes inside child elements
			node.childNodes.forEach((childNode) => wrapTextNodes(childNode));
		}
	};

	// Process each child node in the temporary container
	tempContainer.childNodes.forEach((childNode) => {
		wrapTextNodes(childNode);
	});
};
