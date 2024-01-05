import axios from 'axios';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [listOfPosts, setListOfPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    isLoggedInCheck();

  },[])


  const isLoggedInCheck = async () => {
    const response = await fetch('http://localhost:5000/auth/islogin',{
      method: 'POST',
      headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
          accesstoken: sessionStorage.getItem('access-token')
      },
      
      
      
    })
    .then(res=>res.json())

    if(response.error){
      if(response.error==='user not authenticated'){
        console.log('kullanıcı giriş yapmamış');
        navigate('/login');
      }
      else{
        navigate('/login');
      }
    }
    else{
      setIsLoggedIn(true);
      getPosts();
    }

   

   
  }


  const getPosts = async () => {
    axios.get('http://localhost:5000/posts').then((response)=>{
      console.log(response.data);
      setListOfPosts(response.data);
    })
  }

  return (
    <div className="App">
     {listOfPosts.map((item,index)=>(
      <div key={index} className='post' onClick={()=>navigate(`/post/${item.id}`)}>
        <div className='title'>{item.title}</div>
        <div className='body'>{item.postText}</div>
        <div className='footer'>{item.username}</div>
      </div>
     ))}
    </div>
  );
}

export default Home;
