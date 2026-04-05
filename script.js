function playMusic() {
  document.getElementById("bgMusic").play();
}

const text = "Babyyy, this one month with you has been the happiest time of my life. You make everything feel better, and I genuinely can't imagine my days without you anymore. I love you so much ❤️";

function showLoveLetter() {
  document.getElementById("letterBox").style.display = "block";
  let i = 0;
  document.getElementById("bgMusic").play();

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("letterText").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 40);
    }
  }

  document.getElementById("letterText").innerHTML = "";
  typeWriter();
}

const startDate = new Date("2026-03-05");

setInterval(() => {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("timer").innerText = days + " days with my babyyy 💖";
}, 1000);
let isPlaying = false;

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  if (!isPlaying) {
    music.play();
    btn.innerText = "Pause Song ⏸️";
    isPlaying = true;
  } else {
    music.pause();
    btn.innerText = "Play Our Song 🎵";
    isPlaying = false;
  }

  const unlockDate = new Date("2026-04-06T00:00:00+05:30");



function updateCountdown() {
  const now = new Date();
  const diff = unlockDate - now;

  if (diff <= 0) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerText =
    `${hours}h ${minutes}m ${seconds}s`;
}

/* 🔥 IMPORTANT: call it properly */
updateCountdown();
setInterval(updateCountdown, 1000);
}