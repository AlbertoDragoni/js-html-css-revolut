$(document).ready(function(){


    $( ".icon" ).mouseenter(function() {
      $(this).next('.dropdown').slideToggle(500);
    });

    $( ".icon" ).mouseleave(function() {
      $(this).next('.dropdown').slideToggle(500);
    });

});
