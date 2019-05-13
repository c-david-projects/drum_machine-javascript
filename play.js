document.addEventListener("DOMContentLoaded", function () {
    var sound_files = [];
    sound_files[97] = "sounds/808_kick.wav";
    sound_files[115] = "sounds/909_clap.wav";
    sound_files[100] = "sounds/808_cowbell.wav";
    sound_files[106] = "sounds/909_cymbal.wav";
    sound_files[107] = "sounds/909_snare.wav";
    sound_files[108] = "sounds/909_hihatopen.wav";
    var button = document.querySelectorAll('button');
    var _loop_1 = function (i) {
        button[i].addEventListener('click', function () {
            play(button[i].dataset.sample);
        });
    };
    for (var i = 0; i < button.length; i++) {
        _loop_1(i);
    }
    function play(sample) {
        var audio = new Audio(sound_files[sample]);
        audio.play();
    }
    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 97 || event.keyCode === 115 || event.keyCode === 100 || event.keyCode === 106 || event.keyCode === 107 || event.keyCode === 108) {
            play(event.keyCode);
            document.querySelector('button[data-sample="' + event.keyCode + '"]').classList.add("btn-animation");
            setTimeout(function () {
                document.querySelector('button[data-sample="' + event.keyCode + '"]').classList.remove("btn-animation");
            }, 500);
        }
    });
    var btn = document.getElementById("btn");
    var text = document.getElementById("text");
    function getRandomSentence() {
        var index = Math.floor(Math.random() * sentences.length);
        return sentences[index];
    }
    var sentences = [
        'O tempo não espera pela gente Mas eu espero por ti O tempo quer ser indiferente Só eu te quero aqui.    Por mais que eu te diga Mesmo que eu consiga O tempo não espera por mim   O tempo não espera pela gente Se não fugirmos daqui Sei que não vai ser diferente só por dizer que sim Querer-te despida Na pele de rendida No meu tempo não era assim Mas por mais que a vida Não cure as feridas O tempo irá curar por si Não sou de ferro, nem tenho armas Apenas a música para ti Porque eu também choro Quando me desarmas E agora canto o que perdi Porque houve um tempo em que eu te tinha só para mim',
        'Minha saudade deita-se tarde, Se tu não vens E acorda cedo, com esse medo de não voltares contigo assim, contigo assim,perto de mim o mundo existe mas se não vens, mas se não vens eu vou ao fundo e fico triste O tempo tarda e tudo é nada longe de ti e ao ver-te o beijo morde o desejo de estares aqui Quem sabe um dia a fantasia da minha dor seja a alegria da eterna noite e muito amor A lua sempre foi um sol de encanto que aquece as madrugadas do meu pranto e faz da luz o dia com que canto as mágoas com que caio e me levanto',
        'Eu já sei quem sou E o que fiz Foi para o bem de mim Sou o que nao fui E serei o amanhã a dois Onde é que vais Espera por mim Eu vou ser melhor por ti Sempre que sais Eu sinto o fim  Eu nao quero ficar por aqui Tu, dona de ti Deixas me assim Sem saber o que fazer És, o que mais quero Se fores eu espero A vida sem ti nao tem sabor',
        'Eu quero estar Mais próximo do teu olhar E viajar nesse mundo que só nos teus olhos eu posso ver Eu quero gritar Ainda que me falte a voz Ou te dizer bem baixinho no ouvido que agora é a nossa vez Vou Marcar no meu corpo a frase mais bela que existe de amor E prometer nos meus beijos Que só nos teus beijos Eu quero viver E quando acordares eu quero lá estar E vais perceber que o céu que tu procuras sempre foi teu Eu quero estar ao teu lado pra sempre Relaxa e deixa-me fazer-te sorrir É ao teu lado que eu me sinto diferente',
        'Eu não quero pagar por aquilo que eu não fiz Não me fazem ver que a luta é pelo meu país Eu não quero pagar depois de tudo o que dei Não me fazem ver que fui eu que errei Não fui eu que gastei Mais do que era para mim Não fui eu que tirei Não fui eu que comi Não fui eu que comprei Não fui eu que escondi Quando estavam a olhar Não fui eu que fugi Não é essa a razão Para me querem moldar Porque eu não me escolhi Para a fila do pão Este barco afundou Houve alguém que o cegou Não fui eu que não vi Eu não quero pagar por aquilo que eu não fiz Não me fazem ver que a luta é pelo meu país',
        'Como é bom estar contigo no sofá Neve lá fora e uma chávena de chá Eu vejo um filme, tu adormeces Conto-te as séries de que te esqueces E o meu resumo que é tão bom Hora e meia a ouvir o mesmo som E é por isso que eu sou apenas teu'
    ];
    btn.onclick = function () {
        console.log(getRandomSentence());
        text.textContent = getRandomSentence();
    };
});
