function muuntajaC() {
    document.lämpötilatC.fahrenheit.value = (document.lämpötilatC.celsius.value * 9 / 5) + 32;
    document.lämpötilatC.kelvin.value = document.lämpötilatC.celsius.value * 1 + 273.15;
}

function muuntajaF() {
    document.lämpötilatF.celsius.value = (document.lämpötilatF.fahrenheit.value - 32) * 5 / 9;
    document.lämpötilatF.kelvin.value=((document.lämpötilatF.fahrenheit.value - 32) * 5 / 9) + 273.15;
}

function muuntajaK() {
    document.lämpötilatK.celsius.value = document.lämpötilatK.kelvin.value - 273.15;
    document.lämpötilatK.fahrenheit.value=((document.lämpötilatK.kelvin.value - 273.15) * 9 / 5) + 32;
}

function muunnaC() {
    muuntajaC();
}

function muunnaF() {
    muuntajaF();
}

function muunnaK() {
    muuntajaK();
}

function resetC() {
    document.lämpötilatC.celsius.value = "";
    document.lämpötilatC.fahrenheit.value = "";
    document.lämpötilatC.kelvin.value = "";
}

function resetF() {
    document.lämpötilatF.fahrenheit.value = "";
    document.lämpötilatF.celsius.value = "";
    document.lämpötilatF.kelvin.value = "";
}

function resetK() {
    document.lämpötilatK.kelvin.value = "";
    document.lämpötilatK.celsius.value = "";
    document.lämpötilatK.fahrenheit.value = "";
}










