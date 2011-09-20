(function(){var f,h,i,g,j,d,e=function(b,a){return function(){return b.apply(a,arguments)}};f=function(b){return document.getElementById(b)};j=function(b,a){var k;return(k=b.className)!=null?k.match(RegExp("\\b"+a+"\\b","im")):void 0};h=function(){function b(){this._interceptor=e(this._interceptor,this);this._mapping={};this._lookup={enter:13,escape:27,up:38,left:37,right:39,down:40};window.addEventListener("keydown",this._interceptor)}b.prototype.add=function(a,b){var c,d,e;if(b==null){e=[];for(d in a)c=
a[d],e.push(this._add(d,c));return e}else return this._add(a,b)};b.prototype._add=function(a,b){var c,d,e,f;f=a.match(/((ctrl|alt|meta|shift)\+)?([a-z0-9]+)(:input)?/i);e=f[2];c=f[3];d=f[4];c=c.length===1?c.toUpperCase().charCodeAt(0):this._lookup[c];e=this._serialize_mod({altKey:e==="alt",ctrlKey:e==="ctrl",shiftKey:e==="shift",metaKey:e==="meta"});this._mapping[c]==null&&(this._mapping[c]={});return this._mapping[c][e]={input:d!=null,event:b}};b.prototype._is_input=function(a){return a instanceof
HTMLTextAreaElement||a instanceof HTMLInputElement};b.prototype._serialize_mod=function(a){return 1*a.altKey+2*a.ctrlKey+4*a.metaKey+8*a.shiftKey};b.prototype._interceptor=function(a){var b,c;if(a==null)a=window.event;c=this._mapping[a.charCode||a.keyCode];b=this._serialize_mod(a);if(c!=null&&c[b]!=null&&this._is_input(a.target)===c[b].input)return c[b].event(a)};return b}();i=function(){function b(){this.prevPost=e(this.prevPost,this);this.nextPost=e(this.nextPost,this);this.prevPage=e(this.prevPage,
this);this.nextPage=e(this.nextPage,this);this.changeBlog=e(this.changeBlog,this);this.queuePost=e(this.queuePost,this);this.cancelReblog=e(this.cancelReblog,this);this.confirmReblog=e(this.confirmReblog,this);this.sendReply=e(this.sendReply,this);this.view=e(this.view,this);this.like=e(this.like,this);this.page=e(this.page,this);this.reblog=e(this.reblog,this)}b.prototype._clickElement=function(a,b){var c;b==null&&(b=!1);if(a!=null)return c=document.createEvent("MouseEvents"),c.initMouseEvent("click",
!0,!0,window,0,0,0,0,0,b,!1,!1,!1,0,null),a.dispatchEvent(c)};b.prototype._pressKey=function(a){var b;b=document.createEvent("KeyboardEvent");b.initKeyboardEvent("keydown",!0,!0,null,a.charCodeAt(0),!1,!1,!1,0);return document.dispatchEvent(b)};b.prototype._changeSelected=function(a,b){var c;if(a!=null)return a.selectedIndex=b,c=document.createEvent("Event"),c.initEvent("change",!0,!1),a.dispatchEvent(c)};b.prototype._getReblogLink=function(a){var b,c,d,e;b=f(a).getElementsByClassName("post_controls")[0].getElementsByTagName("a");
for(c=0,d=b.length;c<d;c++)if(a=b[c],(e=a.href)!=null&&e.match("reblog"))return a};b.prototype.reblog=function(a,b){b==null&&(b=!1);return this._clickElement(this._getReblogLink(a),b)};b.prototype.page=function(a){a=this._getReblogLink(a);a=decodeURIComponent(a.href.match(/redirect_to=.*/)[0].substring(12));return window.location.replace(a)};b.prototype.like=function(a){a="like_button_"+a.substring(5);return this._clickElement(f(a))};b.prototype.view=function(a){a="permalink_"+a.substring(5);return this._clickElement(f(a),
!0)};b.prototype.sendReply=function(a){a="reply_button_"+a.id.substring(12);return this._clickElement(f(a))};b.prototype.confirmReblog=function(){return this._clickElement(f("save_button"))};b.prototype.cancelReblog=function(){return this._clickElement(f("cancel_button"))};b.prototype.queuePost=function(){return this._changeSelected(f("post_state"),1)};b.prototype.changeBlog=function(){var a;a=f("channel_id");return this._changeSelected(a,a.selectedIndex<a.length-1?a.selectedIndex+1:0)};b.prototype.nextPage=
function(){return this._clickElement(f("next_page_link"))};b.prototype.prevPage=function(){return this._clickElement(f("previous_page_link"))};b.prototype.nextPost=function(){return this._pressKey("J")};b.prototype.prevPost=function(){return this._pressKey("K")};return b}();g=function(){var b,a,d,c,e;a=document.body.scrollTop+7;d=f("posts").childNodes;for(c=0,e=d.length;c<e;c++)if(b=d[c],j(b,"post")&&a>=b.offsetTop&&a<=b.offsetTop+b.offsetHeight)return b.id};d=new i;i=new h;h=window.location.href.toLowerCase();
h.indexOf("/dashboard")!==-1?i.add({l:function(){return d.like(g())},r:function(){return d.reblog(g())},v:function(){return d.view(g())},p:function(){return d.page(g())},"alt+r":function(){return d.reblog(g(),!0)},"ctrl+enter:input":function(b){return d.sendReply(b.target)},"alt+right":d.nextPage,"alt+left":d.prevPage,"alt+up":d.prevPost,"alt+down":d.nextPost}):h.indexOf("/reblog/")!==-1&&i.add({b:d.changeBlog,"alt+b":function(){d.changeBlog();return d.confirmReblog()},q:d.queuePost,"alt+q":function(){d.queuePost();
return d.confirmReblog()},escape:d.cancelReblog,"ctrl+enter":d.confirmReblog})}).call(this);
