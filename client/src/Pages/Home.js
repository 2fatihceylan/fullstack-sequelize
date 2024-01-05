import axios from 'axios';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/posts').then((response)=>{
      console.log(response.data);
      setListOfPosts(response.data);
    })
  },[])

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
