import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Heading, Text, Flex } from '@pancakeswap-libs/uikit'

interface PageHeaderProps {
    title: ReactNode
    description: ReactNode
}

const StyledPageHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 24px;
`

const Details = styled.div`
  flex: 1;
`

const PageHeader = ({ title, description }: PageHeaderProps) => {

    return (
        <StyledPageHeader>
            <Flex alignItems="center">
                <Details>
                    <Heading mb="8px">{title}</Heading>
                    {description && (
                        <Text color="textSubtle" fontSize="14px">
                            {description}
                        </Text>
                    )}
                </Details>
            </Flex>
        </StyledPageHeader>
    )
}

export default PageHeader