class Conversor{

}

btnConvertir=document.getElementById('conversorDistancia');
btnConvertir.addEventListener("click",(e)=>{
	conversor= new Conversor;
	conversor.numero1 = document.getElementById("numero1").value;
	conversor.distancia = document.getElementById("distancia").value;
	conversor.kilometro= document.getElementById("kilometro").value;
	conversor.hectometro= document.getElementById("hectometro").value;
	conversor.decametro= document.getElementById("decametro").value;
	conversor.metro= document.getElementById("metro").value;
	conversor.decimetro= document.getElementById("decimetro").value;
	conversor.centimetro= document.getElementById("centimetro").value;
	conversor.milimetro= document.getElementById("milimetro").value;
	conversor.pulgada= document.getElementById("pulgada").value;
	conversor.pie= document.getElementById("pie").value;
	conversor.yarda= document.getElementById("yarda").value;
	conversor.milla= document.getElementById("milla").value;
	let resultado; 
	convertirMetros();
	convertirDistancia();
	agregarTabla();
	 
	ampliarRangos();
	cambiarSlider();
	});

function convertirMetros(){
	switch(conversor.distancia){
		case conversor.kilometro:
			resultado = conversor.numero1*1000; 
		break;
		case conversor.hectometro:
			resultado = conversor.numero1*100; 
		break;
		case conversor.decametro:1
			resultado = conversor.numero1*10; 
		break;
		case conversor.metro:
			resultado = conversor.numero1;
		break;
		case conversor.decimetro:
			resultado = conversor.numero1/10; 
		break;
		case conversor.centimetro: 
			resultado = conversor.numero1/100;
		break;
		case conversor.milimetro:
			resultado = conversor.numero1/1000; 
		break;
		case conversor.pulgada:
			resultado = conversor.numero1*0.0254; 
		break;
		case conversor.pie:
			resultado = conversor.numero1*0.3048; 
		break;
		case conversor.yarda:
			resultado = conversor.numero1*0.9144; 
		break;
		case conversor.milla:
			resultado = conversor.numero1*1609.34; 
		break;
	}
}

let kilometro;
let hectometro;
let decametro;
let metro;
let decimetro;
let centimetro;
let milimetro;
let pulgada;
let pie;
let yarda;
let milla;

function convertirDistancia(){

	kilometro = resultado/1000;
	hectometro = resultado/100;
	decametro = resultado/10;
	metro = resultado;
	decimetro = resultado*10;
	centimetro = resultado*100;
	milimetro = resultado*1000;
	pulgada = resultado/0.0254;
	pie = resultado/0.3048;
	yarda = resultado/0.9144;
	milla = resultado/1609.34;
}

function agregarTabla(){
	let valores = document.querySelectorAll(".valor");
	valores[0].innerHTML=kilometro;
	valores[1].textContent=hectometro;
	valores[2].textContent=decametro;
	valores[3].textContent=metro;
	valores[4].textContent=decimetro;
	valores[5].innerHTML=centimetro;
	valores[6].textContent=milimetro;
	valores[7].textContent=pulgada;
	valores[8].innerHTML=pie;
	valores[9].textContent=yarda;
	valores[10].textContent=milla;
	console.log("entro");
}

function cambiarSlider(){
	document.getElementById("disabledRange").removeAttribute("disabled");
	document.getElementById("marcaSlider").innerHTML=document.getElementById("disabledRange").value;
}
function cambiarMarca(){
	console.log("funciona");
console.log(document.getElementById("disabledRange").value);
document.getElementById("marcaSlider").innerHTML=document.getElementById("disabledRange").value;

conversor.numero1=document.getElementById("disabledRange").value;
convertirMetros();
	convertirDistancia();
	agregarTabla();
}
function ampliarRangos(){
console.log("r es: "+ conversor.numero1);
document.getElementById("disabledRange").max=conversor.numero1*3;
	let rango=document.getElementById("disabledRange");
	rango.value=conversor.numero1;
	 
	console.log("el valor del rango es: "+ document.getElementById("disabledRange").value);
}

btnConvertir=document.getElementById('conversorMasa');
btnConvertir.addEventListener("click",(e)=>{
	conversor= new Conversor;
	conversor.numero3 = document.getElementById("numero3").value;
	conversor.masa1 = document.getElementById("masa1").value;
	conversor.kilogramo= document.getElementById("kilogramo").value;
	conversor.hectogramo= document.getElementById("hectogramo").value;
	conversor.decagramo= document.getElementById("decagramo").value;
	conversor.gramo= document.getElementById("gramo").value;
	conversor.decigramo= document.getElementById("decigramo").value;
	conversor.centigramo= document.getElementById("centigramo").value;
	conversor.miligramo= document.getElementById("miligramo").value;
	conversor.libra= document.getElementById("libra").value;
	conversor.onza= document.getElementById("onza").value;
	conversor.tonelada= document.getElementById("tonelada").value;
	let resultado;
	convertirGramos();
	convertirMasa();
	agregarTabla2();
	cambiarSlider2();
	ampliarRangos2();
	cambiarMarca2();
	
	});

