// Basic Variables
let background1;
let pokeball;
let eevee;
let eeveeAngry;
let musicIcon;
let skipButton;
let playButton;

// Cursor Variables
let pettingHand;
let brushCursor;
let oranCursor;

// Icon Variables
let oranIcon;
let petIcon;
let brushIcon;

// Sound Variables
let pokeballLaunchSound;
let eeveePetSound;
let eeveeAngrySound;
let eeveeEatSound;
let eeveeBrushSound;
let selectSound;
let eeveeCry;

// Animation Counters (I stopped using these because they were causing unintended issues)
let eeveePetPlayCount = 0;
let eeveeEatPlayCount = 0;
let eeveeBrushPlayCount = 0;

// Textboxes
let textbox1;
let textbox2;
let textbox3;
let textbox4;
let textbox5;
let textbox6;

// Cursor State
let cursorState = 'standard';

// Animation State
let animationState = 'idle';

// Eevee Launch Variables
let eeveeLaunchTotalFrames = 8;
let eeveeLaunchCurrentFrame = 0;
let EeveeLaunchImages = [];
let eeveeLaunchisPlaying = false;
let eeveeCryPlayed = false;

// Pokeball Launch Variables
let pokeballLaunchTotalFrames = 12;
let pokeballLaunchCurrentFrame = 0;
let pokeballLaunchImages = [];
let pokeballLaunchisPlaying = false;
let pokeballSoundPlayed = false;

// Eevee Pet Variables
let eeveePetTotalFrames = 13;
let eeveePetCurrentFrame = 0;
let eeveePetImages = [];
let eeveePetisPlaying = false;
let eeveePetSoundPlayed = false;

// Eevee Eat Variables
let eeveeEatTotalFrames = 13;
let eeveeEatCurrentFrame = 0;
let eeveeEatImages = [];
let eeveeEatisPlaying = false;
let eeveeEatSoundPlayed = false;

// Eevee Brush Variables
let eeveeBrushTotalFrames = 18;
let eeveeBrushCurrentFrame = 0;
let eeveeBrushImages = [];
let eeveeBrushisPlaying = false;
let eeveeBrushSoundPlayed = false;

// Eevee Angry Variables
let eeveeAngryTotalFrames = 11;
let eeveeAngryCurrentFrame = 0;
let eeveeAngryImages = [];
let eeveeAngryisPlaying = false;
let eeveeAngrySoundPlayed = false;

// Pokeball Close Variables
let pokeballCloseTotalFrames = 12;
let pokeballCloseCurrentFrame = 0;
let pokeballCloseImages = [];
let pokeballCloseisPlaying = false;
let pokeballCloseSoundPlayed = false;

// Music Track Variables
let currentTrack = 0;
let tracks = [
  'Music/Lake.mp3',
  'Music/Route201.mp3',
  'Music/JubilifeCity.mp3',
  'Music/EternaForest.mp3',
  'Music/Route206.mp3',
  'Music/TwinleafTown.mp3',
];
let music;
let volume = 0.1;


