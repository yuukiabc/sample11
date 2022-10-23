$(function() {
$('.list_item').click(function() {
    $('.header_item').text('メニュークリック処理が実行されました');
    $('#photo').fadeIn(10000);
    alert('チョッパー登場');
});
$('#delete').click(function() {
    $('.header_item').text('画像消えます');
    $('#photo').fadeOut(1000);
});



});