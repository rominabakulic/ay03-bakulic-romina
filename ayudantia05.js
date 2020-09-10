$(document).ready(function(){
    var escondido = false;
    $("#boton").click(function(){
        if (escondido==false){
            $("#linea1").hide();
            escondido = true}
        else{
            $("#linea1").show();
            escondido = false}
        });
    var texto = false;
    $("#boton2").click(function(){
        if (texto==false){
            $("#titulo").text("Perdón! Es Actividad Práctica Ayudantía 5");
            texto=true}
        else{
            $("#titulo").text("Actividad Práctica Ayudantía 3");
            texto=false}
    })
    $(".parrafo").mouseenter(function(){
        $(".parrafo").css("background","pink")
    })
    $(".parrafo").mouseleave(function(){
        $(".parrafo").css("background","white")
    })
})
