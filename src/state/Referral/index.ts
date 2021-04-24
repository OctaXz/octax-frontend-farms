/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import fetchReferral from './fetchReferral'
import { ReferralState, Referral } from '../types'

const data: Referral = { partnerAddress: '', isRegister: false, totalChildPartner: 0 }
const initialState: ReferralState = { data: { ...data } }

export const ReferralSlice = createSlice({
    name: 'Referrals',
    initialState,
    reducers: {
        setReferralsUserData: (state, action) => {
            const liveFarmsData: Referral = action.payload
            state.data = liveFarmsData
        },
    },
})

// Actions
export const { setReferralsUserData } = ReferralSlice.actions

// Thunks
export const fetchReferralDataAsync = (account) => async (dispatch) => {
    const referral = await fetchReferral(account)
    dispatch(setReferralsUserData(referral))
}

export default ReferralSlice.reducer
