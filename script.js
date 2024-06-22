
if (document.addEventListener) {
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
        return false;
    });
} else { //Versões antigas do IE
    document.attachEvent("oncontextmenu", function(e) {
        e = e || window.event;
        e.returnValue = false;
        return false;
    });
}
if (document.addEventListener) {
    document.addEventListener("keydown", bloquearSource);
} else { //Versões antigas do IE
    document.attachEvent("onkeydown", bloquearSource);
}

function bloquearSource(e) {
    e = e || window.event;

    var code = e.which || e.keyCode;

    if (
        e.ctrlKey &&
        (code == 83 || code == 85) //83 = S, 85 = U
    ) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }

        return false;
    }
}

function showPlayer(videoUrl) {
    document.querySelectorAll('.channel').forEach(channel => {
        channel.style.display = 'none';
    });
    document.getElementById('player-container').style.display = 'block';
    document.getElementById('player').src = videoUrl;
}

function hidePlayer() {
    document.querySelectorAll('.channel').forEach(channel => {
        channel.style.display = 'block';
    });
    document.getElementById('player-container').style.display = 'none';
    document.getElementById('player').src = '';
}

if (document.addEventListener) {
document.addEventListener("contextmenu", function(e) {
e.preventDefault();
return false;
});
}