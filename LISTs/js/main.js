{
  'use strict';

  $(function(){
    // let circle = $("<div></div>",{
    //   'class': 'ripple__effect'
    // });

    // let $clickcable = $('.submit');
    //
    // $clickcable.on('mousedown',function(e){
    //   let x = e.offsetX;
    //   let y = e.offsety;
    //   console.log(x);

      // $('.submit__wrapper').append(circle);
    // });


    //---------------------
    //delete btn
    //---------------------
    $('.delete-btn').on('click',function(){
      $(this).addClass("onDelete");
      setTimeout(function(){
        $('.delete-btn').removeClass("onDelete");
      },750);
    });
    //---------------------
    //  /delete btn
    //---------------------
  });
}
