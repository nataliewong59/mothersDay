$(document).ready(function () {
  $(".container1")
    .mouseenter(function () {
      $(".card1").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card1").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});

$(document).ready(function () {
  $(".container2")
    .mouseenter(function () {
      $(".card2").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card2").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});

