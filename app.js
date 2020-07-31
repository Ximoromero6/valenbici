$(document).ready(function() {

    const URL = "http://mapas.valencia.es/lanzadera/opendata/Valenbisi/JSON";

    function getData(url) {
        let counter = 0;
        $.ajax({
            url: url,
            method: 'GET',
            beforeSend: function() {
                $('#spiner').show();
            }
        }).done(function(response) {
            $('#spiner').hide();
            $('#field').show();
            let data = JSON.parse(response);
            data['features'].forEach(item => {
                console.log(item.properties);
                let element = $('<div></div>').append($('<p></p>').append(`<b>Número: </b>${counter}<br><b>Nombre:</b> ${item.properties.address}<br><b>Bicis totales: </b>${item.properties.total}<br><b>Bicis disponibles: </b>${item.properties.available}<br><b>Huecos libres: </b>${item.properties.free}<br><b>Última actualización: </b>${item.properties.updated_at}<br>`));
                $('#container').append($(element));
                counter++;
            });


        }).fail(function(error) {
            console.log(error);
        });
    }

    $('#get').click(function() { getData(URL); });
});