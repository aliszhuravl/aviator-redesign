$("#tab18").click(function(){
    $("#tab18").addClass("ord-tab1").removeClass("ord-tab2").removeClass("ord-tab3");
    $("#tab17").removeClass("ord-tab3").removeClass("ord-tab1").addClass("ord-tab2");
    $("#tab16").removeClass("ord-tab2").removeClass("ord-tab1").addClass("ord-tab3");
});

$("#tab17").click(function(){
    $("#tab17").addClass("ord-tab1").removeClass("ord-tab2").removeClass("ord-tab3");
    $("#tab16").removeClass("ord-tab3").removeClass("ord-tab1").addClass("ord-tab2");
    $("#tab18").removeClass("ord-tab2").removeClass("ord-tab1").addClass("ord-tab3");
});

$("#tab16").click(function(){
    $("#tab16").addClass("ord-tab1").removeClass("ord-tab2").removeClass("ord-tab3");
    $("#tab17").addClass("ord-tab2").removeClass("ord-tab3").removeClass("ord-tab1");
    $("#tab18").addClass("ord-tab3").removeClass("ord-tab2").removeClass("ord-tab1");
});