// Preload Stuff
function preload() {
  background1 = loadImage("Background.png");
  pokeball = loadImage("Pokeball/Pokeball0.png");
  eevee = loadImage("Eevee/Eevee0.png");
  eeveeAngry = loadImage("EeveeAngry/EeveeAngry0.png");
  musicIcon = loadImage("musicicon.png");
  skipButton = loadImage("SkipButton.png");
  playButton = loadImage("PlayButton.png");
  eeveeCry = loadSound("EeveeCry.mp3");
  pokeballLaunchSound = loadSound("PokeballLaunch.mp3");
  eeveePetSound = loadSound("EeveePetSound.mp3");
  eeveeAngrySound = loadSound("EeveeAngrySound.mp3");
  eeveeEatSound = loadSound("EatSound.mp3");
  selectSound = loadSound("SelectSound.mp3");
  eeveeBrushSound = loadSound("BrushSound.mp3");
  pettingHand = loadImage("PettingHand.png");
  petIcon = loadImage("PettingHand.png");
  brushIcon = loadImage("BrushIcon.png");
  textbox1 = loadImage("Textbox1.png");
  textbox2 = loadImage("Textbox2.png");
  textbox3 = loadImage("Textbox3.png");
  textbox4 = loadImage("Textbox4.png");
  textbox5 = loadImage("Textbox5.png");
  textbox6 = loadImage("Textbox6.png");
  oranIcon = loadImage("OranIcon.png");
  oranCursor = loadImage("OranCursor.png");
  brushCursor = loadImage("BrushCursor.png");
  // Preloading all the music tracks
  music = new Array(tracks.length);
  for (let i = 0; i < tracks.length; i++) {
    music[i] = loadSound(tracks[i]);
    music[i].setVolume(volume);
    music[i].setLoop(true);
  }
  // Preloading Eevee Launch Frames
  for (let i = 0; i < eeveeLaunchTotalFrames; i++) {
    EeveeLaunchImages[i] = loadImage('Eevee/Eevee' + i + '.png');
  }
  // Preloading Pokeball Launch Frames
  for (let i = 0; i < pokeballLaunchTotalFrames; i++) {
    pokeballLaunchImages[i] = loadImage('Pokeball/Pokeball' + i + '.png');
  }
  // Preloading Eevee Pet Frames
  for (let i = 0; i < eeveePetTotalFrames; i++) {
    eeveePetImages[i] = loadImage('EeveePet/EeveePet' + i + '.png');
  }
  // Preloading Eevee Eat Frames
  for (let i = 0; i < eeveeEatTotalFrames; i++) {
    eeveeEatImages[i] = loadImage('EeveeEat/EeveeEat' + i + '.png');
  }
  // Preloading Eevee Brush Frames
  for (let i = 0; i < eeveeBrushTotalFrames; i++) {
    eeveeBrushImages[i] = loadImage('EeveeBrush/EeveeBrush' + i + '.png');
  }
  // Preloading Eevee Angry Frames
  for (let i = 0; i < eeveeAngryTotalFrames; i++) {
    eeveeAngryImages[i] = loadImage('EeveeAngry/EeveeAngry' + i + '.png');
  }
  // Preloading Pokeball Close Frames
  for (let i = 0; i < pokeballCloseTotalFrames; i++) {
    pokeballCloseImages[i] = loadImage('PokeballClose/PokeballClose' + i + '.png');
  }
}

// Setup Stuff
function setup() {
  createCanvas(800, 600);
  pokeball.resize(600, 600);
  image(background1, 0, 0);
  image(pokeball, 100, 25);
  image(skipButton, 0, 550, 50, 50);
  image(petIcon, 51, 550, 50, 50);
  image(oranIcon, 101, 550, 50, 50);
  image(brushIcon, 151, 550, 50, 50);
  music[currentTrack].play();
  frameRate(10);
}

