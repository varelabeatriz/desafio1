function trocaImagem (id) {
    if(id == 1){
        $('#imagemDinamica').attr('src', './img/roxo.png');
        $('.row div').removeClass('active');
        $('.purple').addClass('active');
    }else if(id == 2){
        $('#imagemDinamica').attr('src', './img/verde.png');
        $('.row div').removeClass('active');
        $('.row .green').addClass('active');
    }else{
        $('#imagemDinamica').attr('src', './img/azul.png');
        $('.row div').removeClass('active');
        $('.blue').addClass('active');
    }
};

function trocaTamanho (tamanho) {
    $('.sizes div').removeClass('active');
    $('#tamanho' + tamanho).addClass('active');
};