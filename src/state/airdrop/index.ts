/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import fetchAirdrop from './fetchAirdrop'
import fetchAirdropUser from './fetchAirdropUser'
import { AirdropState, Airdrop } from '../types'

const initialState: AirdropState = { data: {totalPayOctaXAmount: 0,
                                            totalPayOctaGAmount: 0,
                                            userAirdropLength: 0,
                                            octaXNextAirdropAmount:0,
                                            octaGNextAirdropAmount:0,} }

export const airdropSlice = createSlice({
  name: 'Airdrop',
  initialState,
  reducers: {
    setAirdropPublicData: (state, action) => {
      const liveFarmsData: Airdrop = action.payload
      state.data = {...state.data, ...liveFarmsData}
    },
    setAirdropUserData: (state, action) => {
      const userAirdrop = action.payload     
      state.data = { ...state.data, ...userAirdrop }
    },
  },
})

// Actions
export const { setAirdropPublicData, setAirdropUserData } = airdropSlice.actions

// Thunks
export const fetchAirdropPublicDataAsync = () => async (dispatch) => {
  const airdrop = await fetchAirdrop()
  dispatch(setAirdropPublicData(airdrop))
}
export const fetchAirdropUserDataAsync = (account) => async (dispatch) => {
  const userAirdrop = await fetchAirdropUser(account) 
  
  dispatch(setAirdropUserData(userAirdrop))
}

export default airdropSlice.reducer
