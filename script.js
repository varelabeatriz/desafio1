function trocaImagem (id) {
    if(id == 1){
        $('#imagemDinamica').attr('src', './img/roxo.png');
    }else if(id == 2){
        $('#imagemDinamica').attr('src', './img/verde.png');
    }else{
        $('#imagemDinamica').attr('src', './img/azul.png');
    }
};

function trocaTamanho (tamanho) {
    $('.sizes div').removeClass('active');
    $('#tamanho' + tamanho).addClass('active');
};