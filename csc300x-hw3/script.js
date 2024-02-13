const pic = document.querySelectorAll('img');
for (let index = 0; index < pic.length; index++) {
    const element = pic[index];
    element.addEventListener('click',expand);
}

function expand(event) {
    const smallImage = event.currentTarget;
    const bigImage = document.querySelector(".big");

    smallImage.classList.remove('small');
    smallImage.classList.add('big');
    bigImage.classList.remove('big');
    bigImage.classList.add('small');
}


