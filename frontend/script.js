document.getElementById('upload-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('file-input');
    if (!fileInput || fileInput.files.length === 0) {
        alert('Veuillez sélectionner un fichier.');
        return;
    }
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            // Redirige vers la page des statistiques
            window.location.href = '/stats.html';
        } else {
            alert("Erreur lors de l'upload.");
        }
    } catch (error) {
        console.error(error);
        alert('Erreur réseau.');
    }
});