function convertirGramos(){
	switch(conversor.masa1){
		case conversor.kilogramo:
			resultado = conversor.numero3*1000; 
		break;
		case conversor.hectogramo:
			resultado = conversor.numero3*100; 
		break;
		case conversor.decagramo:
			resultado = conversor.numero3*10; 
		break;
		case conversor.gramo:
			resultado = conversor.numero3;
		break;
		case conversor.decigramo:
			resultado = conversor.numero3/10; 
		break;
		case conversor.centigramo: 
			resultado = conversor.numero3/100;
		break;
		case conversor.miligramo:
			resultado = conversor.numero3/1000; 
		break;
		case conversor.libra:
			resultado = conversor.numero3*453.592; 
		break;
		case conversor.onza:
			resultado = conversor.numero3*28.3495; 
		break;
		case conversor.tonelada:
			resultado = conversor.numero3*1000000; 
		break;
	}
}

let kilogramo;
let hectogramo;
let decagramo;
let gramo;
let decigramo;
let centigramo;
let miligramo;
let libra;
let onza;
let tonelada;

function convertirMasa(){

	kilogramo = resultado/1000;
	hectogramo = resultado/100;
	decagramo = resultado/10;
	gramo = resultado;
	decigramo= resultado*10;
	centigramo = resultado*100;
	miligramo= resultado*1000;
	libra = resultado/453.592;
	onza = resultado/28.3495;
	tonelada = resultado/1000000;
}

function agregarTabla2(){
	let valores = document.querySelectorAll(".valor2");
	valores[0].innerHTML=kilogramo;
	valores[1].innerHTML=hectogramo;
	valores[2].innerHTML=decagramo;
	valores[3].innerHTML=gramo;
	valores[4].innerHTML=decigramo;
	valores[5].innerHTML=centigramo;
	valores[6].innerHTML=miligramo;
	valores[7].innerHTML=libra;
	valores[8].innerHTML=onza;
	valores[9].innerHTML=tonelada;
	}

function cambiarSlider2(){
	document.getElementById("disabledRange2").removeAttribute("disabled");
	document.getElementById("marcaSlider2").innerHTML=document.getElementById("disabledRange2").value;
	 
}

function cambiarMarca2(){

document.getElementById("marcaSlider2").innerHTML=document.getElementById("disabledRange2").value;

conversor.numero3=document.getElementById("disabledRange2").value;
convertirGramos();
	convertirMasa();
	agregarTabla2();
}
function ampliarRangos2(){

document.getElementById("disabledRange2").max=conversor.numero3*3;
	let rango=document.getElementById("disabledRange2");
	rango.value=conversor.numero3;
	 
}

btnConvertir=document.getElementById('conversorTiempo');
btnConvertir.addEventListener("click",(e)=>{
	conversor= new Conversor;
	conversor.numero2 = document.getElementById("numero2").value;
	conversor.tiempo1 = document.getElementById("tiempo1").value;
	conversor.año= document.getElementById("año").value;
	conversor.mes= document.getElementById("mes").value;
	conversor.dia= document.getElementById("dia").value;
	conversor.hora= document.getElementById("hora").value;
	conversor.minuto= document.getElementById("minuto").value;
	conversor.segundo= document.getElementById("segundo").value;
	let resultado;
	convertirDias();
	convertirTiempo();
	agregarTabla3();
	cambiarSlider3();
	ampliarRangos3();
	cambiarMarca3();
	});

function convertirDias(){
	switch(conversor.tiempo1){
		case conversor.año:
			resultado = conversor.numero2*365; 
		break;
		case conversor.mes:
			resultado = conversor.numero2*30.4167; 
		break;
		case conversor.dia:
			resultado = conversor.numero2; 
		break;
		case conversor.hora:
			resultado = conversor.numero2/24; 
		break;
		case conversor.minuto:
			resultado = conversor.numero2/1440; 
		break;
		case conversor.segundo:
			resultado = conversor.numero2/86400; 
		break;	
	}
}
let año;
let mes;
let dia;
let hora;
let minuto;
let segundo;

function convertirTiempo(){
	año = resultado/365;
	mes = resultado/30.4167;
	dia = resultado;
	hora = resultado*24;
	minuto= resultado*1440;
	segundo = resultado*86400;
}

function agregarTabla3(){
	let valores = document.querySelectorAll(".valor3");
	valores[0].innerHTML=año;
	valores[1].innerHTML=mes;
	valores[2].innerHTML=dia;
	valores[3].innerHTML=hora;
	valores[4].innerHTML=minuto;
	valores[5].innerHTML=segundo;
	}
function cambiarSlider3(){
	document.getElementById("disabledRange3").removeAttribute("disabled");
	document.getElementById("marcaSlider3").innerHTML=document.getElementById("disabledRange3").value;
	 
}

function cambiarMarca3(){

document.getElementById("marcaSlider3").innerHTML=document.getElementById("disabledRange3").value;

conversor.numero2=document.getElementById("disabledRange3").value;
convertirDias();
	convertirTiempo();
	agregarTabla3();
}
function ampliarRangos3(){

document.getElementById("disabledRange3").max=conversor.numero2*3;
	let rango=document.getElementById("disabledRange3");
	rango.value=conversor.numero2;
}


