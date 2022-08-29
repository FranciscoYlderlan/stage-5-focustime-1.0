const button = {
    play: document.querySelector("#btnPlay"),
    pause: document.querySelector("#btnPause"),
    set: document.querySelector("#btnSet"),
    reset: document.querySelector("#btnReset"),
    soundOn: document.querySelector("#btnSoundOn"),
    soundOff: document.querySelector("#btnSoundOff"),
    
    toggleButtons(componentButtonA, componentButtonB) {
        componentButtonA.classList.toggle("hide");
        componentButtonB.classList.toggle("hide");
    },
    enable(buttonA,buttonB) {
        buttonA.classList.remove("hide");
        buttonB.classList.add("hide");
    },
    disable(ButtonA,ButtonB) {
        ButtonA.classList.add("hide");
        ButtonB.classList.remove("hide");
    }
}; 

const input = {
    wrapper: document.querySelector(".wrapper-form"),
    minutes: document.querySelector(".wrapper-form .minutes"),
    seconds: document.querySelector(".wrapper-form .seconds"),
    
    update(minutes,seconds) {
        components.display.minutes.innerText = String(minutes).padStart(2,"0");
        components.display.seconds.innerText = String(seconds).padStart(2,"0");
        components.input.minutes.value = components.display.minutes.innerText;
        components.input.seconds.value = components.display.seconds.innerText;
    },

    validated() {
        if(components.input.minutes.value < 0) {
            components.input.minutes.value = 0;
        }
        if(components.input.minutes.value > 60) {
            components.input.minutes.value = 60;
        }
        if(components.input.seconds.value < 0) {
            components.input.seconds.value = 0;
        }
        if(components.input.seconds.value > 60) {
            components.input.seconds.value = 60;
        }
    }
};

const display = {
    wrapper: document.querySelector(".wrapper-display"),
    minutes: document.querySelector(".wrapper-display .minutes"),
    seconds: document.querySelector(".wrapper-display .seconds"),
        
    update(minutes,seconds) {
        components.display.minutes.innerText = String(minutes).padStart(2,"0");
        components.display.seconds.innerText = String(seconds).padStart(2,"0"); 
    },
};

export const components = {
    button,
    input,
    display,
    enableInput() {
        input.wrapper.classList.remove("hide");
        display.wrapper.classList.add("hide");
    },
    disableInput() {
        input.wrapper.classList.add("hide");
        display.wrapper.classList.remove("hide");
    }
};


components.input.wrapper.addEventListener("input", () => components.input.validated())

