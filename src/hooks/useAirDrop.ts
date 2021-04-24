import { useCallback, useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { registerRef } from 'utils/callHelpers'
import { fetchReferralDataAsync } from 'state/actions'
import { useMasterchef } from './useContract'

const userAirDrop = (refaddress: string) => {
     return ""
}
export default userAirDrop