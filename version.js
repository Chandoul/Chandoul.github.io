function getText() {
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', 'https://github.com/Chandoul/aoeii_easy_manager/raw/refs/heads/main/AoE%20II%20Manager.json', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}

console.log(getText());