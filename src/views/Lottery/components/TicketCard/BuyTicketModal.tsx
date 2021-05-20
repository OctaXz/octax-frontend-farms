import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Button, Modal, Input, Text } from '@pancakeswap-libs/uikit'
import { getFullDisplayBalance } from 'utils/formatBalance'
import { LOTTERY_TICKET_PRICE } from 'config'
import TicketInput from 'components/TicketInput'
import ModalActions from 'components/ModalActions'
import { useMultiBuyLottery, useMaxNumber } from 'hooks/useBuyLottery'
import useI18n from 'hooks/useI18n'


interface BuyTicketModalProps {
  max: BigNumber
  onConfirm?: (amount: string, numbers: Array<number>) => void
  onDismiss?: () => void
  tokenName?: string
}

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const BuyTicketModal: React.FC<BuyTicketModalProps> = ({ max, onDismiss, tokenName }) => {
  
  const [val, setVal] = useState('0')
  const [lotsVal, setLotsVal] = useState([])
  const [pendingTx, setPendingTx] = useState(false)
  const [, setRequestedBuy] = useState(false)
  const TranslateString = useI18n()
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const maxTickets = useMemo(() => {
    return parseInt(getFullDisplayBalance(max.div(new BigNumber(LOTTERY_TICKET_PRICE))))
  }, [max])

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => { 
    let length = 0
     if (Number(e.currentTarget.value) > 50) {
      length = 50 
      setVal('50')
    }else{
      length = Number.isNaN(parseInt(e.currentTarget.value)) ? 0 : parseInt(e.currentTarget.value)  
      setVal(length.toString())
    }
       
    // @ts-ignore
    // eslint-disable-next-line prefer-spread    
    const randomData = Array.apply(null, { length }).map((x,index) => {        
      return  { 
                index,
                lotNumber: [
                  Math.floor(Math.random() * maxNumber) + 1,
                  Math.floor(Math.random() * maxNumber) + 1,
                  Math.floor(Math.random() * maxNumber) + 1,
                  Math.floor(Math.random() * maxNumber) + 1,
                ],                  
              }        
    })  
    setLotsVal(randomData)    
  }  

  const { onMultiBuy } = useMultiBuyLottery()
  const maxNumber = useMaxNumber()
  const handleBuy = useCallback(async () => {
    try {
      setRequestedBuy(true)      
      const numbers = lotsVal.map((lot) => [...lot.lotNumber])
      const txHash = await onMultiBuy(LOTTERY_TICKET_PRICE.toString(), numbers)
      // user rejected tx or didn't go thru
      if (txHash) {
        setRequestedBuy(false)
      }
    } catch (e) {
      console.error(e)
    }
  }, [onMultiBuy, setRequestedBuy,lotsVal])

  

  const loterryList = useCallback( () => {        
      
      const handleChangeNumber = (e: React.FormEvent<HTMLInputElement>) => {        
        const index1 = parseInt(e.currentTarget.id.substring(3, 4))
        const index2 = parseInt(e.currentTarget.id.substring(4, 5))
        const numVal = parseInt(e.currentTarget.value)
        if(!Number.isNaN(numVal) && numVal>=1 && numVal <= maxNumber){
          lotsVal[index1].lotNumber[index2] =  numVal    
          setLotsVal([...lotsVal]) 
        }
      }
      
      return lotsVal.map((lot) =>  (
          <Row key={lot.index.toString()}>
              <Text style={{width:"60px",margin:"0 8px"}}>{lot.index+1}</Text>
              <Input style={{textAlign:"center",margin:"0 8px"}} id={`num${lot.index.toString()}0`}       
                onChange={handleChangeNumber}              
                value={lot.lotNumber[0].toString()}
              />
              <Input style={{textAlign:"center",margin:"0 8px"}} id={`num${lot.index.toString()}1`}       
                onChange={handleChangeNumber}              
                value={lot.lotNumber[1].toString()}
              />
              <Input style={{textAlign:"center",margin:"0 8px"}} id={`num${lot.index.toString()}2`}       
                onChange={handleChangeNumber}              
                value={lot.lotNumber[2].toString()}
              />
              <Input style={{textAlign:"center",margin:"0 8px"}} id={`num${lot.index.toString()}3`}       
                onChange={handleChangeNumber}              
                value={lot.lotNumber[3].toString()}
              />
          </Row>
        ))       
      
  }, [lotsVal,maxNumber])

  const handleSelectMax = useCallback(() => {
    let length = 0
    if (Number(maxTickets) > 50) {
      length = 50 
      setVal('50')
    } else {
      length = maxTickets 
      setVal(maxTickets.toString())
    }
    // @ts-ignore
    // eslint-disable-next-line prefer-spread    
    const randomData = Array.apply(null, { length }).map((x,index) => {        
      return  { 
                index,
                lotNumber: [
                  Math.floor(Math.random() * maxNumber) + 1,
                  Math.floor(Math.random() * maxNumber) + 1,
                  Math.floor(Math.random() * maxNumber) + 1,
                  Math.floor(Math.random() * maxNumber) + 1,
                ],                  
              }        
    })  
    setLotsVal(randomData)   
  }, [maxTickets,maxNumber])

  const cakeCosts = (amount: string): number => {
    return +amount * LOTTERY_TICKET_PRICE
  }
  return (
    <Modal title={TranslateString(450, 'Enter amount of tickets to buy')} onDismiss={onDismiss}>
      <div>        
        <Tips>{TranslateString(458, `1 Ticket = ${LOTTERY_TICKET_PRICE} ${tokenName}`)}</Tips>
        <Tips>only 50 can be bought at one time</Tips>
        <Tips style={{marginBottom:"5px"}}>{TranslateString(
            478,
            `Ticket purchases are final. Your BUSD cannot be returned to you after buying tickets.`,
          )}</Tips>          
      </div>   
      <TicketInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance}
        symbol="TICKET"
        availableSymbol={tokenName}
      />
             
      <div>        
        <div>{loterryList()}</div>  
        <Final>{TranslateString(460, `You will spend: ${cakeCosts(val)} BUSD`)}</Final>
      </div>

      <ModalActions>
        <Button fullWidth variant="secondary" onClick={onDismiss}>
          {TranslateString(462, 'Cancel')}
        </Button>
        <Button
          id="lottery-buy-complete"
          fullWidth
          disabled={pendingTx || parseInt(val) > Number(maxTickets) || parseInt(val) > 50 || parseInt(val) < 1}
          onClick={async () => {
            setPendingTx(true)
            await handleBuy()
            setPendingTx(false)
            onDismiss()
          }}
        >
          {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default BuyTicketModal

const Tips = styled.div`
  margin-left: 0.4em;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`

const Final = styled.div`
  margin-top: 1em;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`
const Announce = styled.div`
  margin-top: 1em;
  margin-left: 0.4em;
  color: #ed4b9e;
`
