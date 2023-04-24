let copy = document.querySelector('.copy')

function yearCopy(){
    let dataAtual = new Date();
    let anoAtual  = dataAtual.getFullYear();
    copy.textContent = `© Copyright ${anoAtual} todos os direitos reservados`;
}

yearCopy();