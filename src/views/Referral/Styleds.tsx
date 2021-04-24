import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`
export const BottomGrouping = styled.div`
  margin-top: 1rem;
`
export const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 16px;
  min-height: calc(100vh - 152px);
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;

  background-image: url('/static/media/bg.bfd323f2.png');
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
`