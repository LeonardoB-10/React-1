
const contaDigitos = (dato) =>{
    if (dato > 0) {
        const numString = dato.toString().length;  
        return  `El numero tience ${numString} cifras`;
    }
    return 'Numero menor que 0';
    
}
