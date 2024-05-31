function reverterLista() {
    const lista = document.getElementById('minhaLista');
    const itens = Array.from(lista.getElementsByTagName('li'));
    lista.innerHTML = '';
    for (let i = itens.length - 1; i >= 0; i--) {
        lista.appendChild(itens[i]);
    }
}