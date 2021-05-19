function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

var hash = getUrlVars()['hash'];

var url = "https://script.google.com/macros/s/AKfycbxE6KlxT3yUQ8xOVpSkZdJX3JxjAa_XQR1hWwYmFt4tsDHSEJ4/exec?callback=ctrlq&id="+hash;

$.getJSON(url, function (data) {
	if(data.encontrado === "True"){
		$('#hash').text("hash: "+data.hash);
		$('#folio').text(data.folio);
		$('#cliente-v').text(data.cliente);
		$('#domicilio-v').text(data.domicilio);
		$('#localidad-v').text(data.localidad);
		$('#fecha-v').text(data.fecha);
		$('#tratamiento-v').text(data.tratamiento);
		$('#areas-v').text(data.areas);	
	}
	else if(data.encontrado === "Expired"){
		$('#hash').text("hash: "+data.hash);
		$('#folio').text(data.folio);
		$('#cliente-v').text(data.cliente);
		$('#domicilio-v').text(data.domicilio);
		$('#localidad-v').text(data.localidad);
		$('#fecha-v').text(data.fecha);
		$('#tratamiento-v').text(data.tratamiento);
		$('#areas-v').text(data.areas);
		$('#valido').toggleClass('invisible');
		$('#invalido').toggleClass('invisible');
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
