import { useEffect, useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {
    const [formState, setformState] = useState({
        username: 'user',
        email: 'user@test.com'
    });

    const { username, email } = formState;

    const onInputchange = ({ target }) => {
        const { name, value } = target;

        setformState({
            ...formState,
            [ name ]: value
        })
    }
    // sirve para disparar efectos secundarios
    useEffect(() => {
      //console.log("useEffect call");
    }, [])//arreglo vacio solo se disparar una vez
    
    useEffect(() => {
        //console.log("formState changed");
    }, [formState]);

    useEffect(() => {
        //console.log("Email changed");
    }, [email])
    

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputchange }
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ onInputchange }
            />

            {
                (username == 'user') && <Message /> 
            }
        </>
    )
}
