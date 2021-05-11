import { useCallback, useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchAirdropUserDataAsync } from 'state/actions'
import { registerAirdrop, claimAirdrop } from 'utils/callHelpers'
import { useAirdrop } from './useContract'


// Register Airdrop
const useAirdrops = () => {
     const dispatch = useDispatch()
     const { account }: { account: string } = useWallet()
     const airdropContract = useAirdrop()
   
     const handleRegister = useCallback(async () => {
       try {
         const tx = await registerAirdrop(airdropContract, account)
         dispatch(fetchAirdropUserDataAsync(account))
         return tx
       } catch (e) {
         return false
       }
     }, [account,dispatch, airdropContract])
   
     return { onRegister: handleRegister }
}

// Claim Airdrop
export const useClaim = () => {
     const dispatch = useDispatch()
     const { account }: { account: string } = useWallet()
     const airdropContract = useAirdrop()
   
     const handleClaim = useCallback(async () => {
       try {
         const tx = await claimAirdrop(airdropContract, account)
         dispatch(fetchAirdropUserDataAsync(account))
         return tx
       } catch (e) {
         return false
       }
     }, [account,dispatch, airdropContract])
   
     return { onClaim: handleClaim }
}

export default useAirdrops