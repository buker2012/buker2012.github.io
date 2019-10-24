// build time:Thu Oct 24 2019 22:27:20 GMT+0800 (GMT+08:00)
var noop=require("./util/noop");module.exports=function(o){if(o&&o.readyState<4){o.onreadystatechange=noop;o.abort()}};
//rebuild by neat 