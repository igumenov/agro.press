$(document).ready(function(){
    // $('ul.menu.flex').flexMenu({
    //     threshold: 6,
    // });
    $('header .search a').click(function(){
        //$('.menu a').toggleClass('mini');
        $('.menu form').toggleClass('show');
    });
    $('#partners .items').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        prevArrow:'<div class="prev"></div>',
        nextArrow:'<div class="next"></div>',
        responsive: [
            {
            breakpoint: 1199,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
            }
            },
            {
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $(".btn-select").each(function (e) {
        var value = $(this).find("ul li.selected").html();
        if (value != undefined) {
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
    });
    
});

$(document).on('click', '.btn-select', function (e) {
    e.preventDefault();
    var ul = $(this).find("ul");
    if ($(this).hasClass("active")) {
        if (ul.find("li").is(e.target)) {
            var target = $(e.target);
            target.addClass("selected").siblings().removeClass("selected");
            var value = target.html();
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
        ul.hide();
        $(this).removeClass("active");
    }
    else {
        $('.btn-select').not(this).each(function () {
            $(this).removeClass("active").find("ul").hide();
        });
        ul.slideDown(300);
        $(this).addClass("active");
    }
});

$(document).on('click', function (e) {
    var target = $(e.target).closest(".btn-select");
    if (!target.length) {
        $(".btn-select").removeClass("active").find("ul").hide();
    }
});