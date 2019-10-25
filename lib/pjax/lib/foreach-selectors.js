// build time:Fri Oct 25 2019 08:55:53 GMT+0800 (GMT+08:00)
var forEachEls=require("./foreach-els");module.exports=function(e,o,r,c){c=c||document;e.forEach(function(e){forEachEls(c.querySelectorAll(e),o,r)})};
//rebuild by neat 