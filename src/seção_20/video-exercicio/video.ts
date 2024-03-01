const video = document.querySelector(".video") as HTMLVideoElement;
const muteUnmute = document.querySelector(".mute-unmute") as HTMLButtonElement;
const playStop = document.querySelector(".play-stop") as HTMLButtonElement;
const loop = document.querySelector(".loop") as HTMLButtonElement;

//className
const LOOP_OFF_CLASS = "loop-off";

interface MediaController {
  muteUnmute(): void;
  playStop(): void;
  loop(): void;
  hasVideoEnded(): void;
}

export class VideoController implements MediaController {
  constructor() {}

  muteUnmute(): void {
    if (video.muted) {
      video.muted = false;
      muteUnmute.innerHTML = "mute";
    } else {
      video.muted = true;
      muteUnmute.innerHTML = "unmute";
    }
  }

  playStop(): void {
    if (video.paused) {
      video.play();
      playStop.innerHTML = "pause";
    } else {
      video.pause();
      playStop.innerHTML = "play";
    }
  }

  loop(): void {
    if (video.loop) {
      video.loop = false;
      loop.classList.add(LOOP_OFF_CLASS);
    } else {
      video.loop = true;
      loop.classList.remove(LOOP_OFF_CLASS);
    }
  }

  // check if the video has ended with loop deactivated, set new value to the
  // play/pause button and set the video current time back to 0
  hasVideoEnded(): void {
    if (!video.loop) {
      playStop.innerHTML = "play";
      video.currentTime = 0;
    }
  }
}

const videoController = new VideoController();

const hanldeMuteUnmute = () => {
  videoController.muteUnmute();
};
const hanldePlayStop = () => {
  videoController.playStop();
};
const hanldeLoop = () => {
  videoController.loop();
};

const handleHasVideoEnded = () => {
  videoController.hasVideoEnded();
};

//buttons events
muteUnmute.addEventListener("click", hanldeMuteUnmute);
playStop.addEventListener("click", hanldePlayStop);
loop.addEventListener("click", hanldeLoop);

//video event
video.addEventListener("ended", handleHasVideoEnded);
