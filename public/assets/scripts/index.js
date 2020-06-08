const buttonSearch = document.querySelector("#page-home main a")
// pegar o #modal quando clicar no button
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")
buttonSearch.addEventListener("click", () => {
// quando clicar no botão, remove a classe hide
    modal.classList.remove("hide")
})
//  quando clicar no a(#modal .header a), ativa a const close, irá executar a funçao anônima
//  que vai chamar o modal. pega a classList e adicionar a classe .hide
close.addEventListener("click", () => {
    modal.classList.add("hide")
})