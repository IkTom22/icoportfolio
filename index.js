let contactBtn = document.querySelector('#contact-toggle'),
    projectBtn = document.querySelector('#projects-toggle'),
    contactContent = document.querySelector('.contact__content'),
    contactMbox = document.querySelector('.contact__small'),
    job = document.querySelector('#jobList'),
    contactHide = document.querySelector('.contact__menu'),
    projectHide = document.querySelector('.projects__menu'),
    projectMbox = document.querySelector('.projects__menubox'),
    menuPback = document.querySelector('.projects__menu--back');
projectBack = document.querySelector('.projects__background');

function show() {
    if (contactBtn.checked) {

        contactContent.classList.add('appear');


    } else {
        contactContent.classList.remove('appear');

    }
}
//btn checked functions
function showing(el, el2) {
    el.classList.add('showing');
    el2.classList.add('showing');
}
function lowZindex(el, el2) {
    el.classList.add('disappear');
    el2.classList.add('disappear');
}
function highZindex(el, el2) {
    el.classList.remove('disappear');
    el2.classList.remove('disappear');
}

// function disappear(el1) {
//     if (el1.checked) {

//         lowZindex(projectHide, projectBack);

//     } else {
//         highZindex(projectHide, projectBack);

//     }
// }

function disappearP() {
    if (contactBtn.checked) {

        lowZindex(projectHide, projectBack);

    } else if (!contactBtn.checked) {
        highZindex(projectHide, projectBack);
        showing(projectHide, projectBack);
    } else {
        showing(projectHide, projectBack);
    }

}
function disappearC() {
    if (projectBtn.checked) {

        lowZindex(contactHide, contactContent);
        contactMbox.classList.add('disappear');

    } else {
        highZindex(contactHide, contactContent);
        contactMbox.classList.remove('disappear');

    }

}

function scale() {
    if (projectBtn.checked) {
        projectBack.classList.add('scale1');
    } else {
        projectBack.classList.remove('scale1');
    }
}
function move() {
    if (projectBtn.checked) {

        projectMbox.classList.add('changeGrid')
        menuPback.classList.add('black');

    } else {
        projectMbox.classList.remove('changeGrid')
        menuPback.classList.remove('black');
    }
}
