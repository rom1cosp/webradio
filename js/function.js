/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$( document ).ready(function() {
  var menuName;
  
    $('.menu').click (function(){
      menuName=$(this).attr('id');
      $(this).css('z-index','20');
        $( this ).animate({
            top : 0,
            height: "100%"
        }, 1000, function() {
           
        });
  });
  $('button').click (function(e){
       e.stopPropagation(); //evite la propagation au parent
       
       switch(menuName){
           case 'menu1':          
            $( this ).parent().animate({
              top : 0,
              height: "33%"
            }, 1000, function() {
                $(this).css('z-index','1');
            });
            break;
             case 'menu2':          
            $( this ).parent().animate({
              top : "33%",
              height: "33%"
            }, 1000, function() {
                $(this).css('z-index','1');
            });
            break;
             case 'menu3':          
            $( this ).parent().animate({
              top : "66%",
              height: "34%"
            }, 1000, function() {
                $(this).css('z-index','1');
            });
            break;
        }
  });
});