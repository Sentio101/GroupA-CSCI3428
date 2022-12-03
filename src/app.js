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
  "l\'tu",
  "wiktm",
  "eliey",
  "mijisi",
  "ni\'n",
  "kesalk",
  "k\'il",
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
const words = [
  { id: "0", name: "aqq", image: "aqq.jpg", audio: "./audio/aqq.wav" },
  { id: "1", name: "l\'tu", image: "ltu.jpg", audio: "./audio/ltu.wav" },
  { id: "2", name: "wiktm", image: "wiktm.jpg", audio: "./audio/wiktm.wav" },
  { id: "3", name: "eliey", image: "eliey.jpg", audio: "./audio/eliey.wav" },
  { id: "4", name: "mijisi", image: "mijisi.jpg", audio: "./audio/mijisi.wav" },
  { id: "5", name: "ni\'n", image: "nin.jpg", audio: "./audio/nin.wav" },
  { id: "6", name: "kesalk", image: "kesalk.jpg", audio: "./audio/kesalk.wav" },
  { id: "7", name: "k\'il", image: "kil.jpg", audio: "./audio/kil.wav" },
  { id: "8", name: "teluisi", image: "teluisi.jpg", audio: "./audio/teluisi.wav"},
];

//shuffle the three elements
var finalArray1 = shuffle();
var finalArray2 = shuffle();
var finalArray3 = shuffle();

//give each element in Array 1 a variable
var correctArray = finalArray1[0].image;
var incAnswer1 = finalArray1[1].image;
var incAnswer2 = finalArray1[2].image;

 //give each element in Array 2 a variable
 var correctArray2 = finalArray2[0].image;
 var incAnswer3 = finalArray2[1].image;
 var incAnswer4 = finalArray2[2].image;

  //give each element in Array 2 a variable
  var correctArray3 = finalArray3[0].image;
  var incAnswer5 = finalArray3[1].image;
  var incAnswer6 = finalArray3[2].image;


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

  
  audio2();
  show(level2());
  hide(level1());
  hide(level3());
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
  
  audio3();
  show(level3());
  hide(level1());
  hide(level2());

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
  
  displayMap();
  hide(level1());
  hide(level2());
  hide(level3());

}

/**
 *  This function will display the try again msg.
 *
 *  Authors: SDR
 */
