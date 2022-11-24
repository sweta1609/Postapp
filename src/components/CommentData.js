import React ,{ useState }from 'react'
import '../style/CommentData.css'
import { useSelector,useDispatch} from "react-redux"
import { addComment,deleteComment,updateComment} from '../features/Comment'
function CommentData() {
  const dispatch=useDispatch();
  const commentList = useSelector((state)=>state.comments.value)

  const [content,setContent]=useState("")
  const[newcontent,setNewContent] = useState("")
  return (
    <> 
    <div className ="container">
    <div className="add-comment">
         <input type="text" placeholder="addcomment..." onChange={(e)=>setContent(e.target.value)}/>
         <button onClick={()=>{dispatch(addComment({id:commentList[commentList.length-1].id+1,content}))}}>Add</button>
      </div>

      <div className="display-comment">
        {commentList.map((comment)=>{
          return <h3>
            {comment.content}
            <input type="text" placeholder='edit comment'  onChange={(e)=>setNewContent(e.target.value)}/>
            <button onClick={()=>dispatch(updateComment({id:comment.id,content:newcontent}))}>Edit comment</button>
            <button onClick={()=>dispatch(deleteComment({id:comment.id}))}>Delete Comment</button>
          </h3>})}
      </div>
    </div>
      
    </>
  )
}

export default CommentData