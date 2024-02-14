const pic = document.querySelectorAll('img');
for (let index = 0; index < pic.length; index++) {
    const element = pic[index];
    element.addEventListener('click', expand);
    element.addEventListener('click', expandTxt);
}

function expand(event) {
    const smallImage = event.currentTarget;
    const bigImage = document.querySelector(".big");

    smallImage.classList.replace('small', 'big');
    bigImage.classList.replace('big', 'small');

}

function expandTxt(event) {
    const hiddenText = document.querySelector(".hide");
    const shownText = document.querySelector(".shown");

    hiddenText.classList.replace('hide', 'shown');
    shownText.classList.replace('shown', 'hide');
}


