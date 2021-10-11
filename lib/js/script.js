var scroll = 0;
document.getElementById("mobile-logo").style.display = "none";

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 992) {

        var x = document.getElementById("desktop-logo");
        x.style.display = "block";
        x = document.getElementById("mobile-logo");
        x.style.display = "none";

        document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {
            everyitem.addEventListener('mouseover', function (e) {

                console.log("on nav")
                $('.navbar').addClass("nav-mouseover");


            });
            everyitem.addEventListener('mouseleave', function (e) {

                console.log("leave nav")
                $('.navbar').removeClass("nav-mouseover");


            })
        });

    } else {
        var x = document.getElementById("mobile-logo");
        x.style.display = "block";

        x = document.getElementById("desktop-logo");
        x.style.display = "none";

        document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {

            $('.navbar').addClass("nav-mouseover");


        });

    }
});


// scroll functions
$(window).scroll(function (e) {
    scroll = $(window).scrollTop();
    if (window.innerWidth > 992) {

        if (scroll >= 150) {
            $('.navbar').addClass("navbar-bg-change");
        } else {
            $('.navbar').removeClass("navbar-bg-change");
        }
    } else {

        if (scroll >= 150) {
            $('.navbar').addClass("navbar-bg-change-sd");
        } else {
            $('.navbar').removeClass("navbar-bg-change-sd");
        }
    }
});