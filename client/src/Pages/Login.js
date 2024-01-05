import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();


    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
    });


    const onSubmit = (data) => {
        axios.post('http://localhost:5000/auth/login', data).then((response)=>{
            
       

        if(response.data==='you_logged_in'){
            console.log('giriş başarılı');
            navigate('/');
        }

        if(response.data.error==='User_does_not_exist'){
            console.log('Kullanıcı kayıtlı değil');
          }
          else if(response.data.error==='wrong_password'){
            console.log('Parola yanlış');
          }

          }).catch((err)=>{
            console.log(err);
    

          })
    }


    return(
        <div>
             <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
                <Form>
                
                    <label>Username</label>
                    <ErrorMessage name="username" component="span"/>
                    <Field 
                        id="inputCreatePost" 
                        name="username" 
                        placeholder="Username"/><br/>

                    <label>Password</label>
                    <ErrorMessage name="password" component="span"/>
                    <Field 
                        id="inputCreatePost" 
                        name="password" 
                        placeholder="Password"/><br/>
                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Login;