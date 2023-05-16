$(function() {

  $(".js-copybtn").click( function() {
    var $input = $(this).prev(".js-copytextinput");
    $input.trigger("select");
    navigator.clipboard.writeText($input.val());

    $('#GotCopied-PopUp')
      .slideDown(600, function(){
        var self = $(this);
        setTimeout( () => {
          self.slideUp(600);
        }, 2000);
      })
  });

  $("a.downloadinfo").click( function () {
    $(this).toggleClass("active");
    $(this).nextAll("ul.downloadinfo").toggle(500); // 500ms to display or hide
  });
});
