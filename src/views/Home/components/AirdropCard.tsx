import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'


import CardValue from './CardValue'
import { useAirdrop, usePriceCakeBusd,usePriceOctaGBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const AirdropCard = () => { 
  
  const airdropData =  useAirdrop()  
  const octaxPrice = usePriceCakeBusd()
  const octagPrice = usePriceOctaGBusd()
  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          Airdrop Reward
        </Heading>
        <Row>
          <Text fontSize="14px">OctaX Reward</Text>
          <CardValue fontSize="14px" value={airdropData.octaXNextAirdropAmount} decimals={3} />
        </Row>
        <Row>
          <Text fontSize="14px">OctaG Reward</Text>
          <CardValue fontSize="14px" value={airdropData.octaGNextAirdropAmount} decimals={3} />
        </Row>        
        <Row>
          <Text fontSize="14px">Total Pay OctaX Reward</Text>
          <CardValue fontSize="14px" value={airdropData.totalPayOctaXAmount} decimals={3} />
        </Row>
        <Row>
          <Text fontSize="14px">Total Pay OctaG Reward</Text>
          <CardValue fontSize="14px" value={airdropData.totalPayOctaGAmount} decimals={3} />
        </Row>
        <Row>
          <Text fontSize="14px">Holder Registered</Text>
          <CardValue fontSize="14px" value={airdropData.userAirdropLength} decimals={0} />
        </Row>        
      </CardBody>
    </StyledCakeStats>
  )
}

export default AirdropCard
