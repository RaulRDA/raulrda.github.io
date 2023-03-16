const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("body");

const instagram = document.getElementById("instagram");
const whatsapp = document.getElementById("whatsapp");
const paypal = document.getElementById("paypal");

const normalizePosition = (mouseX, mouseY) => {

  const {
    left: scopeOffsetX,
    top: scopeOffsetY
  } = scope.getBoundingClientRect();

  const scopeX = mouseX - scopeOffsetX;
  const scopeY = mouseY - scopeOffsetY;

  const outOfBoundsOnX =
    scopeX + contextMenu.clientWidth > scope.clientWidth;

  const outOfBoundsOnY =
    scopeY + contextMenu.clientHeight > scope.clientHeight;

  let normalizedX = mouseX;
  let normalizedY = mouseY;

  if (outOfBoundsOnX) {
    normalizedX =
      scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
  }

  if (outOfBoundsOnY) {
    normalizedY =
      scopeOffsetX + scope.clientHeight - contextMenu.clientHeight;
  }

  return { normalizedX, normalizedY };
}

scope.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  const { clientX: mouseX, clientY: mouseY } = event;
  //const { normalizedX, normalizedY } = normalizePosition(mouseX, mouseY);

  contextMenu.style.top = `${mouseY/*normalizedY*/}px`;
  contextMenu.style.left = `${mouseX/*normalizedX*/}px`;

  setTimeout(() => {
    contextMenu.classList.add("visible");
  });
});

scope.addEventListener("click", (e) => {
  if (e.target.offsetParent != contextMenu) {
    contextMenu.classList.remove("visible");
  }
});

instagram.addEventListener("click", () => {
  window.open("https://instagram.com/raul_rda", "_blank");
});

whatsapp.addEventListener("click", () => {
  window.open("https://wa.me/+34642686033", "_blank");
});

paypal.addEventListener("click", () => {
  window.open("https://paypal.me/raulrda", "_blank");
});