import { createSlice}  from "@reduxjs/toolkit"

const initialState={
    count:0
}

const mycounter=createSlice({
    name:"counterslice",
    initialState,
    reducers:{
        setIncre:(state,action)=>{
            state.count+=1
        },
        setDecre:(state,action)=>{
            if(state.count!=0)
            {
                state.count-=1
            }
        },
        setCount:(state,action)=>{
            state.count=0
        }
    }
})

export const {setIncre,setDecre,setCount} = mycounter.actions
export default mycounter.reducer;