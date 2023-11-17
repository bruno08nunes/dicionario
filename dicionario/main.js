const modal = document.querySelector(".modal");
const palavras = document.querySelectorAll(".section-ingles p");
const backdrop = document.querySelector(".backdrop");

backdrop.addEventListener("click", (e) => {
    e.stopPropagation()
    if (e.target === backdrop) {
        modal.style.display = "none";
        backdrop.style.display = "none";
    }
})

for (let pos = 0; pos < palavras.length; pos++) {
    let word = palavras[pos];
    word.addEventListener("click", (e) => {
        e.stopPropagation();
        modal.style.display = "block";
        backdrop.style.display = "block";

        let palavraIngles = document.querySelector(".palavra-ingles");
        palavraIngles.textContent = e.target.textContent;
        palavraPortugues = document.querySelector(".palavra-portugues");
        audioIngles = document.querySelector(".audio-ingles");
        audioPortugues = document.querySelector(".audio-portugues")
        explicacaoIngles = document.querySelector(".explicacao-ingles")
        explicacaoPortugues = document.querySelector(".explicacao-portugues")
        

        switch (e.target.textContent) {
            case "Perhaps":
                palavraPortugues.textContent = "Talvez"
                audioIngles = "Teste1"
                explicacaoIngles.textContent = "OASFAOKSF"
                explicacaoPortugues.textContent = "AFS"
                break
            case "Actually":
                palavraPortugues.textContent = "Na verdade"
                audioIngles = "Teste5"
                break
        }
    })
}