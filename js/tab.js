'use strict';

{
  const menuItems = document.querySelectorAll('.tab__menu li a');
  const contents = document.querySelectorAll('.tab__content');


  menuItems.forEach((item) => {
    item.addEventListener('click', e => {
      e.preventDefault();//ページ遷移キャンセル

      menuItems.forEach((item) => {
        item.classList.remove('tab--active')
      });

      item.classList.add('tab--active');

      contents.forEach((content) => {
        content.classList.remove('tab--active');
      });
      document.getElementById(item.dataset.id).classList.add('tab--active');
    });
  });


}
