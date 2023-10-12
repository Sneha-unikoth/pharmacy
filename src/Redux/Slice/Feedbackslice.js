import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const feebackApiUrl = 'http://127.0.0.1:8000/api/get_all_feedback' 

export const fetchFeedback = createAsyncThunk('fetchFeedback',async()=>{
try {
     const response = await fetch(feebackApiUrl)
     return response.json()
} catch (error) {
  
}
})


const initialState = {
 feedback:[],
 loading:false,
 error:false
}

export const Feedbackslice = createSlice({
  name: 'feedback',
  initialState,
  extraReducers: (builder)=>{
    builder.addCase(fetchFeedback.pending,(state,action)=>{
      state.loading=true
    })
    builder.addCase(fetchFeedback.fulfilled,(state,action)=>{
      state.loading=false
      state.feedback=action.payload
    })
    builder.addCase(fetchFeedback.rejected,(state,action)=>{
      state.loading=false
      state.error=true
    })


  }
})

export default Feedbackslice.reducer