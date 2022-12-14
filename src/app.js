/*
  Purpose: This will be the JS file we use to create our Mi'kmaq App (wowkwis teluet). 
  
  Gameplay: The main game itself will consist of an interactive map that has "levels" or dots that will 
  all initially start off gray except the first dot, which will be blinking yellow. Once you click it,
  you will be brought to the game screen, which will display several buttons at the top, a word in the middle,
  and three images below. You will be matching the word (which has an associated audio file that plays with it) 
  to the image below. The audio can be played back using the buttons above and one button will even allow the  
  user to create a new recording using their microphone (the playback of that recorded audio is attached to a 
  button up top as well). You will complete each level by achieving three correct answers. In doing so, you
  will be sent back to the interactive map where the previously yellow blinking dot has now changed to green
  and a new gray dot will begin to blink yellow.

  Authors: 
  Terry Goldsmith 
  - Created fully functioning code except for 2 function stubs: record(), teacher()
  
  Sebastian Duque Rivera or SDR (A00441528)
  - Modified comments as well as certain images used. Renamed panelSet.
  - Re-purposed the setup() function to display an intro screen first.
  - Created multiple display screen functions. 
  - Added the show() and hide() functions, which will display or 
    hide elements. In our case, we use it mainly for our screens.
  - Added a getBtns() function. 
  - Created a recordPulse() function.
  - Modified some code in the record() function.
  - Removed unused code.
  - Created a currentLevel() function and updated fields calling this function

  Felipe Duque Rivera or FDR (A)
  - Helped ensure all the words displayed to the user were in lowercase.
  - Corrected some misspelled translations.
  - Added some comments for clarity (i.e. JSON objects).

  Brianna Coco (A00459547)
  - Added the functions for levels()
  - Created JSON array constants for words.
  - Added a counter global variable.
  - Created functions for specific levels

  Adam Leveille (A00359857)
  - Created a record() function.

  Mahmood Al-Zubaidi (A00432616)
  - Created the displayMap() function.
  - Helped create the recordPulse() function.

*/

//------------------------------------------ Global Variables -----------------------------------------------//

// A count to keep track of what level the user is on. By default, we start at level 1
var currentCount = 1;

//Creates JSON objects for the words, each including: the name, image, and audio
//add/delete/update new words for different levels
//level 1
const words1 = [
  { id: "0", name: "aqq", image: "aqq.jpg", audio: "./audio/aqq.wav" },
  { id: "1", name: "l'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k'il", image: "kil.jpg", audio: "./audio/kil.wav" },
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
  { id: "1", name: "l'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k'il", image: "kil.jpg", audio: "./audio/kil.wav" },
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
  { id: "1", name: "l'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k'il", image: "kil.jpg", audio: "./audio/kil.wav" },
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
  { id: "1", name: "l'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k'il", image: "kil.jpg", audio: "./audio/kil.wav" },
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
  { id: "1", name: "l'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k'il", image: "kil.jpg", audio: "./audio/kil.wav" },
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
  { id: "1", name: "l'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k'il", image: "kil.jpg", audio: "./audio/kil.wav" },
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
  { id: "1", name: "l'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k'il", image: "kil.jpg", audio: "./audio/kil.wav" },
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
  { id: "1", name: "l'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k'il", image: "kil.jpg", audio: "./audio/kil.wav" },
  {
    id: "8",
    name: "teluisi",
    image: "teluisi.jpg",
    audio: "./audio/teluisi.wav",
  },
];

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
 *  This function will display the initial intro screen by hide any remaining screens.
 *  It will also hide the dots/levels on the map, so that only the first level appears.
 *
 *  Note: We don't need to call show("intro"), since index.html initially displays it in the
 *  body. In this case, we would just have to hide any screen that comes after it.
 *
 *  Authors: SDR
 */
function setup() {
  // These lines hide the other screens
  hide("map");
  hide("howTo");
  hide("game");

  // This will check which dot/level should be appearing on the interactive map
  currentLevel();
}

