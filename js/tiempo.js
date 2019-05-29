var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
	26,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,
	45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
	var copyArray=array.reverse();
	var porcentaje=0;
	var x1=0;
	var min=60;
	var horas=6;
	var progreso=0;
function cambiar() {
		if(x1>array.length-1)
		{
			x1=0;
			min--;
			var $barra = $('.progress-bar');
				progreso = progreso +0.3;
				var aProgress = parseInt(progreso)
				$barra.attr('aria-valuenow', aProgress);
				$barra.css('width', progreso + '%');
				
				//$(".progress-bar").text(progreso+"%");
				/*if(min==10 || min==0){
					//$("#porcent").text(porcentaje+"%");
					porcentaje=porcentaje+1;
				}*/
				console.log("este es el progereso"+aProgress);
				$("#porcent").text(porcentaje+"%");
				porcentaje=aProgress;
				if(aProgress==100)
				{
					alert("termino tu tiempo quieres volver a intentarlo");
					refresh();
				}
			if(min<=0)
			{
				horas--;
				
				/*var $barra = $('.progress-bar');
				progreso=progreso+3;
				$barra.attr('aria-valuenow', progreso);
				$barra.css('width', progreso + '%');
				$(".progress-bar").text(progreso+"%");
				$("#horas").html(horas);*/
					$("#horas").html(horas);
				//document.getElementById("horas").innerHTML=horas;
				min=60;
				if (horas==0) {
					stop();
				alert(" tu tiempo se termino vuelve a intertar resolver las preguntas");
				refresh();
				}
			}
			//document.getElementById("min").innerHTML=min;
			$("#min").html(min);
		}
		document.getElementById("seg").innerHTML=copyArray[x1];
		x1++;
	var temporizador1=0;
	}
	function play(){
		
		temporizador1=setInterval("cambiar()",1000/60);
	}
	function stop() {
		clearInterval(temporizador1)
	}
	function refresh() {
    location.reload();
	}