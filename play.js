

        document.addEventListener("DOMContentLoaded", function () {

        const sound_files = [];
        sound_files[65] = "sounds/808_kick.wav";
        sound_files[83] = "sounds/909_clap.wav";
        sound_files[68] = "sounds/808_cowbell.wav";
        sound_files[74] = "sounds/909_cymbal.wav";
        sound_files[76] = "sounds/909_snare.wav";

        const button = document.querySelectorAll('button');

        document.getElementById('btn').classList.add("btn-active");

        for (let i= 0; i < button.length; i++) {
            button[i].addEventListener('click', () => {

                play(button[i].dataset.sample);    
            });
        }

        function play(sample) {
           const audio = new Audio(sound_files[sample]); 
           audio.play();
        }

        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 65 || event.keyCode === 83 || event.keyCode === 68 || event.keyCode === 74 || event.keyCode === 76) {
                play(event.keyCode);
            }
        });
    });


























    // click = {
    //     play(sample);
    //   }

    //   fn play(sample) {
    //     aud = new Audio(snd_files[sample]);
    //     aud.play();
    //   }

    //   document.keycoiso = {
    //       if(keycode === 65 || 68 || )
    //     play(sample);
    //   }

    // <audio src="sounds/808_kick.wav" autostart="false" id="808_kick"></audio>
    // <audio src="sounds/clapnoize.wav" autostart="false" id="808_tom"></audio>
    // <audio src="sounds/808_clap.wav" autostart="false" id="808_clap"></audio>
    // <audio src="sounds/808_snare.wav" autostart="false" id="808_snare"></audio>
    // <audio src="sounds/808_hihatclosed.wav" autostart="false" id="808_hihatclosed"></audio>