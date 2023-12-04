function getViaRest(path, contentType) {
    var http = new XMLHttpRequest();
    http.open('GET', root + path, true);

    http.onreadystatechange = function () {
        if (http.readyState == 4) {
            var resSpace = document.getElementById('result');
            resSpace.innerHTML = http.responseText;
        };
    };

    http.setRequestHeader('Accept', contentType);
    http.send();
    return false;
}

<input type="button" onclick="getViaRest('rest/user', 'application/json');" value="user info" />	