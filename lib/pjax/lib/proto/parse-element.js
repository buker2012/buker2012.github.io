// build time:Fri Nov 01 2019 11:52:42 GMT+0800 (GMT+08:00)
var attrState="data-pjax-state";module.exports=function(t){switch(t.tagName.toLowerCase()){case"a":if(!t.hasAttribute(attrState)){this.attachLink(t)}break;case"form":if(!t.hasAttribute(attrState)){this.attachForm(t)}break;default:throw"Pjax can only be applied on <a> or <form> submit"}};
//rebuild by neat 