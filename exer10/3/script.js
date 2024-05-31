let contador = 1;
    function adicionarItem() {
        const lista =
        document.getElementById('minhaLista');
        const novoItem =
        document.createElement('li');
            novoItem.innerText = 'Item' + contador;
            lista.appendChild(novoItem);
            contador++;
    }