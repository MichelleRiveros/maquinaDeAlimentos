let productos = { "A": 270, "B": 340, "C": 390};

let menu = "Menu\n"; /* Se declaro una variable y se inicializo como tipo texto que esta vacia */

for ( let producto /* (la variable es como una i) */ in productos){
    menu += `${producto} --- ${productos[producto]}\n`;}

let opcion = prompt(menu).toUpperCase(); 

let dineroIngresado = 0;

while (dineroIngresado < productos[opcion]){

    let seleccion = Number(prompt("Cuanto dinero deseas ingresar?\n 1.  10\n2. 50\n3. 100"));

    switch(seleccion) {
        case 1: 
            dineroIngresado = dineroIngresado + 10;
            alert(dineroIngresado);
            break;
        
        case 2:
            dineroIngresado = dineroIngresado + 50;
            alert(dineroIngresado);
            break;
    
        case 3: 
            dineroIngresado = dineroIngresado + 100;
            alert(dineroIngresado);
            break;
    
        default:
            alert("Opción no válida");
    }
} 

let dineroRestante = (dineroIngresado - productos[opcion]);
/* 
let monedas10 = (Math.floor(dineroRestante/10));  
let monedas50 = (Math.floor(dineroRestante/50));  
let monedas100 = (Math.floor(dineroRestante/100));  
 */
let mostrarvueltos = "Sus vueltos son\n"

while (dineroRestante > 0){

    if ((Math.floor(dineroRestante/100)) > 0){
        mostrarvueltos += `100\n`;
        dineroRestante = (dineroRestante - 100);
    }

    else if ((Math.floor(dineroRestante/50)) > 0){
        mostrarvueltos += `50\n`;
        dineroRestante = (dineroRestante - 50);
    }

    else if ((Math.floor(dineroRestante/10)) > 0){
        mostrarvueltos += `10\n`;
        dineroRestante = (dineroRestante - 10);
    }
}

alert(mostrarvueltos);