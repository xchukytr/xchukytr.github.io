console.log("Font Previewer");


var userText = $('#magicalInput').val();
var code1 = $('.box:first-child .code');
var code2 = $('.box:nth-child(2) .code');
var code3 = $('.box:nth-child(3) .code');
var code4 = $('.box:nth-child(4) .code');
var code5 = $('.box:nth-child(5) .code');
var code6 = $('.box:nth-child(6)  .code');
var code7 = $('.box:nth-child(7) .code');
var code8 = $('.box:nth-child(8) .code');
var code9 = $('.box:nth-child(9) .code');
var code10 = $('.box:nth-child(10) .code');
var code11 = $('.box:nth-child(11) .code');
var code12 = $('.box:nth-child(12) .code');
var code13 = $('.box:nth-child(13) .code');
var code14 = $('.box:nth-child(14) .code');
var code15 = $('.box:nth-child(15) .code');
var code16 = $('.box:nth-child(16) .code');
var code17 = $('.box:nth-child(17) .code');
var code18 = $('.box:nth-child(18) .code');
var code19 = $('.box:nth-child(19) .code');
var code20 = $('.box:nth-child(20) .code');

$('#magicalInput').change(function() {
    code1.html($(this).val()).css("fontFamily", ' "Amsterdam",cursive');
    code2.html($(this).val()).css("fontFamily", ' "Barcelona", cursive');
    code3.html($(this).val()).css("fontFamily", ' "Boston", sans-serif');
    code4.html($(this).val()).css("fontFamily", ' "BuenosAires", sans-serif');
    code5.html($(this).val()).css("fontFamily", ' Chicago, cursive');
    code6.html($(this).val()).css("fontFamily", ' "LosAngeles", cursive');
    code7.html($(this).val()).css("fontFamily", ' Manchester, cursive ');
    code8.html($(this).val()).css("fontFamily", ' Manhattan, sans-serif');
    code9.html($(this).val()).css("fontFamily", ' Melbourne, serif');
    code10.html($(this).val()).css("fontFamily", ' "MexicoCity", cursive');
    code11.html($(this).val()).css("fontFamily", ' "Montreal", sans-serif');
    code12.html($(this).val()).css("fontFamily", ' NewYork, cursive');
    code13.html($(this).val()).css("fontFamily", ' Paris, cursive');
    code14.html($(this).val()).css("fontFamily", ' "PortoRiko", cursive');
    code15.html($(this).val()).css("fontFamily", ' "Prague", cursive');
    code16.html($(this).val()).css("fontFamily", ' Sydney, cursive');
    code17.html($(this).val()).css("fontFamily", ' "Tokyo", cursive');
    code18.html($(this).val()).css("fontFamily", ' Copenhagen, cursive');
    code19.html($(this).val()).css("fontFamily", ' "Nanum Pen Script", cursive');
    code20.html($(this).val()).css("fontFamily", ' "Kumar One Outline", cursive');

});