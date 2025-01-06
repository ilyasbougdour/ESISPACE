const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const container = document.getElementById('container');

// Action pour Sign Up
signUpBtn.addEventListener('click', () => {
    alert("Votre inscription a été bien enregistrée !");
    container.classList.add('right-panel-active');
});

// Action pour Sign In
signInBtn.addEventListener('click', () => {
    alert("Votre connexion a réussi !");
    container.classList.remove('right-panel-active');
    window.location.href = '../interface_navigation/navigation.html'; // Chemin vers la page admin
});
