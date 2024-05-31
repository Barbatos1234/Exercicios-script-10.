function atualizarParagrafo() {
    const checkbox = document.getElementById('meuCheckbox');
    const paragrafo = document.getElementById('estadoCheckbox');
    if (checkbox.checked) {
        paragrafo.innerText = 'Checkbox marcada';
    } else {
        paragrafo.innerText = 'Checkbox desmarcada';
    }
}
