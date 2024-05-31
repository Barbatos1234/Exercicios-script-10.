function removerItens() {
    const lista = 
    document.getElementById('minhaLista');
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}