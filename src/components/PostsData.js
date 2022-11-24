import React from 'react'

import '../style/PostsData.css'
import {useState} from 'react'
import {useSelector,useDispatch } from 'react-redux'
import {addPosts,deletePosts,updatePosts,updateCommentSection} from '../features/Posts'




function PostsData() {
    const dispatch = useDispatch();
    const postList = useSelector((state)=>state.posts.value)
    const[title,setTitle] = useState(" ")
    const[content,setContent] = useState("")
    const[newtitle,setNewTitle] = useState("")
    const[newcontent,setNewContent] = useState("")
   const[comment,setComment]=useState("")

  return (
    <div>
       <div className="addPost">
          <div><input type="text" placeholder='title' onChange={(e)=>setTitle(e.target.value)}/></div>
          <hr/>
          <div><textarea type="text" onChange={(e)=>setContent(e.target.value)}></textarea></div>
          <hr/>
          <button onClick={()=>{dispatch(addPosts({id:postList[postList.length-1].id+1,title,content}))}}>Add Post</button>
         
       </div>
       <div >
         {postList.map((post)=>(<h1 className="displayPost">
         <div className="outerContainer">
                {post.title}
                <hr/>
                {post.content}
                <hr/>
          
                <input type="text" placeholder='new title' onChange={(e)=>setNewTitle(e.target.value)}/>
                <textarea type="text" placeholder="new content"onChange={(e)=>setNewContent(e.target.value)}></textarea>
                <hr/>
                {/* <div>{post.comment}</div> */}
            </div>
            
            <div className="innerContainer">
                    <button onClick={()=>dispatch(updatePosts({id:post.id,title:newtitle,content:newcontent}))}>Edit Post</button>
                    <hr/>
                
                    <button onClick={()=>dispatch(deletePosts({id:post.id}))}>Delete Post</button>
                    <hr/>
                    <button onClick={()=>dispatch(updateCommentSection({id:post.id,comment:comment}))}>Comment Section</button>
            </div>
              <div>{post.comment}</div>
            
      
            </h1>
           
            ))}
       </div>
   
  
    </div>
  )
}

export default PostsData