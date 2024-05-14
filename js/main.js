
var scroolbottoun = $("#scroll-top");

$(function () {

    // display none for loading page

    setTimeout(function () {

        document.querySelector('.preloader').classList.add('d-none');
    }, 3000);


    // Scroll Page for click navBar

    $('nav li a').click(function () {

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 100);
    });


    // add active class for element <a>

    $('nav li a').click(function () {
        $('nav li a').removeClass('active');
        $(this).addClass('active');
    });



    $(window).scroll(function () {

        // Synchronization of links with the site

        $('.block').each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 10) {
                $('nav li a').removeClass('active');
                var blocID = $(this).attr('id');
                $('nav li a[data-scroll="' + blocID + '"]').addClass('active');
            }
        });

        // Back to top button show/hide

        $(window).scrollTop() >= 300 ? scroolbottoun.fadeIn(200) : scroolbottoun.fadeOut(200);

        // animate num skills


    });

    scroolbottoun.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // animate progress bar for skills section

    $('.progress .progress-bar').each(function () {
        $(this).animate({
            width: $(this).attr('data-width') + '%'
        }, 5000);
    });


    // var nums = document.querySelectorAll(".num");
    // var section = document.querySelector('.skills');

    $(window).on('scroll', function () {
        $('.num').each(function () {
            var $this = $(this);
            var countTo = $this.attr('data-width');

            if (window.scrollY >= $this.offset().top - window.innerHeight) {
                $({ countNum: $this.text() }).animate({
                    countNum: countTo
                },
                    {
                        duration: 3000,
                        // easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(countTo);
                        }
                    });
            }
        });
    });




    $('.show-popup').click(function () {
        $('.poupup').fadeIn();
    })
    $('.poupup button').click(function () {
        $('.poupup').fadeOut();
    })

    function hundlemenue() {
        $("#menu").toggleClass("is-active");
        $("#actions").toggleClass("is-active");
    }
    $("#menu").click(function () {
        hundlemenue();
    });


    // $('.work-images .overlay').hover(function () {
    //     $(this).turnOnOverlay();
    // }, function () {
    //     $(this).turnOffOverlay();
    // })

});




