const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const palavras = document.querySelectorAll(".section-ingles p");
const btnAudioIngles = document.querySelector(".audio-ingles");
const btnAudioPortugues = document.querySelector(".audio-portugues");
const btnAudioFrase = document.querySelector(".audio-frase");

let audioIngles, audioPortugues, audioFrase;
audioFrase = new Audio("audios/perhaps-frase.mp3");

backdrop.addEventListener("click", (e) => {
    // Função de fechar o modal
    e.stopPropagation();
    if (e.target === backdrop) {
        document.body.style.overflow = "auto";
        modal.style.animation = "sumir .4s forwards";
        backdrop.style.animation = "sumir .4s forwards";
    }
})

// Acessa o JSON
let request = new XMLHttpRequest();
request.open("GET", "informacoes.json");
request.responseType = "json";
request.send();
let informacoes;
request.onload = () => {
    informacoes = request.response;
}

palavras.forEach((palavra) => {
    // Função de abrir e fechar o modal
    palavra.addEventListener("click", (e) => {
        e.stopPropagation();
        document.body.style.overflow = "hidden";
        modal.style.display = "block";
        modal.style.animation = "aparecer .4s";
        backdrop.style.display = "block";
        backdrop.style.animation = "aparecer .4s";
    
        // Seleciona as palavras que tem que mudar
        let valor = e.target.textContent;
        const palavraIngles = document.querySelector(".palavra-ingles");
        palavraIngles.textContent = valor;
        
        valor = valor.toLowerCase()
        const palavraPortugues = document.querySelector(".palavra-portugues");
        palavraPortugues.textContent = informacoes[valor].traducao;
        
        const explicacaoIngles = document.querySelector(".explicacao-ingles");
        explicacaoIngles.textContent = informacoes[valor].descricaoIngles;
        
        const explicacaoPortugues = document.querySelector(".explicacao-portugues");
        explicacaoPortugues.textContent = informacoes[valor].descricaoPortugues;
        
        audioIngles = new Audio("audios/" + palavraIngles.textContent.toLowerCase().replace(" ", "-") + ".mp3");
        audioPortugues = new Audio("audios/" + palavraPortugues.textContent.toLowerCase().replace(" ", "-") + ".mp3");
    })
    palavra.addEventListener("mouseover", (e) => {
        const tituloIng = document.querySelector(".titulo-frase-ingles");
        const tituloPor = document.querySelector(".titulo-frase-portugues");
        const pFraseIng = document.querySelector(".frase-ingles");
        const pFrasePor = document.querySelector(".frase-conto");

        let valor = e.target.textContent;

        tituloIng.textContent = "Frase em inglês - " + valor;

        valor = valor.toLowerCase();

        tituloPor.textContent = "Frase em português - " + informacoes[valor].traducao;
        pFraseIng.textContent = informacoes[valor].fraseIngles;
        pFrasePor.textContent = informacoes[valor].fraseConto;
        audioFrase.pause();
        audioFrase = new Audio("audios/" + valor.toLowerCase().replace(" ", "-") + "-frase.mp3");
    })
})

// for (let pos = 0; pos < palavras.length; pos++) {
//     // Função de fazer o modal aparecer
//     let word = palavras[pos];
//     word.addEventListener("click", (e) => {
//         e.stopPropagation();
//         modal.style.display = "block";
//         modal.style.animation = "aparecer .4s";
//         backdrop.style.display = "block";
//         backdrop.style.animation = "aparecer .4s";
        
//         // Seleciona as palavras que tem que mudar
//         const palavraIngles = document.querySelector(".palavra-ingles");
//         palavraIngles.textContent = e.target.textContent;
//         const palavraPortugues = document.querySelector(".palavra-portugues");
//         const explicacaoIngles = document.querySelector(".explicacao-ingles");
//         const explicacaoPortugues = document.querySelector(".explicacao-portugues");
        
