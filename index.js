let age = 30;
const name = 'Bram';
const totalAmount = 120;

if (age >= 18) {
    console.log('Jouw leeftijd is 18 of ouder, jij mag naar binnen')
} else {
    console.log('Jouw leeftijd is onder de 18, jj mag niet naar binnen')
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
}

if (name == 'Sarah' || name == 'Bram') {
    console.log('Je krijgt een gratis biertje')
}

if (totalAmount > 25 && totalAmount <=50) {
    console.log('Je krijgt gratis Bitterballen')
}

if (totalAmount > 50 && totalAmount <=100) {
    console.log('Je krijgt gratis Nachos')
}

if (totalAmount > 100) {
    console.log('Je krijgt gratis champagne')
}