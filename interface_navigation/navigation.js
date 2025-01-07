const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
    });
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
});

// Charger dynamiquement le profil
function loadProfile() {
    fetch('../profile/profile.html') // Chemin vers votre fichier profile.html
        .then(response => response.text())
        .then(html => {
            document.getElementById('profile-section').innerHTML = html;
            const script = document.createElement('script');
            script.src = '../profile/profile.js'; // Charger le fichier JS du profil
            document.body.appendChild(script);
        })
        .catch(error => console.error('Erreur lors du chargement du profil :', error));
}

// Appeler la fonction après le chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
    loadProfile();
});
