for(let i = 0; i < 16; i++) {
    $("#ContenireBox").append("<div class='Box'> </div>")
}
$(".Box").on('click', function(){
    $(this).toggleClass('ChangeColor');
    });

