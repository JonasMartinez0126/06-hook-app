import { useForm } from "../hooks";


export const FormWithCustomHook = () => {
    
    const { formState, onInputchange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    //const { username, email, password } = formState; 

    return (
        <>
            <h1>Form With Custom Hook</h1>
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
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={ password }
                onChange={ onInputchange }
            />

            <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>
        </>
    )
}
