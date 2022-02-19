$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $(".char-box").height($(window).height() - 40 - $(".navbar").height());
    var scrollHeight = $('.char-box').prop('scrollHeight') - $(".char-box").height();

    $(".char-box").scroll(function() {
        if ($(".char-box").scrollTop() > scrollHeight) {
            $(".char-box").scrollTop(1);
        } else if ($(".char-box").scrollTop() == 0) {
            $(".char-box").scrollTop(scrollHeight);
        }
        $(".char-box a").each(function() {
            var h = $(".char-box").height() / 2;
            var top = $(this).offset().top - $(".char-box").offset().top;
            if (top >= (h - 49.49 / 2) && top <= (49.49 / 2 + h)) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        })

    });
    $(".char-box a").each(function() {
        var h = $(".char-box").height() / 2;
        var top = $(this).offset().top - $(".char-box").offset().top;
        if (top >= (h - 49.49 / 2) && top <= (49.49 / 2 + h)) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    })

    $(window).resize(function() {
        $(".profile-img").height($(".profile-img").width())
    })
    $(".profile-img").height($(".profile-img").width());

    $(".drug-item input[type=checkbox]").click(function() {
        if ($(this).is(":checked")) {
            $(this).parents(".drug-item").addClass("active");
            $(".selected-num").html(parseInt($(".selected-num").html()) + 1);
        } else {
            $(this).parents(".drug-item").removeClass("active");
            $(".selected-num").html(parseInt($(".selected-num").html()) - 1);
        }
    });
    $(".sidebar").height($(window).height());
    circleBar(".cos", 89, "#1BABFB");
    circleBar(".sin", 40, "orange");

});

function circleBar(name, value, color) {
    value = (Math.ceil(value / 10) * 10) / 10;
    $(".progress.green " + name).css("border-color", color)
    if (value <= 5) {
        $(".progress .progress-right " + name).css("animation", "loading-" + value + " 1.8s linear forwards");
    } else {
        value = value - 5;
        $(".progress .progress-right " + name).css("animation", "loading-5 1.8s linear forwards");
        $(".progress .progress-left " + name).css("animation", "loading-" + value + " 1.2s linear forwards 1.8s");
    }

}