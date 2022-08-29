export const sound = {
    btnPress: new Audio("https://github.com/FranciscoYlderlan/stage-5-focustime-1.0/blob/main/assets/audios_button-press.wav?raw=true"),
    music: new Audio("https://github.com/FranciscoYlderlan/stage-5-focustime-1.0/blob/main/assets/audios_lo-fi.mp3?raw=true"),
    kitchenTimer: new Audio("https://github.com/FranciscoYlderlan/stage-5-focustime-1.0/blob/main/assets/audios_kitchen-timer.mp3?raw=true"), 
    
    play(sound) {
        sound.play();
    },
    pause(sound) {
        sound.pause();
    },
}


