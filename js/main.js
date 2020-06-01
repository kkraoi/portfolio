'use strict'



{
  let ttlItem = $('div.ttl__item');
  let ttlNum = ttlItem.length;
  let ttlItemElm = new Array();
  let secTop = new Array()
  let secDist = new Array()

  let mtrItem = $('span.meter-value');
  let mtrNum = mtrItem.length;
  let mtrItemElm = new Array();

  let oItem = $('span.o');
  let navItem = $('li.nav-item');
  let secItem = $('section.content-box');
  let navNum = navItem.length;
  let secNum = secItem.length;

  let oItenElm = new Array();
  let navItemElm = new Array();
  let secItemElm = new Array();
  let navKey = new Array();
  let secKey = new Array();
  let distance = new Array();
  let height = new Array();
  let endPoint = new Array();

  let topPosition = new Array();
  //new Array()は配列化

  $(window).on('load scroll', function(){
    const std = $(window).scrollTop();
    for (let i = 0; i < navNum; i++) {
      navItemElm[i] = navItem.eq(i);
      secItemElm[i] = secItem.eq(i);
      oItenElm[i] = oItem.eq(i);
      ttlItemElm[i] = ttlItem.eq(i);

      navKey[i] = navItemElm[i].find('a').attr('href').replace(/#/g,"");
      secKey[i] = secItemElm[i].attr('id');
      //attrは属性の値を取得
      //replace(x,y)はｘをｙに置き換える

      distance[i] = secItemElm[i].offset().top - 40 ;
      //offset().topはそのtopの座標の値を取得する
      height[i] = secItemElm[i].outerHeight();
      //outerHeight()はそのエレメントのmarginを含めた高さを取得する
      endPoint[i] = distance[i] + height[i];


      secTop[i] = secItem.eq(i).offset().top;

      if (secTop[i] < std && std < endPoint[i]) {
        secDist[i] = std - secTop[i] - 20;
        ttlItem.eq(i).css('top', secDist[i]);
      }else if(std < distance[i] || std > endPoint[i]){
        secDist[i] = 0;
        ttlItem.eq(i).css('top', secDist[i]);
      }

      if(navKey[i] === secKey[i] && std > distance[i] && std < endPoint[i]){
        oItem.eq(i).addClass('now');
      }else if(std < distance[i] || std > endPoint[i]){
        oItem.eq(i).removeClass('now');
      }

    }

    //------sec2--------
    const sec2Top = $('#sec2').offset().top - 160;
    for (let a = 0; a < mtrNum; a++) {
      mtrItemElm[a] = mtrItem.eq(a);

      if(std > sec2Top){
        mtrItem.eq(a).addClass('active');
      }else if (std < sec2Top) {
        mtrItem.eq(a).removeClass('active');
      }
    }
    //------/sec2--------


  });


  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href = $(this).attr('href');
    let target = $(href === '#' || href === '' ? 'html' : href);
    let topPoint = target.offset().top;
    $('html, body').animate({scrollTop:topPoint}, speed, 'swing');
    $('.sidenav').addClass('hidden');
    $(".ham_line").toggleClass("active");
    $('#mask').toggleClass('hidden');
    return false;
  });

  $(".ham").on("click",function(){
    $('#mask').toggleClass('hidden');
    $('.sidenav').toggleClass('hidden');
    $(".ham_line").toggleClass("active");
  });

  $('#mask').on('click',function(){
    $(".ham").click();
  });
}
