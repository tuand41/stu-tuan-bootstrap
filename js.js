$(document).ready(function () {
  $('.slide-sukien').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: '<i class="fas fa-caret-left left-arrow"></i>',
    nextArrow: '<i class="fas fa-caret-right right-arrow"></i>',
    // centerMode: true,
  });

  $('i.fa-bars').click(function(){
    $('.mb-left').toggle("slow");
  });


  $('#dv-ct-2').hide();
  $('#tab-dv-1').click(function(){
    $(this).addClass('active');
    $('#tab-dv-2').removeClass('active');
    $('#dv-ct-1').show();
    $('#dv-ct-2').hide();
  });

  $('#tab-dv-2').click(function(){
    $(this).addClass('active');
    $('#tab-dv-1').removeClass('active');
    $('#dv-ct-1').hide();
    $('#dv-ct-2').show();
  });

});



