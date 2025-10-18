
  // Affiche le texte et l'image
  resultatDiv.innerHTML = `
    <p class="fade-in-text">${resultatTexte}</p>
    <img src="${imageChateau}" alt="Château correspondant" class="fade-in-image">
  `;

  // Déclenche animation des tours
  const tourGauche = document.querySelector('.tour.gauche');
  const tourDroite = document.querySelector('.tour.droite');
  if (tourGauche && tourDroite) {
    tourGauche.classList.add('grow');
    tourDroite.classList.add('grow');
  }

  
// ========================
// Événement bouton CONTINUER
// ========================
nextBtn.addEventListener("click", function() {
  const qName = quizData[currentQuestion].name;
  const selected = document.querySelector(`input[name="${qName}"]:checked`);

  if (!selected) {
    alert("⚠️ Merci de sélectionner une réponse !");
    return;
  }

  userAnswers[qName] = selected.value;
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    afficherResultat();
  }
});

// ========================
// Lancement du quiz
// ========================
showQuestion();
