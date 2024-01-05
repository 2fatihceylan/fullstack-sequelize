import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';


const Login = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handlePassChange(event){
        setPass(event.target.value);
    }






    function onSubmit(event) {

        event.preventDefault();
    
    

        axios.post('http://localhost:5000/auth/login', 
        {username: name , password: pass},
        { withcredentials: true }).then((response)=>{
            

       

        if(response.data.error){
        if(response.data.error==='User_does_not_exist'){
            console.log('Kullanıcı kayıtlı değil');
        }
        else if(response.data.error==='wrong_password'){
            console.log('Parola yanlış');
        }}
        else{
            console.log('giriş başarılı');
            sessionStorage.setItem('access-token', response.data);
            navigate('/');
        }

          }).catch((err)=>{
            console.log(err);
    

          })
    }


    return(
        <div>
            <input placeholder='Name...' value={name} onChange={handleNameChange} />
            <input placeholder='Pass...' value={pass} onChange={handlePassChange} />
            <button onClick={onSubmit}>Login</button>
        </div>
    )
}

export default Login;