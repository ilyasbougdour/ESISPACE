document.getElementById("community-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("community-name").value;
    const description = document.getElementById("community-description").value;
    const rules = document.getElementById("community-rules").value;

    if (name && description && rules) {
        document.getElementById("message").textContent = `Votre communauté '${name}' a été créée avec succès !`;
        document.getElementById("community-form").reset();
        updatePreview("", "", "");
    } else {
        document.getElementById("message").textContent = "Veuillez remplir tous les champs.";
    }
});

document.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", updatePreview);
});

function updatePreview() {
    const name = document.getElementById("community-name").value;
    const description = document.getElementById("community-description").value;
    const rules = document.getElementById("community-rules").value.split("\n");

    document.getElementById("preview-name").textContent = name || "Nom de la communauté";
    document.getElementById("preview-description").textContent = description || "Description de la communauté...";
    const rulesList = document.getElementById("preview-rules");
    rulesList.innerHTML = "";
    rules.forEach(rule => {
        if (rule.trim()) {
            const li = document.createElement("li");
            li.textContent = rule.trim();
            rulesList.appendChild(li);
        }
    });
}
