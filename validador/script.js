import { registros, link } from './links_cofepris.js';

function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

var hash = getUrlVars()['hash'];

var url = "https://script.google.com/macros/s/AKfycbzybQhQU8p9iLM3QyPe3LS6iC6hhvzXjLZPTjBr2zbh39Dy0xGe2bhzCr4O3_yrBTHZ/exec?callback=ctrlq&id="+hash;
	   
$.getJSON(url, function (data) {
	if(data.encontrado === "True"){
		$('#hash').text("hash: "+data.hash);
		$('#folio').text(data.folio);
		$('#cliente-v').text(data.cliente);
		$('#domicilio-v').text(data.domicilio);
		$('#localidad-v').text(data.localidad);
		$('#fecha-v').text(data.fecha);
		$('#tratamiento-v').html(`${data.tratamiento}</br><a id="tratamiento-link-value" target=_blank>Ver registro</a>`);
		let l = "#";
		for(let i = 0; i < registros.length; i++){
			if(data.tratamiento.includes(registros[i]))
			{
				l = link + registros[i];
				break;
			}
		}
		$('#tratamiento-link-value').attr("href", l);
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
