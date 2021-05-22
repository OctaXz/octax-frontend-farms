import { useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useLottery } from 'hooks/useContract'
import { getLotteryStatus,getLotteryCloseBuy } from 'utils/lotteryUtils'
import useRefresh from './useRefresh'
/**
 * Returns whether or not the current lottery has drawn numbers
 *
 * @return {Boolean}
 */
const useGetLotteryHasDrawn = () => {
  const [lotteryHasDrawn, setLotteryHasDrawn] = useState(true)
  const { account } = useWallet()
  const lotteryContract = useLottery()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    if (lotteryContract) {
      const fetchLotteryStatus = async () => {
        const state = await getLotteryStatus(lotteryContract)
        setLotteryHasDrawn(state)
      }

      fetchLotteryStatus()
    }
  }, [account, lotteryContract,fastRefresh])

  return lotteryHasDrawn
}

export const useGetLotteryHasDrawing = () => {
  const [lotteryHasDrawing, setLotteryHasDrawing] = useState(true)
  const { account } = useWallet()
  const lotteryContract = useLottery()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    if (account && lotteryContract) {
      const fetchLotteryStatus = async () => {
        const state = await getLotteryCloseBuy(lotteryContract)
        setLotteryHasDrawing(state)
      }

      fetchLotteryStatus()
    }
  }, [account, lotteryContract,fastRefresh])

  return lotteryHasDrawing
}

export default useGetLotteryHasDrawn
