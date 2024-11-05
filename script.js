
window.addEventListener("Focus", () =>{ document.title = docTitle; });
function handleTabSwitch() {
    document.title = "N vai pagar msm?";
}


function handleTabFocus() {
    document.title = "Imagem e Legenda";
}

// Escuta os eventos de foco e perda de foco
window.addEventListener('blur', handleTabSwitch);
window.addEventListener('focus', handleTabFocus);
