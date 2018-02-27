$("#hide_adress").click(function(){
    $("#adr-content").addClass("adr-inner-hidden");
    $("#adr-block").addClass("adr-hidden");
    $("#hide_adress").addClass("simple-hidden");
    $("#show_adress").removeClass("simple-hidden");
});

$("#show_adress").click(function(){
    $("#adr-block").removeClass("adr-hidden");
    setTimeout(function() {
        $("#adr-content").removeClass("adr-inner-hidden");
    }, 400);
    $("#hide_adress").removeClass("simple-hidden");
    $("#show_adress").addClass("simple-hidden");
});