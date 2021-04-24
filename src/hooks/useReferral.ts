import { useCallback, useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { registerRef } from 'utils/callHelpers'
import { fetchReferralDataAsync } from 'state/actions'
import { useMasterchef } from './useContract'

const useReferral = (refaddress: string) => {
    const dispatch = useDispatch()
    const { account }: { account: string } = useWallet()
    const masterChefContract = useMasterchef()

    const handleReferral = useCallback(
        async () => {
            try {
                const txHash = await registerRef(masterChefContract, refaddress, account)
                dispatch(fetchReferralDataAsync(account))
                return txHash
            } catch (e) {
                return false
            }
        },
        [account, dispatch, masterChefContract, refaddress],
    )

    return { onReferral: handleReferral }
}

export default useReferral