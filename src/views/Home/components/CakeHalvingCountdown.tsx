import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import useHalvingCountdown from 'hooks/useHalvingCountdown'

const CakeHalvingCountdown = () => {   
  const halvingDay = useHalvingCountdown(); 

  return (
    <Text bold fontSize="30px" mb="10px" style={{ textAlign: 'center' }}>OctaX Halving Countdown  {halvingDay}  Days</Text>
  )
}

export default CakeHalvingCountdown
