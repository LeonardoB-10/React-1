import { useState } from "react";

export const useCounter = () => {

    const [counter, setCounter] = useState(1);

    const incrementar = (valor = 1) => {
        setCounter(counter + valor);
    }

    const descrementar = (valor = 1) => {
        if (counter<=0) return;
        setCounter(counter - valor);
    }

    const reiniciar = (valor = 0) => {
        if (counter<=0) return;
        setCounter(valor);
    }

    return {
        counter,
        incrementar,
        descrementar,
        reiniciar
    }
    
}