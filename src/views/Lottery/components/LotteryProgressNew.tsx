import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { Text, Progress } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import moment from 'moment';
import useIssueIndex from 'hooks/useIssueIndex'
import useGetLotteryHasDrawn from 'hooks/useGetLotteryHasDrawn'
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
  const [timeUntilTicketSale, setTimeUntilTicketSale] = useState(0)
  const [timeUntilLotteryDraw, setTimeUntilLotteryDraw] = useState(0)
  const lotteryHasDrawn = useGetLotteryHasDrawn()  
  const issueIndex = useIssueIndex().toNumber()
 
  // const currentMillis = useCurrentTime()
  useEffect(() => {
    const firstLottery = new Date(Date.UTC(2021, 4, 20, 2, 30, 0, 0));
    const numberOfTestLotteries = 0;
    const hour = 60 * 60 * 1000;
    const timeTicketSaleHour = 2
    const timeLotteryDrawHour = 24 
    const timeTicketSale = (firstLottery.getTime() + ((issueIndex - numberOfTestLotteries) * timeTicketSaleHour * hour))/1000
    const timeLotteryDraw = (firstLottery.getTime() + ((issueIndex - numberOfTestLotteries) * (timeLotteryDrawHour+timeTicketSaleHour) * hour))/1000;    
    setTimeUntilTicketSale(timeTicketSale)
    setTimeUntilLotteryDraw(timeLotteryDraw)    
  }, [issueIndex])   

  return (
    <ProgressWrapper>      
      <TopTextWrapper>
        <StyledPrimaryText fontSize="20px" bold color="contrast">
          { lotteryHasDrawn ?
                <> 
                {timeUntilTicketSale > parseInt(moment().format('X')) ? <LotteryCountdown destTime={timeUntilTicketSale} /> : <Text fontSize="20px">0d, 0h, 0m, 0s</Text> }
                </>
                : 
                <>
                {timeUntilLotteryDraw > parseInt(moment().format('X')) ? <LotteryCountdown destTime={timeUntilLotteryDraw} /> : <Text fontSize="20px">0d, 0h, 0m, 0s</Text> }
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
            {timeUntilLotteryDraw > parseInt(moment().format('X')) ? <LotteryCountdown destTime={timeUntilLotteryDraw} /> : <Text fontSize="20px">0d, 0h, 0m, 0s</Text>  } 
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
