// build time:Thu Oct 24 2019 20:35:20 GMT+0800 (GMT+08:00)
module.exports=function(e,r,n){var t=new RegExp("([?&])"+r+"=.*?(&|$)","i");var a=e.indexOf("?")!==-1?"&":"?";if(e.match(t)){return e.replace(t,"$1"+r+"="+n+"$2")}else{return e+a+r+"="+n}};
//rebuild by neat 