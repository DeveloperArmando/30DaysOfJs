//Usando console.log() imprima la siguiente declaración:
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote 'There is no exercise better for the heart than reaching down\
 and lifting people up.' by John Holmes teaches us to help one another.");
//Usando console.log() imprima la siguiente cita de la Madre Teresa:
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. \
Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');
//Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
console.log(typeof '10' === 10);
console.log(typeof Number('10') == typeof 10);
//Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
console.log(parseFloat('9.8') === 10);
console.log(Math.ceil(parseFloat('9.8')) == 10);
//Verifique si 'on' se encuentra tanto en Python como en la jerga
console.log('Python'.includes('on'));
console.log('jargon'.includes('on'));
//Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.
console.log('Espero que este curso no esté lleno de jerga.'.includes('jargon'));
//Genere un número aleatorio entre 0 y 100 inclusive.
console.log(Math.floor(Math.random() * 101));
//Genere un número aleatorio entre 50 y 100 inclusive.
console.log(Math.floor(Math.random() * 51) + 50);
//Genere un número aleatorio entre 0 y 255 inclusive.
console.log(Math.floor(Math.random() * 256));
//Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
console.log('JavaScript'[Math.floor(Math.random() * 'JavaScript'.length)]);
//Use console.log() y caracteres de escape para imprimir el siguiente patrón.
//1 1 1 1 1
//2 1 2 4 8
//3 1 3 9 27
//4 1 4 16 64
//5 1 5 25 125
console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125');
//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.substr(31, 23));