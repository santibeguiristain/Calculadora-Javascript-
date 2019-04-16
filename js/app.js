 
//*********************************************************************************************************** 
//DECLARACIO DE VARIABLES 
//***********************************************************************************************************
var display=document.getElementById("display").innerHTML;
 
var mas = document.getElementById('mas');
var menos = document.getElementById('menos');
var on = document.getElementById('on');
var sign = document.getElementById('sign');
var raiz = document.getElementById('raiz');
var dividido = document.getElementById('dividido');
var por = document.getElementById('por');
var punto = document.getElementById('punto');
var igual = document.getElementById('igual');

var numSiete = document.getElementById('7');
var numOcho = document.getElementById('8');
var numNueve = document.getElementById('9');
var numCuatro = document.getElementById('4');
var numCinco = document.getElementById('5');
var numSeis = document.getElementById('6');
var numUno = document.getElementById('1');
var numDos = document.getElementById('2');
var numTres = document.getElementById('3');
var numCero = document.getElementById('0');
 


var valor1=0;
var valor2=0;


//*********************************************************************************************************** 
//EVENTOS EVENT_LISTENER
//*********************************************************************************************************** 
 

 


on.addEventListener('click', function() {   
    presionarBoton("on");
})

sign.addEventListener('click', function() {   
    presionarBoton("sign");
})

raiz.addEventListener('click', function() {   
    presionarBoton("raiz");
})

dividido.addEventListener('click', function() {   
   presionarBoton("dividido");
})

por.addEventListener('click', function() {   
   presionarBoton("por");
})


punto.addEventListener('click', function() {   
    presionarBoton("punto");
})

 
igual.addEventListener('click', function() 
  {  presionarBoton("igual");})
 

 mas.addEventListener('click', function() {   
  
  presionarBoton("mas");
})
  
 
menos.addEventListener('click', function() {   
    presionarBoton("menos");
})
        



numSiete.addEventListener('click', function() {   

    presionarBoton(7);
})

 numOcho.addEventListener('click', function() {   
    presionarBoton(8);
})

numNueve.addEventListener('click', function() {   
    presionarBoton(9);
})

numCuatro.addEventListener('click', function() {   
   presionarBoton(4);
})

numCinco.addEventListener('click', function() {   
   presionarBoton(5);
})


numSeis.addEventListener('click', function() {   
    presionarBoton(6);
})

numUno.addEventListener('click', function() {   
  presionarBoton(1);
})
 

 numDos.addEventListener('click', function() {   
  presionarBoton(2);
})

 numTres.addEventListener('click', function() {   
    presionarBoton(3);
})
     

numCero.addEventListener('click', function() {   
    presionarBoton(0);
})
      
 






//*********************************************************************************************************** 
//FUNCIONES
//***********************************************************************************************************
function presionarBoton(operacion) {
    
    var resultado;
    display=document.getElementById("display").innerHTML;
   

  if (operacion == 7)
   {
      resultado=7;
      ImprimirEnPantalla(resultado,operacion);

  }else  if (operacion == 8)
   {
      resultado=8;
      ImprimirEnPantalla(resultado,operacion);
  }else  if (operacion == 9)
   {
      resultado=9;
      ImprimirEnPantalla(resultado,operacion);
  }else  if (operacion == 4)
   {
      resultado=4;
      ImprimirEnPantalla(resultado,operacion);
  }else  if (operacion == 5)
   {
      resultado=5;
      ImprimirEnPantalla(resultado,operacion);
  }else  if (operacion == 6)
   {
      resultado=6;
      ImprimirEnPantalla(resultado,operacion);
  }else  if (operacion == 1)
   {
      resultado=1;
      ImprimirEnPantalla(resultado,operacion);
  }else  if (operacion == 2)
   {
      resultado=2;
      ImprimirEnPantalla(resultado,operacion);
  }
  else  if (operacion == 3)
   {
      resultado=3;
      ImprimirEnPantalla(resultado,operacion);
  }
 else  if (operacion == 0)
   {
      resultado=0;
      ImprimirEnPantalla(resultado,operacion);
  }





  else if(document.getElementById("display").innerHTML == "OFF")
  {
      document.getElementById("display").innerHTML="";
      resultado=0;
      //--LIMPIAR SESSIONES
  }
  else  if (operacion == "on")
  {
      if(document.getElementById("display").innerHTML != "")
      {
       resultado= 0;
       sessionStorage.setItem("op",resultado);  
       document.getElementById("display").innerHTML = resultado;
       
    }
  }

  else if (operacion == "sign"){
    
      sessionStorage.setItem("valor1",document.getElementById("display").innerHTML);  
      realizarOperacion("sign");

  }
  
  else if (operacion == "dividido")
  {
     sessionStorage.setItem("valor1",document.getElementById("display").innerHTML);  
      document.getElementById("display").innerHTML ="";
      resultado= "/";
      sessionStorage.setItem("op",resultado);  
       
     // document.getElementById("display").innerHTML =resultado; 
  }
   else if (operacion == "por")
  {
     sessionStorage.setItem("valor1",document.getElementById("display").innerHTML);  
      document.getElementById("display").innerHTML ="";
      resultado= "*";
      sessionStorage.setItem("op",resultado);  
       
      //document.getElementById("display").innerHTML =resultado; 
  }
   else if (operacion == "raiz")
  {
      sessionStorage.setItem("valor1",document.getElementById("display").innerHTML);  
      realizarOperacion("raiz");   
  }

  else if (operacion == "punto")
  {
      resultado= ".";
       if (ComprobarExistenciaPunto() == true)
        {
          document.getElementById("display").innerHTML =document.getElementById("display").innerHTML+ resultado; 
        }
  }
  else if (operacion == "menos")
  {   
    
      //valor 1 
      sessionStorage.setItem("valor1",document.getElementById("display").innerHTML);  
      document.getElementById("display").innerHTML ="";
      resultado= "-";
      sessionStorage.setItem("op",resultado);  
       
       //document.getElementById("display").innerHTML =resultado; 
  }
  else if (operacion == "mas")
  {   
      //valor 1 
      sessionStorage.setItem("valor1",document.getElementById("display").innerHTML);  
      document.getElementById("display").innerHTML ="";
      resultado= "+";
      sessionStorage.setItem("op",resultado);  
       
       //document.getElementById("display").innerHTML =resultado; 
  }
 
   else if (operacion == "igual")
   {
      sessionStorage.setItem("valor2",document.getElementById("display").innerHTML);
      document.getElementById("display").innerHTML ="";
     
      var operacionElegida = sessionStorage.getItem("op");  
      realizarOperacion(operacionElegida);
   }
 }
 
 

