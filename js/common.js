// slider
$(".slider").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  arrows: false,
  // fade:true,
  speed: 777,
  // ユーザー操作
  // swipe:false,
  pauseOnHover: false,
  pauseOnFocus: false,
});
// スマホ用メニュー
$(document).ready(function () {
  $(".drawer").drawer();
});
// back to top
jQuery(function () {
  let pageTop = $("#pageTop");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      //100pxスクロールしたら表示
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
      ); //0.5秒かけてトップへ移動
      return false;
    });
  });
  // スマホPC処理分け
  $(function () {
    if (
      navigator.userAgent.indexOf("iPhone") > 0 ||
      navigator.userAgent.indexOf("iPod") > 0 ||
      (navigator.userAgent.indexOf("Android") > 0 &&
      navigator.userAgent.indexOf("Mobile") > 0)
      ) {
        // スマホ用の処理
        $(".hover .hover_text").hide();
      } else if (
        navigator.userAgent.indexOf("iPad") > 0 ||
        navigator.userAgent.indexOf("Android") > 0
        ) {
          // タブレット用の処理
          $(".hover .hover_text").hide();
        } else {
          // PC用の処理
        }
      });
      $(function() {
        $(".inline").colorbox({
          inline:true,
          maxWidth:"90%",
          maxHeight:"90%",
          // minWidth:"100px",
          // minHeight:"100px",
          opacity: 0.7
        });
      });