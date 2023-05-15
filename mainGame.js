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
    console.log("submitted");
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
      submitbutton.disabled = true;
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

  submitbutton.classList.add("fadein-class");
  input.classList.add("fadein-class");
  
  submitbutton.style.top = '13%';
  input.style.top = '10%';
  input.value = '';
  input.placeholder = 'Enter web link...';
  setTimeout(() => {
      header.innerHTML = 'Now, lets conduct a <b> reverse image search </b> on the authors profile picture. Go to <i>https://www.google.com/imghp?sbi=1</i>, and drag the image into the search bar. Whats the link of the most popular website result?';

      submitbutton.onclick = submitPuzzle2;
      submitbutton.disabled = false;
      header.classList.remove('fadeoutandin-class');
      input.style.opacity = 0;
      submitbutton.style.opacity = 0;
      }, 500);
}

function submitPuzzle2() {
  console.log("puzzle 2");
  const answer = document.querySelector('.puzzle1Input').value;
  if(answer == "https://www.istockphoto.com/photo/breaking-news-gm1147538000-309584440") {
    const header = document.querySelector('.puzzle1H');
    const input = document.querySelector('.puzzle1Input');
    const submitbutton = document.querySelector('.puzzle1Button');
    const continuebutton = document.querySelector('.puzzle1Finish');

    submitbutton.classList.remove("fadein-class");
    input.classList.remove("fadein-class");
    input.style.opacity = 0;
    submitbutton.style.opacity = 0;
    
    continuebutton.classList.add('fadein-class');
    continuebutton.disabled = false;
    submitbutton.disabled = true;
    header.classList.add('fadeoutandin-class');
    setTimeout(() => {
    header.innerHTML = '<b>Who could have guessed! Its a stock image.</b> <br> Stock photos are generic photos, not depicting real people, that are used for various reasons. Remember, reverse image searching can be very useful and has clearly told us that so far, something is very off about this.';
    header.classList.remove('fadeoutandin-class');
      
    continuebutton.onclick = puzzle3;
    }, 500);
  }
    
  else {
    alert("Incorrect. The author's profile is located on the left side of the website!");
  }
}

function puzzle3() {
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

  submitbutton.classList.add("fadein-class");
  input.classList.add("fadein-class");
  
  submitbutton.style.top = '13%';
  input.style.top = '10%';
  input.value = '';
  input.placeholder = 'Enter time type...';
  setTimeout(() => {
      header.innerHTML = '<b>Lets start to wrap up on the author. </b> I heard of some inconsistency between the article date and the authors join date. By how many months are the dates different? If we made a mistake and there is no disparity, just tell us the word: none.';

      submitbutton.onclick = submitPuzzle3;
      submitbutton.disabled = false;
      header.classList.remove('fadeoutandin-class');
      input.style.opacity = 0;
      submitbutton.style.opacity = 0;
      }, 500);
}

function submitPuzzle3() {
  const answer = document.querySelector('.puzzle1Input').value;
  if(answer == "4") {
    const header = document.querySelector('.puzzle1H');
    const input = document.querySelector('.puzzle1Input');
    const submitbutton = document.querySelector('.puzzle1Button');
    const continuebutton = document.querySelector('.puzzle1Finish');

    submitbutton.classList.remove("fadein-class");
    input.classList.remove("fadein-class");
    input.style.opacity = 0;
    submitbutton.style.opacity = 0;
    
    continuebutton.classList.add('fadein-class');
    continuebutton.disabled = false;
    submitbutton.disabled = true;
    header.classList.add('fadeoutandin-class');
    setTimeout(() => {
    header.innerHTML = '<b>The author wrote the article before joining?</b> <br> That is fairly funny. Such a simple mistake but it tells us a lot. Remember to look closely for any mistakes as it can really tell a <b> lot </b> about the accuracy of the website. Now lets move on to the article itself for further clues.';
    header.classList.remove('fadeoutandin-class');
      
    continuebutton.onclick = puzzle4;
    }, 500);
  }
    
  else {
    alert("Not quite! Heres a helpful tip: read carefully throught the description provided on the author.");
  }
}

function puzzle4() {
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

  submitbutton.classList.add("fadein-class");
  input.classList.add("fadein-class");
  
  submitbutton.style.top = '13%';
  input.style.top = '10%';
  input.value = '';
  input.placeholder = 'Enter here...';
  setTimeout(() => {
      header.innerHTML = 'Sources have told us that there are some inconsistencies with the headline compared to other articles. Lets do some <b> lateral reading </b>, which is where you evaluate the credibility of a source by comparing it to other websites. Whats incorrect?';

      submitbutton.onclick = submitPuzzle4;
      submitbutton.disabled = false;
      header.classList.remove('fadeoutandin-class');
      input.style.opacity = 0;
      submitbutton.style.opacity = 0;
      }, 500);
}

function submitPuzzle4() {
  const answer = document.querySelector('.puzzle1Input').value;
  if(answer == "$110" || "110" || "110 billion" || "$110 billion") {
    const header = document.querySelector('.puzzle1H');
    const input = document.querySelector('.puzzle1Input');
    const submitbutton = document.querySelector('.puzzle1Button');
    const continuebutton = document.querySelector('.puzzle1Finish');

    submitbutton.classList.remove("fadein-class");
    input.classList.remove("fadein-class");
    input.style.opacity = 0;
    submitbutton.style.opacity = 0;
    
    continuebutton.classList.add('fadein-class');
    continuebutton.disabled = false;
    submitbutton.disabled = true;
    header.classList.add('fadeoutandin-class');
    setTimeout(() => {
    header.innerHTML = '<b> Perfect! Seems like it! What you just did was <b>laterally read</b>. This is a very efficient tool for recognizing fake-news and disinformation used by many of us. If things such as headlines, info, and more are not consistent, one party must have some sort of false information.';
    header.classList.remove('fadeoutandin-class');
      
    continuebutton.onclick = puzzle5;
    }, 500);
  }
    
  else {
    alert("Thats not quite it! Heres a hint: it relates to a number.");
  }
}

