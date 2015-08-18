/**
 * Created by hywilliam on 7/22/15.
 */
var btn = document.getElementById('test');
var res = document.getElementById('show');

btn.onclick = function () {
    var request = new XMLHttpRequest();
    request.open('GET', '/test');
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            res.innerText = request.responseText;

        }
    };
    request.send(null);
};
