/*
  The purpose of this file is to generate 9 screens one after another,
  each containing 3 images, where one image must match the associated audio
  that can be played.

  When all 9 screens have been played, the software goes back to the first
  screen, and starts the process over again.

  Authors: 
  Terry Goldsmith 
  - Created fully functioning code except for 2 function stubs: record(), teacher()
  
  Sebastian Duque Rivera(SDR)(A00441528)
  - Modified comments as well as certain images used. Renamed panelSet.
  - Re-purposed setup() function to display an intro screen first. 
  - Also added getBtns() function and renamed previous setup() to game(). 
  - Assisted in adding code for record() and teacher() functions.)

  Felipe Duque Rivera(FDR)
  - 

  Coco
  - 

  Adam
  - 

  Mahmood
  - 

*/

// Global array containing audio file names containing the asscoiated
// audio for each of the 9 screens. They occur in the order of the screens.
let audios = [
  "./audio/aqq.wav",
  "./audio/ltu.wav",
  "./audio/wiktm.wav",
  "./audio/eliey.wav",
  "./audio/mijisi.wav",
  "./audio/nin.wav",
  "./audio/kesalk.wav",
  "./audio/kil.wav",
  "./audio/teluisi.wav",
];

// global array containing the number of the image which corresponds to
// the audio file for each of the 9 screens.
// Note: Each screen contains 3 images: image 1, image 2 and image 3 from
//       left to right or from top to bottom depending on your device.
// Example: Screen 0 has an audio file that matches image 1
let answers = [1, 2, 3, 2, 3, 1, 3, 1, 2];

// global array containing 9 sets of 3 images making up the 9 screens.
// There are 27 elements in this array.
let panels = [
  "aqq.jpg",
  "eliey.jpg",
  "kesalk.jpg",
  "kil.jpg",
  "ltu.jpg",
  "mijisi.jpg",
  "nin.jpg",
  "teluisi.jpg",
  "wiktm.jpg",
  "aqq.jpg",
  "eliey.jpg",
  "kesalk.jpg",
  "kil.jpg",
  "ltu.jpg",
  "mijisi.jpg",
  "nin.jpg",
  "teluisi.jpg",
  "wiktm.jpg",
  "aqq.jpg",
  "eliey.jpg",
  "kesalk.jpg",
  "kil.jpg",
  "ltu.jpg",
  "mijisi.jpg",
  "nin.jpg",
  "teluisi.jpg",
  "wiktm.jpg",
];

// Contains the current screen number starting at zero.
let screenNum = 0;

//------------------------------------------------------------- Toggle Visibility ---------------------------------------------------------------------------------------------------//

/**
 *  This function will hide the element in the @param.
 *
 *  Authors: SDR
 *
 * @param {*} element The desired element.
 */
