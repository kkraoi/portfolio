'use strict'

{
  $(function(){


    $(window).scroll(function(){
      let dy = $(this).scrollTop();
      let wH = $(window).height();
      console.log(dy);
      console.log(wH);

      $('#bg0').css('background-position','0 '+dy+'px');//画像を固定（5pxスクロールすると5px分ｙ軸方向に加算する

      if(dy > 340){
        // $('#bg1').css('background-position','0 '+(dy-340)+'px');
        $('#bg1').css('background-position',(dy-340)+'px '+(dy-340)+'px');
      }else{
        $('#bg1').css('background-position','0 0');
      }

      if(dy > 680){
        $('#bg2').css('background-position','0 '+(dy-680)+'px');
      }else{
        $('#bg2').css('background-position','0 0');
      }

      if(dy > 340*3){
        $('#bg3').css('background-position','0 '+(dy-340*3)*2+'px');
      }else{
        $('#bg3').css('background-position','0 0');
      }

      if(dy > 340*3){
        $('#msg').css('opacity', (dy-340*3/(340*3/2)));
        $('#msg').css('top', 50+'%');
        let dx = (dy-340*3) > 600 ? 600 : (dy-340*3);
        $('#msg').css('left', dx);
      }else{
        $('#msg').css('opacity', 0);
      }

    });
  });


}
