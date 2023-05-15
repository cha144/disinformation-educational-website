const audio = new Audio('callingSFX.mp3');
const audio2 = new Audio('pickupSFX.mp3');

let popup = document.querySelector('.welcomePopup');
  console.log(popup);
  let onePopupOpened = false;

  function openPopup() {
      if(!onePopupOpened){
      popup.classList.add("open-popup");
      onePopupOpened = true;
      }
  }

  function closePopup() {
      popup.classList.remove("open-popup");
      onePopupOpened = false;
      var body = document.querySelector("body");
      body.classList.remove("blur");

      setTimeout(() => {
        let puzzlePopup = document.querySelector('.puzzlePopup1');
        puzzlePopup.classList.add("puzzleopen-popup");
        }, 1000);
  }

window.onload = function() {
  setTimeout(() => {
    audio.loop = true;
    audio.play(); 
  
    audio.onerror = function() {
    console.error('Error loading audio file');
    }
    
    audio.oncanplay = function() {
    console.log('Audio is ready to play');
    audio.play();
    }
  }, 1000);
  
  setTimeout(() => {
  var popup = document.getElementById('callPopup');
  popup.classList.toggle('active')

  var body = document.querySelector("body");
  body.classList.add("blur");
    
  }, 4000);
};

function toggleCall() {
  console.log("yes");
  audio.pause();
  audio2.play();
  var callPopup = document.getElementById('callPopup');
  callPopup.classList.remove('active');

  setTimeout(() => {
      audio2.pause();
      openPopup();
  }, 1000);
}

function submitPuzzle1() {
    const answer = document.querySelector('.puzzle1Input').value;
    console.log(answer);
    if(answer == "BCTimes@bctimes.com") {
      const header = document.querySelector('.puzzle1H');
      const input = document.querySelector('.puzzle1Input');
      const submitbutton = document.querySelector('.puzzle1Button');
      const continuebutton = document.querySelector('.puzzle1Finish');
      input.style.opacity = 0;
      submitbutton.style.opacity = 0;
      continuebutton.classList.add('fadein-class');
      continuebutton.disabled = false;
      header.classList.add('fadeoutandin-class');
      setTimeout(() => {
      header.innerHTML = '<b>Nice catch!</b> <br> <br> Notice how this email is not personally the authors, but the whole organizations. Remember that reputable news sites usually have personal email addresses for each author. This gives us a good reason to be suspicious so far.';
      header.classList.remove('fadeoutandin-class');
      }, 500);
    }
    else {
      alert("Incorrect. Keep looking around the article!");
    }
}

function puzzle2() {
  const header = document.querySelector('.puzzle1H');
  const input = document.querySelector('.puzzle1Input');
  const submitbutton = document.querySelector('.puzzle1Button');
  const continuebutton = document.querySelector('.puzzle1Finish');
  header.classList.add('fadeoutandin-class');
  continuebutton.classList.remove("fadein-class");
  continuebutton.disabled = true;
  continuebutton.style.opacity = 0;
  submitbutton.style.opacity = 0;
  input.style.opacity = 0;

  submitbutton.removeEventListener("click", submitPuzzle1());
  submitbutton.addEventListener("click", submitPuzzle2());
  
  submitbutton.classList.add("fadein-class");
  input.classList.add("fadein-class");
  
  submitbutton.style.top = '13%';
  input.style.top = '10%';
  setTimeout(() => {
      header.innerHTML = 'Now, lets conduct a <b> reverse image search </b> on the authors profile picture. Go to <i>https://www.google.com/imghp?sbi=1</i>, and drag the image into the search bar. Whats the link of the most popular website result?';
      }, 500);
}

function submitPuzzle2() {
  
}

