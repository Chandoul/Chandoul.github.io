let setting = 'https://raw.githubusercontent.com/Chandoul/aoeii_easy_manager/main/AoE%20II%20Manager.json';
let installer = 'https://raw.githubusercontent.com/Chandoul/aoeii_easy_manager/main/Bin/AoE%20II%20Manager%20AIO.exe';
let ahkinstaller = 'https://www.autohotkey.com/download/ahk-v2.exe';
let rawText = '';

fetch(setting).then(function(response) {
	response.text().then(function(text) {
		getVersion(text);
	});
});

function getVersion(text) {
	document.getElementsByClassName('title')[0].textContent = "Age of Empires II: AoK & AoC Easy Manager v" + JSON.parse(text)['Version'];
}

function getInstaller() {
    document.location = installer;
}

function getAHKInstaller() {
    saveFile(ahkinstaller);
}

function saveFile(url) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function () {
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response);
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        delete a;
    };
    xhr.open('GET', url);
    xhr.send();
}