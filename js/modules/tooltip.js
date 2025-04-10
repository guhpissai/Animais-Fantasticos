export default function initTooltip() {
 const tooltips = document.querySelectorAll('[data-tooltip]')

 tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseOver);
 })

 function onMouseOver(e) {
  const tooltipBox = criarTooltip(this)
  tooltipBox.style.top = `${e.pageY}px`
  tooltipBox.style.left = `${e.pageX}px`

  onMouseMove.tooltipBox = tooltipBox
  this.addEventListener('mousemove', onMouseMove);
  
  onMouseLeave.element = this
  onMouseLeave.tooltipBox = tooltipBox
  this.addEventListener('mouseleave', onMouseLeave);
 }

 const onMouseMove = {
  handleEvent(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`
    this.tooltipBox.style.left = `${e.pageX + 20}px`
  }
 }

 const onMouseLeave = {
  handleEvent() {
   this.tooltipBox.remove()
   this.element.removeEventListener('mouseleave', onMouseLeave)
   this.element.removeEventListener('mousemove', onMouseMove)
  },
 }

 function criarTooltip(element) {
  const tooltipBox = document.createElement('div')
  const text = element.getAttribute('aria-label')
  tooltipBox.classList.add('tooltip')
  tooltipBox.innerText = text
  document.body.appendChild(tooltipBox)
  return tooltipBox
 }
}
