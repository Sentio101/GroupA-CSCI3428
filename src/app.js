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
  - Helped ensure all the words displayed to user were in lowercase.
  - Corrected some misspelt translations.
  - Added some comments for clarity (i.e. JSON objects).
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

let answerWord = [
  "aqq",
  "l'tu",
  "wiktm",
  "eliey",
  "mijisi",
  "ni'n",
  "kesalk",
  "k'il",
  "teluisi",
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

//Creates JSON objects for the words, each including: the name, image, and audio
//add/delete/update new words for different levels
//level 1
const words1 = [
  { id: "0", name: "aqq", image: "aqq.jpg", audio: "./audio/aqq.wav" },
  { id: "1", name: "l\'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni\'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k\'il", image: "kil.jpg", audio: "./audio/kil.wav" },
  {
    id: "8",
    name: "teluisi",
    image: "teluisi.jpg",
    audio: "./audio/teluisi.wav",
  },
];

//Creates JSON objects for the words, each including: the name, image, and audio
//add/delete/update new words for different levels
//level 2
const words2 = [
  { id: "0", name: "aqq", image: "aqq.jpg", audio: "./audio/aqq.wav" },
  { id: "1", name: "l\'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni\'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k\'il", image: "kil.jpg", audio: "./audio/kil.wav" },
  {
    id: "8",
    name: "teluisi",
    image: "teluisi.jpg",
    audio: "./audio/teluisi.wav",
  },
];

//Creates JSON objects for the words, each including: the name, image, and audio
//add/delete/update new words for different levels
//level 3
const words3 = [
  { id: "0", name: "aqq", image: "aqq.jpg", audio: "./audio/aqq.wav" },
  { id: "1", name: "l\'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni\'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k\'il", image: "kil.jpg", audio: "./audio/kil.wav" },
  {
    id: "8",
    name: "teluisi",
    image: "teluisi.jpg",
    audio: "./audio/teluisi.wav",
  },
];

//Creates JSON objects for the words, each including: the name, image, and audio
//add/delete/update new words for different levels
//level 4
const words4 = [
  { id: "0", name: "aqq", image: "aqq.jpg", audio: "./audio/aqq.wav" },
  { id: "1", name: "l\'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni\'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k\'il", image: "kil.jpg", audio: "./audio/kil.wav" },
  {
    id: "8",
    name: "teluisi",
    image: "teluisi.jpg",
    audio: "./audio/teluisi.wav",
  },
];

//Creates JSON objects for the words, each including: the name, image, and audio
//add/delete/update new words for different levels
//level 5
const words5 = [
  { id: "0", name: "aqq", image: "aqq.jpg", audio: "./audio/aqq.wav" },
  { id: "1", name: "l\'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni\'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k\'il", image: "kil.jpg", audio: "./audio/kil.wav" },
  {
    id: "8",
    name: "teluisi",
    image: "teluisi.jpg",
    audio: "./audio/teluisi.wav",
  },
];

//Creates JSON objects for the words, each including: the name, image, and audio
//add/delete/update new words for different levels
//level 6
const words6 = [
  { id: "0", name: "aqq", image: "aqq.jpg", audio: "./audio/aqq.wav" },
  { id: "1", name: "l\'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni\'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k\'il", image: "kil.jpg", audio: "./audio/kil.wav" },
  {
    id: "8",
    name: "teluisi",
    image: "teluisi.jpg",
    audio: "./audio/teluisi.wav",
  },
];

//Creates JSON objects for the words, each including: the name, image, and audio
//add/delete/update new words for different levels
//level 7
const words7 = [
  { id: "0", name: "aqq", image: "aqq.jpg", audio: "./audio/aqq.wav" },
  { id: "1", name: "l\'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni\'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k\'il", image: "kil.jpg", audio: "./audio/kil.wav" },
  {
    id: "8",
    name: "teluisi",
    image: "teluisi.jpg",
    audio: "./audio/teluisi.wav",
  },
];

//Creates JSON objects for the words, each including: the name, image, and audio
//add/delete/update new words for different levels
//level 8
const words8 = [
  { id: "0", name: "aqq", image: "aqq.jpg", audio: "./audio/aqq.wav" },
  { id: "1", name: "l\'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni\'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k\'il", image: "kil.jpg", audio: "./audio/kil.wav" },
  {
    id: "8",
    name: "teluisi",
    image: "teluisi.jpg",
    audio: "./audio/teluisi.wav",
  },
];

//create a counter to ensure levels are locked until the previous is complete
currentCount = 0;

//create a level complete to determine what the level looks like
//0 - locked - grey/invisible
//1 - in progress - blicking yellow
//2 - complete - yellow
//the starting looks for the levels.

//NOT WORKING - !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var level1complete = 1;
// currentLevel(level1complete);
// var level2complete = 0;
// currentLevel(level2complete);
// var level3complete = 0;
// currentLevel(level3complete);
// var level4complete = 0;
// currentLevel(level4complete);
// var level5complete = 0;
// currentLevel(level5complete);
// var level6complete = 0;
// currentLevel(level6complete);
// var level7complete = 0;
// currentLevel(level7complete);
// var level8complete = 0;
// currentLevel(level8complete);
//NOT WORKING - !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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
  //NOT WORKING - !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //currentLevel();
  show("map");
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame1() {
  hide("intro");
  hide("map");
  hide("howTo");
  show("game");
  lastLand();
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame2() {
  hide("intro");
  hide("map");
  hide("howTo");
  show("game");
  drainageArea();
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame3() {
  hide("intro");
  hide("map");
  hide("howTo");
  show("game");
  lyingInTheWater();
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame4() {
  hide("intro");
  hide("map");
  hide("howTo");
  show("game");
  landOfFog();
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame5() {
  hide("intro");
  hide("map");
  hide("howTo");
  show("game");
  theExplosivePlace();
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame6() {
  hide("intro");
  hide("map");
  hide("howTo");
  show("game");
  skinDressersTerritory();
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame7() {
  hide("intro");
  hide("map");
  hide("howTo");
  show("game");
  wildPotatoArea();
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame8() {
  hide("intro");
  hide("map");
  hide("howTo");
  show("game");
  landEnds();
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

//-------------------------------------------------------------------- Alerts -------------------------------------------------------------------------------------------------------//

/**
 *  This function will display the congrats msg.
 *
 *  Authors: SDR
 */
function congrats1() {
  Swal.fire({
    title: "You selected the right item. Keep going!",
    background: "#86c34e",
  });

  //shuffle the three elements
  var finalArray2 = shuffle();

  //give each element in Array a variable
  var correctArray2 = finalArray2[0].image;
  var incAnswer3 = finalArray2[1].image;
  var incAnswer4 = finalArray2[2].image;

  audio(finalArray2);
  level2(finalArray2, correctArray2, incAnswer3, incAnswer4);
}

/**
 *  This function will display the congrats msg.
 *
 *  Authors: SDR
 */
function congrats2() {
  Swal.fire({
    title: "You selected the right item again. Keep going!",
    background: "#86c34e",
  });

  //shuffle the three elements
  var finalArray3 = shuffle();

  //give each element in Array a variable
  var correctArray3 = finalArray3[0].image;
  var incAnswer5 = finalArray3[1].image;
  var incAnswer6 = finalArray3[2].image;

  audio(finalArray3);
  level3(finalArray3, correctArray3, incAnswer5, incAnswer6);
}

/**
 *  This function will display the congrats msg.
 *
 *  Authors: SDR & FDR
 */
function congrats3() {
  Swal.fire({
    title: "kelu'lk tela'tekn",
    imageUrl: "./pics/congrats.png",
    imageWidth: 400,
    imageHeight: 200,
    background: "#86c34e",
  });

  currentCount++;
  console.log(currentCount);
  //counter(currentCount);
  displayMap();
}

/**
 *  This function will display the try again msg.
 *
 *  Authors: SDR
 */
function tryAgain1() {
  Swal.fire({
    title: "You selected the wrong item. Guess again!",
    background: "#86c34e",
  });
}

/**
 *  This function will display the try again msg.
 *
 *  Authors: SDR & FDR
 */
function tryAgain2() {
  Swal.fire({
    title: "tknu'kwalsi ap",
    imageUrl: "./pics/tryagain.png",
    imageWidth: 400,
    imageHeight: 200,
    background: "#86c34e",
  });
  displayMap();
}

/**
 *  This function will display the level complete msg.
 *
 *  Authors: SDR & FDR
 */
function levelCompleted() {
  Swal.fire({
    title: "kelu'lk tela'tekn",
    text: "Level Complete!",
    imageUrl: "./pics/congrats.png",
    imageWidth: 400,
    imageHeight: 200,
    background: "#4da0f3",
  });
  displayMap();
}

//-------------------------------------------------------------------- Game -------------------------------------------------------------------------------------------------------//
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
//shuffle the three elements

function level1(finalArray, correctArray, incAnswer1, incAnswer2) {
  document.getElementById("p1").innerHTML = " " + finalArray[0].name + " ";

  getBtns();

  let str1 = '<input class="button" type="image" src="./pics/';
  let str2 = '" width="325" height="325" onclick="choose1(1)"/>';
  let str3 = str1 + correctArray + str2;

  var correctSpot = getRandomInt(1, 3);
  var incorrectSpot = getRandomInt(1, 2);

  if (correctSpot === 1) {
    document.getElementById("pic1").innerHTML = str3;

    if (incorrectSpot === 1) {
      str2 = '" width="325" height="325" onclick="choose1(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic2").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose1(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic3").innerHTML = str3;
    } else {
      str2 = '" width="325" height="325" onclick="choose1(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic3").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose1(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic2").innerHTML = str3;
    }
  } else if (correctSpot === 2) {
    document.getElementById("pic2").innerHTML = str3;

    if (incorrectSpot === 1) {
      str2 = '" width="325" height="325" onclick="choose1(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic1").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose1(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic3").innerHTML = str3;
    } else {
      str2 = '" width="325" height="325" onclick="choose1(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic3").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose1(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic1").innerHTML = str3;
    }
  } else if (correctSpot === 3) {
    document.getElementById("pic3").inner1HTML = str3;

    if (incorrectSpot === 1) {
      str2 = '" width="325" height="325" onclick="choose1(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic1").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose1(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic2").innerHTML = str3;
    } else {
      str2 = '" width="325" height="325" onclick="choose1(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic2").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose1(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic1").innerHTML = str3;
    }
  } else {
    alert("An error occured. Please try again.");
  }
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

function level2(finalArray, correctArray, incAnswer1, incAnswer2) {
  document.getElementById("p1").innerHTML = " " + finalArray[0].name + " ";

  getBtns();

  let str1 = '<input class="button" type="image" src="./pics/';
  let str2 = '" width="325" height="325" onclick="choose2(1)"/>';
  let str3 = str1 + correctArray + str2;

  var correctSpot2 = getRandomInt(1, 3);
  var incorrectSpot2 = getRandomInt(1, 2);

  if (correctSpot2 === 1) {
    document.getElementById("pic1").innerHTML = str3;

    if (incorrectSpot2 === 1) {
      str2 = '" width="325" height="325" onclick="choose2(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic2").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose2(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic3").innerHTML = str3;
    } else {
      str2 = '" width="325" height="325" onclick="choose2(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic3").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose2(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic2").innerHTML = str3;
    }
  } else if (correctSpot2 === 2) {
    document.getElementById("pic2").innerHTML = str3;

    if (incorrectSpot2 === 1) {
      str2 = '" width="325" height="325" onclick="choose2(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic1").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose2(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic3").innerHTML = str3;
    } else {
      str2 = '" width="325" height="325" onclick="choose2(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic3").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose2(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic1").innerHTML = str3;
    }
  } else if (correctSpot2 === 3) {
    document.getElementById("pic3").inner1HTML = str3;

    if (incorrectSpot2 === 1) {
      str2 = '" width="325" height="325" onclick="choose2(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic1").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose2(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic2").innerHTML = str3;
    } else {
      str2 = '" width="325" height="325" onclick="choose2(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic2").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose2(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic1").innerHTML = str3;
    }
  } else {
    alert("An error occured. Please try again.");
  }
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
function level3(finalArray, correctArray, incAnswer1, incAnswer2) {
  document.getElementById("p1").innerHTML = " " + finalArray[0].name + " ";

  getBtns();

  let str1 = '<input class="button" type="image" src="./pics/';
  let str2 = '" width="325" height="325" onclick="choose3(1)"/>';
  let str3 = str1 + correctArray + str2;

  var correctSpot3 = getRandomInt(1, 3);
  var incorrectSpot3 = getRandomInt(1, 2);

  if (correctSpot3 === 1) {
    document.getElementById("pic1").innerHTML = str3;

    if (incorrectSpot3 === 1) {
      str2 = '" width="325" height="325" onclick="choose3(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic2").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose3(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic3").innerHTML = str3;
    } else {
      str2 = '" width="325" height="325" onclick="choose3(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic3").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose3(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic2").innerHTML = str3;
    }
  } else if (correctSpot3 === 2) {
    document.getElementById("pic2").innerHTML = str3;

    if (incorrectSpot3 === 1) {
      str2 = '" width="325" height="325" onclick="choose3(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic1").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose3(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic3").innerHTML = str3;
    } else {
      str2 = '" width="325" height="325" onclick="choose3(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic3").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose3(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic1").innerHTML = str3;
    }
  } else if (correctSpot3 === 3) {
    document.getElementById("pic3").inner1HTML = str3;

    if (incorrectSpot3 === 1) {
      str2 = '" width="325" height="325" onclick="choose3(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic1").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose3(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic2").innerHTML = str3;
    } else {
      str2 = '" width="325" height="325" onclick="choose3(2)"/>';
      str3 = str1 + incAnswer1 + str2;
      document.getElementById("pic2").innerHTML = str3;

      str2 = '" width="325" height="325" onclick="choose3(3)"/>';
      str3 = str1 + incAnswer2 + str2;
      document.getElementById("pic1").innerHTML = str3;
    }
  } else {
    alert("An error occured. Please try again.");
  }
}

/**
  The purpose of this function is to shuffle the array elements

  Authors: same as file header

 */
function shuffle() {
  if (currentCount < 1) {
    //shuffle the words array
    var array = words1.sort(() => Math.random() - 0.5);

    //select the first three elements in the array
    const newArray = array.slice(0, 3);
    return newArray;
  } else if (currentCount < 2) {
    //shuffle the words array
    var array = words2.sort(() => Math.random() - 0.5);

    //select the first three elements in the array
    const newArray = array.slice(0, 3);
    return newArray;
  } else if (currentCount < 3) {
    //shuffle the words array
    var array = words3.sort(() => Math.random() - 0.5);

    //select the first three elements in the array
    const newArray = array.slice(0, 3);
    return newArray;
  } else if (currentCount < 4) {
    //shuffle the words array
    var array = words4.sort(() => Math.random() - 0.5);

    //select the first three elements in the array
    const newArray = array.slice(0, 3);
    return newArray;
  } else if (currentCount < 5) {
    //shuffle the words array
    var array = words5.sort(() => Math.random() - 0.5);

    //select the first three elements in the array
    const newArray = array.slice(0, 3);
    return newArray;
  } else if (currentCount < 6) {
    //shuffle the words array
    var array = words6.sort(() => Math.random() - 0.5);

    //select the first three elements in the array
    const newArray = array.slice(0, 3);
    return newArray;
  } else if (currentCount < 7) {
    //shuffle the words array
    var array = words7.sort(() => Math.random() - 0.5);

    //select the first three elements in the array
    const newArray = array.slice(0, 3);
    return newArray;
  } else if (currentCount < 8) {
    //shuffle the words array
    var array = words8.sort(() => Math.random() - 0.5);

    //select the first three elements in the array
    const newArray = array.slice(0, 3);
    return newArray;
  }
  return newArray;
}

/**
  The purpose of this function is to return a random int

  Authors: same as file header

 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

/*
  The purpose of this function is to play the audio for the current screen.
  "screenNum" always contains the number for the current screen.

  Authors: same as file header 
*/
function audio(finalArray) {
  let voice = new Audio(finalArray[0].audio);
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
      console.log(recording);
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
  setTimeout(() => {
    document.getElementById("teacherBtn").style.color = "blue";
  }, 3000);
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

Authors: same as the file header
*/
function choose1(choice) {
  if (choice == 1) {
    congrats1();
  } else {
    tryAgain1();
  }
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

  Authors: same as the file header
 */

function choose2(choice) {
  if (choice == 1) {
    congrats2();
  } else {
    tryAgain1();
  }
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

  Authors: same as the file header
 */
function choose3(choice) {
  if (choice == 1) {
    congrats3();
  } else {
    tryAgain1();
    //change to tryAgain2 if the level fails
    //tryAgain2();
  }
}

/**
  The purpose of this function is to return a certain number of levels

  Authors: same as file header

 */
function lastLand() {
  //shuffle the three elements
  var finalArray = shuffle();

  //give each element in Array 1 a variable
  var correctArray = finalArray[0].image;
  var incAnswer1 = finalArray[1].image;
  var incAnswer2 = finalArray[2].image;

  audio(finalArray);
  level1(finalArray, correctArray, incAnswer1, incAnswer2);
}

/**
  The purpose of this function is to return a certain number of levels

  Authors: same as file header

 */
function drainageArea() {
  //shuffle the three elements
  var finalArray = shuffle();

  //give each element in Array 1 a variable
  var correctArray = finalArray[0].image;
  var incAnswer1 = finalArray[1].image;
  var incAnswer2 = finalArray[2].image;

  audio(finalArray);
  level1(finalArray, correctArray, incAnswer1, incAnswer2);
}

/**
  The purpose of this function is to return a certain number of levels

  Authors: same as file header

 */
function lyingInTheWater() {
  //shuffle the three elements
  var finalArray = shuffle();

  //give each element in Array 1 a variable
  var correctArray = finalArray[0].image;
  var incAnswer1 = finalArray[1].image;
  var incAnswer2 = finalArray[2].image;

  audio(finalArray);
  level1(finalArray, correctArray, incAnswer1, incAnswer2);
}

/**
  The purpose of this function is to return a certain number of levels

  Authors: same as file header

 */
function landOfFog() {
  //shuffle the three elements
  var finalArray = shuffle();

  //give each element in Array 1 a variable
  var correctArray = finalArray[0].image;
  var incAnswer1 = finalArray[1].image;
  var incAnswer2 = finalArray[2].image;

  audio(finalArray);
  level1(finalArray, correctArray, incAnswer1, incAnswer2);
}

/**
  The purpose of this function is to return a certain number of levels

  Authors: same as file header

 */
function theExplosivePlace() {
  //shuffle the three elements
  var finalArray = shuffle();

  //give each element in Array 1 a variable
  var correctArray = finalArray[0].image;
  var incAnswer1 = finalArray[1].image;
  var incAnswer2 = finalArray[2].image;

  audio(finalArray);
  level1(finalArray, correctArray, incAnswer1, incAnswer2);
}

/**
  The purpose of this function is to return a certain number of levels

  Authors: same as file header

 */
function skinDressersTerritory() {
  //shuffle the three elements
  var finalArray = shuffle();

  //give each element in Array 1 a variable
  var correctArray = finalArray[0].image;
  var incAnswer1 = finalArray[1].image;
  var incAnswer2 = finalArray[2].image;

  audio(finalArray);
  level1(finalArray, correctArray, incAnswer1, incAnswer2);
}

/**
  The purpose of this function is to return a certain number of levels

  Authors: same as file header

 */
function wildPotatoArea() {
  //shuffle the three elements
  var finalArray = shuffle();

  //give each element in Array 1 a variable
  var correctArray = finalArray[0].image;
  var incAnswer1 = finalArray[1].image;
  var incAnswer2 = finalArray[2].image;

  audio(finalArray);
  level1(finalArray, correctArray, incAnswer1, incAnswer2);
}

/**
  The purpose of this function is to return a certain number of levels

  Authors: same as file header

 */
function landEnds() {
  //shuffle the three elements
  var finalArray = shuffle();

  //give each element in Array 1 a variable
  var correctArray = finalArray[0].image;
  var incAnswer1 = finalArray[1].image;
  var incAnswer2 = finalArray[2].image;

  audio(finalArray);
  level1(finalArray, correctArray, incAnswer1, incAnswer2);
}

//NOT WORKING - !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function counter(currentCount) {
// //Use currentCount to determine which levels are being unlocked,
// // in progress, or complete.

//   if (currentCount = 0) {
//     level1complete = 2;
//     //currentLevel(level1complete);
//     level2complete = 1;
//     //currentLevel(level2complete);
//     currentCount++;
//    } else if (currentCount = 1) {
//     level2complete = 2;
//     //currentLevel(level2complete);
//     level3complete = 1;
//     //currentLevel(level3complete);
//     currentCount++;
//   } else if (currentCount = 2) {
//     level3complete = 2;
//     //currentLevel(level3complete);
//     level4complete = 1;
//     //currentLevel(level4complete);
//     currentCount++;
//   } else if (currentCount = 3) {
//     level4complete = 2;
//    // currentLevel(level4complete);
//     level5complete = 1;
//     //currentLevel(level5complete);
//     currentCount++;
//   } else if (currentCount = 4) {
//     level5complete = 2;
//     //currentLevel(level5complete);
//     level6complete = 1;
//     //currentLevel(level6complete);
//     currentCount++;
//   } else if (currentCount = 5) {
//     level6complete = 2;
//     //currentLevel(level6complete);
//     level7complete = 1;
//     //currentLevel(level7complete);
//     currentCount++;
//   } else if (currentCount = 6) {
//     level7complete = 2;
//     //currentLevel(level7complete);
//     level8complete = 1;
//     //currentLevel(level8complete);
//     currentCount++;
//   } else if (currentCount = 7) {
//     level8complete = 2;
//     //currentLevel(level8complete);
//   } else {
//     //pop up requesting to reset the game???????????????
//   }
// }

// function currentLevel(level){
//     //0 - locked
//     //1 - in progress
//     //2 - complete

//     if (level = 0){
//       document.getElementById('togglee').style.visibility = 'hidden';
//     } else {
//       document.getElementById('togglee').style.visibility = 'visible';
//     }
// }

//NOT WORKING - !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
