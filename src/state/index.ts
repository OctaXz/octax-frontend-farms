import { configureStore } from '@reduxjs/toolkit'
import farmsReducer from './farms'
import poolsReducer from './pools'
import referralReducer from './Referral'
import airdropReducer from './airdrop'

export default configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    farms: farmsReducer,
    pools: poolsReducer,
    referral: referralReducer,
    airdrop: airdropReducer,
  },
})
