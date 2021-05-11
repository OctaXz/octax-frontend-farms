import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Button, ButtonMenu, ButtonMenuItem, Heading, LogoIcon, Text} from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import PastLotteryDataContext from 'contexts/PastLotteryDataContext'
import { getLotteryIssueIndex } from 'utils/lotteryUtils'
import useI18n from 'hooks/useI18n'
import { useLottery } from 'hooks/useContract'
import Page from 'components/layout/Page'
import Divider from './components/Divider'
import NextDrawPage from './NextDrawPage'
import PastDrawsPage from './PastDrawsPage'


const Hero = styled.div`
  align-items: center;
  background-image: url('/images/net/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/net/3.png'), url('/images/net/3b.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; 
`

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 20px);
  justify-content: center;
`
const Lottery: React.FC = () => {
  const lotteryContract = useLottery()
  const { account } = useWallet()
  const TranslateString = useI18n()
  const [activeIndex, setActiveIndex] = useState(0)
  const [historyData, setHistoryData] = useState([])
  const [historyError, setHistoryError] = useState(false)
  const [currentLotteryNumber, setCurrentLotteryNumber] = useState(0)
  const [mostRecentLotteryNumber, setMostRecentLotteryNumber] = useState(1)

  useEffect(() => {
    fetch(`https://api.pancakeswap.com/api/lotteryHistory`)
      .then((response) => response.json())
      .then((data) => setHistoryData(data))
      .catch(() => {
        setHistoryError(true)
      })
  }, [])

  useEffect(() => {
    const getInitialLotteryIndex = async () => {
      const index = await getLotteryIssueIndex(lotteryContract)
      const previousLotteryNumber = index - 1

      setCurrentLotteryNumber(index)
      setMostRecentLotteryNumber(previousLotteryNumber)
    }

    if (account && lotteryContract) {
      getInitialLotteryIndex()
    }
  }, [account, lotteryContract])

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <>


      <Page>

      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'OctaX Finance')}
        </Heading>
        <Text>{TranslateString(578, 'OctaX DEFI app on Binance Smart Chain.')}</Text>
      </Hero>
        <Heading size="xxl" style={{ textAlign: 'center' }}> Lottery coming soon. </Heading>



      </Page>
    </>
  )
}

export default Lottery
