import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProviders";


const Signup = () => {

    const user = useContext(AuthContext)
    console.log(user)

    return (
        <div>
            <h2>This is signup page</h2>
        </div>
    );
};

export default Signup;