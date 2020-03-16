$(document).ready(function () {

    $(".quadrato").click(function () {

        var quadratoCliccato = $(this); //la faccio diventare una variabile globale rispetto ad ajax, così posso usarlo lì dentro, dove $(this) non funziona. 

        if (quadratoCliccato.text() !== "") {
            return
        }

        //così se il quadrato cliccato ha del contenuto (non è vuoto), blocca la funzione di click sul quadrato. In questo modo genero un numero solo per quadrato, ci si può cliccare una volta sola, e non si incasinano i colori (perché dal dal secondo click resta il primo colore uscito a prescindere dalla dimensione del nuovo numero).

        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function (numero) {
                quadratoCliccato.find("span").html(numero.response);

                if (numero.response <= 5) {
                    quadratoCliccato.addClass("giallo");
                } else {
                    quadratoCliccato.addClass("verde");
                }

            },
            error: function () {

            }
        });

    });

});
