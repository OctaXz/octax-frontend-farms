import BigNumber from 'bignumber.js'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmsPublicDataAsync, fetchPoolsUserDataAsync, fetchReferralDataAsync,fetchAirdropPublicDataAsync } from './actions'
import { State, Farm, Pool, Referral,Airdrop } from './types'
import { QuoteToken } from '../config/constants/types'

const ZERO = new BigNumber(0)

export const useFetchPublicData = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {    
    dispatch(fetchFarmsPublicDataAsync())
    dispatch(fetchAirdropPublicDataAsync())
    // dispatch(fetchPoolsPublicDataAsync())
  }, [dispatch, slowRefresh])
}

// Farms

export const useFarms = (): Farm[] => {
  const farms = useSelector((state: State) => state.farms.data)
  // console.log("farms",farms)
  return farms
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : new BigNumber(0),
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : new BigNumber(0),
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : new BigNumber(0),
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : new BigNumber(0),
    withdrawLastLockDay: farm.userData ? new BigNumber(farm.userData.withdrawLastLockDay) : new BigNumber(0),
  }
}

// Referral

export const useReferrals = (account): Referral => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchReferralDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const referral = useSelector((state: State) => state.referral.data)
  return referral
}

// Airdrop
export const useAirdrop = (): Airdrop => {
  const airdrop = useSelector((state: State) => state.airdrop.data)
  return airdrop
}

export const useAirdropUser = () => {
  const airdrop = useAirdrop()

  return {
    userAddress: airdrop.userInfo && airdrop.userInfo.userAddress !== '0x0000000000000000000000000000000000000000' ? airdrop.userInfo.userAddress : null,
    totalAirdrop: airdrop.userInfo ? airdrop.userInfo.totalAirdrop : 0,
    totalOctaXAmount: airdrop.userInfo ? airdrop.userInfo.totalOctaXAmount : 0,
    totalOctaGAmount: airdrop.userInfo ? airdrop.userInfo.totalOctaGAmount : 0,
    targetTime: airdrop.userInfo ? airdrop.userInfo.targetTime : 0,
    lastTimestamp: airdrop.userInfo ? airdrop.userInfo.lastTimestamp : 0,
  }
}
// Pools

export const usePools = (account): Pool[] => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const usePoolFromPid = (sousId): Pool => {
  const pool = useSelector((state: State) => state.pools.data.find((p) => p.sousId === sousId))
  return pool
}

// Prices

export const usePriceOctaGBusd = (): BigNumber => {
  // return ZERO;
   const pid = 4 // OctaG-BUSD LP
   const farm = useFarmFromPid(pid)

  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO;
}

export const usePriceBnbBusd = (): BigNumber => {
  // return ZERO;
   const pid = 13 // BUSD-BNB LP
   const farm = useFarmFromPid(pid)

  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO;
}

export const usePriceCakeBusd = (): BigNumber => {
  // const pid = 1 // CAKE-BNB LP
  // const bnbPriceUSD = usePriceBnbBusd()
  // const farm = useFarmFromPid(pid)
  // return farm.tokenPriceVsQuote ? bnbPriceUSD.times(farm.tokenPriceVsQuote) : ZERO

  const pid = 2; // OctaX-BUSD LP
  const farm = useFarmFromPid(pid);
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO;
}

export const useTotalValue = (): BigNumber => {
  const farms = useFarms();
  const bnbPrice = usePriceBnbBusd();
  const cakePrice = usePriceCakeBusd();

  let value = new BigNumber(0);
  for (let i = 0; i < farms.length; i++) {
    const farm = farms[i]
    if (farm.lpTotalInQuoteToken) {
      let val;
      if (farm.quoteTokenSymbol === QuoteToken.BNB) {
        val = (bnbPrice.times(farm.lpTotalInQuoteToken));
      } else if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
        val = (cakePrice.times(farm.lpTotalInQuoteToken));
      } else {
        val = (farm.lpTotalInQuoteToken);
      }
      value = value.plus(val);
    }
  }
  return value;
}