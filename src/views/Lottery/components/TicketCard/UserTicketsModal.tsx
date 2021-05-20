import React, { useCallback } from 'react'
import { Button, Modal } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { useWinningNumbers } from 'hooks/useTickets'
import useI18n from 'hooks/useI18n'

interface UserTicketsModalProps {
  myTicketNumbers: Array<any>
  from?: string
  onDismiss?: () => void
}

const UserTicketsModal: React.FC<UserTicketsModalProps> = ({ myTicketNumbers, onDismiss, from }) => {
  const winNumbers = useWinningNumbers()
  const TranslateString = useI18n()
  const rewardMatch = useCallback(
    (number) => {
      let n = 0
      for (let i = winNumbers.length - 1; i >= 0; i--) {
        // eslint-disable-next-line eqeqeq
        if (winNumbers[i] == number[i]) n++
      }
      return n
    },
    [winNumbers],
  )

  const listItems = myTicketNumbers.map((number, index) => {
    if (rewardMatch(number[0]) > 1 && from !== 'buy') {    
      const emoji = new Array(rewardMatch(number[0]) + 1).join('🤑')
      return (
        // eslint-disable-next-line react/no-array-index-key
        <RewardP key={index}>
          {emoji}
          <TicketNumberBox style={{color:"#ff8c28"}}>{number[0][0]}</TicketNumberBox>
          <TicketNumberBox style={{color:"#ff8c28"}}>{number[0][1]}</TicketNumberBox>
          <TicketNumberBox style={{color:"#ff8c28"}}>{number[0][2]}</TicketNumberBox>
          <TicketNumberBox style={{color:"#ff8c28"}}>{number[0][3]}</TicketNumberBox>
          {emoji}
        </RewardP>
      )
    }
    
    // eslint-disable-next-line react/no-array-index-key
    return <Row key={index}>
            <TicketNumberBox>{number[0][0]}</TicketNumberBox>
            <TicketNumberBox>{number[0][1]}</TicketNumberBox>
            <TicketNumberBox>{number[0][2]}</TicketNumberBox>
            <TicketNumberBox>{number[0][3]}</TicketNumberBox>
           </Row>
  })

  return (
    <Modal title={`My Tickets ( Total: ${myTicketNumbers.length} )`} onDismiss={onDismiss}>
      <TicketsList>
        <h2>{listItems}</h2>
      </TicketsList>
      <StyledButton fullWidth variant="secondary" onClick={onDismiss}>
        {TranslateString(438, 'Close')}
      </StyledButton>
    </Modal>
  )
}

const Row = styled.div`  
  align-items: center;
  display: flex;
  flex-direction: row;
` 
const TicketNumberBox = styled.div`
  padding: 10px;
  border-radius: 12px;
  background: linear-gradient(180deg, #54dade 0%, #24c7d6 76.22%);
  color: white;
  font-size: 20px;
  font-weight: 900;
  margin: 10px;
  margin-bottom: 7px;
  width: 20px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin: 20px;
    width: 40px;
  }
`

const RewardP = styled.div`
  color: #ff8c28;
  align-items: center;
  display: flex;
  flex-direction: row;
`

const TicketsList = styled.div`
  text-align: center;
  overflow-y: auto;
  max-height: 400px;
  color: ${(props) => props.theme.colors.primary};
`

const StyledButton = styled(Button)`
  margin-top: ${(props) => props.theme.spacing[2]}px;
`

export default UserTicketsModal
