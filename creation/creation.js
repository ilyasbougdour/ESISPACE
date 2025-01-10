document.addEventListener("DOMContentLoaded", () => {
    const saveDraftBtn = document.querySelector(".save-draft");
    const publishBtn = document.querySelector(".publish");

    saveDraftBtn.addEventListener("click", () => {
        alert("Votre brouillon a été sauvegardé !");
    });

    publishBtn.addEventListener("click", () => {
        alert("Votre post a été publié !");
    });
    
});
