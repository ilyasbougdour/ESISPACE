document.addEventListener("DOMContentLoaded", function() {
    const editProfileButton = document.querySelector(".btn");
    const deleteAccountButton = document.querySelector(".btn-danger");

    // Fonction pour modifier le profil
    editProfileButton.addEventListener("click", function() {
        alert("La fonction Modifier le profil sera bientôt disponible.");
    });

    // Fonction pour supprimer le compte
    deleteAccountButton.addEventListener("click", function() {
        const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.");
        if (confirmDelete) {
            alert("Votre compte a été supprimé avec succès.");
            // Ajoutez ici la logique pour supprimer le compte utilisateur
        }
    });

    
});