/**
 *  This function will display the intro screen.
 *
 *  Authors: SDR
 */
function displayIntro() {
  // These lines hide the other screens
  hide("map");
  hide("howTo");
  hide("game");

  // This shows the intro screen
  show("intro");
}

/**
 *  This function will display the interactive map.
 *
 *  Authors: Mahmood
 */
function displayMap() {
  // These lines hide the other screens
  hide("intro");
  hide("howTo");
  hide("game");

  // This shows the interactive map
  show("map");
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame1() {
  // These lines hide the other screens
  hide("intro");
  hide("map");
  hide("howTo");

  // This shows the game screen
  show("game");

  // This sets up the specific level
  lastLand();
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame2() {
  // These lines hide the other screens
  hide("intro");
  hide("map");
  hide("howTo");

  // This shows the game screen
  show("game");

  // This sets up the specific level
  drainageArea();
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame3() {
  // These lines hide the other screens
  hide("intro");
  hide("map");
  hide("howTo");

  // This shows the game screen
  show("game");

  // This sets up the specific level
  lyingInTheWater();
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame4() {
  // These lines hide the other screens
  hide("intro");
  hide("map");
  hide("howTo");

  // This shows the game screen
  show("game");

  // This sets up the specific level
  landOfFog();
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame5() {
  // These lines hide the other screens
  hide("intro");
  hide("map");
  hide("howTo");

  // This shows the game screen
  show("game");

  // This sets up the specific level
  theExplosivePlace();
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame6() {
  // These lines hide the other screens
  hide("intro");
  hide("map");
  hide("howTo");

  // This shows the game screen
  show("game");

  // This sets up the specific level
  skinDressersTerritory();
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame7() {
  // These lines hide the other screens
  hide("intro");
  hide("map");
  hide("howTo");

  // This shows the game screen
  show("game");

  // This sets up the specific level
  wildPotatoArea();
}

/**
 *  This function will display the game screen.
 *
 *  Authors: SDR
 */

function displayGame8() {
  // These lines hide the other screens
  hide("intro");
  hide("map");
  hide("howTo");

  // This shows the game screen
  show("game");

  // This sets up the specific level
  landEnds();
}

/**
 *  This function will display the instructions for how to play the game.
 *
 *  Authors: SDR
 */
function displayInstructions() {
  // These lines hide the other screens
  hide("intro");
  hide("map");
  hide("game");

  // This shows the how to play screen
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
    title: "kelu'lk tela'tekn",
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
    title: "kelu'lk tela'tekn",
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

  // This will add 1 to the currentCount, which points it to the next level
  currentCount++;

  /* 
    This will display the current level and update the dots/levels on the 
    interactive map accordingly.
  */
  currentLevel();

  // This will display the map after 3 correct answers are found.
  displayMap();
}

/**
 *  This function will display the try again msg.
 *
 *  Authors: SDR
 */
function tryAgain1() {
  Swal.fire({
    title: "tknu'kwalsi ap",
    imageUrl: "./pics/tryagain.png",
    imageWidth: 400,
    imageHeight: 200,
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

//-------------------------------------------------------------------- Game -------------------------------------------------------------------------------------------------------//

/**
 *  This function will retrieve the 4 main buttons for the app and display them in the header.
 *
 *  Authors: SDR + Mahmood
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
 *  and makes it glow red. It also sets the color of the mp3 player
 *  icon to blue after 3 seconds pass (which is the recording time).
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
 *  This function changes the recording icon back to a mic.
 *
 *  Authors: SDR and Mahmood
 */
function recordStop() {
  let stopRec = '<i class="bi-mic-fill">';
  document.getElementById("recordBtn").innerHTML = stopRec;
}

/**
 *  Plays the recorded audio back.
 *
 *  Authors: same as file header
 */
function playBackAudio() {
  recording.play();
}

/**
 * The purpose of this function is to produce a "try again" alert if the
 * wrong image was clicked on, and to produce a "congratulations" alert if
 * the correct image was clicked on.
 *
 * IF USER's CHOICE EQUALS CORRECT ANSWER
 *  PRODUCE CONGRATULATING MESSAGE
 * ELSE
 *  PRODUCE TRY AGAIN MESSAGE
 *
 * @param {*} choice The selected image.
 *
 * Authors: same as the file header
 */
function choose1(choice) {
  if (choice == 1) {
    congrats1();
  } else {
    tryAgain1();
  }
}

/**
 * The purpose of this function is to produce a "try again" alert if the
 * wrong image was clicked on, and to produce a "congratulations" alert if
 * the correct image was clicked on.
 *
 * IF USER CHOICE EQUALS CORRECT ANSWER
 *  PRODUCE CONGRATULATING MESSAGE
 * ELSE
 *  PRODUCE TRY AGAIN MESSAGE
 *
 * @param {*} choice The selected image.
 *
 * Authors: same as the file header
 */
function choose2(choice) {
  if (choice == 1) {
    congrats2();
  } else {
    tryAgain1();
  }
}

/**
 * The purpose of this function is to produce a "try again" alert if the
 * wrong image was clicked on, and to produce a "congratulations" alert if
 * the correct image was clicked on.
 *
 * IF USER CHOICE EQUALS CORRECT ANSWER
 *  PRODUCE CONGRATULATING MESSAGE
 * ELSE
 *  PRODUCE TRY AGAIN MESSAGE
 *
 * @param {*} choice The selected image.
 *
 * Authors: same as the file header
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

/**
 * This function will determine the current level that the user has
 * made it to. It will also keep track of the current level in the
 * console.
 *
 * Authors: SDR + Coco
 */
function currentLevel() {
  /* 
    Checking to see what the currentCount is to determine
    what level the user is at.
  */
  if (currentCount == 1) {
    // This will display the level 1 dot on the map
    show("levelbutton1");

    // This makes that dot start blinking yellow
    document.getElementById("levelbutton1").className = "blinking";

    // These will hide the other dots/levels on the map
    hide("levelbutton2");
    hide("levelbutton3");
    hide("levelbutton4");
    hide("levelbutton5");
    hide("levelbutton6");
    hide("levelbutton7");
    hide("levelbutton8");

    // This will display the current level in the console
    console.log("The current level: " + currentCount);
  } else if (currentCount == 2) {
    /* 
      This will set the previous dot/level's class to lightgreen, which 
      will indicate that the level is complete
    */
    document.getElementById("levelbutton1").style.backgroundColor =
      "lightgreen";

    // This will remove the blinking animation on the previous dot/level
    document.getElementById("levelbutton1").style.animation = "none";

    document.getElementById("levelbutton1").disable = true;

    // This will display the level 2 dot on the map
    show("levelbutton2");

    // This makes that dot start blinking yellow
    document.getElementById("levelbutton2").className = "blinking";

    // These will hide the other dots/levels on the map
    hide("levelbutton3");
    hide("levelbutton4");
    hide("levelbutton5");
    hide("levelbutton6");
    hide("levelbutton7");
    hide("levelbutton8");

    // This will display the current level in the console
    console.log("The current level: " + currentCount);
  } else if (currentCount == 3) {
    /* 
      This will set the previous dot/level's class to lightgreen, which 
      will indicate that the level is complete
    */
    document.getElementById("levelbutton2").style.backgroundColor =
      "lightgreen";

    // This will remove the blinking animation on the previous dot/level
    document.getElementById("levelbutton2").style.animation = "none";

    // This will display the level 3 dot on the map
    show("levelbutton3");

    // This makes that dot start blinking yellow
    document.getElementById("levelbutton3").className = "blinking";

    // These will hide the other dots/levels on the map
    hide("levelbutton4");
    hide("levelbutton5");
    hide("levelbutton6");
    hide("levelbutton7");
    hide("levelbutton8");

    // This will display the current level in the console
    console.log("The current level: " + currentCount);
  } else if (currentCount == 4) {
    /* 
      This will set the previous dot/level's class to lightgreen, which 
      will indicate that the level is complete
    */
    document.getElementById("levelbutton3").style.backgroundColor =
      "lightgreen";

    // This will remove the blinking animation on the previous dot/level
    document.getElementById("levelbutton3").style.animation = "none";

    // This will display the level 4 dot on the map
    show("levelbutton4");

    // This makes that dot start blinking yellow
    document.getElementById("levelbutton4").className = "blinking";

    // These will hide the other dots/levels on the map
    hide("levelbutton5");
    hide("levelbutton6");
    hide("levelbutton7");
    hide("levelbutton8");

    // This will display the current level in the console
    console.log("The current level: " + currentCount);
  } else if (currentCount == 5) {
    /* 
      This will set the previous dot/level's class to lightgreen, which 
      will indicate that the level is complete
    */
    document.getElementById("levelbutton4").style.backgroundColor =
      "lightgreen";

    // This will remove the blinking animation on the previous dot/level
    document.getElementById("levelbutton4").style.animation = "none";

    // This will display the level 5 dot on the map
    show("levelbutton5");

    // This makes that dot start blinking yellow
    document.getElementById("levelbutton5").className = "blinking";

    // These will hide the other dots/levels on the map
    hide("levelbutton6");
    hide("levelbutton7");
    hide("levelbutton8");

    // This will display the current level in the console
    console.log("The current level: " + currentCount);
  } else if (currentCount == 6) {
    /* 
      This will set the previous dot/level's class to lightgreen, which 
      will indicate that the level is complete
    */
    document.getElementById("levelbutton5").style.backgroundColor =
      "lightgreen";

    // This will remove the blinking animation on the previous dot/level
    document.getElementById("levelbutton5").style.animation = "none";

    // This will display the level 6 dot on the map
    show("levelbutton6");

    // This makes that dot start blinking yellow
    document.getElementById("levelbutton6").className = "blinking";

    // These will hide the other dots/levels on the map
    hide("levelbutton7");
    hide("levelbutton8");

    // This will display the current level in the console
    console.log("The current level: " + currentCount);
  } else if (currentCount == 7) {
    /* 
      This will set the previous dot/level's class to lightgreen, which 
      will indicate that the level is complete
    */
    document.getElementById("levelbutton6").style.backgroundColor =
      "lightgreen";

    // This will remove the blinking animation on the previous dot/level
    document.getElementById("levelbutton6").style.animation = "none";

    // This will display the level 7 dot on the map
    show("levelbutton7");

    // This makes that dot start blinking yellow
    document.getElementById("levelbutton7").className = "blinking";

    // These will hide the other dots/levels on the map
    hide("levelbutton8");

    // This will display the current level in the console
    console.log("The current level: " + currentCount);
  } else if (currentCount == 8) {
    /* 
      This will set the previous dot/level's class to lightgreen, which 
      will indicate that the level is complete
    */
    document.getElementById("levelbutton7").style.backgroundColor =
      "lightgreen";

    // This will remove the blinking animation on the previous dot/level
    document.getElementById("levelbutton7").style.animation = "none";

    // This will display the level 8 dot on the map
    show("levelbutton8");

    // This makes that dot start blinking yellow
    document.getElementById("levelbutton8").className = "blinking";

    // This will display the current level in the console
    console.log("The current level: " + currentCount);
  } else if (currentCount == 9) {
    /* 
      This will set the previous dot/level's class to lightgreen, which 
      will indicate that the level is complete
    */
    document.getElementById("levelbutton8").style.backgroundColor =
      "lightgreen";

    // This will remove the blinking animation on the previous dot/level
    document.getElementById("levelbutton8").style.animation = "none";

    /* 
      This will set the currentCount back to zero, which essentially
      be used to restart the game (in theory). 
    */
    currentCount = 0;

    // This will display the current level in the console
    console.log("All levels have been completed!");
  } else {
    // This will display in console should an error occur.
    console.log("The current level could not be determined.");
  }
}
