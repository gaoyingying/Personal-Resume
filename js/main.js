$(function () {
    $(window).resize();
    $(window).scroll();
    $(window).mousewheel();
    $("#slide_to_second").click(function () {
        $("body").animate({scrollTop: $("#hello_page").height()}, 500);
    });
    $(".side_bar span").each(function (index, ele) {
        $(this).click(function () {
            // $(this).prevAll().stop(true,true);
            // alert( $(this).prevAll().length)
            $("body").animate({scrollTop: $(".show").eq(index).offset().top}, 500)

        })


    })
   var xhr = new XMLHttpRequest(),el = document.getElementById("show-something");

try{
  xhr.open("get","../data/data.json",true);
  xhr.send();
}catch(err){
  console.log(err);
}


if( xhr.status = 200 && xhr.readyState==4){
    el.innerHTML= xhr.responseText;
  alert("请求成功");
}else{
  alert("请求失败");
}
})
$(window).resize(function () {

    $("#hello_page").css("height", $(window).height());
    $(".side_bar").css("top", ($(window).height() - $('.side_bar').outerHeight()) / 2);

    $(".row").css({
        "left": ($(window).width() - $('.row').outerWidth()) / 2,
        "top": ($(window).height() - $('.row').outerHeight()) / 2
    });

    $(".head_part").stop().animate({
        opacity: "1", top: ($(window).height() - $('.head_part').outerHeight()) / 2
    }, 800);
})
$(window).scroll(function () {

    if ($("body").scrollTop() < $("#hello_page").height() - 200) {
        $(".side_bar").css({"opacity": 0, "pointer-events": "none"});
    }
    else {
        $(".side_bar").css({"opacity": 1, "pointer-events": "auto"});
    }
    $(".show").each(function (index, ele) {
        if ($("body").scrollTop() > $(this).offset().top - 200) {
            $(".side_bar span").eq(index).addClass("active").siblings().removeClass("active");
            $(this).find(".row div").each(function (index, ele) {
                $(this).delay(index * 100).animate({"margin-top": "0", "opacity": 1}, 500)
            })
        }
    })
})
$(window).mousewheel(function (event, delta) {
    if (delta < 0 && $(window).scrollTop() < 10) {
        $("body").stop().animate({scrollTop: $("#hello_page").height()}, 500);
    }
});
