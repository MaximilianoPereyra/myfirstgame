
alert("Bienvenido al juego de preguntas de cultura general.")

alert("Ingresa A B o C para responder.")


alert("¿Cual es la capital de España?")

    let pregunta1 = prompt("a)Madrid b)Barcelona c)Sevilla");


        
        if (pregunta1 =="a") {
            alert ("¡Correcto! +10");
            
        }        
            
        else  
        
            alert("¡Incorrecto! -10");
    

alert("¿Cuantos corazones tiene una araña?")
   
    let pregunta2 = prompt("a)2     b)4    c)1");

        if (pregunta2 =="c") {
            alert ("¡Correcto! +10");
            
        }        
            
        else  
        
            alert("¡Incorrecto! -10");



alert("¿Cual es la capital de Estados Unidos?")

    let pregunta3 = prompt("a)Washington b)Chicago  c)Las Vegas");

        if (pregunta3 =="a") {
            alert ("¡Correcto! +10");
            
        }        
            
        else  
        
            alert("¡Incorrecto! -10");


alert("¿Cual es la montaña mas grande del mundo?")
    let pregunta4 = prompt("a)Makalu  b)Everest c) K2 ");
    
        if (pregunta4 =="b") {
            alert ("¡Correcto! +10");
            
        }        
            
        else  
        
            alert("¡Incorrecto! -10");


alert("¿Donde se encuentra la estatua de la libertad?")
    let pregunta5 = prompt("a) Paris b) Toronto c) New York");

        if (pregunta5 =="c") {
            alert ("¡Correcto! +10");
            
        }        
            
        else  
        
            alert("¡Incorrecto! -10");



let puntaje = 0;

if (pregunta1 == "a") {
        
    puntaje += 10;
 
}

    else

        puntaje -= 10; 

        
if (pregunta2 == "c") {
        
    puntaje += 10;
 
}

    else

        puntaje -= 10; 

if (pregunta3 == "a") {
    
        puntaje += 10;
     
}
    
    else
    
    puntaje -= 10;

if (pregunta4 == "b") {
        
        puntaje += 10;
}
        
    else
        puntaje -= 10; 


if (pregunta5 == "c") {

        puntaje += 10;
             
}

    else    
        puntaje -= 10;                

          
          



alert("Tu puntuacion es " + puntaje);
    


