/* --------------------------------------------------------------
* File          : application.js
* Authors       : Lars Kanis <lars@greiz-reinsdorf.de>
*                 Aoran Zeng <ccmywish@qq.com>
* Created on    : <2023-05-16>
* Last modified : <2023-05-17>
*
* application:
*
*   This JavaScript file works normally.
* ----------
* Changelog:
*
* ~> v0.1.0
* <2023-05-17> 1. Fix old style jQuery method
*              2. Add PopUp effect when clicking the 'copybtn'
* <2023-05-16> ccmywish: I begin to maintain this file
* -------------------------------------------------------------*/

$(function() {

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
