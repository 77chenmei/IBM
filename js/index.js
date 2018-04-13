
$(document).ready(function(){
	$(window).resize(function(){
		if($(window).width()>1056 +'px'){
	   		!(function(doc, win) {
		    var docEle = doc.documentElement,
		        evt = "onorientationchange" in window ? "orientationchange" : "resize",
		        fn = function() {
		            var width = docEle.clientWidth;
		            width && (docEle.style.fontSize = 20 * (width / 1136) + "px");
		        }; 
		    	win.addEventListener(evt, fn, false);
		   		doc.addEventListener("DOMContentLoaded", fn, false);
			}(document, window));
		}
		if($(window).width()<1056 +'px' && $(window).width()>640+'px'){
			!(function(doc, win) {
		    var docEle = doc.documentElement,
		        evt = "onorientationchange" in window ? "orientationchange" : "resize",
		        fn = function() {
		            var width = docEle.clientWidth;
		            width && (docEle.style.fontSize = 20 * (width / 1056) + "px");
		        }; 
		    	win.addEventListener(evt, fn, false);
		   		doc.addEventListener("DOMContentLoaded", fn, false);
			}(document, window));
		}
		if($(window).width()<640 +'px'){
			!(function(doc, win) {
		    var docEle = doc.documentElement,
		        evt = "onorientationchange" in window ? "orientationchange" : "resize",
		        fn = function() {
		            var width = docEle.clientWidth;
		            width && (docEle.style.fontSize = 20 * (width / 640) + "px");
		        }; 
		    	win.addEventListener(evt, fn, false);
		   		doc.addEventListener("DOMContentLoaded", fn, false);
			}(document, window));
		}
	})	
   
})