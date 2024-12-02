const button = document.getElementById("abrirModal");
const modal = document.querySelector("dialog");
const buttonClose = document.getElementById("fecharModal");

button.onclick = function () {
    modal.showModal();
};

buttonClose.onclick = function () {
    modal.close();
};
