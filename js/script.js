$(document).ready(function () {


    setTimeout(function () {

        document.querySelector('.preloader').classList.add('d-none');

    }, 3000);


   

    // Animation number for skills
   


    var sections = document.querySelectorAll("section");
    var navs = document.querySelectorAll(".nav_link");

    navs.forEach(nav => {
        nav.addEventListener("click", function () {

            document.querySelector('.active')?.classList.remove('active')
            this.classList.add('active');
        });

    });





    window.onscroll = () => {
        sections.forEach(sec => {
            var top = window.scrollY;
            var offsset = sec.offsetTop - 100;
            var highet = sec.offsetHeight;
            var id = $(sec).attr('id');

            if (top >= offsset && top < offsset + highet) {
                navs.forEach(nav => {
                    // nav.classList.remove('active');
                    // document.querySelector('.nav_link [href*= ' + id + ']').classList.add('active');
                });





                // nav.classList.add('active');
                // // document.querySelector('.active').classList.remove('active');
                // document.querySelector('.nav_link [href*= ' + id + ']');//.classList.add('active');

                // console.log(top);
            }
        })
    }


    //         if (top >= offsset && top < offsset + highet) {
    //             navs.forEach(nav => {
    //                 nav.addEventListener("click", function () {

    //                     document.querySelector('.active')?.classList.remove('active')
    //                     this.classList.add('active');
    //                 });
    //             })
    //         }

    //     });

    //         if (top >= offsset && top < offsset + highet) {
    //             navs.forEach(nav => {
    //                 nav.classList.remove('active');
    //             })

    //             // } else {
    //             //     navItem.classList.remove('active');
    //         };


    //     });
    // }

    //scroll top

    var scroolbottoun = $("#scroll-top");

    $(window).scroll(function () {
        // console.log($(this).scrollTop());
        $(this).scrollTop() >= 300 ? scroolbottoun.show() : scroolbottoun.hide();
    });

    scroolbottoun.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });


}
)











