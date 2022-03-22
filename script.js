// 60 bpm significa que 60 beats tocaran en un minuto. en tu aplicacion 4 pasos son iguales a 1 beat por lo tanto 240 pasos tocaran cada minuto. 120 bpm significa 120 beats por minuto, 480 pasos por minuto.

// Con esta maetamatica puedes hacerlo facilmente ahora :)

// Para que se toque varias veces en secuencia () usa un retraso (delay) como setTimeout, fetch falso, o usa un requestnimationFrame y limita/retrasa los frames.

// Settimeout es el mas facil desde que tu el tiempo de tu aplicacion no se relacion con animaciones.

let bpm, steps;

bpm = 60;
steps = bpm / 60;


function initPatSquareToggle() {
    let elements = document.querySelectorAll('.patSquare');
    elements.forEach(function(e) {
        e.addEventListener('click', function() {
            e.classList.toggle('patActive');
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let sounds = [
        'https://dl.dropbox.com/s/5m95jmxlqzvwv18/kick.mp3',
        'https://dl.dropbox.com/s/fp325haa2d236d1/clap.mp3',
        'https://dl.dropbox.com/s/qxxin4mp8vx7jjz/hat.mp3',
        'https://dl.dropbox.com/s/2qr51pdek4jyx68/snare.mp3'
    ];

    let play = document.querySelector('.play');
    let pause = document.querySelector('.pause');
    let stop = document.querySelector('.stop');
    let audios = sounds.map(function(url) {
        let audio = new Audio(url);
        audio.loop = true;
        audio.load();
        return audio;
    });
    initPatSquareToggle();
    play.addEventListener('click', function() {
        audios.forEach(function(audio) {
            audio.play();
        });
    });
    pause.addEventListener('click', function() {
        audios.forEach(function(audio) {
            audio.pause();
        });
    });
    stop.addEventListener('click', function() {
        audios.forEach(function(audio) {
            audio.pause();
            audio.currentTime = 0;
        });
    });
});
