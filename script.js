document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const resetButton = document.getElementById('resetButton');

    function createGrid(size) {
        container.innerHTML = '';
        const containerSize = Math.min(container.clientWidth, container.clientHeight);
        const itemSize = containerSize / size;
        for (let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.style.width = `${itemSize}px`;
            div.style.height = `${itemSize}px`;
            div.style.opacity = 0.8;
            div.addEventListener('mouseover', () => {
                let currentOpacity = parseFloat(div.style.opacity);
                if (currentOpacity < 1) div.style.opacity = currentOpacity + 0.2;
                div.style.backgroundColor = getRandomColor();
            });
            container.appendChild(div);
        }
    }

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    resetButton.addEventListener('click', () => {
        let size = parseInt(prompt('Enter new grid size (max 100):'));
        if (isNaN(size) || size < 1 || size > 100) {
            alert('Please enter a valid number between 1 and 100.');
            return;
        }
        createGrid(size);
    });

    createGrid(16);
});