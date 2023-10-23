import React,{ useState, useContext } from "react";

import UserContext from "../Context/UserContext";

function Login(){

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})}
    const [userName, setUserName] = useState('')
    const [password , setPassword] = useState('')
    
    return(
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="UserName"
            value={userName} 
            onChange={(e)=> setUserName(e.target.value)}/>
            {" "}
            <input type="text" placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)} />
            {" "}
            <button onClick={handleSubmit}>Submit</button>
        </div>

    )
}

export default Login