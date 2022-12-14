import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { LoadingQuote, Quote } from './';

const MultipleCustonHooks = () => {
    const { counter,  incrementar } = useCounter();
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];
    
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                isLoading
                 ? <LoadingQuote />
                 : <Quote author={ author } quote={ quote } />
            }  
            <button 
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => incrementar() }>
                Next quote
            </button>
        </>
    )
}

export default MultipleCustonHooks


