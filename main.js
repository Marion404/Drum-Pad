function playSound() {
    const key = document.querySelector('.key');
    
    /* On intercepte l'événement keydown lorsqu'une 
       touche est appuyée */
    document.addEventListener('keydown', (event) => {
      /* On récupère la valeur de key 
         et on code les différents mécanismes */
      switch(event.key) {
        case 'a':
          let clap = document.querySelector('audio[data-key="65"]');
          let divClap = document.querySelector('div[data-key="65"]');
          // On joue le son
          clap.play();
          // Ajout de la classe playing sur la div
          divClap.classList.add('playing');
          removeTransition(divClap);
        break;
        case 'z': 
          let hitHat = document.querySelector('audio[data-key="90"]');
          let divHitHat = document.querySelector('div[data-key="90"]');
          divHitHat.classList.add('playing');
          hitHat.play();
          removeTransition(divHitHat);
        break;
        case 'e': 
          let kick = document.querySelector('audio[data-key="69"]');
          let divKick = document.querySelector('div[data-key="69"]');
          divKick.classList.add('playing');
          kick.play();
          removeTransition(divKick);
        break;
        case 'q': 
          let openHat = document.querySelector('audio[data-key="81"]');
          let divOpenHat = document.querySelector('div[data-key="81"]');
          divOpenHat.classList.add('playing');
          openHat.play();
          removeTransition(divOpenHat);
        break;
        case 's': 
          let boom = document.querySelector('audio[data-key="83"]');
          let divBoom = document.querySelector('div[data-key="83"]');
          divBoom.classList.add('playing');
          boom.play();
          removeTransition(divBoom);
        break;
        case 'd': 
          let ride = document.querySelector('audio[data-key="68"]');
          let divRide = document.querySelector('div[data-key="68"]');
          divRide.classList.add('playing');
          ride.play();
          removeTransition(divRide);
        break;
          case 'w': 
          let snare = document.querySelector('audio[data-key="87"]');
          let divSnare = document.querySelector('div[data-key="87"]');
          divSnare.classList.add('playing');
          snare.play();
          removeTransition(divSnare);
        break;
        case 'x': 
          let tom = document.querySelector('audio[data-key="88"]');
          let divTom = document.querySelector('div[data-key="88"]');
          divTom.classList.add('playing');
          tom.play();
          removeTransition(divTom);
        break;
        case 'c': 
          let tink = document.querySelector('audio[data-key="67"]');
          let divTink = document.querySelector('div[data-key="67"]');
          divTink.classList.add('playing');
          tink.play();
          removeTransition(divTink);
        break;
          case ' ': 
          let divBeat = document.querySelector('div[data-key="32"]');
          divBeat.classList.add('playing');
          beatBox();
          removeTransition(divBeat);
        break;
      }
    });
  }
  
  function removeTransition(div) {
    // Fonction pour faire remonter la touche appuyée
    div.addEventListener('transitionend', () => {div.classList.remove('playing');})
  }
  
  playSound();
  
  function beatBox() {
    console.log("Beatbox")
    // Fonction pour simuler la pression d'une touche de clavier
    function simulateKey(keyCode) {
      const event = new KeyboardEvent('keydown', { keyCode });
      keyCode.play();
      document.dispatchEvent(event);
    }
  
    // Fonction qui renvoie une promesse
    function playBeat(beat, timeOut) {
      let sound = document.querySelector(`audio[data-key="${beat}"]`);
  
      return new Promise((resolve, reject) => {
        if(timeOut != null) {
          setTimeout(() => {
            simulateKey(sound);
            resolve();
          }, timeOut);
        } else {
          reject("Vous devez entrer un timeOut pour chaque son");
        }
      });
    }
  
    // Chaîne de promesses pour créer un beat
    playBeat(69, 500) // touche "A"
      .then(() => playBeat(69, 650)) // touche "S"
      .then(() => playBeat(65, 200)) // touche "D"
      .then(() => playBeat(81, 500)) // touche "F"
      .then(() => playBeat(67, 500)) // touche "J"
      .then(() => playBeat(69, 500)) // touche "K"
      .then(() => playBeat(65, 500)) // touche "L"
      .catch(() => alert("Erreur dans les sons"));
  }