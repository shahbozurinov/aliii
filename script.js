window.addEventListener("load", function(){
    AOS.init();
});



$('.bars').click(function(){
    $(this).toggleClass('activeN');
    $('.naw').toggleClass('activeN1');
});


$('.wrapper').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    navText: false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.box-textT').click(function(){
    $(this).toggleClass('active');
    $(this).parent().find('.accorDion-btn-after').toggleClass('arrow-animate');
    $(this).parent().find('.box-textB').slideToggle(280);
});