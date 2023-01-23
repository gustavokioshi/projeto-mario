const botaoTraler = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fecha-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoTraler.addEventListener("click",() => {
    alternarModal()
    video.setAttribute("src",video.src);
}); 

botaoFecharModal.addEventListener("click",() => {
	alternarModal();
	video.setAttribute("src", "");
});