
function aumentar() {
    const img =
    document.getElementById('minhaImagem')
    const larguraAtual = 
    parseInt(window.getComputedStyle(img).width);
    img.clientWidth;
    img.style.width = (larguraAtual + 10) + 'px';

}

function diminuir() {
    const img =
    document.getElementById('minhaImagem');
    const larguraAtual =
    parseInt(window.getComputedStyle(img).width)
    img.clientWidth;
    img.style.width = (larguraAtual - 10) + 'px';
}