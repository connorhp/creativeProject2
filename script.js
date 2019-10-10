/*global fetch*/

const url = "http://api.football-data.org/v2/competitions/"

function getit(getUrl, relagated) {
    fetch(getUrl, {
        "headers": { "X-Auth-Token": "9ea8d5e6f7fc434eb7be055bdf75492e" },
        dataType: 'json',
    }).then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        let result = "";
        for (let i = 0; i < json.standings[0].table.length / 2; ++i) {
            result += "<p><strong>" + json.standings[0].table[i].position + ". ";
            result += json.standings[0].table[i].team.name + "</strong> Points: <strong>";
            result += json.standings[0].table[i].points + "</strong> (W <strong>";
            result += json.standings[0].table[i].won + "</strong>, D <strong>";
            result += json.standings[0].table[i].draw + "</strong>, L <strong>";
            result += json.standings[0].table[i].lost + "</strong>)</p>";

        }
        document.getElementById("firsthalf").innerHTML = result;
        result = "";
        for (let i = json.standings[0].table.length / 2; i < json.standings[0].table.length; ++i) {
            if (i == json.standings[0].table.length - 3) {
                result += "<p style=\"border-top-style:solid; border-top-color:grey\"><strong>" + json.standings[0].table[i].position + ". ";
            }
            else result += "<p><strong>" + json.standings[0].table[i].position + ". ";
            result += json.standings[0].table[i].team.name + "</strong> Points: <strong>";
            result += json.standings[0].table[i].points + "</strong> (W <strong>";
            result += json.standings[0].table[i].won + "</strong>, D <strong>";
            result += json.standings[0].table[i].draw + "</strong>, L <strong>";
            result += json.standings[0].table[i].lost + "</strong>)</p>";
        }
        document.getElementById("secondhalf").innerHTML = result;
    });
}

function preLT() {
    var url2 = url + "PL/standings"
    document.getElementById("whichtable").innerHTML = "Premier League Table";
    getit(url2);
    document.getElementById("break").innerHTML = "<br><br><br>";
}

function serieALT() {
    var url2 = url + "SA/standings"
    document.getElementById("whichtable").innerHTML = "Serie A Table";
    getit(url2);
    document.getElementById("break").innerHTML = "<br><br><br>";
}

function bunLT() {
    var url2 = url + "BL1/standings"
    document.getElementById("whichtable").innerHTML = "Bundesliga Table";
    getit(url2);
    document.getElementById("break").innerHTML = "<br><br><br><br>";
}

function laLT() {
    var url2 = url + "PD/standings"
    document.getElementById("whichtable").innerHTML = "La Liga Santander Table";
    getit(url2);
    document.getElementById("break").innerHTML = "<br><br><br>";
}

function ligueLT() {
    var url2 = url + "FL1/standings"
    document.getElementById("whichtable").innerHTML = "Ligue 1 Table";
    getit(url2);
    document.getElementById("break").innerHTML = "<br><br><br>";
}
