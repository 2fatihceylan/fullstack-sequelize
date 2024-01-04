import axios from 'axios';
import {useEffect, useState} from 'react';

function Home() {


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
      <div key={index} className='post'>
        <div className='title'>{item.title}</div>
        <div className='body'>{item.postText}</div>
        <div className='footer'>{item.username}</div>
      </div>
     ))}
    </div>
  );
}

export default Home;
