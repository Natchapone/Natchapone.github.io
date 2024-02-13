const pic = document.querySelectorAll('img');
for (let index = 0; index < pic.length; index++) {
    const element = pic[index];
    element.addEventListener('click',expand);
}

function expand(event) {
    const smallImage = event.currentTarget;
    const bigImage = document.querySelector(".big");
    const hiddenText = document.querySelector(".hide");

    smallImage.classList.replace('small', 'big');
    bigImage.classList.replace('big', 'small');
    hiddenText.classList.replace('hide', 'shown');
}


