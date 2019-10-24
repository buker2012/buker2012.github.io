// build time:Thu Oct 24 2019 20:38:03 GMT+0800 (GMT+08:00)
var forEachEls=require("../foreach-els");module.exports=function(e,o,r,n){o=typeof o==="string"?o.split(" "):o;o.forEach(function(o){forEachEls(e,function(e){e.addEventListener(o,r,n)})})};
//rebuild by neat 