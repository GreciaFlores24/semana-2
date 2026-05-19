function votar(){
    let edad = parseInt(document.getElementById('edad').value);

    if(edad >= 18){
        resultado.innerHTML = 'La persona puede votar';
    }else{
        resultado.innerHTML = 'La persona NO puede votar';
    }
}

function sueldo(){
    let horas = parseFloat(document.getElementById('horas').value);
    let pago = parseFloat(document.getElementById('pago').value);
    let total;

    if(horas > 40){
        total = (40 * pago) + ((horas - 40) * pago * 2);
    }else{
        total = horas * pago;
    }

    resultado.innerHTML = 'Sueldo semanal: $' + total;
}

function regalo(){
    let dinero = parseFloat(document.getElementById('dinero').value);

    if(dinero <= 10){
        resultado.innerHTML = 'Puede comprar una tarjeta';
    }else if(dinero <= 100){
        resultado.innerHTML = 'Puede comprar chocolates';
    }else if(dinero <= 250){
        resultado.innerHTML = 'Puede comprar flores';
    }else{
        resultado.innerHTML = 'Puede comprar un anillo';
    }
}

function estacionamiento(){
    let total = 0;

    for(let i=1; i<=horas; i++){
        if(i <= 2){
            total += 5;
        }else if(i <= 5){
            total += 4;
        }else if(i <= 10){
            total += 3;
        }else{
            total += 2;
        }
    }

    resultado.innerHTML = 'Total a pagar: $' + total;
}

function menorEdad(){
    let nombre1 = document.getElementById('nombre1').value;
    let edad1 = parseInt(document.getElementById('edad1').value);

    let nombre2 = document.getElementById('nombre2').value;
    let edad2 = parseInt(document.getElementById('edad2').value);

    let nombre3 = document.getElementById('nombre3').value;
    let edad3 = parseInt(document.getElementById('edad3').value);

    let menor = edad1;
    let nombre = nombre1;

    if(edad2 < menor){
        menor = edad2;
        nombre = nombre2;
    }

    if(edad3 < menor){
        menor = edad3;
        nombre = nombre3;
    }

    resultado.innerHTML = 'La persona menor es ' + nombre + ' con ' + menor + ' años';
}

function descuento(){
    let precio = parseFloat(document.getElementById('precio').value);
    let desc;

    if(precio >= 200){
        desc = precio * 0.15;
    }else if(precio > 100){
        desc = precio * 0.12;
    }else{
        desc = precio * 0.10;
    }

    resultado.innerHTML = 'Descuento: $' + desc + '<br>Total: $' + (precio-desc);
}