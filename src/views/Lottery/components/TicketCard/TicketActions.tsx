import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button, useModal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import moment from 'moment';
import useGetLotteryHasDrawn, {useGetLotteryHasDrawing} from 'hooks/useGetLotteryHasDrawn'
import { useNextExpiredDate } from 'hooks/useIssueIndex'
import { useLotteryAllowance } from 'hooks/useAllowance'
import { useLotteryApprove } from 'hooks/useApprove'
import useTickets from 'hooks/useTickets'
import useTokenBalance from 'hooks/useTokenBalance'
import { getBusdAddress } from 'utils/addressHelpers'
import { TOKEN_NAME } from 'config'
import BuyTicketModal from './BuyTicketModal'
import MyTicketsModal from './UserTicketsModal'
import PurchaseWarningModal from './PurchaseWarningModal'


const CardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[3]}px;

  ${({ theme }) => theme.mediaQueries.lg} {
    justify-content: space-between;
  }
`

const TicketCard: React.FC = () => {
  const [requestedApproval, setRequestedApproval] = useState(false)
  const TranslateString = useI18n()
  const allowance = useLotteryAllowance()
  const { onApprove } = useLotteryApprove()
  const lotteryHasDrawn = useGetLotteryHasDrawn()
  const lotteryHasDrawing = useGetLotteryHasDrawing()
  const tokenBalance = useTokenBalance(getBusdAddress()) // USE BUSD TO BUY
  const { nextEndBuyDate } = useNextExpiredDate()  
  const tickets = useTickets()
  const ticketsLength = tickets.length
  const [onPresentMyTickets] = useModal(<MyTicketsModal myTicketNumbers={tickets} from="buy" />)
  const [onPresentApprove] = useModal(<PurchaseWarningModal />)
  const [onPresentBuy] = useModal(<BuyTicketModal max={tokenBalance} tokenName={TOKEN_NAME} />)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
      onPresentApprove()
    } catch (e) {
      console.error(e)
    }
  }, [onApprove, onPresentApprove])

  const renderLotteryTicketButtons = () => {
    if (!allowance.toNumber()) {
      return (
        <>
          <Button style={{margin:"0 5px"}} fullWidth disabled>
            {TranslateString(432, 'View your tickets')}
          </Button>
          <Button style={{margin:"0 5px"}} fullWidth disabled={requestedApproval} onClick={handleApprove}>
            {TranslateString(999, `Approve ${TOKEN_NAME}`)}
          </Button>
        </>
      )
    }
    return (
      <>
        <Button
          style={{ marginRight: '8px' }}
          fullWidth
          disabled={ticketsLength === 0}
          variant="secondary"
          onClick={onPresentMyTickets}
        >
          {TranslateString(432, 'View your tickets')}
        </Button>
        <Button id="lottery-buy-start" fullWidth onClick={onPresentBuy} disabled={lotteryHasDrawing || nextEndBuyDate < parseInt(moment().format('X'))}>
          {lotteryHasDrawing || nextEndBuyDate < parseInt(moment().format('X')) ? "Waiting draw" : TranslateString(430, 'Buy ticket')}
        </Button>
      </>
    )
  }

  return (
    <CardActions>
      {lotteryHasDrawn ? (
        <Button disabled> {TranslateString(999, 'On sale soon')}</Button>
      ) : (
        renderLotteryTicketButtons()
      )}
    </CardActions>
  )
}

export default TicketCard
