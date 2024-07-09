import { UserContext } from "./UserContext";

/*const user = {
    id: 123,
    name: 'Test 01',
    email: 'test01@test.com'
}*/

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{  user, setUser }}>
            { children }
        </UserContext.Provider>
    );
}