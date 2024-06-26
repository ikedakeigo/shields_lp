jQuery(function ($) {
  $(".js-faq-question").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("is-open");
  });
});

function delayScrollAnime() {
  var time = 0.2; //遅延時間を増やす秒数の値
  var value = time;
  $(".delay").each(function () {
    var parent = this; //親要素を取得
    var elemPos = $(this).offset().top; //要素の位置まで来たら
    var scroll = $(window).scrollTop(); //スクロール値を取得
    var windowHeight = $(window).height(); //画面の高さを取得
    var childs = $(this).children(); //子要素を取得

    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
      //指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
      $(childs).each(function () {
        if (!$(this).hasClass("fadeUp")) {
          //アニメーションのクラス名が指定されているかどうかをチェック

          $(parent).addClass("play"); //親要素にクラス名playを追加
          $(this).css("animation-delay", value + "s"); //アニメーション遅延のCSS animation-delayを追加し
          $(this).addClass("fadeUp"); //アニメーションのクラス名を追加
          value = value + time; //delay時間を増加させる

          //全ての処理を終わったらplayを外す
          var index = $(childs).index(this);
          if (childs.length - 1 == index) {
            $(parent).removeClass("play");
          }
        }
      });
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

jQuery(function ($) {
  var service_swiper = new Swiper(".js-voice-swiper", {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        width: 600,
        loopedSlides: 6,
        slidesPerView: 2,
        spaceBetween: 20, // ここで必要なスペースを指定します
        centeredSlides: true,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});




// function adjustButtonContainer() {
//   var footerHeight = document.getElementById('footer').offsetHeight;
//   var buttonsContainer = document.querySelector('.buttons-container');
//   buttonsContainer.style.bottom = footerHeight + 'px';
// }

// // ページ読み込み時に実行
// adjustButtonContainer();

// // ウィンドウサイズが変更されたときに実行
// window.addEventListener('resize', adjustButtonContainer);
