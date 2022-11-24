import { createSlice } from '@reduxjs/toolkit'
import CommentData from '../components/CommentData'

import { PostData } from './FakeData'

export const postsSlice = createSlice({
    name:"posts",
    initialState:{value:PostData},
    reducers:{
        addPosts:(state,action)=>{
            state.value.push(action.payload)

        },
        deletePosts:(state,action)=>{
            state.value = state.value.filter((post)=>post.id !== action.payload.id)
        },
        updatePosts:(state,action)=>{
            state.value.map((post)=>{
                if(post.id === action.payload.id){
                    post.title = action.payload.title;
                    post.content = action.payload.content;
                }

            })

        },
        updateCommentSection:(state,action)=>{
            state.value.map((post)=>{
                if(post.id === action.payload.id){
                   post.comment = <CommentData/>
                // post.comment = action.payload.comment
                }
            })
        }
    }
})

export const { addPosts,deletePosts,updatePosts,updateCommentSection} = postsSlice.actions
export default postsSlice.reducer;