function mousePressed() {
  // Variables for Pokeball location
  let pokeballX = 350;
  let pokeballY = 300;
  let pokeballWidth = 100;
  let pokeballHeight = 100;
  // Checks if you clicked on the Pokeball
  if (mouseX > pokeballX && mouseX < pokeballX + pokeballWidth && mouseY > pokeballY && mouseY < pokeballY + pokeballHeight) {
    if (animationState === 'idle') {
      pokeballLaunchCurrentFrame = 0;
      pokeballLaunchisPlaying = true;
      pokeballSoundPlayed = false;
      animationState = 'pokeball';
    }
  }
  // Variables for Eevee location
  let eeveeX = 200;
  let eeveeY = 200;
  let eeveeWidth = 300;
  let eeveeHeight = 300;
  // Checks if you clicked on Eevee depending on the cursor
  if (mouseX > eeveeX && mouseX < eeveeX + eeveeWidth && mouseY > eeveeY && mouseY < eeveeY + eeveeHeight) {
    if (cursorState === 'pet') {
      if (animationState === 'eeveeOut') {
        eeveePetCurrentFrame = 0;
        eeveePetisPlaying = true;
        pokeballSoundPlayed = false;
        if (eeveePetPlayCount >= 10) {
          animationState = 'pokeballClose';
        } else if (eeveePetPlayCount >= 5) {
          animationState = 'eeveeAngry';
        } else {
          animationState = 'eeveePet';
        }
      }
    }
    if (cursorState === 'oran') {
      if (animationState === 'eeveeOut') {
        eeveePetCurrentFrame = 0;
        eeveePetisPlaying = true;
        pokeballSoundPlayed = false;
        if (eeveeEatPlayCount >= 10) {
          animationState = 'pokeballClose';
        } else if (eeveeEatPlayCount >= 5) {
          animationState = 'eeveeAngry';
        } else {
          animationState = 'eeveePet';
        }
      }
    }
    if (cursorState === 'brush') {
      if (animationState === 'eeveeOut') {
        eeveePetCurrentFrame = 0;
        eeveePetisPlaying = true;
        pokeballSoundPlayed = false;
        if (eeveeEatPlayCount >= 10) {
          animationState = 'pokeballClose';
        } else if (eeveeEatPlayCount >= 5) {
          animationState = 'eeveeAngry';
        } else {
          animationState = 'eeveePet';
        }
      }
    }
  }
  // Icons

  // Variables for Petting Hand
  let petX = 51;
  let petY = 550;
  let petWidth = 50;
  let petHeight = 50;

  // Checks if you clicked on the Petting Hand
  if (mouseX > petX && mouseX < petX + petWidth && mouseY > petY && mouseY < petY + petHeight) {
    cursorState = 'pet';
  }
  // Variables for Oran Berry
  let oranX = 101;
  let oranY = 550;
  let oranWidth = 50;
  let oranHeight = 50;
  // Checks if you clicked on the Oran Berry
  if (mouseX > oranX && mouseX < oranX + oranWidth && mouseY > oranY && mouseY < oranY + oranHeight) {
    cursorState = 'oran';
  }
  // Variables for Brush
  let brushX = 151;
  let brushY = 550;
  let brushWidth = 50;
  let brushHeight = 50;
  // Checks if you clicked on the Oran Berry
  if (mouseX > brushX && mouseX < brushX + brushWidth && mouseY > brushY && mouseY < brushY + brushHeight) {
    cursorState = 'brush';
  }

  // Textboxes

  // Variables for Textbox location
  let textboxX = 0;
  let textboxY = 0;
  let textboxWidth = 800;
  let textboxHeight = 150;
  // Checks if you clicked on the Textbox
  if (mouseX > textboxX && mouseX < textboxX + textboxWidth && mouseY > textboxY && mouseY < textboxY + textboxHeight) {
    if (animationState === 'idle') {
      background(background1);
      image(skipButton, 0, 550, 50, 50);
      image(petIcon, 51, 550, 50, 50);
      image(oranIcon, 101, 550, 50, 50);
      image(brushIcon, 151, 550, 50, 50);
      image(pokeball, 0, 0, width, height);
      selectSound.play();
    }
    if (animationState === 'eeveeOut') {
      background(background1);
      image(skipButton, 0, 550, 50, 50);
      image(petIcon, 51, 550, 50, 50);
      image(oranIcon, 101, 550, 50, 50);
      image(brushIcon, 151, 550, 50, 50);
      image(eevee, 0, 0, width, height);
      selectSound.play();
    }
    if (eeveePetPlayCount >= 5 && animationState === 'eeveeOut') {
      background(background1);
      image(skipButton, 0, 550, 50, 50);
      image(petIcon, 51, 550, 50, 50);
      image(oranIcon, 101, 550, 50, 50);
      image(brushIcon, 151, 550, 50, 50);
      image(eeveeAngry, 0, 0, width, height);
      selectSound.play();
    }
  }

  // Music Cycle

  // Variables for the skip icon location
  let imgX = 0;
  let imgY = 550;
  let imgWidth = 50;
  let imgHeight = 50;
  // Checks if you clicked on the skip icon
  if (mouseX > imgX && mouseX < imgX + imgWidth && mouseY > imgY && mouseY < imgY + imgHeight) {
    currentTrack = (currentTrack + 1) % tracks.length;
    // Cycles to the next track
    for (let i = 0; i < music.length; i++) {
      music[i].stop();
    }
    music[currentTrack].play();
  }
}

