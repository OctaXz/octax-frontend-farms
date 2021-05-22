import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const CAKE_PER_BLOCK = new BigNumber(1)
export const BLOCKS_PER_YEAR = new BigNumber(10512000)
export const BSC_BLOCK_TIME = 3

export const CAKE_POOL_PID = 1
// LOTTERY
export const TOKEN_NAME = "BUSD"
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1

export const LOTTERY_START_BUY = 24
export const LOTTERY_STOP_BUY_TO_DRAW_HOUR = 1