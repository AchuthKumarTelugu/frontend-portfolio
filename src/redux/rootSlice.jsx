import { createSlice } from '@reduxjs/toolkit'
const rootSlice=createSlice({
    name:"root",
    initialState:{
        loading:false,
        portfolioData:null,
        reloadData:false
    },
    reducers:{
        ShowLoading:(state,action) =>{
            state.loading=true
        },
        HideLoading:(state,action) => {
            state.loading=false;
        },
        setPortfolioData:(state,action) => {
                state.portfolioData=action.payload  //action .payload contains data we recieve
        },
        ReloadData:(state,action) =>{
            state.reloadData=action.payload
        }
    }
})
console.log(rootSlice.actions)
export default rootSlice
export const {ShowLoading,HideLoading,setPortfolioData,ReloadData}=rootSlice.actions //it contains all reducers