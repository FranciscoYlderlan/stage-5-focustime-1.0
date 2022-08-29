export const sound = {
    btnPress: new Audio("../assets/audios_button-press.wav"),
    music: new Audio("../assets/audios_lo-fi.mp3"),
    kitchenTimer: new Audio("../assets/audios_kitchen-timer.mp3"), 
    
    play(sound) {
        sound.play();
    },
    pause(sound) {
        sound.pause();
    },
}


