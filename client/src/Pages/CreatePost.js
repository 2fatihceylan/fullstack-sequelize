import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const CreatePost = () => {

    const initialValues = {
        title: "",
        postText: "",
        username: "",
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Başlık alanı boş bırakılamaz"),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required()
    })

    const onSubmit = (data) => {
        axios.post(
            'http://localhost:5000/posts',
            data
        ).then((response)=>{
            console.log('it worked')
            
        })
    }


    return(
        <div className="createPostPage">
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
                <Form>
                    <label>Title</label>
                    <ErrorMessage name="title" component="span"/>
                    <Field 
                        id="inputCreatePost" 
                        name="title" 
                        placeholder="Title"/><br/>
                    <label>Post</label>
                    <ErrorMessage name="postText" component="span"/>
                    <Field 
                        id="inputCreatePost" 
                        name="postText" 
                        placeholder="Post Text"/><br/>
                    <label>Username</label>
                    <ErrorMessage name="username" component="span"/>
                    <Field 
                        id="inputCreatePost" 
                        name="username" 
                        placeholder="Username"/><br/>
                    <button type="submit">Create Post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost;