const contactBtn = document.querySelector('#contact-toggle'),
    projectBtn = document.querySelector('#projects-toggle'),
    contactContent = document.querySelector('.contact__content'),
    contactMbox = document.querySelector('.contact__small'),
    job = document.querySelector('#jobList'),
    contactHide = document.querySelector('.contact__menu'),
    projectHide = document.querySelector('.projects__menu'),
    projFntMenu = document.querySelector('.projects__menu--front'),
    projectMbox = document.querySelector('.projects__menubox'),
    menuPback = document.querySelector('.projects__menu--back'),
    projectBack = document.querySelector('.projects__background'),
    projCard = document.querySelectorAll('.projects__card'),
    logo = document.querySelector('.logo'),
    aboutMenu = document.querySelector('.about__menu'),
    aBtn = document.querySelector('#aBtn');




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
        //project card appears
        Array.from(projCard).forEach(card =>
            card.classList.add('poppingup'));

    } else {
        highZindex(contactHide, contactContent);
        contactMbox.classList.remove('disappear');
        //project card disapears
        Array.from(projCard).forEach(card =>
            card.classList.remove('poppingup'));

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
        projectMbox.classList.add('changeGrid');
        //projectHide.classList.add('changeGrid');
        projFntMenu.classList.add('disappear');
        menuPback.classList.add('black');

    } else {
        projectMbox.classList.remove('changeGrid');
        //projectHide.classList.remove('changeGrid');
        projFntMenu.classList.remove('disappear');
        menuPback.classList.remove('black');
    }
}

logo.addEventListener('click', () => { window.location.reload(true); });
aboutMenu.addEventListener('click', () => { window.location.reload(true); });
aBtn.addEventListener('click', () => {
    if (contactBtn.checked == false) {
        contactBtn.checked == true;
    } else {
        contactBtn.checked == true;
    }

})




// window.onclick = e => {
//     console.log(e.target);
//     console.log(e.target.tagName);
// }