import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, TicketRound, Text, Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import moment from 'moment';
import useGetLotteryHasDrawn,{useGetLotteryHasDrawing} from 'hooks/useGetLotteryHasDrawn'
import useTickets from 'hooks/useTickets'
// import { useCurrentTime } from 'hooks/useTimer'
import { useNextExpiredDate } from 'hooks/useIssueIndex'
import TicketActions from './TicketActions'
// import { getTicketSaleTime } from '../../helpers/CountdownHelpers'
import LotteryCountdown from '../LotteryCountdown'

interface CardProps {
  isSecondCard?: boolean
}

const StyledCard = styled(Card)<CardProps>`
  ${(props) =>
    props.isSecondCard
      ? `  
        margin-top: 16px;

        ${props.theme.mediaQueries.sm} {
          margin-top: 24px;
        }

        ${props.theme.mediaQueries.lg} {
          margin-top: 32px;
        }
        `
      : ``}
`

const CardHeader = styled.div`
  align-items: center;
  display: flex;
`

const IconWrapper = styled.div`
  margin-right: 16px;
  svg {
    width: 48px;
    height: 48px;
  }
`

const TicketCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TicketCard: React.FC<CardProps> = ({ isSecondCard = false }) => {
  const TranslateString = useI18n()
  const lotteryHasDrawn = useGetLotteryHasDrawn()  
  const tickets = useTickets()
  const ticketsLength = tickets.length  
  const { nextStartBuyDate } = useNextExpiredDate() 

  return (
    <StyledCard isSecondCard={isSecondCard}>
      <CardBody>
        <CardHeader>
          <IconWrapper>
            <img src="/images/lottery/ticket.png" alt="lottery bunny" width="64px" height="64px" />
          </IconWrapper>
          {lotteryHasDrawn ? (
            <TicketCountWrapper>
              <Text fontSize="14px" color="textSubtle">
                {TranslateString(999, 'Until ticket sale:')}
              </Text>
              <Heading size="lg">{nextStartBuyDate > parseInt(moment().format('X')) ? <LotteryCountdown destTime={nextStartBuyDate}/> : "0d, 0h, 0m, 0s"}</Heading>
            </TicketCountWrapper>
          ) : (
            <TicketCountWrapper>
              <Text fontSize="14px" color="textSubtle">
                {TranslateString(999, 'Your tickets for this round')}
              </Text>
              <Heading size="lg">{ticketsLength}</Heading>
            </TicketCountWrapper>
          )}
        </CardHeader>
        <TicketActions />
      </CardBody>
    </StyledCard>
  )
}

export default TicketCard
