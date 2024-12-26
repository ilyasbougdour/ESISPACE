// Fonction pour marquer une notification comme lue
function markAsRead(notificationId) {
    const notification = document.getElementById(notificationId);
    if (notification) {
        notification.classList.add("hide-notification"); // Ajoute une classe pour l'animation
        setTimeout(() => notification.remove(), 500); // Supprime la notification après l'animation
    }
}

// Ajout d'animations à l'apparition des notifications existantes
document.addEventListener("DOMContentLoaded", () => {
    const notifications = document.querySelectorAll(".notification");
    notifications.forEach((notification, index) => {
        setTimeout(() => notification.classList.add("show-notification"), index * 200); // Effet échelonné
    });
});
