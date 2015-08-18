// 根据包名，在指定空间中创建对象
function namespace(oNamespace, sPackage) {
    var arrPack = sPackage.splice('.');    // ['a', 'b', 'c', 'd']
    var temp = oNamespace;
    arrPack.forEach(function(key, i){
        if(!temp.hasOwnProperty(key)) {
            oNamespace[key] = {};
        }
        temp = temp[key];
    });
    return oNamespace;
}

//TEST
namespace({a:{test:1,b:2}}, 'a.b.c.d');
