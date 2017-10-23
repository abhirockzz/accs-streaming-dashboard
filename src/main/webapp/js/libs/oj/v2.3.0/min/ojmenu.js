/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","hammerjs","ojs/ojjquery-hammer","ojs/ojcomponentcore","ojs/ojpopupcore"],function(a,g,b){(function(){a.Ra("oj.ojMenu",g.oj.baseComponent,{defaultElement:"\x3cul\x3e",delay:300,role:"menu",widgetEventPrefix:"oj",options:{menuSelector:"ul",openOptions:{display:"auto",initialFocus:"menu",launcher:null,position:{my:"start top",at:"start bottom",collision:"flipfit"}},submenuOpenOptions:{position:{my:"start top",at:"end top",collision:"flipfit"}},beforeOpen:null,close:null,
open:null,select:null},_ComponentCreate:function(){this._super();var a=this;this._focusForTesting=this.Xi;this._nextForTesting=this.Qaa;this._selectForTesting=this.yn;this.zw=this.element;this.d_=!1;if(h&&"ul"!==this.element[0].tagName.toLowerCase())throw Error("Cancel item supported for \x3cul\x3e menus only.");this.uEa();this.element.uniqueId().addClass("oj-menu oj-component").hide().attr({role:this.role,tabIndex:"0"});this._on(!0,{"mousedown .oj-menu-item":function(a){this.options.disabled&&a.preventDefault()},
click:function(a){this.options.disabled&&a.preventDefault()},keydown:function(a){!this.options.disabled||a.keyCode!==g.ui.keyCode.ESCAPE&&a.keyCode!==g.ui.keyCode.TAB||(a.keyCode===g.ui.keyCode.TAB&&a.preventDefault(),this.Jd&&this.bD(a))}});this.options.disabled&&this.element.addClass("oj-disabled").attr("aria-disabled","true");var b=function(a){if(!this.CY){this.CY=!0;var b=g(a.currentTarget);try{this.m7=!0,this.Xi(a,b)}finally{this.m7=!1}}}.bind(this);this._on({"mousedown .oj-menu-item \x3e a":function(a){a.preventDefault()},
"click .oj-disabled \x3e a":function(a){a.preventDefault()},click:function(){this.d_=!1},touchstart:function(){this.CY=!1},mouseover:function(){this.CY=!1},"click .oj-menu-item:has(a)":function(a){var b=g(a.target).closest(".oj-menu-item");!this.d_&&b.not(".oj-disabled").length&&(this.d_=!0,a.preventDefault(),this.bb&&this.bb.closest(b).length&&this.bb.get(0)!=b.get(0)||(b.has(".oj-menu").length?this.cg(a):(this.yn(a),this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.bb&&1===this.bb.parents(".oj-menu").length&&
clearTimeout(this.Te)))))},"mouseenter .oj-menu-item":b,"touchstart .oj-menu-item":b,mouseleave:function(a){this.yo(a,"eventSubtree")},"mouseleave .oj-menu":function(a){this.yo(a,"eventSubtree")},focus:function(a,b){if(!b){var c=this.bb||this.element.children(".oj-menu-item").eq(0);this.Xi(a,c)}},keydown:this.Tv,keyup:function(a){if(a.keyCode==g.ui.keyCode.ENTER||a.keyCode==g.ui.keyCode.SPACE)this.aI=!1}});this._focusable({applyHighlight:!e,recentPointer:function(){return a.m7},setupHandlers:function(b,
c){a.Oy=b;a.qv=c}});this.cF=g.proxy(this.dF,this);this.ab()},ny:function(a){if(arguments.length)d=a;else return d},YR:function(a){if(("focus"===a.type||"mousedown"===a.type||"touchstart"===a.type||93==a.which||121==a.which&&a.shiftKey||93==a.keyCode)&&("mousedown"!==a.type||!d)){var b=c.slice(0,c.length);g.each(b,function(b,c){!g(a.target).closest(c.element).length&&("keydown"===a.type||"mousedown"===a.type&&3===a.which||!g(a.target).closest(c.Jd).length||c.Tza&&("mousedown"===a.type&&3!==a.which||
"touchstart"===a.type))&&(c.yo(a,"eventSubtree"),c.Jd&&c.av(a))})}},_setOption:function(a,b){this._superApply(arguments);switch(a){case "translations.labelCancel":case "translations":this.d5&&this.d5.text(this.options.translations.labelCancel)}},_destroy:function(){this.element.is(":visible")&&this.av();clearTimeout(this.Te);delete this.Te;this.element.removeAttr("aria-activedescendant").removeClass("oj-component").find(".oj-menu").addBack().removeClass("oj-menu oj-menu-submenu oj-menu-icons oj-menu-text-only").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var a=g(this);a.data("oj-ojMenu-submenu-icon")&&a.remove()});this.element.find("a").removeAttr("aria-expanded");this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");0<=c.indexOf(this)&&c.splice(c.indexOf(this),
1);delete this.wn;delete this.cF;var a=this.xs;isNaN(a)||(delete this.xs,window.clearTimeout(a));this.tI&&this.tI.remove();this.element.rj("destroy");this._super()},Tv:function(a){function b(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$\x26")}var c,d,e,f,h=!0;switch(a.keyCode){case g.ui.keyCode.HOME:this.JK("first","first",a);break;case g.ui.keyCode.END:this.JK("last","last",a);break;case g.ui.keyCode.UP:this.wBa(a);break;case g.ui.keyCode.DOWN:this.Qaa(a);break;case g.ui.keyCode.LEFT:case g.ui.keyCode.RIGHT:a.keyCode===
g.ui.keyCode.RIGHT^this.jl?this.bb&&!this.bb.is(".oj-disabled")&&this.cg(a):this.yo(a,"active");break;case g.ui.keyCode.ENTER:case g.ui.keyCode.SPACE:this.Kwa(a);this.aI=!0;var k=this;setTimeout(function(){k.aI=!1},100);break;case g.ui.keyCode.TAB:a.preventDefault();this.Jd&&this.bD(a);break;case g.ui.keyCode.ESCAPE:this.Jd?(d=this.element.attr("aria-activedescendant"),e="#"+this.element.attr("id")+"\x3e*\x3ea",d&&!g("#"+d).is(e)?this.yo(a,"active"):this.bD(a)):this.yo(a,"active");break;default:h=
!1,c=this.dO||"",d=String.fromCharCode(a.keyCode),e=!1,clearTimeout(this.EHa),d===c?e=!0:d=c+d,f=new RegExp("^"+b(d),"i"),c=this.zw.children(".oj-menu-item").filter(function(){return f.test(g(this).children("a").text())}),c=e&&-1!==c.index(this.bb.next())?this.bb.nextAll(".oj-menu-item"):c,c.length||(d=String.fromCharCode(a.keyCode),f=new RegExp("^"+b(d),"i"),c=this.zw.children(".oj-menu-item").filter(function(){return f.test(g(this).children("a").text())})),c.length?(this.Xi(a,c),1<c.length?(this.dO=
d,this.EHa=this._delay(function(){delete this.dO},1E3)):delete this.dO):delete this.dO}h&&a.preventDefault()},Kwa:function(a){this.bb&&!this.bb.is(".oj-disabled")&&(this.bb.children("a[aria-haspopup\x3d'true']").length?this.cg(a):this.yn(a))},refresh:function(){this._super();this.ab();var a=this.element;if(a.is(":visible")){var b=a.data("oj-menu-position");b&&(b.of instanceof g.Event||b.of instanceof Window||g(b.of).is(":visible"))&&(a.position(b),a.find(".oj-menu").each(function(){var a=g(this);
a.is(":visible")&&(b=a.data("oj-menu-position"))&&a.position(b)}))}},ab:function(){this.jl="rtl"===this.nd();var a=this,b=this.element.find(this.options.menuSelector),c=b.add(this.element),d=c.children();this.rya=!!b.length;d.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");var e=d.filter(":not(.oj-menu-item):has(a)"),f=e.children("a");this.t$(e);this.i$(f);e=d.filter(function(a,b){var c=g(b);return c.is(":not(.oj-menu-item)")&&!/[^\-\u2014\u2013\s]/.test(c.text())});
this.p$(e);this.Kya(d,e);d.filter(".oj-disabled").children("a").attr("aria-disabled","true");d.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");b.filter(":not(.oj-menu)").addClass("oj-menu oj-menu-submenu oj-menu-dropdown").hide().attr({role:this.role,"aria-hidden":"true"}).each(function(){var b=g(this),c=a.WT(b),d=g("\x3cspan\x3e");d.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon",!0);c.attr("aria-haspopup","true").attr("aria-expanded","false").append(d);
c=c.attr("id");b.attr("aria-labelledby",c)});c.each(function(){var a=g(this),b=a.children().children().children(".oj-menu-item-icon:not(.oj-menu-cancel-icon)").length;a.toggleClass("oj-menu-icons",!!b).toggleClass("oj-menu-text-only",!b)});this.bb&&!g.contains(this.element[0],this.bb[0])&&this.qR()},t$:function(a){a.addClass("oj-menu-item").attr("role","presentation")},i$:function(a){a.uniqueId().attr({tabIndex:"-1",role:"menuitem"})},p$:function(a){a.addClass("oj-menu-divider").attr("role","separator")},
Kya:function(a,b){a.removeClass("oj-menu-item-before-divider oj-menu-item-after-divider");b.prev().addClass("oj-menu-item-before-divider");b.next().addClass("oj-menu-item-after-divider")},WT:function(a){return a.prev("a")},qNa:function(){return"menuitem"},kJ:function(a,b){var c=a.prev(".oj-menu-divider").add(a.next(".oj-menu-divider"));b&&(c=c.add(a));return c},Xi:function(a,b){a&&"focus"===a.type||clearTimeout(this.Te);b=b.first();this.xaa(b,a);var c=b.parent(),d=c.closest(".oj-menu-item");c.find(".oj-focus-ancestor").removeClass("oj-focus-ancestor");
this.kJ(d,!0).addClass("oj-focus-ancestor");a&&"keydown"===a.type?this.qq():this.Te=this._delay(function(){delete this.Te;this.qq()},this.delay);c=b.children(".oj-menu");c.length&&a&&/^mouse/.test(a.type)&&!this.bb.hasClass("oj-disabled")&&this.LEa(c);this.zw=b.parent()},xaa:function(a,b){if(!a.is(this.bb)){var c=this.bb?this.bb:g(),d=a.children("a");this.bb=a;this.element.attr("aria-activedescendant",d.attr("id"));this.qv(c);this.Oy(a);this.kJ(c).removeClass("oj-focus");this.kJ(a).addClass("oj-focus");
this._trigger("_activeItem",b,{previousItem:c,item:a,privateNotice:"The _activeItem event is private.  Do not use."})}},iCa:function(a){if(this.bb){var b=this.bb;this.bb=null;this.element.removeAttr("aria-activedescendant");this.qv(b);this.kJ(b).removeClass("oj-focus");this._trigger("_activeItem",a,{previousItem:b,item:g(),privateNotice:"The _activeItem event is private.  Do not use."})}},qR:function(a){clearTimeout(this.Te);this.iCa(a)},bD:function(a,b){this.Jd.focus();this.av(a,b)},av:function(b,
d){var e=this.element.is(":visible"),f={};f[a.U.qb.Ih]=this.element;a.U.Qe().close(f);this.element.removeData("oj-menu-position");this.Jd=void 0;this.xda=!1;d&&(b=this.wX("select",b,d).event);e&&this._trigger("close",b,{});this.Cs=null;0<=c.indexOf(this)&&c.splice(c.indexOf(this),1)},getCurrentOpenOptions:function(){return g.extend(!0,{},this.Cs||this.options.openOptions)},open:function(b,d,e){d=g.extend({},this.options.openOptions,d);d.position=g.extend({},d.position);e=g.extend({},this.options.submenuOpenOptions,
e);var f=this.Cs;this.Cs=d;a.Ed.OAa(b);this.Tza=this.$H;var h=this.wX("beforeOpen",b,{openOptions:d});if(h.proceed)if(this.element.is(":visible")&&(this.Cs=f,this.av(h.event),this.Cs=d),f=d.launcher,(f="string"===g.type(f)?g(f):f)&&f.length){h=this.qza(d.display);this.jFa(h);var k,q;if(h){if(this.element.addClass("oj-menu-dropdown").removeClass("oj-menu-sheet"),q=l,k=a.Ed.ml(d.position,this.jl),k.of=a.Ed.rKa(k.of,f,b),null==k.of){a.t.warn("position.of passed to Menu.open() is 'event', but the event is null.  Ignoring the call.");
this.Cs=null;return}}else this.element.addClass("oj-menu-sheet").removeClass("oj-menu-dropdown"),q=m,k={my:"bottom",at:r,of:window,collision:"flipfit"};var s=this.element[0],t=c.slice(0,c.length);g.each(t,function(a,c){c.element[0]!==s&&(c.yo(b,"eventSubtree"),c.Jd&&c.av(b))});this.PEa=a.Ed.ml(e.position,this.jl);e=this.cF;g.isFunction(k.using)&&k.using!==e&&(k.origUsing=k.using);k.using=e;e={};e[a.U.qb.Ih]=this.element;e[a.U.qb.zB]=f;e[a.U.qb.DB]=k;e[a.U.qb.vu]=this.Vy();e[a.U.qb.Ur]="oj-menu-layer";
e[a.U.qb.Ak]=q;a.U.Qe().open(e);this.element.data("oj-menu-position",k);d=d.initialFocus;((e="firstItem"===d)||"menu"===d)&&this.element.focus();e?this.Xi(b,this.element.children().first()):this.qR(b);this.Jd=f;this.xda=!h;c.push(this);this._trigger("open",b,{})}else a.t.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call."),this.Cs=null;else this.Cs=f},LEa:function(a){clearTimeout(this.Te);"true"===a.attr("aria-hidden")&&
(this.Te&&clearTimeout(this.Te),this.Te=this._delay(function(){delete this.Te;this.qq();this.Zaa(a)},this.delay))},Zaa:function(a){var b=g.extend({of:this.bb},this.PEa);clearTimeout(this.Te);this.element.find(".oj-menu").not(a.parents(".oj-menu")).hide().attr("aria-hidden","true").removeData("oj-menu-position");a.show().removeAttr("aria-hidden").position(b).data("oj-menu-position",b);this.WT(a).attr("aria-expanded","true");!this.Jd&&0>c.indexOf(this)&&c.push(this)},ZH:function(a,b,c){function d(){delete e.Te;
var c=b?e.element:g(a&&a.target).closest(e.element.find(".oj-menu"));c.length||(c=e.element);e.qq(c);e.qR(a);e.zw=c}clearTimeout(this.Te);var e=this;c?this.Te=this._delay(d,c):d()},qq:function(a){a||(a=this.bb?this.bb.parent():this.element);var b=a.find(".oj-menu");b.hide().attr("aria-hidden","true").removeData("oj-menu-position");this.WT(b).attr("aria-expanded","false");a.find(".oj-focus-ancestor").removeClass("oj-focus-ancestor");this.Jd||0<=c.indexOf(this)&&a===this.element&&c.splice(c.indexOf(this),
1)},yo:function(b,c){if(null==c||"active"===c){var d=this.zw&&this.zw.closest(".oj-menu-item",this.element);d&&d.length&&(this.qq(),this.Xi(b,d))}else"all"===c||"eventSubtree"===c?this.ZH(b,"all"===c,this.delay):a.t.warn("Invalid param "+c+" passed to Menu._collapse().  Ignoring the call.")},cg:function(a){var b=this.bb&&this.bb.children(".oj-menu ").children(".oj-menu-item").first();b&&b.length&&(this.Zaa(b.parent()),this.Te&&clearTimeout(this.Te),this.Te=this._delay(function(){delete this.Te;this.Xi(a,
b)}))},Qaa:function(a){this.JK("next","first",a)},wBa:function(a){this.JK("prev","last",a)},mNa:function(){return this.bb&&!this.bb.prevAll(".oj-menu-item").length},nNa:function(){return this.bb&&!this.bb.nextAll(".oj-menu-item").length},JK:function(a,b,c){var d;this.bb&&(d="first"===a||"last"===a?this.bb["first"===a?"prevAll":"nextAll"](".oj-menu-item").eq(-1):this.bb[a+"All"](".oj-menu-item").eq(0));d&&d.length&&this.bb||(d=this.zw.children(".oj-menu-item")[b]());this.Xi(c,d)},yn:function(b){if(!this.bb&&
b&&b.target){var c=g(b.target).closest(".oj-menu-item");c.closest(this.element).length&&this.xaa(c,b)}this.bb?this.bb.has(".oj-menu").length||this.bb.is(".oj-disabled")?a.t.warn("Selecting a disabled menu item or parent menu item is not allowed."):(c=this.bb.is(this.uI)?void 0:{item:this.bb},this.ZH(b,!0),this.Jd&&this.bD(b,c)):a.t.warn("Menu._select() called when no menu item is focused and no menu item can be inferred from event param.")},tw:function(){this.element.remove()},Vy:function(){if(!this.wn){var b=
this.wn={};b[a.U.Dd.Ix]=g.proxy(this.v5,this);b[a.U.Dd.Jx]=g.proxy(this.tw,this);b[a.U.Dd.$p]=g.proxy(this.refresh,this);b[a.U.Dd.Hx]=g.proxy(this.YR,this)}return this.wn},v5:function(){this.qq(this.element);this.av(null)},dF:function(b,c){var d=c.element.element;d.css(b);(d=d.data("oj-menu-position"))&&(d=d.origUsing)&&d(b,c);a.Ed.pZ(c)&&(this.xs=this._delay(g.proxy(this.v5,this),1))},getNodeBySubId:function(a){switch(a&&a.subId){case q:return this.LR?this.uI[0]:null;default:return this._super(a)}},
getSubIdByNode:function(a){return this.uI&&this.uI.is(a)?q:this._super(a)},qza:function(a){if(this.rya)return!0;switch(a){case "dropDown":return!0;case "sheet":return!1;case "auto":return s.matches;default:throw Error("Invalid value for Menu openOptions.display: "+a);}},jFa:function(a){h&&(a?this.LR&&(this.x7().detach().eq(0).prev().removeClass("oj-menu-item-before-divider"),this.LR=!1):(this.x7().appendTo(this.element).eq(0).prev().addClass("oj-menu-item-before-divider"),this.LR=!0))},x7:function(){if(!this.tI){var a=
g("\x3cli\x3e\x3c/li\x3e",this.document[0]),b=g("\x3ca href\x3d'#'\x3e\x3c/a\x3e",this.document[0]).text(this.options.translations.labelCancel);g("\x3cspan class\x3d'oj-menu-item-icon oj-component-icon oj-menu-cancel-icon'\x3e\x3c/span\x3e",this.document[0]).prependTo(b);var c=g("\x3cli\x3e\x3c/li\x3e",this.document[0]).addClass("oj-menu-item-cancel oj-menu-item-after-divider").append(b);this.p$(a);this.i$(b);this.t$(c);this.d5=b;this.uI=c;this.tI=g([a[0],c[0]])}return this.tI},uEa:function(){k&&
(this.element.rj(t),this._on({swipedown:function(a){this.xda&&"touch"===a.gesture.pointerType&&(this.ZH(a,!0),this.bD(a))}}))}});var c=[],d=!1,e=-1<navigator.userAgent.indexOf("Macintosh")&&-1<navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome"),f=a.Wc.De("oj-menu-config")||{},h="menuItem"===f.sheetCancelAffordance,k="dismiss"===f.sheetSwipeDownBehavior,l=f.dropDownModality||"modeless",m=f.sheetModality||"modal",r="bottom-"+(f.sheetMarginBottom||0),t=k&&{recognizers:[[b.Swipe,
{direction:b.DIRECTION_DOWN}]]},s=function(){var a=f.dropDownThresholdWidth;null==a&&(a="768px");return window.matchMedia("(min-width: "+a+")")}(),q="oj-menu-cancel-command"})();a.Components.Xa("ojMenu","baseComponent",{properties:{disabled:{type:"boolean"},menuSelector:{type:"string"},openOptions:{type:"Object"},submenuOpenOptions:{type:"Object"}},methods:{destroy:{},getCurrentOpenOptions:{},getSubIdByNode:{},open:{},refresh:{},widget:{}},extension:{_hasWrapper:!0,_innerElement:"ul",_widgetName:"ojMenu"}});
a.Components.register("oj-menu",a.Components.getMetadata("ojMenu"))});