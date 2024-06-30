const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
      title: "Alone",
      name: "Alan Walker",
      source: "data/Alan Walker - Alone.mp3",
  },
  {
      title: "Darkside",
      name: "Alan Walker",
      source: "data/Alan Walker - Darkside.mp3",
  },
  {
      title: "Faded",
      name: "Alan Walker",
      source: "data/Alan Walker - Faded.mp3",
  },
  {
    title: "Nura Wasanthe",
    name: "Nadeemal Perera ft. Pasan Liyanage",
    source: "data/Nadeemal Perera - Nura Wasanthe (feat. Pasan Liyanage).mp3",
},
  {
      title: "Sing Me to Sleep",
      name: "Alan Walker",
      source: "data/Alan Walker - Sing Me to Sleep.mp3",
  },
  {
      title: "Let Me Down Slowly",
      name: "Alec Benjamin",
      source: "data/Alec Benjamin - Let Me Down Slowly.mp3",
  },
  {
      title: "thank u, next",
      name: "Ariana Grande",
      source: "data/Ariana Grande - thank u, next.mp3",
  },
  {
      title: "We Don't Talk Anymore",
      name: "Charlie Puth ft. Selena Gomez",
      source: "data/Charlie Puth - We Don't Talk Anymore (feat. Selena Gomez).mp3",
  },
  {
      title: "Alokawarsha",
      name: "Dhanith Sri",
      source: "data/Dhanith Sri - Alokawarsha.mp3",
  },
  {
      title: "Gindara",
      name: "Dhanith Sri",
      source: "data/Dhanith Sri - Gindara.mp3",
  },
  {
      title: "Sandaganawa",
      name: "Dhanith Sri",
      source: "data/Dhanith Sri - Sandaganawa.mp3",
  },
  {
      title: "Shape of You",
      name: "Ed Sheeran",
      source: "data/Ed Sheeran - Shape of You.mp3",
  },
  {
      title: "On My Way",
      name: "Farruko",
      source: "data/Farruko - On My Way.mp3",
  },
  {
      title: "Bimbarak",
      name: "Gunadasa Kapuge",
      source: "data/Gunadasa Kapuge - Bimbarak.mp3",
  },
  {
      title: "Duka Haadu Dena Raye",
      name: "Gunadasa Kapuge",
      source: "data/Gunadasa Kapuge - Duka Haadu Dena Raye.mp3",
  },
  {
      title: "Ninda Nathi Raye",
      name: "Gunadasa Kapuge",
      source: "data/Gunadasa Kapuge - Ninda Nathi Raye.mp3",
  },
  {
      title: "Yana Thanaka",
      name: "Mihindu Ariyaratne",
      source: "data/Mihindu Ariyaratne - Yana Thanaka.mp3",
  },

  {
      title: "Come & Get It",
      name: "Selena Gomez",
      source: "data/Selena Gomez - Come & Get It.mp3",
  },
  {
      title: "Diamond Heart",
      name: "Sophia Somajo",
      source: "data/Sophia Somajo - Diamond Heart.mp3",
  },
  {
      title: "Sithin Ma Nosali",
      name: "T M Jayarathne",
      source: "data/T M Jayarathne - Sithin Ma Nosali.mp3",
  },
  {
      title: "Blank Space",
      name: "Taylor Swift",
      source: "data/Taylor Swift - Blank Space.mp3",
  },
  {
      title: "Love Story",
      name: "Taylor Swift",
      source: "data/Taylor Swift - Love Story.mp3",
  },
  {
      title: "See You Again",
      name: "Wiz Khalifa ft. Charlie Puth",
      source: "data/Wiz Khalifa - See You Again (feat. Charlie Puth).mp3",
  }
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 8,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});