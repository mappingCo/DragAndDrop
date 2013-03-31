function iniciar(){
  var imagenes=document.querySelectorAll('#cajaimagenes > img');
  for(var i=0; i<imagenes.length; i++){
    imagenes[i].addEventListener('dragstart', arrastrado, false);
    //imagenes[i].addEventListener('dragend', finalizado, false);
  }
  lienzoA=document.getElementById('DarkSideCanvas');
  lienzoB=document.getElementById('RevelSideCanvas');
 
  lienzoB.addEventListener('dragenter', function(e){ e.preventDefault(); }, false);
  lienzoA.addEventListener('dragenter', function(e){ e.preventDefault(); }, false);
  lienzoA.addEventListener('dragover', function(e){ e.preventDefault(); }, false);
  lienzoB.addEventListener('dragover', function(e){ e.preventDefault(); }, false);
  lienzoA.addEventListener('drop', comprobar, false);
  lienzoB.addEventListener('drop', comprobar, false);
}

function arrastrado(e){
  elemento=e.target;
  e.dataTransfer.setData('Text', elemento.getAttribute('id'));
  e.dataTransfer.setDragImage(e.target, 0, 0);
}
function comprobar(e){
  e.preventDefault();

  id=e.dataTransfer.getData('Text');
  elemento=document.getElementById(id);
  //
  lado = $("#" + id).attr('alt'); 
  box = $(event.target).attr('id');  
  if(box == 'DarkSideCanvas') { 
    if(lado == 'dark') {
      lienzo=document.getElementById('DarkSideCanvas');
      $("#texto").html("Bienvenido al lado oscuro")
      dibujar();
    }
    else {
      $("#texto").html("maaaaaaaaaal, aqui van los malos");
    }
  }  
  if(box == 'RevelSideCanvas') {  
    if(lado == 'revel')  {
      lienzo=document.getElementById('RevelSideCanvas');
      $("#texto").html("que la fuerza sea contigo")

      dibujar();
    }
    else  {
       $("#texto").html("maaaaaaaaaal, aqui van los buenos");
    }      
  }  
}

function dibujar(e){
  contexto=lienzo.getContext('2d');
  if (id=="solo" || id=="maul") {
    var posx=10;
    var posy=10;
  }
  else {
    var posx=170;
    var posy=10;
  }
  $("#" + id).remove();

  
  
  contexto.drawImage(elemento,posx,posy,120,120);
}

window.addEventListener('load', iniciar, false);
