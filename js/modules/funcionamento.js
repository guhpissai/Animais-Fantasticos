export default  function initFuncionamento() {
 const dataAgora = new Date()
 const diaAgora = dataAgora.getDay()
 const horarioAgora = dataAgora.getHours()
 
 const funcionamento = document.querySelector('[data-semana]')
 const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
 const horas = funcionamento.dataset.horario.split(',').map(Number)
 
 const horarioAberto = diasSemana.includes(diaAgora) && (horarioAgora >= horas[0] && horarioAgora < horas[1])
 
 if(horarioAberto) {
  funcionamento.classList.add('aberto')
 }
}