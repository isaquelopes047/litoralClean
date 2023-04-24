

let containerClick = document.querySelectorAll('.containerCard')

let total = 0;

containerClick.forEach(container => {
    container.addEventListener('click', () => {
        container.classList.toggle('containerCardClick');

        let value = parseInt(container.dataset.value);
        if (container.classList.contains('containerCardClick')) {
            total += value;
            let correto = container.querySelector('.correct')
            correto.style.display = 'block'
        } else {
            total -= value;
            let correto = container.querySelector('.correct')
            correto.style.display = 'none'
        }
        document.getElementById('total').textContent = +total
    });
});