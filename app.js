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
    var description = document.getElementsByClassName('description');
    description[0].classList.toggle('open');
    if (description[0].classList.contains('open')) {this.textContent = 'Свернуть';
        } else {
            this.textContent = 'Развернуть';
        }
})


