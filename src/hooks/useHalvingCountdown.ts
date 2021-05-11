import { useEffect, useState } from 'react'
import multicall from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import useRefresh from './useRefresh'

const useHalvingCountdown = () => {
  const [balances, setBalance] = useState(0)  
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchHalvingCountdown = async () => {
        const [blockHalvingDay, getMoveDay] = await multicall(masterChefABI, [            
            {
              address: getMasterChefAddress(),
              name: 'BlockHavingDay',
            },
            {
              address: getMasterChefAddress(),
              name: 'getMoveDay',
            },
        ])      
        const halvingDay = (blockHalvingDay*(Math.floor(getMoveDay/blockHalvingDay)+1))-getMoveDay;
        setBalance(halvingDay)
    }
    
    fetchHalvingCountdown()
    
  }, [fastRefresh])

  return balances
}

export default useHalvingCountdown
