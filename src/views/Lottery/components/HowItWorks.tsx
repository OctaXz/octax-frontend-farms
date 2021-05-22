import React from 'react'
import styled from 'styled-components'
import { Text, Heading, Link, Image,CardBody,Card } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const StyledHeading = styled(Heading)`
  margin: 16px 0;
`

const StyledImage = styled(Image)`
  align-self: center;
`

const StyledLink = styled(Link)`
  align-self: center;
  margin-top: 16px;
`

const HowItWorks = () => {
  const TranslateString = useI18n()

  return (
    <StyledCakeStats>
      <CardBody>
      {/* <StyledImage src="/images/pancake-lottery-bunny.png" alt="lottery bunny" width={163} height={140} /> */}
      <StyledHeading size="lg" as="h3" color="secondary">
        {TranslateString(999, 'How it works')}
      </StyledHeading>
      <Text fontSize="16px">
        {TranslateString(
          999,
          'Spend BUSD to buy tickets, contributing to the lottery pot. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their exact order!',
        )}
      </Text>
      <StyledLink href="https://octax.gitbook.io/octax/products/lottery/lottery">Read more</StyledLink>
      </CardBody>
    </StyledCakeStats>
  )
}

export default HowItWorks
