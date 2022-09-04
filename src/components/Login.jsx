import { useDispatch } from "react-redux"
import {login,logout} from "../slices/userSlice"

function Login(){
    const dispatch = useDispatch();
    let user ={
        name:"Arnav",
        email:"arnav@mclarencollege.in",
        location:"India",
    }
    return (
        <div className="login">
            <button onClick={(e)=>dispatch(login(user))}>Login</button>
            <button onClick={(e)=>dispatch(logout())}>Logout</button>
        </div>
    )
}

export default Login