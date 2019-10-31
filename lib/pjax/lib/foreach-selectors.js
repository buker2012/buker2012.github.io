// build time:Thu Oct 31 2019 12:46:32 GMT+0800 (GMT+08:00)
var forEachEls=require("./foreach-els");module.exports=function(e,o,r,c){c=c||document;e.forEach(function(e){forEachEls(c.querySelectorAll(e),o,r)})};
//rebuild by neat 