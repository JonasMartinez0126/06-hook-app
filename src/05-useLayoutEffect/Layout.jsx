
import { useFetch, useCounter } from '../hooks'
import { Card } from './Card';

export const Layout = () => {
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
                    <Card image={data?.sprites?.other?.home?.front_default} name={data?.name} />
                )
            }

            <button
                disabled={ isLoading } 
                className="btn btn-primary mt-3" 
                onClick={() =>increment(1)}>Next Pokemon</button>
        </>
    )
}
