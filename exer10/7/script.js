function adicionarTexto() {
    const texto =
    document.getElementById('textoInput').value;
    if (texto.trim() !== '') {
        const lista =
        document.getElementById('lista');
        const novoItem =
        document.createElement('li');
        novoItem.innerText = texto;
        lista.appendChild(novoItem);
        document.getElementById('textoInput').value = '';
    } else {
        alert('Por favor, insira um texto válido.');
    }
    }
