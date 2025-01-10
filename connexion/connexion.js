const container = document.getElementById('container');

document.getElementById('login').addEventListener('click', () => {
    container.classList.remove('active');
});

document.getElementById('register').addEventListener('click', () => {
    container.classList.add('active');
});
