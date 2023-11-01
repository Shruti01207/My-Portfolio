
const navLinks = document.getElementsByClassName('nav-link');
const checkbox = document.getElementById('check');

for (const link of navLinks) {
    link.addEventListener('click', function (event) {
        checkbox.checked = false;
    });
}
changeProfession();

function showDescription(type, e) {

    let aboutItems = document.getElementsByClassName('about-nav-text');
    removeActiveClass('about-nav-link', e);

    for (let i = 0; i < aboutItems.length; i++) {

        if (type != aboutItems[i].id) {
            aboutItems[i].style.display = 'none';

            console.log('none', aboutItems[i]);
        }
        else {
            aboutItems[i].style.display = 'flex';

            aboutItems[i].style.flexDirection = 'column';
            aboutItems[i].style.justifyContent = 'center';

        }
    }

}

function removeActiveClass(anchorsClassName, e) {
    let navLinks = document.getElementsByClassName(anchorsClassName);
    let navLink = e.srcElement;
    for (let i = 0; i < navLinks.length; i++) {
        console.log(navLinks.length);
        navLinks[i].classList.remove('active');
        console.log("class list", navLinks[i].id, navLinks[i].classList);
    }
    navLink.className += ' active';

}

function changeProfession() {
    const profession = document.getElementsByClassName('profession-text')[0];
    const professions = ['Angular Developer', 'Backend Developer','Software Engineer','Competitive Programmer'];
    let idx = 0;
    setInterval(() => {
        profession.textContent = professions[idx++];
        idx = idx % (professions.length);
    }, 1000);
}