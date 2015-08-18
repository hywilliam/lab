/**
 *
 * Created by hywilliam on 8/3/15.
 */
function route(handle, pathname, res, req/*postData*/) {
    console.log('About to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
//        return handle[pathname]();
//        handle[pathname](res, postData);
        handle[pathname](res, req);
    } else {
//        console.log(typeof handle[pathname]);
        console.log('No request handler found for ' + pathname);
//        return '404 Not found';
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not found');
        res.end();
    }
}

exports.route = route;
