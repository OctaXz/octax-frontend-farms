import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { getLotteryIssueIndex } from 'utils/lotteryUtils'
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

export default useIssueIndex
