var htmlBody = $('body');
var pageContainer = $('.page-container');

function modalOpened() {
    pageContainer.addClass('modal-opened');
}

function modalClosed() {
    pageContainer.removeClass('modal-opened');
}

function checkModal() {
    if ($('.ui-dialog').is(':visible')) {
        modalOpened();
    } else {
        modalClosed();
    }
}

pageContainer.on('click', function() {
    checkModal()
});


//close modal on click outside
htmlBody.on('click','.ui-widget-overlay', function() {
    $('.ui-dialog').filter(function () {
        return $(this).css('display') === 'block';
    }).find('.ui-dialog-content').dialog('close');
});

htmlBody.on('click','#clsbtn', function() {
    $('.ui-dialog').filter(function () {
        return $(this).css('display') === 'block';
    }).find('.ui-dialog-content').dialog('close');
});

//all modals initialization
var modal = $( '.modal' );
modal.dialog({
    draggable: false,
    resizable: false,
    modal: true,
    autoOpen: false,
    position: {
        my: 'top center'
    }
});

var modalCallback = $('.modal-callback');
var modalApartment = $('.modal-apartment');
var modalTimeline = $('.modal-timeline');
var modalFavorite = $('.modal-favorite');

modalCallback.dialog({
    show: 'fadeIn',
    hide: 'fadeOut',
    minWidth: 320,
    maxWidth: 550
});

modalApartment.dialog({
    minWidth: 320,
    maxWidth: 920,
    show: 'fadeIn',
    hide: 'fadeOut',
    width: '100%',
    position: {
        my: 'top right'
    },
    open: function(){
        $("body").css("overflow", "hidden");
    },
    close: function(){
        $("body").css("overflow", "auto");
    }
});

modalFavorite.dialog({
    minWidth: 320,
    maxWidth: 920,
    show: 'fadeIn',
    hide: 'fadeOut',
    width: '100%',
    position: {
        my: 'top right'
    },
    open: function(){
        $("body").css("overflow", "hidden");
    },
    close: function(){
        $("body").css("overflow", "auto");
    }
});

modalTimeline.dialog({
    minWidth: 320,
    maxWidth: 900,
    open: function(){
        $("body").css("overflow", "hidden");
    },
    close: function(){
        $("body").css("overflow", "auto");
    }
});

//modal-apartment opening
$('#plan-floor-4').on('click', function() {
    modalApartment.dialog('open');
});

$('#card1').on('click', function() {
    modalApartment.dialog('open');
});

$('#card2').on('click', function() {
    modalApartment.dialog('open');
});

$('#call-fav').on('click', function() {
    modalFavorite.dialog('open');
});

//modal-timeline opening
$('#timeline-2017-01').on('click', function() {
    modalTimeline.dialog('open');
});

//modal-callback opening
$('#modal-callback').on('click', function() {
    modalCallback.dialog('open');
});

//modal-callback-mobile opening
$('#modal-callback-mobile').on('click', function() {
    modalCallback.dialog('open');
});


//if (modalApartment.dialog('isOpen') === true) {
//    htmlBody.addClass('.no-scroll');
//}

