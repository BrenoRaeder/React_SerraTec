import { 
    ContainerLogin,
    Form,
} from './style.js';
import { useState } from 'react';
import { api } from '../../services/api.js'
import { setLocal, getLocal } from '../../services/localStorage.js'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    async function logar() {
        console.log(username + ' - ' + password);
        await api.post('/auth/signin', {
            username: username,
            password: password,
        }).then((response) => {
            console.log(getLocal('token'));
            setLocal('token', response.data.accessToken);
            
        }).catch((err) => {
            console.log(err);
            setLocal('token', 'null');
        })
    }

    return (
       <ContainerLogin>
            <Form>
                <label htmlFor="#username">Username</label>
                <input 
                    id="username" 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="#password">Password</label>
                <input
                    type="password"
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />  
                
            </Form>
            <button onClick={() => logar()}>Login</button>
       </ContainerLogin> 
    )
}

export default Login;