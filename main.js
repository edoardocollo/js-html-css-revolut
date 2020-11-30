// var wrapper = $('.wrapper');
// wrapper.hover(function(){
//   jQuery('.palette', this).toggle();
// });
var link = $('.wrapper');
link.mouseenter(function(){
  jQuery('.dropdown_palette', this).show();
});
link.mouseleave(function(){
  jQuery('.dropdown_palette', this).hide();
});
