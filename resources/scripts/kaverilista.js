let i = 0;
document.getElementById('kl-0-submit').addEventListener("click", function() {
    var input = document.getElementById('kl-0-input').value;

    if (input !== '' && i < 10) {
            document.getElementById('k-0-' + i).innerHTML = input;
            document.getElementById('kl-0-input').value = '';
            i++
    } else if (input === '') {
        alert('Syötä nimi');
        event.preventDefault();
    } else {
        alert('Kaverilista täynnä');
        event.preventDefault();
    };
});

document.getElementById('kl-0-clear').addEventListener("click", function() {
    i = 0;
    let x = 0;
    document.getElementById('kl-0-input').value = '';
    while (x < 10) {
        document.getElementById('k-0-' + x).innerHTML = '';
        x++;
    };
});





