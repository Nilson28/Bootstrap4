$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa fa-pause')
            $('#carouselButton').children('span').addClass('fa fa-play')
        }
        else if ($('#carouselButton').children('span').hasClass('fa fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa fa-play')
            $('#carouselButton').children('span').addClass('fa fa-pause')
        }

    });
});

$(document).ready(function () {
    $('#login').click(function () {
        $('#loginModal').modal('show')
    });
    $('#reserve').click(function () {
        $('#ReserveModal').modal('show')
    });
});