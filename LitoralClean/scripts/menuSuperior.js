
let buttonAbrirModal = document.querySelector('.abrirMenu');
let buttonFecharModal = document.querySelector('.fecharMenu');
let containerOptions = document.querySelector('.containerSelectMobile');

buttonAbrirModal.addEventListener('click', () => {
    containerOptions.style.display = 'block';
    containerOptions.style.height = '0';
    containerOptions.style.transition = 'height 0.3s ease-in-out';

    setTimeout(() => {
        containerOptions.style.height = '200px';
    }, 10);

    buttonAbrirModal.style.display = 'none';
    buttonFecharModal.style.display = 'block';
});

buttonFecharModal.addEventListener('click', () => {
    containerOptions.style.height = '0';

    setTimeout(() => {
        containerOptions.style.display = 'none';
        containerOptions.style.transition = '';
    }, 300);

    buttonAbrirModal.style.display = 'block';
    buttonFecharModal.style.display = 'none';
});