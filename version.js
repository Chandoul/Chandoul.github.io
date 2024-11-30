let setting = 'https://raw.githubusercontent.com/Chandoul/aoeii_easy_manager/main/AoE II Manager.json';
let installer = 'https://raw.githubusercontent.com/Chandoul/aoeii_easy_manager/main/Installer.ahk';
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
    console.log('ok');
}

function saveFile(url) {
    // Get file name from url.
    var filename = "AoE II Manager AIO Installer.ahk";
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function () {
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
        a.download = filename; // Set the file name.
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        delete a;
    };
    xhr.open('GET', url);
    xhr.send();
}