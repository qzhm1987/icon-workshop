!function(t){function o(t){return"undefined"==typeof t.which?!0:"number"==typeof t.which&&t.which>0?!t.ctrlKey&&!t.metaKey&&!t.altKey&&8!=t.which&&9!=t.which&&13!=t.which&&16!=t.which&&17!=t.which&&20!=t.which&&27!=t.which:!1}function i(o){var i=t(o);i.prop("disabled")||i.closest(".form-group").addClass("is-focused")}function n(o){o.closest("label").hover(function(){var o=t(this).find("input");o.prop("disabled")||i(o)},function(){e(t(this).find("input"))})}function e(o){t(o).closest(".form-group").removeClass("is-focused")}t.expr[":"].notmdproc=function(o){return t(o).data("mdproc")?!1:!0},t.material={options:{validate:!0,input:!0,ripples:!0,checkbox:!0,togglebutton:!0,radio:!0,arrive:!0,autofill:!1,withRipples:[".btn:not(.btn-link)",".card-image",".navbar a:not(.withoutripple)",".dropdown-menu a",".nav-tabs a:not(.withoutripple)",".nav-pills a:not(.withoutripple)",".breadcrumb a",".withripple",".pagination li:not(.active):not(.disabled) a:not(.withoutripple)"].join(","),inputElements:"input.form-control, textarea.form-control, select.form-control",checkboxElements:".checkbox > label > input[type=checkbox]",togglebuttonElements:".togglebutton > label > input[type=checkbox]",radioElements:".radio > label > input[type=radio]"},checkbox:function(o){var i=t(o?o:this.options.checkboxElements).filter(":notmdproc").data("mdproc",!0).after("<span class='checkbox-material'><span class='check'></span></span>");n(i)},togglebutton:function(o){var i=t(o?o:this.options.togglebuttonElements).filter(":notmdproc").data("mdproc",!0).after("<span class='toggle'></span>");n(i)},radio:function(o){var i=t(o?o:this.options.radioElements).filter(":notmdproc").data("mdproc",!0).after("<span class='circle'></span><span class='check'></span>");n(i)},input:function(o){t(o?o:this.options.inputElements).filter(":notmdproc").data("mdproc",!0).each(function(){var o=t(this),i=o.closest(".form-group");0===i.length&&(o.wrap("<div class='form-group'></div>"),i=o.closest(".form-group")),o.attr("data-hint")&&(o.after("<p class='help-block'>"+o.attr("data-hint")+"</p>"),o.removeAttr("data-hint"));var n={"input-lg":"form-group-lg","input-sm":"form-group-sm"};if(t.each(n,function(t,n){o.hasClass(t)&&(o.removeClass(t),i.addClass(n))}),o.hasClass("floating-label")){var e=o.attr("placeholder");o.attr("placeholder",null).removeClass("floating-label");var a=o.attr("id"),s="";a&&(s="for='"+a+"'"),i.addClass("label-floating"),o.after("<label "+s+"class='control-label'>"+e+"</label>")}(null===o.val()||"undefined"==o.val()||""===o.val())&&i.addClass("is-empty"),i.append("<span class='material-input'></span>"),i.find("input[type=file]").length>0&&i.addClass("is-fileinput")})},attachInputEventHandlers:function(){var n=this.options.validate;t(document).on("change",".checkbox input[type=checkbox]",function(){t(this).blur()}).on("keydown paste",".form-control",function(i){o(i)&&t(this).closest(".form-group").removeClass("is-empty")}).on("keyup change",".form-control",function(){var o=t(this),i=o.closest(".form-group"),e="undefined"==typeof o[0].checkValidity||o[0].checkValidity();""===o.val()?i.addClass("is-empty"):i.removeClass("is-empty"),n&&(e?i.removeClass("has-error"):i.addClass("has-error"))}).on("focus",".form-control, .form-group.is-fileinput",function(){i(this)}).on("blur",".form-control, .form-group.is-fileinput",function(){e(this)}).on("change",".form-group input",function(){var o=t(this);if("file"!=o.attr("type")){var i=o.closest(".form-group"),n=o.val();n?i.removeClass("is-empty"):i.addClass("is-empty")}}).on("change",".form-group.is-fileinput input[type='file']",function(){var o=t(this),i=o.closest(".form-group"),n="";t.each(this.files,function(t,o){n+=o.name+", "}),n=n.substring(0,n.length-2),n?i.removeClass("is-empty"):i.addClass("is-empty"),i.find("input.form-control[readonly]").val(n)})},ripples:function(o){t(o?o:this.options.withRipples).ripples()},autofill:function(){var o=setInterval(function(){t("input[type!=checkbox]").each(function(){var o=t(this);o.val()&&o.val()!==o.attr("value")&&o.trigger("change")})},100);setTimeout(function(){clearInterval(o)},1e4)},attachAutofillEventHandlers:function(){var o;t(document).on("focus","input",function(){var i=t(this).parents("form").find("input").not("[type=file]");o=setInterval(function(){i.each(function(){var o=t(this);o.val()!==o.attr("value")&&o.trigger("change")})},100)}).on("blur",".form-group input",function(){clearInterval(o)})},init:function(o){this.options=t.extend({},this.options,o);var i=t(document);t.fn.ripples&&this.options.ripples&&this.ripples(),this.options.input&&(this.input(),this.attachInputEventHandlers()),this.options.checkbox&&this.checkbox(),this.options.togglebutton&&this.togglebutton(),this.options.radio&&this.radio(),this.options.autofill&&(this.autofill(),this.attachAutofillEventHandlers()),document.arrive&&this.options.arrive&&(t.fn.ripples&&this.options.ripples&&i.arrive(this.options.withRipples,function(){t.material.ripples(t(this))}),this.options.input&&i.arrive(this.options.inputElements,function(){t.material.input(t(this))}),this.options.checkbox&&i.arrive(this.options.checkboxElements,function(){t.material.checkbox(t(this))}),this.options.radio&&i.arrive(this.options.radioElements,function(){t.material.radio(t(this))}),this.options.togglebutton&&i.arrive(this.options.togglebuttonElements,function(){t.material.togglebutton(t(this))}))}}}(jQuery);
!function(){"use strict";angular.module("angular-loading-bar",["cfp.loadingBarInterceptor"]),angular.module("chieffancypants.loadingBar",["cfp.loadingBarInterceptor"]),angular.module("cfp.loadingBarInterceptor",["cfp.loadingBar"]).config(["$httpProvider",function(e){var n=["$q","$cacheFactory","$timeout","$rootScope","$log","cfpLoadingBar",function(n,t,a,r,i,c){function o(){a.cancel(d),c.complete(),u=0,s=0}function l(n){var a,r=t.get("$http"),i=e.defaults;!n.cache&&!i.cache||n.cache===!1||"GET"!==n.method&&"JSONP"!==n.method||(a=angular.isObject(n.cache)?n.cache:angular.isObject(i.cache)?i.cache:r);var c=void 0!==a?void 0!==a.get(n.url):!1;return void 0!==n.cached&&c!==n.cached?n.cached:(n.cached=c,c)}var d,s=0,u=0,h=c.latencyThreshold;return{request:function(e){return e.ignoreLoadingBar||l(e)||(r.$broadcast("cfpLoadingBar:loading",{url:e.url}),0===s&&(d=a(function(){c.start()},h)),s++,c.set(u/s)),e},response:function(e){return e&&e.config?(e.config.ignoreLoadingBar||l(e.config)||(u++,r.$broadcast("cfpLoadingBar:loaded",{url:e.config.url,result:e}),u>=s?o():c.set(u/s)),e):(i.error("Broken interceptor detected: Config object not supplied in response:\n https://github.com/chieffancypants/angular-loading-bar/pull/50"),e)},responseError:function(e){return e&&e.config?(e.config.ignoreLoadingBar||l(e.config)||(u++,r.$broadcast("cfpLoadingBar:loaded",{url:e.config.url,result:e}),u>=s?o():c.set(u/s)),n.reject(e)):(i.error("Broken interceptor detected: Config object not supplied in rejection:\n https://github.com/chieffancypants/angular-loading-bar/pull/50"),n.reject(e))}}}];e.interceptors.push(n)}]),angular.module("cfp.loadingBar",[]).provider("cfpLoadingBar",function(){this.autoIncrement=!0,this.includeSpinner=!0,this.includeBar=!0,this.latencyThreshold=100,this.startSize=.02,this.parentSelector="body",this.lightTheme=!1,this.spinnerTemplate='<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>',this.loadingBarTemplate='<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>',this.$get=["$injector","$document","$timeout","$rootScope",function(e,n,t,a){function r(){s||(s=e.get("$animate"));var r=n.find(g).eq(0);t.cancel(h),v||(a.$broadcast("cfpLoadingBar:started"),v=!0,S&&(L&&p.addClass("light"),s.enter(p,r,angular.element(r[0].lastChild))),b&&(L&&m.addClass("light"),s.enter(m,r,angular.element(r[0].lastChild))),i(T))}function i(e){if(v){var n=100*e+"%";f.css("width",n),B=e,$&&(t.cancel(u),u=t(function(){c()},250))}}function c(){if(!(o()>=1)){var e=0,n=o();e=n>=0&&.25>n?(3*Math.random()+3)/100:n>=.25&&.65>n?3*Math.random()/100:n>=.65&&.9>n?2*Math.random()/100:n>=.9&&.99>n?.005:0;var t=o()+e;i(t)}}function o(){return B}function l(){B=0,v=!1}function d(){s||(s=e.get("$animate")),a.$broadcast("cfpLoadingBar:completed"),i(1),t.cancel(h),h=t(function(){var e=s.leave(p,l);e&&e.then&&e.then(l),s.leave(m)},500)}var s,u,h,g=this.parentSelector,p=angular.element(this.loadingBarTemplate),f=p.find("div").eq(0),m=angular.element(this.spinnerTemplate),v=!1,B=0,$=this.autoIncrement,b=this.includeSpinner,S=this.includeBar,T=this.startSize,L=this.lightTheme;return{start:r,set:i,status:o,inc:c,complete:d,autoIncrement:this.autoIncrement,includeSpinner:this.includeSpinner,latencyThreshold:this.latencyThreshold,parentSelector:this.parentSelector,startSize:this.startSize}}]})}();
!function(e,o){"undefined"!=typeof module&&module.exports?"undefined"==typeof angular?(o(require("angular")),module.exports="ngDialog"):(o(angular),module.exports="ngDialog"):"function"==typeof define&&define.amd?define(["angular"],o):o(e.angular)}(this,function(e){"use strict";var o=e.module("ngDialog",[]),a=e.element,n=e.isDefined,t=(document.body||document.documentElement).style,l=n(t.animation)||n(t.WebkitAnimation)||n(t.MozAnimation)||n(t.MsAnimation)||n(t.OAnimation),i="animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend",r="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",c="ngdialog-disabled-animation",s={html:!1,body:!1},d={},g=[],u=!1;return o.provider("ngDialog",function(){var o=this.defaults={className:"ngdialog-theme-default",disableAnimation:!1,plain:!1,showClose:!0,closeByDocument:!0,closeByEscape:!0,closeByNavigation:!1,appendTo:!1,preCloseCallback:!1,overlay:!0,cache:!0,trapFocus:!0,preserveFocus:!0,ariaAuto:!0,ariaRole:null,ariaLabelledById:null,ariaLabelledBySelector:null,ariaDescribedById:null,ariaDescribedBySelector:null};this.setForceHtmlReload=function(e){s.html=e||!1},this.setForceBodyReload=function(e){s.body=e||!1},this.setDefaults=function(a){e.extend(o,a)};var n,t=0,f=0,p={};this.$get=["$document","$templateCache","$compile","$q","$http","$rootScope","$timeout","$window","$controller","$injector",function(m,y,v,b,D,h,C,$,A,E){var B=[],S={onDocumentKeydown:function(e){27===e.keyCode&&k.close("$escape")},activate:function(e){var o=e.data("$ngDialogOptions");o.trapFocus&&(e.on("keydown",S.onTrapFocusKeydown),B.body.on("keydown",S.onTrapFocusKeydown))},deactivate:function(e){e.off("keydown",S.onTrapFocusKeydown),B.body.off("keydown",S.onTrapFocusKeydown)},deactivateAll:function(o){e.forEach(o,function(o){var a=e.element(o);S.deactivate(a)})},setBodyPadding:function(e){var o=parseInt(B.body.css("padding-right")||0,10);B.body.css("padding-right",o+e+"px"),B.body.data("ng-dialog-original-padding",o),h.$broadcast("ngDialog.setPadding",e)},resetBodyPadding:function(){var e=B.body.data("ng-dialog-original-padding");e?B.body.css("padding-right",e+"px"):B.body.css("padding-right",""),h.$broadcast("ngDialog.setPadding",0)},performCloseDialog:function(e,o){var a=e.data("$ngDialogOptions"),t=e.attr("id"),r=d[t];if(r){if("undefined"!=typeof $.Hammer){var c=r.hammerTime;c.off("tap",n),c.destroy&&c.destroy(),delete r.hammerTime}else e.unbind("click");1===f&&B.body.unbind("keydown",S.onDocumentKeydown),e.hasClass("ngdialog-closing")||(f-=1);var s=e.data("$ngDialogPreviousFocus");s&&s.focus&&s.focus(),h.$broadcast("ngDialog.closing",e,o),f=0>f?0:f,l&&!a.disableAnimation?(r.$destroy(),e.unbind(i).bind(i,function(){S.closeDialogElement(e,o)}).addClass("ngdialog-closing")):(r.$destroy(),S.closeDialogElement(e,o)),p[t]&&(p[t].resolve({id:t,value:o,$dialog:e,remainingDialogs:f}),delete p[t]),d[t]&&delete d[t],g.splice(g.indexOf(t),1),g.length||(B.body.unbind("keydown",S.onDocumentKeydown),u=!1)}},closeDialogElement:function(e,o){e.remove(),0===f&&(B.html.removeClass("ngdialog-open"),B.body.removeClass("ngdialog-open"),S.resetBodyPadding()),h.$broadcast("ngDialog.closed",e,o)},closeDialog:function(o,a){var n=o.data("$ngDialogPreCloseCallback");if(n&&e.isFunction(n)){var t=n.call(o,a);e.isObject(t)?t.closePromise?t.closePromise.then(function(){S.performCloseDialog(o,a)}):t.then(function(){S.performCloseDialog(o,a)},function(){}):t!==!1&&S.performCloseDialog(o,a)}else S.performCloseDialog(o,a)},onTrapFocusKeydown:function(o){var a,n=e.element(o.currentTarget);if(n.hasClass("ngdialog"))a=n;else if(a=S.getActiveDialog(),null===a)return;var t=9===o.keyCode,l=o.shiftKey===!0;t&&S.handleTab(a,o,l)},handleTab:function(e,o,a){var n=S.getFocusableElements(e);if(0===n.length)return void(document.activeElement&&document.activeElement.blur());var t=document.activeElement,l=Array.prototype.indexOf.call(n,t),i=-1===l,r=0===l,c=l===n.length-1,s=!1;a?(i||r)&&(n[n.length-1].focus(),s=!0):(i||c)&&(n[0].focus(),s=!0),s&&(o.preventDefault(),o.stopPropagation())},autoFocus:function(e){var o=e[0],n=o.querySelector("*[autofocus]");if(null===n||(n.focus(),document.activeElement!==n)){var t=S.getFocusableElements(e);if(t.length>0)return void t[0].focus();var l=S.filterVisibleElements(o.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span"));if(l.length>0){var i=l[0];a(i).attr("tabindex","-1").css("outline","0"),i.focus()}}},getFocusableElements:function(e){var o=e[0],a=o.querySelectorAll(r),n=S.filterTabbableElements(a);return S.filterVisibleElements(n)},filterTabbableElements:function(e){for(var o=[],n=0;n<e.length;n++){var t=e[n];"-1"!==a(t).attr("tabindex")&&o.push(t)}return o},filterVisibleElements:function(e){for(var o=[],a=0;a<e.length;a++){var n=e[a];(n.offsetWidth>0||n.offsetHeight>0)&&o.push(n)}return o},getActiveDialog:function(){var e=document.querySelectorAll(".ngdialog");return 0===e.length?null:a(e[e.length-1])},applyAriaAttributes:function(e,o){if(o.ariaAuto){if(!o.ariaRole){var a=S.getFocusableElements(e).length>0?"dialog":"alertdialog";o.ariaRole=a}o.ariaLabelledBySelector||(o.ariaLabelledBySelector="h1,h2,h3,h4,h5,h6"),o.ariaDescribedBySelector||(o.ariaDescribedBySelector="article,section,p")}o.ariaRole&&e.attr("role",o.ariaRole),S.applyAriaAttribute(e,"aria-labelledby",o.ariaLabelledById,o.ariaLabelledBySelector),S.applyAriaAttribute(e,"aria-describedby",o.ariaDescribedById,o.ariaDescribedBySelector)},applyAriaAttribute:function(e,o,n,t){if(n&&e.attr(o,n),t){var l=e.attr("id"),i=e[0].querySelector(t);if(!i)return;var r=l+"-"+o;return a(i).attr("id",r),e.attr(o,r),r}},detectUIRouter:function(){try{return e.module("ui.router"),!0}catch(o){return!1}},getRouterLocationEventName:function(){return S.detectUIRouter()?"$stateChangeSuccess":"$locationChangeSuccess"}},k={__PRIVATE__:S,open:function(l){function i(e,o){return h.$broadcast("ngDialog.templateLoading",e),D.get(e,o||{}).then(function(o){return h.$broadcast("ngDialog.templateLoaded",e),o.data||""})}function r(o){return o?e.isString(o)&&s.plain?o:"boolean"!=typeof s.cache||s.cache?i(o,{cache:y}):i(o,{cache:!1}):"Empty template"}var s=e.copy(o),m=++t,w="ngdialog"+m;g.push(w),l=l||{},e.extend(s,l);var F;p[w]=F=b.defer();var T;d[w]=T=e.isObject(s.scope)?s.scope.$new():h.$new();var P,x,I=e.extend({},s.resolve);return e.forEach(I,function(o,a){I[a]=e.isString(o)?E.get(o):E.invoke(o,null,null,a)}),b.all({template:r(s.template||s.templateUrl),locals:b.all(I)}).then(function(o){var t=o.template,l=o.locals;s.showClose&&(t+='<div class="ngdialog-close"></div>');var i=s.overlay?"":" ngdialog-no-overlay";if(P=a('<div id="ngdialog'+m+'" class="ngdialog'+i+'"></div>'),P.html(s.overlay?'<div class="ngdialog-overlay"></div><div class="ngdialog-content" role="document">'+t+"</div>":'<div class="ngdialog-content" role="document">'+t+"</div>"),P.data("$ngDialogOptions",s),T.ngDialogId=w,s.data&&e.isString(s.data)){var r=s.data.replace(/^\s*/,"")[0];T.ngDialogData="{"===r||"["===r?e.fromJson(s.data):s.data,T.ngDialogData.ngDialogId=w}else s.data&&e.isObject(s.data)&&(T.ngDialogData=s.data,T.ngDialogData.ngDialogId=w);if(s.className&&P.addClass(s.className),s.disableAnimation&&P.addClass(c),x=s.appendTo&&e.isString(s.appendTo)?e.element(document.querySelector(s.appendTo)):B.body,S.applyAriaAttributes(P,s),s.preCloseCallback){var d;e.isFunction(s.preCloseCallback)?d=s.preCloseCallback:e.isString(s.preCloseCallback)&&T&&(e.isFunction(T[s.preCloseCallback])?d=T[s.preCloseCallback]:T.$parent&&e.isFunction(T.$parent[s.preCloseCallback])?d=T.$parent[s.preCloseCallback]:h&&e.isFunction(h[s.preCloseCallback])&&(d=h[s.preCloseCallback])),d&&P.data("$ngDialogPreCloseCallback",d)}if(T.closeThisDialog=function(e){S.closeDialog(P,e)},s.controller&&(e.isString(s.controller)||e.isArray(s.controller)||e.isFunction(s.controller))){var g;s.controllerAs&&e.isString(s.controllerAs)&&(g=s.controllerAs);var p=A(s.controller,e.extend(l,{$scope:T,$element:P}),null,g);P.data("$ngDialogControllerController",p)}if(C(function(){var e=document.querySelectorAll(".ngdialog");S.deactivateAll(e),v(P)(T);var o=$.innerWidth-B.body.prop("clientWidth");B.html.addClass("ngdialog-open"),B.body.addClass("ngdialog-open");var a=o-($.innerWidth-B.body.prop("clientWidth"));a>0&&S.setBodyPadding(a),x.append(P),S.activate(P),s.trapFocus&&S.autoFocus(P),s.name?h.$broadcast("ngDialog.opened",{dialog:P,name:s.name}):h.$broadcast("ngDialog.opened",P)}),u||(B.body.bind("keydown",S.onDocumentKeydown),u=!0),s.closeByNavigation){var y=S.getRouterLocationEventName();h.$on(y,function(){S.closeDialog(P)})}if(s.preserveFocus&&P.data("$ngDialogPreviousFocus",document.activeElement),n=function(e){var o=s.closeByDocument?a(e.target).hasClass("ngdialog-overlay"):!1,n=a(e.target).hasClass("ngdialog-close");(o||n)&&k.close(P.attr("id"),n?"$closeButton":"$document")},"undefined"!=typeof $.Hammer){var b=T.hammerTime=$.Hammer(P[0]);b.on("tap",n)}else P.bind("click",n);return f+=1,k}),{id:w,closePromise:F.promise,close:function(e){S.closeDialog(P,e)}}},openConfirm:function(o){var n=b.defer(),t={closeByEscape:!1,closeByDocument:!1};e.extend(t,o),t.scope=e.isObject(t.scope)?t.scope.$new():h.$new(),t.scope.confirm=function(e){n.resolve(e);var o=a(document.getElementById(l.id));S.performCloseDialog(o,e)};var l=k.open(t);return l.closePromise.then(function(e){return e?n.reject(e.value):n.reject()}),n.promise},isOpen:function(e){var o=a(document.getElementById(e));return o.length>0},close:function(e,o){var n=a(document.getElementById(e));if(n.length)S.closeDialog(n,o);else if("$escape"===e){var t=g[g.length-1];n=a(document.getElementById(t)),n.data("$ngDialogOptions").closeByEscape&&S.closeDialog(n,"$escape")}else k.closeAll(o);return k},closeAll:function(e){for(var o=document.querySelectorAll(".ngdialog"),n=o.length-1;n>=0;n--){var t=o[n];S.closeDialog(a(t),e)}},getOpenDialogs:function(){return g},getDefaults:function(){return o}};return e.forEach(["html","body"],function(e){if(B[e]=m.find(e),s[e]){var o=S.getRouterLocationEventName();h.$on(o,function(){B[e]=m.find(e)})}}),k}]}),o.directive("ngDialog",["ngDialog",function(o){return{restrict:"A",scope:{ngDialogScope:"="},link:function(a,n,t){n.on("click",function(n){n.preventDefault();var l=e.isDefined(a.ngDialogScope)?a.ngDialogScope:"noScope";e.isDefined(t.ngDialogClosePrevious)&&o.close(t.ngDialogClosePrevious);var i=o.getDefaults();o.open({template:t.ngDialog,className:t.ngDialogClass||i.className,controller:t.ngDialogController,controllerAs:t.ngDialogControllerAs,bindToController:t.ngDialogBindToController,scope:l,data:t.ngDialogData,showClose:"false"===t.ngDialogShowClose?!1:"true"===t.ngDialogShowClose?!0:i.showClose,closeByDocument:"false"===t.ngDialogCloseByDocument?!1:"true"===t.ngDialogCloseByDocument?!0:i.closeByDocument,closeByEscape:"false"===t.ngDialogCloseByEscape?!1:"true"===t.ngDialogCloseByEscape?!0:i.closeByEscape,overlay:"false"===t.ngDialogOverlay?!1:"true"===t.ngDialogOverlay?!0:i.overlay,preCloseCallback:t.ngDialogPreCloseCallback||i.preCloseCallback})})}}}]),o});
!function(){"use strict";angular.module("rhIcon",["ui.router","ui.bootstrap","angular-loading-bar","ngAnimate","ngDialog"]).run(["$rootScope","cfpLoadingBar",function(t,a){t.$on("$stateChangeStart",function(){a.start()}),t.$on("$stateChangeSuccess",function(){a.complete()})}]).run(["$rootScope","$state","$stateParams",function(t,a,n){t.$state=a,t.$stateParams=n}]),$.material.init()}();
!function(){"use strict";angular.module("rhIcon").constant("$platforms",{ios:{name:"iOS",folder:"ios/AppIcon.appiconset"},android:{name:"Android",folder:"android"},windowsphone:{name:"Windows Phone",folder:"windowsphone"},iwatch:{name:"iWatch",folder:"iwatch/AppIcon.appiconset"},webapp:{name:"Web App",folder:"webapp"},phonegap:{name:"PhoneGap",folder:"phonegap"},custom:{name:"自定义",folder:"custom"},ios_old:{name:"iOS(旧格式)",folder:"ios_old"}})}();
!function(){"use strict";angular.module("rhIcon").directive("focusLast",["$timeout",function(t){return{restrict:"A",link:function(n,c){n.$last&&t(function(){c.focus().select()})}}}])}();
!function(){"use strict";angular.module("rhIcon").service("CoreService",function(){this.resCallback=function(o,t,e){try{var r=o;"string"==typeof o&&(r=JSON.parse(o)),r.e?swal({title:r.d,type:"error",confirmButtonText:"确定"},e):"function"==typeof t&&t(r.d)}catch(n){throw console.log(o),console.log(n),n}}})}();
!function(){"use strict";angular.module("rhIcon").controller("RootCtrl",["$scope","$state","$platforms",function(t,o,n){t.$platforms=n,t.stateCls=function(t){return window.state==t?"active":o.is(t)?"active":""}}])}();