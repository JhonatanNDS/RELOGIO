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
atualizarRelogio(); // evita atraso inicial

// Seletores de elementos
const seletorCor = document.getElementById("bgcolor");
const seletorRelogio = document.getElementById("clockcolor");
const relogio = document.getElementById("clock");

// Aplicar cores salvas do localStorage ao carregar
window.addEventListener("load", () => {
    const bgColorSalva = localStorage.getItem("bgColor");
    const clockColorSalva = localStorage.getItem("clockColor");

    if (bgColorSalva) {
        document.body.style.backgroundColor = bgColorSalva;
        seletorCor.value = bgColorSalva;
    }

    if (clockColorSalva) {
        relogio.style.color = clockColorSalva;
        relogio.style.textShadow = `0 0 10px ${clockColorSalva}`;
        seletorRelogio.value = clockColorSalva;
    }
});

// Quando o usuário escolher a cor de fundo
seletorCor.addEventListener("input", function () {
    const cor = seletorCor.value;
    document.body.style.backgroundColor = cor;
    localStorage.setItem("bgColor", cor);
});

// Quando o usuário escolher a cor do relógio
seletorRelogio.addEventListener("input", function () {
    const cor = seletorRelogio.value;
    relogio.style.color = cor;
    relogio.style.textShadow = `0 0 10px ${cor}`;
    localStorage.setItem("clockColor", cor);
});