//         // Verifica qual é a palavra e coloca a tradução e explicação necessária
//         switch (e.target.textContent) {
//             case "Perhaps":
//                 palavraPortugues.textContent = "Talvez";
//                 explicacaoIngles.textContent = "Used to express uncertainty or possibility, when one does not wish to be too definite or assertive in the expression of an opinion, when making a polite request, offer, or suggestion.";
//                 explicacaoPortugues.textContent = "Indica possibilidade, mas não certeza. Sinônimos: acaso, quiçá, porventura.";
//                 break;
//             case "Actually":
//                 palavraPortugues.textContent = "Na verdade";
//                 explicacaoIngles.textContent = "As the truth or facts of a situation; really. Used to emphasize that something someone has said or done is surprising.";
//                 explicacaoPortugues.textContent = "É usada em uma afirmação que não é falsa, mas em que se oculta alguma informação.";
//                 break;
//             case "Push":
//                 palavraPortugues.textContent = "Empurrar";
//                 explicacaoIngles.textContent = "Exert force on (someone or something), typically with one's hand, in order to move them away from oneself or the origin of the force.";
//                 explicacaoPortugues.textContent = "Impulsionar com força, impelir com vigor, empuxar. Dar encontrões em.";
//                 break;
//             case "Borrow":
//                 palavraPortugues.textContent = "Pegar Emprestado";
//                 explicacaoIngles.textContent = "Take and use (something that belongs to someone else) with the intention of returning it.";
//                 explicacaoPortugues.textContent = "Pegar algo emprestado de alguém, com a intenção de devolvê-lo ao dono.";
//                 break;
//             case "Although":
//                 palavraPortugues.textContent = "Embora";
//                 explicacaoIngles.textContent = "In spite of the fact that; even though; however; but.";
//                 explicacaoPortugues.textContent = "Enquanto, mesmo que, apesar de que, ainda que.";
//                 break;
//             case "Traffic":
//                 palavraPortugues.textContent = "Tráfego";
//                 explicacaoIngles.textContent = "Vehicles moving on a road or public highway.";
//                 explicacaoPortugues.textContent = "Movimento ou fluxo de veículos.";
//                 break;
//             case "Awful":
//                 palavraPortugues.textContent = "Horrível";
//                 explicacaoIngles.textContent = "Very bad or unpleasant. Used to emphasize the extent of something, especially something unpleasant or negative.";
//                 explicacaoPortugues.textContent = "Adjetivo usado para algo muito ruim ou desagradável; horroroso, péssimo.";
//                 break;
//             case "Principal":
//                 palavraPortugues.textContent = "Diretor";
//                 explicacaoIngles.textContent = "The person with the highest authority or most important position in an organization, institution, or group.";
//                 explicacaoPortugues.textContent = "Aquele que dirige ou orienta; dirigente, gestor. Aquele que ocupa o cargo mais alto numa administração.";
//                 break;
//             case "Rug":
//                 palavraPortugues.textContent = "Tapete";
//                 explicacaoIngles.textContent = "A floor covering of thick woven material or animal skin, typically not extending over the entire floor.";
//                 explicacaoPortugues.textContent = "Revestimento feito de algum material (normalmente tecido) para revestir pisos.";
//                 break;
//             case "Clover":
//                 palavraPortugues.textContent = "Trevo";
//                 explicacaoIngles.textContent = "A herbaceous plant of the pea family that has dense, globular flower heads, and leaves that are typically three-lobed. It is an important and widely grown fodder and rotational crop.";
//                 explicacaoPortugues.textContent = "Design. comum a diversas plantas que têm folhas compostas por três folíolos; trifólio.";
//                 break;
//             default:
//                 palavraIngles.textContent = "Palavra não achada";
//                 break;
//         }

//         // Faz o áudio ser escolhido conforme o áudio especificado
//         audioIngles = new Audio("audios/" + palavraIngles.textContent.toLowerCase().replace(" ", "-") + ".mp3");
//         audioPortugues = new Audio("audios/" + palavraPortugues.textContent.toLowerCase().replace(" ", "-") + ".mp3");
//     })
// }

// As duas funções fazem o audio tocar se o outro não estiver tocando
btnAudioIngles.addEventListener("mouseover", () => {
    if (audioPortugues.paused ) {
        audioIngles.play();
    }
})

btnAudioPortugues.addEventListener("mouseover", () => {
    if (audioIngles.paused) {
        audioPortugues.play();
    }
})

btnAudioFrase.addEventListener("click", () => {
    audioFrase.play();
})

// Função de abrir e fechar o dialogo
const dialogo = document.querySelector(".dialogo");
const btnDialogo = document.querySelector(".btn-dialogo");
btnDialogo.addEventListener("click", (e) => {
    dialogo.classList.toggle("dialogo-fechado");
    btnDialogo.classList.toggle('btn-fechado');
})