"use strict";!function(t,e){t.Package.name="DashLite",t.Package.version="2.3";var n=e(window),a=e("body"),i=e(document),o="nk-menu",s="nk-header-menu",r="nk-sidebar",c="nk-sidebar-mobile",l=t.Break;function d(t,e){return Object.keys(e).forEach(function(n){t[n]=e[n]}),t}t.ClassBody=function(){t.AddInBody(r)},t.ClassNavMenu=function(){t.BreakClass("."+s,l.lg,{timeOut:0}),t.BreakClass("."+r,l.lg,{timeOut:0,classAdd:c}),n.on("resize",function(){t.BreakClass("."+s,l.lg),t.BreakClass("."+r,l.lg,{classAdd:c})})},t.Prettify=function(){window.prettyPrint&&prettyPrint()},t.Copied=function(){var t=".clipboard-init",n=".clipboard-text",a="clipboard-success",i="clipboard-error";function o(t,o){var s=(t=e(t)).parent(),r={text:"Copy",done:"Copied",fail:"Failed"};t={text:t.data("clip-text"),done:t.data("clip-success"),fail:t.data("clip-error")},r.text=t.text||r.text,r.done=t.done||r.done,r.fail=t.fail||r.fail,t="success"===o?r.done:r.fail,s.addClass("success"===o?a:i).find(n).html(t),setTimeout(function(){s.removeClass(a+" "+i).find(n).html(r.text).blur(),s.find("input").blur()},2e3)}ClipboardJS.isSupported()?new ClipboardJS(t).on("success",function(t){o(t.trigger,"success"),t.clearSelection()}).on("error",function(t){o(t.trigger,"error")}):e(t).css("display","none")},t.CurrentLink=function(){var t=window.location.href,n=(n=t.substring(0,-1==t.indexOf("#")?t.length:t.indexOf("#"))).substring(0,-1==n.indexOf("?")?n.length:n.indexOf("?"));e(".nk-menu-link, .menu-link, .nav-link").each(function(){var t=e(this),a=t.attr("href");n.match(a)?(t.closest("li").addClass("active current-page").parents().closest("li").addClass("active current-page"),t.closest("li").children(".nk-menu-sub").css("display","block"),t.parents().closest("li").children(".nk-menu-sub").css("display","block")):t.closest("li").removeClass("active current-page").parents().closest("li:not(.current-page)").removeClass("active")})},t.PassSwitch=function(){t.Passcode(".passcode-switch")},t.Toast=function(t,e,n){var a="",i="info"===(e=e||"info")?"ni ni-info-fill":"success"===e?"ni ni-check-circle-fill":"error"===e?"ni ni-cross-circle-fill":"warning"===e?"ni ni-alert-fill":"",o={position:"bottom-right",ui:"",icon:"auto",clear:!1};(o=n?d(o,n):o).position=o.position?"toast-"+o.position:"toast-bottom-right",o.icon="auto"===o.icon?i:o.icon||"",o.ui=o.ui?" "+o.ui:"",a=""!==o.icon?'<span class="toastr-icon"><em class="icon '+o.icon+'"></em></span>':"",""!=(t=""!==t?a+'<div class="toastr-text">'+t+"</div>":"")&&(!0===o.clear&&toastr.clear(),a={closeButton:!0,debug:!1,newestOnTop:!1,progressBar:!1,positionClass:o.position+o.ui,closeHtml:'<span class="btn-trigger">Close</span>',preventDuplicates:!0,showDuration:"1500",hideDuration:"1500",timeOut:"2000",toastClass:"toastr",extendedTimeOut:"3000"},toastr.options=d(a,o),toastr[e](t))},t.TGL.screen=function(t){e(t).exists()&&e(t).each(function(){var t=e(this).data("toggle-screen");t&&e(this).addClass("toggle-screen-"+t)})},t.TGL.content=function(a,o){var s=e(a||".toggle"),r=e("[data-content]"),c=!1,u=(a={active:"active",content:"content-active",break:!0},o?d(a,o):a);t.TGL.screen(r),s.on("click",function(n){c=this,t.Toggle.trigger(e(this).data("target"),u),n.preventDefault()}),i.on("mouseup",function(n){var a,i,o,s;c&&(a=e(c),i=e(".select2-container"),o=e(".datepicker-dropdown"),s=e(".ui-timepicker-container"),a.is(n.target)||0!==a.has(n.target).length||r.is(n.target)||0!==r.has(n.target).length||i.is(n.target)||0!==i.has(n.target).length||o.is(n.target)||0!==o.has(n.target).length||s.is(n.target)||0!==s.has(n.target).length||(t.Toggle.removed(a.data("target"),u),c=!1))}),n.on("resize",function(){r.each(function(){var n=e(this).data("content"),a=e(this).data("toggle-screen");a=l[a],t.Win.width>a&&t.Toggle.removed(n,u)})})},t.TGL.expand=function(n,a){var i=n||".expand",o=(n={toggle:!0},a?d(n,a):n);e(i).on("click",function(n){t.Toggle.trigger(e(this).data("target"),o),n.preventDefault()})},t.TGL.ddmenu=function(n,a){var i=n||".nk-menu-toggle",o=(n={active:"active",self:"nk-menu-toggle",child:"nk-menu-sub"},a?d(n,a):n);e(i).on("click",function(n){(t.Win.width<l.lg||e(this).parents().hasClass(r))&&t.Toggle.dropMenu(e(this),o),n.preventDefault()})},t.TGL.showmenu=function(a,o){var c=e(a||".nk-nav-toggle"),u=e("[data-content]"),p=u.hasClass(s)?l.lg:l.xl,f=(a={active:"toggle-active",content:r+"-active",body:"nav-shown",overlay:"nk-sidebar-overlay",break:p,close:{profile:!0,menu:!1}},o?d(a,o):a);c.on("click",function(n){t.Toggle.trigger(e(this).data("target"),f),n.preventDefault()}),i.on("mouseup",function(e){!c.is(e.target)&&0===c.has(e.target).length&&!u.is(e.target)&&0===u.has(e.target).length&&t.Win.width<p&&t.Toggle.removed(c.data("target"),f)}),n.on("resize",function(){(t.Win.width<l.xl||t.Win.width<p)&&t.Toggle.removed(c.data("target"),f)})},t.sbCompact=function(){var t=e(".nk-nav-compact"),n=(e("[data-content]"),e("."+r)),a=e("."+r+"-body");t.on("click",function(t){t.preventDefault();var n=e(this);t=n.data("target"),t=e("[data-content="+t+"]"),n.toggleClass("compact-active"),t.toggleClass("is-compact"),t.hasClass("is-compact")||t.removeClass("has-hover")}),a.on("mouseenter",function(t){n.hasClass("is-compact")&&n.addClass("has-hover")}),a.on("mouseleave",function(t){n.hasClass("is-compact")&&n.removeClass("has-hover")})},t.Ani.formSearch=function(t,n){var a={active:"active",timeout:400,target:"[data-search]"},o=n?d(a,n):a,s=e(t),r=e(o.target);s.exists()&&(s.on("click",function(t){t.preventDefault(),t=e(this).data("target");var n=e("[data-search="+t+"]");t=e("[data-target="+t+"]"),n.hasClass(o.active)?(t.add(n).removeClass(o.active),setTimeout(function(){n.find("input").val("")},o.timeout)):(t.add(n).addClass(o.active),n.find("input").focus())}),i.on({keyup:function(t){"Escape"===t.key&&s.add(r).removeClass(o.active)},mouseup:function(t){r.find("input").val()||r.is(t.target)||0!==r.has(t.target).length||s.is(t.target)||0!==s.has(t.target).length||s.add(r).removeClass(o.active)}}))},t.Ani.formElm=function(t,n){var a={focus:"focused"},i=n?d(a,n):a;e(t).exists()&&e(t).each(function(){var t=e(this);t.val()&&t.parent().addClass(i.focus),t.on({focus:function(){t.parent().addClass(i.focus)},blur:function(){t.val()||t.parent().removeClass(i.focus)}})})},t.Validate=function(t,n){e(t).exists()&&e(t).each(function(){var t={errorElement:"span"};t=n?d(t,n):t,e(this).validate(t)})},t.Validate.init=function(){t.Validate(".form-validate",{errorElement:"span",errorClass:"invalid",errorPlacement:function(t,e){e.parents().hasClass("input-group")?t.appendTo(e.parent().parent()):t.appendTo(e.parent())}})},t.Dropzone=function(t,n){e(t).exists()&&e(t).each(function(){var a=(a=e(t).data("max-files"))||null,i=(i=e(t).data("max-file-size"))||256,o={autoDiscover:!1,maxFiles:a,maxFilesize:i,acceptedFiles:o=(o=e(t).data("accepted-files"))||null};o=n?d(o,n):o,e(this).addClass("dropzone").dropzone(o)})},t.Dropzone.init=function(){t.Dropzone(".upload-zone",{url:"/images"})},t.Wizard=function(){var t=e(".nk-wizard");t.exists()&&t.each(function(){var t=e(this).attr("id"),n=e("#"+t).show();n.steps({headerTag:".nk-wizard-head",bodyTag:".nk-wizard-content",labels:{finish:"Submit",next:"Next",previous:"Prev",loading:"Loading ..."},titleTemplate:'<span class="number">0#index#</span> #title#',onStepChanging:function(t,e,a){return a<e||(e<a&&(n.find(".body:eq("+a+") label.error").remove(),n.find(".body:eq("+a+") .error").removeClass("error")),n.validate().settings.ignore=":disabled,:hidden",n.valid())},onFinishing:function(t,e){return n.validate().settings.ignore=":disabled",n.valid()},onFinished:function(t,e){window.location.href="#"}}).validate({errorElement:"span",errorClass:"invalid",errorPlacement:function(t,e){t.appendTo(e.parent())}})})},t.DataTable=function(t,n){e(t).exists()&&e(t).each(function(){var t=e(this).data("auto-responsive"),a=!(void 0===n.buttons||!n.buttons),i=e(this).data("export-title")?e(this).data("export-title"):"Export",o=a?" with-export":"",s=(a='<"row justify-between g-2'+o+'"<"col-7 col-sm-4 text-left"f><"col-5 col-sm-8 text-right"<"datatable-filter"<"d-flex justify-content-end g-2"'+(s=a?'<"dt-export-buttons d-flex align-center"<"dt-export-title d-none d-md-inline-block">B>':"")+'l>>>><"datatable-wrap my-3"t><"row align-items-center"<"col-7 col-sm-12 col-md-9"p><"col-5 col-sm-12 col-md-3 text-left text-md-right"i>>','<"row justify-between g-2'+o+'"<"col-7 col-sm-4 text-left"f><"col-5 col-sm-8 text-right"<"datatable-filter"<"d-flex justify-content-end g-2"'+s+'l>>>><"my-3"t><"row align-items-center"<"col-7 col-sm-12 col-md-9"p><"col-5 col-sm-12 col-md-3 text-left text-md-right"i>>');a={responsive:!0,autoWidth:!1,dom:e(this).hasClass("is-separate")?s:a,language:{search:"",searchPlaceholder:"Type in to Search",lengthMenu:"<span class='d-none d-sm-inline-block'>Show</span><div class='form-control-select'> _MENU_ </div>",info:"_START_ -_END_ of _TOTAL_",infoEmpty:"No records found",infoFiltered:"( Total _MAX_  )",paginate:{first:"First",last:"Last",next:"Next",previous:"Prev"}}},a=n?d(a,n):a,a=!1===t?d(a,{responsive:!1}):a,e(this).DataTable(a),e(".dt-export-title").text(i)})},t.DataTable.init=function(){t.DataTable(".datatable-init",{responsive:{details:!0}}),t.DataTable(".datatable-init-export",{order:[],responsive:{details:!0},buttons:["copy","excel","csv","pdf","colvis"],lengthMenu:[[5,10,25,50,100,-1],[5,10,25,50,100,"All"]]}),e.fn.DataTable.ext.pager.numbers_length=7},t.BS.ddfix=function(n,a){var i=a||"a:not(.clickable), button:not(.clickable), a:not(.clickable) *, button:not(.clickable) *";e(n||".dropdown-menu").on("click",function(t){e(t.target).is(i)||t.stopPropagation()}),t.State.isRTL&&e(".dropdown-menu").each(function(){var t=e(this);t.hasClass("dropdown-menu-right")&&!t.hasClass("dropdown-menu-center")?t.prev('[data-toggle="dropdown"]').dropdown({popperConfig:{placement:"bottom-start"}}):t.hasClass("dropdown-menu-right")||t.hasClass("dropdown-menu-center")||t.prev('[data-toggle="dropdown"]').dropdown({popperConfig:{placement:"bottom-end"}})})},t.BS.tabfix=function(t){e(t||'[data-toggle="modal"]').on("click",function(){var t=(i=e(this)).data("target"),n=i.attr("href"),i=i.data("tab-target");n=t?a.find(t):a.find(n),i&&"#"!==i&&n?n.find('[href="'+i+'"]').tab("show"):n&&(n=n.find(".nk-nav.nav-tabs"),n=e(n[0]).find('[data-toggle="tab"]'),e(n[0]).tab("show"))})},t.ModeSwitch=function(){var t=e(".dark-switch");a.hasClass("dark-mode")?t.addClass("active"):t.removeClass("active"),t.on("click",function(t){t.preventDefault(),e(this).toggleClass("active"),a.toggleClass("dark-mode")})},t.Knob=function(t,n){var a,i;e(t).exists()&&"function"==typeof e.fn.knob&&(a={min:0},i=n?d(a,n):a,e(t).each(function(){e(this).knob(i)}))},t.Knob.init=function(){t.Knob(".knob",{readOnly:!0,lineCap:"round"}),t.Knob(".knob-half",{angleOffset:-90,angleArc:180,readOnly:!0,lineCap:"round"})},t.Range=function(n,a){e(n).exists()&&"undefined"!=typeof noUiSlider&&e(n).each(function(){var n=(f=e(this)).attr("id"),i=f.data("start"),o=(i=(i=/\s/g.test(i)?i.split(" "):i)||0,f.data("connect")),s=(o=void 0===(o=/\s/g.test(o)?o.split(" "):o)?"lower":o,(s=f.data("min"))||0),r=(r=f.data("max"))||100,c=(c=f.data("min-distance"))||null,l=(l=f.data("max-distance"))||null,u=(u=f.data("step"))||1,p=(p=f.data("orientation"))||"horizontal",f=(f=f.data("tooltip"))||!1;console.log(f),n=document.getElementById(n),f={start:i,connect:o,direction:t.State.isRTL?"rtl":"ltr",range:{min:s,max:r},margin:c,limit:l,step:u,orientation:p,tooltips:f},f=a?d(f,a):f,noUiSlider.create(n,f)})},t.Range.init=function(){t.Range(".form-control-slider"),t.Range(".form-range-slider")},t.Select2.init=function(){t.Select2(".form-select")},t.Slick=function(n,a){e(n).exists()&&"function"==typeof e.fn.slick&&e(n).each(function(){var n={prevArrow:'<div class="slick-arrow-prev"><a href="javascript:void(0);" class="slick-prev"><em class="icon ni ni-chevron-left"></em></a></div>',nextArrow:'<div class="slick-arrow-next"><a href="javascript:void(0);" class="slick-next"><em class="icon ni ni-chevron-right"></em></a></div>',rtl:t.State.isRTL};n=a?d(n,a):n,e(this).slick(n)})},t.Slider.init=function(){t.Slick(".slider-init")},t.Lightbox=function(t,n,a){e(t).exists()&&e(t).each(function(){var t={};t="video"==n||"iframe"==n?{type:"iframe",removalDelay:160,preloader:!0,fixedContentPos:!1,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass=this.st.el.attr("data-effect")}}}:"content"==n?{type:"inline",preloader:!0,removalDelay:400,mainClass:"mfp-fade content-popup"}:{type:"image",mainClass:"mfp-fade image-popup"},t=a?d(t,a):t,e(this).magnificPopup(t)})},t.Control=function(t){document.querySelectorAll(t).forEach(function(t,e,n){t.checked&&t.parentNode.classList.add("checked"),t.addEventListener("change",function(){"checkbox"==t.type&&(t.checked?t.parentNode.classList.add("checked"):t.parentNode.classList.remove("checked")),"radio"==t.type&&(document.querySelectorAll('input[name="'+t.name+'"]').forEach(function(t,e,n){t.parentNode.classList.remove("checked")}),t.checked&&t.parentNode.classList.add("checked"))})})},t.NumberSpinner=function(t,e){var n=document.querySelectorAll("[data-number='plus']"),a=document.querySelectorAll("[data-number='minus']");n.forEach(function(t,e,a){n[e].parentNode,n[e].addEventListener("click",function(){var t=n[e].parentNode.children;t.forEach(function(e,n,a){var i,o,s;t[n].classList.contains("number-spinner")&&(i=""==!t[n].value?parseInt(t[n].value):0,o=""==!t[n].step?parseInt(t[n].step):1,s=""==!t[n].max?parseInt(t[n].max):1/0,t[n].value=i+o<s+1?i+o:i)})})}),a.forEach(function(t,e,n){a[e].parentNode,a[e].addEventListener("click",function(){var t=a[e].parentNode.children;t.forEach(function(e,n,a){var i,o,s;t[n].classList.contains("number-spinner")&&(i=""==!t[n].value?parseInt(t[n].value):0,o=""==!t[n].step?parseInt(t[n].step):1,s=""==!t[n].min?parseInt(t[n].min):0,t[n].value=s-1<i-o?i-o:i)})})})},t.OtherInit=function(){t.ClassBody(),t.PassSwitch(),t.CurrentLink(),t.LinkOff(".is-disable"),t.ClassNavMenu(),t.SetHW("[data-height]","height"),t.SetHW("[data-width]","width"),t.NumberSpinner(),t.Lightbox(".popup-video","video"),t.Lightbox(".popup-iframe","iframe"),t.Lightbox(".popup-image","image"),t.Lightbox(".popup-content","content"),t.Control(".custom-control-input")},t.Ani.init=function(){t.Ani.formElm(".form-control-outlined"),t.Ani.formSearch(".toggle-search")},t.BS.init=function(){t.BS.menutip("a.nk-menu-link"),t.BS.tooltip(".nk-tooltip"),t.BS.tooltip(".btn-tooltip",{placement:"top"}),t.BS.tooltip('[data-toggle="tooltip"]'),t.BS.tooltip(".tipinfo,.nk-menu-tooltip",{placement:"right"}),t.BS.popover('[data-toggle="popover"]'),t.BS.progress("[data-progress]"),t.BS.fileinput(".custom-file-input"),t.BS.modalfix(),t.BS.ddfix(),t.BS.tabfix()},t.Picker.init=function(){t.Picker.date(".date-picker"),t.Picker.dob(".date-picker-alt"),t.Picker.time(".time-picker"),t.Picker.date(".date-picker-range",{todayHighlight:!1,autoclose:!1})},t.Addons.Init=function(){t.Knob.init(),t.Range.init(),t.Select2.init(),t.Dropzone.init(),t.Slider.init(),t.DataTable.init()},t.TGL.init=function(){t.TGL.content(".toggle"),t.TGL.expand(".toggle-expand"),t.TGL.expand(".toggle-opt",{toggle:!1}),t.TGL.showmenu(".nk-nav-toggle"),t.TGL.ddmenu("."+o+"-toggle",{self:o+"-toggle",child:o+"-sub"})},t.BS.modalOnInit=function(){e(".modal").on("shown.bs.modal",function(){t.Select2.init(),t.Validate.init()})},t.init=function(){t.coms.docReady.push(t.OtherInit),t.coms.docReady.push(t.Prettify),t.coms.docReady.push(t.ColorBG),t.coms.docReady.push(t.ColorTXT),t.coms.docReady.push(t.Copied),t.coms.docReady.push(t.Ani.init),t.coms.docReady.push(t.TGL.init),t.coms.docReady.push(t.BS.init),t.coms.docReady.push(t.Validate.init),t.coms.docReady.push(t.Picker.init),t.coms.docReady.push(t.Addons.Init),t.coms.docReady.push(t.Wizard),t.coms.docReady.push(t.sbCompact),t.coms.winLoad.push(t.ModeSwitch)},t.init()}(NioApp,jQuery);s