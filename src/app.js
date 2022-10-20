/*
  The purpose of this file is to generate 9 screens one after another,
  each containing 3 images, where one image must match the associated audio
  that can be played.

  When all 9 screens have been played, the software goes back to the first
  screen, and starts the process over again.

  Authors: 
  Terry Goldsmith (Created fully functioning code except for 2 function stubs: record(), teacher())
  Sebastian Duque Rivera (SDR), A00441528 (Modified comments as well as certain images used. Renamed panelSet.
                                          Re-purposed setup() function to display an intro screen first. Also 
                                          added getBtns() function and renamed previous setup() to game(). 
                                          Assisted in adding code for record() and teacher() functions.)
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

/**
 *  This function will set up the initial intro page for the app, which will
 *  include our fox and the play button.
 *
 *  Authors: SDR
 */
function setup() {
  let title = '<h1 class="header-size">Wowkwis Says</h1>';
  document.getElementById("header").innerHTML = title;

  let fox = '<img class="fox-size" type="image" src="./pics/wowkwis.jpg">';
  document.getElementById("footer").innerHTML = fox;

  let start =
    '<button class="btn btn-primary startBtn" onclick="displayMap()"><i class="bi bi-play-fill"></i></button>';
  document.getElementById("pic2").innerHTML = start;
}

/**
 *  In Progress: This function will retrieve the interactive map for the game and will
 *  display the different "levels" that the user can play.
 *
 *  Authors: SDR
 */
function displayMap() {
  clearDivs();
  let map = '<img class="map-size" type="image" src="./pics/map.jpg">';
  document.getElementById("header").innerHTML = map;
}

/**
 *  This function will clear the contents of the header, pic and footer divs.
 *
 *  Authors: SDR
 */
function clearDivs() {
  document.getElementById("header").innerHTML = "";
  document.getElementById("pic1").innerHTML = "";
  document.getElementById("pic2").innerHTML = "";
  document.getElementById("pic3").innerHTML = "";
  document.getElementById("footer").innerHTML = "";
}

/**
 *  This function will retrieve the 4 main buttons for the app and display them in the header.
 *
 *  Authors: SDR
 */
function getBtns() {
  let audioBtn =
    '<button class="btn btn-success" onclick="audio()"><i class="bi bi-volume-up-fill"></i></button>';
  let recordBtn =
    '<button class="btn btn-warning" onclick="record()"><i class="bi-mic-fill"></i></button>';
  let exitBtn =
    '<button class="btn btn-danger" onclick="quit()"><i class="bi-x-square-fill"></i></button>';
  let adminBtn =
    '<button class="btn btn-primary" onclick="teacher()"><i class="bi-file-lock2"></i></button>';
  let btns = audioBtn + recordBtn + exitBtn + adminBtn;
  document.getElementById("header").innerHTML = btns;
}

/*
  The purpose of this function is to inject HTML that consists of:
    - 3 images
    - each image is clickable
    - each image when clicked will call the same "choose" function
      but with a different argument: 1, 2 or 3 representing the image
      number

  Authors: same as file header
*/
function game() {
  getBtns();
  let str1 = '<input class="button" type="image" src="./pics/';
  let str2 = '" width="325" height="325" onclick="choose(1)"/>';
  let str3 = str1 + panels[0] + str2;
  document.getElementById("pic1").innerHTML = str3;

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

/*
  Stub for student's audio record feature.
*/
function record() {}

/*
  The purpose of this function is to quit the application.

  Authors: same as file header
*/
function quit() {
  window.close();
}

/*
  Stub for teacher's audio record feature.
*/
function teacher() {}

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

  Authors: same as the file header
 */
function choose(choice) {
  if (choice == answers[screenNum]) {
    alert("Congratulations");

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
    alert("Try again");
  }
}
