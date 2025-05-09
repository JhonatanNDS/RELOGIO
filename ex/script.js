function atualizarRelogio() {
  const agora = new Date();
  let horas = agora.getHours().toString().padStart(2, '0');
  let minutos = agora.getMinutes().toString().padStart(2, '0');
  let segundos = agora.getSeconds().toString().padStart(2, '0');

  const horaCompleta = `${horas}:${minutos}:${segundos}`;
  document.getElementById("clock").textContent = horaCompleta;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Chama uma vez para evitar atraso inicial
atualizarRelogio();
