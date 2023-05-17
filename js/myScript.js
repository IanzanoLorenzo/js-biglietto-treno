let km = parseInt(prompt('Quanti km percorrerai?'))
let age = parseInt(prompt('Quanti anni hai?'))

if (isNaN(km) || isNaN(age)){
    alert('I valori devono essere dei numeri')
    throw new Error('I valori devono essere dei numeri')
}

let price = km * 0.21

console.log(price)

if (age < 18){
    price = (price * 0.80).toFixed(2);
}
else if (age > 65){
    price = (price * 0.60).toFixed(2);
}

document.getElementById('content').innerHTML = `Il prezzo del tuo biglietto è ${price}&euro;`;

console.log(km)
console.log(age)
console.log(price)