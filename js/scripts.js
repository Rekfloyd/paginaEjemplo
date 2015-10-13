$(function(){
    var oculta = false;
    $("p#boton").click(function(){
        if(!oculta)
                $("p#texto").fadeIn();
        else
                $("p#texto").fadeOut();
        oculta = !oculta
    });
});
