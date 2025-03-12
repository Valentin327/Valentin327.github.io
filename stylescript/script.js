/**Fonction pour afficher le message de bienvenue après un délai
function showWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.classList.remove('hidden');
    welcomeMessage.classList.add('visible');
}

// Afficher le message après 2 secondes (2000 millisecondes)
setTimeout(showWelcomeMessage, 2000);**/