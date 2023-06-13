/* --------------------------------------------------------------
* File          : app.js
* Authors       : Lars Kanis <lars@greiz-reinsdorf.de>
*                 Aoran Zeng <ccmywish@qq.com>
* Created on    : <2023-05-16>
* Last modified : <2023-06-14>
*
* app:
*
*   本站所有动态代码
* ----------
* Changelog:
*
* ~> v0.1.0
* <2023-06-13> Add counting service
* <2023-05-17> 1. Fix old style jQuery method
*              2. Add PopUp effect when clicking the 'copybtn'
* <2023-05-16> ccmywish: I begin to maintain this file
* -------------------------------------------------------------*/

$(function() {
  we_are_on = location.hostname + location.pathname;
  we_are_on = we_are_on.replace(/\/$/, '');

  /*
  $.get("https://counter.ccmywish.com/count/" + we_are_on, (data) => {
    $counter = $('#PageCounter');
    $counter.html("累计访问" + data + "次");
    $counter.show();
  });
  */

  $.post("https://counter.ccmywish.com/count", {link: we_are_on}, (data) => {
    $counter = $('#PageCounter');
    $counter.html("累计访问: " + data + "次");
    $counter.show();
  });


  $(".js-copybtn").click( function() {
    var $input = $(this).prev(".js-copytextinput");
    $input.trigger("select");
    navigator.clipboard.writeText($input.val());

    $('#GotCopied-PopUp').slideDown(360, function(){
      var self = $(this);
      setTimeout( () => {
        self.slideUp(200);
      }, 1200);
    })
  });

  $("a.downloadinfo").click( function () {
    $(this).toggleClass("active");
    $(this).nextAll("ul.downloadinfo").toggle(500); // 500ms to display or hide
  });
});
