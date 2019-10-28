// build time:Mon Oct 28 2019 11:11:21 GMT+0800 (GMT+08:00)
var noop=require("./util/noop");module.exports=function(o){if(o&&o.readyState<4){o.onreadystatechange=noop;o.abort()}};
//rebuild by neat 