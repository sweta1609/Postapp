import { createSlice } from '@reduxjs/toolkit';
import { commentData } from './FakeCommentData';
export const commentsSlice = createSlice({
    name:"comments",
    initialState:{value:commentData},
    reducers:{
        addComment:(state,action)=>{
            state.value.push(action.payload)
        },
        deleteComment:(state,action)=>{
            state.value = state.value.filter((comment)=>comment.id !== action.payload.id)
        },
        updateComment:(state,action)=>{
            state.value.map((comment)=>{
                if(comment.id === action.payload.id){
                    comment.content = action.payload.content;
                }
            })
        }
       
    }
})

export const { addComment,deleteComment,updateComment} = commentsSlice.actions
export default commentsSlice.reducer;

