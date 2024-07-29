$("button").click(function () {
    $("button").css({
        "background-color": '#' + Math.floor(Math.random() * 16777215).toString(16)
    })
})

$("li").hover(function(){
    console.log("hover");
    $(this).css("color", "pink").addClass("hover");
    }, function(){
    $(this).css("color", "white").removeClass("hover");
  });