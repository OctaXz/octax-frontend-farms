import React, { useState, useCallback } from 'react'
import moment from 'moment';
import styled from 'styled-components'
import { Heading, Card, CardBody, Button,Text,Flex } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useTokenBalance from 'hooks/useTokenBalance'
import { getBalanceNumber } from 'utils/formatBalance'
import { getCakeAddress,getOctagAddress } from 'utils/addressHelpers'
import useAirdrops,{ useClaim } from 'hooks/useAirdrops'
import UnlockButton from 'components/UnlockButton'
import RewardBalance from './RewardBalance'
import Countdown from './Countdown'

import { usePriceCakeBusd,usePriceOctaGBusd,useAirdrop,useAirdropUser } from '../../../state/hooks'


const StyledAirdropRewardCard = styled(Card)`
  background-image: url('/images/airdrop/airdrop.png');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
  max-width: 376px;
  align-item: center;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const AirdropRewardCard = () => {
  const [pendingTx, setPendingTx] = useState(false)  
  const { account } = useWallet()
  const octaxBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const octagBalance = getBalanceNumber(useTokenBalance(getOctagAddress()))
  const octaxPrice = usePriceCakeBusd().toNumber()
  const octagPrice = usePriceOctaGBusd().toNumber()
  const airdropData = useAirdrop()
  const { userAddress, totalAirdrop, totalOctaXAmount, totalOctaGAmount, lastTimestamp,targetTime } = useAirdropUser()
  // console.log(airdropData)
  const octaxReward = account ? airdropData.octaXNextAirdropAmount/airdropData.userAirdropLength : 0
  const octagReward = account ? airdropData.octaGNextAirdropAmount/airdropData.userAirdropLength : 0  
  // const downTime = parseInt(moment('100520210051', "DDMMYYYYhhmm").format('X'))  + (targetTime+90) - targetTime  

  const { onRegister } = useAirdrops()
  const handleRegister = useCallback(async () => {
    setPendingTx(true)
    try {
      await onRegister()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onRegister])

  const { onClaim } = useClaim()
  const handleClaim = useCallback(async () => {
    setPendingTx(true)
    try {
      await onClaim()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onClaim])  

  return (
    <StyledAirdropRewardCard>
      <CardBody>
        <Heading size="md" mb="24px">
            Airdrop for you
        </Heading>        
        <Block>
          <Label>OctaX Reward</Label>
          <RewardBalance reward={octaxReward}/>
          <Label>~${(octaxPrice * octaxReward).toFixed(2)}</Label>
        </Block>
        <Block>
          <Label>OctaG Reward</Label>
          <RewardBalance reward={octaxReward} />
          <Label>~${(octagPrice * octagReward).toFixed(2)}</Label>
        </Block>
        { account && (
          <>
            <Flex>
              <Text bold textTransform="uppercase" color="primary" fontSize="14px">               
                Reward Profile
              </Text>              
            </Flex>
            <Flex justifyContent='space-between'>
              <Text>Total Claim :</Text>
              <Text>{totalAirdrop.toFixed(0)}</Text>
            </Flex>
            <Flex justifyContent='space-between'>
              <Text>OctaX :</Text>
              <Text>{totalOctaXAmount.toFixed(3)}</Text>
            </Flex>
            <Flex justifyContent='space-between'>
              <Text>OctaG :</Text>
              <Text>{totalOctaGAmount.toFixed(3)}</Text>
            </Flex>
            <hr/>
            <Flex>
              <Text bold textTransform="uppercase" color="primary" fontSize="14px">               
                Condition
              </Text>              
            </Flex>
            <Flex justifyContent='space-between'>
              <Text>OctaX balance &#8805; 0.05 :</Text>
              <Text>{octaxBalance.toFixed(3)}</Text>
            </Flex>
            <Flex justifyContent='space-between'>
              <Text>OctaG balance &#8805; 0.05 :</Text>
              <Text>{octagBalance.toFixed(3)}</Text>
            </Flex>
          </>
        )}
        <Actions>
          { account ?              
              (                
                  <>
                  { !userAddress ? 
                  (
                    <Button
                      id="airdrop-regist" 
                      disabled={pendingTx || octaxBalance<0.05 || octagBalance<0.05}  
                      onClick={handleRegister}           
                      fullWidth
                    >
                      {pendingTx 
                        ? "Please wait..."
                        : <Text>Register</Text>
                      }
                    </Button>
                  ):(
                    <Button
                      id="airdrop-claim" 
                      disabled={pendingTx || !(targetTime < parseInt(moment().format('X'))) || octaxBalance<0.05 || octagBalance<0.05 } 
                      onClick={handleClaim}                    
                      fullWidth
                    >
                      {pendingTx
                        ? "Please wait..."
                        : (
                          <>
                          {targetTime < parseInt(moment().format('X')) ? "Claim Reward" : <Countdown destTime={targetTime} head="Claim Reward"/>}
                          </>
                          )
                      }
                    </Button>
                  )}
                  </>               
              ) : (
              <UnlockButton fullWidth />
            )}
        </Actions>
      </CardBody>
    </StyledAirdropRewardCard>
  )
}

export default AirdropRewardCard
