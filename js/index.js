$(function () {
  /*페이지 접속 시 컨테이너 움직임*/
  /*intro_left*/
  $(".intro_left").css({ transform: "translateX(0px)" });

  /*intro_rightUp*/
  $(".intro_rightUp > li").css({ transform: "translateX(0px)" });

  /*intro_rightDown*/
  $(".intro_rightDown").css({ transform: "translateY(0px)" });

  /*클릭 시 컨테이너 움직임*/
  $(".navi li:nth-child(2)").on("click", function () {
    $(".logo_left li").css({ transform: "translateX(0px)" });
    $(".logo_center").css({ transform: "translateY(0px)" });
    $(".logo_right li").css({ transform: "translateX(0px)" });
    $(".logo_right li:first-child .char").css({ "animation-name": "text2" });
  });

  /*cards > li 클릭 시 컨테이너 움직임 및 카드 뒤집는 모션*/
  let motion = false;
  if (!motion) {
    motion = true;
    $(".navi li:nth-child(3)").on("click", function () {
      $(".cards > li").addClass("active");
    });
  } else {
    $(".cards > li").removeClass("active");
  }
  $(".cards > li").on("click", function () {
    $(this).toggleClass("on");
  });

  /*design 클릭 시 컨테이너 움직임*/
  $(".navi li:nth-child(5)").on("click", function () {
    $(".project_design li").css({ transform: "translateY(0)" });
  });

  /*header*/
  $("header .navi li").on("mouseenter", function () {
    i = $(this).index();
    console.log(i);
    $("header .navi li").removeClass("on");
    $(this).addClass("on");
  });
  $("header .navi li").on("click", function () {
    j = $(this).index();
    console.log(j);
    $("#container")
      .stop()
      .animate({ "margin-top": -100 * j + "vh" });
  });

  /*my_info 나의 정보 setInterval 모션*/
  setInterval(function () {
    $(".my_info")
      .stop()
      .animate({ "margin-top": "-50px" }, function () {
        $(".my_info li:first-child").appendTo($(".my_info"));
        $(".my_info").css({ "margin-top": "0" });
      });
  }, 2000);

  /*포부 모션*/
  Splitting();

  /*aboutme 3번째 카드 뒷면 아이콘 모션*/
  $(".abicons li").on("mouseenter", function () {
    $(".abicons li").children("img").css({ transform: "scale(1)" });
    $(this).children("img").css({ transform: "scale(1.5)" });
  });

  $(".abicons li").on("mouseleave", function () {
    $(".abicons li").children("img").css({ transform: "scale(1)" });
  });

  $(".abicons li a").on("mouseenter", function () {
    $(".abicons li a").children("img").css({ transform: "scale(1)" });
    $(this).children("img").css({ transform: "scale(1.5)" });
  });

  $(".abicons li a").on("mouseleave", function () {
    $(".abicons li a").children("img").css({ transform: "scale(1)" });
  });

  /*projecet 모션*/
  let pro = 0;
  start();
  function start() {
    stop = setInterval(function () {
      if (pro == 2) {
        pro = 0;
      } else {
        pro++;
      }

      $(".website")
        .stop()
        .animate({ "margin-left": "-800px" }, function () {
          $(".website > li:first-child").appendTo(".website");
          $(".website").css({ "margin-left": "0" });
        });
    }, 3000);
  }

  $(".next").on("click", function () {
    clearInterval(stop);
    if (pro == 2) {
      pro = 0;
    } else {
      pro++;
    }

    $(".website")
      .stop()
      .animate({ "margin-left": "-800px" }, 500, function () {
        $(".website > li:first-child").appendTo(".website");
        $(".website").css({ "margin-left": "0" });
      });

    start();
  });

  $(".prev").on("click", function () {
    clearInterval(stop);
    if (pro == 0) {
      pro = 2;
    } else {
      pro--;
    }

    $(".website > li:last-child").prependTo(".website");
    $(".website").css({ "margin-left": "-800px" });
    $(".website").animate({ "margin-left": "0" }, 500);

    start();
  });

  $(".website li a").on("click", function () {
    clearInterval(stop);
  });
});
