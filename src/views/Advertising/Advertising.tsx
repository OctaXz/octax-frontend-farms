import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import useI18n from "../../hooks/useI18n";


const Hero = styled.div`
  align-items: center;
  background-image: url('/images/net/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin: auto;
  margin-bottom: 10px;
  padding-top: 116px;
  text-align: left;

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
const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.textSubtle};
  height: 1px;
  margin: 0 auto 16px;
  width: 100%;
`


const DivCard =  styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
`



const Advertising: React.FC = () => {
  const TranslateString = useI18n()
  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="20px" color="secondary">
          {TranslateString(576, 'OctaX Finance')}
        </Heading>

        <Heading mb="2px"  style={{fontSize:36}}>Advertising
        </Heading>
      </Hero>
      <Heading as="h1">
          <Text style={{fontSize:20}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Just click on the clips to watch ads, you will earn money watching clips 0.08 OctaX and we will luanch it soon.</Text>
      </Heading>
      <Divider/>
      <DivCard>
      <img src="/images/ads/advertising_plot.jpg" alt="advertising plot"   />
      </DivCard>
    </Page>
  )
}

export default Advertising