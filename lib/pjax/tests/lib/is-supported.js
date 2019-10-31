// build time:Thu Oct 31 2019 13:42:10 GMT+0800 (GMT+08:00)
var tape=require("tape");var isSupported=require("../../lib/is-supported.js");tape("test isSupported method",function(e){e.true(isSupported(),"well, we run test on supported browser, so it should be ok here");e.end()});
//rebuild by neat 