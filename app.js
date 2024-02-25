// для модального окна
function openModal (imageSrc, description) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');
    var captionText = document.getElementById('caption');
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = description;
}

function closeModal(){
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// для кнопки сворачивания текста
document.getElementById('expandBtn').addEventListener('click', function() {
    var scroll = document.getElementsByClassName('scroll');
    scroll[0].classList.toggle('open');
    if (scroll[0].classList.contains('open')) {this.textContent = 'Свернуть';
        } else {
            this.textContent = 'Развернуть';
        }
})



const prices = document.querySelectorAll('.price');

Array.from(prices).forEach(price => {
    if (price.innerText.includes ('Продано')) {
        price.classList.add('sold');
    } if 
        (price.innerText.includes ('В работе...')) {
        price.classList.add ('inWork');
    }
});

