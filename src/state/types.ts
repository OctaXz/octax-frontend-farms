import BigNumber from 'bignumber.js'
import { FarmConfig, PoolConfig, ReferralConfig, AirdropConfig } from 'config/constants/types'

export interface Farm extends FarmConfig {
  tokenAmount?: BigNumber
  // quoteTokenAmount?: BigNumber
  lpTotalInQuoteToken?: BigNumber
  tokenPriceVsQuote?: BigNumber
  poolWeight?: number
  depositFeeBP?: number
  eggPerBlock?: number
  userData?: {
    allowance: BigNumber
    tokenBalance: BigNumber
    stakedBalance: BigNumber
    earnings: BigNumber
    withdrawLastLockDay: BigNumber
  }
}

export interface Pool extends PoolConfig {
  totalStaked?: BigNumber
  startBlock?: number
  endBlock?: number
  userData?: {
    allowance: BigNumber
    stakingTokenBalance: BigNumber
    stakedBalance: BigNumber
    pendingReward: BigNumber
  }
}

export interface Referral extends ReferralConfig {
  child?: [{
    address: string
  }]
}

export interface Airdrop extends AirdropConfig {
  userInfo?: {      
      userAddress: string,
      totalAirdrop: number,
      totalOctaXAmount: number,
      totalOctaGAmount: number,
      lastTimestamp: number,
      targetTime: number,
  }
}

// Slices states

export interface FarmsState {
  data: Farm[]
}

export interface PoolsState {
  data: Pool[]
}

export interface ReferralState {
  data: Referral
}

export interface AirdropState {
  data: Airdrop
}

// Global state

export interface State {
  farms: FarmsState
  pools: PoolsState
  referral: ReferralState
  airdrop: AirdropState
}