// Using the draw function to constantly check the animation state and cursor state every frame
function draw() {
  if (animationState === 'pokeball') {
    PokeballLaunchAnimation();
  } else if (animationState === 'eevee') {
    EeveeLaunchAnimation();
  } else if (animationState === 'eeveePet' && cursorState === 'pet') {
    EeveePetAnimation();
  } else if (animationState === 'eeveePet' && cursorState === 'oran') {
    EeveeEatAnimation();
  } else if (animationState === 'eeveePet' && cursorState === 'brush') {
    EeveeBrushAnimation();
  } else if (animationState === 'eeveeAngry') {
    EeveeAngryAnimation();
  } else if (animationState === 'pokeballClose') {
    PokeballCloseAnimation();
  }

  // Checking Cursor State
  if (animationState === 'idle') {
    cursorState = 'standard';
  }
  if (cursorState === 'standard') {
    cursor(ARROW);
  }
  if (cursorState === 'pet') {
    cursor('PettingHand.png');
  }
  if (cursorState === 'oran') {
    cursor('OranCursor.png');
  }
  if (cursorState === 'brush') {
    cursor('BrushCursor.png');
  }
  console.log(eeveePetPlayCount, eeveeEatPlayCount, eeveeBrushPlayCount);
}

// All animation functions are pretty much the same, they just differ from variable names

function PokeballLaunchAnimation() {
  // The background image and music note is constantly overlayed every frame, otherwise the animation frames stay on screen
  background(background1);
  image(skipButton, 0, 550, 50, 50);
  image(petIcon, 51, 550, 50, 50);
  image(oranIcon, 101, 550, 50, 50);
  image(brushIcon, 151, 550, 50, 50);

  image(pokeballLaunchImages[pokeballLaunchCurrentFrame], 0, 0, width, height);
  pokeballLaunchCurrentFrame++;

  if (pokeballLaunchCurrentFrame === 1 && !pokeballSoundPlayed) {
    pokeballLaunchSound.play();
    pokeballSoundPlayed = true;
  }

  if (pokeballLaunchCurrentFrame >= pokeballLaunchTotalFrames) {
    pokeballLaunchCurrentFrame = 0;
    pokeballLaunchisPlaying = false;
    pokeballSoundPlayed = false;

    // Start the Eevee animation after the Pokeball animation completes
    animationState = 'eevee';
  }
}

function EeveeLaunchAnimation() {
  // The background image and music note is constantly overlayed every frame, otherwise the animation frames stay on screen
  background(background1);
  image(skipButton, 0, 550, 50, 50);
  image(petIcon, 51, 550, 50, 50);
  image(oranIcon, 101, 550, 50, 50);
  image(brushIcon, 151, 550, 50, 50);

  image(EeveeLaunchImages[eeveeLaunchCurrentFrame], 0, 0, width, height);
  eeveeLaunchCurrentFrame++;

  if (eeveeLaunchCurrentFrame === 1 && !eeveeCryPlayed) {
    eeveeCry.play();
    eeveeCryPlayed = true;
  }

  if (eeveeLaunchCurrentFrame >= eeveeLaunchTotalFrames) {
    eeveeLaunchCurrentFrame = 0;
    eeveeLaunchisPlaying = false;
    eeveeCryPlayed = false;

    // Set the animation state to eeveeOut, so the interaction with clicking the Pokeball is disabled
    animationState = 'eeveeOut';
  }
  image(textbox1, 0, 0, 800, 150);
}

function EeveePetAnimation() {
  // The background image and music note is constantly overlayed every frame, otherwise the animation frames stay on screen
  background(background1);
  image(skipButton, 0, 550, 50, 50);
  image(petIcon, 51, 550, 50, 50);
  image(oranIcon, 101, 550, 50, 50);
  image(brushIcon, 151, 550, 50, 50);

  image(eeveePetImages[eeveePetCurrentFrame], 0, 0, width, height);
  eeveePetCurrentFrame++;

  if (eeveePetCurrentFrame === 1 && !eeveePetSoundPlayed) {
    eeveePetSound.play();
    eeveePetSoundPlayed = true;
  }

  if (eeveePetCurrentFrame >= eeveePetTotalFrames) {
    eeveePetCurrentFrame = 0;
    eeveePetisPlaying = false;
    eeveePetSoundPlayed = false;

    eeveePetPlayCount++;
    eeveeBrushPlayCount = 0;

    // Set the animation state to eeveeOut, so the interaction with clicking the Pokeball is disabled
    animationState = 'eeveeOut';
    cursorState = 'standard';
  }
  image(textbox2, 0, 0, 800, 150);
}

