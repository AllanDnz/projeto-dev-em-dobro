const buttonCarousel = document.querySelectorAll('.button-roll');
const imageCarousel = document.querySelectorAll('.image');

let index = 0;

function next(){
    imageCarousel[index].classList.remove('active');
    index = (index + 1) % imageCarousel.length;
    imageCarousel[index].classList.add('active');
}

buttonCarousel.forEach((button, index) => {

    button.addEventListener('click', () => {

        DesactiveSelectBotton();

        button.classList.add('selection');

        DesactiveImageSelect();

        imageCarousel[index].classList.add('active')

    })

})

function DesactiveImageSelect() {
    const imageSelection = document.querySelector('.active');
    imageSelection.classList.remove('active');
}

function DesactiveSelectBotton() {
    const buttonSelection = document.querySelector('.selection');
    buttonSelection.classList.remove('selection');
}


setInterval(next, 4000);


