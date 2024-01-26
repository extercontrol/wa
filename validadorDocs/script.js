function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

var hash = getUrlVars()['hash'];

var url = "https://script.google.com/macros/s/AKfycbylDtd0aSuOfdyvbe9fy8LNt7gdRIHxbWjNjD3xrqIjIdRvt4aOpGxuUktySnabx9Md/exec?callback=ctrlq&id="+hash;

$.getJSON(url, function (data) {
	
	if(data.encontrado === "True"){
		$('#hash').text("hash: "+data.hash);
		$('#tipodoc-v').text(data.tipodoc);
		$('#informacion-v').text(data.informacion);
		$('#validez-v').text(data.validez);
	}
	else{
		$('#info-valido').toggleClass('invisible');
		$('#error').toggleClass('invisible');
	}
	$('#loader').css("opacity","0.0");
	$('#loader').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(event) {
	    $('#loader').css("display","none");
	});
});
