import { useState } from "react"

const Register = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSignup = () => {
        fetch('/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userName,
                password: password
            })
        }).then((res) => {
            if(res.ok){
                console.log("User registration success.");
            } else {
                console.log("User registration error.");
            }
        }).catch(e => {
            console.log(e.message);
        })
    }
    
    return (
        <div>
            <h2>Sign Up</h2>
            <input type="text" placeholder="username" value = {userName} onChange={(e) => setUserName(e.target.value)}/>
            <input type="password" placeholder="password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSignup}>Sign up</button>
        </div>
    )
}

export default Register