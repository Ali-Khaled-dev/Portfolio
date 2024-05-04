var nums = document.querySelectorAll(".num");
var section = document.querySelector('.skills');

var started = false;

$(function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {

            nums.forEach(num => startCount(num));
        }
        started = true;
    }

});

function startCount(el) {
    var width = el.dataset.width;
    var count = setInterval(() => {
        el.textContent++;
        if (el.textContent == width) {
            clearInterval(count);
        }
    }, 100);

};
