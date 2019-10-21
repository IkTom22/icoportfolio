let contactBtn = document.querySelector('#contact-toggle'),
    projectBtn = document.querySelector('#projects-toggle'),
    contactContent = document.querySelector('.contact__content'),
    job = document.querySelector('#jobList'),
    projectHide = document.querySelector('.projects__menu'),
    projectBack = document.querySelector('.projects__background');

function show() {
    if (contactBtn.checked) {

        contactContent.classList.add('appear');


    } else {
        contactContent.classList.remove('appear');

    }
}
function lowZindex(el, el2) {
    el.classList.add('disappear');
    el2.classList.add('disappear');
}
function highZindex(el, el2) {
    el.classList.remove('disappear');
    el2.classList.remove('disappear');
}
function disappear() {
    if (contactBtn.checked) {

        lowZindex(projectHide, projectBack);

    } else {
        highZindex(projectHide, projectBack);

    }
}
