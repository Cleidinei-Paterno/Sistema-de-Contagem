let numeroAlunos = 5;

for(let contador = 0; contador < numeroAlunos; contador++) {
    //console.log(contador);
    if(contador == 0) {
        console.log(contador + ": Zero");
    } else if (contador % 2 == 1) {
        console.log(`${contador}: Ímpar`);
    } else {
        console.log(`${contador}: Par`)
    }
}