function hide(element) {
  var x = document.getElementById(element);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

/**
 *  This function will show the element in the @param.
 *
 *  Authors: SDR
 *
 * @param {*} element The desired element.
 */
function show(element) {
  var x = document.getElementById(element);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}

//-------------------------------------------------------------------- Screens ------------------------------------------------------------------------------------------------------//

/**
 *  This function will display the initial intro screen and hide any remaining screen.
 *
 *  Note: We don't need to show the intro, since index.html initially display it in the
 *  body. In this case, we would just have to hide any screen that comes after it.
 *
 *  Authors: SDR
 */
function setup() {
  hide("map");
  hide("howTo");
  hide("game");
}

/**
 *  This function will display the intro screen.
 *
 *  Authors: SDR
 */
function displayIntro() {
  hide("map");
  hide("howTo");
  hide("game");
  show("intro");
}

/**
 *  This function will display the interactive map.
 *
 *  Authors: Mahmood
 */
function displayMap() {
  hide("intro");
  hide("howTo");
  hide("game");
  show("map");
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */
function displayGame() {
  hide("intro");
  hide("map");
  hide("howTo");
  show("game");
  gameSetup();
}

/**
 *  STUB: This function will display the settings for the app.
 *
 *  Authors: SDR
 */
function displaySettings() {}

/**
 *  This function will display the instructions for how to play the game.
 *
 *  Authors: SDR
 */
function displayInstructions() {
  hide("intro");
  hide("map");
  hide("game");
  show("howTo");
}

//-------------------------------------------------------------------- Modals -------------------------------------------------------------------------------------------------------//

/**
 *  This function will display the congrats msg.
 *
 *  Authors: SDR
 */
function congrats() {
  let msg = '<h1 class="header-size">Congrats!</h1>';
  let fox = '<img class="fox-size-pass" type="image" src="./pics/congrats.png" />';
  let retry =
    '<button class="btn playBtn" onclick="retryBtn()"><i class="bi bi-arrow-counterclockwise"></i></button>';
  let complete = msg + fox + retry;

  document.getElementById("alertMsg").innerHTML = complete;

  hide("body"); // Hides Terry's images
  // retryBtn();
}

/**
 *  This function will display the try again msg.
 *
 *  Authors: SDR
 */
function tryAgain() {
  let msg = '<h1 class="header-size">Whoops, Try again</h1>';
  let fox = '<img class="fox-size-fail" type="image" src="./pics/tryagain.png" />';
  let retry =
    '<button class="btn playBtn" onclick="retryBtn()"><i class="bi bi-arrow-counterclockwise"></i></button>';
  let complete = msg + fox + retry;

  document.getElementById("alertMsg").innerHTML = complete;

  hide("body"); // Hides Terry's images
  // retryBtn();
}

/**
 *  In progress: This function will allow the user to retry a question.
 *
 *  Authors: SDR and Mahmood
 */
function retryBtn() {
  show("body");
  hide("alertMsg");
}

/**
 *  This function will retrieve the 4 main buttons for the app and display them in the header.
 *
 *  Authors: SDR and Mahmood
 */
function getBtns() {
  let backBtn =
    '<button class="btn multiBtn" onclick="displayMap()"><i class="bi bi-arrow-left-square-fill"></i></button>';
  let audioBtn =
    '<button class="btn multiBtn" onclick="audio()"><i class="bi bi-volume-up-fill"></i></button>';
  let recordBtn =
    '<button class="btn multiBtn" id="recordBtn" onclick="record()"><i class="bi-mic-fill"></i></button>';
  let teacherStr1 =
    '<button class="btn multiBtn" id="teacherBtn" onclick="playBackAudio()"> ';
  let teacherStr2 = '<i class="bi bi-music-player-fill"></i></button>';
  let teacherBtn = teacherStr1 + teacherStr2;

  let btns = backBtn + audioBtn + recordBtn + teacherBtn;
  document.getElementById("header").innerHTML = btns;
}

/**
  The purpose of this function is to inject HTML that consists of:
  - 3 images
  - each image is clickable
  - each image when clicked will call the same "choose" function
    but with a different argument: 1, 2 or 3 representing the image
    number

  Authors: same as file header

 */
function gameSetup() {
  getBtns();
  let str1 = '<input class="button" type="image" src="./pics/';
  let str2 = '" width="325" height="325" onclick="choose(1)"/>';
  let str3 = str1 + panels[0] + str2;
  document.getElementById("pic1").innerHTML = str3;
  console.log(str3);

  str2 = '" width="325" height="325" onclick="choose(2)"/>';
  str3 = str1 + panels[1] + str2;
  document.getElementById("pic2").innerHTML = str3;

  str2 = '" width="325" height="325" onclick="choose(3)"/>';
  str3 = str1 + panels[2] + str2;
  document.getElementById("pic3").innerHTML = str3;
}

/*
  The purpose of this function is to play the audio for the current screen.
  "screenNum" always contains the number for the current screen.

  Authors: same as file header 
*/
function audio() {
  let voice = new Audio(audios[screenNum]);
  voice.play();
}

var recording;

/**
 *  Records audio on click, records for 3 seconds and
    automatically plays it back.

    Authors: Adam
 */
function record() {
  navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    recordPulse();
    const audioChunks = [];
    mediaRecorder.addEventListener("dataavailable", (event) => {
      audioChunks.push(event.data);
    });

    mediaRecorder.addEventListener("stop", () => {
      const audioBlob = new Blob(audioChunks);
      const audioUrl = URL.createObjectURL(audioBlob);
      recording = new Audio(audioUrl);
      recording.play();
    });

    setTimeout(() => {
      mediaRecorder.stop();
      recordStop();
    }, 3000);
  });
}

/**
 *  This function changes the mic to a soundwave icon while recording
 *  and makes it glow red.
 *
 *  Authors: SDR and Mahmood
 */
function recordPulse() {
  let recording = '<i class="bi bi-soundwave blinking"></i>';
  document.getElementById("recordBtn").innerHTML = recording;
  document.getElementById("teacherBtn").style.color = "blue";
}

/**
 *  This function change the recording back to a mic.
 *
 *  Authors: SDR and Mahmood
 */
function recordStop() {
  let stopRec = '<i class="bi-mic-fill">';
  document.getElementById("recordBtn").innerHTML = stopRec;
}

/*
  Plays the recorded audio back
*/
function playBackAudio() {
  recording.play();
}

/*
  The purpose of this function is to produce a "try again" alert if the
  wrong image was clicked on, and to produce a "congratulations" alert if
  the correct image was clicked on. Also, for a correct image selection,
  the code will set up the next screen once the alert has finished.

  IF USER CHOICE EQUALS CORRECT ANSWER
      PRODUCE CONGRATULATING MESSAGE
      INSERT CLICKABLE IMAGE 1 INCLUDING FUNCTION CALL WITH ARGUMENT = 1
      INSERT CLICKABLE IMAGE 2 INCLUDING FUNCTION CALL WITH ARGUMENT = 2
      INSERT CLICKABLE IMAGE 3 INCLUDING FUNCTION CALL WITH ARGUMENT = 3
  ELSE
      PRODUCE TRY AGAIN MESSAGE

  Authors: Terry and SDR
 */
function choose(choice) {
  if (choice == answers[screenNum]) {
    congrats();

    // update screenNum in the sequence: 0 1 2 3 4 5 6 7 8 and back to 0
    screenNum = (screenNum + parseInt(1)) % parseInt(9);

    let str1 = '<input class="button" type="image" src="./pics/';
    let str2 = '" width="325" height="325" onclick="choose(1)"/>';
    let str3 = str1 + panels[screenNum * 3] + str2;
    document.getElementById("pic1").innerHTML = str3;

    str2 = '" width="325" height="325" onclick="choose(2)"/>';
    str3 = str1 + panels[screenNum * 3 + parseInt(1)] + str2;
    document.getElementById("pic2").innerHTML = str3;

    str2 = '" width="325" height="325" onclick="choose(3)"/>';
    str3 = str1 + panels[screenNum * 3 + parseInt(2)] + str2;
    document.getElementById("pic3").innerHTML = str3;
  } else {
    tryAgain();
  }
}
