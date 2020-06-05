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



var friends = [];

document.getElementById('kl-1-submit').addEventListener('click', function() {
    var inputAdd = document.getElementById('kl-1-input').value;
    if (inputAdd === '') {
        return false;
    } else {
        friends.push(inputAdd);
        document.getElementById('kl-1-input').value = '';
        document.getElementById('kl-1-lista').innerHTML = friends.join(' ');
    };
});

document.getElementById('kl-1-poista').addEventListener('click', function() {
    var inputDel = document.getElementById('kl-1-input').value;
    if (inputDel === '') {
        return false;
    } else if (friends.includes(inputDel)) {
        var index = friends.indexOf(inputDel);
        friends.splice(index, 1);
        document.getElementById('kl-1-input').value = '';
        document.getElementById('kl-1-lista').innerHTML = friends.join(' ');
    };
});



let sort = 0;
document.getElementById('kl-1-järjestä').addEventListener('click', function() {
    if (sort === 0) {
        friends.sort();
        sort++;
        document.getElementById('kl-1-lista'). innerHTML = friends.join(' ');
    } else if (sort === 1) {
        friends.reverse();
        sort = 0;
        document.getElementById('kl-1-lista'). innerHTML = friends.join(' ');
    };
});

document.getElementById('kl-1-clear').addEventListener('click', function() {
    friends = [];
    sort = 0;
    document.getElementById('kl-1-lista').innerHTML = friends.join(' ');
});


