$(function () {
  let lastScroll = 0;
  const logo = $("header h1 img");

  function swapLogo(src) {
    if (logo.attr("src") === src) return; // 이미 같은 이미지면 무시 (불필요한 깜빡임 방지)
    logo.fadeOut(300, function () {
      logo.attr("src", src).stop().fadeIn(300);
    });
  }

  $(window).on("scroll", function () {
    let space = $(window).scrollTop();

    if (space > 10) {
      $("header nav").addClass("on");
    } else {
      $("header nav").removeClass("on");
    }

    if (space > 0) {
      $("header nav").addClass("scrolled");
      swapLogo("img/logo-blue.png");
    } else {
      $("header nav").removeClass("scrolled");
      swapLogo("img/logo-white.png");
    }
    lastScroll = space;
  });

  $(function () {
    $(".valueBox li").on("mouseenter", function () {
      $(".valueBox li").removeClass("on");
      $(this).addClass("on");

      $(".valueBox li")
        .not(this)
        .removeClass("on")
        .find("p")
        .stop(true, true)
        .slideUp(400);

      $(this)
        .addClass("on")
        .find("p")
        .stop(true, true)
        .delay(500)
        .slideDown(400);
    });
  });

  let total = $("#visual li").length;
  // console.log(total);

  let i = 0; //시작 순서

  setInterval(function () {
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    $("#visual li").fadeOut(2000);
    $("#visual li").eq(i).stop().fadeIn(2000);
  }, 10000);
});
