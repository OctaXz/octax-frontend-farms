import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap-libs/uikit'


const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img` 
   max-width: 100%;
    margin-left: auto;
    margin-right: auto;
     display: block;
       border-radius: 5%;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const AirdropCard = () => {


  return (
      <CardBody>
        <CardImage src="/images/airdrop.png" />

      </CardBody>
  )
}

export default AirdropCard
