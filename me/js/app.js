new fullScroll({
    mainElement: "main",
    displayDots: true,
    dotsPosition: "right",
    animateTime: 0.7,
    animateFunction: "ease",
});

const myTags = [
    'JavaScript', 'CSS3', 'HTML5',
    'Java SE', 'Python', 'NodeJs',
    'Spring Boot', 'SQL', 'Hibernate',
    'Git', 'Data Structures', 'Algorithms',
    'Linux', 'JUnit', 'Java Fx', 'LaTeX'
];

let x = window.matchMedia("(max-width: 576px)");
let r = x.matches ? 140 : 300;

let tagCloud = TagCloud('.content', myTags, {
    // radius in px
    radius: r,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'normal',
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true

});

(function() {
    emailjs.init("user_dRYEJNzYYVxo7a625g9n0");
})();

window.onload = function() {
    document.getElementById('contact_form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_1v23grj', 'template_uk0x0kp', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}