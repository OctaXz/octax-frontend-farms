import React, { useCallback, useState } from 'react'

import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'

import Page from 'components/layout/Page'
import useI18n from "../../hooks/useI18n";
import AirDropCard from "./components/AirdropCard";

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

const Airdrop: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'OctaX Finance')}
        </Heading>
        <Heading font-size="xl">Airdrop Distribution

        </Heading>
          <div>
              <Heading>
                  <Text>According to the current OctaX configuration, </Text>
                  <Text>10% of all transaction fees in any pool  </Text>

                  <Text>will be distributed proportionally to the liquidity providers in the pool.</Text>

                  <Text>In OctaX, 1% goes directly to active liquidity providers,</Text>
                  <Text>and the remaining 4% will be exchanged for OctaX (obviously through OctaX swap)</Text>
                  <Text>and distributed to OctaX token holders over 1 month.</Text>
              </Heading>
          </div>
      </Hero>
      <div>
            <AirDropCard/>
      </div>
    </Page>
  )
}

export default Airdrop