import {configureStore}  from '@reduxjs/toolkit'
import postsReducer from '../features/Posts'
import commentsReducer from '../features/Comment'

const store = configureStore({
    reducer:{
        posts:postsReducer,
        comments:commentsReducer,
    },

})
export default store;