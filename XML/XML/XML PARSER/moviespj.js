document.getElementById("getButton").addEventListener("click", function() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            parser(this.responseXML);
        }
    }
    xhttp.open("GET", "moviesp.xml");
    xhttp.send();
});


function parser(data) {
    const movies = data.getElementsByTagName("elokuva");

    let i;
    let htmlData = "";
    for (i = 0; i < movies.length; i++) {
        nimi = movies[i].getElementsByTagName('nimi')[0].childNodes[0].nodeValue;
        ohjaaja = movies[i].getElementsByTagName('ohjaaja')[0].childNodes[0].nodeValue;
        vuosi = movies[i].getElementsByTagName('vuosi')[0].childNodes[0].nodeValue;
        genre = movies[i].getElementsByTagName('genre')[0].childNodes[0].nodeValue;
        ikäraja = movies[i].getElementsByTagName('ikäraja')[0].childNodes[0].nodeValue;

        htmlData +=
                `<h2>${nimi} (${vuosi})</h2>
                <p>
                ${ohjaaja}<br>
                ${genre}<br>
                ${ikäraja}<br>
                </p><br>`;
    };
    
    document.getElementById("elokuvaDiv").innerHTML = htmlData;
}