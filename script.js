// ===== 1. TEMA CLARO / ESCURO =====

const botaoTema = document.getElementById("botao-tema");
const textoTema = document.getElementById("texto-tema");

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        textoTema.textContent = "Tema claro";
    } else {
        textoTema.textContent = "Tema escuro";
    }
});


// ===== 2. CARROSSEL DE PROJETOS =====

const carrossel = document.getElementById("carrossel");
const botaoVoltar = document.getElementById("voltar");
const botaoAvancar = document.getElementById("avancar");

const fimDoCarrossel = function () {
    return carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth - 1;
};

botaoAvancar.addEventListener("click", function () {
    if (fimDoCarrossel()) {
        carrossel.scrollTo(0, 0);
    } else {
        carrossel.scrollBy(340, 0);
    }
});

botaoVoltar.addEventListener("click", function () {
    if (carrossel.scrollLeft <= 0) {
        carrossel.scrollTo(carrossel.scrollWidth, 0);
    } else {
        carrossel.scrollBy(-340, 0);
    }
});


// ===== 3. FORMULÁRIO DE CONTATO =====

emailjs.init({
    publicKey: "dLyjfBF7hyl_RecA5"
});

const formulario = document.getElementById("formulario");
const resposta = document.getElementById("resposta");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    resposta.textContent = "Enviando mensagem...";

    emailjs.sendForm(
        "service_5fevo9i",
        "template_4guexvb",
        formulario
    )
        .then(function () {
            resposta.textContent = "Mensagem enviada com sucesso!";
            formulario.reset();
        })
        .catch(function (erro) {
            resposta.textContent = "Erro ao enviar a mensagem. Tente novamente.";
            console.log("Erro:", erro);
        });
});