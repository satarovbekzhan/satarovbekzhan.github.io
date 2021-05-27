new fullScroll({
    mainElement: "main",
    displayDots: false,
    dotsPosition: "right",
    animateTime: 0.5,
    animateFunction: "ease",
    sections: 'section'
});

(function() {
    emailjs.init("user_dRYEJNzYYVxo7a625g9n0");
})();

window.onload = function() {
    document.getElementById('contact_form').addEventListener('submit', function (event) {
        event.preventDefault();
        let button = this.getElementsByTagName('button')[0];
        button.setAttribute('disabled', 'true');
        button.innerHTML = "sending...";
        emailjs.sendForm('service_1v23grj', 'template_uk0x0kp', this)
            .then(function() {
                console.log('SUCCESS!');
                info('Thank you! I have received your message and will answer you as soon as possible.')
            }, function(error) {
                console.log('FAILED...', error);
                info('Sorry! There is an unexpected problem. Try it later.')
            });
    });
}

function info(txt) {
    let section = document.getElementById('contact_section');
    let p = document.createElement('p');
    p.innerHTML = txt +  '';
    section.innerHTML = '';
    section.appendChild(p);
}

// disable code inspection
document.onkeydown = function (e) {
    if (event.keyCode === 123) {
        return false
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) return false
    if (e.ctrlKey && e.shiftKey && e.keyCode === "C".charCodeAt(0)) return false
    if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) return false
    if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) return false
}
document.addEventListener('contextmenu', e => e.preventDefault())