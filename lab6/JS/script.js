$('#first_button').click(function() {
  $('table div:even').find('h4').each(function() {
    $(this).replaceWith('<h6>'+$(this).html()+'</h6>');
  });
  $('table div:even').find('p').each(function() {
    $(this).addClass('newID');
  });
});

$('#second_button').click(function() {
  $('table div:odd').find('p').each(function(){
    $(this).empty();
  });
  $('table div:odd').find('h3').each(function(){
    $(this).empty();
  });
  $('table div:odd').find('img').each(function() {
    $(this).show(2000);
  });
});

//
//$('#').click(function() {
//  $('table div:odd').find('p h3').each(function(){
//    $(this).empty();
//  });
//});
                          
//  $('table div:odd').each(function() {
//    $(this).replaceWith("<img width=\"100px\" height=\"100px\" src='../Resources/PictureForLaba3.jpg'>").animate({
//      opacity: 0.25,
//      left: "+=50",
//      height: "toggle"
//    }, 4000, function() {
//    // Animation complete.
//    });
//  });
//
//$('#second_button').click(function() {
//  $('table div:odd').find('p h3').each(function(){
//    $(this).remove();
//  });
//});