const LOOP_OFF_CLASS = "loop-off";

interface VideosElements {
  video: HTMLVideoElement;
  muteUnmute: HTMLButtonElement;
  playStop: HTMLButtonElement;
  loop: HTMLButtonElement;
}

interface MediaController {
  initClassFunc(): void;
  muteUnmuteFunc(): void;
  playStopFunc(): void;
  loopFunc(): void;
  hasVideoEndedFunc(): void;
}

export class VideoController implements MediaController {
  private video: HTMLVideoElement;
  private muteUnmute: HTMLButtonElement;
  private playStop: HTMLButtonElement;
  private loop: HTMLButtonElement;

  constructor(videosElements: VideosElements) {
    this.video = videosElements.video;
    this.muteUnmute = videosElements.muteUnmute;
    this.playStop = videosElements.playStop;
    this.loop = videosElements.loop;
  }

  initClassFunc(): void {
    this.muteUnmute.addEventListener("click", () => {
      this.muteUnmuteFunc();
    });

    this.playStop.addEventListener("click", () => {
      this.playStopFunc();
    });

    this.loop.addEventListener("click", () => {
      this.loopFunc();
    });

    this.video.addEventListener("ended", () => {
      this.hasVideoEndedFunc();
    });
  }

  muteUnmuteFunc(): void {
    if (this.video.muted) {
      this.video.muted = false;
      this.muteUnmute.innerHTML = "mute";
    } else {
      this.video.muted = true;
      this.muteUnmute.innerHTML = "unmute";
    }
  }

  playStopFunc(): void {
    if (this.video.paused) {
      this.video.play();
      this.playStop.innerHTML = "pause";
    } else {
      this.video.pause();
      this.playStop.innerHTML = "play";
    }
  }

  loopFunc(): void {
    if (this.video.loop) {
      this.video.loop = false;
      this.loop.classList.add(LOOP_OFF_CLASS);
    } else {
      this.video.loop = true;
      this.loop.classList.remove(LOOP_OFF_CLASS);
    }
  }

  // check if the this.video has ended with loop deactivated, set new value to the
  // play/pause button and set the this.video current time back to 0
  hasVideoEndedFunc(): void {
    if (!this.video.loop) {
      this.playStop.innerHTML = "play";
      this.video.currentTime = 0;
    }
  }
}

const videoController = new VideoController({
  video: document.querySelector(".video") as HTMLVideoElement,
  muteUnmute: document.querySelector(".mute-unmute") as HTMLButtonElement,
  playStop: document.querySelector(".play-stop") as HTMLButtonElement,
  loop: document.querySelector(".loop") as HTMLButtonElement,
});

videoController.initClassFunc();
