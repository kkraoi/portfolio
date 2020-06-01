'use strict';

{
  const btn = document.getElementById('btn');
// 確率操作
  btn.addEventListener('click', () => {
    const n = Math.random();
    if(n < 0.05){// 5%
      btn.textContent = '大吉';
    }else if(n < 0.2){// 15% 0.05 < n < 0.20
      btn.textContent = '中吉';
    }else if(n < 0.6){// 40%
      btn.textContent = '吉';
    }else if(n < 0.9){// 30%
      btn.textContent = '庄吉';
    }else{// 5%
      btn.textContent = '凶';
    }
  });
}
