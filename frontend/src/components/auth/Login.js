import { useState } from "react"
import { Link } from "react-router-dom";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userName,
                password: password
            })
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } 
            throw new Error("Login failed")
        }).then((data) => {
            localStorage.setItem('username', data.username);
            localStorage.setItem('token', data.token);
            console.log("Login Successful!");
        }).catch((e) => {
            console.log(e);
        })
    }

    return (
        <div>
            <input type="text" placeholder="Enter Username" value = {userName} onChange={(e) => setUserName(e.target.value)}/>
            <input type="password" placeholder="Enter Password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
            <Link to='/'>
                <button onClick={handleLogin}>Login</button>
            </Link>
        </div>
    )
}

export default Login