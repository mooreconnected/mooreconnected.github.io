var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.mobile_menu_open').click(function() {
    $('.mobilemenu').animate({
      left: "0%"
    }, 300);

    $('body').animate({
      left: "20%"
    }, 300);
  });

  /* Then push them back */
  $('.glyphicon-remove').click(function() {
    $('.mobilemenu').animate({
      left: "-20%"
    }, 300);

    $('body').animate({
      left: "0%"
    }, 300);
  });
};

$(document).ready(main);
