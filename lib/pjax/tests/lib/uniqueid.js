// build time:Thu Oct 24 2019 23:41:50 GMT+0800 (GMT+08:00)
var tape=require("tape");var uniqueid=require("../../lib/uniqueid.js");tape("test uniqueid",function(e){var u=uniqueid();var i=uniqueid();e.notEqual(u,i,"Two calls to uniqueid produce different values");e.end()});
//rebuild by neat 