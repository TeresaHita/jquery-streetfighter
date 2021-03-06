$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    .mousedown(function() {
        //play hadouken sound
        playHadouken();
        //show hadouken and animate it to the right of the screen
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '520px');
            }
        );
    })
    .mouseup(function(){
        //ryu goes back to his ready position
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
    $(document).keydown(function(event){
    //showing ryu cool
     if (event.which === 88){
         $('.ryu-cool').show()
         $('.ryu-still').hide()
         $('.ryu-ready').hide()
         $('.ryu-throwing').hide()
     }   
    })
});

function playHadouken (){
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}