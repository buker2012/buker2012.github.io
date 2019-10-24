// build time:Fri Oct 25 2019 01:02:44 GMT+0800 (GMT+08:00)
var forEachEls=require("../foreach-els");module.exports=function(e,o,r,n){o=typeof o==="string"?o.split(" "):o;o.forEach(function(o){forEachEls(e,function(e){e.removeEventListener(o,r,n)})})};
//rebuild by neat 