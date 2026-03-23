const enviarMensagemButton = document.getElementById("btn-enviar");
const mensagemInput = document.getElementById("message");
const nomeInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const numeroInput = document.getElementById("numero");


enviarMensagemButton.addEventListener("click", function (event) {

    event.preventDefault();
    // 1. Pegar os valores dos campos
    const dados = {
        nome: nomeInput.value,
        email: emailInput.value,
        numero: numeroInput.value,
        mensagem: mensagemInput.value
    }

    if (!dados.nome || !dados.email || !dados.numero || !dados.mensagem) {
        alert("Por favor, preencha todos os campos antes de enviar a mensagem.");
        return;
    }
    else if (!/\S+@\S+\.\S+/.test(dados.email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return;
    }


    // 2. Definir o seu número (DDI + DDD + Número - apenas números)
    const telefone = "5583987867624";

    // 3. Criar o texto da mensagem formatado
    // O encodeURIComponent garante que espaços e símbolos virem código de URL
    const texto = encodeURIComponent(
        `Olá! Me chamo *${dados.nome}*\n` +
        `*Assunto:* ${dados.numero}\n` +
        `*E-mail:* ${dados.email}\n\n` +
        `*Mensagem:* ${dados.mensagem}`
    );

    // 4. Criar o link final
    const linkWhatsApp = `https://wa.me/${telefone}?text=${texto}`;

    // 5. Abrir em uma nova aba
    window.open(linkWhatsApp, "_blank");
});