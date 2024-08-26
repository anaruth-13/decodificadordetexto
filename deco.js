// Função que codifica o texto
function codifica() {
    let texto = document.querySelector('.apresentacao_conteudo_texto').value;
    let textoCodificado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.querySelector('.apresentacao_conteudo_texto').value = textoCodificado;
}

// Função que decodifica o texto
function decodifica() {
    let texto = document.querySelector('.apresentacao_conteudo_texto').value;
    let textoDecodificado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.querySelector('.apresentacao_conteudo_texto').value = textoDecodificado;
}

// Função que copia o texto para a área de transferência
function copiarTexto() {
    const texto = document.querySelector('.apresentacao_conteudo_texto').value;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado com sucesso!');
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}

document.querySelector('.apresentacao_conteudo_botao_codifica').addEventListener('click', codifica);
document.querySelector('.apresentacao_conteudo_botao_decodifica').addEventListener('click', decodifica);
document.querySelector('.apresentacao_conteudo_botao_copiar').addEventListener('click', copiarTexto);
