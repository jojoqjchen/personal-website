//whenever I move my mouse on the page, the heys move background
$(document).on("mousemove", function (ev) {
  var mousex = ev.originalEvent.pagex
  var mousey = ev.originalEvent.pageY
  $("img").each(function () {
    var imgx = $(this).position().left + 70
    var imgy = $(this).position().top + 50

    var diffx = mousex - imgx
    var diffy = mousey - imgy
    var radians = Math.atan(diffy, diffx)
    var angle = radians * 180/Math.PI
    $(this).css("transform", "rotate("+angle+"deg)")
  })
})
