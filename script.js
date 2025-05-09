function atualizarRelogio() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');

  const horaCompleta = `${horas}:${minutos}:${segundos}`;
  document.getElementById("clock").textContent = horaCompleta;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// Inputs e elementos
const seletorCor = document.getElementById("bgcolor");
const seletorRelogio = document.getElementById("clockcolor");
const relogio = document.getElementById("clock");
const labels = document.querySelectorAll("label");

// Aplica cores salvas ao carregar
window.addEventListener("load", () => {
  const bgColorSalva = localStorage.getItem("bgColor");
  const clockColorSalva = localStorage.getItem("clockColor");

  if (bgColorSalva) {
    document.body.style.backgroundColor = bgColorSalva;
    seletorCor.value = bgColorSalva;
  }

  if (clockColorSalva) {
    aplicarCorDoRelogio(clockColorSalva);
    seletorRelogio.value = clockColorSalva;
  }
});

// Função para aplicar cor ao relógio e às labels
function aplicarCorDoRelogio(cor) {
  relogio.style.color = cor;
  relogio.style.textShadow = `0 0 10px ${cor}`;
  labels.forEach(label => {
    label.style.color = cor;
    label.style.textShadow = `0 0 10px ${cor}`;
  });
}

// Eventos de mudança
seletorCor.addEventListener("input", () => {
  const cor = seletorCor.value;
  document.body.style.backgroundColor = cor;
  localStorage.setItem("bgColor", cor);
});

seletorRelogio.addEventListener("input", () => {
  const cor = seletorRelogio.value;
  aplicarCorDoRelogio(cor);
  localStorage.setItem("clockColor", cor);
});
