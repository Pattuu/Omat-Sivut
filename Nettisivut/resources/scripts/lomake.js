

function validateForm(event) {
    event.preventDefault();
    
    const käyttäjä = document.getElementById('käyttäjäid').value;
    const salasana = document.getElementById('salasana').value;
    const nimi = document.getElementById('nimi').value;
    const osoite = document.getElementById('osoite').value;

    const postin = document.getElementById('postinum').value;

    const email = document.getElementById('sposti').value;

    const gender1 = document.getElementById('nainen').checked;
    const gender2 = document.getElementById('mies').checked;

    const kieli1 = document.getElementById('suomi').checked;
    const kieli2 = document.getElementById('muu').checked;

    if (postin.length !== 5) {
        document.getElementById('error-zip').innerHTML = 'Postinumerossa pitää olla viisi numeroa!';
        document.getElementById('postinum').classList.add('virhe');
    }

    if (document.getElementById('maa').value === "valitsemaa") {
        document.getElementById('error-maa').innerHTML = 'Valitse maa!';
        document.getElementById('maa').classList.add('virhe');
    }
    
    checkLength(käyttäjä, 'error-käyttäjä', 'käyttäjäid', 'Käyttäjä ID liian lyhyt! (Vähintään 6 merkkiä)', 5);
    checkLength(salasana, 'error-salasana', 'salasana', 'Salasana liian lyhyt! (Vähintään 1 merkki)', 0);
    checkLength(nimi, 'error-nimi', 'nimi', 'Nimi liian lyhyt! (Vähintään 1 merkki)', 0);
    checkLength(osoite, 'error-osoite', 'osoite', 'Osoite liian lyhyt! (Vähintään 1 merkki)', 0);
    checkLength(email, 'error-email', 'sposti', 'Virheellinen sähköpostiosoite!', 4)
    
    checkRadio(gender1, gender2, 'error-sukupuoli', 'Valitse Sukupuoli!');
    checkRadio(kieli1, kieli2, 'error-kieli', 'Valitse kieli!')

    checkEmail(email, 'error-email', 'sposti', 'Virheellinen sähköpostiosoite!');
}


function checkLength(text, errorTarget, errorId, message, limit = 0) {
    if (text.length <= limit) {
        document.getElementById(errorTarget).innerHTML = message;
        document.getElementById(errorId).classList.add('virhe');
    }
}


function checkEmail(mail, errorTarget, errorId, message) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail) === false) {
        document.getElementById(errorTarget).innerHTML = message;
        document.getElementById(errorId).classList.add('virhe');
    }
  }
    

function checkRadio(radio, radio2, errorTarget, message) {
    if (radio === false && radio2 === false) {
        document.getElementById(errorTarget).innerHTML = message;

    }
}



function fixKäyttäjä() {
    document.getElementById('error-käyttäjä').innerHTML = '';
    document.getElementById('käyttäjäid').classList.remove('virhe');
}

function fixSalasana() {
    document.getElementById('error-salasana').innerHTML = '';
    document.getElementById('salasana').classList.remove('virhe');
}

function fixNimi() {
    document.getElementById('error-nimi').innerHTML = '';
    document.getElementById('nimi').classList.remove('virhe');
}

function fixOsoite() {
    document.getElementById('error-osoite').innerHTML = '';
    document.getElementById('osoite').classList.remove('virhe');
}

function fixMaa() {
    document.getElementById('error-maa').innerHTML = '';
    document.getElementById('maa').classList.remove('virhe');
}

function fixPostin() {
    document.getElementById('error-zip').innerHTML = '';
    document.getElementById('postinum').classList.remove('virhe');
}

function fixGender() {
    document.getElementById('error-sukupuoli').innerHTML = '';
}

function fixKieli() {
    document.getElementById('error-kieli').innerHTML = '';
}

function fixEmail() {
    document.getElementById('error-email').innerHTML = '';
    document.getElementById('sposti').classList.remove('virhe');
}
