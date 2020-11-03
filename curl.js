// curlrequest bilgi/info : https://www.npmjs.com/package/curlrequest

const curl = require("curlrequest");

var ayarlar = {
    url: 'https://leventemrepacal.com.tr/test.json'
};
 
curl.request(ayarlar, function (hata, veri) {

if (typeof hata !== 'undefined') {
let testjson = JSON.parse(veri);
console.log(testjson.title+" - "+testjson.site);
} else {
console.log(hata);
}

});