import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { getLotteryIssueIndex, getLotteryNextExpiredDate } from 'utils/lotteryUtils'
import { LOTTERY_START_BUY, LOTTERY_STOP_BUY_TO_DRAW_HOUR } from 'config'
import { useLottery } from './useContract'
import useRefresh from './useRefresh'


const useIssueIndex = () => {
  const lotteryContract = useLottery()
  const [issueIndex, setIssueIndex] = useState(new BigNumber(0))  
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchIssueIndex = async () => {
      const res = await getLotteryIssueIndex(lotteryContract)
      setIssueIndex(new BigNumber(res))
    } 

    fetchIssueIndex()
    
  }, [ lotteryContract, fastRefresh])

  return issueIndex
}

export const useNextExpiredDate = () => {
  const lotteryContract = useLottery()  
  const [nextStartBuyDate, setNextStartBuyDate] = useState(0)  
  const [nextEndBuyDate, setNextEndBuyDate] = useState(0)  
  const [nextExpiredDate, setNextExpiredDate] = useState(0)  
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchNextExpiredDate = async () => {
      const res = await getLotteryNextExpiredDate(lotteryContract)
      setNextExpiredDate(new BigNumber(res).toNumber())
      setNextStartBuyDate(new BigNumber(res).toNumber() + (LOTTERY_START_BUY*60*60))
      setNextEndBuyDate(new BigNumber(res).toNumber() - (LOTTERY_STOP_BUY_TO_DRAW_HOUR*60*60))
    } 

    fetchNextExpiredDate()
    
  }, [ lotteryContract, fastRefresh]) 

  return {nextStartBuyDate,nextEndBuyDate,nextExpiredDate}
}


export default useIssueIndex