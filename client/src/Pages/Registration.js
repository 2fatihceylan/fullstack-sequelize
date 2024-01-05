import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Registration = () => {

    const navigate = useNavigate();
    

    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
    });


    const onSubmit = async (data) => {


      await axios.post('http://localhost:5000/auth/register', data).then((response)=>{
        
        if(response.status===200){
            console.log('kayıt başarılı');
            navigate('/');
        }

        }).catch((err)=>{

            if(err.response.data.message==='User already exists'){
                console.log('bu kullanıcı adı hali hazırda kullanılıyor')
                alert('bu kullanıcı adı hali hazırda kullanılıyor');
            }
            

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
                        id="inputCreateUser" 
                        name="username" 
                        placeholder="Username"/><br/>

                    <label>Password</label>
                    <ErrorMessage name="password" component="span"/>
                    <Field 
                        id="inputCreateUser2" 
                        name="password" 
                        placeholder="Password"
                        type="password"
                        /><br/>
                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Registration;