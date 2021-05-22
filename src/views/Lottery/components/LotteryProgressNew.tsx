import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import moment from 'moment';
import useGetLotteryHasDrawn from 'hooks/useGetLotteryHasDrawn'
import { useNextExpiredDate } from 'hooks/useIssueIndex'
import LotteryCountdown from './LotteryCountdown'

const ProgressWrapper = styled.div`
  display: block;
  width: 100%;
`

const TopTextWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const BottomTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const StyledPrimaryText = styled(Text)`
  margin-right: 16px;
`
const LotteryProgressNew = () => {
  const TranslateString = useI18n()  
  const lotteryHasDrawn = useGetLotteryHasDrawn()  
  const { nextStartBuyDate, nextExpiredDate } = useNextExpiredDate()
    
  // const hasNextStartBuyDate = nextExpiredDate < parseInt(moment().format('X')) && nextStartBuyDate > parseInt(moment().format('X'))
  const hasNextStartBuyDate = nextStartBuyDate > parseInt(moment().format('X'))
  return (
    <ProgressWrapper>      
      <TopTextWrapper>
        <StyledPrimaryText fontSize="20px" bold color="contrast">
          { lotteryHasDrawn ?
                <> 
                { hasNextStartBuyDate ? <LotteryCountdown destTime={nextStartBuyDate} /> : <Text fontSize="20px">0d, 0h, 0m, 0s</Text> }
                </>
                : 
                <>
                {nextExpiredDate > parseInt(moment().format('X')) ? <LotteryCountdown destTime={nextExpiredDate} /> : <Text fontSize="20px">0d, 0h, 0m, 0s</Text> }
                </>
          }
        </StyledPrimaryText>
        <Text fontSize="20px" bold color="invertedContrast">
          {lotteryHasDrawn ? TranslateString(0, 'Until ticket sale') : TranslateString(0, 'Until lottery draw')}
        </Text>
      </TopTextWrapper>
      {lotteryHasDrawn && (
        <BottomTextWrapper>
          <StyledPrimaryText fontSize="20px" bold color="contrast">
            {nextExpiredDate > parseInt(moment().format('X')) ? <LotteryCountdown destTime={nextExpiredDate} /> : <Text fontSize="20px">0d, 0h, 0m, 0s</Text>  } 
          </StyledPrimaryText>
          <Text fontSize="20px" bold color="invertedContrast">
            {TranslateString(0, 'Until lottery draw')}
        </Text>
        </BottomTextWrapper>
      )}
    </ProgressWrapper>
  )
}

export default LotteryProgressNew
