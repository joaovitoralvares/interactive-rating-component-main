const ratingButtons = document.querySelectorAll('.rate-btn');
const submitButton = document.querySelector('.submit-btn');

const removeActive = () => {
    const activeButton = document.querySelector('.active');
    if(activeButton)
        activeButton.classList.remove('active');
};

const handleClickRateButton = (event) => {
    event.preventDefault();
    removeActive();
    event.target.classList.add('active');
};

const onSubmit = (event) => {
    event.preventDefault();
    rate = document.querySelector('.active').value;
    console.log('You selected ' + rate);
    removeActive();
};

Object.keys(ratingButtons).map((key) => {
    ratingButtons[key].addEventListener('click',handleClickRateButton);
});

submitButton.addEventListener('click', onSubmit);


