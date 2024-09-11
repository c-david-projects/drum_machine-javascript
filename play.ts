

document.addEventListener("DOMContentLoaded", function () {

    let sound_files = [];
    
    sound_files[97] = "sounds/808_kick.wav";
    sound_files[115] = "sounds/909_clap.wav";
    sound_files[100] = "sounds/808_cowbell.wav";
    sound_files[106] = "sounds/909_cymbal.wav";
    sound_files[107] = "sounds/909_snare.wav";
    sound_files[108] = "sounds/909_hihatopen.wav";

    const button = document.querySelectorAll('button');

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', () => {

            play(button[i].dataset.sample);
        });
    }

    function play(sample) {
        const audio = new Audio(sound_files[sample]);
        audio.play();
    }

    document.addEventListener('keypress', (event) => {
        if (event.keyCode === 97 || event.keyCode === 115 || event.keyCode === 100 || event.keyCode === 106 || event.keyCode === 107 || event.keyCode === 108) {
            play(event.keyCode);
            document.querySelector('button[data-sample="' + event.keyCode + '"]').classList.add("btn-animation");

            setTimeout(() => {
                document.querySelector('button[data-sample="' + event.keyCode + '"]').classList.remove("btn-animation");
            }, 500);
        }
    });
});





