function tryAgain1() {
  Swal.fire({
    title: "You selected the wrong item. Guess again!",
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

function level1() {
  document.getElementById("p1").innerHTML = " " + finalArray1[0].name + " ";

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
  }

  else if (correctSpot === 2) {
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
  }

  else if (correctSpot === 3) {
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
  }

  else {
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

  function level2() {
    document.getElementById("p1").innerHTML = " " + finalArray2[0].name + " ";
  
    getBtns();
  
    let str1 = '<input class="button" type="image" src="./pics/';
    let str2 = '" width="325" height="325" onclick="choose2(1)"/>';
    let str3 = str1 + correctArray2 + str2;
  
    var correctSpot2 = getRandomInt(1, 3);
    var incorrectSpot2 = getRandomInt(1, 2);
  
    if (correctSpot2 === 1) {
      document.getElementById("pic1").innerHTML = str3;
  
  
      if (incorrectSpot2 === 1) {
        str2 = '" width="325" height="325" onclick="choose2(2)"/>';
        str3 = str1 + incAnswer3 + str2;
        document.getElementById("pic2").innerHTML = str3;
  
        str2 = '" width="325" height="325" onclick="choose2(3)"/>';
        str3 = str1 + incAnswer4 + str2;
        document.getElementById("pic3").innerHTML = str3;
      } else {
        str2 = '" width="325" height="325" onclick="choose2(2)"/>';
        str3 = str1 + incAnswer3 + str2;
        document.getElementById("pic3").innerHTML = str3;
  
        str2 = '" width="325" height="325" onclick="choose2(3)"/>';
        str3 = str1 + incAnswer4 + str2;
        document.getElementById("pic2").innerHTML = str3;
      }
    }
  
    else if (correctSpot2 === 2) {
      document.getElementById("pic2").innerHTML = str3;
  
  
      if (incorrectSpot2 === 1) {
        str2 = '" width="325" height="325" onclick="choose2(2)"/>';
        str3 = str1 + incAnswer3 + str2;
        document.getElementById("pic1").innerHTML = str3;
  
        str2 = '" width="325" height="325" onclick="choose2(3)"/>';
        str3 = str1 + incAnswer4 + str2;
        document.getElementById("pic3").innerHTML = str3;
      } else {
        str2 = '" width="325" height="325" onclick="choose2(2)"/>';
        str3 = str1 + incAnswer3 + str2;
        document.getElementById("pic3").innerHTML = str3;
  
        str2 = '" width="325" height="325" onclick="choose2(3)"/>';
        str3 = str1 + incAnswer4 + str2;
        document.getElementById("pic1").innerHTML = str3;
      }
    }
  
    else if (correctSpot2 === 3) {
      document.getElementById("pic3").inner1HTML = str3;
  
  
      if (incorrectSpot2 === 1) {
        str2 = '" width="325" height="325" onclick="choose2(2)"/>';
        str3 = str1 + incAnswer3 + str2;
        document.getElementById("pic1").innerHTML = str3;
  
        str2 = '" width="325" height="325" onclick="choose2(3)"/>';
        str3 = str1 + incAnswer4 + str2;
        document.getElementById("pic2").innerHTML = str3;
      } else {
        str2 = '" width="325" height="325" onclick="choose2(2)"/>';
        str3 = str1 + incAnswer3 + str2;
        document.getElementById("pic2").innerHTML = str3;
  
        str2 = '" width="325" height="325" onclick="choose2(3)"/>';
        str3 = str1 + incAnswer4 + str2;
        document.getElementById("pic1").innerHTML = str3;
      }
    }
  
    else {
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

  function level3() {
    document.getElementById("p1").innerHTML = " " + finalArray3[0].name + " ";
  
    getBtns();
  
    let str1 = '<input class="button" type="image" src="./pics/';
    let str2 = '" width="325" height="325" onclick="choose3(1)"/>';
    let str3 = str1 + correctArray3 + str2;
  
    var correctSpot3 = getRandomInt(1, 3);
    var incorrectSpot3 = getRandomInt(1, 2);
  
    if (correctSpot3 === 1) {
      document.getElementById("pic1").innerHTML = str3;
  
  
      if (incorrectSpot3 === 1) {
        str2 = '" width="325" height="325" onclick="choose3(2)"/>';
        str3 = str1 + incAnswer5 + str2;
        document.getElementById("pic2").innerHTML = str3;
  
        str2 = '" width="325" height="325" onclick="choose3(3)"/>';
        str3 = str1 + incAnswer6 + str2;
        document.getElementById("pic3").innerHTML = str3;
      } else {
        str2 = '" width="325" height="325" onclick="choose3(2)"/>';
        str3 = str1 + incAnswer5 + str2;
        document.getElementById("pic3").innerHTML = str3;
  
        str2 = '" width="325" height="325" onclick="choose3(3)"/>';
        str3 = str1 + incAnswer6 + str2;
        document.getElementById("pic2").innerHTML = str3;
      }
    }
  
    else if (correctSpot3 === 2) {
      document.getElementById("pic2").innerHTML = str3;
  
  
      if (incorrectSpot3 === 1) {
        str2 = '" width="325" height="325" onclick="choose3(2)"/>';
        str3 = str1 + incAnswer5 + str2;
        document.getElementById("pic1").innerHTML = str3;
  
        str2 = '" width="325" height="325" onclick="choose3(3)"/>';
        str3 = str1 + incAnswer6 + str2;
        document.getElementById("pic3").innerHTML = str3;
      } else {
        str2 = '" width="325" height="325" onclick="choose3(2)"/>';
        str3 = str1 + incAnswer5 + str2;
        document.getElementById("pic3").innerHTML = str3;
  
        str2 = '" width="325" height="325" onclick="choose3(3)"/>';
        str3 = str1 + incAnswer6 + str2;
        document.getElementById("pic1").innerHTML = str3;
      }
    }
  
    else if (correctSpot3 === 3) {
      document.getElementById("pic3").inner1HTML = str3;
  
  
      if (incorrectSpot3 === 1) {
        str2 = '" width="325" height="325" onclick="choose3(2)"/>';
        str3 = str1 + incAnswer5 + str2;
        document.getElementById("pic1").innerHTML = str3;
  
        str2 = '" width="325" height="325" onclick="choose3(3)"/>';
        str3 = str1 + incAnswer6 + str2;
        document.getElementById("pic2").innerHTML = str3;
      } else {
        str2 = '" width="325" height="325" onclick="choose3(2)"/>';
        str3 = str1 + incAnswer5 + str2;
        document.getElementById("pic2").innerHTML = str3;
  
        str2 = '" width="325" height="325" onclick="choose3(3)"/>';
        str3 = str1 + incAnswer6 + str2;
        document.getElementById("pic1").innerHTML = str3;
      }
    }
  
    else {
      alert("An error occured. Please try again.");
    }
  
  }



/**
  The purpose of this function is to shuffle the array elements

  Authors: same as file header

 */
function shuffle() {
  //shuffle the words array
  var array = words.sort(() => Math.random() - 0.5);

  //select the first three elements in the array
  const newArray = array.slice(0, 3);

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
function audio1() {
  let voice = new Audio(finalArray1[0].audio);
  voice.play();
}

/*
  The purpose of this function is to play the audio for the current screen.
  "screenNum" always contains the number for the current screen.

  Authors: same as file header 
*/
function audio2() {
  let voice = new Audio(finalArray2[0].audio);
  voice.play();
}

/*
  The purpose of this function is to play the audio for the current screen.
  "screenNum" always contains the number for the current screen.

  Authors: same as file header 
*/
function audio3() {
  let voice = new Audio(finalArray3[0].audio);
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
function gameSetup() {
  audio1();
  show(level1());
  hide(level2());
  hide(level3());
}
