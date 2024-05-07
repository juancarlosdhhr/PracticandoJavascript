const x=10;   /* Esto es un SCOPE GLOBAL */

if (x) {        /* Esto es un bloque de ejecución. Se trata de un SCOPE LOCAL*/
const y = 5;
console.log(y);
console.log(x);
}

console.log(x);
/* NO console.log(y) */