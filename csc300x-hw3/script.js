const pic = document.querySelectorAll('img');

for (let index = 0; index < pic.length; index++) {
    const element = pic[index];
    element.addEventListener('click', expand);
}

function expand(event) {
    const clickedImg = event.currentTarget;
    const images = document.querySelectorAll('img');
    const texts = document.querySelectorAll('.hide');

    for (let i = 0; i < images.length; i++) {
        images[i].classList.replace('big', 'small');
    }

    clickedImg.classList.replace('small', 'big');

    for (let i = 0; i < texts.length; i++) {
        texts[i].style.display = 'none';
    }
    const txtId = clickedImg.dataset.textId;
    const txt = document.getElementById(txtId);

    if (txt) {
        txt.style.display = 'block';
    }
}
