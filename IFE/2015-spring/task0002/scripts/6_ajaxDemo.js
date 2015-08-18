/**
 *
 * Created by hywilliam on 7/22/15.
 */

//function postMessage(msg) {
//    var request = new XMLHttpRequest();
//    request.open('POST', '/scripts/server.js');
//
//    request.send(msg);
//}
//
//postMessage('haha');

/**
 *
 *  自己封装的ajax方法
 */
function ajax(url, options) {
    // 1. 创建XHR对象
    var request = new XMLHttpRequest();

    var method = options.type || 'GET';
    var data = options.data || null;
    var success = options.onsuccess;
    var fail = options.onfail || null;

    function encodeData(data) {
        // 请求数据的编码
        if (!data) {
            return '';
        }

        if (typeof data === 'object') {
            var pairs = [];
            for (var key in data) {
                if (!data.hasOwnProperty(key)) {
                    continue;
                }
                if (typeof data[key] === 'function') {
                    continue;
                }
                var val = data[key].toString();
                pairs.push(key + '=' + val);
            }
            return pairs.join('&');
        } else if (typeof data === 'string') {
            return data;
        } else {
            return '';
        }
    }

    function getAjax() {
        // 2. open()方法，创建连接
        request.open(method, url + '?' + encodeData(data));
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                success(request.responseText, request);
            } else {
                fail(request);
            }
        };
        // 5. 发送请求
        request.send(null);
    }

    function postAjax() {
        request.open(method, url);
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                success(request.responseText, request);
            } else {
                fail(request);
            }
        };
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(data));
    }

    return method === 'GET' ? getAjax() : postAjax();
}

/***************** TEST ******************/
document.getElementById('ajax').onclick = function () {
    ajax(
        'http://127.0.0.1:63342',
        {
            //type: 'POST',
            data     : {
                name    : 'hywilliam',
                password: '123456'
            },
            onsuccess: function (responseTest, xhr) {
                console.log(responseTest);
            },
            onfail   : function () {
                console.log('fail');
            }
        }
    );
};

