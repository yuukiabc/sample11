$(function() {
$('.list_item').click(function() {
    $('.header_item').text('メニュークリック処理が実行されました');
    $('#photo').fadeIn(10000);
    alert('チョッパー登場');
    $('.short_message').fadeOut(10000);
});
$('#delete').click(function() {
    $('.header_item').text('スローで画像消えます');
    $('#photo').fadeOut(1000);
    $('.short_message').fadeIn();
});

//$('.your-class').slick({
    //setting-name: setting-value
//});

$('.slider').slick({
    arrows: false,
    dots: true,
    autoplay: true
});
});
