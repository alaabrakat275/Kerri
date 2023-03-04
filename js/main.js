let aboutOffset=$('#name').offset().top
$(window).scroll(function(){
  if($(window).scrollTop()>aboutOffset){
    $('.navbar').css({'backgroundColor':'white','transition':'0.5s'})
    $('.nav-link').css('color','black')
    $('.navbar .logo').css('color','black')
    $('.up-icon').css('display','block')
  

  }else{
    $('.navbar').css({'backgroundColor':'transparent','transition':'1s'})
    $('.navbar-dark .navbar-nav .nav-link').css('color','white')
    $('.navbar .logo').css('color','white')
    $('.up-icon').css('display','none')
   
  }
})
$("a[href^='#']").click(function(e){
    $(e.target).css('color','#e65f78')
    let linkHref=$(e.target).attr('href')
    let sectionOffset=$(linkHref).offset().top
    $("html,body").animate({scrollTop:sectionOffset},500)
})
var typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: ['Kerri Deo.', 'A Photographer.','A Graphic Designer.'],  typeSpeed: 120,
    backSpeed: 60,
    backDelay: 3000,
    loop: true
});
$('.colors-box .color-item .color1').css('backgroundColor','rgb(230,95,120)');
$('.colors-box .color-item .color2').css('backgroundColor','rgb(55,184,223)');
$('.colors-box .color-item .color3').css('backgroundColor','rgb(49, 177, 100)');
$('.colors-box .color-item .color4').css('backgroundColor','rgb(93, 105, 246)');
$('.colors-box .color-item .color5').css('backgroundColor','rgb(135, 206, 235)');
$('.colors-box .color-item .color6').css('backgroundColor','rgb(242, 179, 26)');

$('.colors-box .color-item').click(function(e){
let bgColor= $(e.target).css('backgroundColor')
$('.change').css('color',bgColor)
$('i').css('color',bgColor)
$('.bgColor').css('backgroundColor',bgColor)
})
$('.test').click(function(){
  let divWidth=$('.colors').innerWidth();
  if($('#options').css('left')=='0px'){
    $('#options').animate({left:`${-divWidth}`},1000)
  }else{
    $('#options').animate({left:'0px'},1000)
  }
  
})
$(document).ready(function(){
  var mixer=mixitup('.list')
})