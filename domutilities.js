
export const renderElement = (tagName, textContent, parentElement, className = '') => {
  const child = document.createElement(tagName)
  child.textContent = textContent
 
  if (className) {
    child.classList.add(className)
  }
  parentElement.appendChild(child)
}

