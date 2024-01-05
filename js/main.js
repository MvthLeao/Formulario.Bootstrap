$(document).ready(function() {

    $('#tel').mask('(00) 00000 - 0000');

    $('#form').validate({
        submitHandler: function(form) {
            form.submit();
            alert('Você foi cadastrado com sucesso! Obrigado.');
        },
        invalidHandler: function(event, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Por gentileza, certifique que todos os campos foram preenchidos.`)
            }
        }
    });
});
