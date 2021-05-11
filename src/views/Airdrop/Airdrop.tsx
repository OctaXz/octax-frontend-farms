import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'

import Page from 'components/layout/Page'
import useRefresh from 'hooks/useRefresh'
import { fetchAirdropUserDataAsync } from 'state/actions'
import useI18n from "../../hooks/useI18n";
import AirDropCard from "./components/AirdropCard";
import AirdropRewardCard from "./components/AirdropRewardCard";

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/net/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin: auto;
  margin-bottom: 10px;
  padding-top: 116px;
  text-align: left;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/net/3.png'), url('/images/net/3b.png');
    background-position: left center, right center;
     
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.textSubtle};
  height: 1px;
  margin: 0 auto 16px;
  width: 100%;
`
const Airdrop: React.FC = () => {
  const TranslateString = useI18n()
  const { account }: { account: string } = useWallet()

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {    
    if (account) {      
      dispatch(fetchAirdropUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="20px" color="secondary">
          {TranslateString(576, 'OctaX Finance')}
        </Heading>

        <Heading mb="2px"  style={{fontSize:36}}>Airdrop Distribution
        </Heading>
      </Hero>          
      <Heading as="h1">
          <Text style={{fontSize:20}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;According to the current OctaX configuration, 10% of withdrawal fees(on profit) in any pool will be distributed proportionally to the liquidity providers in the pool.In OctaX, 1% goes directly to active liquidity providers, and the remaining 4% will be exchanged for OctaX (obviously through OctaX swap) and distributed to OctaX token holders over 1 month(This is airdrop for holder). The remaining 5% will be taken for OctaX buy back and burned.</Text>
      </Heading>
      <Divider/>
      <AirdropRewardCard/>
    </Page>
  )
}

export default Airdrop