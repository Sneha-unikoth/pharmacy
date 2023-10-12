import { configureStore } from '@reduxjs/toolkit'
import FeedbackReducer from '../Slice/Feedbackslice'


export const store = configureStore({
    reducer: {
        feedback: FeedbackReducer
    },
})


