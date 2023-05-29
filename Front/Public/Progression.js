function getCours(token) {
    fetch("http://localhost:3001/api/get-cours", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: token })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          const cours = data.cours;
          updateProgression(cours)
        } else {
          const message = data.message;
          // Gérez l'erreur de token invalide
          console.log("Erreur : " + message);
        }
      })
      .catch(error => {
        console.error("Une erreur s'est produite :", error);
      });
  }
  

  function updateProgression(cours) {

    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.getElementById('completedCoursesCount');
    const completedCoursesList = document.getElementById('completedCoursesList');

    const totalCours = cours.length; // Modifier si le nombre total de cours change
    const completedCours = cours.filter(c => c !== 0).length;
    console.log(cours);
    
    const progressPercentage = (completedCours / totalCours) * 100;

    progressBar.style.width = progressPercentage + '%';
    progressBar.setAttribute('aria-valuenow', progressPercentage);
    progressText.textContent = completedCours;

    completedCoursesList.innerHTML = '';

    for (let i = 0; i < totalCours; i++) {
      if (cours[i] === 0) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `Cours/Cours0${i + 1}.html`;
        a.textContent = `Cours ${i + 1} - [Pas encore validé]`;
        li.appendChild(a);
        completedCoursesList.appendChild(li);
      } 
    }
  }