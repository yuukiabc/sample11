$(function() {
    $('.header_item').click(function(){
        $('html, body').animate({ 
          'scrollTop': 0 
        }, 500);
      });
$('.list_item').click(function() {
    $('.header_deputyitem').text('メニュークリック処理が実行されました');
    $('#photo').fadeIn(10000);
    alert('チョッパー登場');
    $('.short_message').fadeOut(10000);
});
$('#delete').click(function() {
    $('.header_deputyitem').text('スローで画像消えます');
    $('#photo').fadeOut(1000);
    $('.short_message').fadeIn();
});

//$('.your-class').slick({
    //setting-name: setting-value
//});

$('.slider').slick({
    
    dots: true,
    autoplay: true
});
});
