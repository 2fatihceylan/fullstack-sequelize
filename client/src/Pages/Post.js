import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Post = () =>{
    let {id} = useParams();


    const navigate= useNavigate();

    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(()=>{
        axios.get(`http://localhost:5000/posts/byId/${id}`).then((response)=>{
           setPostObject(response.data);
          })

        
          axios.get(`http://localhost:5000/comments/${id}`).then((response)=>{
            setComments(response.data);
           })
    },[]);




    const addComment = async()=>{

        await axios.post('http://localhost:5000/comments', 
        {
            commentBody: newComment, 
            PostId: id
        },
        {
            headers: {
                accesstoken: sessionStorage.getItem('access-token')
            }
        })
        .then((response)=>{

            console.log('-----------------------------------------');

            console.log(response)
            console.log('-----------------------------------------');


            if(response.status===200)
            {
                const commentToAddToList = {commentBody: newComment}
                setComments([...comments, commentToAddToList]);
                setNewComment('');  
            }else{

                 
            }

        }).catch((err)=>{
            console.log('**********************')
            console.log(err.response.data.error==='user not authenticated')
            console.log('***********************')


            alert('önce login olmalısın');
            navigate('/login');
        })
    }



    return(
        <div className="postPage">
            <div className="leftSide">
              <div className="post" id="individual">
                <div className="title">{postObject.title}</div>
                <div className="body">{postObject.postText}</div>
                <div className="footer">{postObject.username}</div>
                </div>
            </div>
            <div className="rightSide">
                <div className="addCommentContainer">
                    <input 
                        type="text" 
                        placeholder="Comment..." 
                        autoComplete="off" 
                        value={newComment}
                        onChange={(event)=>{setNewComment(event.target.value)}}
                        />
                    <button onClick={addComment}> Add Comment </button>
                </div>
                <div className="listOfComments">
                    {
                        comments.map((item,index)=>(
                            <div key={index} className="comment">
                                {
                                    item.commentBody
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Post;