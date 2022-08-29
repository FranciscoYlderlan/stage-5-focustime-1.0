import { components } from "./components.js";
import {sound} from "./sounds.js"

let timerTimeOut;

let timeDefaut = {"minutes": 25, "seconds": 0};

components.input.minutes.max

sound.music.loop = true;

let btnSet = components.button.set;
let btnReset = components.button.reset;

let btnPlay = components.button.play;
let btnPause = components.button.pause;

let btnSoundOn = components.button.soundOn;
let btnSoundOff = components.button.soundOff;

components.input.update(components.display.minutes.innerText,components.display.seconds.innerText)

function countdown () {
    components.input.update(components.display.minutes.innerText,components.display.seconds.innerText)
    let reset = components.display.minutes.innerText == "00" && components.display.seconds.innerText == "00"
    timerTimeOut = setTimeout(function () {
        
        if(reset){
            sound.play(sound.kitchenTimer);
            components.input.update(timeDefaut.minutes,timeDefaut.seconds);
            return
        };

        if(components.display.seconds.innerText == 0){
            components.display.update(components.display.minutes.innerText,60);
            components.display.minutes.innerText--;
            
        };

        components.display.seconds.innerText--;        

        countdown()
    },1000)

}


btnSet.addEventListener("click",function (event) {
    event.preventDefault();
    sound.play(sound.btnPress);
    
    clearTimeout(timerTimeOut);
    components.enableInput();
    components.button.toggleButtons(btnSet,btnReset);
});

btnReset.addEventListener("click",function (event) {
    event.preventDefault();
    
    sound.play(sound.btnPress);

    clearTimeout(timerTimeOut);
    components.display.update(timeDefaut.minutes,timeDefaut.seconds);
    components.input.update(timeDefaut.minutes,timeDefaut.seconds);
    
    components.disableInput();
    components.button.toggleButtons(btnSet,btnReset);

    components.button.enable(btnPlay,btnPause);
});


btnPlay.addEventListener("click",function (event) {
    event.preventDefault();
    
    sound.play(sound.btnPress);
    
    components.display.update(components.input.minutes.value,components.input.seconds.value);
    countdown();
    
    components.disableInput();
    components.button.toggleButtons(btnPlay,btnPause);
    components.button.disable(btnSet, btnReset);
});

btnPause.addEventListener("click",function (event) {
    event.preventDefault();

    sound.play(sound.btnPress);

    clearTimeout(timerTimeOut)
    components.button.toggleButtons(btnPlay,btnPause);
    components.button.disable(btnSet, btnReset);
});


components.display.minutes.addEventListener("click",function () {

    sound.play(sound.btnPress);

    clearTimeout(timerTimeOut);

    components.enableInput();
    components.button.enable(btnReset,btnSet);
    components.button.enable(btnPlay,btnPause);
    
});
components.display.seconds.addEventListener("click",function () {

    sound.play(sound.btnPress);

    clearTimeout(timerTimeOut);
    
    components.enableInput();
    components.button.enable(btnReset,btnSet);
    components.button.enable(btnPlay,btnPause);
});


btnSoundOff.addEventListener("click",function (event) {
    event.preventDefault();

    sound.play(sound.btnPress);
    sound.play(sound.music);

    components.disableInput();
    components.button.toggleButtons(btnSoundOff,btnSoundOn);
});
btnSoundOn.addEventListener("click",function (event) {
    event.preventDefault();

    sound.play(sound.btnPress);
    sound.pause(sound.music);
    
    components.button.toggleButtons(btnSoundOff,btnSoundOn);
});

