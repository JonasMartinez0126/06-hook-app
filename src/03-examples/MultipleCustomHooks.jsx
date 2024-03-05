import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}/`);

    return (
        <>
            <h1>Pokemons</h1>
            <hr />

            {
                isLoading ? (
                    <div className='alert alert-info text-center'>Loading...</div>
                ) : (
                    <div className="card my-card" >
                        <img src={data?.sprites?.other?.home?.front_default} className="card-img-top" alt={data?.name} />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase text-end">{data?.name}</h5>
                            </div>
                    </div>
                )
            }

            <button
                disabled={ isLoading } 
                className="btn btn-primary mt-3" 
                onClick={() =>increment(1)}>Next Pokemon</button>
        </>
    )
}