function EeveeAngryAnimation() {
  // The background image and music note is constantly overlayed every frame, otherwise the animation frames stay on screen
  background(background1);
  image(skipButton, 0, 550, 50, 50);
  image(petIcon, 51, 550, 50, 50);
  image(oranIcon, 101, 550, 50, 50);
  image(brushIcon, 151, 550, 50, 50);

  image(eeveeAngryImages[eeveeAngryCurrentFrame], 0, 0, width, height);
  eeveeAngryCurrentFrame++;

  if (eeveeAngryCurrentFrame === 1 && !eeveeAngrySoundPlayed) {
    eeveeAngrySound.play();
    eeveeAngrySoundPlayed = true;
  }

  if (eeveeAngryCurrentFrame >= eeveeAngryTotalFrames) {
    eeveeAngryCurrentFrame = 0;
    eeveeAngryisPlaying = false;
    eeveeAngrySoundPlayed = false;

    eeveePetPlayCount++;

    // Set the animation state to eeveeOut, so the interaction with clicking the Pokeball is disabled
    animationState = 'eeveeOut';
    cursorState = 'standard';
  }
  image(textbox3, 0, 0, 800, 150);
}

function PokeballCloseAnimation() {
  // The background image and music note is constantly overlayed every frame, otherwise the animation frames stay on screen
  background(background1);
  image(skipButton, 0, 550, 50, 50);
  image(petIcon, 51, 550, 50, 50);
  image(oranIcon, 101, 550, 50, 50);
  image(brushIcon, 151, 550, 50, 50);

  image(pokeballCloseImages[pokeballCloseCurrentFrame], 0, 0, width, height);
  pokeballCloseCurrentFrame++;

  if (pokeballCloseCurrentFrame === 1 && !pokeballCloseSoundPlayed) {
    pokeballLaunchSound.play();
    pokeballCloseSoundPlayed = true;
  }

  if (pokeballCloseCurrentFrame >= pokeballCloseTotalFrames) {
    pokeballCloseCurrentFrame = 0;
    pokeballCloseisPlaying = false;
    pokeballCloseSoundPlayed = false;

    eeveePetPlayCount = 0;

    animationState = 'idle';
  }
  image(textbox4, 0, 0, 800, 150);
}

function EeveeEatAnimation() {
  // The background image and music note is constantly overlayed every frame, otherwise the animation frames stay on screen
  background(background1);
  image(skipButton, 0, 550, 50, 50);
  image(petIcon, 51, 550, 50, 50);
  image(oranIcon, 101, 550, 50, 50);
  image(brushIcon, 151, 550, 50, 50);

  image(eeveeEatImages[eeveeEatCurrentFrame], 0, 0, width, height);
  eeveeEatCurrentFrame++;

  if (eeveeEatCurrentFrame === 1 && !eeveeEatSoundPlayed) {
    eeveeEatSound.play();
    eeveeEatSoundPlayed = true;
  }

  if (eeveeEatCurrentFrame >= eeveeEatTotalFrames) {
    eeveeEatCurrentFrame = 0;
    eeveeEatisPlaying = false;
    eeveeEatSoundPlayed = false;

    eeveePetPlayCount = 0;

    // Set the animation state to eeveeOut, so the interaction with clicking the Pokeball is disabled
    animationState = 'eeveeOut';
    cursorState = 'standard';
  }
  image(textbox5, 0, 0, 800, 150);
}

function EeveeBrushAnimation() {
  // The background image and music note is constantly overlayed every frame, otherwise the animation frames stay on screen
  background(background1);
  image(skipButton, 0, 550, 50, 50);
  image(petIcon, 51, 550, 50, 50);
  image(oranIcon, 101, 550, 50, 50);
  image(brushIcon, 151, 550, 50, 50);

  image(eeveeBrushImages[eeveeBrushCurrentFrame], 0, 0, width, height);
  eeveeBrushCurrentFrame++;

  if (eeveeBrushCurrentFrame === 1 && !eeveeBrushSoundPlayed) {
    eeveeBrushSound.play();
    eeveeBrushSoundPlayed = true;
  }

  if (eeveeBrushCurrentFrame >= eeveeBrushTotalFrames) {
    eeveeBrushCurrentFrame = 0;
    eeveeBrushisPlaying = false;
    eeveeBrushSoundPlayed = false;

    eeveePetPlayCount = 0;

    // Set the animation state to eeveeOut, so the interaction with clicking the Pokeball is disabled
    animationState = 'eeveeOut';
    cursorState = 'standard';
  }
  image(textbox6, 0, 0, 800, 150);
}