function realizarOperacion(operacionElegida)
{
    var valor1  = parseFloat(sessionStorage.getItem("valor1"));   
    var valor2 = parseFloat(sessionStorage.getItem("valor2"));   


    var resultadoOp=0;

    if(operacionElegida == "+")
     {
        sumar(valor1,valor2);
     }     
     else if (operacionElegida == "-")
     {
        restar(valor1,valor2);
     }     
      else if (operacionElegida == "*")
     {
        multiplicar(valor1,valor2);
     }     
      else if (operacionElegida == "/")
     {
        dividir(valor1,valor2);
     }     
      else if (operacionElegida == "sign")
     {
        calcularSign(valor1);
     }     
      else if (operacionElegida == "raiz")
     {
        calcularRaiz(valor1);  
     }     
       ImprimirEnPantalla(parseFloat(sessionStorage.getItem("resultadoOperacion")),operacionElegida);     
}
 

  

 function sumar(valor1,valor2)
 {
     resultadoOp = valor1 + valor2; 
     sessionStorage.setItem("resultadoOperacion",resultadoOp);  
 }
  function restar(valor1,valor2)
 {
     resultadoOp = valor1 - valor2; 
     sessionStorage.setItem("resultadoOperacion",resultadoOp);  
 }
  function dividir(valor1,valor2)
 {
    if (valor2 == 0)
    {
      alert("No se puede dividir entre cero");
    }
    else
    {
       resultadoOp = valor1 / valor2; 
       sessionStorage.setItem("resultadoOperacion",resultadoOp);  
    }
 }
  
  function multiplicar(valor1,valor2)
 {
     resultadoOp = valor1 * valor2; 
     sessionStorage.setItem("resultadoOperacion",resultadoOp);  
 }
  function calcularSign(valor1)
 {
 
     resultadoOp = valor1 * -1; 
     sessionStorage.setItem("resultadoOperacion",resultadoOp);  

 }
 
 
 
 function calcularRaiz(valor1)
 {
     resultadoOp = Math.sqrt(valor1).toFixed(8); 
     sessionStorage.setItem("resultadoOperacion",resultadoOp);  
 }




 function ImprimirEnPantalla(resultado,operacion)
 {
  var  resultado=resultado;
  var operacion = operacion;
  var imprimir;
  var r=0;


   for (i = 0; i < resultado.length; i++) {
        
           if (cadena[i] == "." ) 
            {
                return false;
            }
    }
      
     display=document.getElementById("display").innerHTML;
   

      if ((display == "0") && (resultado == 0 || resultado ==""))
      {
        
        document.getElementById("display").innerHTML ="0";  
      }
      else if (display == "0" &&  resultado != "0")
      {

        document.getElementById("display").innerHTML =resultado;  
      }
      else if (operacion == "sign")
      {
         document.getElementById("display").innerHTML =resultado;  
      }
      else
      {
        imprimir=document.getElementById("display").innerHTML + resultado;

        if(imprimir.length > 8)
        {
          r=imprimir.toFixed(8);
        }else
        {
          r =imprimir;
        }
        document.getElementById("display").innerHTML = r;
      }
       
 }



function ComprobarExistenciaPunto()
{
    var cadena = document.getElementById("display").innerHTML.toUpperCase();
    var salida = '';
    for (i = 0; i < cadena.length; i++) {
        
           if (cadena[i] == ".") 
            {
                return false;
            }
    }
    return true; 
}

 