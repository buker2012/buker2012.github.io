// build time:Thu Oct 24 2019 20:35:20 GMT+0800 (GMT+08:00)
var tape=require("tape");var noop=require("../../../lib/util/noop");tape("test noop function",function(n){n.equal(typeof noop,"function","noop is a function");n.equal(noop(),undefined,"noop() returns nothing");n.end()});
//rebuild by neat 