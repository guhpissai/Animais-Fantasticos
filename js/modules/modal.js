export default function initModal() {
 const botaoAbrir = document.querySelector('[data-modal="abrir"]')
 const botaoFechar = document.querySelector('[data-modal="fechar"]')
 const containerModal = document.querySelector('[data-modal="container"]')
 
 if(botaoAbrir && botaoAbrir && containerModal) {
 
 function toogleModal(e) {
  e.preventDefault()
  containerModal.classList.toggle('ativo')
 }
 
 function cliqueForaModal(e) {
  if(e.target === this) {
   fecharModal()
  }
 }
 
 botaoAbrir.addEventListener('click', toogleModal)
 botaoFechar.addEventListener('click', toogleModal)
 containerModal.addEventListener("click", cliqueForaModal)
 }
}