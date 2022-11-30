alert("Hello World I am a JavaScript Alert.");

function preparePage() {
    document.getElementById('mainBody').onclick = function() {
        if (document.getElementById('mainBody').className == "example") {
            document.getElementById('mainBody').className == "";
        }
        else 
        {
            document.getElementById('mainBody').className = "example";
        }
    }
}

window.onload = function() {
    preparePage();
}

var doc = document.getElementById('mainBody');
doc.style.fontFamily = "Times New Roman";